// selecting elements
const submitButton = document.getElementById("submit-answer");
const feedback = document.getElementById("feedback");

// checkAnswer function
const checkAnswer = function () {
  const correctAnswer = 4;

  // get value of the clicked element and convert a number using the (+) operator
  const userAnswer = +document.querySelector('input[name="quiz"]:checked').value;

  // correctAnswer === userAnswer
  if (userAnswer === correctAnswer) feedback.textContent = "Correct! Well done.";

  // correctAnswer !== userAnswer
  if (userAnswer !== correctAnswer) feedback.textContent = "That's incorrect. Try again!";
};

submitButton.addEventListener("click", checkAnswer);
