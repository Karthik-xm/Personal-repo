function sum(){  

    const prompt = require('prompt-sync')();
    var w = parseInt(prompt('Enter first number: '));
    var x = parseInt(prompt('Enter second number: '));
    var y = parseInt(prompt('Enter third number: '));
    max = (w > x) ? 
    (w > y ? w : y) : 
    (x > y ? x : y);
    console.log("Largest number: ", max)
   } 
   sum();