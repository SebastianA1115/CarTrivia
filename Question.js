import React, { useState } from "react";

function Question({ question, answers, onAnswerSelected }) {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  function handleAnswerClick(index) {
    setSelectedAnswerIndex(index);
    onAnswerSelected(index);
  }

  return (
    <div>
      <h1>{question}</h1>
      <ul>
        {answers.map((answer, index) => (
          <li
            key={index}
            onClick={() => handleAnswerClick(index)}
            className={index === selectedAnswerIndex ? "selected" : ""}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
