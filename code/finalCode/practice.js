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


// --------------------------------------Footer Email


        const scriptURL = 'https://script.google.com/macros/s/AKfycbyRRDkkcEUb1fRxl-n4dqJ1OZ9pDgrr7H5XV5ld0_2ygsKEmdaQm9uf35w-JQ8YhvrX/exec'
        const form = document.forms['google-sheet']
        const msg = document.getElementById('msg')
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Thank you for sub!"
                setTimeout(function(){
                msg.innerHTML = ""},
                5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
          })
      
// ------------------------------------------------Blog
$('.container').isotope({
  itemSelector: '.card',
  layoutMode: 'masonry',
  sortBy : 'random'
});