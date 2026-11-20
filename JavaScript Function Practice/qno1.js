const calculateBill = (units) => {
    let bill = 0;

    if (units <= 20) {
        bill = units * 5;
    } else if (units <= 50) {
        bill = (20 * 5) + ((units - 20) * 7);
    } else {
        bill = (20 * 5) + (30 * 7) + ((units - 50) * 10);
    }

    return bill + 50;
};

const displayBill = (name, units, callback) => {
    const totalBill = callback(units);

    console.log("Customer:", name);
    console.log("Units Consumed:", units);
    console.log("Total Electricity Bill: Rs.", totalBill);
};

displayBill("Ram", 65, calculateBill);
