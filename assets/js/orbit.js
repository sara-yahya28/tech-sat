/*  
   ORBITS HERO — reads hardcoded .oh-node elements
     */
(function () {
  'use strict';

  var RADII = { 1: 28, 2: 38, 3: 47 };
  var HINT  = 'Hover over the orbit nodes to explore sectors';

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

    if (!container || !nodesWrap) {
      console.warn('[orbits] missing container or nodes wrapper');
      return;
    }

    var nodes = [].slice.call(nodesWrap.querySelectorAll('.oh-node'));
    if (!nodes.length) {
      console.warn('[orbits] no .oh-node elements found');
      return;
    }

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
            '<span class="dot-gold"></span>' +
            '<span>' + node.name + '</span>' +
            '<span class="dot-sep">•</span>' +
            '<span class="cat">' + node.cat + '</span>' +
          '</div>';
      } else {
        telemetry.innerHTML = '<span class="oh-telemetry__hint">' + HINT + '</span>';
      }
    }

    data.forEach(function (n) {
      n.el.addEventListener('mouseenter', function () { setActive(n.id); });
      n.el.addEventListener('mouseleave', function () { setActive(null); });
      n.el.addEventListener('click', function () {
        setActive(activeId === n.id ? null : n.id);
      });
    });

function updatePositions() {
  var OVAL_RATIO = 0.64;   // ← نفس النسبة المستخدمة في SVG (150/235 ≈ 0.64)

  data.forEach(function (n) {
    var rad = ((n.angle + rotation) * Math.PI) / 180;
    var r   = RADII[n.orbit] || 38;
    var rx  = r;                    // نصف القطر الأفقي
    var ry  = r * OVAL_RATIO;        // نصف القطر العمودي (بيضاوي)

    n.el.style.left = (50 + rx * Math.cos(rad)) + '%';
    n.el.style.top  = (50 + ry * Math.sin(rad)) + '%';
  });
}

    function animate(now) {
      var delta = now - lastTime;
      lastTime = now;
      var speed = hovered ? 0.008 : 0.02;
      rotation = (rotation + delta * speed) % 360;
      updatePositions();
      requestAnimationFrame(animate);
    }

    container.addEventListener('mouseenter', function () { hovered = true; });
    container.addEventListener('mouseleave', function () {
      hovered = false;
      setActive(null);
    });

    updatePositions();
    if (!reduceMotion) requestAnimationFrame(animate);

    console.log('[orbits] ready — ' + data.length + ' nodes');
  });
})();