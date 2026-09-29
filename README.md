# Tech-Sat

A bilingual (Arabic / English) marketing website for **Tech-Sat**, a Yemeni satellite communications company and the exclusive distributor of **IEC Global Telecom** in Yemen.

Static, dependency-free front end. No build step. No bundler. No package manager.

---

## Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Conventions](#conventions)
- [Contact](#contact)
- [بالعربية](#بالعربية)

---

## Features

- **Bilingual by design.** Arabic (RTL) and English (LTR) are written in the markup itself, using paired `data-en` / `data-ar` attributes.
- **Dark mode.** System-aware, user-toggleable, persisted in `localStorage`.
- **Single source of truth.** Navbar, footer, theme, language, and scroll behavior each have one owner.
- **Interactive world map.** Leaflet-based IEC network map, synced with theme and language.
- **Filterable catalogs and dynamic details.** One `details.html` renders every product, service, and industry from a single data file.

---

## Getting Started

Any static server works.

```bash
python -m http.server 5500
# or: npx serve .
# or: php -S localhost:5500
```

Then open `http://localhost:5500`.

Opening `index.html` directly from the filesystem may break ES modules. Always use a local server.

---

## Project Structure

```
.
├── index.html, about.html, services.html, products.html,
│   industries.html, contact.html, details.html
└── assets/
    ├── css/
    │   ├── main.css              # single entry point
    │   ├── base/                 # palette, reset, dark mode
    │   ├── components/           # navbar, cards, buttons, ...
    │   └── pages/                # page-specific styles
    ├── js/
    │   ├── core/                 # template, theme, i18n, scroll, aos, chrome
    │   ├── pages/                # per-page entry scripts
    │   ├── data/                 # details-data.js
    │   └── map.js                # world map module
    ├── img/
    └── vendor/                   # third-party libraries (frozen)
```

Every page loads only `assets/css/main.css`, then Bootstrap, AOS, `core/chrome.js`, and its own `pages/*.js`.

---

## Conventions

- No `<style>` in HTML.
- No business logic inside `<script>` tags in HTML — page scripts live in `assets/js/pages/`.
- No edits to `assets/vendor/`.
- CSS layering is `base → components → pages`.
- Class naming follows BEM.

### Adding a new page

1. Create `page.html` at the root.
2. Link only `assets/css/main.css` in `<head>`.
3. Add `<div id="navbar-root"></div>` and `<div id="footer-root"></div>`.
4. Before `</body>`, include:

```html
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/aos/aos.js"></script>
<script type="module" src="assets/js/core/chrome.js"></script>
<script type="module" src="assets/js/pages/page.js"></script>
```

5. Create `assets/js/pages/page.js` (may be empty).
6. Create `assets/css/pages/page.css` and import it from `main.css`.

---

## Contact

- Website — [tech-sat.com](https://tech-sat.com)
- General — info@tech-sat.com
- Support — Support@tech-sat.com

---
---

## بالعربية

موقع تسويقي ثنائي اللغة (عربي / إنجليزي) لشركة **Tech-Sat**، شركة يمنية متخصصة في الاتصالات الفضائية، والموزع الحصري لـ **IEC Global Telecom** في اليمن.

واجهة ثابتة لا تعتمد على أدوات بناء. لا bundler، ولا مدير حزم.

---

### المحتويات

- [المميزات](#المميزات)
- [التشغيل](#التشغيل)
- [هيكل المشروع](#هيكل-المشروع)
- [قواعد العمل](#قواعد-العمل)
- [التواصل](#التواصل)

---

### المميزات

- **ثنائي اللغة بطبيعته.** النص العربي والإنجليزي مكتوبان داخل الـ HTML نفسه عبر سمات `data-en` / `data-ar`.
- **وضع ليلي.** يعمل تلقائيًا حسب إعدادات النظام، أو يدويًا عبر زر، ويُحفظ الاختيار.
- **مصدر واحد لكل شيء.** النافبار والفوتر والثيم واللغة والتمرير، لكل منها ملف واحد مسؤول.
- **خريطة عالمية تفاعلية.** مبنية على Leaflet، ومتزامنة مع الثيم واللغة.
- **فلاتر وصفحة تفاصيل ديناميكية.** ملف `details.html` واحد يعرض كل منتج وخدمة وقطاع من ملف بيانات مركزي.

---

### التشغيل

أي سيرفر محلي ثابت يعمل.

```bash
python -m http.server 5500
# أو: npx serve .
# أو: php -S localhost:5500
```

ثم افتح `http://localhost:5500`.

فتح `index.html` مباشرة من نظام الملفات قد يعطّل وحدات ES. استخدم سيرفرًا محليًا دائمًا.

---

### هيكل المشروع

```
.
├── index.html, about.html, services.html, products.html,
│   industries.html, contact.html, details.html
└── assets/
    ├── css/
    │   ├── main.css              # نقطة الدخول الوحيدة
    │   ├── base/                 # المتغيرات، reset، الوضع الليلي
    │   ├── components/           # النافبار، البطاقات، الأزرار
    │   └── pages/                # أنماط خاصة بكل صفحة
    ├── js/
    │   ├── core/                 # template, theme, i18n, scroll, aos, chrome
    │   ├── pages/                # سكربت كل صفحة
    │   ├── data/                 # details-data.js
    │   └── map.js                # وحدة الخريطة
    ├── img/
    └── vendor/                   # مكتبات خارجية (مجمّدة)
```

كل صفحة تستدعي `assets/css/main.css` فقط، ثم Bootstrap و AOS و `core/chrome.js` وسكربت الصفحة.

---

### قواعد العمل

- لا `<style>` داخل HTML.
- لا منطق داخل وسوم `<script>` في HTML — سكربتات الصفحات مكانها `assets/js/pages/`.
- لا تعديل على أي ملف في `assets/vendor/`.
- ترتيب طبقات CSS: `base → components → pages`.
- تسمية الكلاسات بنمط BEM.

#### إضافة صفحة جديدة

1. أنشئ `page.html` في الجذر.
2. اربط في `<head>` فقط `assets/css/main.css`.
3. أضف `<div id="navbar-root"></div>` و `<div id="footer-root"></div>`.
4. قبل `</body>` أضف:

```html
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/aos/aos.js"></script>
<script type="module" src="assets/js/core/chrome.js"></script>
<script type="module" src="assets/js/pages/page.js"></script>
```

5. أنشئ `assets/js/pages/page.js` (فارغًا إن لم تكن للصفحة سلوكيات).
6. أنشئ `assets/css/pages/page.css` واستورده من `main.css`.

---

### التواصل

- الموقع — [tech-sat.com](https://tech-sat.com)
- عام — info@tech-sat.com
- الدعم الفني — Support@tech-sat.com
