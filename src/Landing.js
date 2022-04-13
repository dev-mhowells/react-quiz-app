import React from "react";

export default function Landing(props) {
  
    const landingStyles = {
    display: props.showLanding ? "flex" : "none",
  };

  return (
    <div className="landing" style={landingStyles}>
      <h1 className="title">Quizzical</h1>
      <p className="description">Some description if needed</p>
      <button className="start-btn" onClick={props.startQuiz}>
        Start quiz
      </button>
    </div>
  );
}
