const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const displayScreen = calculator.querySelector('.display--screen');

const calculation = (a, operator, b) => {
  let result;
  switch (operator) {
    case 'add':
      result = parseFloat(a) + parseFloat(b);
      break;
    case 'subtract':
      result = parseFloat(a) - parseFloat(b);
      break;
    case 'multiply':
      result = parseFloat(a) * parseFloat(b);
      break;
    case 'divide':
      result = parseFloat(a) / parseFloat(b);
      break;
    default:
      'invalid';
  }
  console.log('result :>> ', result);
  return result;
};

keys.addEventListener('click', (e) => {
  const eventValue = e.target.value;
  const calculationAction =
    eventValue === 'add' ||
    eventValue === 'subtract' ||
    eventValue === 'multiply' ||
    eventValue === 'divide';

  if (e.target.matches('button')) {
    const numberOnDisplay = displayScreen.textContent;
    const keyContent = e.target.textContent;
    if (!calculationAction) {
      if (numberOnDisplay === '0') {
        displayScreen.textContent = keyContent;
      } else {
        displayScreen.textContent = numberOnDisplay + keyContent;
      }
    }
    if (calculationAction) {
      calculator.dataset.firstValue = numberOnDisplay;
      calculator.dataset.operator = event.target.value;
      displayScreen.textContent = '';
    }
    if (eventValue === 'calculate') {
      const firstValue = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondValue = numberOnDisplay;
      console.log('calculator.dataset :>> ', calculator.dataset);
      displayScreen.textContent = calculation(
        firstValue,
        operator,
        secondValue
      );
    }
  }

  if (eventValue === 'decimal') {
    displayScreen.textContent = numberOnDisplay + '.';
  }

  if (eventValue === 'clear') {
    displayScreen.textContent = '';
  }
});
