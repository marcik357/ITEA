window.addEventListener('load', function () {

    let filterItems = document.querySelectorAll('.filter__item');
    // let filterContainer = document.querySelector('.filter__content');
    let buttonsBlock = document.querySelector('.filter__buttons')

    buttonsBlock.addEventListener('click', (e) => {
        if (e.target.closest('.filter__buttons')) {
            for (button of buttonsBlock.children) {
                button.classList.remove('button--active')
            }
            e.target.classList.add('button--active');
            let currentCategory = e.target.dataset.filter;
            filter(currentCategory, filterItems);
        }
    })

    function filter(currentCategory, filterItems) {
        filterItems.forEach((item) => {
            let isItemFiltered = item.classList.contains(currentCategory)
            let isShowAll = currentCategory.toLowerCase() === 'all'
            if (!isItemFiltered && !isShowAll) {
                item.classList.add('filter__item--hide');
                // filterContainer.append(item);
            } else {
                item.classList.remove('filter__item--hide');
                // filterContainer.prepend(item);
            }
        })
    }



    
    let menu = document.querySelector('.nav__list');
    let menuFooter = document.querySelector('.menu__list');

    menu.addEventListener('click', function (e) {
        if (e.target.classList.contains('nav__link')) {
            let link = e.target;

            e.preventDefault();
            scrollToId(link.hash);
            menuItemDeactivate(menu)
            link.classList.add('nav__link--active');
        }
    });

    menuFooter.addEventListener('click', function (e) {
        if (e.target.classList.contains('menu__link')) {
            let link = e.target;

            e.preventDefault();
            scrollToId(link.hash);
        }
    });

    window.addEventListener('scroll', function () {
        let sections = document.querySelectorAll('section[id]');
        let centerY = document.documentElement.clientHeight / 2;

        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= centerY) {
                menuItemDeactivate(menu)
                document.querySelector(`a[href$='${section.id}']`).classList.add('nav__link--active');
            }
        });
    });

    function menuItemDeactivate(menu) {
        menu.querySelector('.nav__link--active').classList.remove('nav__link--active');
    };

    function scrollToId(id) {
        let target = document.querySelector(id);

        if (target !== null) {
            let pos = Math.floor(window.scrollY + target.getBoundingClientRect().top - parseFloat(window.getComputedStyle(menu.parentElement.parentElement).height));

            scrollTo(pos);
        }
    };

    function scrollTo(pos) {
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    };



    window.addEventListener('scroll', headerChange);

    function headerChange(e) {
        let header = document.querySelector('#header')
        if (window.scrollY > 10) {
            header.classList.add('header--sticky')
        } else {
            header.classList.remove('header--sticky')
        }
    };

})