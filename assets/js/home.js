/* ═══════════════════════════════════════════════════════════
   TECH-SAT — Home Page Data Binding (v4 — full 13 sections)
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  function getData() {
    try { if (typeof DATA !== 'undefined' && DATA) return DATA; } catch (e) {}
    if (window.DATA) return window.DATA;
    return null;
  }

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else { fn(); }
  }

  /* ─── FALLBACK DATA ──────────────────────────────────────── */
  var FALLBACK = {
    trustStrip: {
      numbers: [
        { value: '500+', label: 'عميل موثوق' },
        { value: '15+',  label: 'دولة' },
        { value: '200+', label: 'مشروع' },
        { value: '10+',  label: 'سنوات خبرة' }
      ]
    },
    verticals: [
      { id:'gov', title:'الحكومة', icon:'bi-building', promise:'أمن، امتثال، واستمرارية الاتصال.', solutions:['شبكات خاصة','اتصالات مشفّرة','استمرارية الأعمال'] },
      { id:'humanitarian', title:'الإنساني', icon:'bi-heart', promise:'نشر سريع خلال 24–48 ساعة في الأزمات.', solutions:['محطات Manpack','دعم ميداني','تعرفة مرنة'] },
      { id:'maritime', title:'البحري', icon:'bi-water', promise:'Uptime عالٍ وتغطية محيطية موثوقة.', solutions:['Marine VSAT','تتبع تلقائي','تكامل مع أنظمة السفينة'] },
      { id:'energy', title:'الطاقة', icon:'bi-lightning-charge', promise:'تكامل SCADA ومراقبة عن بُعد.', solutions:['SCADA over Satellite','IoT Modem','مراقبة 24/7'] },
      { id:'media', title:'الإعلام', icon:'bi-broadcast', promise:'بث مباشر عالي الجودة من أي موقع.', solutions:['SNG Terminal','Live Uplink','نقل ملفات ضخمة'] },
      { id:'telecom', title:'اللاسلكي', icon:'bi-tower', promise:'Backhaul موثوق للأبراج والمحطات.', solutions:['Backhaul','تراسل بيانات','SLA مكتوب'] },
      { id:'enterprise', title:'المؤسسات', icon:'bi-briefcase', promise:'شبكة مُدارة بنقطة تواصل واحدة.', solutions:['Managed Network','SD-WAN','دعم 24/7'] }
    ]
  };

  /* ─── DATA DEFINITIONS ───────────────────────────────────── */
  var PAIN = [
    {
      icon:'bi-wifi-off',
      title:'مواقع بلا تغطية',
      desc:'مناطق نائية لا تصلها شبكات الكابل ولا الأبراج الأرضية.',
      solution:'محطات VSAT مستقلة',
      layer:'الطبقة 1 — البنية الفضائية',
      metric:'100%', metricLabel:'استقلال عن البنية الأرضية'
    },
    {
      icon:'bi-exclamation-triangle',
      title:'انقطاعات مكلفة',
      desc:'كل دقيقة توقف = خسارة تشغيلية مباشرة على الأرض.',
      solution:'مراقبة 24/7',
      layer:'الطبقة 3 — الشبكة المُدارة',
      metric:'99.8%', metricLabel:'Uptime مضمون'
    },
    {
      icon:'bi-shield-lock',
      title:'بيانات غير آمنة',
      desc:'اتصالات حكومية وعسكرية تحتاج تشفيرًا من الطرف للطرف.',
      solution:'شبكات مشفّرة',
      layer:'الطبقة 2 — تكامل الأنظمة',
      metric:'E2E', metricLabel:'تشفير من الطرف للطرف'
    },
    {
      icon:'bi-clock-history',
      title:'نشر بطيء في الأزمات',
      desc:'المنظمات الإنسانية تحتاج اتصالات خلال ساعات لا أسابيع.',
      solution:'محطات Manpack',
      layer:'الطبقة 1 — البنية الفضائية',
      metric:'36h', metricLabel:'زمن النشر الكامل'
    }
  ];

  var SOLUTIONS = [
    { num:'01', icon:'bi-broadcast-pin', title:'البنية الفضائية',
      desc:'محطات VSAT ثابتة ومتنقلة، هوائيات Ku/Ka، ومودمات مؤسسية.',
      list:['محطات متنقلة وثابتة','هوائيات عالية الكسب','مودمات Ku/Ka'],
      href:'connectivity.html' },
    { num:'02', icon:'bi-tools', title:'تكامل الأنظمة',
      desc:'تصميم هندسي داخلي وتركيب وتدريب فريق العميل في الموقع.',
      list:['تصميم هندسي داخلي','تركيب ميداني','تدريب الفريق'],
      href:'services.html' },
    { num:'03', icon:'bi-diagram-3', title:'الشبكة المُدارة',
      desc:'مراقبة 24/7، اتفاقيات SLA، وتقارير دورية لأداء الشبكة.',
      list:['NOC يعمل 24/7','SLA مكتوب','تقارير شهرية'],
      href:'services.html' }
  ];

  var WHY = [
    { icon:'bi-tools',      title:'تصميم هندسي داخلي',  desc:'لا نبيع أجهزة. نصمم ونبني البنية كاملة في مختبراتنا.' },
    { icon:'bi-patch-check', title:'موزع حصري لـ IEC',   desc:'وصول مباشر لشبكة تغطي 3 قارات — بلا وسطاء.' },
    { icon:'bi-truck',      title:'فرق ميدانية',        desc:'مهندسونا يصلون لموقعك. لا دعم عن بعد فقط.' },
    { icon:'bi-file-earmark-check', title:'SLA مكتوب',   desc:'التزامات موثقة بغرامات تأخير حقيقية.' }
  ];

  var PROOF = [
    {
      sector:'حكومي',
      icon:'bi-building',
      tag:'وزارة اتصالات',
      image:'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
      desc:'حل اتصالات سيادي لموقع حكومي في منطقة جبلية نائية.',
      challenge:'موقع سيادي في منطقة جبلية بلا اتصال.',
      solution:'محطة VSAT ثابتة + شبكة مشفّرة داخلية.',
      resultValue:'50 Mbps',
      resultLabel:'اتصال مستقر',
      href:'clients.html'
    },
    {
      sector:'إنساني',
      icon:'bi-heart',
      tag:'منظمة دولية',
      image:'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80',
      desc:'نشر فريق طوارئ في منطقة أزمات خلال 36 ساعة.',
      challenge:'نشر فريق طوارئ في منطقة أزمات خلال 48 ساعة.',
      solution:'محطة Manpack محمولة + تدريب الفريق محليًا.',
      resultValue:'36 ساعة',
      resultLabel:'زمن النشر الكامل',
      href:'clients.html'
    },
    {
      sector:'بحري',
      icon:'bi-water',
      tag:'شركة شحن',
      image:'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
      desc:'اتصال بحري موثوق لأسطول شحن يعمل خارج الموانئ.',
      challenge:'انقطاع الاتصال بسفن الشحن خارج الموانئ.',
      solution:'Marine VSAT مع تتبع تلقائي + دعم 24/7.',
      resultValue:'99.8%',
      resultLabel:'Uptime شهري',
      href:'clients.html'
    }
  ];

  var PROCESS = [
    { icon:'bi-search',       title:'التقييم',  desc:'نحلل موقعك ومتطلباتك التشغيلية.' },
    { icon:'bi-pencil-square', title:'التصميم', desc:'نصمم البنية والحل الهندسي المناسب.' },
    { icon:'bi-rocket-takeoff', title:'النشر',  desc:'تركيب وتشغيل مع تدريب فريقك.' },
    { icon:'bi-headset',      title:'الدعم',    desc:'مراقبة 24/7 ودعم ميداني مستمر.' }
  ];

  var PINS = [
    { top:'38%', left:'62%', label:'عدن — المقر الرئيسي', hq:true },
    { top:'28%', left:'58%', label:'صنعاء — مكتب' },
    { top:'45%', left:'72%', label:'دبي — مركز إقليمي' },
    { top:'60%', left:'48%', label:'نيروبي — تغطية' },
    { top:'25%', left:'42%', label:'لندن — شبكة IEC' }
  ];

  var FAQ = [
    { q:'كم يستغرق تركيب محطة VSAT؟',
      a:'من 3 إلى 7 أيام عمل لمعظم المواقع. المواقع الحساسة أو النائية قد تحتاج حتى أسبوعين حسب التصاريح اللوجستية.' },
    { q:'هل تغطي شبكتكم المنطقة التي أعمل فيها؟',
      a:'نعم — تغطيتنا تشمل اليمن والشرق الأوسط وأفريقيا وأوروبا عبر شبكة IEC Global Telecom. تحقق من صفحة التغطية.' },
    { q:'ما الفرق بين VSAT والحلول الأرضية؟',
      a:'VSAT لا يعتمد على أي بنية تحتية أرضية، ويعمل في أي مكان له رؤية مباشرة للقمر الصناعي — حتى في الصحراء أو البحر.' },
    { q:'هل تقدمون اتفاقيات مستوى خدمة (SLA)؟',
      a:'نعم. كل مشروع مؤسسي أو حكومي يحصل على SLA مكتوب يحدد أوقات الاستجابة والغرامات التعاقدية.' },
    { q:'كيف يتم الفوترة؟',
      a:'عقود شهرية أو سنوية بالدولار أو الريال. الدفع المسبق للتركيب، والاشتراك الشهري بعد التشغيل.' },
    { q:'هل تدعمون القطاع الحكومي بمتطلبات أمنية؟',
      a:'نعم — نعمل مع جهات سيادية ونوفر شبكات خاصة معزولة وتشفيرًا من الطرف إلى الطرف.' }
  ];

  var TESTIMONIALS = [
    { quote:'فريق Tech-Sat قدّم لنا حلًا متكاملًا في وقت قياسي. الاتصال مستقر 100% في أصعب الظروف.', name:'أحمد الشامي', role:'مدير تقني — وزارة الاتصالات' },
    { quote:'خدمة VSAT البحرية نقلت عملياتنا لمرحلة جديدة. التغطية ممتازة حتى في عرض البحر.',       name:'خالد العمري', role:'مدير العمليات — شركة الشحن الوطنية' },
    { quote:'الدعم الفني 24/7 أنقذ مشروعنا في لحظة حرجة. استجابة فورية واحترافية عالية.',            name:'سارة المقطري', role:'مديرة مشاريع — منظمة إنسانية دولية' },
    { quote:'منذ أن تعاملنا مع Tech-Sat، اختفت مشاكل الاتصال تمامًا. احترافية نادرة في المنطقة.',    name:'محمد الحداد', role:'الرئيس التنفيذي — شركة طاقة' },
    { quote:'حل VSAT ساعدنا في توصيل خدماتنا لمناطق لم تصلها أي شركة اتصالات أخرى.',               name:'فاطمة ناصر', role:'مديرة تقنية — مؤسسة تعليمية' }
  ];

  /* ═══════════════════════════════════════════════════════════
     INIT
     ═══════════════════════════════════════════════════════════ */
  ready(function () {
    var D = getData() || FALLBACK;

    /* ── 02. Trust big numbers ─────────────────────────────── */
    var bigNums = document.getElementById('bigNums');
    if (bigNums) {
      var nums = (D.trustStrip && D.trustStrip.numbers) || FALLBACK.trustStrip.numbers;
      bigNums.innerHTML = nums.map(function (n) {
        return '<div class="ts-bignums__item">' +
                 '<strong>' + n.value + '</strong>' +
                 '<span>' + n.label + '</span>' +
               '</div>';
      }).join('');
    }

    /* ── 03. Pain cards ────────────────────────────────────── */
    /* ── 03. Pain rows (editorial style) ───────────────────── */
    var painRowsRoot = document.getElementById('painRows');
    if (painRowsRoot) {
      painRowsRoot.innerHTML = PAIN.map(function (p, i) {
        var num = String(i + 1).padStart(2, '0');

        return '' +
          '<article class="ts-pain-row ts-inject" style="animation-delay:' + (i * 90) + 'ms">' +

            /* Left: number + icon */
            '<div class="ts-pain-row__head">' +
              '<span class="ts-pain-row__num">' + num + '</span>' +
              '<div class="ts-pain-row__icon">' +
                '<i class="bi ' + p.icon + '"></i>' +
              '</div>' +
            '</div>' +

            /* Middle: title + description */
            '<div class="ts-pain-row__content">' +
              '<h3>' + p.title + '</h3>' +
              '<p>' + p.desc + '</p>' +
            '</div>' +

            /* Right: solution + metric */
            '<div class="ts-pain-row__solution">' +
              '<div class="ts-pain-row__metric">' +
                '<strong>' + p.metric + '</strong>' +
                '<span>' + p.metricLabel + '</span>' +
              '</div>' +
              '<div class="ts-pain-row__answer">' +
                '<span class="ts-pain-row__answer-label">' +
                  '<i class="bi bi-arrow-return-left"></i>' +
                  'الحل' +
                '</span>' +
                '<span class="ts-pain-row__answer-value">' + p.solution + '</span>' +
                '<small>' + p.layer + '</small>' +
              '</div>' +
            '</div>' +

          '</article>';
      }).join('');
    }

    /* ── 04. Solutions layers ──────────────────────────────── */
    var layersRoot = document.getElementById('solutionsLayers');
    if (layersRoot) {
      layersRoot.innerHTML = SOLUTIONS.map(function (s, i) {
        var list = (s.list || []).map(function (li) {
          return '<li>' + li + '</li>';
        }).join('');
        return '' +
          '<div class="ts-layer ts-inject" style="animation-delay:' + (i * 100) + 'ms">' +
            '<span class="ts-layer__num">' + s.num + '</span>' +
            '<i class="bi ' + s.icon + ' ts-layer__icon"></i>' +
            '<h4>' + s.title + '</h4>' +
            '<p>' + s.desc + '</p>' +
            '<ul>' + list + '</ul>' +
            '<a href="' + s.href + '" class="ts-layer__cta">' +
              'اعرف المزيد <i class="bi bi-arrow-left"></i>' +
            '</a>' +
          '</div>';
      }).join('');
    }

    /* ── 05. Why Tech-Sat ──────────────────────────────────── */
    var whyRoot = document.getElementById('whyDiffs');
    if (whyRoot) {
      whyRoot.innerHTML = WHY.map(function (w) {
        return '' +
          '<div class="ts-diff">' +
            '<div class="ts-diff__icon"><i class="bi ' + w.icon + '"></i></div>' +
            '<div>' +
              '<h5>' + w.title + '</h5>' +
              '<p>' + w.desc + '</p>' +
            '</div>' +
          '</div>';
      }).join('');
    }

    /* ── 06. Proof / Case studies ──────────────────────────── */
    /* ── 06. Proof / Case studies (shadcn card style) ──────── */
    var proofRoot = document.getElementById('proofGrid');
    if (proofRoot) {
      proofRoot.innerHTML = PROOF.map(function (p, i) {
        return '' +
          '<div class="col-md-6 col-lg-4 ts-inject" style="animation-delay:' + (i * 90) + 'ms">' +
            '<article class="ts-case-card">' +

              /* Media — image + overlay + badge + icon */
              '<div class="ts-case-card__media">' +
                '<img src="' + p.image + '" alt="' + p.tag + '" loading="lazy">' +
                '<div class="ts-case-card__overlay"></div>' +

              '</div>' +

              /* Body — title + desc + rows */
              '<div class="ts-case-card__body">' +
                '<h3 class="ts-case-card__title">' + p.tag + '</h3>' +
                '<p class="ts-case-card__desc">' + p.desc + '</p>' +

                '<div class="ts-case-card__rows">' +
                  '<div class="ts-case-card__row">' +
                    '<strong>التحدي</strong>' +
                    '<span>' + p.challenge + '</span>' +
                  '</div>' +
                  '<div class="ts-case-card__row">' +
                    '<strong>الحل</strong>' +
                    '<span>' + p.solution + '</span>' +
                  '</div>' +
                '</div>' +
              '</div>' +


              /* Footer CTA */
              '<div class="ts-case-card__footer">' +
                '<a href="' + p.href + '" class="ts-case-card__cta">' +
                  'اقرأ الحالة الكاملة' +
                  '<i class="bi bi-arrow-left"></i>' +
                '</a>' +
              '</div>' +

            '</article>' +
          '</div>';
      }).join('');
    }

    /* ── 07. Process timeline ──────────────────────────────── */
    var timelineRoot = document.getElementById('processTimeline');
    if (timelineRoot) {
      var stepsHtml = PROCESS.map(function (p, i) {
        return '' +
          '<div class="ts-step ts-inject" style="animation-delay:' + (i * 100) + 'ms">' +
            '<div class="ts-step__circle">' +
              '<i class="bi ' + p.icon + '"></i>' +
              '<span class="ts-step__num">' + (i + 1) + '</span>' +
            '</div>' +
            '<h4>' + p.title + '</h4>' +
            '<p>' + p.desc + '</p>' +
          '</div>';
      }).join('');

      /* Inject steps + progress line overlay */
      timelineRoot.innerHTML =
        stepsHtml +
        '<div class="ts-timeline__progress" aria-hidden="true"></div>';

      /* Trigger animation when timeline scrolls into view */
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-animating');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.35 });

        io.observe(timelineRoot);
      } else {
        /* Fallback: run immediately */
        timelineRoot.classList.add('is-animating');
      }
    }

    /* ── 08. Coverage map pins ─────────────────────────────── */
    var pinsRoot = document.getElementById('mapPins');
    if (pinsRoot) {
      pinsRoot.innerHTML = PINS.map(function (p) {
        return '' +
          '<div class="ts-pin' + (p.hq ? ' ts-pin--hq' : '') + '" ' +
               'style="top:' + p.top + ';left:' + p.left + ';">' +
            '<div class="ts-pin__dot"></div>' +
            '<div class="ts-pin__label">' + p.label + '</div>' +
          '</div>';
      }).join('');
    }

    /* ── 09. Markets tabs ──────────────────────────────────── */
    var navRoot = document.getElementById('marketsNav');
    var panelsRoot = document.getElementById('marketsPanels');
    var verticals = (D.verticals && D.verticals.length) ? D.verticals : FALLBACK.verticals;

    if (navRoot && panelsRoot && verticals.length) {
      // Nav buttons
      navRoot.innerHTML = verticals.map(function (v, i) {
        return '' +
          '<button type="button" ' +
                  'class="ts-tab-btn' + (i === 0 ? ' is-active' : '') + '" ' +
                  'data-tab="' + v.id + '" ' +
                  'role="tab" ' +
                  'aria-selected="' + (i === 0) + '">' +
            '<i class="bi ' + v.icon + '"></i>' +
            '<span>' + v.title + '</span>' +
          '</button>';
      }).join('');

      // Panels
      panelsRoot.innerHTML = verticals.map(function (v, i) {
        var sols = (v.solutions || []).map(function (s) {
          return '<li>' + s + '</li>';
        }).join('');

        return '' +
          '<div class="ts-market-panel' + (i === 0 ? ' is-active' : '') + '" ' +
               'data-panel="' + v.id + '" ' +
               'role="tabpanel">' +
            '<div>' +
              '<div class="ts-market-panel__icon"><i class="bi ' + v.icon + '"></i></div>' +
              '<h3>' + v.title + '</h3>' +
              '<span class="ts-market-panel__promise">' + (v.promise || '') + '</span>' +
              '<p class="ts-market-panel__desc">' +
                (v.description || 'حلول مخصصة لهذا القطاع مع التزام كامل بالموثوقية والأمان.') +
              '</p>' +
              (sols ? '<ul class="ts-market-panel__solutions">' + sols + '</ul>' : '') +
              '<a href="markets.html#' + v.id + '" class="btn-primary">' +
                '<i class="bi bi-arrow-left"></i>' +
                '<span>استكشف حلول ' + v.title + '</span>' +
              '</a>' +
            '</div>' +
            '<div class="ts-market-panel__visual">' +
              '<img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" ' +
                   'alt="' + v.title + '" loading="lazy">' +
            '</div>' +
          '</div>';
      }).join('');

      // Wire tab clicks
      navRoot.addEventListener('click', function (e) {
        var btn = e.target.closest('.ts-tab-btn');
        if (!btn) return;
        var tabId = btn.getAttribute('data-tab');

        navRoot.querySelectorAll('.ts-tab-btn').forEach(function (b) {
          b.classList.toggle('is-active', b === btn);
          b.setAttribute('aria-selected', b === btn);
        });
        panelsRoot.querySelectorAll('.ts-market-panel').forEach(function (p) {
          p.classList.toggle('is-active', p.getAttribute('data-panel') === tabId);
        });
      });
    }

    /* ── 11. Testimonials ──────────────────────────────────── */
    var testiRoot = document.getElementById('testimonialsWrapper');
    if (testiRoot) {
      testiRoot.innerHTML = TESTIMONIALS.map(function (t) {
        return '' +
          '<div class="swiper-slide">' +
            '<div class="testimonial-item">' +
              '<p>' +
                '<i class="bi bi-quote quote-icon-left"></i>' +
                '<span>' + t.quote + '</span>' +
                '<i class="bi bi-quote quote-icon-right"></i>' +
              '</p>' +
              '<h3>' + t.name + '</h3>' +
              '<h4>' + t.role + '</h4>' +
            '</div>' +
          '</div>';
      }).join('');
    }

    /* ── 12. FAQ ───────────────────────────────────────────── */
    var faqRoot = document.getElementById('faqGrid');
    if (faqRoot) {
      faqRoot.innerHTML = FAQ.map(function (f, i) {
        return '' +
          '<details class="ts-faq" ' + (i === 0 ? 'open' : '') + '>' +
            '<summary>' + f.q + '</summary>' +
            '<div class="ts-faq__content">' + f.a + '</div>' +
          '</details>';
      }).join('');
    }

    /* ═══════════════════════════════════════════════════════
       POST-POPULATE INIT
       ═══════════════════════════════════════════════════════ */

    if (window.AOS && typeof AOS.init === 'function') {
      AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });
    }

    if (window.PureCounter && typeof PureCounter === 'function') {
      try { new PureCounter(); } catch (e) {}
    }

    if (window.Swiper && testiRoot) {
      var swiperEl = testiRoot.closest('.swiper');
      if (swiperEl && !swiperEl.swiper) {
        new Swiper(swiperEl, {
          loop: true,
          speed: 600,
          autoplay: { delay: 6000, disableOnInteraction: false },
          pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
          breakpoints: {
            320:  { slidesPerView: 1, spaceBetween: 20 },
            768:  { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 }
          }
        });
      }
    }

    console.log('[home] ready — 13 sections populated');
  });

})();