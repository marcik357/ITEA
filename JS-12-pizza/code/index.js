import { pizzaSelectSize, pizzaSelectTopping, show, drag, delTopping, delSauce, runAway, validate } from "./functions.js";
import { pizzaUser } from "./data-pizza.js"


document.querySelectorAll(".grid input")
    .forEach((input) => {
        if (input.type === "text" || input.type === "tel" || input.type === "email") {
            input.addEventListener("change", () => {
                if (input.type === "text" && validate(/^[А-я-іїґє]{2,}$/i, input.value)) {
                    selectInput(input, pizzaUser)
                } else if (input.type === "tel" && validate(/^\+380\d{9}$/, input.value)) {
                    selectInput(input, pizzaUser)
                } else if (input.type === "email" && validate(/^[a-z0-9_.]{3,}@[a-z0-9._]{2,}\.[a-z.]{2,9}$/i, input.value)) {
                    selectInput(input, pizzaUser)
                } else {
                    input.classList.add("error")
                }
            })
        } else if (input.type === "reset") {
            input.addEventListener("click", () => {

            })
        } else if (input.type === "button") {
            input.addEventListener("click", () => {
                localStorage.userInfo = JSON.stringify(pizzaUser);
            })
        }
    })

function selectInput(input, data) {
    input.className = ""
    input.classList.add("success")
    data.userName = input.value
}

document.querySelector("#pizza")
    .addEventListener("click", pizzaSelectSize)

document.querySelector(".ingridients")
    .addEventListener("click", pizzaSelectTopping)

show(pizzaUser)


document.body.addEventListener('dragstart', drag)
document.body.addEventListener('click', delTopping)
document.body.addEventListener('click', delSauce)
document.querySelector('#banner').addEventListener('mouseover', runAway)