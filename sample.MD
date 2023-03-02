import React, { useState } from "react";
import data from "./sample_data.json";
import Question from "./components/Question";


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = data.questions[currentQuestionIndex];

  function handleAnswerSelection(answerIndex) {
    // check if the selected answer is correct
    const isCorrect = answerIndex === currentQuestion.correct_index;
    // update state to move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <div className="App">
      <Question
        question={currentQuestion.text}
        answers={currentQuestion.answers}
        onAnswerSelected={handleAnswerSelection}
      />
    </div>
  );
}

export default App;
