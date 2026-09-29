import { NAVBAR_TPL, FOOTER_TPL } from './template.js';
import { initTheme } from './theme.js';
import { initI18n } from './i18n.js';
import { initScroll } from './scroll.js';
import { initAOS } from './aos.js';

function getCurrentPage() {
  let path = window.location.pathname.split('/').pop();
  if (!path || path === '/') path = 'index.html';
  return path.toLowerCase();
}

function markActiveNav() {
  const current = getCurrentPage();
  document.querySelectorAll('#mainNav .nav-link[href]').forEach(a => {
    const href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
    if (href && href === current) a.classList.add('active');
  });
}

function init() {
  const navRoot = document.getElementById('navbar-root');
  const footRoot = document.getElementById('footer-root');

  if (navRoot) navRoot.innerHTML = NAVBAR_TPL;
  if (footRoot) footRoot.innerHTML = FOOTER_TPL;

  markActiveNav();
  initTheme();
  initI18n();
  initScroll();
initAOS();

  window.__chromeReady = true;

  setTimeout(() => {
    document.dispatchEvent(new Event('layoutReady'));
  }, 0);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}