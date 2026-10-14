function add(a, b) {
    console.log("The add function is working!");
}

function subtract(a, b) {
    console.log("The subtract function is working!");
}

function multiply(a, b) {
    console.log("The multiply function is working!");
}

function divide(a, b) {
    console.log("The divide function is working!");
}

function operate(operator, a, b) {
    if (operator === 'add') { add(a, b) }
    else if (operator === 'subtract') { subtract(a, b) }
    else if (operator === 'multiply') { multiply(a, b) }
    else if (operator === 'divide') { divide(a, b) }
    else { console.log('Unknown operator') }
}

let firstNumber = 0;
let operator = "add";
let secondNumber = 0;

add(1,2);
subtract(1,2);
multiply(1,2);
divide(1,2);