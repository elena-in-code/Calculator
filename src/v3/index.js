class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }
  //methods
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') this.compute();
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '×':
        result = prev * current;
        break;
      case '÷':
        result = prev / current;
        break;
      default:
        return;
    }
    this.currentOperand = result;
    this.previousOperand = '';
    this.operation = undefined;
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}`;
    }
  }
}
//saving elements in constants
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const currentOperandTextElement = document.querySelector(
  '[data-current-operand]'
);
const previousOperandTextElement = document.querySelector(
  '[data-previous-operand]'
);
// New instance of the class Calculator
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);
// Add a listener to every number btn
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});
// Add a listener to every operation btn
operationButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

// Add a listener to equals btn
equalsButton.addEventListener('click', (button) => {
  calculator.compute();
  calculator.updateDisplay();
});

// Add a listener to clear btn
allClearButton.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
});

// Add a listener to delete btn
deleteButton.addEventListener('click', (button) => {
  calculator.delete();
  calculator.updateDisplay();
});
