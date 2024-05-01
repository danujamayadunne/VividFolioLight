// AOS Animation
AOS.init();
AOS.refresh();

// Testimonial Slider
const Tswiper = new Swiper(".testimonial", {
  speed: 400,
  loop: true,
  spaceBetween: 100,
  navigation: {
    nextEl: ".btn__next",
    prevEl: ".btn__prev"
  }
});