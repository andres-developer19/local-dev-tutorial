
function initSwiper() {
var swiper = new Swiper(".mySwiper", {
navigation: {
  nextEl: ".swiper-button-next",
  prevEl: ".swiper-button-prev",
},
});
}

document.addEventListener("DOMContentLoaded", function () {
initSwiper();
});