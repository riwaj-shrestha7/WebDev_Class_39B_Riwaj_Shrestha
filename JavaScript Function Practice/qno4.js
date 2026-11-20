const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    } else if (age <= 17) {
        return 200;
    } else if (age <= 59) {
        return 300;
    } else {
        return 200;
    }
};

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total - (total * 10 / 100);
    } else {
        return total;
    }
};

const bookTicket = (name, age, quantity, callback) => {
    const price = getTicketPrice(age);

    const total = calculateTotal(price, quantity);

    const finalAmount = callback(total, quantity);

    const discount = total - finalAmount;

    console.log("Customer:", name);
    console.log("Age:", age);
    console.log("Tickets:", quantity);
    console.log("Total Before Discount: Rs.", total);
    console.log("Discount: Rs.", discount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Hari", 25, 5, applyDiscount);
