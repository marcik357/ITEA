function createParagraph() {
    return document.createElement('p')
}
function createDiv() {
    return document.createElement('div')
}


// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на Украинском языке
function showDay(num) {
    let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

    return days[num - 1];
}

let dayNum = +prompt('Введіть номер дня тижня, від 1 до 7', '1');

while (isNaN(dayNum) || dayNum < 1 || dayNum > 7) {
    dayNum = +prompt('Ви ввели невірне число, введіть номер дня тижня, від 1 до 7', '1');
}

// Вивід результату:
let task1 = createParagraph();

task1.textContent = "Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на Украинском языке";
document.body.append(task1);
document.body.insertAdjacentHTML("beforeend", `<p>Цей день - <strong>${showDay(dayNum)}</strong>!</p><hr>`)
// ======================================================================================================================================


// Дана строка вида 'var_text_hello'.Сделайте из него текст 'VarTextHello'.
let str = 'var_text_hello';
let newStr = str.split('_').map(word => word = word.slice(0, 1).toUpperCase() + word.slice(1)).join('');

// Вивід результату:
let task2 = createParagraph();

task2.textContent = "Дана строка вида 'var_text_hello'. Сделайте из него текст 'VarTextHello'.";
document.body.append(task2);
document.body.insertAdjacentHTML("beforeend", `<p>Результат виконання завдання - <strong>${newStr}</strong></p><hr>`)
// ======================================================================================================================================


// Создайте функцию которая будет заполнять массив 10 - ю иксами с помощью цикла.
function fillByX() {
    let arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push('X');
    }
    return arr;
}

// Вивід результату:
let task3 = createParagraph();

task3.textContent = "Создайте функцию которая будет заполнять массив 10 - ю иксами с помощью цикла.";
document.body.append(task3);
document.body.insertAdjacentHTML("beforeend", `<p>Результат виконання завдання - <strong>[${fillByX()}]</strong></p><hr>`)
// ======================================================================================================================================


// Создайте маcсив на 50 элементов и заполните каждый элемент его номером, не используя циклы выведите каждый нечетный элемент в параграфе, а четный в диве.
function makeArr() {
    let emptyArr = new Array(50);
    for (let i = 0; i < 50; i++) {
        emptyArr[i] = i;
    }
    emptyArr.forEach(item => {
        if (+item % 2 !== 0) {
            let p = createParagraph();
            p.innerText = `${item} - це параграф`;
            document.body.append(p)
        } else {
            let div = createDiv();
            div.innerText = `${item} - це div`;
            document.body.append(div)
        }
    })
}

// Вивід результату:
let task4 = createParagraph();

task4.textContent = "Создайте маcсив на 50 элементов и заполните каждый элемент его номером, не используя циклы выведите каждый нечетный элемент в параграфе, а четный в диве.";
document.body.append(task4);
makeArr();
document.body.insertAdjacentHTML("beforeend", `<hr>`)
// ======================================================================================================================================


// Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один!, иначе запишем функцию, которая выводит два!
let ggg;
let a = prompt('Введіть число, яке запишеться в змінну а');

while (!a || isNaN(+a)) {
    a = prompt('Ви ввели не число! введіть число, яке запишеться в змінну а');
}

+a > 0 ? ggg = () => '!' : ggg = () => '!!';

// Вивід результату:
let task5 = createParagraph();

task5.textContent = "Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один!, иначе запишем функцию, которая выводит два!";
document.body.append(task5);
if (a > 0) {
    document.body.insertAdjacentHTML("beforeend", `Ви ввели число більше за нуль, тому в змінній <b>ggg</b> функція яка виводить <b>${ggg()}</b><hr>`)
} else {
    document.body.insertAdjacentHTML("beforeend", `Ви ввели число менше за нуль, тому в змінній <b>ggg</b> функція яка виводить <b>${ggg()}</b><hr>`)
}
// ======================================================================================================================================


