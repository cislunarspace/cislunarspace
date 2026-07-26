/**
 * Client-side <script> blocks injected into the HTML <head>.
 *
 * These are VuePress head entries, not Vue components. Each script runs
 * in the visitor's browser at page load.
 */

/** Baidu Analytics tracking snippet. */
function baiduAnalyticsScript(): ['script', Record<string, never>, string] {
  const id = process.env.BAIDU_ANALYTICS_ID || '2675818a983a3131404cee835018f016';
  return [
    'script',
    {},
    `
    var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?${id}";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();
  `,
  ];
}

/**
 * Auto-redirect non-Chinese browsers from / to /en/ on first visit.
 * Skips if the user has already chosen a locale (cislunar-lang-chosen).
 */
function langDetectScript(): ['script', Record<string, never>, string] {
  return [
    'script',
    {},
    `
    (function() {
      if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return;
      if (window.location.pathname.startsWith('/en/')) return;
      try {
        if (localStorage.getItem('cislunar-lang-chosen')) return;
      } catch(e) {}
      var lang = navigator.language || navigator.userLanguage || '';
      var browserLang = lang.toLowerCase();
      if (browserLang && !browserLang.startsWith('zh')) {
        try { localStorage.setItem('cislunar-lang-chosen', 'en'); } catch(e) {}
        window.location.replace('/en/');
      }
    })();
  `,
  ];
}

/** All client-side head scripts. */
export const headScripts = [
  baiduAnalyticsScript(),
  // Google Analytics loaded via googleAnalyticsPlugin, no manual script needed
  langDetectScript(),
];
