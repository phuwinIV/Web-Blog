let toggle = document.querySelector('#header .toggle-button');
let collapse = document.querySelectorAll('#header .collapse');
let head = document.querySelectorAll('#header');

toggle.addEventListener('click', function () {
   collapse.forEach((col) => col.classList.toggle('collapse-toggle'));
   head.forEach((hd) => hd.classList.toggle('bg-light'));
});

// with masonry
new Masonry('#posts .grid', {
   itemSelector: '.grid-item',
   gutter: 20,
});

// var grid = document.querySelector('#posts .grid');
// var msnry = new Masonry(grid, {
//    // options...
//    itemSelector: '.grid-item',
//    columnWidth: 20,
// });

// swiper libary
new Swiper('.swiper-container', {
   direction: 'horizontal',
   loop: true,
   slidesPerView: 5,
   autoplay: {
      delay: 3000,
   },
   // responsive breakpoints
   breakpoints: {
      '@0': {
         slidesPerView: 2,
      },
      // 888px
      '@1.00': {
         slidesPerView: 3,
      },
      // 1110px
      '@1.25': {
         slidesPerView: 4,
      },
      '@1.50': {
         slidesPerView: 5,
      },
   },
});

// Sticky Nav

window.onscroll = () => {
   fnc();
};

// get the current value
let navbar = document.getElementById('header');

// get the navbar position
let sticky = navbar.offsetTop;

// sticky function
let fnc = () => {
   if (window.pageYOffset >= sticky) {
      navbar.classList.add('sticky');
   } else {
      navbar.classList.remove('sticky');
   }
};

window.addEventListener('scroll', () => {
   let header = document.querySelector('header');
   header.classList.toggle('bg-light', window.scrollY > 0);
});
