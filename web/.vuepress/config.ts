import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import theme from './theme2/index.js'
import navbar from './navbar.js'
import navbarEn from './navbar-en.js'
import sidebar from './sidebar.js'
import sidebarEn from './sidebar-en.js'
import ogMetaPlugin from './og-meta-plugin.js'

const domain = 'https://cislunarspace.cn'
const tags = ['地月空间', '航天', '轨道动力学']

export default defineUserConfig({
  lang: 'zh-CN',
  title: '地月空间入门指南',
  description: '系统掌握地月空间科学、技术与工程实践',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '地月空间入门指南',
      description: '系统掌握地月空间科学、技术与工程实践',
    },
    '/en/': {
      lang: 'en-US',
      title: "Cislunar Space Beginner's Guide",
      description: 'Systematically master cislunar space science, technology, and engineering practice',
    },
  },

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', {
      name: 'keywords',
      content: '地月空间，航天，轨道动力学，拉格朗日点，NRHO, 阿耳忒弥斯，月球探测，航天器轨道，CR3BP，GNC',
    }],
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2675818a983a3131404cee835018f016";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-0PLJ56MK80' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0PLJ56MK80');
    `],
    ['script', {}, `
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
    `],
  ],

  bundler: viteBundler({
    viteOptions: {
      server: {
        proxy: {
          '/api/ai': {
            target: 'https://api.deepseek.com',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/ai/, ''),
            headers: {
              'Authorization': 'Bearer sk-f5cdcdbb3b824e2997161414d272e2d9',
            },
          },
        },
      },
    },
  }),

  markdown: {
    lineNumbers: true,
  },

  theme: theme({
    logo: '/icon.ico',
    navbar,
    sidebar,

    locales: {
      '/': {
        selectLanguageName: '简体中文',
        navbar,
        sidebar,
        lastUpdatedText: '最近更新',
        editLinkText: '完善页面',
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: navbarEn,
        sidebar: sidebarEn,
        lastUpdatedText: 'Last Updated',
        editLinkText: 'Improve this page',
      },
    },

    repo: 'https://gitee.com/cislunarspace/cislunarspace',
    docsBranch: 'master',
    docsDir: 'web',
    editLink: true,
  }),

  plugins: [
    ogMetaPlugin,
    googleAnalyticsPlugin({ id: 'G-0PLJ56MK80' }),
    sitemapPlugin({ hostname: domain }),
  ],
})
