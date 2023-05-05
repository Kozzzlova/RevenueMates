"use sctrict"

let titles = Array.from(document.querySelectorAll('.faq-body__title'));

for (let title of titles) {
    title.addEventListener('click', () => {
        title.nextElementSibling.classList.toggle('faq-hidden');
        title.classList.toggle('faq-active');
    })
}