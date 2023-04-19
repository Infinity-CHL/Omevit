const burger = document.querySelector('.header-m__menu');
const menu = document.querySelector('.menu-m');
const closeBtn = document.querySelector('.menu-m__btn');
const links = document.querySelectorAll('.menu-m__link');

function closeMenu(btn, menu) {
  btn.addEventListener('click', () => {
    menu.classList.remove('opened');
    menu.classList.add('closed');
  });
}

window.addEventListener('DOMContentLoaded', () => {
  burger.addEventListener('click', () => {
    menu.classList.add('opened');
    menu.classList.remove('closed');
  });

  closeMenu(closeBtn, menu)

  links.forEach((el) => {
    closeMenu(el, menu);
  });
});
