const clearInputValues = function () {
  //   clearing input fields
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
};

// add function
const add = function (number1, number2) {
  return number1 + number2;
};

// adding values functionality
document.getElementById("add").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;

  //   call the add function and store it's returned value into result variable
  const result = add(number1, number2);

  //   select the calculation-result element and set it to the result.
  document.getElementById("calculation-result").textContent = result;

  //   call clearInputValues function
  clearInputValues();
});

// subtract function
const subtract = function (number1, number2) {
  return number1 - number2;
};

// subtrating values functionality
document.getElementById("subtract").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;

  //   call the subtract function and store it's returned value into result variable
  const result = subtract(number1, number2);

  //   select the calculation-result element and set it to the result.
  document.getElementById("calculation-result").textContent = result;

  //   call clearInputValues function
  clearInputValues();
});

// multiply function
const multiply = function (number1, number2) {
  return number1 * number2;
};

// multiply values functionality
document.getElementById("multiply").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;

  //   call the multiply function and store it's returned value into result variable
  const result = multiply(number1, number2);

  //   select the calculation-result element and set it to the result.
  document.getElementById("calculation-result").textContent = result;

  //   call clearInputValues function
  clearInputValues();
});

// divide function
const divide = function (number1, number2) {
  return number1 / number2;
};

// division values functionality
document.getElementById("divide").addEventListener("click", function () {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;

  //   call the divide function and store it's returned value into result variable
  const result = divide(number1, number2);

  //   select the calculation-result element and set it to the result.
  document.getElementById("calculation-result").textContent = result.toFixed(2);

  //   call clearInputValues function
  clearInputValues();
});
