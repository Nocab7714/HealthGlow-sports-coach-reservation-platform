// 引入 GSAP 和 ScrollTrigger 插件
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// // 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollToPlugin);

// scroll-to-top 元件設定
// 設定開始
const scrollToTopButton = document.getElementById('scrollToTop');
// 檢查滾動位置，並淡入或淡出按鈕
window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    // 淡入按鈕
    gsap.to(scrollToTopButton, {
      opacity: 1,
      duration: 0.15,
      pointerEvents: 'auto',
    });
  } else {
    // 淡出按鈕
    gsap.to(scrollToTopButton, {
      opacity: 0,
      duration: 0.15,
      pointerEvents: 'none',
    });
  }
});
// 點擊按鈕後滾動到頂部
scrollToTopButton.addEventListener('click', function () {
  gsap.to(window, { scrollTo: { y: 0 }, duration: 0.05, ease: 'power1.inOut' });
});
// 設定結束
