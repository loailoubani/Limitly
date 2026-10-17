// Language and theme toggles, translations, and the download links of the latest GitHub release.
const REPO = 'loailoubani/Limitly';
// Set once the extension is live on the Chrome Web Store; the page then links to it.
const CHROME_STORE_URL = '';

const STRINGS = {
  en: {
    title: 'Limitly – Your Claude limit, always in sight',
    navFeatures: 'Features',
    navDownload: 'Download',
    navFaq: 'FAQ',
    navPrivacy: 'Privacy',
    eyebrow: 'Free · Chrome & Windows',
    heroTitle: 'Your Claude limit, <em>always in sight.</em>',
    heroLead:
      'Limitly shows how much of your 5-hour and weekly Claude usage is left, right on your Chrome toolbar and in the Windows taskbar.',
    ctaWindows: 'Download for Windows',
    ctaChrome: 'Get the Chrome extension',
    ctaChromeSub: 'Chrome & Chromium browsers',
    winVersion: 'Version {v} · Windows 10 & 11',
    metaFree: 'Free',
    metaPrivate: 'No tracking',
    featKicker: 'Features',
    featTitle: 'Know where you stand before you hit the limit',
    featLead: 'No more opening settings to check. Limitly keeps the number where you can see it.',
    f1t: '5-hour and weekly',
    f1d: 'Both limits side by side, per-model weekly limits, and the exact time each one resets.',
    f2t: 'Always on screen',
    f2d: 'A colour-coded percentage on the toolbar and tray icon: green, amber, then red as you get close.',
    f3t: 'Refreshes itself',
    f3d: 'Every 5 to 60 minutes (10 by default), and it waits patiently when claude.ai asks it to slow down.',
    f4t: 'Arabic and English',
    f4d: 'A full right-to-left Arabic interface, plus light and dark themes that follow your system.',
    f5t: 'Private by design',
    f5d: 'Talks only to claude.ai with your own session. No accounts, no analytics, no servers of ours.',
    f6t: 'Light and up to date',
    f6d: 'The Windows app is a few MB, starts with Windows and installs its own updates.',
    f7t: 'Alerts before you run out',
    f7d: 'A notification when 20%, and then 5%, of a limit is left.',
    f8t: "Know when you'll run out",
    f8d: "From your recent pace: “At this pace, you'll run out by 3:40.”",
    f9t: '24-hour history',
    f9d: 'A simple chart of how your limit moved over the last day.',
    dlKicker: 'Download',
    dlTitle: 'Get Limitly',
    dlLead: 'Use it in the browser, on the desktop, or both. Set-up takes a minute.',
    winTitle: 'Limitly for Windows',
    winSub: 'Windows 10 and 11 · 64-bit',
    winBtn: 'Download installer',
    msStore: 'Microsoft Store',
    win1: 'Run <b>Limitly-Setup.exe</b>.',
    win2: 'If Windows shows <b>“Windows protected your PC”</b>, click <b>More info</b> → <b>Run anyway</b>.',
    win3: 'Click <b>Sign in to Claude</b> and sign in once.',
    win4: 'Limitly shows up on the taskbar. If it’s hidden under <b>^</b>, drag it onto the taskbar.',
    winNote: 'Starts with Windows and updates itself. You can turn off auto-start in Settings.',
    crTitle: 'Limitly for Chrome',
    crSub: 'Google Chrome and Chromium browsers',
    crBtn: 'Download extension',
    crStore: 'Chrome Web Store',
    crStoreBtn: 'Add to Chrome',
    soon: 'Coming soon',
    cr1: 'Download the <b>.zip</b> and unzip it.',
    cr2: 'Open <code>chrome://extensions</code> and turn on <b>Developer mode</b> (top right).',
    cr3: 'Click <b>Load unpacked</b> and choose the unzipped folder.',
    cr4: 'Pin Limitly from the extensions icon, and make sure you’re signed in to <b>claude.ai</b>.',
    crNote: 'Keep the unzipped folder where it is. Chrome loads the extension from it.',
    relAll: 'All releases',
    galKicker: 'A closer look',
    galTitle: 'One meter, everywhere you work',
    gal1: 'Chrome toolbar popup',
    gal2: 'Windows taskbar flyout',
    gal3: 'Windows app',
    faqKicker: 'FAQ',
    faqTitle: 'Questions',
    q1: 'Is Limitly made by Anthropic?',
    a1: 'No. Limitly is an independent project and is not affiliated with or endorsed by Anthropic.',
    q2: 'Can it read my conversations?',
    a2: 'No. It only asks claude.ai for the usage figures you can already see on claude.ai’s usage page. It never opens your chats, files or prompts.',
    q3: 'Do I need an API key?',
    a3: 'No. Limitly uses your normal claude.ai sign-in. In Chrome it uses your browser session; on Windows you sign in once inside the app.',
    q4: 'Why does Windows warn me when I install it?',
    a4: 'The app isn’t signed with a paid code-signing certificate yet, so SmartScreen doesn’t recognise it. Every release is built automatically by GitHub Actions and checked before it is published.',
    q5: 'How do I get updates?',
    a5: 'The Windows app checks for new versions and installs them for you. For the Chrome extension, download the new .zip and replace the folder, then click reload on chrome://extensions.',
    q6: 'Is it free?',
    a6: 'Yes, completely free, with no ads and no accounts.',
    q7: 'Does it work with the Free plan?',
    a7: "Not yet. claude.ai doesn't show usage limits for Free accounts, so there is nothing to read. Limitly says so clearly instead of showing an error. It works with paid plans such as Pro and Max.",
    q8: 'Will checking my usage cause problems with claude.ai?',
    a8: 'No. Limitly checks every 10 minutes by default and never more than once every 30 seconds. If claude.ai asks it to slow down, it waits exactly as long as asked, backs off further if needed, and keeps showing your last numbers meanwhile.',
    privTitle: 'Your data stays with you',
    priv1: 'Usage figures come only from claude.ai, using your own session.',
    priv2: 'Results and settings are stored on your device only.',
    priv3: 'No analytics, ads or tracking. Nothing is sent to the developer.',
    privLink: 'Read the privacy policy →',
    authorName: 'Loai Housam Loubani',
    authorText:
      'Limitly was designed and developed with the help of AI, by a software QA specialist who wanted to stop guessing how much Claude was left.',
    disclaimer: 'Not affiliated with Anthropic.',
    privacyTitle: 'Privacy policy – Limitly',
    back: '← Back to Limitly',
    theme: 'Theme',
  },
  ar: {
    title: 'Limitly – حدّ Claude أمام عينيك دائماً',
    navFeatures: 'المزايا',
    navDownload: 'التحميل',
    navFaq: 'الأسئلة',
    navPrivacy: 'الخصوصية',
    eyebrow: 'مجاني · Chrome و Windows',
    heroTitle: 'حدّك في Claude، <em>أمام عينيك دائماً.</em>',
    heroLead:
      'يعرض Limitly ما تبقّى من حدّ استخدامك في Claude، لجلسة الساعات الخمس وللأسبوع، مباشرةً على شريط أدوات Chrome وفي شريط مهام Windows.',
    ctaWindows: 'تحميل لـ Windows',
    ctaChrome: 'إضافة Chrome',
    ctaChromeSub: 'Chrome والمتصفحات المبنية على Chromium',
    winVersion: 'الإصدار {v} · Windows 10 و 11',
    metaFree: 'مجاني',
    metaPrivate: 'بلا تتبّع',
    featKicker: 'المزايا',
    featTitle: 'اعرف أين وصلت قبل أن تبلغ الحد',
    featLead: 'لا داعي لفتح الإعدادات كل مرة. يُبقي Limitly الرقم حيث تراه.',
    f1t: 'الخمس ساعات والأسبوع',
    f1d: 'الحدّان جنباً إلى جنب، مع الحدود الأسبوعية لكل نموذج، والوقت الدقيق لتجدّد كلٍّ منها.',
    f2t: 'ظاهر دائماً',
    f2d: 'نسبة ملوّنة على أيقونة شريط الأدوات وشريط المهام: أخضر، ثم برتقالي، ثم أحمر كلما اقتربت من الحد.',
    f3t: 'يتحدّث تلقائياً',
    f3d: 'كل 5 إلى 60 دقيقة (10 افتراضياً)، ويتمهّل تلقائياً عندما يطلب claude.ai الانتظار.',
    f4t: 'عربي وإنكليزي',
    f4d: 'واجهة عربية كاملة من اليمين لليسار، مع وضع فاتح وداكن يتبع نظامك.',
    f5t: 'خصوصية أولاً',
    f5d: 'يتصل بـ claude.ai فقط وبجلستك أنت. بلا حسابات، بلا إحصاءات، وبلا خوادم خاصة بنا.',
    f6t: 'خفيف ومحدَّث',
    f6d: 'تطبيق Windows بحجم بضعة ميغابايت، يعمل مع بدء التشغيل ويثبّت تحديثاته بنفسه.',
    f7t: 'تنبيه قبل أن ينتهي حدّك',
    f7d: 'إشعار عندما يتبقى 20% من الحد، ثم 5%.',
    f8t: 'اعرف متى سينتهي حدّك',
    f8d: 'حسب معدل استخدامك الأخير: «بهذا المعدل سينتهي حدّك عند 3:40».',
    f9t: 'سجل آخر 24 ساعة',
    f9d: 'رسم بسيط يوضح كيف تغيّر حدّك خلال اليوم الأخير.',
    dlKicker: 'التحميل',
    dlTitle: 'احصل على Limitly',
    dlLead: 'استخدمه في المتصفح أو على سطح المكتب أو كليهما. الإعداد يأخذ دقيقة.',
    winTitle: 'Limitly لـ Windows',
    winSub: 'Windows 10 و 11 · 64-بت',
    winBtn: 'تحميل المثبّت',
    msStore: 'متجر Microsoft',
    win1: 'شغّل <b>Limitly-Setup.exe</b>.',
    win2: 'إذا ظهرت رسالة <b>Windows protected your PC</b> اضغط <b>More info</b> ثم <b>Run anyway</b>.',
    win3: 'اضغط <b>تسجيل الدخول إلى Claude</b> وسجّل دخولك مرة واحدة.',
    win4: 'يظهر Limitly على شريط المهام. إذا كان مخفياً تحت <b>^</b> اسحبه إلى الشريط.',
    winNote: 'يعمل مع بدء تشغيل Windows ويحدّث نفسه. يمكنك إيقاف التشغيل التلقائي من الإعدادات.',
    crTitle: 'Limitly لـ Chrome',
    crSub: 'Google Chrome والمتصفحات المبنية على Chromium',
    crBtn: 'تحميل الإضافة',
    crStore: 'متجر Chrome الإلكتروني',
    crStoreBtn: 'أضِف إلى Chrome',
    soon: 'قريباً',
    cr1: 'حمّل ملف <b>‎.zip</b> وفُكّ ضغطه.',
    cr2: 'افتح <code>chrome://extensions</code> وفعّل <b>وضع مطوّر البرامج</b> (أعلى الصفحة).',
    cr3: 'اضغط <b>تحميل الإضافة غير المضغوطة</b> واختر المجلد الذي فككته.',
    cr4: 'ثبّت Limitly من أيقونة الإضافات، وتأكد أنك مسجّل الدخول إلى <b>claude.ai</b>.',
    crNote: 'أبقِ المجلد في مكانه، فـ Chrome يشغّل الإضافة منه.',
    relAll: 'كل الإصدارات',
    galKicker: 'نظرة أقرب',
    galTitle: 'مقياس واحد، أينما تعمل',
    gal1: 'نافذة الإضافة في Chrome',
    gal2: 'النافذة المنبثقة من شريط المهام',
    gal3: 'تطبيق Windows',
    faqKicker: 'الأسئلة',
    faqTitle: 'أسئلة شائعة',
    q1: 'هل Limitly من Anthropic؟',
    a1: 'لا. Limitly مشروع مستقل وغير تابع لشركة Anthropic أو معتمد منها.',
    q2: 'هل يستطيع قراءة محادثاتي؟',
    a2: 'لا. يطلب من claude.ai أرقام الاستخدام فقط، وهي نفسها التي تراها في صفحة الاستخدام. لا يفتح محادثاتك أو ملفاتك أو رسائلك أبداً.',
    q3: 'هل أحتاج مفتاح API؟',
    a3: 'لا. يستخدم Limitly تسجيل دخولك العادي في claude.ai. في Chrome يستخدم جلسة المتصفح، وفي Windows تسجّل الدخول مرة واحدة داخل التطبيق.',
    q4: 'لماذا يحذّرني Windows عند التثبيت؟',
    a4: 'التطبيق غير موقّع بعد بشهادة توقيع مدفوعة، لذلك لا يتعرّف عليه SmartScreen. وكل إصدار يُبنى تلقائياً عبر GitHub Actions ويُفحص قبل نشره.',
    q5: 'كيف أحصل على التحديثات؟',
    a5: 'تطبيق Windows يتحقق من الإصدارات الجديدة ويثبّتها لك. أما إضافة Chrome، فحمّل ملف ‎.zip الجديد واستبدل المجلد، ثم اضغط إعادة التحميل في chrome://extensions.',
    q6: 'هل هو مجاني؟',
    a6: 'نعم، مجاني بالكامل، بلا إعلانات وبلا حسابات.',
    q7: 'هل يعمل مع الخطة المجانية؟',
    a7: 'ليس بعد. لا يعرض claude.ai حدود الاستخدام لحسابات الخطة المجانية، فلا يوجد ما يمكن قراءته. يوضّح Limitly ذلك برسالة واضحة بدل إظهار خطأ. ويعمل مع الخطط المدفوعة مثل Pro و Max.',
    q8: 'هل يسبب التحقق من استخدامي مشكلة مع claude.ai؟',
    a8: 'لا. يتحقق Limitly كل 10 دقائق افتراضياً، ولا يتحقق أكثر من مرة كل 30 ثانية. وإذا طلب claude.ai التمهّل، ينتظر المدة المطلوبة تماماً ويزيدها إن لزم، ويستمر بعرض آخر أرقامك خلال ذلك.',
    privTitle: 'بياناتك تبقى معك',
    priv1: 'أرقام الاستخدام تأتي من claude.ai فقط، عبر جلستك أنت.',
    priv2: 'النتائج والإعدادات محفوظة على جهازك فقط.',
    priv3: 'بلا إحصاءات أو إعلانات أو تتبّع. لا يُرسَل شيء إلى المطوّر.',
    privLink: 'اقرأ سياسة الخصوصية ←',
    authorName: 'لؤي حسام لوباني',
    authorText:
      'صمّم Limitly وطوّر بمساعدة الذكاء الاصطناعي، على يد مختص في ضمان جودة البرمجيات أراد أن يتوقف عن تخمين ما تبقّى له في Claude.',
    disclaimer: 'غير تابع لشركة Anthropic.',
    privacyTitle: 'سياسة الخصوصية – Limitly',
    back: '→ العودة إلى Limitly',
    theme: 'المظهر',
  },
};

