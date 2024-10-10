// 引入 GSAP 和 ScrollTrigger 插件
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 首頁 navbar 切換動畫
// 設定開始
ScrollTrigger.create({
  // trigger: '.next-section', // trigger 可以設定要到達哪個 Id 或 class 位置在切換 navbar，註解調不設定就會以離開視窗最頂部觸發切換。
  start: 'top top', // 當內容的頂部到達視窗的頂部
  end: '100 top', // 當內容的底部到達視窗的頂部
  onEnter: () => {
    // 第一個 navbar 向上滑動，隱藏
    gsap.to('.navbar-gsap-first', {
      duration: 0.25,
      y: -80,
      onComplete: () => {
        gsap.set('.navbar-gsap-first', { display: 'none' });
        gsap.set('.navbar-gsap-secondary', { display: 'block', y: -80 }); // 第二個 navbar 從上方進來
        gsap.to('.navbar-gsap-secondary', { duration: 0.25, y: 0 }); // 向下滑動
      },
    });
  },
  onLeaveBack: () => {
    // 第二個 navbar 向上滑動，隱藏
    gsap.to('.navbar-gsap-secondary', {
      duration: 0.25,
      y: -80,
      onComplete: () => {
        gsap.set('.navbar-gsap-secondary', { display: 'none' });
        gsap.set('.navbar-gsap-first', { display: 'block', y: -60 }); // 第一個 navbar 從上方進來
        gsap.to('.navbar-gsap-first', { duration: 0.25, y: 0 }); // 向下滑動
      },
    });
  },
});
// 設定結束

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
