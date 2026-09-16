/*  
   TECH-SAT — Unified Navbar + Footer
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ═══════════════════════════════════════════════
     NAVIGATION LINKS
     ═══════════════════════════════════════════════ */

  var NAV_LINKS = [
    {
      label: 'الرئيسية',
      href: 'index.html'
    },
    {
      label: 'الخدمات',
      href: 'services.html'
    },
    {
      label: 'المنتجات',
      href: 'products.html'
    },
    {
      label: 'من نحن',
      href: 'about.html'
    },
    {
      label: 'تواصل معنا',
      href: 'contact.html'
    }
  ];


  /* ═══════════════════════════════════════════════
     GET CURRENT PAGE
     ═══════════════════════════════════════════════ */

  function getCurrentPage() {

    var path = window.location.pathname.split('/').pop();

    if (!path || path === '/') {
      path = 'index.html';
    }

    return path.toLowerCase();
  }


  /* ═══════════════════════════════════════════════
     CHECK ACTIVE PAGE
     ═══════════════════════════════════════════════ */

  function isActivePage(href, currentPage) {

    if (href === currentPage) {
      return true;
    }

    if (href.indexOf('#') !== -1) {

      var basePage = href.split('#')[0];

      if (basePage === currentPage) {
        return true;
      }
    }

    return false;
  }


  /* ═══════════════════════════════════════════════
     NAVBAR
     ═══════════════════════════════════════════════ */

  function renderNavbar() {

    var root = document.getElementById('navbar-root');

    if (!root) {
      return;
    }

    var currentPage = getCurrentPage();

    var linksHtml = NAV_LINKS.map(function (link) {

      var activeClass = isActivePage(
        link.href,
        currentPage
      )
        ? ' class="active"'
        : '';

      return (
        '<li>' +
          '<a href="' + link.href + '"' + activeClass + '>' +
            link.label +
          '</a>' +
        '</li>'
      );

    }).join('');


    root.innerHTML =

      '<header id="header" class="header fixed-top">' +

        /* ═════════════════════════════════════════
           TOP ROW
           ═════════════════════════════════════════ */

        '<div class="container-fluid container-xl position-relative">' +

          '<div class="top-row d-flex align-items-center justify-content-between">' +

            /* Logo */

            '<a href="index.html" class="logo d-flex align-items-center">' +
              '<h1 class="sitename">Tech Sat</h1>' +
            '</a>' +


            /* Social Links */

            '<div class="d-flex align-items-center">' +

              '<div class="social-links">' +

                '<a ' +
                  'href="https://www.facebook.com/people/Tech-Sat/100064730084237/#" ' +
                  'class="facebook" ' +
                  'target="_blank" ' +
                  'rel="noopener noreferrer">' +
                  '<i class="bi bi-facebook"></i>' +
                '</a>' +

                '<a href="#" class="instagram">' +
                  '<i class="bi bi-instagram"></i>' +
                '</a>' +

                '<a href="#" class="linkedin">' +
                  '<i class="bi bi-linkedin"></i>' +
                '</a>' +

              '</div>' +

            '</div>' +

          '</div>' +

        '</div>' +


        /* ═════════════════════════════════════════
           NAVIGATION
           ═════════════════════════════════════════ */

        '<div class="nav-wrap">' +

          '<div class="container d-flex justify-content-center position-relative">' +

            '<nav id="navmenu" class="navmenu">' +

              '<ul>' +
                linksHtml +
              '</ul>' +

              '<i class="mobile-nav-toggle d-xl-none bi bi-list"></i>' +

            '</nav>' +

          '</div>' +

        '</div>' +

      '</header>';
  }


  /* ═══════════════════════════════════════════════
     FOOTER
     ═══════════════════════════════════════════════ */

  function renderFooter() {

    var root = document.getElementById('footer-root');

    if (!root) {
      return;
    }


    root.innerHTML =

      '<footer id="footer" class="footer dark-background">' +


        /* ═════════════════════════════════════════
           FOOTER MAIN
           ═════════════════════════════════════════ */

        '<div class="container">' +

          '<div class="row gy-5">' +


            /* ═════════════════════════════════════
               COLUMN 1 — ABOUT
               ═════════════════════════════════════ */

            '<div class="col-lg-4">' +

              '<div class="footer-content">' +

                '<a ' +
                  'href="index.html" ' +
                  'class="logo d-flex align-items-center mb-4">' +

                  '<span class="sitename">' +
                    'Tech-Sat' +
                  '</span>' +

                '</a>' +


                '<p class="mb-4">' +

                  'الموزع الحصري لـ IEC Global Telecom في اليمن. ' +

                  'حلول اتصالات فضائية موثوقة للقطاعات الحيوية: ' +

                  'الحكومة، الإنساني، البحري، الطاقة، الإعلام، والمؤسسات.' +

                '</p>' +


                /* Newsletter */

                '<div class="newsletter-form">' +

                  '<h5>ابقَ على تواصل</h5>' +

                  '<form ' +
                    'action="#" ' +
                    'method="post" ' +
                    'class="php-email-form">' +

                    '<div class="input-group">' +

                      '<input ' +
                        'type="email" ' +
                        'name="email" ' +
                        'class="form-control" ' +
                        'placeholder="أدخل بريدك الإلكتروني" ' +
                        'required>' +

                      '<button ' +
                        'type="submit" ' +
                        'class="btn-subscribe">' +

                        '<i class="bi bi-send"></i>' +

                      '</button>' +

                    '</div>' +


                    '<div class="loading">' +
                      'جاري التحميل' +
                    '</div>' +

                    '<div class="error-message"></div>' +

                    '<div class="sent-message">' +
                      'شكرًا لاشتراكك!' +
                    '</div>' +

                  '</form>' +

                '</div>' +

              '</div>' +

            '</div>' +


            /* ═════════════════════════════════════
               COLUMN 2 — COMPANY
               ═════════════════════════════════════ */

            '<div class="col-lg-2 col-6">' +

              '<div class="footer-links">' +

                '<h4>الشركة</h4>' +

                '<ul>' +

                  '<li>' +
                    '<a href="about.html">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' من نحن' +
                    '</a>' +
                  '</li>' +

                  '<li>' +
                    '<a href="services.html">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' الخدمات' +
                    '</a>' +
                  '</li>' +

                  '<li>' +
                    '<a href="products.html">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' المنتجات' +
                    '</a>' +
                  '</li>' +

                  '<li>' +
                    '<a href="contact.html">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' تواصل معنا' +
                    '</a>' +
                  '</li>' +

                '</ul>' +

              '</div>' +

            '</div>' +


            /* ═════════════════════════════════════
               COLUMN 3 — SOLUTIONS
               ═════════════════════════════════════ */

            '<div class="col-lg-2 col-6">' +

              '<div class="footer-links">' +

                '<h4>حلولنا</h4>' +

                '<ul>' +

                  '<li>' +
                    '<a href="index.html#features">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' حلول VSAT' +
                    '</a>' +
                  '</li>' +

                  '<li>' +
                    '<a href="index.html#features">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' صوت وبيانات' +
                    '</a>' +
                  '</li>' +

                  '<li>' +
                    '<a href="index.html#features">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' تكامل الأنظمة' +
                    '</a>' +
                  '</li>' +

                  '<li>' +
                    '<a href="index.html#features">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' شبكات مُدارة' +
                    '</a>' +
                  '</li>' +

                  '<li>' +
                    '<a href="index.html#features">' +
                      '<i class="bi bi-chevron-left"></i>' +
                      ' دعم فني 24/7' +
                    '</a>' +
                  '</li>' +

                '</ul>' +

              '</div>' +

            '</div>' +


            /* ═════════════════════════════════════
               COLUMN 4 — CONTACT
               ═════════════════════════════════════ */

            '<div class="col-lg-4">' +

              '<div class="footer-contact">' +

                '<h4>تواصل معنا</h4>' +


                /* Location */

                '<div class="contact-item">' +

                  '<div class="contact-icon">' +
                    '<i class="bi bi-geo-alt"></i>' +
                  '</div>' +

                  '<div class="contact-info">' +
                    '<p>عدن، اليمن</p>' +
                  '</div>' +

                '</div>' +


                /* Phone */

                '<div class="contact-item">' +

                  '<div class="contact-icon">' +
                    '<i class="bi bi-telephone"></i>' +
                  '</div>' +

                  '<div class="contact-info">' +
                    '<p>+967 2 396 056</p>' +
                  '</div>' +

                '</div>' +


                /* Email */

                '<div class="contact-item">' +

                  '<div class="contact-icon">' +
                    '<i class="bi bi-envelope"></i>' +
                  '</div>' +

                  '<div class="contact-info">' +
                    '<p>info@tech-sat.com</p>' +
                  '</div>' +

                '</div>' +


                /* Support */

                '<div class="contact-item">' +

                  '<div class="contact-icon">' +
                    '<i class="bi bi-headset"></i>' +
                  '</div>' +

                  '<div class="contact-info">' +

                    '<p>' +
                      'Support: support@tech-sat.com' +
                      '<br>' +
                      '00967-711188100' +
                    '</p>' +

                  '</div>' +

                '</div>' +


                /* Social Media */

                '<div class="social-links">' +

                  '<a href="#">' +
                    '<i class="bi bi-facebook"></i>' +
                  '</a>' +

                  '<a href="#">' +
                    '<i class="bi bi-twitter-x"></i>' +
                  '</a>' +

                  '<a href="#">' +
                    '<i class="bi bi-linkedin"></i>' +
                  '</a>' +

                  '<a href="#">' +
                    '<i class="bi bi-youtube"></i>' +
                  '</a>' +

                  '<a href="#">' +
                    '<i class="bi bi-instagram"></i>' +
                  '</a>' +

                '</div>' +

              '</div>' +

            '</div>' +


          '</div>' +

        '</div>' +


        /* ═════════════════════════════════════════
           FOOTER BOTTOM
           ═════════════════════════════════════════ */

        '<div class="footer-bottom">' +

          '<div class="container">' +

            '<div class="row align-items-center">' +


              /* Copyright */

              '<div class="col-lg-6">' +

                '<div class="copyright">' +

                  '<p>' +

                    '© ' +

                    '<span>حقوق النشر</span> ' +

                    '<strong class="px-1 sitename">' +
                      'Tech-Sat' +
                    '</strong> ' +

                    '<span>جميع الحقوق محفوظة 2026</span>' +

                  '</p>' +

                '</div>' +

              '</div>' +


              /* Legal Links */

              '<div class="col-lg-6">' +

                '<div class="footer-bottom-links">' +

                  '<a href="#">' +
                    'سياسة الخصوصية' +
                  '</a>' +

                  '<a href="#">' +
                    'الشروط والأحكام' +
                  '</a>' +

                  '<a href="#">' +
                    'سياسة الكوكيز' +
                  '</a>' +

                '</div>' +

              '</div>' +


            '</div>' +

          '</div>' +

        '</div>' +


      '</footer>';
  }


  /* ═══════════════════════════════════════════════
     INITIALIZATION
     ═══════════════════════════════════════════════ */

  function init() {

    renderNavbar();

    renderFooter();

  }


  /* ═══════════════════════════════════════════════
     DOM READY
     ═══════════════════════════════════════════════ */

  if (document.readyState === 'loading') {

    document.addEventListener(
      'DOMContentLoaded',
      init
    );

  } else {

    init();

  }

})();