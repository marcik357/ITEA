function createParagraph() {
    return document.createElement('p')
}
function createDiv() {
    return document.createElement('div')
}
// ======================================================================================================================================


// Реалізуйте клас Worker(Працівник), який матиме такі властивості: name(ім'я), surname (прізвище),
// rate(ставка за день роботи), days(кількість відпрацьованих днів).
// Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
// Зарплата - це добуток(множення) ставки rate на кількість відпрацьованих днів days.

class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return parseFloat(this.rate) * this.days;
    }
}

let developer = new Worker('John', 'Smith', '105$', '20');
document.body.insertAdjacentHTML('beforeend', `
    <div class="task">
        <p>Реалізуйте клас Worker(Працівник), який матиме такі властивості: name(ім'я), surname (прізвище),</p>
        <p>rate(ставка за день роботи), days(кількість відпрацьованих днів).</p>
        <p>Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.</p>
        <p>Зарплата - це добуток(множення) ставки rate на кількість відпрацьованих днів days.</p>
    </div>
`)
document.body.insertAdjacentHTML("beforeend", `
    <div>
        <p>
            <pre>
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        return parseFloat(this.rate) * this.days;
    }
}
            </pre>
        </p>
        <p>Робимо новий екземпляр класу <b>Worker</b> - <b>let developer = new Worker('John', 'Smith', '105$', '20')</b></p>
        <p>При виклику метода <b>getSalary()</b> на <b>developer</b> отримаємо 2100</p>
    </div>
    <hr>
`)
// ======================================================================================================================================



// Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
// який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
// який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
// та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.

class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str.slice(0,1).toUpperCase() + str.slice(1);
    }

    ucWords2(str) {
        return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}

document.body.insertAdjacentHTML('beforeend', `
    <div class="task">
        <p>Реалізуйте клас MyString, який матиме такі методи: метод reverse(),</p>
        <p>який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),</p>
        <p>який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою</p>
        <p>та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.</p>
    </div>
`)

document.body.insertAdjacentHTML("beforeend", `
    <div>
        <p>
            <pre>
class MyString {
    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str.slice(0,1).toUpperCase() + str.slice(1);
    }

    ucWords2(str) {
        return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}
            </pre>
        </p>
    </div>
    <hr>
`)
// ======================================================================================================================================



// Створіть клас Phone, який містить змінні number, model і weight.
// Створіть три екземпляри цього класу.
// Виведіть на консоль значення їх змінних.
// Додати в клас Phone методи: receiveCall, має один параметр - ім'я.
// Виводить на консоль повідомлення "Телефонує {name}".
// Метод getNumber повертає номер телефону. Викликати ці методи кожного з об'єктів.

class Phone {
    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
}

let samsung = new Phone('0988887799', 's20', '120g');
let iphone = new Phone('0988887800', '14', '110g');
let nokia = new Phone('0988887801', 'n82', '200g');

console.log(samsung);
console.log(iphone);
console.log(nokia);

Phone.prototype.receiveCall = function (name) {
    console.log(`Calling ${name}`);
}

Phone.prototype.getNumber = function () {
    return this.number;
}

samsung.receiveCall('John');
samsung.getNumber();

iphone.receiveCall('Ann');
iphone.getNumber();

nokia.receiveCall('Tony');
nokia.getNumber();