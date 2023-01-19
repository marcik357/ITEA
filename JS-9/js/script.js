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
//==================================================================================



// Реалізуйте програму перевірки телефону
// * Використовуючи JS Створіть поле для введення телефону та кнопку збереження
// * Користувач повинен ввести номер телефону у форматі 000-000-00-00
// * Після того як користувач натискає кнопку зберегти перевірте правильність введення номера, якщо номер
// правильний
// зробіть зелене тло і використовуючи document.location переведіть користувача на сторінку
// https://risovach.ru/upload/2013/03/mem/toni-stark_13447470_big_.jpeg
// якщо буде помилка, відобразіть її в діві до input.
// Insert input and button
document.querySelector('.container-stopwatch').insertAdjacentHTML('afterend', `
    <input type='text' class='input-phone' placeholder='000-000-00-00'>
    <button class='save-phone'>Зберегти</button>
`);
// Variables
const input = document.querySelector('.input-phone');
const saveBtn = document.querySelector('.save-phone');
const regExp = /\d\d\d\-\d\d\d-\d\d-\d\d/
// Ban all input exept number and '-'
input.addEventListener('beforeinput', (e) => {
    if (isNaN(e.data) && e.data !== '-') {
        e.preventDefault();
    }
});
input.addEventListener('focus', () => input.classList.remove('green'));
// Add listener on button
saveBtn.addEventListener('click', submitePhone);
// Check input correct
function submitePhone(e) {
    if (regExp.test(input.value)) {
        input.classList.add('green');
        setTimeout(() => {
            document.location = 'https://i.picsum.photos/id/724/5000/3333.jpg?hmac=ZBbc0s-KVshJfX3Z8f9V-_djOHr3C9gudYkWDFVL6GM'
        }, 1000);
    } else {
        input.insertAdjacentHTML('beforebegin', `
        <img src='https://i.picsum.photos/id/685/3000/2000.jpg?hmac=GLauGOEYjS7xOFx_wgC1vpX7_QRZNjtK4Dk-1OCZ1BI'>
        `);
    }
}
//==================================================================================
