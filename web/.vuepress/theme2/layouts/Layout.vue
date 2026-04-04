<template>
  <Layout>
    <template #page-bottom>
      <CopyPageButton />
      <Footer />
    </template>
  </Layout>
  <PageSidebar />
  <PageToc />
  <SidebarToggle />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import PageSidebar from '../components/ExtraSidebar.vue'
import PageToc from '../components/PageToc.vue'
import SidebarToggle from '../components/SidebarToggle.vue'
import CopyPageButton from '../components/CopyPageButton.vue'
import { setupMathCopy } from '../composables/useMathCopy'

onMounted(() => {
  setupMathCopy()
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
  border-radius: 4px;
  background: transparent;
  color: var(--c-text-lighter);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s, color 0.2s, background 0.2s;
}

.math-block-wrapper:hover .math-copy-btn {
  opacity: 1;
}

.math-copy-btn:hover {
  background: var(--c-bg-light);
  color: var(--c-text);
}

.math-copy-btn.copied {
  color: #3eaf7c;
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

html.sidebar-hidden {
  --sidebar-width: 0;

  .sidebar-container,
  .sidebar-mask {
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
  }

  .theme-container {
    padding-left: 0;
  }
}
</style>
