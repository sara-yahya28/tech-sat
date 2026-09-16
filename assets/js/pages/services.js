/* ═══════════════════════════════════════════════════════════
   SERVICES PAGE — Filter Tabs
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var tabs = document.querySelectorAll('.filter-tab');
  var items = document.querySelectorAll('.service-item');
  var noResults = document.getElementById('noResults');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      var filter = tab.dataset.filter;
      var visibleCount = 0;

      items.forEach(function (item) {
        var match = (filter === 'all') || (item.dataset.category === filter);
        item.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      if (noResults) noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
      if (window.AOS) window.AOS.refresh();
    });
  });
})();