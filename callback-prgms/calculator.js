const add = (a, b, callback) => callback(a + b);

const subtract = (a, b, callback) => callback(a - b);

const multiply = (a, b, callback) => callback(a * b);

const divide = (a, b, callback) => {
  if (b === 0) {
    callback("Error!");
  } else {
    callback(a / b);
  }
};

const calculate = (operation, a, b, callback) => {
  switch (operation) {
    case '+':
      add(a, b, callback);
      break;
    case '-':
      subtract(a, b, callback);
      break;
    case '*':
      multiply(a, b, callback);
      break;
    case '/':
      divide(a, b, callback);
      break;
    default:
      callback("Invalid operation");
  }
};

const displayResult = (result) => {
  console.log(`${a} ${operation} ${b} =`, result);
};

const prompt = require('prompt-sync')();
a = parseFloat(prompt("Enter a number: "));
b = parseFloat(prompt("Enter an another number: "));
operation = prompt("Enter the operator (+, -, *, /): ");

calculate(operation, a, b, displayResult);  