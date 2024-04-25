
const calculatorFunction =(operator, num1, num2) => {
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
    return output;
}
module.exports = calculatorFunction;

