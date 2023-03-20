import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js'
// Sliders
const swiper1 = new Swiper('.hero-swiper', {
    loop: true,
    effect: 'fade',
    crossfade: true,
    observer: true,
    observeParents: true,
    breakpointsBase: 'container',
    autoplay: {
      delay: 10000,
      waitForTransition: true
    },
    spaceBetween: 100
});

const swiper2 = new Swiper('.galery-swiper', {
    pagination: {
      el: '.galery-swiper__pagination',
      type: 'fraction'
    },
    navigation: {
        nextEl: '.galery-swiper__button-next',
        prevEl: '.galery-swiper__button-prev'
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
      1600: {
        slidesPerView: 3,
        // slidesPerColumn: 2,
        slidesPerGroup: 3,
        spaceBetween: 50,
        grid: {
            rows: 2,
            fill: 'row',
        }

      },
        1350: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          slidesPerGroup: 3,
          spaceBetween: 50,
          grid: {
            rows: 2,
            fill: 'row',
        }
        },
        770: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
            grid: {
                rows: 2,
                fill: 'row',
            }
        },
        661: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 34,
          slidesPerGroup: 2,
          grid: {
            rows: 2,
            fill: 'row',
        }
        },
        401: {
          slidesPerColumn: 2,
          slidesPerView: 2,
          spaceBetween: 34,
          slidesPerGroup: 1,
          grid: {
            rows: 2,
            fill: 'row',
        }
        },
        0: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 35,
            slidesPerGroup: 1,
            grid: {
                rows: 1,
                fill: 'row',
            }
        }
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд'
    },
    observer: true,
    observeParents: true,
})

const swiper3 = new Swiper('.projects-swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
   autoplay: {
       delay: 3000,
       waitForTransition: true
   },
   navigation: {
    nextEl: '.projects-swiper__button-next',
    prevEl: '.projects-swiper__button-prev'
   },
   breakpoints: {
       1024: {
          slidesPerView: 3,
          spaceBetween: 50,
          slidesPerGroup: 3
       },
       481: {
          slidesPerView: 2,
          spaceBetween: 34,
          slidesPerGroup: 2
       },
       330: {
          slidesPerView: 1,
          spaceBetween: 103,
          slidesPerGroup: 1
       },
       0: {
          slidesPerView: 1,
          spaceBetween: 70,
          slidesPerGroup: 1
       }
   },
   a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд'
  },
   observer: true,
   observeParents: true,
   breakpointsBase: 'container'
})

const swiper4 = new Swiper('.pub-swiper', {
   slidesPerView: 3,
   spaceBetween: 50,
   slidesPerColumnFill: 'row',
   autoplay: {
       delay: 3000,
       waitForTransition: true
   },
   pagination: {
    el: '.pub-swiper__pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.pub-swiper__button-next',
    prevEl: '.pub-swiper__button-prev'
  },
   breakpoints: {
       1025: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
       },
       900: {
        slidesPerGroup: 2,
       },
       769: {
        spaceBetween: 49,
        slidesPerGroup: 1,
        slidesPerView: 2
       },
       610: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
       },
       510: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
       },
       321: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 34
       },
   },
   a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд'
  },
   observer: true,
   observeParents: true,
   breakpointsBase: 'container',
   resizeObserver: true
})

const swiper5 = new Swiper('.events-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        waitForTransition: true
    },
    pagination: {
        el: '.events-swiper__pagination'
    },
    observer: true,
    observeParents: true,
    breakpointsBase: 'container'
})

// Dropdowns
$(function() {

    $(".menu__item-a").click(function() {
      let a = $(this).parent().find(".dropdown-content");
      let icone = $(this).parent().find(".dropdown-icon");
      icone.toggleClass("active-icone");
      a.slideToggle(100);
      $(".dropdown-content").not(a).slideUp(100)

    })
    
})
// Select

const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: true
}
)

// Catalog

$('.line1-link').click(function(e){
    e.preventDefault();
    $('.catalog__artist').text($(this).text());
    $('.catalog__img').attr('src',$(this).attr('href'));
 })

// Jquery

$( function() {
    $( "#accordion3" ).accordion({
      collapsible: true,
      active: false,
    });
    $("#accordion3").accordion("refresh");
} );

$( function() {
    $( "#tabs" ).tabs({ active: 2 });
  } );

function l_image (a) {
    document.example_img.src = a;
}

// Events

$(".events__btn").click(function(){                  
$(document).find(".popup").slideToggle();
})

jQuery(document).ready(function(){
    function classFunction(){
      if(jQuery('body').width()<769){ jQuery('#768px').addClass('popup');
      }
      else{
        jQuery('#768px').removeClass('popup');
      }
    }
    
    classFunction();
    jQuery(window).resize(classFunction);
   })

// Yandex Maps

 ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.7583783715025,37.601079499999903],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: 'css/imgs/Ellipse 12.svg',
            iconImageSize: [20, 20],
            iconImageOffset: [-10, -20]
        });
    
myMap.geoObjects
    .add(myPlacemark);
});

// Form

var selector = document.querySelector('#tel');
var im = new Inputmask("+7(999) 999-99-99");

im.mask(selector);

new JustValidate ('#js-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 20
        },
        phone: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
        tooltip: {
            fadeOutTime: 10000
        }
    },
    messages: {
        name: {
            required: 'Укажите свое имя',
            minLength: 'Минимальное количество символов - 2',
            maxLength: 'Максимальное количесвто символов - 20'
        },
        phone: {
            required: 'Укажите свой номер телефона',
            function: 'Укажите действительный номер телефона'
        }
    }
})

// Burger Menu

var navbar = document.querySelector(".navbar")
var ham = document.querySelector(".ham")

ham.addEventListener("click", toggleHamburger)

function toggleHamburger(){
    navbar.classList.toggle("showNav")
    ham.classList.toggle("showClose")
}

var menuLinks = document.querySelectorAll(".menuLink")

menuLinks.forEach( 
function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
}
)

// Search

var search = document.querySelector(".hero-form")
var searchbtn = document.querySelector(".header__search")
var searchicon = document.querySelector(".search-icon")

searchbtn.addEventListener("click", toggleSearchbtn)

function toggleSearchbtn(){
    searchbtn.classList.toggle("showClose")
    searchicon.classList.toggle("hide")
}

searchbtn.addEventListener("click", toggleSearch)

function toggleSearch() {
    search.classList.toggle("showForm")
}