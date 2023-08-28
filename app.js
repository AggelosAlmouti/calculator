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
let floatingPointA = floatingPointB = false;

buttons.forEach(button => {
    button.addEventListener('click', e => {
        //on clear reset variables and display
        if (button.id == 'clear') {
            a = b = operator = display = '';
            floatingPointA = floatingPointB = false;
            input.innerHTML = '';
            result.innerHTML = '';
        }

        //the operator is used to break up the input string and determine which number to populate
        //if there is an operator populate 'b' else populate 'a'
        //check for only one floating point in string a and b accordingly
        if (button.classList == 'number') {
            if (operator) {
                if (button.id == 'floating-point') {
                    if (!floatingPointB) {
                        b += button.innerHTML;
                        display += button.innerHTML;
                        floatingPointB = true;
                    }
                } else {
                    b += button.innerHTML;
                    display += button.innerHTML;
                }
            } else {
                if (button.id == 'floating-point') {
                    if (!floatingPointA) {
                        a += button.innerHTML;
                        display += button.innerHTML;
                        floatingPointA = true;
                    }
                } else {
                    a += button.innerHTML;
                    display += button.innerHTML;
                }
            }
            input.innerHTML = display;
        }

        //the operator is in between 'a' and 'b' so 'a' should already be populated before the keystrok
        //while 'b' should not to avoid having and operator as first input or two operators at the same time
        if (button.classList == 'operator' && a != '' && b == '') {
            if (operator && operator != '%') {
                display = display.slice(0, -1);
                operator = button.innerHTML;
                display += button.innerHTML;
            } else {
                operator = button.innerHTML;
                display += button.innerHTML;
            }
            input.innerHTML = display;
        }

        //same logic for percentage operator, check to not be the first input
        //and to not have a second number or operator
        if (button.id == 'percentage' && a != '' && b == '') {
            a = operate(a * 1, b * 1, operator);
            result.innerHTML = input.innerHTML = display = a;
            console.log(a);
        }

        //if variable is populated remove last char
        //the check is in reverse order to the order the user is typing
        if (button.id == 'backspace' && a != '') {
            if (b) {
                b = b.slice(0, -1);
            } else if (operator) {
                operator = '';
            } else if (a) {
                a = a.slice(0, -1);
            }
            display = display.slice(0, -1);
            input.innerHTML = display;
        }

        //check to see if all values are populated
        //multiplay by 1 to turn strings to numbers
        if (button.id == 'equals' && a != '' && b != '') {
            a = operate(a * 1, b * 1, operator);
            a = a.toString();
            result.innerHTML = input.innerHTML = display = a;
            b = operator = '';
        }
    })
});
//keyboard support