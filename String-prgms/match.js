function usingMatch() {
    const prompt = require('prompt-sync')();
    sentence = prompt("Enter a sentance: ");
    searchString = prompt("Enter a word to search: ");

    const regex = new RegExp(searchString, "gi");
    const matches = sentence.match(regex);

    const occurrenceCount = matches ? matches.length : 0;

    console.log(`Occurrences found using match: ${occurrenceCount}`);
    usingTest(sentence, searchString);
    replaceString(sentence);
    replaceAllAccurance(sentence);

}
function usingTest(sentence, wordToFind) {
    const regex = new RegExp("\\b" + wordToFind + "\\b", "i");
    const isMatched = regex.test(sentence);

    if (isMatched) {
        console.log(`The word "${wordToFind}" exists in the sentence.`);
    } else {
        console.log(`The word "${wordToFind}" does not exist in the sentence.`);
    }
}
function replaceString(sentence) {
    const prompt = require('prompt-sync')();
    stringToReplace = prompt("Which word you want to replace: ");
    replacementString = prompt("Enter a word to replace: ");
    const modifiedSentence = sentence.replace(stringToReplace, replacementString);
    console.log("Modified string with replacement: ", modifiedSentence);
}
function replaceAllAccurance(sentence) {
    const modifiedSentence = sentence.replace(new RegExp(stringToReplace, 'g'), replacementString);
console.log("Modified string with replaced all occurence: ", modifiedSentence);
}
usingMatch();