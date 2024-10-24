import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// bootstrap-icons
import 'bootstrap-icons/font/bootstrap-icons.css';

// swiper
import './swiper';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// AOS init
AOS.init();

// flatpickr
import './plugins/flatpickr.js';

// GSAP
import './gsap.js';

// lightbox2
import 'lightbox2/dist/css/lightbox.min.css';
import lightbox from 'lightbox2';
// lightbox2
lightbox.option({
  fitImagesInViewport: true, // 確保圖片在視窗中縮放以適應大小
  imageFadeDuration: 300, // 圖片加載後淡入的時間（毫秒）。
  fadeDuration: 300, // 圖片大小變換時的動畫時長
});
