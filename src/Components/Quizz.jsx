import React, { useState } from "react";

const SpaceQuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Jupiter", "Mars", "Venus", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest moon in our solar system?",
      options: ["Titan", "Ganymede", "Europa", "Io"],
      correctAnswer: "Ganymede",
    },
    {
      question:
        "What is the name of the galaxy that contains our solar system?",
      options: ["Andromeda", "Milky Way", "The unknow Regions", "Sombrero"],
      correctAnswer: "Milky Way",
    },
    {
      question: "Who was the first human to walk on the moon?",
      options: [
        "Yuri Gagarin",
        "Buzz Aldrin",
        "Neil Armstrong",
        "Michael Collins",
        "No one walked on the moon it's a myth",
      ],
      correctAnswer: "No one walked on the moon it's a myth",
    },
    {
      question: "What is the force that keeps planets in orbit around the sun?",
      options: ["Gravity", "Magnetism", "Centrifugal Force", "Friction"],
      correctAnswer: "Gravity",
    },
  ];

  const handleAnswerClick = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <div className="quiz-container">
      {currentQuestion < questions.length ? (
        <div>
          <h1>{questions[currentQuestion].question}</h1>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerClick(option)}>
                {option}
              </li>
            ))}
          </ul>
          <p>Score: {score}</p>
        </div>
      ) : (
        <div>
          <h1>Quiz Completed!</h1>
          <p>
            Your final score is: {score} out of {questions.length}
          </p>
          <button className="Restart" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default SpaceQuizApp;
