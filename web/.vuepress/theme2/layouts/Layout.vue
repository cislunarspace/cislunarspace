<template>
  <Layout
    :class="{
      'sn-layout-wrapper': isSpaceNews,
      'orbit-sim-layout': isOrbitSim,
      'forum-layout': isForum,
    }"
  >
    <template #page-bottom>
      <CopyPageButton v-if="!isForum" />
      <Footer />
    </template>
  </Layout>
  <SpaceNewsSidebar v-if="isSpaceNews" />
  <PageSidebar v-if="!isOrbitSim && !isForum" />
  <PageToc v-if="!isSpaceNews && !isOrbitSim && !isForum" />
  <SidebarToggle v-if="!isOrbitSim && !isForum" />
</template>

<style lang="scss">
/* ---- 页面切换淡入 ---- */
.page {
  animation: pageFadeIn 0.35s var(--ease-smooth);
}

@keyframes pageFadeIn {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ---- 侧边栏展开/收起 ---- */
.sidebar-container {
  transition: transform 0.35s var(--ease-out-expo), opacity 0.3s var(--ease-smooth) !important;
}

.theme-container {
  transition: padding-left var(--sn-sidebar-sync-duration) var(--ease-out-expo);
}

/* ---- Space News 页面：桌面端隐藏原生侧边栏 ---- */
@media (min-width: 960px) {
  .sn-layout-wrapper ~ .vp-sidebar,
  .sn-layout-wrapper .vp-sidebar {
    display: none !important;
  }
}

/* ---- 轨道仿真页：隐藏 VuePress 左侧栏（含移动端抽屉占位），内容区全宽 ---- */
.vp-theme-container.orbit-sim-layout .vp-sidebar {
  display: none !important;
}

.vp-theme-container.orbit-sim-layout .vp-sidebar-mask {
  display: none !important;
  pointer-events: none !important;
}

.vp-theme-container.orbit-sim-layout .vp-page {
  padding-inline-start: 0 !important;
}

@media (max-width: 959px) {
  .vp-theme-container.orbit-sim-layout.sidebar-open .vp-page {
    padding-inline-start: 0 !important;
  }
}

/* ---- 论坛页：隐藏 VuePress 左侧栏与移动端抽屉，正文区加宽 ---- */
.vp-theme-container.forum-layout .vp-sidebar {
  display: none !important;
}

.vp-theme-container.forum-layout .vp-sidebar-mask {
  display: none !important;
  pointer-events: none !important;
}

.vp-theme-container.forum-layout .vp-toggle-sidebar-button {
  display: none !important;
}

.vp-theme-container.forum-layout .vp-page {
  padding-inline-start: 0 !important;
}

.vp-theme-container.forum-layout .vp-page [vp-content] {
  max-width: min(1120px, 100%);
  margin-inline: auto;
  padding-inline: clamp(1rem, 3vw, 2rem);
  padding-block: 0.5rem 2rem;
}

/* 与 Forum 组件内标题重复，隐藏 Markdown 生成的页面 H1 */
.vp-theme-container.forum-layout [vp-content] > h1:first-child {
  display: none !important;
}

/* 不展示「完善页面 / 最近更新」等页脚元信息（与 frontmatter 双保险） */
.vp-theme-container.forum-layout .vp-page-meta {
  display: none !important;
}

.vp-theme-container.forum-layout .vp-page-nav {
  display: none !important;
}

@media (max-width: 959px) {
  .vp-theme-container.forum-layout.sidebar-open .vp-page {
    padding-inline-start: 0 !important;
  }
}
</style>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed, watch, nextTick } from 'vue'
import { usePage } from 'vuepress/client'
import { useRoute } from 'vue-router'
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import SpaceNewsSidebar from '../components/SpaceNewsSidebar.vue'
import PageSidebar from '../components/ExtraSidebar.vue'
import PageToc from '../components/PageToc.vue'
import SidebarToggle from '../components/SidebarToggle.vue'
import CopyPageButton from '../components/CopyPageButton.vue'
import { setupMathCopy, teardownMathCopy } from '../composables/useMathCopy'
import {
  enhanceContentTables,
  setupTableToolbar,
  startTableEnhanceObserver,
  teardownTableToolbar,
} from '../composables/useTableEnhance'

