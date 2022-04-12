import React from "react";

export default function Question(props) {
  console.log("testing", props);

  return (
    <div className="qa-pair">
      <h2>{props.question}</h2>
      <div className="answer-box">
        <button className="answer">{props.allData["correct_answer"]}</button>
        <button className="answer">answer</button>
        <button className="answer">answer</button>
        <button className="answer">answer</button>
      </div>
    </div>
  );
}
