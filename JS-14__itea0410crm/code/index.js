import { getLogin, getPassword } from "./var.js";
import { changeInputEvent, userLoginEvent, showModalEvent } from "./events.js";
import { createHTMLElement } from "./functions.js";

if (!sessionStorage.isLogin && !document.location.pathname.includes("/authorization")) {
    document.location = "/authorization";
}
//authorization
try {
    document.querySelector(".window form")
        .addEventListener("change", changeInputEvent);

    document.getElementById("disabled")
        .addEventListener("click", userLoginEvent)
}catch (error){
   // console.error(error)
}


//main page

const btn = document.querySelector(".add")
.addEventListener("click", showModalEvent);
const modalWindow = document.querySelector(".container-modal .modal");

const modalSave = createHTMLElement("button", "btn-save", "Зберегти", [{"type":"button"},{"data-type":"button"}]);
const modalClose = createHTMLElement("button", "btn-close", "Скасувати", [{"type":"button"},{"data-type":"button"}]);;

modalWindow.insertAdjacentHTML("beforeend", `
<h2>Додайте новий продукт до БД</h2>
<div class="modal__body"></div>
<div class="modal__control"></div>
`)

document.querySelector(".modal__control").append(modalSave, modalClose)



console.log(getLogin)
console.log(getPassword)

