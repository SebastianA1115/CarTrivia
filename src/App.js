import React, { useState } from "react";
import data from "./sample_data.json";
import Question from "./components/Question";
import Results from "./components/Results";

function App() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === data[currentQuestionNumber].correct_answer) {
      setScore(score + 1);
    }
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  return (
    <div className="App">
      {currentQuestionNumber === data.length ? (
        <Results score={score} totalQuestions={data.length} />
      ) : (
        <Question
          question={data[currentQuestionNumber].text}
          answers={data[currentQuestionNumber].answers}
          onAnswerSelected={handleAnswerSelection}
        />
      )}
    </div>
  );
}

export default App;
