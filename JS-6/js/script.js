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
        <p>Реалізуйте клас Worker (Працівник), який матиме такі властивості: name (ім'я), surname (прізвище),
        rate (ставка за день роботи), days (кількість відпрацьованих днів).
        Також клас повинен мати метод getSalary(), який виводитиме зарплату працівника.
        Зарплата - це добуток (множення) ставки rate на кількість відпрацьованих днів days.</p>
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
        <p>Реалізуйте клас MyString, який матиме такі методи: метод reverse(),
        який параметром приймає рядок, а повертає її в перевернутому вигляді, метод ucFirst(),
        який параметром приймає рядок, а повертає цей же рядок, зробивши його першу літеру великою
        та метод ucWords, який приймає рядок та робить заголовною першу літеру кожного слова цього рядка.</p>
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

document.body.insertAdjacentHTML("beforeend", `
    <div class="task">
        <p>Створіть клас Phone, який містить змінні number, model і weight.
        Створіть три екземпляри цього класу.
        Виведіть на консоль значення їх змінних.
        Додати в клас Phone методи: receiveCall, має один параметр - ім'я. Виводить на консоль повідомлення "Телефонує {name}". Метод getNumber повертає номер телефону. Викликати ці методи кожного з об'єктів.</p>
    </div>
    <div>
        <p>
            <pre>
class Phone {
    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;
    }
}
            </pre>
        </p>
    </div>
    <p>Створюю екземпляри класів і потім виводжу їх в консоль</p>
    <p><b>let samsung = new Phone('0988887799', 's20', '120g')</b></p>
    <p><b>let iphone = new Phone('0988887800', '14', '110g')</b></p>
    <p><b>let nokia = new Phone('0988887801', 'n82', '200g')</b></p>
    
    <p><b>console.log(samsung)</b></p>
    <p><b>console.log(iphone)</b></p>
    <p><b>console.log(nokia)</b></p>

    <p>Далі додаю в клас Phone нові методи</p>
            <pre>
Phone.prototype.receiveCall = function (name) {
    console.log(\`Calling \${ name }\`);
}

Phone.prototype.getNumber = function () {
    return this.number;
}
            </pre>

    <p>Викликати методи receiveCall, getNumber кожного з об\'єктів:</p>
    <p><b>samsung.receiveCall('John')</b></p>
    <p><b>samsung.getNumber()</b></p>
    <p><b>iphone.receiveCall('Ann')</b></p>
    <p><b>iphone.getNumber()</b></p>
    <p><b>nokia.receiveCall('Tony')</b></p>
    <p><b>nokia.getNumber()</b></p>
    <p><i>Реальні результати виведені в консоль</i></p>


    <hr>
`)
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
        return `
            <p>марка автомобіля - ${this.brand}<br>клас автомобіля - ${this.carClass}<br>вага автомобіля - ${this.weight}</p>
            <p>ПІБ водія - ${this.driver.fullName}<br>стаж водіння - ${this.driver.experience}<br>потужність мотора - ${this.engine.power}<br>виробник мотора - ${this.engine.company}</p>
        `;
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

class Lorry extends Car {
    constructor(brand, carClass, weight, fullName, experience, power, company, carrying) {
        super(brand, carClass, weight, fullName, experience, power, company);
        this.carrying = carrying;
    }
    toString() {
        return `
            ${super.toString()}
            <p>Оскільки це вантажівка, то в неї ще є властивість "вантажопідйомність кузова", і для цієї вантажівки вона дорівнює ${this.carrying}</p>
        `;
    }
}

class SportCar extends Car {
    constructor(brand, carClass, weight, fullName, experience, power, company, maxSpeed) {
        super(brand, carClass, weight, fullName, experience, power, company);
        this.maxSpeed = maxSpeed;
    }
    toString() {
        return `
            ${super.toString()}
            <p>Оскільки це суперкар, то в нього ще є властивість "гранична швидкість", і для цього авто вона дорівнює ${this.maxSpeed}</p>
        `;
    }
}


let bmw = new Car('BMW', 'sportcar', '1500kg', 'Anton Mars', '5 years', '800', 'BMW');
let reno = new Lorry('Reno', 'big lorry', '1500kg', 'Anton Mars', '3 years', '800', 'Reno', '4t');
let ferrari = new SportCar('Ferrari', 'premium sport car', '1500kg', 'Anton Mars', '2 years', '800', 'Ferrari', '300mph');


document.body.insertAdjacentHTML("beforeend", `
    <div class="task">
        <p>Створити клас Car , Engine та Driver.
        Клас Driver містить поля - ПІБ, стаж водіння.
        Клас Engine містить поля – потужність, виробник.
        Клас Car містить поля – марка автомобіля, клас автомобіля, вага, водій типу Driver, мотор типу Engine. Методи start(), stop(), turnRight(), turnLeft(), які виводять на друк: "Поїхали", "Зупиняємося", "Поворот праворуч" або "Поворот ліворуч". А також метод toString(), який виводить повну інформацію про автомобіль,  її водія і двигуна.
        Створити похідний від Car клас - Lorry (вантажівка), що характеризується також вантажопідйомністю кузова.
        Створити похідний від Car клас - SportCar, який також характеризується граничною швидкістю.</p> 
    </div>
    <div>
        <p>
            <pre>
<b>class Car</b> {
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
        return \`
            < p >марка автомобіля - \${this.brand}<br>клас автомобіля - \${this.carClass}<br>вага автомобіля - \${this.weight}< / p >
            < p >ПІБ водія - \${this.driver.fullName}<br>стаж водіння - \${this.driver.experience}<br>потужність мотора - \${this.engine.power}<br>виробник мотора - \${this.engine.company} < / p >
        \`
    }
}

<b>class Engine</b> {
    constructor(power, company) {
        this.power = power;
        this.company = company;
    }
}
<b>class Driver</b> {
    constructor(fullName, experience) {
        this.fullName = fullName;
        this.experience = experience;
    }
}

<b>class Lorry extends Car</b> {
    constructor(brand, carClass, weight, fullName, experience, power, company, carrying) {
        super(brand, carClass, weight, fullName, experience, power, company);
        this.carrying = carrying;
    }
    toString() {
        return  \`
            \${super.toString()}
            < p > Оскільки це вантажівка, то в неї ще є властивість "вантажопідйомність кузова", і для цієї вантажівки вона дорівнює \${this.carrying}< / p >
        \`
    }
}

<b>class SportCar extends Car</b> {
    constructor(brand, carClass, weight, fullName, experience, power, company, maxSpeed) {
        super(brand, carClass, weight, fullName, experience, power, company);
        this.maxSpeed = maxSpeed;
    }
        toString() {
        return \`
            \${super.toString()}
            < p > Оскільки це суперкар, то в нього ще є властивість "гранична швидкість", і для цього авто вона дорівнює \${this.maxSpeed}< / p >
        \`
    }
}
            </pre>
        </p>
    </div>

    <p>Створюємо екземпляр класу Car - <b>let bmw = new Car('BMW', 'sportcar', '1500kg', 'Anton Mars', '5 years', '800', 'BMW')</b></p>
    <p>Створюємо екземпляр класу Lorry - <b>let reno = new Lorry('Reno', 'big lorry', '1500kg', 'Anton Mars', '3 years', '800', 'Reno', '4t')</b></p>
    <p>Створюємо екземпляр класу SportCar - <b>let ferrari = new SportCar('Ferrari', 'premium sport car', '1500kg', 'Anton Mars', '2 years', '800', 'Ferrari', '300mph')</b></p>
    

    <p>У кожного з екземплярів викличемо метод toString()</p>
    <p><b>bmw.toString() :</b></p>
    ${bmw.toString()}

    <p><b>reno.toString() :</b></p>
    ${reno.toString()}

    <p><b>ferrari.toString() :</b></p>
    ${ferrari.toString()}

    <hr>
`)

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
        this.speed = speed;
    }
    makeNoise() {
        console.log('Цей кінь спить');
    }
    eat() {
        console.log('Цей кінь їсть');
    }
}

