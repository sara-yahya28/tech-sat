/*WORLD MAP (Leaflet) — Only runs if #map exists*/
(function () {
  "use strict";

  var mapEl = document.getElementById('map');
  if (!mapEl) return;
  if (typeof L === 'undefined') return;

  var LOCATIONS = [
    { id: 'france', name: 'فرنسا — سيرجي بونتوز (المقر الرئيسي)', desc: 'IEC Telecom Europe (HQ)<br>Immeuble Le Cerame, 47 Avenue des Genottes<br>Cergy Pontoise, France<br>+33 1 40 17 08 03<br>info-ea@iec-telecom.com', lat: 49.0389, lng: 2.0781, type: 'hq' },
    { id: 'turkey', name: 'تركيا — إسطنبول (فرعنا الرئيسي)', desc: 'IEC Telecom Turkey<br>Yenişehir mah. Osmanlı Bulvarı No:5B<br>ARWEN Office K3/D29, 34912 Pendik – Istanbul<br>+90 216 970 16 08<br>info-tk@iec-telecom.com', lat: 40.8765, lng: 29.2315, type: 'branch' },
    { id: 'yemen', name: 'اليمن — عدن', desc: 'Tech-Sat (Regional Operations)<br>Aden, Yemen<br>+967 2 396 056<br>info@tech-sat.com', lat: 12.7855, lng: 45.0187, type: 'hub' },
    { id: 'uae-dubai', name: 'الإمارات — دبي', desc: 'IEC Telecom UAE - DUBAI<br>Office #3203-3204, Indigo Icon Tower, JLT<br>PO BOX 5569, Dubai, UAE<br>+971 4 447 5180<br>info-mea@iec-telecom.com', lat: 25.0657, lng: 55.1713, type: 'hub' },
    { id: 'uae-abudhabi', name: 'الإمارات — أبوظبي', desc: 'IEC Telecom UAE - ABU DHABI<br>Office F10 - F11, AFHAD building, Musaffah<br>Industrial Area, ICAD1, PO BOX 9724<br>Abu Dhabi, UAE<br>+971 2 550 0446<br>info-mea@iec-telecom.com', lat: 24.4512, lng: 54.3970, type: 'hub' },
    { id: 'kazakhstan', name: 'كازاخستان — ألماتي', desc: 'IEC TELECOM KAZAKHSTAN<br>Almaty, 43/56 Karibzhanov Str<br>Kazakhstan<br>+7 727 347 08 56<br>info-kz@iec-telecom.com', lat: 43.2389, lng: 76.8897, type: 'hub' },
    { id: 'norway', name: 'النرويج — أوسلو', desc: 'IEC TELECOM NORWAY<br>Østensjøveien 32, 0667 Oslo<br>Norway<br>+47 23 10 06 40<br>info-no@iec-telecom.com', lat: 59.9133, lng: 10.7389, type: 'hub' },
    { id: 'singapore', name: 'سنغافورة', desc: 'IEC TELECOM SINGAPORE<br>61 Ubi Avenue 1, #06-14 UB Point, 408941<br>Singapore<br>+65 6744 7925<br>info-sg@iec-telecom.com', lat: 1.2897, lng: 103.8501, type: 'hub' },
    { id: 'sweden', name: 'السويد — غوتنبرغ', desc: 'IEC TELECOM SWEDEN<br>Fikskebäks Hamn, Göteborg<br>Sweden<br>+46 10 33 00 533<br>info-se@iec-telecom.com', lat: 57.7089, lng: 11.9746, type: 'hub' },
    { id: 'indonesia', name: 'إندونيسيا — جاكرتا', desc: 'IEC TELECOM INDONESIA<br>Jakarta, Indonesia<br>+62-815-9599-350<br>info-id@iec-telecom.com', lat: -6.2088, lng: 106.8456, type: 'hub' },
    { id: 'malaysia', name: 'ماليزيا — سيبرجايا', desc: 'IEC Telecom Malaysia<br>C-5-9, ITech Tower Jalan Impact, 63000<br>Cyberjaya, Malaysia<br>+60 38 699 1599<br>info-my@iec-telecom.com', lat: 2.9225, lng: 101.6532, type: 'hub' },
    { id: 'tunisia', name: 'تونس — سوسة', desc: 'IEC Telecom Tunisia (Surustech)<br>203, Bat6000 Novation City<br>Hammam Maarouf, Sousse, Tunisia<br>+216 54 767 881<br>info-sousse@iec-telecom.com', lat: 35.8256, lng: 10.6084, type: 'hub' }
  ];

  var map = L.map('map', {
    center: [25, 40],
    zoom: 2,
    zoomControl: true,
    attributionControl: true,
    worldCopyJump: true,
    scrollWheelZoom: false
  });

  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 16, attribution: 'Tiles &copy; Esri' }
  ).addTo(map);

  L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
    { maxZoom: 16, opacity: 0.7 }
  ).addTo(map);

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
    if (loc.type === 'hq') badge = '<div class="map-popup__badge">★ المقر الرئيسي العالمي</div>';
    if (loc.type === 'branch') badge = '<div class="map-popup__badge" style="background:#FFA500; color:#0B1D33;">فرعنا الرئيسي — يخدم اليمن</div>';

    marker.bindPopup(
      '<div class="map-popup__title">' + loc.name + '</div>' +
      '<div class="map-popup__desc">' + loc.desc + '</div>' +
      badge
    );
  });

  var turkey = LOCATIONS.find(function (l) { return l.id === 'turkey'; });
  var yemen = LOCATIONS.find(function (l) { return l.id === 'yemen'; });
  if (turkey && yemen) {
    L.polyline(
      [[turkey.lat, turkey.lng], [yemen.lat, yemen.lng]],
      { color: '#FFA500', weight: 2.5, dashArray: '6 8', opacity: 0.9 }
    ).addTo(map);
  }

  var france = LOCATIONS.find(function (l) { return l.id === 'france'; });
  if (france && turkey) {
    L.polyline(
      [[france.lat, france.lng], [turkey.lat, turkey.lng]],
      { color: '#3A6EA5', weight: 1.5, dashArray: '4 6', opacity: 0.5 }
    ).addTo(map);
  }

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

  map.on('focus', function () { map.scrollWheelZoom.enable(); });
  map.on('blur', function () { map.scrollWheelZoom.disable(); });

  window.addEventListener('load', function () {
    setTimeout(function () { map.invalidateSize(); }, 200);
  });
  window.addEventListener('resize', function () {
    setTimeout(function () { map.invalidateSize(); }, 150);
  });
})();