/**
 * Tech-Sat — Main JavaScript
 * Based on LeadPage Template (BootstrapMade)
 * Extended with: Quote Modal, World Map (Leaflet)
 */

/* ═══════════════════════════════════════════════════════════
   1) PAGE CORE — Navbar, Scroll, AOS, Swiper, FAQ, ...
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ─── SCROLLED BODY CLASS ─── */
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

  /* ─── MOBILE NAV TOGGLE ─── */
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

  /* ─── PRELOADER ─── */
  var preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', function () {
      preloader.remove();
    });
  }

  /* ─── SCROLL TOP BUTTON ─── */
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

  /* ─── AOS ─── */
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

  /* ─── PURE COUNTER ─── */
  if (typeof PureCounter !== 'undefined') {
    new PureCounter();
  }

  /* ─── SWIPER ─── */
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

  /* ─── FAQ TOGGLE (legacy) ─── */
  document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle, .faq-item .faq-header').forEach(function (faqItem) {
    faqItem.addEventListener('click', function () {
      if (faqItem.parentNode) {
        faqItem.parentNode.classList.toggle('faq-active');
      }
    });
  });

  /* ─── GLIGHTBOX ─── */
  if (typeof GLightbox !== 'undefined') {
    GLightbox({ selector: '.glightbox' });
  }

  /* ─── ISOTOPE ─── */
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

  /* ─── HASH SCROLL ─── */
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

  /* ─── NAVMENU SCROLLSPY ─── */
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

