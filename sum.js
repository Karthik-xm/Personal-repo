function sum() {
    const prompt = require('prompt-sync')();
    var n = parseInt(prompt('Enter value of n: '));
    var sum =0;
    for(let i = 0; i <=n; i++)
    {
        sum = sum +i;
    }
    console.log("Output for the operation: ", sum);
}
sum();