var swiper = new Swiper('.image-slider',{
    // autoplay: {
    //     delay: 5000,
    // },
    speed: 800,
    direction: 'vertical',
    freeMode: true,
    autoHeight: true,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
    },
});

    // navigator: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

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
