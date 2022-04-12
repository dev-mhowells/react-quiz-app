import React from "react";

export default function App() {
  const [showLanding, setShowLanding] = React.useState(true);

  function startQuiz() {
    setShowLanding(false);
  }
  console.log(showLanding);

  const styles = {
    display: showLanding ? "flex" : "none",
  };

  return (
    <div className="landing" style={styles}>
      <h1 className="title">Quizzical</h1>
      <p className="description">Some description if needed</p>
      <button className="start-btn" onClick={startQuiz}>
        Start quiz
      </button>
    </div>
  );
}
