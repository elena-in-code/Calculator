const init = () => createButtons();

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

const clearInput = (y) => {
  document.getElementById('calculator-input').value = y;
};

function calculateResult() {
  var result = eval(document.getElementById('calculator-input').value);
  document.getElementById('calculator-input').value = result;
}

init();