/* ═══════════════════════════════════════════════════════════
   2) QUOTE MODAL — Standalone
   ═══════════════════════════════════════════════════════════ */
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
  if (!mapEl) return;
  if (typeof L === 'undefined') return;

  /* ─── Locations (All IEC Telecom Offices + Yemen) ─── */
  var LOCATIONS = [
    {
      id: 'france',
      name: 'فرنسا — سيرجي بونتوز (المقر الرئيسي)',
      desc: 'IEC Telecom Europe (HQ)<br>Immeuble Le Cerame, 47 Avenue des Genottes<br>Cergy Pontoise, France<br>+33 1 40 17 08 03<br>info-ea@iec-telecom.com',
      lat: 49.0389,
      lng: 2.0781,
      type: 'hq'
    },
    {
      id: 'turkey',
      name: 'تركيا — إسطنبول (فرعنا الرئيسي)',
      desc: 'IEC Telecom Turkey<br>Yenişehir mah. Osmanlı Bulvarı No:5B<br>ARWEN Office K3/D29, 34912 Pendik – Istanbul<br>+90 216 970 16 08<br>info-tk@iec-telecom.com',
      lat: 40.8765,
      lng: 29.2315,
      type: 'branch'
    },
    {
      id: 'yemen',
      name: 'اليمن — عدن',
      desc: 'Tech-Sat (Regional Operations)<br>Aden, Yemen<br>+967 2 396 056<br>info@tech-sat.com',
      lat: 12.7855,
      lng: 45.0187,
      type: 'hub'
    },
    {
      id: 'uae-dubai',
      name: 'الإمارات — دبي',
      desc: 'IEC Telecom UAE - DUBAI<br>Office #3203-3204, Indigo Icon Tower, JLT<br>PO BOX 5569, Dubai, UAE<br>+971 4 447 5180<br>info-mea@iec-telecom.com',
      lat: 25.0657,
      lng: 55.1713,
      type: 'hub'
    },
    {
      id: 'uae-abudhabi',
      name: 'الإمارات — أبوظبي',
      desc: 'IEC Telecom UAE - ABU DHABI<br>Office F10 - F11, AFHAD building, Musaffah<br>Industrial Area, ICAD1, PO BOX 9724<br>Abu Dhabi, UAE<br>+971 2 550 0446<br>info-mea@iec-telecom.com',
      lat: 24.4512,
      lng: 54.3970,
      type: 'hub'
    },
    {
      id: 'kazakhstan',
      name: 'كازاخستان — ألماتي',
      desc: 'IEC TELECOM KAZAKHSTAN<br>Almaty, 43/56 Karibzhanov Str<br>Kazakhstan<br>+7 727 347 08 56<br>info-kz@iec-telecom.com',
      lat: 43.2389,
      lng: 76.8897,
      type: 'hub'
    },
    {
      id: 'norway',
      name: 'النرويج — أوسلو',
      desc: 'IEC TELECOM NORWAY<br>Østensjøveien 32, 0667 Oslo<br>Norway<br>+47 23 10 06 40<br>info-no@iec-telecom.com',
      lat: 59.9133,
      lng: 10.7389,
      type: 'hub'
    },
    {
      id: 'singapore',
      name: 'سنغافورة',
      desc: 'IEC TELECOM SINGAPORE<br>61 Ubi Avenue 1, #06-14 UB Point, 408941<br>Singapore<br>+65 6744 7925<br>info-sg@iec-telecom.com',
      lat: 1.2897,
      lng: 103.8501,
      type: 'hub'
    },
    {
      id: 'sweden',
      name: 'السويد — غوتنبرغ',
      desc: 'IEC TELECOM SWEDEN<br>Fikskebäks Hamn, Göteborg<br>Sweden<br>+46 10 33 00 533<br>info-se@iec-telecom.com',
      lat: 57.7089,
      lng: 11.9746,
      type: 'hub'
    },
    {
      id: 'indonesia',
      name: 'إندونيسيا — جاكرتا',
      desc: 'IEC TELECOM INDONESIA<br>Jakarta, Indonesia<br>+62-815-9599-350<br>info-id@iec-telecom.com',
      lat: -6.2088,
      lng: 106.8456,
      type: 'hub'
    },
    {
      id: 'malaysia',
      name: 'ماليزيا — سيبرجايا',
      desc: 'IEC Telecom Malaysia<br>C-5-9, ITech Tower Jalan Impact, 63000<br>Cyberjaya, Malaysia<br>+60 38 699 1599<br>info-my@iec-telecom.com',
      lat: 2.9225,
      lng: 101.6532,
      type: 'hub'
    },
    {
      id: 'tunisia',
      name: 'تونس — سوسة',
      desc: 'IEC Telecom Tunisia (Surustech)<br>203, Bat6000 Novation City<br>Hammam Maarouf, Sousse, Tunisia<br>+216 54 767 881<br>info-sousse@iec-telecom.com',
      lat: 35.8256,
      lng: 10.6084,
      type: 'hub'
    }
  ];

  /* ─── Init Map ─── */
  var map = L.map('map', {
    center: [25, 40], // Center to show Europe, Africa, Middle East, and Asia
    zoom: 2,
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
    var markerClass = 'custom-marker--hub';
    if (loc.type === 'hq') markerClass = 'custom-marker--hq';
    if (loc.type === 'branch') markerClass = 'custom-marker--branch';

    var icon = L.divIcon({
      className: 'custom-marker',
      html:
        '<div class="custom-marker ' + markerClass + '">' +
          '<span class="custom-marker__ring"></span>' +
          '<span class="custom-marker__dot"></span>' +
        '</div>',
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });

    var marker = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(map);

    var badge = '';
    if (loc.type === 'hq') {
      badge = '<div class="map-popup__badge">★ المقر الرئيسي العالمي</div>';
    }
    if (loc.type === 'branch') {
      badge = '<div class="map-popup__badge" style="background:#FFA500; color:#0B1D33;">فرعنا الرئيسي — يخدم اليمن</div>';
    }

    marker.bindPopup(
      '<div class="map-popup__title">' + loc.name + '</div>' +
      '<div class="map-popup__desc">' + loc.desc + '</div>' +
      badge
    );
  });

  /* ─── Dotted line: Turkey ↔ Yemen (supply route) ─── */
  var turkey = LOCATIONS.find(function (l) { return l.id === 'turkey'; });
  var yemen = LOCATIONS.find(function (l) { return l.id === 'yemen'; });

  if (turkey && yemen) {
    L.polyline(
      [[turkey.lat, turkey.lng], [yemen.lat, yemen.lng]],
      { color: '#FFA500', weight: 2.5, dashArray: '6 8', opacity: 0.9 }
    ).addTo(map);
  }

  /* ─── Dotted line: France HQ → Turkey (supply chain) ─── */
  var france = LOCATIONS.find(function (l) { return l.id === 'france'; });
  if (france && turkey) {
    L.polyline(
      [[france.lat, france.lng], [turkey.lat, turkey.lng]],
      { color: '#3A6EA5', weight: 1.5, dashArray: '4 6', opacity: 0.5 }
    ).addTo(map);
  }

  /* ─── Coverage Circle around Yemen (optional) ─── */
  if (yemen) {
    L.circle([yemen.lat, yemen.lng], {
      radius: 400000,
      color: '#D1D8E0',
      weight: 1.5,
      opacity: 0.7,
      fillColor: '#D1D8E0',
      fillOpacity: 0.08,
      dashArray: '4 6'
    }).addTo(map);
  }

  /* ─── Smart Zoom Control ─── */
  map.on('focus', function () { map.scrollWheelZoom.enable(); });
  map.on('blur', function () { map.scrollWheelZoom.disable(); });

  /* ─── Fix Size on Load ─── */
  window.addEventListener('load', function () {
    setTimeout(function () { map.invalidateSize(); }, 200);
  });

  window.addEventListener('resize', function () {
    setTimeout(function () { map.invalidateSize(); }, 150);
  });
})();