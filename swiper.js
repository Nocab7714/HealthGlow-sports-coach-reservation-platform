// Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// init Swiper
// const swiperHighlightedArticles = new Swiper('.swiperHighlightedArticles', {
//   slidesPerView: 1.1,
//   spaceBetween: 24,
//   slidesPerGroup: 1,
//   autoHeight: true,

//   navigation: {
//     nextEl: '.swiper-next',
//     prevEl: '.swiper-prev',
//   },

//   pagination: {
//     el: '.swiper-pagination-HighlightedArticles',
//     type: 'fraction',
//   },

//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//       spaceBetween: 48,
//     },
//   },
// });

// Navigation 首頁課程推薦區塊
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    768: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
      centeredSlides: false,
    },

  }

});