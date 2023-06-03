// //btn-gallery
function showImages() {
  var button = document.querySelector('button');
  var imageContainer = document.getElementById('image-container');

  button.style.display = 'block';
  imageContainer.style.display = 'grid'; 
}

//print text
var text = "SIMPLE & MODERN";
var delay = 100; 
var elem = document.getElementById("result");
 
var print_text = function(text, elem, delay) {
    if(text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function() {
                print_text(text.slice(1), elem, delay); 
            }, delay
        );
    }
}
print_text(text, elem, delay);

//swiper-slide-top
var swiper = new Swiper('.image-slider', {
    autoplay: {
        delay: 2000,
    },
    speed: 800,
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    simulateTouch: false,
    touchRotation: 0,
    touchAngle: 0,
    pagination: {
        el: '.pag-1',
        clickable: true, 
    },
});

//swiper-slider-news
var swiper1 = new Swiper('.swiper-container-2', {
    speed: 800,
    freeMode: true,
    autoHeight: true,
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.pag-2',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        798: {
            slidesPerView: 2,
        },
        1920: {
            slidesPerView: 3,
        }
    },
});

//gallery
Fancybox.bind('[data-fancybox]', {
});

//map
function initMap() {
  const myLatLng = { lat: 41.12118893425201, lng: -73.43283741633479}
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Monticello",
    icon: {
        url:"images/map__pin.svg",
    },
  });
}
window.initMap = initMap;

//burder-menu
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
});
