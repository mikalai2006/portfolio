import 'bootstrap/dist/css/bootstrap.min.css';
import style from './styles-sass/styles.scss';
require('../index.html')

function collapse () {
    //const el = document.querySelectorAll('.collapse-box');
    const btn = document.querySelector('.card-header');
    const parent = btn.parentNode;
    const collapse = parent.querySelector('.collapse');
    if (window.innerWidth > 768) {
        collapse.classList.add('show')
    }
    
    btn.addEventListener('click', function () {
        
        if(collapse.classList.contains('show')) {
            collapse.classList.remove('show')
        } else {
            collapse.classList.add('show')
        }
        console.log(collapse)
    })
};

collapse();

(function() {
    new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidePerview:1,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    */
  })
})()
