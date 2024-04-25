const numberSet = new Set()
const prompt = require('prompt-sync')();
    do {
        input = prompt("Enter a value to add to the set (or 's' to finish): ");
        if (input !== 's') {
            numberSet.add(input);
        }
    } while (input !== 's');


for (const num of numberSet) {
  if (num % 2 !== 0) { 
    numberSet.delete(num);
  }
}

console.log("Set after removing odd numbers:");
for (const num of numberSet) {
  console.log(num);
}
