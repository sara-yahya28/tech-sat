/*PAGE CORE — Navbar, Scroll, AOS, Swiper, FAQ, ...*/
(function () {
  "use strict";

  /*SCROLLED BODY CLASS*/
  function toggleScrolled() {
    var selectBody = document.querySelector('body');
    var selectHeader = document.querySelector('#header');
    if (!selectHeader) return;

    var hasSticky = selectHeader.classList.contains('scroll-up-sticky') ||
                    selectHeader.classList.contains('sticky-top') ||
                    selectHeader.classList.contains('fixed-top');
    if (!hasSticky) return;

    if (window.scrollY > 100) {
      selectBody.classList.add('scrolled');
    } else {
      selectBody.classList.remove('scrolled');
    }
  }
  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /*MOBILE NAV TOGGLE*/
  var mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToggle() {
    document.body.classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  }

  document.querySelectorAll('#navmenu a').forEach(function (navmenu) {
    navmenu.addEventListener('click', function () {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(function (navmenu) {
    navmenu.addEventListener('click', function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      if (this.parentNode.nextElementSibling) {
        this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      }
      e.stopImmediatePropagation();
    });
  });

  /*PRELOADER*/
  var preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      preloader.remove();
    });
  }

  /*SCROLL TOP BUTTON*/
  var scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      if (window.scrollY > 100) {
        scrollTop.classList.add('active');
      } else {
        scrollTop.classList.remove('active');
      }
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /*AOS*/
  function aosInit() {
    if (typeof AOS !== 'undefined') {
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    }
  }
  window.addEventListener('load', aosInit);

  /*PURE COUNTER*/
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /*SWIPER*/
  function initSwiper() {
    if (typeof Swiper === 'undefined') return;
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      var configEl = swiperElement.querySelector(".swiper-config");
      if (!configEl) return;
      var config;
      try {
        config = JSON.parse(configEl.innerHTML.trim());
      } catch (err) {
        return;
      }
      new Swiper(swiperElement, config);
    });
  }
  window.addEventListener("load", initSwiper);

  /*FAQ TOGGLE (legacy)*/
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach(function (faqItem) {
    faqItem.addEventListener('click', function () {
      if (faqItem.parentNode) {
        faqItem.parentNode.classList.toggle('faq-active');
      }
    });
  });

  /*GLIGHTBOX*/
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

  /*ISOTOPE*/
  document.querySelectorAll('.isotope-layout').forEach(function (isotopeItem) {
    if (typeof Isotope === 'undefined' || typeof imagesLoaded === 'undefined') return;

    var layout = isotopeItem.getAttribute('data-layout') || 'masonry';
    var filter = isotopeItem.getAttribute('data-default-filter') || '*';
    var sort = isotopeItem.getAttribute('data-sort') || 'original-order';

    var container = isotopeItem.querySelector('.isotope-container');
    if (!container) return;

    var initIsotope;
    imagesLoaded(container, function () {
      initIsotope = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function (filters) {
      filters.addEventListener('click', function () {
        var activeFilter = isotopeItem.querySelector('.isotope-filters .filter-active');
        if (activeFilter) activeFilter.classList.remove('filter-active');
        this.classList.add('filter-active');

        if (initIsotope) {
          initIsotope.arrange({ filter: this.getAttribute('data-filter') });
        }
        if (typeof aosInit === 'function') aosInit();
      }, false);
    });
  });

  /*HASH SCROLL*/
  window.addEventListener('load', function () {
    if (window.location.hash) {
      var target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(function () {
          var scrollMarginTop = getComputedStyle(target).scrollMarginTop;
          window.scrollTo({
            top: target.offsetTop - parseInt(scrollMarginTop || 0),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /*NAVMENU SCROLLSPY*/
  var navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(function (navmenulink) {
      if (!navmenulink.hash) return;
      var section = document.querySelector(navmenulink.hash);
      if (!section) return;

      var position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(function (link) {
          link.classList.remove('active');
        });
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();

/*QUOTE MODAL — Standalone*/
(function () {
  "use strict";

  var modal = document.getElementById('quoteModal');
  if (!modal) return;

  var form = document.getElementById('quoteForm');
  var status = document.getElementById('quoteFormStatus');

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('quote-modal-open');
    setTimeout(function () {
      var firstInput = modal.querySelector('input');
      if (firstInput) firstInput.focus();
    }, 300);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('quote-modal-open');
    if (status) {
      status.className = 'quote-form__status';
      status.textContent = '';
    }
  }

  document.querySelectorAll('[data-open-quote]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  modal.querySelectorAll('[data-close-quote]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#qName');
      var email = form.querySelector('#qEmail');
      var phone = form.querySelector('#qPhone');

      var nameVal = name ? name.value.trim() : '';
      var emailVal = email ? email.value.trim() : '';
      var phoneVal = phone ? phone.value.trim() : '';

      if (!nameVal || !emailVal || !phoneVal) {
        if (status) {
          status.className = 'quote-form__status error';
          status.textContent = 'الرجاء تعبئة الحقول الإلزامية.';
        }
        return;
      }

      var submitBtn = form.querySelector('.quote-form__submit');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> جاري الإرسال...';
      }

      setTimeout(function () {
        if (status) {
          status.className = 'quote-form__status success';
          status.textContent = '✓ تم استلام طلبك بنجاح. سنتواصل معك خلال 24 ساعة.';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<i class="bi bi-send"></i> إرسال الطلب';
        }
        form.reset();
        setTimeout(closeModal, 2500);
      }, 800);
    });
  }

  window.openQuoteModal = openModal;
  window.closeQuoteModal = closeModal;
})();

/* ═══════════════════════════════════════════════════════════
   3) WORLD MAP (Leaflet) — Only runs if #map exists
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  var mapEl = document.getElementById('map');
  if (!mapEl) return;                          // لا تفعّل إن لم توجد خريطة
  if (typeof L === 'undefined') return;        // لا تفعّل إن لم تُحمّل Leaflet

  /* ─── Locations ─── */
  var LOCATIONS = [
    {
      id: 'yemen',
      name: 'اليمن — المقر الرئيسي',
      desc: 'مركز العمليات الفضائية 24/7 مع تغطية شاملة 100%',
      lat: 15.3694,
      lng: 44.191,
      type: 'hq'
    },
    {
      id: 'saudi',
      name: 'المملكة العربية السعودية',
      desc: 'محطات ترحيل إقليمية وربط تجاري متقدم',
      lat: 24.7136,
      lng: 46.6753,
      type: 'hub'
    },
    {
      id: 'djibouti',
      name: 'جيبوتي',
      desc: 'بوابة الاتصالات البحرية لمضيق باب المندب',
      lat: 11.8251,
      lng: 42.5903,
      type: 'hub'
    },
    {
      id: 'egypt',
      name: 'مصر',
      desc: 'محطات VSAT لممر قناة السويس البحري',
      lat: 26.8206,
      lng: 30.8025,
      type: 'hub'
    },
    {
      id: 'uae',
      name: 'الإمارات',
      desc: 'محور تبادل البيانات وشراكة IEC Telecom',
      lat: 23.4241,
      lng: 53.8478,
      type: 'hub'
    }
  ];

  /* ─── Init Map ─── */
  var map = L.map('map', {
    center: [22, 45],
    zoom: 4,
    zoomControl: true,
    attributionControl: true,
    worldCopyJump: true,
    scrollWheelZoom: false
  });

  /* ─── Tile Layer: Esri Dark Canvas ─── */
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    {
      maxZoom: 16,
      attribution: 'Tiles &copy; Esri'
    }
  ).addTo(map);

  /* ─── Place names layer ─── */
  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 16, opacity: 0.7 }
  ).addTo(map);

  /* ─── Markers ─── */
  LOCATIONS.forEach(function (loc) {
    var isHQ = loc.type === 'hq';

    var icon = L.divIcon({
      className: 'custom-marker',
      html:
        '<div class="custom-marker ' + (isHQ ? 'custom-marker--hq' : 'custom-marker--hub') + '">' +
          '<span class="custom-marker__ring"></span>' +
          '<span class="custom-marker__dot"></span>' +
        '</div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });

    var marker = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(map);

    marker.bindPopup(
      '<div class="map-popup__title">' + loc.name + '</div>' +
      '<div class="map-popup__desc">' + loc.desc + '</div>' +
      (isHQ ? '<div class="map-popup__badge">★ المقر الرئيسي</div>' : '')
    );

    if (isHQ) {
      setTimeout(function () { marker.openPopup(); }, 800);
    }
  });

  /* ─── Connection Lines from HQ to Hubs ─── */
  var hq = LOCATIONS.find(function (l) { return l.id === 'yemen'; });

  LOCATIONS.filter(function (l) { return l.id !== 'yemen'; }).forEach(function (loc) {
    var midLat = (hq.lat + loc.lat) / 2 + 3;
    var midLng = (hq.lng + loc.lng) / 2;

    L.polyline(
      [[hq.lat, hq.lng], [midLat, midLng], [loc.lat, loc.lng]],
      { color: '#3A6EA5', weight: 1.5, dashArray: '6 8', opacity: 0.75 }
    ).addTo(map);
  });

  /* ─── Coverage Circle around HQ ─── */
  L.circle([hq.lat, hq.lng], {
    radius: 400000,
    color: '#D1D8E0',
    weight: 1.5,
    opacity: 0.7,
    fillColor: '#D1D8E0',
    fillOpacity: 0.08,
    dashArray: '4 6'
  }).addTo(map);

  /* ─── Smart Zoom Control ─── */
  map.on('focus', function () { map.scrollWheelZoom.enable(); });
  map.on('blur', function () { map.scrollWheelZoom.disable(); });

  /* ─── Fix Size on Load ─── */
  window.addEventListener('load', function () {
    setTimeout(function () { map.invalidateSize(); }, 200);
  });

  /* ─── Fix size when tab/window resizes ─── */
  window.addEventListener('resize', function () {
    setTimeout(function () { map.invalidateSize(); }, 150);
  });
})();
(function () {
  'use strict';

  /* ═══════════════ LAYOUT READY ═══════════════ */
  function init() {
    var html = document.documentElement;

    /* ---------- THEME ---------- */
    var themeBtn = document.getElementById('themeToggle');
    var themeIcon = document.getElementById('themeIcon');
    var savedTheme = localStorage.getItem('ts-theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    if (themeIcon) themeIcon.className = savedTheme === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';

    if (themeBtn && !themeBtn.dataset.bound) {
      themeBtn.dataset.bound = '1';
      themeBtn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('ts-theme', next);
        if (themeIcon) themeIcon.className = next === 'dark' ? 'bi bi-sun' : 'bi bi-moon-stars';
      });
    }

    /* ---------- LANGUAGE ---------- */
    var langBtn = document.getElementById('langToggle');
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

    applyLang(localStorage.getItem('ts-lang') || 'ar');

    if (langBtn && !langBtn.dataset.bound) {
      langBtn.dataset.bound = '1';
      langBtn.addEventListener('click', function () {
        var next = html.getAttribute('lang') === 'ar' ? 'en' : 'ar';
        applyLang(next);
      });
    }

    /* ---------- NAVBAR SHADOW ---------- */
    var nav = document.getElementById('mainNav');
    if (nav && !nav.dataset.bound) {
      nav.dataset.bound = '1';
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 20);
      });
    }

    /* ---------- SCROLL SPY ---------- */
    var sections = document.querySelectorAll('section[id], header[id]');
    var navLinks = document.querySelectorAll('.nav-hw .nav-link[href^="#"]');
    if (sections.length && navLinks.length) {
      window.addEventListener('scroll', function () {
        var current = '';
        sections.forEach(function (s) {
          var top = s.offsetTop - 140;
          if (window.scrollY >= top) current = s.id;
        });
        navLinks.forEach(function (l) {
          l.classList.toggle('active', l.getAttribute('href') === '#' + current);
        });
      });
    }

    /* ---------- SCROLL TOP ---------- */
    var topBtn = document.getElementById('scrollTop');
    if (topBtn && !topBtn.dataset.bound) {
      topBtn.dataset.bound = '1';
      window.addEventListener('scroll', function () {
        topBtn.classList.toggle('show', window.scrollY > 400);
      });
      topBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    /* ---------- COUNTERS ---------- */
    var counters = document.querySelectorAll('.counter');
    if (counters.length && !counters[0].dataset.counted) {
      counters[0].dataset.counted = '1';

      function runCounters() {
        counters.forEach(function (c) {
          var target = +c.dataset.target;
          var current = 0;
          var step = target / 60;
          var timer = setInterval(function () {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            c.textContent = Math.floor(current).toLocaleString();
          }, 20);
        });
      }

      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting) { runCounters(); io.disconnect(); }
          });
        }, { threshold: 0.4 });
        io.observe(counters[0]);
      } else {
        runCounters();
      }
    }

    /* ---------- CONTACT FORM ---------- */
    var form = document.getElementById('contactForm');
    if (form && !form.dataset.bound) {
      form.dataset.bound = '1';
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var status = document.getElementById('formStatus');
        if (status) {
          status.innerHTML = '<div style="color:#c21818;font-weight:600;padding:.75rem;background:rgba(194,24,24,.08);border-radius:10px;">Thank you. We will contact you shortly.</div>';
        }
        form.reset();
      });
    }
  }

  /* شغّل init كل مرة الـ layout يخلص تحميل */
  document.addEventListener('layoutReady', init);

  /* احتياط: لو layoutReady فات قبل ما main.js يحمّل */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(init, 100); });
  } else {
    setTimeout(init, 100);
  }

  /* ---------- PRELOADER ---------- */
  window.addEventListener('load', function () {
    var pre = document.getElementById('preloader');
    if (pre) setTimeout(function () { pre.classList.add('hide'); }, 400);
  });

  /* ---------- AOS ---------- */
  window.addEventListener('load', function () {
    if (window.AOS) AOS.init({ duration: 700, once: true, offset: 80 });
  });
})();