import React, { useEffect } from "react";
import "../CSS/Result.css";
import { useNavigate } from "react-router-dom";

function Result(props) {
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="main-area">
        <h1>Result</h1>
        <div className="result-area">
          <h2>Here is your Final score</h2>
          <p id="score">
            {props.score}
            <span>/{props.totalScore}</span>
          </p>
        </div>
        <div className="buttons-area">
          <button className="restart" onClick={props.tryAgain}>
            Restart
          </button>
          <button className="return" onClick={returnToHome}>
            Return to Home
          </button>
        </div>
      </div>
    </>
  );
}

export default Result;
