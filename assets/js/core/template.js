export const NAVBAR_TPL = '' +
  '<nav class="navbar navbar-expand-lg navbar-hw fixed-top" id="mainNav">' +
  '<div class="container">' +
  '<a class="hw-logo" href="index.html" aria-label="Tech-Sat">' +
  '<img src="assets/img/techSatLogo.webp" alt="Tech-Sat" class="hw-logo-img">' +
  '</a>' +
  '<div class="d-flex align-items-center gap-2 order-lg-3">' +
  '<button class="ts-toggle" id="langToggle" type="button" aria-label="Switch language">' +
  '<i class="bi bi-translate"></i> <span id="langLabel">AR</span>' +
  '</button>' +
  '<button class="ts-toggle" id="themeToggle" type="button" aria-label="Switch theme">' +
  '<i class="bi bi-moon-stars" id="themeIcon"></i>' +
  '</button>' +
  '<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" ' +
  'data-bs-target="#navMenu" aria-label="Toggle navigation">' +
  '<i class="bi bi-list fs-2"></i>' +
  '</button>' +
  '</div>' +
  '<div class="collapse navbar-collapse order-lg-2" id="navMenu">' +
  '<ul class="navbar-nav nav-hw mx-auto mt-3 mt-lg-0">' +
  '<li class="nav-item"><a class="nav-link" href="index.html" data-en="Home" data-ar="الرئيسية">Home</a></li>' +
  '<li class="nav-item"><a class="nav-link" href="services.html" data-en="Services" data-ar="الخدمات">Services</a></li>' +
  '<li class="nav-item"><a class="nav-link" href="products.html" data-en="Products" data-ar="المنتجات">Products</a></li>' +
  '<li class="nav-item"><a class="nav-link" href="industries.html" data-en="Industries" data-ar="القطاعات">Industries</a></li>' +
  '<li class="nav-item"><a class="nav-link" href="about.html" data-en="Why Us" data-ar="لماذا نحن">Why Us</a></li>' +
  '<li class="nav-item"><a class="nav-link" href="contact.html" data-en="Contact" data-ar="اتصل بنا">Contact</a></li>' +
  '</ul>' +
  '<a href="contact.html" class="btn-hw-primary d-none d-lg-inline-flex" ' +
  'data-en="Request Service" data-ar="اطلب الخدمة">' +
  'Request Service <i class="bi bi-arrow-right"></i>' +
  '</a>' +
  '</div>' +
  '</div>' +
  '</nav>';

