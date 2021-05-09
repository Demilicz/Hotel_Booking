const iconMenu = document.querySelector('.menu-burger');
const bodyMenu = document.querySelector('.header__list');
const header = document.querySelector('.header');


// Menu-burger

iconMenu.addEventListener('click', () => {
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  bodyMenu.classList.toggle('_active');
});

// Fixed Menu







