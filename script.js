function appendNumber(number) {
    const display = document.getElementById('display');
    display.value +=   number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value += ' ' + operator + ' ';
}

function appendDot() {
    const display = document.getElementById('display');
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/ /g, ''));
    } catch (error) {
        display.value = 'Error';
    }
}
