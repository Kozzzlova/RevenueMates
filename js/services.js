const tabsTitle = document.querySelectorAll('.tabs__title');
const tabsContent = document.querySelectorAll('.block-tab');

tabsTitle.forEach(item => item.addEventListener('click', event => {
    const tabsTitleTarget = event.target.getAttribute('data-tab');

    tabsTitle.forEach(Element => Element.classList.remove('active-tab'));
    tabsContent.forEach(Element => Element.classList.add('block-tab__hidden'));


    item.classList.add('active-tab');
    document.getElementById(tabsTitleTarget).classList.remove('block-tab__hidden');
}));

document.querySelector('[data-tab="tab_01"]').classList.add('active-tab');
document.querySelector('#tab_01').classList.remove('block-tab__hidden');
