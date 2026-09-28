import { CONTENT } from '../data/details-data.js';
    (function () {
      'use strict';

     
      /* ═══ URL Parser ═══ */
      var params = new URLSearchParams(window.location.search);
      var type = params.get('type') || 'product';
      var id = params.get('id') || 'vsat-portable';
      var key = type + ':' + id;
      var data = CONTENT[key];
      var root = document.getElementById('postRoot');
      var html = document.documentElement;

      if (!data) {
        root.innerHTML = '<section class="error-state"><i class="bi bi-exclamation-triangle"></i><h2>المحتوى غير متوفر</h2><p>لم نجد هذه الصفحة.</p><a href="products.html" class="btn-hw-primary">العودة للمنتجات</a></section>';
        return;
      }

      var listUrl = type === 'service' ? 'services.html'
        : type === 'industry' ? 'industries.html'
          : 'products.html';

      /* ═══ Hero ═══ */
      function heroHTML(lang) {
        var tLabel = data.typeLabel[lang];
        var cat = data.category[lang];
        var imgClass = (data.coverFit === 'contain') ? '' : 'cover-fit';
        return '' +
          '<header class="hero-detail" id="details-hero">' +
          '<div class="container position-relative">' +
          '<div class="row align-items-center g-5">' +
          '<div class="col-lg-6" data-aos="fade-left">' +
          '<span class="eyebrow"><i class="bi bi-bookmark-fill"></i> ' + tLabel + ' · ' + cat + '</span>' +
          '<h1 class="hero-title mt-3">' + data.title[lang] + '</h1>' +
          '<p class="hero-lead">' + data.subtitle[lang] + '</p>' +
          '<div class="d-flex flex-wrap gap-3 mt-4">' +
          '<a href="contact.html" class="btn-hw-primary">' +
          (lang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote') +
          ' <i class="bi bi-arrow-' + (lang === 'ar' ? 'left' : 'right') + '"></i>' +
          '</a>' +
          '<a href="' + listUrl + '" class="btn-hw-outline">' +
          '<i class="bi bi-grid-1x2"></i> ' +
          (lang === 'ar'
            ? 'كل ' + (type === 'service' ? 'الخدمات' : type === 'industry' ? 'القطاعات' : 'المنتجات')
            : 'All ' + (type === 'service' ? 'Services' : type === 'industry' ? 'Industries' : 'Products')) +
          '</a>' +
          '</div>' +
          '</div>' +
          '<div class="col-lg-6" data-aos="fade-right" data-aos-delay="120">' +
          '<div class="hero-media-frame">' +
          '<img src="' + data.cover + '" alt="' + data.title[lang] + '" class="' + imgClass + '" loading="eager">' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</div>' +
          '</header>';
      }

      function statsHTML(lang) {
        if (!data.stats) return '';
        var items = data.stats.map(function (s) {
          return '<div class="col-6 col-md-3 stat-item">' +
            '<div class="stat-num">' + s.val + '</div>' +
            '<div class="stat-label">' + s.lbl[lang] + '</div>' +
            '</div>';
        }).join('');
        return '<section class="section-pad" id="details-stats"><div class="container">' +
          '<div class="stats-band" data-aos="zoom-in"><div class="row g-0">' + items + '</div></div>' +
          '</div></section>';
      }

      function buildBodyHTML(lang) {
        var toc = [];
        var content = '';

        data.sections.forEach(function (sec, i) {
          var num = i + 1;
          var slug = 'section-' + num;
          toc.push('<li><a href="#' + slug + '">' + sec.title[lang] + '</a></li>');

          content += '<h2 id="' + slug + '"><span class="num">' + num + '</span>' + sec.title[lang] + '</h2>';

          if (sec.body) content += '<p>' + sec.body[lang] + '</p>';

          if (sec.specs) {
            content += '<div class="spec-grid">';
            sec.specs.forEach(function (s) {
              content += '<div class="spec-item"><span class="label">' + s.lbl[lang] + '</span><span class="value">' + s.val[lang] + '</span></div>';
            });
            content += '</div>';
          }

          if (sec.features) {
            content += '<div class="feature-grid">';
            sec.features.forEach(function (f) {
              content += '<div class="feature-item">' +
                '<div class="ic"><i class="bi ' + f.ic + '"></i></div>' +
                '<div><div class="ft">' + f.t[lang] + '</div><div class="fd">' + f.d[lang] + '</div></div>' +
                '</div>';
            });
            content += '</div>';
          }

          if (sec.downloads) {
            content += '<div class="download-grid">';
            sec.downloads.forEach(function (d) {
              content += '<a href="#" class="download-card">' +
                '<div class="ic"><i class="bi ' + d.ic + '"></i></div>' +
                '<div class="info"><div class="name">' + d.n[lang] + '</div><div class="meta">' + d.m[lang] + '</div></div>' +
                '<i class="bi bi-download arrow"></i>' +
                '</a>';
            });
            content += '</div>';
          }

          if (sec.faqs) {
            sec.faqs.forEach(function (f) {
              content += '<details class="faq-item">' +
                '<summary>' + f.q[lang] + '</summary>' +
                '<div class="answer">' + f.a[lang] + '</div>' +
                '</details>';
            });
          }
        });

        toc.push('<li><a href="#request">' + (lang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote') + '</a></li>');
        content += '<h2 id="request"><span class="num">' + (data.sections.length + 1) + '</span>' +
          (lang === 'ar' ? 'اطلب عرض سعر' : 'Request a Quote') + '</h2>';
        content += '<p>' + (lang === 'ar'
          ? 'فريقنا جاهز لمساعدتك في اختيار الباقة المناسبة وتقديم عرض سعر مفصل.'
          : 'Our team is ready to help you choose the right package and provide a detailed quote.') + '</p>';
        content += '<div class="callout"><i class="bi bi-info-circle-fill"></i><div>' +
          (lang === 'ar'
            ? 'احصل على عرض سعر مخصص خلال 24 ساعة يشمل المواصفات، التكلفة، وجدول التسليم.'
            : 'Get a custom quote within 24 hours including specs, cost, and delivery schedule.') +
          '</div></div>';

        var tocHTML = '<aside class="details-toc d-none d-lg-block" data-aos="fade-left">' +
          '<div class="toc-card">' +
          '<h6>' + (lang === 'ar' ? 'في هذه الصفحة' : 'On this page') + '</h6>' +
          '<ul id="tocList">' + toc.join('') + '</ul>' +
          '</div>' +
          '</aside>';

        var contentHTML = '<div class="details-content" data-aos="fade-up">' + content + '</div>';

        return '<section class="section-pad pt-0"><div class="container">' +
          '<div class="details-layout">' + tocHTML + contentHTML + '</div>' +
          '</div></section>';
      }

      function relatedHTML(lang) {
        if (!data.related || !data.related.length) return '';
        var cards = data.related.map(function (k) {
          var r = CONTENT[k];
          if (!r) return '';
          var rid = k.split(':')[1];
          var imgHTML = '<img src="' + r.cover + '" alt="' + r.title[lang] + '" loading="lazy">'; return '<div class="col-md-6 col-lg-4" data-aos="fade-up">' +
            '<a href="details.html?type=' + r.type + '&id=' + rid + '" class="cause-card">' +
            '<div class="cause-img">' +
            '<span class="cause-tag">' + r.category[lang] + '</span>' +
            imgHTML +
            '</div>' +
            '<div class="cause-body">' +
            '<h5 class="font-display fw-bold">' + r.title[lang] + '</h5>' +
            '<p class="text-muted small mb-0">' + r.subtitle[lang] + '</p>' +
            '<span class="cause-donate">' +
            (lang === 'ar' ? 'اعرض التفاصيل' : 'View Details') +
            ' <i class="bi bi-arrow-' + (lang === 'ar' ? 'left' : 'right') + '"></i>' +
            '</span>' +
            '</div>' +
            '</a>' +
            '</div>';
        }).join('');
        return '<section class="section-pad bg-white"><div class="container">' +
          '<div class="text-center mx-auto mb-5" style="max-width:640px;" data-aos="fade-up">' +
          '<h2 class="section-title" style="font-size:clamp(1.6rem,3vw,2.2rem);">' +
          (lang === 'ar' ? 'المزيد من نفس القسم' : 'More from the same section') +
          '</h2>' +
          '</div>' +
          '<div class="row g-4">' + cards + '</div>' +
          '</div></section>';
      }

      function ctaHTML(lang) {
        return '<section class="section-pad" id="cta">' +
          '<div class="container">' +
          '<div class="cta-banner" data-aos="zoom-in">' +
          '<i class="bi bi-broadcast" style="font-size:2.4rem;"></i>' +
          '<h2 class="mt-3">' +
          (lang === 'ar'
            ? 'جاهز تبدأ؟ لنصمم الحل المناسب لمهمتك.'
            : "Ready to start? Let's design the right solution for your mission.") +
          '</h2>' +
          '<p class="mb-4" style="opacity:.92;">' +
          (lang === 'ar'
            ? 'من الشبكات الحكومية الآمنة إلى مواقع الطاقة النائية والبث الإعلامي المباشر.'
            : 'From secure government networks to remote energy sites and live media broadcasts.') +
          '</p>' +
          '<a href="contact.html" class="btn-cta">' +
          '<i class="bi bi-headset me-2"></i>' +
          '<span>' + (lang === 'ar' ? 'اطلب الخدمة' : 'Request Service') + '</span>' +
          '</a>' +
          '</div>' +
          '</div>' +
          '</section>';
      }

      function initTocSpy() {
        var tocLinks = document.querySelectorAll('#tocList a');
        if (!tocLinks.length) return;
        var sections = Array.from(tocLinks).map(function (a) {
          return document.querySelector(a.getAttribute('href'));
        }).filter(Boolean);

        function updateActive() {
          var scrollPos = window.scrollY + 180;
          var current = sections[0];
          sections.forEach(function (s) {
            if (s && s.offsetTop <= scrollPos) current = s;
          });
          tocLinks.forEach(function (a) {
            a.classList.toggle('active', current && a.getAttribute('href') === '#' + current.id);
          });
        }
        window.addEventListener('scroll', updateActive);
        updateActive();
      }

      function render(lang) {
        root.innerHTML =
          heroHTML(lang) +
          statsHTML(lang) +
          buildBodyHTML(lang) +
          relatedHTML(lang) +
          ctaHTML(lang);

        initTocSpy();
        if (window.AOS) AOS.refresh();
      }

      /* ═══ Language watcher ═══ */
      var currentLang = html.getAttribute('lang') || localStorage.getItem('ts-lang') || 'ar';
      render(currentLang);

      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (m) {
          if (m.attributeName === 'lang') {
            var newLang = html.getAttribute('lang');
            if (newLang && newLang !== currentLang) {
              currentLang = newLang;
              render(currentLang);
            }
          }
        });
      });
      observer.observe(html, { attributes: true, attributeFilter: ['lang'] });

      /* ═══ Preloader + Navbar + Scroll ═══ */
      window.addEventListener('load', function () {
        var pre = document.getElementById('preloader');
        if (pre) setTimeout(function () { pre.classList.add('hide'); }, 400);
      });

      var nav = document.getElementById('mainNav');
      window.addEventListener('scroll', function () {
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
        var topBtn = document.getElementById('scrollTop');
        if (topBtn) topBtn.classList.toggle('show', window.scrollY > 400);
      });

      var topBtn = document.getElementById('scrollTop');
      if (topBtn) {
        topBtn.addEventListener('click', function () {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      }

      document.addEventListener('layoutReady', function () {
        if (window.AOS) AOS.init({ duration: 700, once: true, offset: 80 });
      });
      window.addEventListener('load', function () {
        if (window.AOS) AOS.init({ duration: 700, once: true, offset: 80 });
      });

    })();
