export function initScroll() {
  if (!document.querySelector('.ts-scroll-top')) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'ts-scroll-top';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(btn);

    function toggleBtn() {
      btn.classList.toggle('show', window.scrollY > 400);
    }

    window.addEventListener('scroll', toggleBtn, { passive: true });
    toggleBtn();

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const navbar = document.getElementById('mainNav');
  if (navbar) {
    navbar.classList.add('fixed-top');
    function updateNavbar() {
      navbar.classList.toggle('is-scrolled', window.scrollY > 0);
    }
    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();
  }
}