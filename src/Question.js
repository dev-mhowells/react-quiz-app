import React from "react";

export default function Question(prop) {
  return (
    <div className="qa-pair">
      <h2>{prop.question}</h2>
      <div className="answer-box">
        <button className="answer">answer</button>
        <button className="answer">answer</button>
        <button className="answer">answer</button>
        <button className="answer">answer</button>
      </div>
    </div>
  );
}
