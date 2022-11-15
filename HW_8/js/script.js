let menu = document.querySelector('.nav__list');
let header = document.querySelector('header')

menu.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav__link')) {
        let link = e.target;

        e.preventDefault();
        scrollToId(link.hash);
    }
});

function scrollToId(id) {
    let target = document.querySelector(id);

    if (target !== null) {
        let pos = Math.floor(window.scrollY + target.getBoundingClientRect().top - header.clientHeight);
        
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }
};
