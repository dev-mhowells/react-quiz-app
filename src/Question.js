import React from "react";

export default function Question(props) {
  const allAnswers = [
    ...props.allData["incorrect_answers"],
    props.allData["correct_answer"],
  ];

  const shuffledAnswers = allAnswers.sort((a, b) => 0.5 - Math.random());

  const answerObjects = shuffledAnswers.map((answer) => ({
    value: answer,
    selected: false,
    correct: false,
  }));

  const [answerDisplay, setAnswerDisplay] = React.useState(answerObjects);

  function saveAnswer2(e) {
    console.log(e.target.outerText);
    setAnswerDisplay((prevAnswerDisplay) =>
      prevAnswerDisplay.map((answer) => ({
        ...answer,
        selected:
          answer.value === e.target.outerText ? !answer.selected : false,
      }))
    );
    console.log(answerDisplay);
  }

  const displayAnswers = answerDisplay.map((answers) => {
    return (
      <button
        className="answer"
        onClick={saveAnswer2}
        style={{ backgroundColor: answers.selected ? "blue" : "transparent" }}
      >
        {answers.value}
      </button>
    );
  });

  return (
    <div className="qa-pair">
      <h2>{props.question}</h2>
      <div className="answer-box">{displayAnswers}</div>
    </div>
  );
}
