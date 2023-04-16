document.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero');
  const menu = document.querySelector('.menu');
  const scrollItems = document.querySelectorAll('.scroll-item');

  const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    scrollItems.forEach(el => {
      let scrollOffset = el.offsetTop + (el.offsetHeight / 12);
      if (windowCenter >= scrollOffset) {
        el.classList.add('animation-class');
      } else {
        el.classList.remove('animation-class');
      }
    });
  };

  const menuFixed = () => {
    let scrollTop = window.scrollY;
    let heroCenter = hero.offsetHeight / 1;

    if (scrollTop >= heroCenter) {
      menu.classList.add('fixed')
    } else {
      menu.classList.remove('fixed');
    }
  };

  menuFixed();
  scrollAnimation();
  window.addEventListener('scroll', () => {
    menuFixed();
    scrollAnimation();
  });
});
