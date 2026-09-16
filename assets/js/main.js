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