//use of external module
const calculator = require('../my-node-project/calculatorFunction.js');
const swap = (a, b) => {

    console.log('sum of numbers: ', calculator)
    console.log(calculator('+', a, b));

    console.log("Before swapping:");
    console.log("a:", a);
    console.log("b:", b);

    [a, b] = [b, a];

    console.log("After swapping:");
    console.log("a:", a);
    console.log("b:", b);
}

const prompt = require('prompt-sync')();
a = parseInt(prompt("Enter a number: "));
b = parseInt(prompt("Enter an another number: "));
swap(a, b)

