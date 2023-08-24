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
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
};

const input = document.querySelector('.display .input');
const buttons = document.querySelectorAll('button');
let a, b, operator;

buttons.forEach(button => {
    button.addEventListener('click', e => {
        switch (button.id) {
            case 'clear':
                input.innerHTML = '';
                break;
            case 'delete':
                break;
            case 'equals':
                if (operator) operate(a, b, operator);
                break;
            case 'remainder':
                input.innerHTML += button.innerHTML;
                operator = '%';
                break;
            case 'divide':
                input.innerHTML += button.innerHTML;
                operator = '/';
                break;
            case 'multiply':
                input.innerHTML += button.innerHTML;
                operator = '*';
                break;
            case 'subtract':
                input.innerHTML += button.innerHTML;
                operator = '-';
                break;
            case 'add':
                input.innerHTML += button.innerHTML;
                operator = '+';
                break;
            default:
                input.innerHTML += button.innerHTML;
        }
    })
});