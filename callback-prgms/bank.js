function BankAccount(acNo, balance) {
    this.acNo = acNo;
    this.balance = balance;
}

function checkLoanEligibility(acNo, balance, callback) {
    var isEligible = balance >= 5000;

    callback(isEligible);
}

function displayLoanEligibilityMessage(isEligible) {
    if (isEligible) {
        console.log("Eligible for a loan.");
    } else {
        console.log("Not eligible for a loan.");
    }
}

const prompt = require('prompt-sync')();
var acNo = prompt("Enter account number:");
var balance = parseFloat(prompt("Enter balance:"));

var customerAccount = new BankAccount(acNo, balance);

checkLoanEligibility(customerAccount.acNo, customerAccount.balance, displayLoanEligibilityMessage);
