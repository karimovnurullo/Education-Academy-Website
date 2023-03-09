const navMenu = document.querySelector('.header-nav-menu'),
    navClose = document.querySelector('.header-nav-close'),
    navMenus = document.querySelector('.header-nav-menus'),
    navMenusItems = document.querySelectorAll('.header-nav-menus-item');


navMenusItems.forEach(element => {
    element.addEventListener('click', () => {
        navMenus.classList.add('close');
    });
});

navMenu.addEventListener('click', () => {
    navMenus.classList.add('open');
    navMenus.classList.remove('close');
});
navClose.addEventListener('click', () => {
    navMenus.classList.add('close');
    navMenus.classList.remove('open');
});