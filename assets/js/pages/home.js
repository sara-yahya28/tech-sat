/* =========================================================
   HOME PAGE
   ========================================================= */

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  function runCounters() {
    counters.forEach(c => {
      const target = +c.dataset.target;
      let current = 0;
      const step = target / 60;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        c.textContent = Math.floor(current).toLocaleString();
      }, 20);
    });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          runCounters();
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(counters[0]);
  } else {
    runCounters();
  }
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    if (status) {
      status.innerHTML =
        '<div style="color:#A80A3F;font-weight:600;padding:.75rem;background:rgba(194,24,91,.08);border-radius:10px;">Thank you. We will contact you shortly.</div>';
    }
    form.reset();
  });
}

function initMiniMap() {
  const el = document.getElementById('miniMap');
  if (!el || !window.L) return;
  if (el._leaflet_id) return;

  const hqLat = 12.7855;
  const hqLng = 45.0187;

  const map = L.map(el, {
    center: [hqLat, hqLng],
    zoom: 11,
    zoomControl: false,
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
    touchZoom: false,
    boxZoom: false,
    keyboard: false,
    attributionControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap',
    maxZoom: 18
  }).addTo(map);

  const icon = L.divIcon({
    className: '',
    html:
      '<div class="custom-marker custom-marker--ourhq">' +
      '<span class="custom-marker__ring"></span>' +
      '<span class="custom-marker__dot"></span>' +
      '</div>',
    iconSize: [24, 24],
    iconAnchor: [12, 12]
  });

  L.marker([hqLat, hqLng], { icon })
    .addTo(map)
    .bindPopup('<strong>Tech-Sat HQ</strong><br>Aden, Yemen');
}

function initHomePage() {
  initCounters();
  initContactForm();
  initMiniMap();
}

document.addEventListener('layoutReady', initHomePage);

/* Fallback: if layoutReady already fired before this module loaded */
if (window.__chromeReady) {
  initHomePage();
}