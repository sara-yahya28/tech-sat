
/* =========================================================
   CONTACT PAGE
   ========================================================= */

import { initWorldMap } from '../map.js';

export function initContactPage() {
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var sendBtn = document.getElementById('sendBtn');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('userName').value.trim();
    var email = document.getElementById('userEmail').value.trim();
    var subject = document.getElementById('userSubject').value.trim();
    var message = document.getElementById('userMessage').value.trim();

    if (!name || !email || !subject || !message) {
      status.className = 'form-status error';
      status.textContent = document.documentElement.lang === 'en'
        ? 'Please fill in all required fields.'
        : 'الرجاء تعبئة جميع الحقول الإلزامية.';
      return;
    }

    if (sendBtn) {
      sendBtn.disabled = true;
      sendBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> ' +
        (document.documentElement.lang === 'en' ? 'Sending...' : 'جاري الإرسال...');
    }

    setTimeout(function () {
      status.className = 'form-status success';
      status.textContent = document.documentElement.lang === 'en'
        ? ' Message received. We will contact you within 24 hours.'
        : ' تم استلام رسالتك. سنتواصل معك خلال 24 ساعة.'; if (sendBtn) {
          sendBtn.disabled = false;
          sendBtn.innerHTML = '<i class="bi bi-send"></i> ' +
            (document.documentElement.lang === 'en' ? 'Send Message' : 'إرسال الرسالة');
        }
      form.reset();
      setTimeout(function () {
        status.className = 'form-status';
        status.textContent = '';
      }, 6000);
    }, 800);
  });
}
document.addEventListener('layoutReady', function () {
  initContactPage();
  initWorldMap();
});

/* Fallback */
if (window.__chromeReady) {
  initContactPage();
  initWorldMap();
}