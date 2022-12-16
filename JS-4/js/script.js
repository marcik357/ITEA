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
let a = +prompt('Введіть число');
let ggg;

a > 0 ? ggg = () => '!' : ggg = () => '!!';

// Вивід результату:
let task5 = createParagraph();

task4.textContent = "Если переменная a больше нуля - то в ggg запишем функцию, которая выводит один!, иначе запишем функцию, которая выводит два!";
document.body.append(task5);
if (a > 0) {
    document.body.insertAdjacentHTML("beforeend", `Ви ввели число більше за нуль, тому в змінній <b>ggg</b> функція яка виводить <b>${ggg()}</b><hr>`)
} else {
    document.body.insertAdjacentHTML("beforeend", `Ви ввели число менше за нуль або взагалі не число, тому в змінній <b>ggg</b> функція яка виводить <b>${ggg()}</b><hr>`)
}
// ======================================================================================================================================


// Используя CallBack function создайте калькулятор который будет от пользователя принимать 2 числа и знак арефметической операции.При вводе не числа или при делении на 0 выводить ошибку.
// function calculate() {
//     let operators = ['+', '-', '*', '/'];
//     let firstNum = prompt('Введіть перше число');
//     while (!firstNum || isNaN(+firstNum)) {
//         alert('Ви не ввели перше число')
//         firstNum = prompt('Введіть перше число');
//     }

//     let secondNum = prompt('Введіть друге число');
//     while (!secondNum || isNaN(+secondNum)) {
//         alert('Ви не ввели друге число')
//         secondNum = prompt('Введіть друге число');
//     }

//     let operator = prompt('Введіть знак арифметичної операції (+, -, *, /)');
//     while (!operators.includes(operator)) {
//         alert('Ви не ввели знак арифметичної операції')
//         operator = prompt('Введіть коректний знак арифметичної операції (+, -, *, /)');
//     }
// }

function calculate(num1, num2, fun) {
    
}

function sum() {
    return a + b
}
function min() {
    return a - b
}
function div() {
    return a / b
}
function mul() {
    return a * b
}
let task6 = createParagraph();

// ======================================================================================================================================

// Напиши функцію map(fn, array), яка приймає на вхід функцію та масив, та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.
function map(fn, array) {
    return array.map(fn);
}
// Вивід результату:
let task7 = createParagraph();

task7.innerHTML = "Напиши функцію <b>map(fn, array)</b>, яка приймає на вхід функцію та масив, та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.";
document.body.append(task7);
document.body.insertAdjacentHTML("beforeend", `Наприклад викликаю функцію ось так <b>map(item=>item*2, [1,2,3,4,5])</b> і отримую новий масив <b>[${map(item => item * 2, [1, 2, 3, 4, 5])}]</b><hr>`)
// ======================================================================================================================================


// Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.
const func1 = () => 3;
const func2 = () => 4;

function gggg(fun1, fun2) {
    return fun1() + fun2();
}

// Вивід результату:
let task8 = createParagraph();

task8.innerHTML = "Функция ggg принимает 2 параметра: анонимную функцию, которая возвращает 3 и анонимную функцию, которая возвращает 4. Верните результатом функции ggg сумму 3 и 4.";
document.body.append(task8);
document.body.insertAdjacentHTML("beforeend", `Наприклад викликаю функцію ось так <b>ggg(func1, func2)</b><br>
де func1 - <b>const func1 = () => 3;</b><br>
а func1 - <b>const func2 = () => 4;</b><br>
отримую результат виклику <b>${gggg(func1, func2) }</b><hr>`)

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