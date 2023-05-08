"use strict"

document.querySelector('.icon-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('open');
    document.querySelector('body').classList.toggle('block');
})