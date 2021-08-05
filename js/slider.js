new Swiper(".swiper-container", {

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  spaceBetween: 30,
  autoplay: {
    // Пауза между прокруткой
    delay: 5000,
    // Закончить на последнем слайде
    stopOnLastSlide: false,
    // Отключить после ручного переключения
    disableOnInteraction: true
  },
  simulateTouch: true,
  speed: 800,
  autoHeight: true,
});