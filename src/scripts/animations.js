import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
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
