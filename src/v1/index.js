const init = () => {
  createButtons();
  createOperators();
};

const operators = {
  addition: {
    id: 'add',
    onClick: "makeOperation('+')",
    value: '+',
  },
  subtraction: {
    id: 'subtract',
    onClick: "makeOperation('-')",
    value: '-',
  },
  multiplication: {
    id: 'multiply',
    onClick: "makeOperation('*')",
    value: '*',
  },
  division: {
    id: 'divide',
    onClick: "makeOperation('/')",
    value: '/',
  },
  equal: {
    id: 'equal',
    onClick: "calculateResult('')",
    value: '=',
  },
};

createOperators = () => {
  Object.entries(operators).forEach(([key, value]) => {
    const operatorElement = `<input
      type="button"
      id="${value.id}"
      onClick="${value.onClick}"
      value="${value.value}"
    />`;
    const operatorElementWrapper = document.createElement('span');
    operatorElementWrapper.innerHTML = operatorElement;
    const calculatorWrapper = document.getElementById(
      'calculator-operators-wrapper'
    );
    calculatorWrapper.append(operatorElementWrapper);
  });
};

const createButtons = () => {
  for (let i = 0; i < 10; i++) {
    let number = '';

    number = number + i;
    input = document.createElement('input');
    input.setAttribute('class', 'calculator-number');
    input.setAttribute('style', 'margin-left: 10px;');
    input.setAttribute('id', `calculator-number-${number}`);
    input.setAttribute('value', number);
    input.setAttribute('type', 'button');
    input.textContent = number;
    input.addEventListener('click', function () {
      makeOperation(number);
    });
    document.getElementById('calculator-wrapper').appendChild(input);
  }
};

const makeOperation = (x) => {
  document.getElementById('calculator-input').value += x;
};

const calculateResult = () => {
  var rawResult = eval(document.getElementById('calculator-input').value);
  const result = rawResult.toFixed(2);
  document.getElementById('calculator-input').value = result;
};

init();