const root = document.documentElement;
let release = null;

const store = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch {}
};

const lang = () => (root.lang === 'ar' ? 'ar' : 'en');
const t = (key, vars = {}) =>
  (STRINGS[lang()][key] ?? STRINGS.en[key] ?? '').replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');

const locale = () => (lang() === 'ar' ? 'ar-SY-u-nu-latn' : 'en');
const formatSize = (bytes) =>
  `${(bytes / 1048576).toLocaleString(locale(), { maximumFractionDigits: 1 })} MB`;

// Screenshots follow the page: Arabic shots for Arabic, English for English, in the current theme.
function applyShots() {
  document.querySelectorAll('img[data-shot]').forEach((img) => {
    const src = `img/${img.dataset.shot}-${lang()}-${root.dataset.theme}.png?v=7`;
    if (img.getAttribute('src') !== src) img.src = src;
  });
}

function render() {
  const page = document.body.dataset.page;
  document.title = t(page === 'privacy' ? 'privacyTitle' : 'title');
  document.querySelectorAll('[data-i18n]').forEach((el) => (el.textContent = t(el.dataset.i18n)));
  document.querySelectorAll('[data-i18n-html]').forEach((el) => (el.innerHTML = t(el.dataset.i18nHtml)));
  document.getElementById('langBtn').textContent = lang() === 'ar' ? 'English' : 'العربية';
  document.getElementById('themeBtn').setAttribute('aria-label', t('theme'));
  applyShots();
  if (release) applyRelease();
}

