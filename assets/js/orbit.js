/* ═══════════════════════════════════════════════════════════
   TECH-SAT — Orbits Hero (v2)
   Data-driven from DATA.verticals — with fallback
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var RADII      = { 1: 28, 2: 38, 3: 47 };
  var OVAL_RATIO = 0.64;
  var HINT       = 'مرّر فوق القطاعات لاستكشاف الحلول';

  /* ── Fallback nodes if DATA.verticals is missing ────── */
  var FALLBACK = [
    { id: 'sat',       title: 'أقمار صناعية', icon: 'bi-globe-americas',    promise: 'مدار GEO / LEO' },
    { id: 'vsat',      title: 'محطة VSAT',    icon: 'bi-broadcast-pin',     promise: 'محطة أرضية' },
    { id: 'maritime',  title: 'البحري',       icon: 'bi-water',             promise: 'أساطيل وموانئ' },
    { id: 'gov',       title: 'الحكومة',      icon: 'bi-bank',              promise: 'عمليات سيادية' },
    { id: 'energy',    title: 'الطاقة',       icon: 'bi-lightning-charge',  promise: 'حقول النفط والغاز' },
    { id: 'media',     title: 'الإعلام',      icon: 'bi-camera-video',      promise: 'بث حي' },
    { id: 'corp',      title: 'المؤسسات',     icon: 'bi-buildings',         promise: 'بنوك ومقرات' }
  ];

  function ready(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  ready(function () {
    var container = document.getElementById('orbitsContainer');
    var nodesWrap = document.getElementById('orbitsNodes');
    var telemetry = document.getElementById('orbitsTelemetry');

    if (!container || !nodesWrap) return;

    /* ── Choose data source ─────────────────────────────── */
    var source = (window.DATA && Array.isArray(DATA.verticals) && DATA.verticals.length)
      ? DATA.verticals.slice(0, 7)
      : FALLBACK;

    /* ── Build DOM nodes ────────────────────────────────── */
    var orbitPattern = [3, 1, 2, 3, 1, 2, 3];
    var angleStep    = 360 / source.length;

    var html = source.map(function (v, i) {
      var orbit = orbitPattern[i % orbitPattern.length];
      var angle = Math.round(i * angleStep + 15);
      var icon  = v.icon  || 'bi-circle';
      var name  = v.title || v.name || 'قطاع';
      var cat   = v.promise || (v.description ? v.description.slice(0, 40) : '');

      return (
        '<div class="oh-node" data-id="' + (v.id || 'n' + i) + '"' +
             ' data-orbit="' + orbit + '"' +
             ' data-angle="' + angle + '"' +
             ' data-name="' + name + '"' +
             ' data-cat="' + cat + '">' +
          '<div class="oh-node__img">' +
            '<span class="oh-node__icon"><i class="bi ' + icon + '"></i></span>' +
          '</div>' +
          '<span class="oh-node__label">' + name + '</span>' +
        '</div>'
      );
    }).join('');

    nodesWrap.innerHTML = html;

    /* ── Collect node refs ──────────────────────────────── */
    var nodes = [].slice.call(nodesWrap.querySelectorAll('.oh-node'));
    if (!nodes.length) return;

    var data = nodes.map(function (el) {
      return {
        el:    el,
        id:    el.dataset.id,
        orbit: parseInt(el.dataset.orbit, 10),
        angle: parseFloat(el.dataset.angle),
        name:  el.dataset.name,
        cat:   el.dataset.cat
      };
    });

    var rotation = 0;
    var hovered  = false;
    var activeId = null;
    var lastTime = performance.now();

    var reduceMotion = window.matchMedia &&
                       window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Active state ───────────────────────────────────── */
    function setActive(id) {
      activeId = id;
      data.forEach(function (n) {
        n.el.classList.toggle('is-active', n.id === id);
      });

      if (!telemetry) return;

      if (id) {
        var node = null;
        for (var i = 0; i < data.length; i++) {
          if (data[i].id === id) { node = data[i]; break; }
        }
        if (!node) return;

        telemetry.innerHTML =
          '<div class="oh-telemetry__active">' +
            '<span class="dot-accent"></span>' +
            '<span>' + node.name + '</span>' +
            '<span class="dot-sep">•</span>' +
            '<span class="cat">' + node.cat + '</span>' +
          '</div>';
      } else {
        telemetry.innerHTML = '<span class="oh-telemetry__hint">' + HINT + '</span>';
      }
    }

    /* ── Wire events ────────────────────────────────────── */
    data.forEach(function (n) {
      n.el.addEventListener('mouseenter', function () { setActive(n.id); });
      n.el.addEventListener('mouseleave', function () { setActive(null); });
      n.el.addEventListener('click', function () {
        setActive(activeId === n.id ? null : n.id);
      });
    });

    /* ── Position nodes on ellipses ─────────────────────── */
    function updatePositions() {
      data.forEach(function (n) {
        var rad = ((n.angle + rotation) * Math.PI) / 180;
        var r   = RADII[n.orbit] || 38;
        var rx  = r;
        var ry  = r * OVAL_RATIO;

        n.el.style.left = (50 + rx * Math.cos(rad)) + '%';
        n.el.style.top  = (50 + ry * Math.sin(rad)) + '%';
      });
    }

    /* ── Animation loop ─────────────────────────────────── */
    function animate(now) {
      var delta = now - lastTime;
      lastTime = now;
      var speed = hovered ? 0.008 : 0.018;
      rotation = (rotation + delta * speed) % 360;
      updatePositions();
      requestAnimationFrame(animate);
    }

    container.addEventListener('mouseenter', function () { hovered = true; });
    container.addEventListener('mouseleave', function () {
      hovered = false;
      setActive(null);
    });

    /* ── Init ───────────────────────────────────────────── */
    updatePositions();
    setActive(null);
    if (!reduceMotion) requestAnimationFrame(animate);
  });

})();