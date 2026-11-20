const validateWithdrawal = (amount, balance) => {
    if (amount <= 0) {
        return false;
    } else if (amount % 500 !== 0) {
        return false;
    } else if (amount + 25 > balance) {
        return false;
    } else {
        return true;
    }
};

const withdrawMoney = (amount, balance, callback) => {
    console.log("Account Balance: Rs.", balance);
    console.log("Withdrawal Amount: Rs.", amount);

    if (callback(amount, balance)) {
        const fee = 25;
        const remainingBalance = balance - amount - fee;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs.", fee);
        console.log("Remaining Balance: Rs.", remainingBalance);

        return remainingBalance;
    } else {
        console.log("Withdrawal Failed!");
        console.log("Invalid amount or insufficient balance.");
        console.log("Remaining Balance: Rs.", balance);

        return balance;
    }
};

withdrawMoney(3000, 10000, validateWithdrawal);
