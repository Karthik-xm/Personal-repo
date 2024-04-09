function inputValue() {
    const prompt = require('prompt-sync')();
    input = prompt("Enter a sentance: ");
    removeSpace(input);
    extractHai(input);
    checkHello(input);
}

function removeSpace(str) {
    str = str.split(" ").join("");
    console.log("sentence after removing whitespace: ", str);
}

function extractHai(str) {
    const prompt = require('prompt-sync')();
    input = prompt("Enter a word to find: ");
    if (str.includes(input)) {
        console.log(input, " is present");
    }
}

function checkHello(str) {
if (str.includes('hello')) {
    console.log("hello is present in: ", str);
}
}
inputValue()