// Runs before first paint: picks the language (?lang=, saved, or the browser's) and the theme.
(function () {
  var root = document.documentElement;
  var lang, theme;
  try {
    lang = localStorage.getItem('limitly-lang');
    theme = localStorage.getItem('limitly-theme');
  } catch (e) {}
  var asked = new URLSearchParams(location.search).get('lang');
  if (asked === 'ar' || asked === 'en') lang = asked;
  if (lang !== 'ar' && lang !== 'en') lang = /^ar\b/i.test(navigator.language || '') ? 'ar' : 'en';
  if (theme !== 'light' && theme !== 'dark') theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.lang = lang;
  root.dir = lang === 'ar' ? 'rtl' : 'ltr';
  root.dataset.theme = theme;
  root.classList.add('js');
})();
