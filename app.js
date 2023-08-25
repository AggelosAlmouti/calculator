function add(a, b) { return a + b };

function substract(a, b) { return a - b };

function multiply(a, b) { return a * b };

function divide(a, b) { return a == 0 || b == 0 ? false : a / b };

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return substract(a, b);
        case 'x':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
};

const input = document.querySelector('.display .input');
const result = document.querySelector('.display .result');
const buttons = document.querySelectorAll('button');
let display = a = b = operator = '';
let end = false;

buttons.forEach(button => {
    button.addEventListener('click', e => {
        if (!end) {
            if (button.classList == 'number') {
                if (operator) {
                    b += button.innerHTML;
                    display += button.innerHTML;
                } else {
                    a += button.innerHTML;
                    display += button.innerHTML;
                }
                input.innerHTML = display;
            }

            if (button.classList == 'operator' && b === '') {
                if (operator) {
                    //todo
                } else {
                    display += button.innerHTML;
                }
                operator = button.innerHTML;
                input.innerHTML = display;
            }

            if (button.id == 'equals' && a != '' && b != '') {
                a = parseInt(a);
                b = parseInt(b);
                result.innerHTML = operate(a, b, operator);
                end = true;
            }
        }
    })
});