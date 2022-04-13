import React from "react";
import Landing from "./Landing";
import Quiz from "./Quiz";

// async function getData() {
//   const res = await fetch(
//     "https://opentdb.com/api.php?amount=5&category=20&difficulty=easy&type=multiple"
//   );
//   const data = await res.json();
//   console.log(data);
// }
// getData();

export default function App() {
  const [showLanding, setShowLanding] = React.useState(true);

  function startQuiz() {
    setShowLanding(false);
  }

  return (
    <div className="app-container">
      <Landing startQuiz={startQuiz} showLanding={showLanding} />
      <Quiz showLanding={showLanding} />
    </div>
  );
}
