import React from "react";

function Results(props) {
  const { score, totalQuestions } = props;

  return (
    <div>
      <h1>Results</h1>
      <p>
        Your score: {score}/{totalQuestions}
      </p>
    </div>
  );
}

export default Results;
