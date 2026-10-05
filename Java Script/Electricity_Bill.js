// Q2. Electricity Bill
// Write a JavaScript program that takes the number of electricity units consumed and calculates the bill according to these rules:

// Up to 50 units → Rs. 5 per unit
// 51–100 units → Rs. 7 per unit
// 101–200 units → Rs. 10 per unit
// Above 200 units → Rs. 12 per unit
// Use if...else if...else.

let units = 120;
let bill;

if (units <= 50) {
    bill = units * 5;
} else if (units <= 100) {
    bill = units * 7;
} else if (units <= 200) {
    bill = units * 10;
} else {
    bill = units * 12;
}

console.log("Electricity Units:", units);
console.log("Electricity Bill: Rs.", bill);