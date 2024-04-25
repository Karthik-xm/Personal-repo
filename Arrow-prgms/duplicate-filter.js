
const compareDates = (missedCalls) => {

    const uniqueMissedCalls = new Set(missedCalls);
    const uniqueMissedCallsArray = [...uniqueMissedCalls];

    console.log("Names without duplicates: ", uniqueMissedCallsArray);
}

const prompt = require('prompt-sync')();
const missedCalls = new Set();
do {
    input = prompt("Enter a name to add to the set (or 's' to finish): ");
    if (input !== 's') {
        missedCalls.add(input);
    }
} while (input !== 's');

compareDates(missedCalls)
