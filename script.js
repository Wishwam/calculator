
//  references to the buttons and the input box
const inputBox = document.getElementById("inputBox");
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
const percentBtn = document.getElementById("percent");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const equalsBtn = document.getElementById("equals");
const sqrtBtn = document.getElementById("sqrt");
const decimalBtn = document.getElementById("decimal");
const zeroBtn = document.getElementById("zero");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");

let currentInput = "";

// Function to update the input box display
function updateDisplay() {
  inputBox.value = currentInput || "0";
}

// Adding number buttons event listeners
sevenBtn.addEventListener("click", () => {
  currentInput += "7";
  updateDisplay();
});

eightBtn.addEventListener("click", () => {
  currentInput += "8";
  updateDisplay();
});

nineBtn.addEventListener("click", () => {
  currentInput += "9";
  updateDisplay();
});

fourBtn.addEventListener("click", () => {
  currentInput += "4";
  updateDisplay();
});

fiveBtn.addEventListener("click", () => {
  currentInput += "5";
  updateDisplay();
});

sixBtn.addEventListener("click", () => {
  currentInput += "6";
  updateDisplay();
});

oneBtn.addEventListener("click", () => {
  currentInput += "1";
  updateDisplay();
});

twoBtn.addEventListener("click", () => {
  currentInput += "2";
  updateDisplay();
});

threeBtn.addEventListener("click", () => {
  currentInput += "3";
  updateDisplay();
});

zeroBtn.addEventListener("click", () => {
  currentInput += "0";
  updateDisplay();
});

// Decimal point
decimalBtn.addEventListener("click", () => {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
});

// Operator buttons
plusBtn.addEventListener("click", () => {
  currentInput += "+";
  updateDisplay();
});

minusBtn.addEventListener("click", () => {
  currentInput += "-";
  updateDisplay();
});

multiplyBtn.addEventListener("click", () => {
  currentInput += "*";
  updateDisplay();
});

divideBtn.addEventListener("click", () => {
  currentInput += "/";
  updateDisplay();
});

// Square Root button
sqrtBtn.addEventListener("click", () => {
  // Only calculate the square root if the input is a valid number
  let number = parseFloat(currentInput);
  if (!isNaN(number) && number >= 0) {
    currentInput = Math.sqrt(number).toString();
    updateDisplay();
  } else {
    currentInput = "Error"; // Handle invalid input (e.g., negative numbers)
    updateDisplay();
  }
});

// Clear the input
clearBtn.addEventListener("click", () => {
  currentInput = "";
  updateDisplay();
});

// Delete the last character
deleteBtn.addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
});

// Equal button to calculate the result
equalsBtn.addEventListener("click", () => {
  try {
    // Use eval to calculate the result of the mathematical expression
    currentInput = eval(currentInput).toString(); // eval evaluates the string as a math expression
  } catch (error) {
    currentInput = "Error"; // Display error if evaluation fails
  }
  updateDisplay();
});
