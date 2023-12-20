// Starting variables

let firstNumber = '';
let secondNumber = '';
let operatorType = '';
let lastOperator = '';
let operatorFlag = false;
let operatorArray = [];
let operatorTypes = ['add', 'subtract', 'multiply', 'divide'];
let temporaryResult = ''

// Functions for add, subtract, multiply and divide

const add = (firstNumber, secondNumber) => +firstNumber + +secondNumber;
const subtract = (firstNumber, secondNumber) => +firstNumber - +secondNumber;
const multiply = (firstNumber, secondNumber) => +firstNumber * +secondNumber;
const divide = (firstNumber, secondNumber) => +firstNumber / +secondNumber;

// Defining the listeners for buttons 0-9

for (let i = 0; i <= 9; i++) {
    const button = document.querySelector('#bt' + i);
    button.addEventListener('click', () => {
        if (operatorFlag == false) {
            firstNumber += i;
            console.log(firstNumber);
        } else {
            secondNumber += i;
            console.log(secondNumber);
        }
    });
};

// Defining the listeners for the operator buttons

operatorTypes.forEach((type) => {
    const button = document.querySelector('#' + type);
    button.addEventListener('click', () => {
        operatorType = type;
        operatorArray.push(operatorType);
        operatorFlag = true;
        if ((firstNumber != '') && secondNumber != '') {
            temporaryResult = operate(firstNumber, operatorArray[operatorArray.length - 2], secondNumber);
            firstNumber = temporaryResult;
            secondNumber = '';
            return console.log(temporaryResult);
        }
    });
});

// Listener for equal button

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    return console.log(operate(firstNumber, operatorType, secondNumber));
});


// Function used to calculate based on the clicked button

function operate(firstNumber, operatorType, secondNumber) {
    switch (operatorType) {
        case 'add':
            return add(firstNumber, secondNumber);
        case 'subtract':
            return subtract(firstNumber, secondNumber);
        case 'multiply':
            return multiply(firstNumber, secondNumber);
        case 'divide':
            return divide(firstNumber, secondNumber);
    }
};