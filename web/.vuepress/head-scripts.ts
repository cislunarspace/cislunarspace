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

/** All client-side head scripts. */
export const headScripts = [
  baiduAnalyticsScript(),
  // Google Analytics loaded via googleAnalyticsPlugin, no manual script needed
];
