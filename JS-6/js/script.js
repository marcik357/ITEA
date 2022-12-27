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

document.body.insertAdjacentHTML("beforeend", `
    <div class="task">
        <p>Реалізуйте клас Worker(Працівник), який матиме такі властивості: name(ім'я), surname (прізвище),</p>
        <p>rate(ставка за день роботи), days(кількість відпрацьованих днів).</p>
        <p>Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.</p>
        <p>Зарплата - це добуток(множення) ставки rate на кількість відпрацьованих днів days.</p>
    </div>
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
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}

document.body.insertAdjacentHTML("beforeend", `
    <div class="task">
        <p>Реалізуйте клас MyString, який матиме такі методи: метод reverse(),</p>
        <p>який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),</p>
        <p>який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою</p>
        <p>та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.</p>
    </div>
    <div>
        <p>
            <pre>
class MyString {

    reverse(str) {
        return str.split('').reverse().join('');
    }

    ucFirst(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    }

    ucWords(str) {
        return str.split(' ').map(word => this.ucFirst(word)).join(' ');
    }
}
            </pre>
        </p>
    </div>
    <p>Викликаємо <b>new MyString().reverse('some new string')</b> - отримуємо <b>'gnirts wen emos'</b></p>
    <p>Викликаємо <b>new MyString().ucFirst('some new string')</b> - отримуємо <b>'Some new string'</b></p>
    <p>Викликаємо <b>new MyString().ucWords('some new string')</b> - отримуємо <b>'Some New String'</b></p>
    <hr>
`)

/* це як варіант? але викликається через new MyString('some new string').ucWords()
class MyString {

    constructor(str) {
        this.str = str;
    }

    reverse() {
        return this.str.split('').reverse().join('');
    }

    ucFirst() {
        return this.str.slice(0, 1).toUpperCase() + this.str.slice(1);
    }

    ucWords() {
        return this.str.split(' ').map(word => new MyString(word).ucFirst()).join(' ');
    }
}
*/
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

console.log('Створіть три екземпляри класу Phone. Виведіть на консоль значення їх змінних:');
console.log(samsung);
console.log(iphone);
console.log(nokia);
console.log('________________________________');

Phone.prototype.receiveCall = function (name) {
    console.log(`Calling ${name}`);
}

Phone.prototype.getNumber = function () {
    return this.number;
}

console.log('Викликати методи receiveCall, getNumber кожного з об\'єктів:');
samsung.receiveCall('John');
samsung.getNumber();
console.log('_______');

iphone.receiveCall('Ann');
iphone.getNumber();
console.log('_______');

nokia.receiveCall('Tony');
nokia.getNumber();
console.log('________________________________');
// ======================================================================================================================================


// Створити клас Car, Engine та Driver.
// Клас Driver містить поля - ПІБ, стаж водіння.
// Клас Engine містить поля – потужність, виробник.
// Клас Car містить поля – марка автомобіля, клас автомобіля,
// вага, водій типу Driver, мотор типу Engine.
// Методи start(), stop(), turnRight(), turnLeft(),
// які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч".
// А також метод toString(), який виводить повну інформацію про автомобіль, її водія і двигуна.
// Створити похідний від Car клас - Lorry(вантажівка), що характеризується також вантажопідйомністю кузова.
// Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.

class Car {
    constructor(brand, carClass, weight, fullName, experience, power, company) {
        this.brand = brand;
        this.carClass = carClass;
        this.weight = weight;
        this.driver = new Driver(fullName, experience);
        this.engine = new Engine(power, company);
    }
    start() {
        alert('Поїхали');
    }
    stop() {
        alert('Зупиняємося');
    }
    turnRight() {
        alert('Поворот праворуч');
    }
    turnLeft() {
        alert('Поворот ліворуч');
    }
    toString() {
        alert(`марка автомобіля - ${this.brand}\nклас автомобіля - ${this.carClass}\nвага автомобіля - ${this.weight}\n`)
        alert(`ПІБ водія - ${this.driver.fullName}\nстаж водіння - ${this.driver.experience}\nпотужність мотора - ${this.engine.power}\nвиробник мотора - ${this.engine.company}`)
    }
}

class Engine {
    constructor(power, company) {
        this.power = power;
        this.company = company;
    }
}
class Driver {
    constructor(fullName, experience) {
        this.fullName = fullName;
        this.experience = experience;
    }
}

let bmw = new Car('BMW', 'sportcar', '1500kg', 'Anton Mars', '5 years', '800', 'BMW');

class Lorry extends Car {
    
    constructor(brand, carClass, weight, fullName, experience, power, company, carrying) {
        super(brand, carClass, weight, fullName, experience, power, company);
        this.carrying = carrying;
    }
}

let reno = new Car('Reno', 'big lorry', '1500kg', 'Anton Mars', '3 years', '800', 'Reno');
class SportCar extends Car {
    
    constructor(brand, carClass, weight, fullName, experience, power, company, maxSpeed) {
        super(brand, carClass, weight, fullName, experience, power, company);
        this.maxSpeed = maxSpeed;
    }
}

let ferrari = new Car('Ferrari', 'premium sport car', '1500kg', 'Anton Mars', '2 years', '800', 'Ferrari');

// ======================================================================================================================================


// Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
// Клас Animal містить змінні food, location і методи makeNoise, eat, sleep.Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
// Dog, Cat, Horse перевизначають методи makeNoise, eat.
// Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
// Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal).Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
// У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас.У циклі надсилайте їх на прийом до ветеринара.

class Animal {
    constructor(food, location) {
        this.food = food;
        this.location = location;
    }

    makeNoise() {
        console.log('Така тварина спить');
    }
    eat() {
        console.log('Така тварина їсть');
    }
    sleep() {
        console.log('Така тварина спить');
    }
}
class Dog extends Animal {
    constructor(food, location, owner) {
        super(food, location);
        this.owner = owner;
    }

    makeNoise() {
        console.log('Цей пес спить');
    }
    eat() {
        console.log('Цей пес їсть');
    }
}
class Cat extends Animal {
    constructor(food, location, lifes) {
        super(food, location);
        this.lifes = lifes;
    }

    makeNoise() {
        console.log('Цей кіт спить');
    }
    eat() {
        console.log('Цей кіт їсть');
    }
}
class Horse extends Animal {
    constructor(food, location, speed) {
        super(food, location);
        this.lifes = speed;
    }

    makeNoise() {
        console.log('Цей кінь спить');
    }
    eat() {
        console.log('Цей кінь їсть');
    }
}
class Veterinary extends Animal {

    treatAnimal(animal) {
        console.log(animal.food, animal.location);
    }

    main() {
        const animals = [new Dog('meat', 'Odessa', 'Sam'), new Cat('meat', 'Lviv', 'Roman'), new Horse('meat', 'Kharkiv', 'Ann')];
        
        animals.forEach(animal => console.log(`${animal} йде на прийом до ветеринара`));
    }
}