class BankAccount {
    constructor(acNo, balance) {
        this.acNo = acNo;
        this.balance = balance;
    }
}

function isLoanEligible(account, callback) {
    return callback(account);
}

function checkBalanceForLoan(account) {
    return account.balance >= 5000;
}

function promptForBankAccount() {
    const prompt = require('prompt-sync')();
    const acNo = prompt("Enter account number:");
    const balance = parseFloat(prompt("Enter account balance:"));
    return new BankAccount(acNo, balance);
}

function main() {
    const account = promptForBankAccount();

    const eligibleForLoan = isLoanEligible(account, checkBalanceForLoan);

    if (eligibleForLoan) {
        console.log("Eligible for loan.");
    } else {
        console.log("Not eligible for loan.");
    }
}

main();
