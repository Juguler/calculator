let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = '';

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
        return 'Error: Division by zero is not allowed';
    }
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
          return add(num1, num2);
        case '-':
          return subtract(num1, num2);
        case '*':
          return multiply(num1, num2);
        case '/':
          return divide(num1, num2);
        default:
          return 'Error: Operator not recognized';
    }
}

function updateDisplay(value) {
    if (operator === '') {
      if (value === '.' && firstNumber.includes('.')) {
        return;
      }
      firstNumber += value;
      document.getElementById('display').innerText = firstNumber;
    } else {
      if (value === '.' && secondNumber.includes('.')) {
        return;
      }
      secondNumber += value;
      document.getElementById('display').innerText = secondNumber;
      document.getElementById('lastCalc').innerText = `${firstNumber} ${operator} ${secondNumber} =`
    }
}

let numberButtons = document.getElementsByClassName('digit');
for (let i = 0; i < numberButtons.length; i++) {
      numberButtons[i].addEventListener('click', function() {
        updateDisplay(this.innerText);
    });
}

let operatorButtons = document.getElementsByClassName('operator');
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener('click', function() {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
      firstNumber = operate(operator, Number(firstNumber), Number(secondNumber)).toString();
      secondNumber = '';
      document.getElementById('display').innerText = firstNumber;
    }
    operator = this.innerText;
    document.getElementById('lastCalc').innerText = `${firstNumber} ${operator}`;
  });
}

document.getElementsByClassName('equals')[0].addEventListener('click', function() {
      if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
        result = operate(operator, Number(firstNumber), Number(secondNumber));
        document.getElementById('display').innerText = result.toFixed(2);
        firstNumber = result.toString();
        secondNumber = '';
        operator = '';
      }
});

document.getElementsByClassName('clear')[0].addEventListener('click', function() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  result = '';
  document.getElementById('display').innerText = '0';
  document.getElementById('lastCalc').innerText = '';
});