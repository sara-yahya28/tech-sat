/* =========================================================
   PRODUCTS PAGE — Search + Filter
   ========================================================= */

export function initProductsPage() {
  const searchInput = document.getElementById('productSearchInput');
  const clearBtn = document.getElementById('clearProductSearch');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productItems = document.querySelectorAll('.product-item');
  const noResults = document.getElementById('noProductsFound');
  let currentFilter = 'all';

  if (!productItems.length) return;

  function filterProducts() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    let visibleCount = 0;

    productItems.forEach(item => {
      const category = item.getAttribute('data-category');
      const text = item.textContent.toLowerCase();
      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = !query || text.indexOf(query) !== -1;

      if (matchesFilter && matchesSearch) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
    if (noResults) noResults.style.display = visibleCount === 0 ? 'block' : 'none';

    if (window.AOS) window.AOS.refresh();
  }

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.getAttribute('data-filter');
      filterProducts();
    });
  });

  if (searchInput) searchInput.addEventListener('input', filterProducts);

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      filterProducts();
      searchInput.focus();
    });
  }
}

document.addEventListener('layoutReady', initProductsPage);

/* Fallback */
if (window.__chromeReady) {
  initProductsPage();
}