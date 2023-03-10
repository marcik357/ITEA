import { getLogin, getPassword } from "./var.js";
import { generationId, validate, createInputSring, dateNow } from "./functions.js";
import { StoreElementCRM, videoElementCRM, restElementCRM } from "./class.js";


//changeInputEvent Object
const isDisabledBtn = {
    flagLogin: false,
    flagPassword: false
}

function changeInputEvent(e) {
    if (e.target.dataset.type === "login" && validate(new RegExp("^" + getLogin + "$"), e.target.value)) {
        e.target.classList.remove("error")
        isDisabledBtn.flagLogin = true;
    } else if (e.target.dataset.type === "password" && validate(new RegExp("^" + getPassword + "$"), e.target.value)) {
        e.target.classList.remove("error")
        isDisabledBtn.flagPassword = true;
    } else {
        e.target.classList.add("error");
        if (e.target.dataset.type === "login") {
            isDisabledBtn.flagLogin = false;
        } else if (e.target.dataset.type === "password") {
            isDisabledBtn.flagPassword = false;
        }
    }

    if (isDisabledBtn.flagLogin && isDisabledBtn.flagPassword) {
        document.getElementById("disabled").disabled = false;
    } else {
        document.getElementById("disabled").disabled = true;
    }
}

function userLoginEvent() {
    sessionStorage.isLogin = true;
    document.location = "/"
}

function showModalEvent() {
    const modal = document.querySelector(".container-modal").classList.remove("hide")
}

function hideModalEvent() {
    const modal = document.querySelector(".container-modal").classList.add("hide")
}

function changeCategoryEvent(e) {
    const modal__body = document.querySelector(".modal__body");
    modal__body.innerHTML = "";
    console.log(e.target.value);
    if (e.target.value === "Магазин") {
        modal__body.insertAdjacentHTML("beforeend", `
       <form>
        ${createInputSring("text", "Назва продукту", generationId(), "productName")}
        ${createInputSring("number", "Кількість продукту", generationId(), "productQuantity")}
        ${createInputSring("number", "Вартість продукту", generationId(), "porductPrice")}
        ${createInputSring("text", "Опис продукту", generationId(), "productDescription")}
        ${createInputSring("url", "Картинка продукту", generationId(), "productImage")}
        ${createInputSring("text", "Ключеві слова для пошуку. Розділяти комою", generationId(), "keywords")}
       </form>
       `)

    } else if (e.target.value === "Відео хостинг") {
        modal__body.insertAdjacentHTML("beforeend", `
        <form>
            ${createInputSring("text", "Назва відео", generationId(), "productName")}
            ${createInputSring("url", "Постер", generationId(), "poster")}
            ${createInputSring("url", "Посилання на відео", generationId(), "url")}
            ${createInputSring("text", "Опис продукту", generationId(), "description")}
            ${createInputSring("text", "Ключеві слова для пошуку. Розділяти комою", generationId(), "keywords")}
        </form>
        `)
    } else if (e.target.value === "Рестаран") {
        modal__body.insertAdjacentHTML("beforeend", `
        <form>
            ${createInputSring("text", "Назва Страви", generationId(), "productName")}
            ${createInputSring("text", "Грамовка", generationId(), "productWeiht")}
            ${createInputSring("text", "Опис продукту", generationId(), "description")}
            ${createInputSring("text", "Склад", generationId(), "ingredients")}
            ${createInputSring("text", "Вартість продукту", generationId(), "price")}
            ${createInputSring("text", "Ключеві слова для пошуку. Розділяти комою", generationId(), "keywords")}
            ${createInputSring("url", "Забраження продукту", generationId(), "productimageUrl")}
        </form>
        `)
    }
}

function saveData() {
    try {
        const [isCategory] = document.querySelector("select").selectedOptions;
        const [...inputs] = document.querySelectorAll("form input");
        if (isCategory.value === "Магазин") {
            const obj = {
                productName: "string",
                porductPrice: "number",
                productImage: "string",
                productDescription: "string",
                keywords: "string array",
            };

            inputs.forEach(e => {
                obj[e.dataset.type] = e.value;
                e.value = ''
            })

            const store = JSON.parse(localStorage.storeBD);
            store.push(new StoreElementCRM(
                obj.productName,
                obj.porductPrice,
                obj.productImage,
                obj.productDescription,
                obj.productQuantity,
                obj.keywords,
                dateNow,
                generationId));

            localStorage.storeBD = JSON.stringify(store);

        } else if (isCategory.value === "Відео хостинг") {
            const obj = {
                productName: "string",
                poster: "string",
                url: "string",
                description: "string",
                keywords: "string array",
            };

            inputs.forEach(e => {
                obj[e.dataset.type] = e.value;
                e.value = ''
            })

            const video = JSON.parse(localStorage.videoBD);
            video.push(new videoElementCRM(
                obj.productName,
                obj.poster,
                obj.url,
                obj.description,
                obj.keywords,
                dateNow,
                generationId));

            localStorage.videoBD = JSON.stringify(video);

        } else if (isCategory.value === "Рестаран") {
            const obj = {
                productName: "string",
                productWeiht: "number",
                description: "string",
                ingredients: "string array",
                price: "number",
                keywords: "string array",
                productimageUrl: "string",
            };

            inputs.forEach(e => {
                obj[e.dataset.type] = e.value;
                e.value = ''
            })

            const rest = JSON.parse(localStorage.restorationBD);
            rest.push(new restElementCRM(
                obj.productName,
                obj.productWeiht,
                obj.description,
                obj.ingredients,
                obj.price,
                obj.keywords,
                obj.productimageUrl,
                dateNow,
                generationId));

            localStorage.restorationBD = JSON.stringify(rest);

        }
    } catch (e) {
        console.error(e)
    }
}

function exportDataEvent() {
    let windowData = open("/window", "test");
    console.log(document.querySelector(".show-json"));

    setTimeout(() => {
        windowData.close()
    }, 5000)
}

export { changeInputEvent, userLoginEvent, showModalEvent, changeCategoryEvent, hideModalEvent, saveData, exportDataEvent }