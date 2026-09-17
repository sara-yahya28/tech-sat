/* ═══════════════════════════════════════════════════════════
   TECH-SAT — Navbar + Footer + Chrome Controls
   Injects into #navbar-root / #footer-root on every page.
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────
     NAVBAR TEMPLATE
  ───────────────────────────────────────────────────────── */
  var NAVBAR_TPL = '' +
    '<nav class="navbar navbar-expand-lg navbar-hw" id="mainNav">' +
      '<div class="container">' +

        '<a class="hw-logo" href="index.html">' +
          '<span class="hw-logo-mark"><i class="bi bi-broadcast"></i></span>' +
          'Tech<span class="dot">-Sat</span>' +
        '</a>' +

        '<div class="d-flex align-items-center gap-2 order-lg-3">' +
          '<button class="ts-toggle" id="langToggle" type="button" aria-label="Switch language">' +
            '<i class="bi bi-translate"></i> <span id="langLabel">AR</span>' +
          '</button>' +
          '<button class="ts-toggle" id="themeToggle" type="button" aria-label="Switch theme">' +
            '<i class="bi bi-moon-stars" id="themeIcon"></i>' +
          '</button>' +
          '<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" ' +
            'data-bs-target="#navMenu" aria-label="Toggle navigation">' +
            '<i class="bi bi-list fs-2"></i>' +
          '</button>' +
        '</div>' +

        '<div class="collapse navbar-collapse order-lg-2" id="navMenu">' +
          '<ul class="navbar-nav nav-hw mx-auto mt-3 mt-lg-0">' +

            '<li class="nav-item">' +
              '<a class="nav-link" href="index.html" data-en="Home" data-ar="الرئيسية">Home</a>' +
            '</li>' +

            '<li class="nav-item dropdown">' +
              '<a class="nav-link dropdown-toggle" href="services.html" role="button" ' +
                'data-bs-toggle="dropdown" aria-expanded="false" ' +
                'data-en="Services" data-ar="الخدمات">Services</a>' +
              '<ul class="dropdown-menu">' +
                '<li><a class="dropdown-item" href="services.html" data-en="Satellite Connectivity" data-ar="الاتصالات الفضائية">Satellite Connectivity</a></li>' +
                '<li><a class="dropdown-item" href="services.html" data-en="Network Service" data-ar="خدمات الشبكة">Network Service</a></li>' +
                '<li><a class="dropdown-item" href="services.html" data-en="Systems Integration" data-ar="تكامل الأنظمة">Systems Integration</a></li>' +
                '<li><a class="dropdown-item" href="services.html" data-en="Product Finder" data-ar="محدد المنتجات">Product Finder</a></li>' +
                '<li><a class="dropdown-item" href="services.html" data-en="Resources" data-ar="الموارد">Resources</a></li>' +
              '</ul>' +
            '</li>' +

            '<li class="nav-item dropdown">' +
              '<a class="nav-link dropdown-toggle" href="products.html" role="button" ' +
                'data-bs-toggle="dropdown" aria-expanded="false" ' +
                'data-en="Products" data-ar="المنتجات">Products</a>' +
              '<ul class="dropdown-menu">' +
                '<li><a class="dropdown-item" href="products.html" data-en="Voice & Low Data" data-ar="الصوت والبيانات">Voice &amp; Low Data</a></li>' +
                '<li><a class="dropdown-item" href="products.html" data-en="Broadband Data" data-ar="بيانات عريضة">Broadband Data</a></li>' +
                '<li><a class="dropdown-item" href="products.html" data-en="VSAT Solutions" data-ar="حلول VSAT">VSAT Solutions</a></li>' +
                '<li><a class="dropdown-item" href="products.html" data-en="Mobile & Vehicular" data-ar="المتنقلة والمركبات">Mobile &amp; Vehicular</a></li>' +
                '<li><a class="dropdown-item" href="products.html" data-en="Terminals & Hardware" data-ar="الأجهزة">Terminals &amp; Hardware</a></li>' +
              '</ul>' +
            '</li>' +

            '<li class="nav-item dropdown">' +
              '<a class="nav-link dropdown-toggle" href="industries.html" role="button" ' +
                'data-bs-toggle="dropdown" aria-expanded="false" ' +
                'data-en="Industries" data-ar="القطاعات">Industries</a>' +
              '<ul class="dropdown-menu">' +
                '<li><a class="dropdown-item" href="industries.html" data-en="Government" data-ar="الحكومة">Government</a></li>' +
                '<li><a class="dropdown-item" href="industries.html" data-en="Humanitarian" data-ar="إنساني">Humanitarian</a></li>' +
                '<li><a class="dropdown-item" href="industries.html" data-en="Media" data-ar="إعلام">Media</a></li>' +
                '<li><a class="dropdown-item" href="industries.html" data-en="Energy" data-ar="الطاقة">Energy</a></li>' +
                '<li><a class="dropdown-item" href="industries.html" data-en="Enterprise" data-ar="مؤسسات">Enterprise</a></li>' +
                '<li><a class="dropdown-item" href="industries.html" data-en="Maritime" data-ar="بحري">Maritime</a></li>' +
              '</ul>' +
            '</li>' +

            '<li class="nav-item"><a class="nav-link" href="index.html#why"     data-en="Why Us"    data-ar="لماذا نحن">Why Us</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="index.html#clients" data-en="Clients"   data-ar="العملاء">Clients</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="index.html#about"   data-en="Corporate" data-ar="الشركة">Corporate</a></li>' +
            '<li class="nav-item"><a class="nav-link" href="contact.html"       data-en="Contact"   data-ar="اتصل بنا">Contact</a></li>' +

          '</ul>' +

          '<a href="contact.html" class="btn-hw-primary d-none d-lg-inline-flex" ' +
            'data-en="Request Service" data-ar="اطلب الخدمة">' +
            'Request Service <i class="bi bi-arrow-right"></i>' +
          '</a>' +
        '</div>' +
      '</div>' +
    '</nav>';

  /* ─────────────────────────────────────────────────────────
     FOOTER TEMPLATE
  ───────────────────────────────────────────────────────── */
  var FOOTER_TPL = '' +
    '<footer class="footer-hw">' +
      '<svg class="footer-wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">' +
        '<path fill="#1A2B47" d="M0,32 C240,70 480,0 720,18 C960,36 1200,70 1440,26 L1440,70 L0,70 Z"></path>' +
      '</svg>' +

      '<div class="container footer-top">' +
        '<div class="row g-4">' +

          '<div class="col-lg-4 col-md-6">' +
            '<a class="hw-logo" href="index.html" style="color:#fff;">' +
              '<span class="hw-logo-mark"><i class="bi bi-broadcast"></i></span>' +
              'Tech<span class="dot" style="color:var(--ts-pink);">-Sat</span>' +
            '</a>' +
            '<p class="mt-3" ' +
              'data-en="Tech-Sat is a leading IT company providing managed network communication solutions, and the only reseller in Yemen of IEC Global Telecom." ' +
              'data-ar="تك-سات شركة تقنية معلومات رائدة تقدم حلول اتصالات شبكية مُدارة، والموزع الوحيد في اليمن لشركة IEC Global Telecom.">' +
              'Tech-Sat is a leading IT company providing managed network communication solutions, and the only reseller in Yemen of IEC Global Telecom.' +
            '</p>' +
            '<div class="footer-social mt-3">' +
              '<a href="#" aria-label="Twitter / X"><i class="bi bi-twitter-x"></i></a>' +
              '<a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>' +
              '<a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>' +
              '<a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>' +
              '<a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>' +
            '</div>' +
            '<div class="footer-badges">' +
              '<span class="footer-badge"><i class="bi bi-patch-check-fill"></i> ' +
                '<span data-en="IEC Global Telecom Reseller" data-ar="موزع IEC Global Telecom">IEC Global Telecom Reseller</span>' +
              '</span>' +
              '<span class="footer-badge"><i class="bi bi-shield-lock-fill"></i> SSL Secured</span>' +
            '</div>' +
          '</div>' +

          '<div class="col-6 col-md-3 col-lg-2">' +
            '<h6 data-en="Services" data-ar="الخدمات">Services</h6>' +
            '<ul>' +
              '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Satellite Connectivity" data-ar="الاتصالات الفضائية">Satellite Connectivity</span></a></li>' +
              '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Network Service" data-ar="خدمات الشبكة">Network Service</span></a></li>' +
              '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Systems Integration" data-ar="تكامل الأنظمة">Systems Integration</span></a></li>' +
              '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Product Finder" data-ar="محدد المنتجات">Product Finder</span></a></li>' +
              '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Resources" data-ar="الموارد">Resources</span></a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="col-6 col-md-3 col-lg-2">' +
            '<h6 data-en="Products" data-ar="المنتجات">Products</h6>' +
            '<ul>' +
              '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="Voice & Low Data" data-ar="الصوت والبيانات">Voice &amp; Low Data</span></a></li>' +
              '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="Broadband Data" data-ar="بيانات عريضة">Broadband Data</span></a></li>' +
              '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="VSAT Solutions" data-ar="حلول VSAT">VSAT Solutions</span></a></li>' +
              '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="Mobile & Vehicular" data-ar="المتنقلة والمركبات">Mobile &amp; Vehicular</span></a></li>' +
              '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="Terminals & Hardware" data-ar="الأجهزة">Terminals &amp; Hardware</span></a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="col-6 col-md-3 col-lg-2">' +
            '<h6 data-en="Industries" data-ar="القطاعات">Industries</h6>' +
            '<ul>' +
              '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Government" data-ar="الحكومة">Government</span></a></li>' +
              '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Humanitarian" data-ar="إنساني">Humanitarian</span></a></li>' +
              '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Media" data-ar="إعلام">Media</span></a></li>' +
              '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Energy" data-ar="الطاقة">Energy</span></a></li>' +
              '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Enterprise" data-ar="مؤسسات">Enterprise</span></a></li>' +
              '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Maritime" data-ar="بحري">Maritime</span></a></li>' +
            '</ul>' +
          '</div>' +

          '<div class="col-md-6 col-lg-2">' +
            '<h6 data-en="Get In Touch" data-ar="تواصل معنا">Get In Touch</h6>' +
            '<div class="footer-contact-item">' +
              '<span class="ic"><i class="bi bi-geo-alt-fill"></i></span>' +
              '<span data-en="Aden, Yemen" data-ar="عدن، اليمن">Aden, Yemen</span>' +
            '</div>' +
            '<div class="footer-contact-item">' +
              '<span class="ic"><i class="bi bi-envelope-fill"></i></span>' +
              '<span>info@tech-sat.com</span>' +
            '</div>' +
            '<div class="footer-contact-item">' +
              '<span class="ic"><i class="bi bi-briefcase-fill"></i></span>' +
              '<span>Sales@tech-sat.com</span>' +
            '</div>' +
            '<div class="footer-contact-item">' +
              '<span class="ic"><i class="bi bi-headset"></i></span>' +
              '<span>Support@tech-sat.com</span>' +
            '</div>' +
            '<div class="footer-contact-item">' +
              '<span class="ic"><i class="bi bi-telephone-fill"></i></span>' +
              '<span>00967-2-396056</span>' +
            '</div>' +
          '</div>' +

        '</div>' +

        '<div class="row mt-4">' +
          '<div class="col-md-6">' +
            '<h6 data-en="Newsletter" data-ar="النشرة البريدية">Newsletter</h6>' +
            '<div class="newsletter-input">' +
              '<input type="email" placeholder="Your email address" aria-label="Email for newsletter">' +
              '<button type="button" aria-label="Subscribe"><i class="bi bi-arrow-right"></i></button>' +
            '</div>' +
            '<div class="newsletter-note">' +
              '<i class="bi bi-shield-check"></i> ' +
              '<span data-en="No spam. Unsubscribe anytime." data-ar="لا رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.">No spam. Unsubscribe anytime.</span>' +
            '</div>' +
          '</div>' +
        '</div>' +

        '<div class="footer-divider"></div>' +
        '<div class="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-3">' +
          '<div>' +
            '<div>&copy; 2026 Tech-Sat. <span data-en="All rights reserved." data-ar="جميع الحقوق محفوظة.">All rights reserved.</span></div>' +
            '<div class="footer-bottom-links mt-2">' +
              '<a href="privacy-policy.html"  data-en="Privacy Policy"   data-ar="سياسة الخصوصية">Privacy Policy</a>' +
              '<a href="terms-of-service.html" data-en="Terms of Service" data-ar="شروط الخدمة">Terms of Service</a>' +
              '<a href="faq.html"             data-en="FAQs"             data-ar="الأسئلة الشائعة">FAQs</a>' +
            '</div>' +
          '</div>' +
          '<div class="text-md-end">' +
            '<div class="footer-payments justify-content-md-end mb-2">' +
              '<i class="bi bi-globe2"></i>' +
              '<i class="bi bi-broadcast"></i>' +
              '<i class="bi bi-shield-lock"></i>' +
            '</div>' +
            '<div data-en="Reliable communications, wherever it matters most." ' +
              'data-ar="اتصالات موثوقة، حيث تكون الأهمية الأكبر.">' +
              'Reliable communications, wherever it matters most.</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</footer>';

  /* ─────────────────────────────────────────────────────────
     HELPERS
  ───────────────────────────────────────────────────────── */

  function getCurrentPage() {
    var path = window.location.pathname.split('/').pop();
    if (!path || path === '/') path = 'index.html';
    return path.toLowerCase();
  }

  function markActiveNav() {
    var current = getCurrentPage();
    document.querySelectorAll('#mainNav .nav-link[href]').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('#')[0].toLowerCase();
      if (href && href === current) {
        a.classList.add('active');
        var parentDrop = a.closest('.dropdown');
        if (parentDrop) {
          var toggle = parentDrop.querySelector('.dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      }
    });
  }

  /* ─────────────────────────────────────────────────────────
     THEME + LANGUAGE CONTROLS
  ───────────────────────────────────────────────────────── */

  function rebindChromeControls() {
    var html = document.documentElement;

    /* ── THEME ── */
    var themeBtn  = document.getElementById('themeToggle');
    var themeIcon = document.getElementById('themeIcon');
    var savedTheme = localStorage.getItem('ts-theme') || 'light';

    html.setAttribute('data-theme', savedTheme);
    if (themeIcon) {
      themeIcon.className = savedTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
    }

    if (themeBtn && !themeBtn.dataset.bound) {
      themeBtn.dataset.bound = '1';
      themeBtn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('ts-theme', next);
        if (themeIcon) {
          themeIcon.className = next === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
        }
      });
    }

    /* ── LANGUAGE ── */
    var langBtn   = document.getElementById('langToggle');
    var langLabel = document.getElementById('langLabel');

    function applyLang(lang) {
      html.setAttribute('lang', lang);
      html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
      if (langLabel) langLabel.textContent = lang === 'ar' ? 'EN' : 'AR';

      document.querySelectorAll('[data-en][data-ar]').forEach(function (el) {
        var val = el.getAttribute('data-' + lang);
        if (val === null) return;

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = val;
        } else if (el.tagName === 'OPTION') {
          el.textContent = val;
        } else {
          el.textContent = val;
        }
      });

      localStorage.setItem('ts-lang', lang);
    }

    var savedLang = localStorage.getItem('ts-lang') || 'en';
    applyLang(savedLang);

    if (langBtn && !langBtn.dataset.bound) {
      langBtn.dataset.bound = '1';
      langBtn.addEventListener('click', function () {
        var next = html.getAttribute('lang') === 'ar' ? 'en' : 'ar';
        applyLang(next);
      });
    }
  }

  /* ─────────────────────────────────────────────────────────
     INIT
  ───────────────────────────────────────────────────────── */

  function init() {
    var navRoot  = document.getElementById('navbar-root');
    var footRoot = document.getElementById('footer-root');

    if (navRoot)  navRoot.innerHTML  = NAVBAR_TPL;
    if (footRoot) footRoot.innerHTML = FOOTER_TPL;

    markActiveNav();
    rebindChromeControls();

    document.dispatchEvent(new Event('layoutReady'));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();