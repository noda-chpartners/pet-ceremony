const menuButton = document.querySelector('[data-menu-button]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const menuLinks = document.querySelectorAll('[data-menu-link]');
const header = document.querySelector('[data-header]');

const setMenuState = (isOpen) => {
  if (!menuButton || !mobileMenu) return;

  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
  mobileMenu.setAttribute('aria-hidden', String(!isOpen));
  menuButton.classList.toggle('is-active', isOpen);
  mobileMenu.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('is-menu-open', isOpen);
};

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  setMenuState(!isOpen);
});

menuLinks.forEach((link) => link.addEventListener('click', () => setMenuState(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuState(false);
});

const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();
