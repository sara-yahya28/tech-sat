export function initTheme() {
  const html = document.documentElement;
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const savedTheme = localStorage.getItem('ts-theme') || 'light';

  html.setAttribute('data-theme', savedTheme);
  if (themeIcon) {
    themeIcon.className = savedTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
  }

  if (themeBtn && !themeBtn.dataset.bound) {
    themeBtn.dataset.bound = '1';
    themeBtn.addEventListener('click', () => {
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('ts-theme', next);
      if (themeIcon) {
        themeIcon.className = next === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
      }
    });
  }
}