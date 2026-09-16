/*I18N — Arabic/English switcher*/
(function () {
    'use strict';

    var DEFAULT_LANG = 'ar';
    var STORAGE_KEY = 'techsat-lang';

    function getLang() {
        return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    }

    function setLang(lang) {
        localStorage.setItem(STORAGE_KEY, lang);
        location.reload();
    }

    function t(key, lang) {
        var dict = window.TRANSLATIONS && window.TRANSLATIONS[lang];
        return (dict && dict[key]) ? dict[key] : null;
    }

    function applyLang(lang) {
        var html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        document.body.classList.toggle('lang-en', lang === 'en');
        document.body.classList.toggle('lang-ar', lang === 'ar');

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var fb = el.getAttribute('data-i18n-fallback') || el.textContent;
            var val = t(key, lang);
            el.textContent = val || fb; /*fallback to Arabic if key missing*/
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-placeholder');
            var fb = el.getAttribute('data-i18n-fallback') || el.getAttribute('placeholder') || '';
            var val = t(key, lang);
            el.setAttribute('placeholder', val || fb);
        });

        document.querySelectorAll('[data-lang-switch]').forEach(function (btn) {
            btn.textContent = t('lang.switch', lang) || 'EN';
        });
    }

    window.i18n = {
        getLang: getLang,
        setLang: setLang,
        t: t,
        apply: applyLang
    };

    /*click handler — works on dynamically injected buttons too*/
    document.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-lang-switch]');
        if (!btn) return;
        e.preventDefault();
        setLang(getLang() === 'ar' ? 'en' : 'ar');
    });

    /*initial apply*/
    function init() {
        applyLang(getLang());
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();