// Используя CallBack function создайте калькулятор который будет от пользователя принимать 2 числа и знак арефметической операции.
// При вводе не числа или при делении на 0 выводить ошибку.
function getNum(message) {
    let num = prompt(message);
    while (!num || isNaN(+num) || parseFloat(num) !== +num) {
        if (num === null) {
            alert('Відмова не приймається! Введіть число')
            num = prompt(message);
        }
        alert('Ви ввели не число!')
        num = prompt(message);
    }
    return +num
}

function getSign() {
    let operators = ['+', '-', '*', '/'];
    let operator = prompt('Введіть знак арифметичної операції (+, -, *, /)');
    while (!operators.includes(operator)) {
        operator = prompt('Введіть коректний знак арифметичної операції (+, -, *, /)');
    }
    return operator
}

function calculate(getNum, getSign) {
    let a = getNum('Введіть перше число');
    let b = getNum('Введіть друге число');

    switch (getSign()) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            if (a === 0 || b === 0) {
                alert('Ділення на нуль неможливе!');
                if (confirm('Ви хочете замінити нуль на інше число?')) {
                    a === 0 ? a = getNum('Введіть перше число, але на цей раз не нуль') : b = getNum('Введіть друге число, але на цей раз не нуль')
                } else {
                    return 'Помилка обчислення. Ділення на нуль неможливе!'
                }
            }
            return a / b;
            break;
        default:
            throw new Error('Щось пішло не так... Напевно не вистачає аргументів у викликаної функції')
            break;
    }
}

// Вивід результату:
let task6 = createParagraph();

task6.innerHTML = "<b>Основне завдання:</b><br>Используя CallBack function создайте калькулятор который будет от пользователя принимать 2 числа и знак арефметической операции. При вводе не числа или при делении на 0 выводить ошибку";
document.body.append(task6);
document.body.insertAdjacentHTML("beforeend", `Наприклад викликаю функцію ось так <b>calculate(getNum, getSign)</b> - отримую результат виклику <b>${calculate(getNum, getSign)}</b><hr>`)
// ======================================================================================================================================

// Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.
function map(fn, array) {
    return array.map(fn);
}
// Вивід результату:
let task7 = createParagraph();

task7.innerHTML = "<b>Основне завдання:</b><br>Напиши функцію <b>map(fn, array)</b>, яка приймає на вхід функцію та масив, та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.";
document.body.append(task7);
document.body.insertAdjacentHTML("beforeend", `Наприклад викликаю функцію ось так <b>map(item=>item*2, [1,2,3,4,5])</b> і отримую новий масив <b>[${map(item => item * 2, [1, 2, 3, 4, 5])}]</b><hr>`)
// ======================================================================================================================================


// Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.
function gggg(fun1, fun2) {
    return fun1() + fun2();
}

// Вивід результату:
let task8 = createParagraph();

task8.innerHTML = "Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.";
document.body.append(task8);
document.body.insertAdjacentHTML("beforeend", `Наприклад викликаю функцію ось так <b>gggg(() => 3, () => 4)</b><br>
отримую результат виклику <b>${gggg(() => 3, () => 4)}</b><hr>`)

// ======================================================================================================================================


// Сделайте функцию, которая считает и выводит количество своих вызовов.
let counter = (function () {
    let count = 0;
    return function () {
        count++;
        let message = `Ця функція визивається ${count}-й раз`
        return message;
    }
})()

// Вивід результату:
let task9 = createParagraph();

task8.innerHTML = "Сделайте функцию, которая считает и выводит количество своих вызовов.";
document.body.append(task9);
document.body.insertAdjacentHTML("beforeend", `Результат виклику функції <b>${counter()}</b><br>`)
document.body.insertAdjacentHTML("beforeend", `Результат другого виклику функції <b>${counter()}</b><br>`)
document.body.insertAdjacentHTML("beforeend", `Результат третього виклику функції <b>${counter()}</b><br>`)
// ======================================================================================================================================