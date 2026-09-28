import { defineClientConfig } from '@vuepress/client';
import { useRouter } from 'vue-router';
import { usePage } from 'vuepress/client';
import { watch } from 'vue';
import './styles/index.scss';
import Layout from './layouts/Layout.vue';
import AiChatLayout from './layouts/AiChatLayout.vue';
import Footer from './components/Footer.vue';
import PageSidebar from './components/ExtraSidebar.vue';
import AiChat from './components/AiChat.vue';
import ReferencesList from './components/ReferencesList.vue';
import type { PageData } from './utils/types';
import { normalizePageMetadata } from '../utils/page-metadata';
import { updateOgMeta } from './composables/useOgMeta';
import { useScrollReveal } from './composables/useScrollReveal';

import { resolvers } from '@vuepress/client';

// 覆写 @vuepress/client unstable resolvers（rc.30）：标签页标题统一
// 「页面名 - 地月空间入门指南」；页面名与站点名相同时（首页）只显示站点名。
const SITE_TITLE = '地月空间入门指南';
resolvers.resolvePageHeadTitle = (page, siteLocale) => {
  const pageTitle = typeof page.title === 'string' ? page.title.trim() : '';
  const siteTitle = (typeof siteLocale.title === 'string' && siteLocale.title.trim()) || SITE_TITLE;
  if (!pageTitle || pageTitle === siteTitle) return siteTitle;
  return `${pageTitle} - ${siteTitle}`;
};

export default defineClientConfig({
  layouts: {
    Layout,
    AiChatLayout,
  },
  enhance({ app }) {
    app.component('Footer', Footer);
    app.component('PageSidebar', PageSidebar);
    app.component('AiChat', AiChat);
    app.component('ReferencesList', ReferencesList);
  },
  setup() {
    const router = useRouter();
    const page = usePage();

    useScrollReveal();

    function setupShare() {
      if (typeof window === 'undefined') return;
      const fm = (page.value as PageData).frontmatter || {};
      const link = window.location.href.split('#')[0];
      const metadata = normalizePageMetadata({
        path: router.currentRoute.value.path,
        frontmatter: fm,
        siteBaseUrl: window.location.origin,
        pageUrl: link,
        fallbackTitle: document.title,
        fallbackDescription:
          (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content || '',
      });
      updateOgMeta(metadata);
    }

    setupShare();

    watch(
      () => router.currentRoute.value.path,
      () => {
        setTimeout(() => setupShare(), 0);
      },
    );
  },
});
