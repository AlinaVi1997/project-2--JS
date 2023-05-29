var swiper = new Swiper('.swiper-container', {
    navigator: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    }
});



function initMap() {
  const myLatLng = { lat: 41.12118893425201, lng: -73.43283741633479}
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "91 Nolan",
  });
}
window.initMap = initMap;
