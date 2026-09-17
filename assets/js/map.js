/* ═══════════════════════════════════════════════════════════
   WORLD MAP (Leaflet) — Tech-Sat Regional Network
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  var mapEl = document.getElementById('map');
  if (!mapEl) return;
  if (typeof L === 'undefined') { console.warn('[map] Leaflet not loaded'); return; }

  /* ═══ LOCATIONS ═══ */
  var LOCATIONS = [
    { id: 'france', type: 'hq', lat: 49.0389, lng: 2.0781,
      country: { ar: 'فرنسا', en: 'France' },
      name: { ar: 'IEC Telecom Europe — المقر الرئيسي', en: 'IEC Telecom Europe — Global HQ' },
      address: { ar: 'Immeuble Le Cerame, 47 Avenue des Genottes<br>Cergy Pontoise, France', en: 'Immeuble Le Cerame, 47 Avenue des Genottes<br>Cergy Pontoise, France' },
      phone: '+33 1 40 17 08 03', email: 'info-ea@iec-telecom.com' },

    { id: 'turkey', type: 'branch', lat: 40.8765, lng: 29.2315,
      country: { ar: 'تركيا', en: 'Turkey' },
      name: { ar: 'IEC Telecom Turkey — فرعنا الرئيسي', en: 'IEC Telecom Turkey — Our Main Branch' },
      address: { ar: 'Yenişehir mah. Osmanlı Bulvarı No:5B<br>ARWEN Office K3/D29, 34912 Pendik — Istanbul', en: 'Yenişehir mah. Osmanlı Bulvarı No:5B<br>ARWEN Office K3/D29, 34912 Pendik — Istanbul' },
      phone: '+90 216 970 16 08', email: 'info-tk@iec-telecom.com' },

    { id: 'yemen', type: 'ourhq', lat: 12.7855, lng: 45.0187,
      country: { ar: 'اليمن', en: 'Yemen' },
      name: { ar: 'Tech-Sat — عدن', en: 'Tech-Sat — Aden' },
      address: { ar: 'المقر الإقليمي لعملياتنا<br>عدن، اليمن', en: 'Regional Operations HQ<br>Aden, Yemen' },
      phone: '+967 2 396 056', email: 'info@tech-sat.com' },

    { id: 'uae-dubai', type: 'hub', lat: 25.0657, lng: 55.1713,
      country: { ar: 'الإمارات', en: 'UAE' },
      name: { ar: 'IEC Telecom — دبي', en: 'IEC Telecom — Dubai' },
      address: { ar: 'Office #3203-3204, Indigo Icon Tower, JLT<br>PO BOX 5569, Dubai, UAE', en: 'Office #3203-3204, Indigo Icon Tower, JLT<br>PO BOX 5569, Dubai, UAE' },
      phone: '+971 4 447 5180', email: 'info-mea@iec-telecom.com' },

    { id: 'uae-abudhabi', type: 'hub', lat: 24.4512, lng: 54.3970,
      country: { ar: 'الإمارات', en: 'UAE' },
      name: { ar: 'IEC Telecom — أبوظبي', en: 'IEC Telecom — Abu Dhabi' },
      address: { ar: 'Office F10-F11, AFHAD building, Musaffah<br>ICAD1, PO BOX 9724, Abu Dhabi, UAE', en: 'Office F10-F11, AFHAD building, Musaffah<br>ICAD1, PO BOX 9724, Abu Dhabi, UAE' },
      phone: '+971 2 550 0446', email: 'info-mea@iec-telecom.com' },

    { id: 'kazakhstan', type: 'hub', lat: 43.2389, lng: 76.8897,
      country: { ar: 'كازاخستان', en: 'Kazakhstan' },
      name: { ar: 'IEC Telecom — كازاخستان', en: 'IEC Telecom — Kazakhstan' },
      address: { ar: 'Almaty, 43/56 Karibzhanov Str<br>Kazakhstan', en: 'Almaty, 43/56 Karibzhanov Str<br>Kazakhstan' },
      phone: '+7 727 347 08 56', email: 'info-kz@iec-telecom.com' },

    { id: 'norway', type: 'hub', lat: 59.9133, lng: 10.7389,
      country: { ar: 'النرويج', en: 'Norway' },
      name: { ar: 'IEC Telecom — النرويج', en: 'IEC Telecom — Norway' },
      address: { ar: 'Østensjøveien 32, 0667 Oslo<br>Norway', en: 'Østensjøveien 32, 0667 Oslo<br>Norway' },
      phone: '+47 23 10 06 40', email: 'info-no@iec-telecom.com' },

    { id: 'singapore', type: 'hub', lat: 1.2897, lng: 103.8501,
      country: { ar: 'سنغافورة', en: 'Singapore' },
      name: { ar: 'IEC Telecom — سنغافورة', en: 'IEC Telecom — Singapore' },
      address: { ar: '61 Ubi Avenue 1, #06-14 UB Point, 408941<br>Singapore', en: '61 Ubi Avenue 1, #06-14 UB Point, 408941<br>Singapore' },
      phone: '+65 6744 7925', email: 'info-sg@iec-telecom.com' },

    { id: 'sweden', type: 'hub', lat: 57.7089, lng: 11.9746,
      country: { ar: 'السويد', en: 'Sweden' },
      name: { ar: 'IEC Telecom — السويد', en: 'IEC Telecom — Sweden' },
      address: { ar: 'Fikskebäks Hamn, Göteborg<br>Sweden', en: 'Fikskebäks Hamn, Göteborg<br>Sweden' },
      phone: '+46 10 33 00 533', email: 'info-se@iec-telecom.com' },

    { id: 'indonesia', type: 'hub', lat: -6.2088, lng: 106.8456,
      country: { ar: 'إندونيسيا', en: 'Indonesia' },
      name: { ar: 'IEC Telecom — إندونيسيا', en: 'IEC Telecom — Indonesia' },
      address: { ar: 'Jakarta<br>Indonesia', en: 'Jakarta<br>Indonesia' },
      phone: '+62 815 9599 350', email: 'info-id@iec-telecom.com' },

    { id: 'malaysia', type: 'hub', lat: 2.9225, lng: 101.6532,
      country: { ar: 'ماليزيا', en: 'Malaysia' },
      name: { ar: 'IEC Telecom — ماليزيا', en: 'IEC Telecom — Malaysia' },
      address: { ar: 'C-5-9, ITech Tower, Jalan Impact, 63000<br>Cyberjaya, Malaysia', en: 'C-5-9, ITech Tower, Jalan Impact, 63000<br>Cyberjaya, Malaysia' },
      phone: '+60 38 699 1599', email: 'info-my@iec-telecom.com' },

    { id: 'tunisia', type: 'hub', lat: 35.8256, lng: 10.6084,
      country: { ar: 'تونس', en: 'Tunisia' },
      name: { ar: 'IEC Telecom — تونس', en: 'IEC Telecom — Tunisia' },
      address: { ar: '203, Bat6000 Novation City<br>Hammam Maarouf, Sousse', en: '203, Bat6000 Novation City<br>Hammam Maarouf, Sousse' },
      phone: '+216 54 767 881', email: 'info-sousse@iec-telecom.com' }
  ];

  function getLang() {
    return document.documentElement.getAttribute('lang') || localStorage.getItem('ts-lang') || 'ar';
  }
  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || localStorage.getItem('ts-theme') || 'light';
  }

  /* ═══ INIT MAP ═══ */
  var map = L.map('map', {
    center: [28, 40],
    zoom: 3,
    minZoom: 2,
    maxZoom: 10,
    zoomControl: true,
    attributionControl: true,
    worldCopyJump: true,
    scrollWheelZoom: false
  });

  /* ═══ TILES ═══ */
  var lightTiles = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 16, attribution: 'Tiles &copy; Esri' }
  );
  var darkTiles = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 16, attribution: 'Tiles &copy; Esri' }
  );
  var labelsTiles = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 16, opacity: 0.7 }
  );

  function applyThemeTiles() {
    if (getTheme() === 'dark') {
      if (map.hasLayer(lightTiles)) map.removeLayer(lightTiles);
      if (!map.hasLayer(darkTiles)) darkTiles.addTo(map);
      labelsTiles.setOpacity(0.5);
      mapEl.style.background = '#0a1225';
    } else {
      if (map.hasLayer(darkTiles)) map.removeLayer(darkTiles);
      if (!map.hasLayer(lightTiles)) lightTiles.addTo(map);
      labelsTiles.setOpacity(0.85);
      mapEl.style.background = '#e8eef5';
    }
    labelsTiles.bringToFront();
  }

  /* ═══ MARKERS ═══ */
  var markers = [];

  function buildMarkerClass(type) {
    if (type === 'hq') return 'custom-marker--hq';
    if (type === 'branch') return 'custom-marker--branch';
    if (type === 'ourhq') return 'custom-marker--ourhq';
    return 'custom-marker--hub';
  }

  function buildPopup(loc, lang) {
    var badge = '';
    if (loc.type === 'hq') {
      badge = '<span class="map-popup__badge map-popup__badge--hq">' +
        (lang === 'ar' ? '★ المقر الرئيسي العالمي' : '★ Global HQ') + '</span>';
    } else if (loc.type === 'branch') {
      badge = '<span class="map-popup__badge map-popup__badge--branch">' +
        (lang === 'ar' ? 'فرعنا الرئيسي — يخدم اليمن' : 'Our Main Branch — Serves Yemen') + '</span>';
    } else if (loc.type === 'ourhq') {
      badge = '<span class="map-popup__badge map-popup__badge--ourhq">' +
        (lang === 'ar' ? 'مقرنا الإقليمي' : 'Our Regional HQ') + '</span>';
    }

    return '' +
      '<span class="map-popup__country">' + loc.country[lang] + '</span>' +
      '<div class="map-popup__title">' + loc.name[lang] + '</div>' +
      '<div class="map-popup__desc">' +
        loc.address[lang] +
        '<br><a href="tel:' + loc.phone.replace(/\s/g, '') + '">' + loc.phone + '</a>' +
        '<br><a href="mailto:' + loc.email + '">' + loc.email + '</a>' +
      '</div>' + badge;
  }

  function createMarkers(lang) {
    markers.forEach(function (m) { map.removeLayer(m); });
    markers = [];

    LOCATIONS.forEach(function (loc) {
      var icon = L.divIcon({
        className: '',
        html: '<div class="custom-marker ' + buildMarkerClass(loc.type) + '">' +
                '<span class="custom-marker__ring"></span>' +
                '<span class="custom-marker__dot"></span>' +
              '</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
        popupAnchor: [0, -12]
      });

      var marker = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(map);
      marker.bindPopup(buildPopup(loc, lang));
      markers.push(marker);
    });
  }

  /* ═══ SUPPLY LINE: Turkey → Yemen ═══ */
  var turkey = LOCATIONS.find(function (l) { return l.id === 'turkey'; });
  var yemen  = LOCATIONS.find(function (l) { return l.id === 'yemen'; });
  var france = LOCATIONS.find(function (l) { return l.id === 'france'; });

  var supplyLine = null;

  function makeTooltipText(lang) {
    return lang === 'ar'
      ? '◄ خط الإمداد الرئيسي لليمن'
      : '► Main Supply Line to Yemen';
  }

  if (turkey && yemen) {
    supplyLine = L.polyline(
      [[turkey.lat, turkey.lng], [yemen.lat, yemen.lng]],
      { color: '#FFA500', weight: 2.5, dashArray: '8 10', opacity: 0.9 }
    ).addTo(map);

    supplyLine.bindTooltip(makeTooltipText(getLang()), {
      permanent: true,
      direction: 'right',
      className: 'supply-line-tooltip',
      offset: [10, 0]
    });

    L.circle([yemen.lat, yemen.lng], {
      radius: 400000,
      color: '#00b4d8', weight: 1.5, opacity: 0.7,
      fillColor: '#00b4d8', fillOpacity: 0.08, dashArray: '4 6'
    }).addTo(map);
  }

  if (france && turkey) {
    L.polyline(
      [[france.lat, france.lng], [turkey.lat, turkey.lng]],
      { color: '#3A6EA5', weight: 1.5, dashArray: '4 6', opacity: 0.5 }
    ).addTo(map);
  }

  /* ═══ INITIAL RENDER ═══ */
  var currentLang = getLang();
  applyThemeTiles();
  createMarkers(currentLang);

  /* ═══ WATCHERS ═══ */
  new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.attributeName === 'lang') {
        var next = document.documentElement.getAttribute('lang');
        if (next && next !== currentLang) {
          currentLang = next;
          createMarkers(currentLang);
          if (supplyLine) {
            supplyLine.unbindTooltip();
            supplyLine.bindTooltip(makeTooltipText(currentLang), {
              permanent: true, direction: 'right',
              className: 'supply-line-tooltip', offset: [10, 0]
            });
          }
        }
      }
    });
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.attributeName === 'data-theme') applyThemeTiles();
    });
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

  /* ═══ INTERACTIONS ═══ */
  map.on('focus', function () { map.scrollWheelZoom.enable(); });
  map.on('blur',  function () { map.scrollWheelZoom.disable(); });

  window.addEventListener('load', function () {
    setTimeout(function () { map.invalidateSize(); }, 300);
  });
  window.addEventListener('resize', function () {
    setTimeout(function () { map.invalidateSize(); }, 150);
  });

})();