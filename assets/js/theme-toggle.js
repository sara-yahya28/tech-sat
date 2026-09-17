/* ═══════════════════════════════════════════════════════════
   TECH-SAT — Theme Toggle (light/dark)
   Respects system preference + persists choice in localStorage
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var KEY  = 'techsat-theme';
  var root = document.documentElement;

  var saved      = localStorage.getItem(KEY);
  var systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme      = saved || (systemDark ? 'dark' : 'light');

  root.setAttribute('data-theme', theme);

  window.tsToggleTheme = function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', theme);
    localStorage.setItem(KEY, theme);
    document.dispatchEvent(new CustomEvent('ts:theme-changed', { detail: { theme: theme } }));
  };
})();