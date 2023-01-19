// Create wrapper div for work
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper')
document.body.prepend(wrapper)
//=============================================================================



// Створіть 2 інпути та одну кнопку.Зробіть так, щоб інпути обмінювалися вмістом.
// Create input and button
const inputFirst = document.createElement('input');
const btnExchanger = document.createElement('button');
// Add input type and class, add button class and inner text
inputFirst.type = 'text';
inputFirst.classList.add('exchanger-input');
btnExchanger.classList.add('exchanger-btn');
btnExchanger.innerText = 'Обмін вмісту полів вводу';
// Create another one input just like first by cloning
const inputSecond = inputFirst.cloneNode();
// Insert created elements on page
wrapper.append(inputFirst);
wrapper.append(inputSecond);
wrapper.append(btnExchanger);
// Add listener on button and function to exchange inputs values
btnExchanger.addEventListener('click', exchangeInputValue);
function exchangeInputValue(e) {
    if (e.target.closest('.exchanger-btn')) {
        [inputFirst.value, inputSecond.value] = [inputSecond.value, inputFirst.value];
    }
}
//=============================================================================


// Створіть 5 див на сторінці потім використовуючи getElementsByTagName і forEath поміняйте дивам колір фону.
// Create and insert 5 div on page in cycle
for (let i = 0; i < 5; i++) {
    wrapper.append(document.createElement('div'));
}
const recolorDivList = wrapper.getElementsByTagName('div');
// Get random color function
function getRandomColor() {
    const str = "0123456789ABCDEF";
    let color = '#'
    for (var i = 0; i < 6; i++) {
        color += str[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Change divs background colors
[...recolorDivList].forEach(div => div.style.backgroundColor = getRandomColor());
//=============================================================================


// Створіть багаторядкове поле для введення тексту та кнопки.Після натискання кнопки користувачем програма повинна
// згенерувати тег div з текстом, який був у багаторядковому полі.багаторядкове поле слід очистити після
// переміщення інформації
// Create textarea, set class and placeholder
const textArea = document.createElement('textarea');
textArea.placeholder = 'Введіть текст';
textArea.classList.add('text-area');
// Create button to insert text from text area to div
const createDivBtn = document.createElement('button');
createDivBtn.innerText = 'Створити <DIV> з текстом';
createDivBtn.classList.add('div-creator')
// Insert new elements on page
wrapper.append(textArea);
wrapper.append(createDivBtn);
// Add listener on button and function to creat div with value of textarea
createDivBtn.addEventListener('click', creatDivWithText);
function creatDivWithText(e) {
    if (e.target.closest('.div-creator') && textArea.value) {
        const div = document.createElement('div');
        div.innerText = textArea.value;
        createDivBtn.after(div);
        textArea.value = '';
    } else if (e.target.closest('.div-creator') && !textArea.value) {
        alert('Я ж написав "Створити <DIV> з текстом", а тексту в textarea нема');
    }
}
//=============================================================================


// Створіть картинку та кнопку з назвою "Змінити картинку"
// зробіть так щоб при завантаженні сторінки була картинка
// https://itproger.com/img/courses/1476977240.jpg
// При натисканні на кнопку вперше картинка замінилася на
// https://itproger.com/img/courses/1476977488.jpg
// при другому натисканні щоб картинка замінилася на
// https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png
const imagesSrc = ['https://itproger.com/img/courses/1476977240.jpg', 'https://itproger.com/img/courses/1476977488.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'];
//Create image, set src and alt info for it
const changebleImg = document.createElement('img');
changebleImg.classList.add('changeble-img');
changebleImg.src = imagesSrc[0];
changebleImg.alt = 'HTML';
// Create button, set class and inner text for it
const changeImgBtn = document.createElement('button');
changeImgBtn.classList.add('change-img-btn');
changeImgBtn.innerText = 'Змінити зображення';
// Insert new elements on page
wrapper.append(changebleImg);
wrapper.append(changeImgBtn);
// Add listener on button and function to change img
changeImgBtn.addEventListener('click', changeImg);
let changeImgCounter = 0;
function changeImg(e) {
    if (e.target.closest('.change-img-btn')) {
        changeImgCounter++;
        if (changeImgCounter < imagesSrc.length) {
            changebleImg.src = imagesSrc[changeImgCounter];
            if (changeImgCounter === (imagesSrc.length - 1)) {
                changeImgBtn.remove();
            }
        }
    }
}
//=============================================================================


// Створіть на сторінці 10 параграфів і зробіть так, щоб при натисканні на параграф він зникав
// Create and insert 10 paragraphs on page in cycle
for (let i = 1; i <= 10; i++) {
    wrapper.insertAdjacentHTML('beforeend', `<p>Paragraph #${i}</p>`);
}
// Add listener and function to delete clicked paragraph
wrapper.addEventListener('click', deleteParagraph)
function deleteParagraph(e) {
    if (e.target.closest('p')) {
        e.target.closest('p').remove();
    }
}
//=============================================================================


// Намалювати на сторінці коло за допомогою параметрів, які введе користувач.
// При завантаженні сторінки – показати на ній кнопку з текстом "Намалювати коло".
// Дана кнопка повинна бути єдиним контентом у тілі HTML документа, 
// ешта контенту повинен бути створений і доданий на сторінку за допомогою Javascript
// При натисканні кнопки "Намалювати коло" показувати одне поле введення - діаметр кола.
// При натисканні на кнопку "Намалювати" створити на сторінці 100 кіл(10 * 10) випадкового кольору.
// При натисканні на конкретне коло - це коло повинен зникати, при цьому порожнє місце заповнюватися, тобто всі інші кола зрушуються вліво.
// Create and insert start button
const drawCircle = document.createElement('button');
drawCircle.classList.add('draw-circle');
drawCircle.innerText = 'Намалювати коло'
wrapper.append(drawCircle);
// Add listeners
wrapper.addEventListener('click', showControls);
wrapper.addEventListener('click', insertCircles);
wrapper.addEventListener('click', removeCircle)
// Show input and new button to create full circles field insted of start button
function showControls(e) {
    if (e.target.closest('.draw-circle')) {
        drawCircle.remove();
        wrapper.insertAdjacentHTML('beforeend', `
            <input class="circle-size" type="number">
            <button class="circle-creator">Намалювати</button>
        `);
    }
}
// Insert field for circle, then in cycle insert circles in this field
function insertCircles(e) {
    if (e.target.closest('.circle-creator') && +document.querySelector('.circle-size').value > 0) {
        if (document.querySelector('.circles-field')) {
            document.querySelector('.circles-field').remove();
        }
        const circlesField = document.createElement('div');
        circlesField.classList.add('circles-field');
        document.querySelector('.circle-creator').after(circlesField);
        for (let i = 1; i <= 100; i++) {
            circlesField.append(createCircle(i));
        }
    }
}
// Create circle with random color
function createCircle(i) {
    const size = document.querySelector('.circle-size').value;
    const circle = document.createElement('div');
    circle.classList.add('circle')
    circle.style.backgroundColor = getRandomColor();
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.innerText = i;
    return circle;
}
// Remove clicked circle
function removeCircle(e) {
    if (e.target.closest('.circle')) {
        e.target.closest('.circle').remove();
    }
}