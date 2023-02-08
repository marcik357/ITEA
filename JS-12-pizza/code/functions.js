import { pizzaUser, pizzaBD } from "./data-pizza.js";

const table = document.querySelector(".table")

const pizzaSelectSize = (e) => {
    if (e.target.tagName === "INPUT" && e.target.checked) {
        pizzaUser.size = pizzaBD.size.find(el => el.name === e.target.id);
    }
    show(pizzaUser)
};

const pizzaSelectTopping = (e) => {
    if (!e.type) e.target = e;
    switch (e.target.id) {
        case "sauceClassic": pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === e.target.id);
            break;
        case "sauceBBQ": pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === e.target.id);
            break;
        case "sauceRikotta": pizzaUser.sauce = pizzaBD.sauce.find(el => el.name === e.target.id);
            break;
        default:
            if (pizzaUser.topping.length) {
                if (pizzaUser.topping.find(el => el === pizzaBD.topping.find(el => el.name === e.target.id))) {
                    pizzaUser.topping.map(el => {
                        if (el.name === e.target.id) el.count = (el.count || 0) + 1;
                    })
                } else {
                    let el = pizzaBD.topping.find(el => el.name === e.target.id);
                    el.count = 1;
                    pizzaUser.topping.push(el);
                }
            } else {
                pizzaUser.topping.push(pizzaBD.topping.find(el => el.name === e.target.id));
                pizzaUser.topping[0].count = 1;
            }
            break;
    }
    show(pizzaUser);
    if (e.target.tagName === "IMG") {
        if (e.target.id.match('sauce')) {
            const sauce = document.querySelector(".sauce-layer")
            sauce.innerHTML = `<img src="${e.target.src}" data-name="${e.target.id}">`;
        } else {
            table.insertAdjacentHTML("beforeend", `<img src="${e.target.src}" data-name="${e.target.id}">`)
        }
    }
}


function show(pizza) {
    const price = document.getElementById("price");
    const sauce = document.getElementById("sauce");
    const topping = document.getElementById("topping")

    let totalPrice = 0;
    if (pizza.size !== "") {
        totalPrice += parseFloat(pizza.size.price);
    }
    if (pizza.sauce !== "") {
        totalPrice += parseFloat(pizza.sauce.price);
    }
    if (pizza.topping.length) {
        totalPrice += pizza.topping.reduce((a, b) => a + (b.price * b.count), 0)
    }
    price.innerText = totalPrice;

    if (pizza.sauce !== "") {
        sauce.innerHTML = `<span class="topping">${pizza.sauce.productName}<button type="button" class="sauce-del"></button></span>`
    }

    if (Array.isArray(pizza.topping)) {
        topping.innerHTML = pizza.topping.map(el => {
            if (el.count > 1) {
                return `<span class="topping" data-count=${el.count}>${el.productName}<button type="button" class="topping-del"></button></span>`
            } else {
                return `<span class="topping">${el.productName}<button type="button" class="topping-del"></button></span>`
            }
        }).join("");
    }

    pizzaUser.price = totalPrice;
    pizzaUser.data = new Date()
}

// 
function drag(e) {
    if (e.target.closest('.ingridients')) {
        let dragEl = e.target

        table.addEventListener('dragleave', dragParts)
        function dragParts() {
            table.removeEventListener('dragleave', dragParts);
            pizzaSelectTopping(dragEl);
        }
    }
}

function delTopping(e) {
    if (e.target.closest('.topping-del')) {
        let btn = e.target.closest('.topping-del');
        let currentTopping = btn.parentElement
        let type = pizzaBD.topping.find(el => el.productName === currentTopping.textContent);

        currentTopping.dataset.count ? currentTopping.dataset.count -= 1 : currentTopping.dataset.count = 0;
        pizzaUser.topping.map(el => {
            if (el.productName === currentTopping.textContent) {
                let currentImg = document.querySelectorAll(`[data-name='${el.name}']`);

                currentImg[currentImg.length - 1].remove();
                el.count -= 1;
            }
        })
        if (currentTopping.dataset.count == 0) {
            pizzaUser.topping.splice(pizzaUser.topping.indexOf(type), 1)
            currentTopping.remove();
        }

        pizzaUser.price -= type.price;
        price.innerText = pizzaUser.price;
    }
}

function delSauce(e) {
    if (e.target.classList.contains('sauce-del')) {
        pizzaUser.price -= pizzaUser.sauce.price;
        price.innerText = pizzaUser.price;
        pizzaUser.sauce = '';
        document.querySelector('[data-name*=sauce]').remove();
        document.getElementById("sauce").innerHTML = '';
    }
}

function runAway(e) {
    const banner = document.querySelector('#banner');
    if (e.target.closest('#banner')) {
        let bannerH = banner.offsetHeight;
        let bannerW = banner.offsetWidth;
        let y = Math.floor(Math.random() * (window.innerHeight - banner.offsetHeight + 1))
        let x = Math.floor(Math.random() * (window.innerWidth - banner.offsetWidth + 1))
        
        if (y > window.innerHeight - bannerH) {
            y = window.innerHeight - bannerH
        } else if (y < bannerH) {
            y = 0;
        }
        if (x > window.innerWidth - bannerW) {
            x = window.innerWidth - bannerW
        } else if (x < 0) {
            x = 0
        }

        banner.style.bottom = y + 'px';
        banner.style.right = x + 'px';
    }
}

const validate = (pattern, value) => pattern.test(value);

export { pizzaSelectSize, pizzaSelectTopping, show, drag, delTopping, delSauce, runAway, validate }