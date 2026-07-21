import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTimeline
    .from('[data-hero-copy] > *', { y: 34, opacity: 0, duration: 0.9, stagger: 0.1 })
    .from('[data-hero-visual]', { x: 45, opacity: 0, duration: 1.1 }, '-=0.75');

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

  gsap.to('.hero__image', {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
} else {
  gsap.set('[data-reveal]', { clearProps: 'all' });
}
