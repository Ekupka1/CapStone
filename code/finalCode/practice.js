const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo  = document.querySelector('#navbar__logo')

// menu.addEventListener('click', function() {
//   menu.classList.toggle('is-active');
//   menuLinks.classList.toggle('active');
// });

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// closes mobile menu when clicking menu
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 1000 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);