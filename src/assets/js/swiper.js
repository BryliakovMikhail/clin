import Swiper from 'swiper';
import { Scrollbar, Mousewheel } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  modules: [Scrollbar, Mousewheel],
  slidesPerView: 3.5,
  loop: true,
  spaceBetween: 44,
  variableWidth: true,
  slidesPerGroup: 1,

  mousewheel: {
    sensitivity: 0.2,
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      scrollbar: {
        dragSize: 30,
      },
    },
    1000: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 3.5,
      spaceBetween: 44,
    },
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 200,
  },
});