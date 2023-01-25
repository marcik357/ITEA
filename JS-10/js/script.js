// Variables
const display = document.querySelector('.display input');
const ecual = document.querySelector('input[value="="]');
let tempValue = '';
let operandFirst;
let operator;
let memory = 0;
let memoryShow = false;
// Add listeners
document.body.addEventListener('click', calculator);
document.body.addEventListener('keydown', calculator);
// Main function
function calculator(e) {
    let key;
    // Click on virtual or real key
    if (e.type === 'click' && e.target.value && e.target.closest('.button')) {
        key = e.target.value;
    } else if (e.type === 'keydown' && e.key) {
        key = e.key;
    }
    // Small conditions
    if (!key) return;
    if (key === 'Enter') e.preventDefault();
    if (key !== 'mrc') memoryShow = false;
    if (operandFirst && operator) ecual.disabled = false;
    // External functions
    clear(key);
    getNum(key);
    if (display.value) memoryUse(key);
    // Calculate or get operand
    if (display.value && key.match(/[-+/*]/)) {
        if (!operandFirst) {
            operator = key;
            operandFirst = display.value;
            tempValue = '';
        } else if (operandFirst) {
            calc(operandFirst, operator, tempValue);
            operator = key;
            operandFirst = display.value;
            tempValue = '';
        }
    } else if (operandFirst && operator && (key === '=' || key === 'Enter')) {
        calc(operandFirst, operator, tempValue);
        operandFirst = '';
        tempValue = '';
    }
}
// Clear calculator
function clear(key) {
    if (key === 'C') {
        display.value = '';
        tempValue = '';
        operandFirst = '';
    }
}
// Show sign if something in memory
function showMemorySign() {
    display.insertAdjacentHTML('beforebegin', `<span class="memory-sign">M</span>`);
}
// Operations with memory
function memoryUse(key) {
    if (key === 'm+' && display.value) {
        memory += +display.value;
        showMemorySign();
    } else if (key === 'm-') {
        memory -= +display.value;
        showMemorySign();
    } else if (key === 'mrc' && memoryShow && document.querySelector('.memory-sign')) {
        memory = 0;
        document.querySelector('.memory-sign').remove();
    } else if (key === 'mrc') {
        display.value = memory;
        tempValue = memory;
        memoryShow = true;
    }
}
// Get number and set it on display
function getNum(key) {
    if (!isNaN(key) || key === '.') {
        if (tempValue.includes('.') && key === '.' || tempValue === '0' && key === '0') {
            return;
        } else if (tempValue === '0' && !isNaN(key)) {
            tempValue = key
            display.value = tempValue;
        } else if (!tempValue && key === '.') {
            tempValue = '0' + key;
            display.value = tempValue;
        } else {
            tempValue += key;
            display.value = tempValue;
        }
    }
}
// Regular calculator operations
function calc(a, operator, b) {
    ecual.disabled = true;
    switch (operator) {
        case '+':
            display.value = +a + +b;
            break;
        case '-':
            display.value = a - b;
            break;
        case '*':
            display.value = a * b;
            break;
        case '/':
            if (+b === 0) {
                display.value = 'Error';
                setTimeout(() => {
                    display.value = '';
                }, 2000);
            } else {
                display.value = a / b;
            }
            break;
        default:
            break;
    }
}