const route = useRoute()
const page = usePage()
const isSpaceNews = computed(() => {
  const p = route.path
  return p.startsWith('/space-news/') || p.startsWith('/en/space-news/')
})

/** 轨道仿真全屏页：不显示站点左侧栏、右侧工具条与侧栏切换钮 */
const isOrbitSim = computed(() => {
  const p = (route.path.replace(/\/$/, '') || '/').toLowerCase()
  return p === '/satellite-simulation' || p === '/en/satellite-simulation'
})

/** 社区论坛：全宽内容、无侧栏与页面工具条，与轨道仿真页类似的留白策略 */
const isForum = computed(() => {
  const p = (route.path.replace(/\/$/, '') || '/').toLowerCase()
  return p === '/forum' || p === '/en/forum'
})

function runTableEnhance() {
  const run = () => {
    enhanceContentTables()
  }
  nextTick(() => {
    requestAnimationFrame(run)
  })
  // 与 MutationObserver 互补：<Content> 偶发晚于本帧
  setTimeout(run, 0)
  setTimeout(run, 160)
}

onMounted(() => {
  setupMathCopy()
  setupTableToolbar()
  startTableEnhanceObserver()
  runTableEnhance()
})

watch(
  () => route.path,
  () => {
    runTableEnhance()
  },
)

watch(
  () => (page.value as { path?: string } | null)?.path,
  () => {
    runTableEnhance()
  },
  { flush: 'post' },
)

onBeforeUnmount(() => {
  teardownMathCopy()
  teardownTableToolbar()
})
</script>

<style lang="scss">
.math-block-wrapper {
  position: relative;
}

.math-copy-btn {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--c-text-lighter);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.25s var(--ease-smooth),
              color 0.25s var(--ease-smooth),
              background 0.25s var(--ease-smooth),
              transform 0.2s var(--ease-smooth);
}

.math-block-wrapper:hover .math-copy-btn {
  opacity: 1;
}

.math-copy-btn:hover {
  background: var(--c-bg-light);
  color: var(--c-text);
}

.math-copy-btn.copied {
  color: var(--c-brand);
  transform: translateY(-50%) scale(1.1);
}

@media (max-width: 768px) {
  .math-copy-btn {
    opacity: 0.4;
  }
}

.katex-block {
  overflow-x: auto;
  overflow-y: hidden;
  padding: 0.5rem 0;
  margin: 1rem 0;
  text-align: center;
}

.katex-block > .katex-display {
  margin: 0;
}

.katex-display > .katex {
  white-space: nowrap;
  overflow-x: visible;
}

.katex-display {
  overflow-x: auto;
  overflow-y: hidden;
}

.katex-display .base {
  flex-wrap: nowrap;
}

/* ============================================
   桌面端侧边栏隐藏/显示（重构）
   ============================================ */
@media (min-width: 960px) {
  html.sidebar-hidden {
    /* ---- 侧边栏滑出 ---- */
    .vp-sidebar {
      transform: translateX(-100%);
      opacity: 0;
      pointer-events: none;
    }

    /* ---- 内容区域扩展 ---- */
    .vp-page {
      padding-inline-start: 0;
      transition: padding-inline-start var(--sn-sidebar-sync-duration) var(--ease-out-expo);
    }

    /* ---- 侧栏收起：正文略增水平留白，仍随视口 clamp ---- */
    .vp-page [vp-content] {
      padding-inline: clamp(1.25rem, 4vw, 3rem);
      transition: padding-inline var(--sn-sidebar-sync-duration) var(--ease-out-expo);
    }
  }
}

/* ---- 移动端：禁止桌面端隐藏逻辑干扰 ---- */
@media (max-width: 959px) {
  .sidebar-toggle-btn {
    display: none !important;
  }
}
</style>
