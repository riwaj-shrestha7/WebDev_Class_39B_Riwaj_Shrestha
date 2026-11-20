const getFoodPrice = (foodName) => {
    const foodPrices = {
        burger: 250,
        pizza: 500,
        momo: 150,
        chowmein: 180
    };

    return foodPrices[foodName.toLowerCase()] || 0;
};

const calculateServiceCharge = (total) => {
    return total * 5 / 100;
};

const calculateOrder = (foodName, quantity, callback) => {
    const price = callback(foodName);

    if (price === 0 || quantity <= 0) {
        return null;
    }

    return price * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    const foodAmount = callback(foodName, quantity, getFoodPrice);

    if (foodAmount === null) {
        console.log("Invalid food item or quantity!");
        return;
    }

    const serviceCharge = calculateServiceCharge(foodAmount);
    const finalAmount = foodAmount + serviceCharge;

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);
