// Swiper

import Swiper from 'swiper/bundle';
import './node_modules/swiper/swiper-bundle.min.css';

//首頁 swiper
const swiper = new Swiper(".swiper", {
  grid: {
    // rows: ...
    rows: 1,
  },
  spaceBetween: 16,
  // 手機版顯示
  slidesPerView: 1.5,
  centeredSlides: true,
  // 網頁版時
  breakpoints: {
    //... :{}
    768: {      
      grid: {
        // rows: ...
        rows: 1,
      },
      //slidesPerView: ...
      //spaceBetween: ...
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 24,
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    }
  } 
  });
  // slidesPerView: 1.5,
  // centeredSlides: true,
  // spaceBetween: 20,
  // loop: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  // breakpoints:{
  //   768: {
  //     slidesPerView: 2,
  //     centeredSlides: false,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  //   1200: {
  //     slidesPerView: 4,
  //     spaceBetween: 24,
  //     centeredSlides: false,
  //   },


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
