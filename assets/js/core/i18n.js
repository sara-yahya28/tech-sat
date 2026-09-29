export function initI18n() {
  const html = document.documentElement;
  const langBtn = document.getElementById('langToggle');
  const langLabel = document.getElementById('langLabel');

  function applyLang(lang) {
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    if (langLabel) langLabel.textContent = lang === 'ar' ? 'EN' : 'AR';

    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
      const val = el.getAttribute('data-' + lang);
      if (val === null) return;
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else {
        el.innerHTML = val;
      }
    });

    document.querySelectorAll('[data-dir-icon]').forEach(el => {
      el.classList.remove('bi-arrow-left', 'bi-arrow-right');
      el.classList.add(lang === 'ar' ? 'bi-arrow-left' : 'bi-arrow-right');
    });

    const t = html.getAttribute('data-title-' + lang);
    const d = html.getAttribute('data-desc-' + lang);
    if (t) document.title = t;
    if (d) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', d);
    }

    localStorage.setItem('ts-lang', lang);

    document.dispatchEvent(new CustomEvent('languageChanged', {
      detail: { lang, dir: lang === 'ar' ? 'rtl' : 'ltr' }
    }));
  }

  const savedLang = localStorage.getItem('ts-lang') || 'ar';
  applyLang(savedLang);

  if (langBtn && !langBtn.dataset.bound) {
    langBtn.dataset.bound = '1';
    langBtn.addEventListener('click', () => {
      const next = html.getAttribute('lang') === 'ar' ? 'en' : 'ar';
      applyLang(next);
    });
  }
}