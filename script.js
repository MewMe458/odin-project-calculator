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
    if (b === 0) {
        return "Nice try, genius!";
    }
    return a / b;
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
let isResultDisplayed = false;

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
            isResultDisplayed = false;
            display.innerText = "0";
            return;
        }

        if (value === '=') {
            if (firstNumber !== null && operator !== null && secondNumber !== null) {
                let result = operate(operator, firstNumber, secondNumber);
                
                if (typeof result === 'number') {
                    result = parseFloat(result.toFixed(8));
                }
                
                display.innerText = result;
                firstNumber = result === "Nice try, genius!" ? null : result;
                operator = null;
                secondNumber = null;
                currentInput = "";
                isResultDisplayed = true;
            }
            return;
        }

        if (['+', '-', '×', '÷'].includes(value)) {
            const currentVal = parseFloat(display.innerText);
            
            if (firstNumber !== null && operator !== null && secondNumber !== null) {
                let result = operate(operator, firstNumber, secondNumber);
                if (typeof result === 'number') {
                    result = parseFloat(result.toFixed(8));
                }
                display.innerText = result;
                firstNumber = result === "Nice try, genius!" ? null : result;
            } else if (firstNumber === null && secondNumber === null) {
                firstNumber = currentVal;
            } else {
                firstNumber = currentVal;
            }

            operator = value === '+' ? 'add' : value === '-' ? 'subtract' : value === '×' ? 'multiply' : 'divide';
            secondNumber = null;
            currentInput = "";
            isResultDisplayed = false;
            return;
        }

        // Digit or decimal
        if (value === '.') {
            if (currentInput.includes('.')) return;
        }

        if (isResultDisplayed) {
            currentInput = "";
            isResultDisplayed = false;
        }
        
        currentInput += value;
        display.innerText = currentInput;

        if (operator !== null) {
            secondNumber = parseFloat(currentInput);
        }
    });
});