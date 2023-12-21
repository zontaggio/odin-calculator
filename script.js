// Starting variables

let firstNumber = '';
let secondNumber = '';
let operatorType = '';
let lastOperator = '';
let operatorFlag = false;
let operatorArray = [];
let operatorTypes = ['add', 'subtract', 'multiply', 'divide'];
let temporaryResult = ''
let dotFlag = false; // Used to prevent user to user multiple dots inside the same number

// Functions for add, subtract, multiply and divide

const add = (firstNumber, secondNumber) => +firstNumber + +secondNumber;
const subtract = (firstNumber, secondNumber) => +firstNumber - +secondNumber;
const multiply = (firstNumber, secondNumber) => +firstNumber * +secondNumber;
const divide = (firstNumber, secondNumber) => +firstNumber / +secondNumber;

// Locator for the display element

const displayArea = document.querySelector('#display');

// Defining the listeners for buttons 0-9

for (let i = 0; i <= 9; i++) {
    const button = document.querySelector('#bt' + i);
    button.addEventListener('click', () => {
        if (operatorFlag == false) {
            firstNumber += i;
            // console.log(firstNumber);
            displayArea.innerHTML = firstNumber;
        } else {
            secondNumber += i;
            // console.log(secondNumber);
            displayArea.innerHTML = secondNumber;

        }
    });
};

// Defining specific listener for dot
const dotButton = document.querySelector('#dot');
dotButton.addEventListener('click', () => {
    if (dotFlag == false) {
        if (operatorFlag == false) {
            firstNumber = firstNumber + ".";
            dotFlag = true;
            // console.log(firstNumber);
            displayArea.innerHTML = firstNumber;
        } else {
            secondNumber = secondNumber + ".";
            dotFlag = true;
            // console.log(secondNumber);
            displayArea.innerHTML = secondNumber;
        }
    }
});

// Defining specific listener for clear
const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = '';
    operatorType = '';
    lastOperator = '';
    operatorFlag = false;
    operatorArray = [];
    operatorTypes = ['add', 'subtract', 'multiply', 'divide'];
    temporaryResult = ''
    dotFlag = false;
    displayArea.innerHTML = '0';
});

// Defining specific listener for percentage
const percentageButton = document.querySelector('#percentage');
percentageButton.addEventListener('click', () => {
        if (operatorFlag == false) {
            firstNumber = firstNumber / 100;
            // console.log(firstNumber);
            displayArea.innerHTML = firstNumber;
        } else {
            secondNumber = secondNumber / 100;
            // console.log(secondNumber);
            displayArea.innerHTML = secondNumber;
        }
});

// Defining specific listener for change signal
const signalButton = document.querySelector('#signal');
signalButton.addEventListener('click', () => {
    if (operatorFlag == false) {
        firstNumber = firstNumber * (-1);
        // console.log(firstNumber);
        displayArea.innerHTML = firstNumber;
    } else {
        secondNumber = secondNumber * (-1);
        // console.log(secondNumber);
        displayArea.innerHTML = secondNumber;
    }
});

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
            // return console.log(temporaryResult);
            if (temporaryResult % 1 === 0) {
                displayArea.innerHTML = temporaryResult.toFixed(0);
            } else {
                displayArea.innerHTML = temporaryResult.toFixed(9);
            }
        }
    });
});

// Listener for equal button

const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    // return console.log(operate(firstNumber, operatorType, secondNumber));
    if ((operate(firstNumber, operatorType, secondNumber)) % 1 == 0) {
        displayArea.innerHTML = operate(firstNumber, operatorType, secondNumber).toFixed(0);
    } else {
        displayArea.innerHTML = operate(firstNumber, operatorType, secondNumber).toFixed(9);
    }

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