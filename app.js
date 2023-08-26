function add(a, b) { return a + b };

function substract(a, b) { return a - b };

function multiply(a, b) { return a * b };

function divide(a, b) { return a == 0 || b == 0 ? false : a / b };

function percentage(a) { return a / 100 }

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
        case '%':
            return percentage(a);
    }
};


const input = document.querySelector('.display .input');
const result = document.querySelector('.display .result');
const buttons = document.querySelectorAll('button');
let display = a = b = operator = '';

buttons.forEach(button => {
    button.addEventListener('click', e => {
        //on clear reset variables and display
        if (button.id == 'clear') {
            a = b = operator = display = '';
            input.innerHTML = '';
            result.innerHTML = '';
        }

        if (button.id == 'backspace' && a != '') {
            //todo
        }

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

        if (button.classList == 'operator' && b == '') {
            if (operator) {
                //todo
            } else {
                display += button.innerHTML;
            }
            operator = button.innerHTML;
            input.innerHTML = display;
        }

        if (button.id == 'percentage' && a != '') {
            a = operate(a * 1, b * 1, operator);
            result.innerHTML = input.innerHTML = display = a;
            console.log(a);
        }

        if (button.id == 'equals' && a != '' && b != '') {
            a = operate(a * 1, b * 1, operator);
            result.innerHTML = input.innerHTML = display = a;
            b = operator = '';
        }

    })
});

//------------------todos-----------------------
//keyboard support
//error message during 2 consecutive operators