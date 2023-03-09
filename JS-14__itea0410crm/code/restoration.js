import { hideModalEvent, showModalEvent } from "./events.js";
import { createHTMLElement, createEditProductInput } from "./functions.js";
import { modalClose, modalSave } from "./var.js";

//Вивід на сторінку позицій меню
function showRestoranMenu(arr = []) {
    //Знайшли tbody для виводу інформації по позиціям 
    const tbody = document.querySelector("tbody");

    arr.forEach(function ({productName, quantity, price, status, date, id}, i) {
        //Назва	Залишок	Ціна	Редагувати	Статус	Дата додавання	Видалити
        const tr = createHTMLElement("tr");
        const element = [
            createHTMLElement("td", undefined, i + 1),
            createHTMLElement("td", undefined, productName),
            createHTMLElement("td", undefined, quantity),
            createHTMLElement("td", undefined, price),
            createHTMLElement("td", undefined, `<span data-key="${id}" class="icon">&#9998;</span>`, undefined, editProductRestoranEvent),
            createHTMLElement("td", undefined, status ? "<span class='icon green'>&#10004;</span>" : "<span class='icon red'>&#10008;</span>"),
            createHTMLElement("td", undefined, date),
            createHTMLElement("td", undefined, `<span data-key="${id}" class='icon'>&#10006;</span>`, undefined, delProductRestoranEvent),
        ]
        tbody.append(tr);
        tr.append(...element)
    })
}

if (localStorage.restorationBD) {
    showRestoranMenu(JSON.parse(localStorage.restorationBD));
}

// Змінюємо продукут з БД
function editProductRestoranEvent(e) {
    if (!e.target.dataset.key) return;
    showModalEvent();

    const span = e.target;
    const rest = JSON.parse(localStorage.restorationBD);

    const modalWindow = document.querySelector(".modal");
    const modalBody = createHTMLElement("div", "modal-body");
    modalWindow.append(modalBody);

    // Робота з кнопками 
    const btns = createHTMLElement("div", "btns-save");

    modalSave.addEventListener("click", () => {
        newSaveProductInfo(modalBody, rez)
        hideModalEvent()
        modalBody.remove()
        showRestoranMenu(JSON.parse(localStorage.restorationBD))
    });

    modalClose.addEventListener("click", () => {
        hideModalEvent()
        modalBody.remove()
    });

    btns.append(modalSave, modalClose);
    modalWindow.append(btns)

    //Визначення обєвкта для редагування
    const rez = rest.find((a) => span.dataset.key === a.id);
    const data = Object.entries(rez);

    // Редагування позиції
    const inputsElemets = data.map(([props, value]) => createEditProductInput(props, value))
    modalBody.append(...inputsElemets)
}

function newSaveProductInfo(newObj, oldObj) {
    const inputs = newObj.querySelectorAll("input");

    const obj = {
        id: oldObj.id,
        date: oldObj.date,
        status: false
    }

    inputs.forEach(input => {
        switch (input.key) {
            case "porductPrice": obj.porductPrice = input.value;
                return
            case "productDescription": obj.productDescription = input.value;
                return
            case "productImage": obj.productImage = input.value;
                return
            case "productName": obj.productName = input.value;
                return
            case "productQuantity": obj.productQuantity = input.value;
                return
        }
    })

    obj.productQuantity > 0 ? obj.status = true : obj.status = false;

    const rest = JSON.parse(localStorage.restorationBD);
    rest.splice(rest.findIndex(el => el.id === oldObj.id), 1, obj);
    localStorage.restorationBD = JSON.stringify(rest);
}

function delProductRestoranEvent(e) {
    if (!e.target.dataset.key) return;

    const rest = JSON.parse(localStorage.restorationBD);
    const rows = document.querySelectorAll("tbody tr");

    e.target.closest('tr').remove()
    rest.splice(rest.findIndex(el => el.id === e.target.dataset.key), 1)
    localStorage.restorationBD = JSON.stringify(rest);

    [...rows].map((row, index) => [...row.children][0].textContent = index + 1)
}