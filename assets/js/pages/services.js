/* =========================================================
   SERVICES PAGE — Filter Tabs
   ========================================================= */

export function initServicesPage() {
  const tabs = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.service-item');
  const noResults = document.getElementById('noResults');

  if (!items.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      let visibleCount = 0;

      items.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        if (match) {
          item.style.display = '';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (noResults) {
        noResults.style.display = visibleCount === 0 ? 'block' : 'none';
      }
      if (window.AOS) window.AOS.refresh();
    });
  });
}

document.addEventListener('layoutReady', initServicesPage);

/* Fallback */
if (window.__chromeReady) {
  initServicesPage();
}