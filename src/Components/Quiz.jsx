import React, { useState } from "react";
import "../CSS/Quiz.css";
import questions from "./questions.js";
import Result from "./Result.jsx";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo-new.png";
import Github from "../assets/github.png";
import LinkedIn from "../assets/linkedin.png";
import CodePen from "../assets/codepen.png";
import Light from "../assets/light.png";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [highlited, setHighlited] = useState(false);

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
    navigate(-1)
  }

  return (
    <>
      <header>
        <img className="logo" src={Logo} alt="" />
        <div className="author">
          <h4>Follow the Author</h4>
          <img onClick={github} src={Github} alt="" />
          <img onClick={codepen} src={CodePen} alt="" />
          <img onClick={linkedin} src={LinkedIn} alt="" />
        </div>
        <div className="toggle">
          <img src={Light} alt="" />
        </div>
      </header>

      {showResult ? (
        <Result score={score} totalScore={questions.length} tryAgain={reset} />
      ) : (
        <section>
          <h1 className="question-head">Question</h1>
          <div className="quiz">
            <div className="left">
              <div className="question">
                <p>
                  Question <span>{currentQuestion + 1}</span> of{" "}
                  {questions.length}
                </p>
                <h2 className={highlited ? "highlited" : ""}>
                  {questions[currentQuestion].text}
                </h2>
              </div>
              <div className="buttons">
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
              <div className="option-area">
                <h1>Options</h1>
                {questions[currentQuestion].options.map((option) => (
                  <div
                    key={option.id}
                    className="options"
                    onClick={() => handleOptionClick(option.text)}
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
