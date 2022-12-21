// Створити об'єкт "Документ", де визначити властивості "Заголовок, тіло, футер, дата". 
let doc1 = {
    title: '',
    body: '',
    footer: '',
    date: '',
}
document.body.insertAdjacentHTML("beforeend", `
Створити об'єкт "Документ", де визначити властивості "Заголовок, тіло, футер, дата".
<br>
let doc1 = {
        title: '',
        body: '',
        footer: '',
        date: '',
    }
    <hr>
`)
// ===============================================================================================


// Створити вкладений об'єкт - "Додаток". 
let doc2 = {
    title: '',
    body: '',
    footer: '',
    date: '',
    addition: {},
}
document.body.insertAdjacentHTML("beforeend", `
Створити вкладений об'єкт - "Додаток".
<br>
let doc2 = {
    title: '',
    body: '',
    footer: '',
    date: '',
    addition: {},
}
<hr>
`)
// ===============================================================================================


// Створити об'єкт "Додаток",  зі вкладеними об'єктами, "Заголовок, тіло, футер, дата".
let addition = {
    title: {},
    body: {},
    footer: {},
    date: {},
}
document.body.insertAdjacentHTML("beforeend", `
Створити об'єкт "Додаток",  зі вкладеними об'єктами, "Заголовок, тіло, футер, дата".
<br>
let addition = {
    title: {},
    body: {},
    footer: {},
    date: {},
}
<hr>
`)
// ===============================================================================================


// Створити методи для заповнення та відображення документа.використовуючі оператор in
let doc3 = {
    title: '',
    body: '',
    footer: '',
    date: '',
    fillDoc() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                this[key] = prompt(`Enter value for ${key}`)
            }
        }
    },
    showDoc() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                document.body.insertAdjacentHTML('beforeend', `<div>${this[key]}</div>`)
            }
        }
    }
}
// ===============================================================================================








/* спроба рекурсивного заповнення об'єкта з вкладеними об'єктами
let document1 = {
    title: '',
    addition: {
        titleKey1: 1,
        addTitle: {
            titleKey2: 1
        },
    },
    fillDocument() {
        for (let key in this) {
            if (typeof this[key] === 'object' && this[key] !== null) {
                if (Object.keys(this[key]).length) {
                    for (let [keyIn, value] of Object.entries(this[key])) {
                        console.log('tyt');
                        this[keyIn] = document1.fillDocument.call(value)
                    }
                }
            } else {
                this[key] = prompt(`Enter data for ${key}`);
                console.log(this[key]);
            }
        }
    },
}

Object.defineProperties(document1, {
    'fillDocument': {
        enumerable: false,
        writable: false,
    },
    'showDocument': {
        enumerable: false,
        writable: false,
    }
});

document1.fillDocument()
*/