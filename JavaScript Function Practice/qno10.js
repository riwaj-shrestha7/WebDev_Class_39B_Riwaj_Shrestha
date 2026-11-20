const add = (a, b) => {
    return a + b;
};


const subtract = (a, b) => {
    return a - b;
};


const multiply = (a, b) => {
    return a * b;
};


const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};


const calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};


console.log("Addition:", calculate(20, 10, add));

console.log("Subtraction:", calculate(20, 10, subtract));

console.log("Multiplication:", calculate(20, 10, multiply));

console.log("Division:", calculate(20, 10, divide));

console.log("Division by zero:", calculate(20, 0, divide));
