// Меню бургер
document.querySelector('.btn__menu').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header .nav').classList.toggle('active');
    document.querySelector('.header').classList.toggle('active');
});
