function pakaiAngka(number) {
    const display = document.getElementById('display');
    display.value +=   number;
}

function pakaiOperator(operator) {
    const display = document.getElementById('display');
    display.value += ' ' + operator + ' ';
}

function titikNya() {
    const display = document.getElementById('display');
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function hapusSemua() {
    document.getElementById('display').value = '';
}

function hapusTerakhir() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function hasil() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value.replace(/ /g, ''));
    } catch (error) {
        display.value = 'Error';
    }
}
