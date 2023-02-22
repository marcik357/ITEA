export const validate = (p, v) => p.test(v);

/*
export class CreateHTMLElement {
    constructor(tagName = "div", className, value, attr = []) {
        el = this;
        el = document.createElement(tagName);
        if (className !== undefined) {
            el.classList.add(className)
        }
        if (tagName.includes("inputtextareaoption")) {
            el.value = value;
        } else {
            el.innerText = value;
        }
        attr.forEach((attr) => {
            if (typeof attr === "object") {
                el.setAttribute(attr.props, attr.value)
            }
        })
    }
}
*/

export function createHTMLElement  (tagName = "div", className, value, attr = []) {
        const  el = document.createElement(tagName);
        if (className !== undefined) {
            el.classList.add(className)
        }
        if (tagName.includes("inputtextareaoption")) {
            el.value = value;
        } else {
            el.innerText = value;
        }
        attr.forEach((attr) => {

            // Зробити, щоб ми отримували точно сам об.
            if (typeof attr === "object" && attr !== null) {
                // отримати Значення з об...
                for (const [key, value] of Object.entries(attr)) {
                    el.setAttribute(key, value)
                }
            }
        })
        return el;
}