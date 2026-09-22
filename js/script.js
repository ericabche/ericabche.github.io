/* ---------- SPRÅKBYTTE (NO / EN) ---------- */

var translations = {
  en: {
    'meta.title': 'Erica Bich Che — Portfolio',
    'meta.description': 'Portfolio of Erica Bich Che, computer science student specializing in information security at Østfold University College.',

    'nav.brand': 'Erica Bich Che - Portfolio',
    'nav.om': 'About',
    'nav.prosjekter': 'Projects',
    'nav.ferdigheter': 'Skills',
    'nav.kontakt': 'Contact',

    'hero.eyebrow': 'Portfolio',
    'hero.role': 'Computer science student specializing in information security. Building and breaking systems to understand them better.',
    'hero.meta': 'Østfold University College · Halden \u00a0·\u00a0 Sarpsborg, Norway',

    'om.kicker': 'About me',
    'om.tittel': 'From care work to code',
    'om.tekst': 'I am a final-year computer science student specializing in information security at Østfold University College. Alongside my studies, I have several years of work experience in healthcare and customer service, which has taught me to work in a structured way under pressure and to take responsibility without close supervision. Now I apply the same discipline to understanding how systems are built, and how they can be attacked.',

    'prosjekter.kicker': 'Projects',
    'prosjekter.tittel': 'Selected work',

    'felles.teknologier': 'Technologies',
    'felles.sekode': 'View code ↗',

    'p1.tittel': 'Security testing of a web application',
    'p1.emne': '2026 · Security in Development and Operations',
    'p1.tekst': 'Developed, as part of a group, a web application for partially anonymous feedback from students to lecturers, built with PHP and MySQL without a framework. The work combined AI-assisted development with building from scratch. Carried out security testing of other groups\u2019 solutions and used the findings to identify and fix weaknesses in our own application. The project gave hands-on experience with how development choices affect security.',
    'p1.stack': 'PHP · SQL · Vulnerability analysis · Secure web development',

    'p2.tittel': 'Bus app — Product Owner',
    'p2.emne': '2025 · Software Engineering and Testing',
    'p2.tekst': 'Product Owner in a team of five that developed a prototype bus app with route search, departure overview and digital ticketing with simulated payment. Responsible for requirements prioritization, user stories and most of the project documentation. Also worked on the data model and database setup in PostgreSQL, and contributed to the frontend. The project ran over four sprints using a Scrum-inspired workflow.',

    'p3.tittel': 'MermaidLib — C# library for diagram generation',
    'p3.emne': '2026 · Frameworks and .NET',
    'p3.tekst': 'Implemented the SequenceDiagram functionality (including 23 unit tests) in a C# library that generates Mermaid diagram syntax programmatically, in a group of four. Followed a test-driven approach to API design based on the Framework Design Guidelines. Wrote the entire project report and created the LaTeX templates the group worked in, and helped debug and improve an Azure DevOps CI/CD pipeline that had been failing for a long time.',

    'p4.tittel': 'Ski wax recommendation — Database design',
    'p4.emne': '2025 · Database Systems',
    'p4.tekst': 'Designed and implemented a relational database for a ski wax recommendation system together with a fellow student. Carried out full normalization from unnormalized form to BCNF, built the ER model, and implemented the database in MySQL with views and SQL queries for recommendations, stock status and alternative product suggestions. Tested and enforced referential integrity through foreign key constraints on update and delete.',
    'p4.stack': 'MySQL · SQL · ER modeling · Normalization (BCNF) · Views',

    'ferdigheter.kicker': 'Skills',
    'ferdigheter.tittel': 'Toolkit',
    'ferdigheter.programmering': 'Programming',
    'ferdigheter.sikkerhet': 'Security',
    'ferdigheter.sarbarhet': 'Vulnerability analysis',
    'ferdigheter.sikkerweb': 'Secure web development',
    'ferdigheter.jwt': 'Authentication (JWT)',
    'ferdigheter.tls': 'Encryption (TLS)',
    'ferdigheter.gdpr': 'GDPR compliance',
    'ferdigheter.verktoy': 'Tools',

    'kontakt.tittel': 'Get in touch',
    'kontakt.tekst': 'Open to trainee and graduate positions in IT security and systems development.',
    'kontakt.kopierTittel': 'Click to copy the email address',
    'kontakt.cv': 'Download CV (PDF)',
    'kontakt.oppdatert': 'Last updated 2026',

    'kopiert': 'Copied'
  },
  no: {
    'kopiert': 'Kopiert'
  }
};

var textElements = document.querySelectorAll('[data-i18n]');
var contentElements = document.querySelectorAll('[data-i18n-content]');
var titleElements = document.querySelectorAll('[data-i18n-title]');
var hrefElements = document.querySelectorAll('[data-i18n-href]');
var toggle = document.querySelector('.lang-toggle');

// Ta vare på den norske originalteksten fra HTML-en
textElements.forEach(function (el) { el.dataset.no = el.textContent; });
contentElements.forEach(function (el) { el.dataset.no = el.getAttribute('content'); });
titleElements.forEach(function (el) { el.dataset.no = el.getAttribute('title'); });
hrefElements.forEach(function (el) { el.dataset.noHref = el.getAttribute('href'); });

function currentLang() {
  return document.documentElement.lang === 'en' ? 'en' : 'no';
}

function t(key, fallback, lang) {
  if (lang === 'no') return fallback;
  return translations.en[key] || fallback;
}

function setLanguage(lang) {
  textElements.forEach(function (el) {
    el.textContent = t(el.dataset.i18n, el.dataset.no, lang);
  });
  contentElements.forEach(function (el) {
    el.setAttribute('content', t(el.dataset.i18nContent, el.dataset.no, lang));
  });
  titleElements.forEach(function (el) {
    el.setAttribute('title', t(el.dataset.i18nTitle, el.dataset.no, lang));
  });
  hrefElements.forEach(function (el) {
    el.setAttribute('href', lang === 'en' ? el.dataset.i18nHref : el.dataset.noHref);
  });

  document.documentElement.lang = lang;

  if (toggle) {
    toggle.setAttribute('aria-checked', lang === 'en' ? 'true' : 'false');
  }

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

if (toggle) {
  toggle.addEventListener('click', function () {
    setLanguage(currentLang() === 'en' ? 'no' : 'en');
  });
}

// Husk valget ved neste besøk
var saved = null;
try { saved = localStorage.getItem('lang'); } catch (e) {}
if (saved === 'en') setLanguage('en');


/* ---------- KOPIER E-POST ---------- */

document.querySelectorAll('.copy-email').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var email = link.textContent.trim();
    var original = email;

    link.style.display = 'inline-block';
    link.style.width = link.offsetWidth + 'px';
    link.style.textAlign = 'center';

    navigator.clipboard.writeText(email).then(function () {
      link.textContent = translations[currentLang()].kopiert;
      setTimeout(function () {
        link.textContent = original;
        link.style.width = '';
      }, 1500);
    });
  });
});