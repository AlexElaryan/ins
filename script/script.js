const burger_btn = document.querySelector('.burger-btn');
const burger_menu = document.querySelector('.burger-menu');

burger_btn.addEventListener('click', () => {
    burger_menu.classList.toggle('active');
});
