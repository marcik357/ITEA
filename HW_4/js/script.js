document.querySelector('#go-top').addEventListener('click',
(e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})