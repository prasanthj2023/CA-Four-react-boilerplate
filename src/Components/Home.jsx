import React, { useState } from "react";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo-new.png";
import LogoWhite from "../assets/logo-white.png";
import Github from "../assets/github.png";
import GithubLight from "../assets/github-light.png";
import LinkedIn from "../assets/linkedin.png";
import LinkedInLight from "../assets/linkedin-light.png";
import CodePen from "../assets/codepen.png";
import CodePenLight from "../assets/codepen-light.png";
import Light from "../assets/light.png";
import Moon from "../assets/moon.png";

function Home() {

  const [dark, setTheme] = useState(true);
  const navigate = useNavigate();

  const headerStyle = {
    backgroundColor:dark ? "white" : "rgb(57, 57, 57)"
  }

  const authorStyle = {
    border:dark ? "2px solid black" : "2px solid white"
  }

  const textStyle = {
    color:dark ? "black" : "white"
  }

  const github = () => {
    window.open("https://github.com/prasanthj2023", "_blank");
  };

  const codepen = () => {
    window.open("https://codepen.io/Prasanth-J", "_blank");
  };

  const linkedin = () => {
    window.open("https://www.linkedin.com/in/prasanth-j-b34051284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank");
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <>
      <header style={headerStyle}>
        <img className="logo" src={dark == true ? Logo : LogoWhite} alt="" />
        <div className="author" style={authorStyle}>
          <h4 style={textStyle}>Follow the Author</h4>
          <img onClick={github} src={dark == true ? Github : GithubLight} alt="" />
          <img onClick={codepen} src={dark == true ? CodePen : CodePenLight} alt="" />
          <img onClick={linkedin} src={dark == true ? LinkedIn : LinkedInLight} alt="" />
        </div>
        <div onClick={toggleTheme} className="toggle">
          <img src={dark == true ? Moon : Light} alt="" />
        </div>
      </header>

      <div className="main">
        <img src={dark == true ? Logo : LogoWhite} alt="" />
        <button onClick={startQuiz}>Start Quiz?</button>
      </div>
    </>
  );
}

export default Home;
