import { hideModalEvent, showModalEvent } from "./events.js";
import { createHTMLElement, createEditProductInput } from "./functions.js";
import { modalClose, modalSave } from "./var.js";

//console.log(JSON.parse(localStorage.restorationBD));

//Вивід на сторінку позицій меню
function showVideoProduct(arr = []) {
    //Знайшли tbody для виводу інформації по позиціям 
    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";

    arr.forEach(function ({ productName, date, url, id }, i) {
        //#	Назва	Залишок	Ціна	Редагувати	Статус	Дата додавання	Видалити
        const tr = createHTMLElement("tr");
        const element = [
            createHTMLElement("td", undefined, i + 1),
            createHTMLElement("td", undefined, productName),
            createHTMLElement("td", undefined, date),
            createHTMLElement("td", undefined, url),
            createHTMLElement("td", undefined, `<span data-key="${id}" class="icon">&#9998;</span>`, undefined, editProductVideoEvent),
            createHTMLElement("td", undefined, `<span data-key="${id}" class='icon'>&#10006;</span>`, undefined, delProductVideoEvent),
        ]
        element[3].style.maxWidth = '700px';
        element[3].style.overflow = 'hidden';

        tbody.append(tr);
        tr.append(...element)
    })
}

// Читаємо з localStorage
if (localStorage.videoBD) {
    showVideoProduct(JSON.parse(localStorage.videoBD));
}

// Змінюємо продукут з БД
function editProductVideoEvent(e) {
    if (!e.target.dataset.key) return;
    showModalEvent();

    const span = e.target;
    const video = JSON.parse(localStorage.videoBD);

    const modalWindow = document.querySelector(".modal");
    const modalBody = createHTMLElement("div", "modal-body");
    modalWindow.append(modalBody);

    // Робота з кнопками 
    const btns = createHTMLElement("div", "btns-save");

    modalSave.addEventListener("click", () => {
        newSaveProductInfo(modalBody, rez)
        hideModalEvent()
        modalBody.remove()
        showVideo(JSON.parse(localStorage.videoBD));
    });

    modalClose.addEventListener("click", () => {
        hideModalEvent()
        modalBody.remove()
    });

    btns.append(modalSave, modalClose);
    modalWindow.append(btns)

    //Визначення обєвкта для редагування
    const rez = video.find((a) => span.dataset.key === a.id);
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
            case "productName": obj.productName = input.value;
                return
            case "poster": obj.poster = input.value;
                return
            case "url": obj.url = input.value;
                return
            case "description": obj.description = input.value;
                return
        }
    })

    const video = JSON.parse(localStorage.videoBD);
    video.splice(video.findIndex(el => el.id === oldObj.id), 1, obj);
    localStorage.videoBD = JSON.stringify(video);
}

function delProductVideoEvent(e) {
    if (!e.target.dataset.key) return;

    const video = JSON.parse(localStorage.videoBD);

    e.target.closest('tr').remove()
    video.splice(video.findIndex(el => el.id === e.target.dataset.key), 1)
    localStorage.videoBD = JSON.stringify(video);

    const rows = document.querySelectorAll("tbody tr");
    [...rows].map((row, index) => [...row.children][0].textContent = index + 1)
}