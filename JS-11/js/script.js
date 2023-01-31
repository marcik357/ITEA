// Дано інпути.Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів.
// Скільки символів має бути в інпуті, зазначається в атрибуті data - length.
// Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.

// Get form
const formTask1 = document.querySelector('[data-id="task1"]')
// Set listener on form to check changes in inputs
formTask1.addEventListener('change', validateLength)
// Validate length and toggle class to visualize
function validateLength(e) {
    if (e.target.dataset.lenght == e.target.value.length) {
        e.target.classList.add('valid')
        e.target.classList.remove('unvalid')
    } else {
        e.target.classList.remove('valid')
        e.target.classList.add('unvalid')
    }
}


// - При завантаженні сторінки показати користувачеві поле введення(`input`) з написом`Price`.Це поле буде служити для введення числових значень
// - Поведінка поля має бути такою:
// - При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
// - Коли забрали фокус з поля - його значення зчитується, над полем створюється`span`, в якому має бути виведений текст:
// Поруч із ним має бути кнопка з хрестиком(`X`).Значення всередині поля введення фарбується зеленим.
// - При натисканні на`Х` - `span` з текстом та кнопка `X` повинні бути видалені.
// - Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою,
// під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.

// Show input on load
window.addEventListener('DOMContentLoaded', showPriceInput);
function showPriceInput() {
    //Create form
    const formTask2 = document.createElement('form')
    formTask2.setAttribute('id', 'formTask2')
    //Create input
    const priceInput = document.createElement('input')
    priceInput.classList.add('price-input')
    priceInput.setAttribute('type', 'text')
    priceInput.setAttribute('name', 'price')
    priceInput.setAttribute('autocomplete', 'off')
    priceInput.setAttribute('placeholder', 'Price')
    // Insert new elements on page
    formTask2.append(priceInput);
    document.body.append(formTask2);
    // Add listeners
    priceInput.addEventListener('keypress', enterOnlyDigit)
    priceInput.addEventListener('focus', addHightlight)
    priceInput.addEventListener('blur', validateInput)
}
// Allowing enter only digits (minus can be only at first position and when there is no value)
function enterOnlyDigit(e) {
    if ((e.target.value.length && isNaN(e.key) || e.key === ' ') || (!e.target.value.length && isNaN(e.key) && e.key !== '-')) {
        e.preventDefault()
    }
}
// Add hightlight on input on focus
function addHightlight(e) {
    e.target.classList.add('focus')
    e.target.classList.remove('error')
    removeElement('.price-error')
}
// Validate input value on focus lose
function validateInput(e) {
    e.target.classList.remove('focus');
    if (e.target.value > 0) {
        e.target.classList.add('valid')
        showPrice(e);
    } else if (e.target.value.length && e.target.value <= 0) {
        e.target.classList.remove('valid')
        e.target.classList.add('error')
        showError(e)
        removeElement('.price-span')
    }
}
// Show span with price on top
function showPrice(e) {
    const elemClass = '.price-span'
    removeElement(elemClass)
    e.target.insertAdjacentHTML('beforebegin', `
        <span class=${elemClass.slice(1)}>Ціна: ${e.target.value}<button type="button" class="${elemClass.slice(1)}__close"></button></span>
    `);
    document.querySelector(elemClass).addEventListener('click', (e) => e.target.parentElement.remove())
}
// Show error on bottom
function showError(e) {
    const error = document.createElement('span');
    error.classList.add('price-error')
    error.innerText = 'Please enter correct price';
    e.target.after(error);
}
// Remove element
function removeElement(selector) {
    if (document.querySelector(selector)) {
        document.querySelector(selector).remove()
    }
}