import React from "react";
import Question from "./Question";

export default function Quiz(props) {
  const [quizData, setQuizData] = React.useState([]);

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=20&difficulty=easy&type=multiple"
      );
      const data = await res.json();
      setQuizData(data.results);
    }
    getData();
  }, []);

  console.log(quizData);

  const quizQA = quizData.map((qa) => (
    <Question allData={qa} question={qa.question} key={qa.question} />
  ));

  const quizStyles = {
    display: props.showLanding ? "none" : "flex",
  };

  return (
    <div className="quiz-container" style={quizStyles}>
      {quizQA}
      <button className="check-btn">Check answers</button>
    </div>
  );
}
