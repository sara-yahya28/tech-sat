export function initAOS() {
  if (!window.AOS) return;
  window.AOS.init({ duration: 700, once: true, offset: 80 });
}

document.addEventListener('layoutReady', initAOS);
window.addEventListener('load', initAOS);