import { getLogin, getPassword, modalClose, modalSave } from "./var.js";
import { changeInputEvent, userLoginEvent, showModalEvent, hideModalEvent, saveData } from "./events.js";
import { createHTMLElement, categorySelect } from "./functions.js";

if (!sessionStorage.isLogin && !document.location.pathname.includes("/authorization")) {
    document.location = "/authorization";
}
//authorization
try {
    document.querySelector(".window form")
        .addEventListener("change", changeInputEvent);

    document.getElementById("disabled")
        .addEventListener("click", userLoginEvent)
} catch (error) {
    // console.error(error)
}


//main page
try {
    document.querySelector(".add")
        .addEventListener("click", showModalEvent);

    const modalWindow = document.querySelector(".container-modal .modal");

    modalWindow.insertAdjacentHTML("beforeend", `
    <h2>Додайте новий продукт до БД</h2>
    <div class="catigoty"></div>
    <div class="modal__body"></div>
    <div class="modal__control"></div>
    `)

    document.querySelector(".modal__control").append(modalSave, modalClose);
    categorySelect();

    modalClose.addEventListener("click", hideModalEvent);

    modalSave.addEventListener("click", saveData)

    /*
    Ваші події 
    */

} catch (e) {
    // console.error(e)
}


console.log(getLogin, getPassword);

if (!localStorage.storeBD) {
    localStorage.storeBD = JSON.stringify([])
}
if (!localStorage.videoBD) {
    localStorage.videoBD = JSON.stringify([])
}
if (!localStorage.restorationBD) {
    localStorage.restorationBD = JSON.stringify([])
}

