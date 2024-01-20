import React, { useState, useEffect } from "react";
import "../CSS/Quiz.css";
import questions from "./questions.js";
import Result from "./Result.jsx";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo-new.png";
import LogoLight from "../assets/logo-white.png";
import Github from "../assets/github.png";
import GithubLight from "../assets/github-light.png";
import LinkedIn from "../assets/linkedin.png";
import LinkedInLight from "../assets/linkedin-light.png";
import CodePen from "../assets/codepen.png";
import CodePenLight from "../assets/codepen-light.png";
import Light from "../assets/light.png";
import Moon from "../assets/moon.png";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [highlited, setHighlited] = useState(false);
  const [dark, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const navigate = useNavigate();

  const github = () => {
    window.open("https://github.com/prasanthj2023", "_blank");
  };

  const codepen = () => {
    window.open("https://codepen.io/Prasanth-J", "_blank");
  };

  const linkedin = () => {
    window.open(
      "https://www.linkedin.com/in/prasanth-j-b34051284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "_blank"
    );
  };

  const handleOptionClick = (selectedOption) => {
    const currentQuestionData = questions[currentQuestion];
    const selectedOptionObject = currentQuestionData.options.find(
      (option) => option.text === selectedOption
    );

    if (selectedOptionObject && selectedOptionObject.isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
  };

  const quitQuiz = () => {
    navigate(-1);
  };

  const headerStyle = {
    backgroundColor: dark ? "white" : "#191919",
  };

  const authorStyle = {
    border: dark ? "2px solid black" : "2px solid white",
  };

  const textStyle = {
    color: dark ? "black" : "black",
  };

  const textOtherStyle = {
    color: dark ? "black" : "white",
  };

  const gridStyle = {
    backgroundColor: dark ? "white" : "#191919",
    color: dark ? "black" : "white",
  };

  const rightGridStyle = {
    backgroundColor: dark ? "white" : "#191919",
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = !prevTheme;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.className = dark ? "dark-theme" : "light-theme";
  }, [dark]);

  return (
    <>
      <header style={headerStyle}>
        <img className="logo" src={dark == true ? Logo : LogoLight} alt="" />
        <div className="author" style={authorStyle}>
          <h4 style={textOtherStyle}>Follow the Author</h4>
          <img
            onClick={github}
            src={dark == true ? Github : GithubLight}
            alt=""
          />
          <img
            onClick={codepen}
            src={dark == true ? CodePen : CodePenLight}
            alt=""
          />
          <img
            onClick={linkedin}
            src={dark == true ? LinkedIn : LinkedInLight}
            alt=""
          />
        </div>
        <div onClick={toggleTheme} className="toggle">
          <img src={dark == true ? Moon : Light} alt="" />
        </div>
      </header>

      {showResult ? (
        <Result score={score} totalScore={questions.length} tryAgain={reset} />
      ) : (
        <section>
          <h1 className="question-head">Question</h1>
          <div className="quiz">
            <div className="left">
              <div className="question" style={gridStyle}>
                <p>
                  Question <span>{currentQuestion + 1}</span> of{" "}
                  {questions.length}
                </p>
                <h2 className={highlited ? "highlited" : ""}>
                  {questions[currentQuestion].text}
                </h2>
              </div>
              <div className="buttons" style={gridStyle}>
                <button
                  className="previous"
                  onClick={() => {
                    setHighlited(true);
                  }}
                >
                  Highlight
                </button>
                <button className="quit" onClick={quitQuiz}>
                  Quit
                </button>
                <button
                  className="next"
                  onClick={() => {
                    setHighlited(false);
                  }}
                >
                  De-Highlight
                </button>
              </div>
            </div>
            <div className="right">
              <div className="option-area" style={rightGridStyle}>
                <h1 style={textOtherStyle}>Options</h1>
                {questions[currentQuestion].options.map((option) => (
                  <div
                    key={option.id}
                    className="options"
                    onClick={() => handleOptionClick(option.text)}
                    style={textStyle}
                  >
                    {option.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Quiz;
