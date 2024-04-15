const findHighestValue = (array) => {
    if (array.length === 0) {
      return undefined;
    }

    const highestValue = Math.max(...array);
    
    return highestValue;
  };
  
  const prompt = require('prompt-sync')();
  const array = [];
    do {
        input = prompt("Enter a value to add to the array (or 's' to finish): ");
        if (input !== 's') {
            array.push(input);
        }
    } while (input !== 's');
    console.log("Highest value:", findHighestValue(array));


  