export const FOOTER_TPL = '' +
  '<footer class="footer-hw">' +
  '<div class="container footer-top">' +
  '<div class="row g-3">' +

  '<div class="col-lg-4 col-md-6">' +
  '<a class="hw-logo hw-logo--light" href="index.html" aria-label="Tech-Sat">' +
  '<img src="assets/img/techSatLogo.webp" alt="Tech-Sat" class="hw-logo-img">' +
  '</a>' +
  '<p class="mt-2" ' +
  'data-en="Tech-Sat is a leading IT company providing managed network communication solutions, and the only reseller in Yemen of IEC Global Telecom." ' +
  'data-ar="تك-سات شركة تقنية معلومات رائدة تقدم حلول اتصالات شبكية مُدارة، والموزع الوحيد في اليمن لشركة IEC Global Telecom.">' +
  'Tech-Sat is a leading IT company providing managed network communication solutions, ' +
  'and the only reseller in Yemen of IEC Global Telecom.' +
  '</p>' +
  '<div class="footer-social mt-2">' +
  '<a href="https://www.facebook.com/profile.php?id=100064730084237#" aria-label="Twitter / X"><i class="bi bi-twitter-x"></i></a>' +
  '<a href="https://www.facebook.com/profile.php?id=100064730084237#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>' +
  '<a href="https://www.facebook.com/profile.php?id=100064730084237#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>' +
  '<a href="https://www.facebook.com/profile.php?id=100064730084237#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>' +
  '<a href="https://www.facebook.com/profile.php?id=100064730084237#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>' +
  '</div>' +
  '</div>' +

  '<div class="col-6 col-md-3 col-lg-2">' +
  '<h6 data-en="Services" data-ar="الخدمات">Services</h6>' +
  '<ul>' +
  '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Satellite Connectivity" data-ar="الاتصالات الفضائية">Satellite Connectivity</span></a></li>' +
  '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Network Service" data-ar="خدمات الشبكة">Network Service</span></a></li>' +
  '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Systems Integration" data-ar="تكامل الأنظمة">Systems Integration</span></a></li>' +
  '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="Field Services" data-ar="خدمات ميدانية">Field Services</span></a></li>' +
  '<li><a class="footer-link" href="services.html"><i class="bi bi-caret-right-fill"></i><span data-en="24/7 Support" data-ar="دعم فني 24/7">24/7 Support</span></a></li>' +
  '</ul>' +
  '</div>' +

  '<div class="col-6 col-md-3 col-lg-2">' +
  '<h6 data-en="Products" data-ar="المنتجات">Products</h6>' +
  '<ul>' +
  '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="Voice & Low Data" data-ar="الصوت والبيانات">Voice &amp; Low Data</span></a></li>' +
  '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="Broadband Data" data-ar="بيانات عريضة">Broadband Data</span></a></li>' +
  '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="VSAT Solutions" data-ar="حلول VSAT">VSAT Solutions</span></a></li>' +
  '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="Mobile & Vehicular" data-ar="المتنقلة والمركبات">Mobile &amp; Vehicular</span></a></li>' +
  '<li><a class="footer-link" href="products.html"><i class="bi bi-caret-right-fill"></i><span data-en="Terminals & Hardware" data-ar="الأجهزة والمعدات">Terminals &amp; Hardware</span></a></li>' +
  '</ul>' +
  '</div>' +

  '<div class="col-6 col-md-3 col-lg-2">' +
  '<h6 data-en="Industries" data-ar="القطاعات">Industries</h6>' +
  '<ul>' +
  '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Government" data-ar="الحكومة">Government</span></a></li>' +
  '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Humanitarian" data-ar="إنساني">Humanitarian</span></a></li>' +
  '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Media" data-ar="إعلام">Media</span></a></li>' +
  '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Energy" data-ar="الطاقة">Energy</span></a></li>' +
  '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Enterprise" data-ar="مؤسسات">Enterprise</span></a></li>' +
  '<li><a class="footer-link" href="industries.html"><i class="bi bi-caret-right-fill"></i><span data-en="Maritime" data-ar="بحري">Maritime</span></a></li>' +
  '</ul>' +
  '</div>' +

  '<div class="col-md-6 col-lg-2">' +
  '<h6 data-en="Get In Touch" data-ar="تواصل معنا">Get In Touch</h6>' +
  '<div class="footer-contact-item">' +
  '<span class="ic"><i class="bi bi-envelope-fill"></i></span>' +
  '<span>info@tech-sat.com</span>' +
  '</div>' +
  '<div class="footer-contact-item">' +
  '<span class="ic"><i class="bi bi-briefcase-fill"></i></span>' +
  '<span>Sales@tech-sat.com</span>' +
  '</div>' +
  '<div class="footer-contact-item">' +
  '<span class="ic"><i class="bi bi-headset"></i></span>' +
  '<span>Support@tech-sat.com</span>' +
  '</div>' +
  '<div class="footer-contact-item">' +
  '<span class="ic"><i class="bi bi-telephone-fill"></i></span>' +
  '<span>00967-711188100</span>' +
  '</div>' +
  '</div>' +

  '</div>' +

  '<div class="footer-designed-by">' +
  '<div class="footer-designed-by__text" data-en="DESIGNED BY" data-ar="تصميم وتطوير">DESIGNED BY</div>' +
  '<div class="footer-designed-by__name" data-en="YOU FOR INFORMATION TECHNOLOGY" data-ar="YOU FOR INFORMATION TECHNOLOGY">YOU FOR INFORMATION TECHNOLOGY</div>' +
  '<img src="assets/img/you-logo.png" alt="YOU For Information Technology" class="footer-designed-by__logo">' +
  '</div>' +

  '</div>' +
  '</footer>';