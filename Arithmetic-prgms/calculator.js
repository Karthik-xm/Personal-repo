function calculator() {
    const prompt = require('prompt-sync')();
    var operator = prompt("Enter the operator (+, -, *, /): ");
    var num1 = parseInt(prompt('Enter first number: '));
    var num2 = parseInt(prompt('Enter second number: '));
    var output;
    switch (operator) {
        case '+':
            output = num1 + num2;
            break;
        case '-':
            output = num1 - num2;
            break;
        case '%':
            output = num1 % num2;
            break;
        case '*':
            output = num1 * num2;
            break;
        case '/':
            output = num1 / num2;
            break;
        default:
            output = "Invalid operator";

    }
    console.log("operator  "+ operator + " Output " +output);
}
calculator();