// const animals = [new Dog('meat', 'Odessa', 'Sam'), new Cat('meat', 'Lviv', 'Roman'), new Horse('meat', 'Kharkiv', 'Ann')];
const dog = new Dog('meat', 'Odessa', 'Sam');
const cat = new Cat('meat', 'Lviv', 9);
const horse = new Horse('grass', 'Kharkiv', '40mph');
class Veterinary {
    treatAnimal(animal) {
        return `<p>${animal.constructor.name} eat ${animal.food}, and live in ${animal.location}</p>`;
    }
    main(...animals) {
        let animalsList = '';
        
        [...animals].forEach(animal => {
            animalsList += `
                <p>${animal.constructor.name} йде на прийом до ветеринара</p>
            `;
        });
        
        return animalsList;
    }
}

document.body.insertAdjacentHTML("beforeend", `
    <div class="task">
        <p>Створити клас Animal та розширюючі його класи Dog, Cat, Horse.
        Клас Animal містить змінні food, location і методи makeNoise, eat, sleep. Метод makeNoise, наприклад, може виводити на консоль "Така тварина спить".
        Dog, Cat, Horse перевизначають методи makeNoise, eat.
        Додайте змінні до класів Dog, Cat, Horse, що характеризують лише цих тварин.
        Створіть клас Ветеринар, у якому визначте метод void treatAnimal(Animal animal). Нехай цей метод роздруковує food і location тварини, що прийшла на прийом.
        У методі main створіть масив типу Animal, в який запишіть тварин всіх типів, що є у вас. У циклі надсилайте їх на прийом до ветеринара.</p>
    </div>
    <div>
        <p>
            <pre>
<b>class Animal</b> {
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

<b>class Dog extends Animal</b> {
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

<b><i>По аналогії ще клас Cat та Horse...</i></b>

<b>class Veterinary</b> {
    treatAnimal(animal) {
        let animalInfo = document.createElement('div');
        animalInfo.innerHTML = \`< p > \${ animal.constructor.name } eat \${ animal.food }, and live in \${ animal.location }</ > \`;
        document.body.append(animalInfo);
    }
    main(...animals) {
        let animalsList = document.createElement('div');

        [...animals].forEach(animal => {
            animalsList.insertAdjacentHTML('beforeend', \`
                < p > \${ animal.constructor.name } йде на прийом до ветеринара</ >
            \`);
        });

        document.body.append(animalsList);
    }
}
            </pre>
        </p>

        ;


        <p>Створюємо екземпляри класів Dog, Cat та Horse:</p>
        <p><b>const dog = new Dog('meat', 'Odessa', 'Sam')</b></p>
        <p><b>const cat = new Cat('meat', 'Lviv', 9)</b></p>
        <p><b>const horse = new Horse('grass', 'Kharkiv', '40mph')</b></p>

        <p>Викликаємо для кожної тварини new Veterinary().treatAnimal(animal):</p>
        <p><b>new Veterinary().treatAnimal(dog)</b></p>
        ${new Veterinary().treatAnimal(dog)}
        <p><b>new Veterinary().treatAnimal(cat)</b></p>
        ${new Veterinary().treatAnimal(cat)}
        <p><b>new Veterinary().treatAnimal(horse)</b></p>
        ${new Veterinary().treatAnimal(horse)}
        
        <p><b>Далі "відправляємо к ветеринару" всіх тварин new Veterinary().main(dog, cat, horse):</b></p>
        ${new Veterinary().main(dog, cat, horse)}
    </div>
    <hr>
`)