// The download buttons always point at the latest release's files; this only adds the version
// and file sizes once GitHub answers.
function applyRelease() {
  const { version, assets } = release;
  document.querySelectorAll('.js-version-line').forEach((el) => (el.textContent = t('winVersion', { v: version })));
  document.querySelectorAll('.js-size').forEach((el) => {
    const asset = assets[el.dataset.asset];
    if (asset) el.textContent = `${asset.name.split('.').pop().toUpperCase()} · ${formatSize(asset.size)}`;
  });
}

async function loadRelease() {
  try {
    const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) return;
    const data = await res.json();
    const find = (name) => (data.assets ?? []).find((a) => a.name === name);
    release = {
      version: data.tag_name.replace(/^v/, ''),
      assets: { setup: find('Limitly-Setup.exe'), chrome: find('Limitly-Chrome.zip') },
    };
    applyRelease();
  } catch {}
}

function setupChromeStore() {
  if (!CHROME_STORE_URL) return;
  document.querySelectorAll('.js-store').forEach((el) => {
    el.href = CHROME_STORE_URL;
    el.hidden = false;
  });
  document.querySelectorAll('.js-store-soon').forEach((el) => (el.hidden = true));
}

document.getElementById('langBtn').addEventListener('click', () => {
  const next = lang() === 'ar' ? 'en' : 'ar';
  root.lang = next;
  root.dir = next === 'ar' ? 'rtl' : 'ltr';
  store('limitly-lang', next);
  render();
});

