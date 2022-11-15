let select = document.getElementById('location');

select.addEventListener('change', () =>{
    if (select.value !== 'Select Location') {
        select.style.color = "#000"
    }
});


let eye = document.querySelector('.form-reg__eye');
let password = document.querySelector('[name="password"]');

eye.addEventListener('mousedown', showPassword);
eye.addEventListener('mouseup', hidePassword);

eye.addEventListener('touchstart', showPassword);
eye.addEventListener('touchend', hidePassword);

function showPassword() {
    if (password.value) {
        password.type = 'text';
    }
}
function hidePassword() {
    if (password.value) {
        password.type = 'password';
    }
}