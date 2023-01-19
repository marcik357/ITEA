// Створіть програму секундомір.
// * Секундомір матиме 3 кнопки "Старт, Стоп, Скидання"
// * При натисканні на кнопку стоп фон секундоміра має бути червоним, старт - зелений, скидання - сірий
// * Виведення лічильників у форматі ЧЧ: ММ: СС
// * Реалізуйте Завдання використовуючи синтаксис ES6 та стрілочні функції
// Variables
const stopwatchDisplay = document.querySelector('.stopwatch-display');
const contolBtns = document.querySelector('.stopwatch-control');
const milliseconds = document.querySelector('#ms');
const seconds = document.querySelector('#sec');
const minutes = document.querySelector('#min');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const colors = ['green', 'red', 'silver'];
let timerId;
// Functions to unable control button or disable it
const disableBtn = btn => btn.disabled = 'true';
const unableBtn = btn => btn.disabled = null;
// Start disabling unnecessary buttons
disableBtn(stop);
disableBtn(reset);
// Add listener on control buttons container
contolBtns.addEventListener('click', reactOnClick);
// Function to react on control buttons click
function reactOnClick(e) {
    if (e.target.closest('#start')) {
        startTimer()
    } else if (e.target.closest('#stop')) {
        stopTimer()
    } else if (e.target.closest('#reset')) {
        resetTimer()
    }
}
// Remove all color classes
function removeColorClass() {
    [...stopwatchDisplay.classList].map(classStr => {
        if (colors.includes(classStr)) stopwatchDisplay.classList.remove(classStr);
    });
}
// Start timer work
function startTimer() {
    timerId = setInterval(() => {
        milliseconds.innerText = +milliseconds.innerText + 1;
        if (+milliseconds.innerText < 10) milliseconds.innerText = '0' + milliseconds.innerText;
        if (milliseconds.innerText > 90) {
            seconds.innerText = +seconds.innerText + 1;
            if (+seconds.innerText < 10) seconds.innerText = '0' + seconds.innerText;
            milliseconds.innerText = '00';
        }
        if (seconds.innerText > 99) {
            minutes.innerText = +minutes.innerText + 1;
            if (+minutes.innerText < 10) minutes.innerText = '0' + minutes.innerText;
            seconds.innerText = '00';
        }
    }, 10);
    disableBtn(start);
    unableBtn(stop);
    unableBtn(reset);
    removeColorClass();
    stopwatchDisplay.classList.add('green');
}
// Stop timer work
function stopTimer() {
    clearInterval(timerId);
    unableBtn(start);
    removeColorClass();
    stopwatchDisplay.classList.add('red');
}
// Stop timer work and reset value
function resetTimer() {
    clearInterval(timerId);
    disableBtn(stop);
    unableBtn(start);
    removeColorClass()
    milliseconds.innerText = '00';
    seconds.innerText = '00';
    minutes.innerText = '00';
    stopwatchDisplay.classList.add('silver');
}