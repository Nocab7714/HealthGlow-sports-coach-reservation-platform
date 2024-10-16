// Swiper
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// init Swiper
// Navigation 首頁課程推薦區塊
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.5,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
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
  },
});

// 教練及課程介紹
// swiperCourseIntroduction
const swiperCourseIntroduction = new Swiper('.swiperCourseIntroduction', {
  autoHeight: true,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },

  pagination: {
    el: '.swiper-pagination-CourseIntroduction',
    type: 'fraction',
  },
});
