import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  // ---- Lenis 慣性スクロール ----
  const lenis = new Lenis({
    lerp: 0.11,
    wheelMultiplier: 1,
  });

  // モバイルメニューの開閉から制御できるように公開する
  window.__lenis = lenis;

  // Lenis と ScrollTrigger を同期（rAF は GSAP ticker に一本化）
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ページ内アンカーは Lenis のスムーズスクロールで移動する
  // （固定ヘッダー分は html の scroll-padding-top を Lenis が自動で考慮する）
  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    const url = new URL(link.href, window.location.href);
    const samePage = url.pathname === window.location.pathname && url.hash.length > 1;
    if (!samePage) return;

    link.addEventListener('click', (event) => {
      const target = document.querySelector(url.hash);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { duration: 1.1 });
    });
  });

  // ---- 出現アニメーション ----
  const heroCopy = document.querySelector('[data-hero-copy]');
  const heroVisual = document.querySelector('[data-hero-visual]');
  const heroPrices = document.querySelector('[data-hero-prices]');

  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  if (heroCopy) {
    heroTimeline.from(heroCopy.children, { y: 30, opacity: 0, duration: 0.9, stagger: 0.09 });
  }

  if (heroVisual) {
    heroTimeline.from(heroVisual, { x: 40, opacity: 0, duration: 1 }, '-=0.7');
  }

  if (heroPrices) {
    heroTimeline.from(heroPrices, { y: 24, opacity: 0, duration: 0.8 }, '-=0.5');
  }

  gsap.utils.toArray('[data-reveal]').forEach((element) => {
    gsap.to(element, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        once: true,
      },
    });
  });
} else {
  gsap.set('[data-reveal]', { clearProps: 'all' });
}
