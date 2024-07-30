document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector('.display');
    let operand1 = '';
    let operand2 = '';
    let operator = '';

    function clearDisplay() {
        display.textContent = '0';
        operand1 = '';
        operand2 = '';
        operator = '';
    }

    function updateDisplay(value) {
        if (display.textContent === '0') {
            display.textContent = value;
        } else {
            display.textContent += value;
        }
    }

    function handleNumberClick(number) {
        updateDisplay(number);
        if (!operator) {
            operand1 += number;
        } else {
            operand2 += number;
        }
    }

    function handleOperatorClick(op) {
        if (operand1 && operand2 && operator) {
            performCalculation();
        }
        operator = op;
        updateDisplay(operator);
    }

    function performCalculation() {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);
        let result = 0;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                return;
        }
        display.textContent = result;
        operand1 = result.toString();
        operand2 = '';
        operator = '';
    }

    document.querySelectorAll('.number').forEach(button => {
        button.addEventListener('click', () => {
            handleNumberClick(button.textContent);
        });
    });

    document.querySelectorAll('.operator').forEach(button => {
        button.addEventListener('click', () => {
            handleOperatorClick(button.textContent);
        });
    });

    document.getElementById('clear').addEventListener('click', clearDisplay);

    document.getElementById('calculate').addEventListener('click', performCalculation);
});