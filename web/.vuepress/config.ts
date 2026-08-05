import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { sitemapPlugin } from '@vuepress/plugin-sitemap';
import { searchPlugin } from '@vuepress/plugin-search';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import theme from './theme2/index.js';
import navbar from './navbar.ts';
import navbarEn from './navbar-en.ts';
import { buildSidebarConfigs } from './sidebar/config.ts';
import ogMetaPlugin from './og-meta-plugin.ts';
import { citePlugin, loadBibliography } from './cite-plugin.ts';
import { katexPlugin } from './katex-plugin.ts';
import { rawContentPlugin } from './raw-content-plugin.ts';
import { headScripts } from './head-scripts.ts';
import { createSsrRenderCachePlugin } from './build/ssr-render-cache.ts';

const __configDir = path.dirname(fileURLToPath(import.meta.url));
const { zh: sidebar, en: sidebarEn } = buildSidebarConfigs();

// web/.env、web/.env.local（后者覆盖，便于本机覆写而无需改 .env）
dotenv.config({ path: path.resolve(__configDir, '../.env'), quiet: true });
dotenv.config({ path: path.resolve(__configDir, '../.env.local'), override: true, quiet: true });

const domain = 'https://cislunarspace.cn';

if (!process.env.DEEPSEEK_API_KEY && process.env.NODE_ENV !== 'production') {
  console.warn(
    '[config] DEEPSEEK_API_KEY not set — 本地 /api/ai 代理将无法请求 DeepSeek。请复制 web/.env.example 为 web/.env 并填入密钥。',
  );
}

export default defineUserConfig({
  lang: 'zh-CN',
  title: '地月空间入门指南',
  description: '系统掌握地月空间科学、技术与工程实践',

  // Exclude internal .vuepress/, helper files, and node_modules from site pages
  pagePatterns: [
    '**/*.md',
    '!**/_*.md',
    '!.vuepress/**/*.md',
    '!node_modules/**',
    '!glossary/**',
    '!en/glossary/**',
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '地月空间入门指南',
      description: '系统掌握地月空间科学、技术与工程实践',
    },
    '/en/': {
      lang: 'en-US',
      title: "Cislunar Space Beginner's Guide",
      description:
        'Systematically master cislunar space science, technology, and engineering practice',
    },
  },

  head: [
    [
      'link',
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.16.44/dist/katex.min.css' },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          '地月空间，航天，轨道动力学，拉格朗日点，NRHO, 阿耳忒弥斯，月球探测，航天器轨道，CR3BP，GNC',
      },
    ],
    ...headScripts,
  ],

  bundler: viteBundler({
    viteOptions: {
      plugins: [createSsrRenderCachePlugin()],
      server: {
        watch: {
          // Avoid ENOSPC: exclude VuePress-generated dirs from Vite's file watcher
          ignored: [
            '**/.vuepress/dist/**',
            '**/.vuepress/.shard/**',
            '**/.vuepress/.cache/**',
            '**/.vuepress/.temp/**',
          ],
        },
        proxy: {
          '/api/ai': {
            target: 'https://api.deepseek.com',
            changeOrigin: true,
            rewrite: (p) => p.replace(/^\/api\/ai/, ''),
            configure: (proxy) => {
              proxy.on('proxyReq', (proxyReq) => {
                proxyReq.setHeader('Authorization', `Bearer ${process.env.DEEPSEEK_API_KEY || ''}`);
              });
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
    logo: '/logo.png',
    navbar,
    sidebar,
    sidebarDepth: 0,

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

    repo: null,
    docsRepo: 'https://github.com/cislunarspace/cislunarspace',
    docsBranch: 'master',
    docsDir: 'web',
    editLink: true,

    // theme-default 默认开启的 plugin-git 会为每个页面 spawn 一次 git log
    // （~2100 次/shard，在 FUSE 挂载的仓库上要 ~4 分钟），页脚“最近更新”
    // 和 Contributors 功能随之关闭，换取构建速度。
    plugins: {
      git: false,
    },
  }),

  plugins: [
    rawContentPlugin,
    {
      name: 'vuepress-plugin-cite',
      extendsMarkdown: (md) => {
        const bibPath = path.join(__configDir, 'public', 'bibliography.json');
        const bibData = loadBibliography(bibPath);
        citePlugin(md, { bibliographyData: bibData });
      },
    },
    katexPlugin,
    ogMetaPlugin,
    googleAnalyticsPlugin({ id: 'G-0PLJ56MK80' }),
    sitemapPlugin({ hostname: domain }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
        '/en/': {
          placeholder: 'Search docs',
        },
      },
    }),
  ],
});