const setTheme = (theme) => {
  root.dataset.theme = theme;
  applyShots();
};

document.getElementById('themeBtn').addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  store('limitly-theme', next);
  setTheme(next);
});

// Until a theme is picked on the page, follow the system's light/dark setting live.
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  let saved = null;
  try {
    saved = localStorage.getItem('limitly-theme');
  } catch {}
  if (!saved) setTheme(e.matches ? 'dark' : 'light');
});

// Phone menu.
const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const setMenu = (open) => {
  nav.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
};
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  setMenu(!nav.classList.contains('open'));
});
nav.addEventListener('click', (e) => e.target.closest('a') && setMenu(false));
document.addEventListener('click', (e) => !nav.contains(e.target) && setMenu(false));
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false));

// Header shadow, reading progress and the back-to-top button, updated once per frame.
const header = document.querySelector('.top');
const toTop = document.getElementById('toTop');
let ticking = false;
const onScroll = () => {
  ticking = false;
  const max = document.documentElement.scrollHeight - innerHeight;
  header.classList.toggle('scrolled', scrollY > 8);
  header.style.setProperty('--progress', max > 0 ? Math.min(1, scrollY / max).toFixed(4) : 0);
  toTop.classList.toggle('show', scrollY > innerHeight * 0.8);
};
addEventListener(
  'scroll',
  () => {
    if (!ticking) requestAnimationFrame(onScroll);
    ticking = true;
  },
  { passive: true },
);
addEventListener('resize', onScroll);
onScroll();
toTop.addEventListener('click', () => scrollTo({ top: 0 }));

// Highlights the menu link of the section on screen.
const links = [...nav.querySelectorAll('a[href^="#"]')];
const sections = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
if (sections.length && 'IntersectionObserver' in window) {
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`));
      }),
    { rootMargin: '-45% 0px -50% 0px' },
  );
  sections.forEach((section) => spy.observe(section));
}

// Content slides in as it scrolls into view; cards in a row follow each other.
const revealables = document.querySelectorAll('.head, .card, .gallery figure, .faq details, .shot');
if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        reveal.unobserve(entry.target);
      }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  revealables.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.matches('.card, figure, details'));
    const index = Math.max(0, siblings.indexOf(el));
    el.style.setProperty('--delay', `${Math.min(index, 5) * 80}ms`);
    el.classList.add('reveal');
    reveal.observe(el);
  });
}

// The Chrome download needs the install steps, so show them as the .zip starts downloading.
document.querySelectorAll('.js-show-steps').forEach((el) =>
  el.addEventListener('click', () => setTimeout(() => document.getElementById('download')?.scrollIntoView(), 300)),
);

render();
setupChromeStore();
if (document.querySelector('.js-size')) loadRelease();
