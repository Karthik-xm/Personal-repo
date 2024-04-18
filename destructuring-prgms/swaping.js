const swap =(a,b) => {

console.log("Before swapping:");
console.log("a:", a);
console.log("b:", b);

[a, b] = [b, a];

console.log("After swapping:");
console.log("a:", a);
console.log("b:", b);
}

const prompt = require('prompt-sync')();
a = prompt("Enter a number: ");
b = prompt("Enter an another number: ");
swap(a,b)

