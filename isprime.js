function isPrime() {
    const prompt = require('prompt-sync')();
    var number = parseInt(prompt('Enter a number '));
    let divisor = 2;
    while (divisor < number) {
        if (number % divisor === 0) {
            console.log("Number is not prime number");
            return;
        }
        divisor++;
    }
    console.log("Number is a prime number");

}
isPrime();