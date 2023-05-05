"use strict"

let btnServices = document.querySelectorAll('.btn-pp');
let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let body = document.querySelector('body');
let widthScroll;

if (btnServices.length > 0) {
    for(let btn of btnServices) {

        btn.onclick = function() {
            popup.classList.add('active');
            widthScroll = window.innerWidth - popup.offsetWidth + 'px';
            body.style.overflow = 'hidden';
            body.style.paddingRight = widthScroll;
        }
        
    }
}



popupClose.onclick = function() {
    popup.classList.remove('active');

    setTimeout(() => {
        body.style.overflow = 'visible';
        body.style.paddingRight = '0px';
    }, 300);
    
}




window.onclick = function(event) {
    if (event.target === popup) {
        popup.classList.remove('active');

        setTimeout(() => {
            body.style.overflow = 'visible';
            body.style.paddingRight = '0px';
        }, 300);
    }
}
