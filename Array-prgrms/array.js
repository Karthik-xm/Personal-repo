function array() {
    const array = [];
    let input;
    const prompt = require('prompt-sync')();
    do {
        input = prompt("Enter a value to add to the array (or 's' to finish): ");
        if (input !== 's') {
            array.push(input);
        }
    } while (input !== 's');

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log("Size of array: ", array.length)
    input = prompt("Enter a value to add at the beginning to the array (or 's' to finish): ");
    array.unshift(input);

    console.log("Updated array: ")
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    
    input = prompt("Which element you want to remove from the array ('f' for first 'l' for last): ");
    if(input == 'f') {
        array.splice(0, 1);
        console.log("After removing first element: ")
    } 
     if(input == 'l'){
        array.pop()
        console.log("After removing last element: ")
    }
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

}
array();