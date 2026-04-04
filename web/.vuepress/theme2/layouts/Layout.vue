<template>
  <Layout>
    <template #page-bottom>
      <Footer />
    </template>
  </Layout>
  <PageSidebar />
  <PageToc />
  <SidebarToggle />
</template>

<script setup lang="ts">
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import PageSidebar from '../components/ExtraSidebar.vue'
import PageToc from '../components/PageToc.vue'
import SidebarToggle from '../components/SidebarToggle.vue'
</script>

<style lang="scss">
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
