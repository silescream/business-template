window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.head-section__nav'),
    menuItem = document.querySelectorAll('.head-section__nav-list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-active');
        })
    })
})