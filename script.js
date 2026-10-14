function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b === 0 ? "Error" : a / b;
}

function operate(operator, a, b) {
    if (operator === 'add') { return add(a, b) }
    else if (operator === 'subtract') { return subtract(a, b) }
    else if (operator === 'multiply') { return multiply(a, b) }
    else if (operator === 'divide') { return divide(a, b) }
    else { return 'Error' }
}

let firstNumber = null;
let operator = null;
let secondNumber = null;
let currentInput = "";

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'Clear') {
            firstNumber = null;
            operator = null;
            secondNumber = null;
            currentInput = "";
            display.innerText = "0";
            return;
        }

        if (value === '=') {
            if (firstNumber !== null && operator !== null && secondNumber !== null) {
                const result = operate(operator, firstNumber, secondNumber);
                display.innerText = result;
                firstNumber = result;
                operator = null;
                secondNumber = null;
                currentInput = "";
            }
            return;
        }

        if (['+', '-', '×', '÷'].includes(value)) {
            firstNumber = parseFloat(display.innerText);
            operator = value === '+' ? 'add' : value === '-' ? 'subtract' : value === '×' ? 'multiply' : 'divide';
            secondNumber = null;
            currentInput = "";
            return;
        }

        // Digit or decimal
        currentInput += value;
        display.innerText = currentInput;

        if (operator !== null) {
            secondNumber = parseFloat(currentInput);
        }
    });
});