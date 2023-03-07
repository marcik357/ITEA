import { createHTMLElement } from "./functions.js";

//console.log(JSON.parse(localStorage.restorationBD));

//Вивід на сторінку позицій меню
function showRestoranMenu(arr = []) {
    //Знайшли tbody для виводу інформації по позиціям 
    const tbody = document.querySelector("tbody");

    arr.forEach(function ({productName, quantity, price,stopList, date}, i) {
        //Назва	Залишок	Ціна	Редагувати	Статус	Дата додавання	Видалити
        const tr = createHTMLElement("tr");
        const element = [
            createHTMLElement("td", undefined, i + 1),
            createHTMLElement("td", undefined, productName),
            createHTMLElement("td", undefined, quantity),
            createHTMLElement("td", undefined, price),
            createHTMLElement("td", undefined, "&#9998;"),
            createHTMLElement("td", undefined, stopList? "&#10004;" : "&#10008;"),
            createHTMLElement("td", undefined, date),
            createHTMLElement("td", undefined, "&#10006;"),
        ]
        tbody.append(tr);
        tr.append(...element)
    })
}

if (localStorage.restorationBD) {
    showRestoranMenu(JSON.parse(localStorage.restorationBD));
}

/*
[{"id":"4a$o_bcj2mq","productName":"Борщ","productWeiht":"400","ingredients":
"українська рідка страва, що вариться з посічених буряків, капусти з 
додатком картоплі та різних приправ[","price":"40","productImageUrl":
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Borscht_served.jpg/440px-Borscht_served.jpg",
"keywords":["Гарячі страви"," Чеврний борщ"," з буряком"],
"stopList":true,"quantity":0,"date":"\n    2023-1-25 20:6:11\n "}]
*/

