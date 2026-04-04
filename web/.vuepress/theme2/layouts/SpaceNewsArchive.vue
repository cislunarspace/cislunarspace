<template>
  <Layout class="sn-layout-wrapper">
    <template #page-bottom>
      <span />
    </template>
  </Layout>
  <SpaceNewsArchiveContent />
  <PageSidebar />
  <SidebarToggle />
</template>

<script setup lang="ts">
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import SpaceNewsArchiveContent from '../components/SpaceNewsArchive.vue'
import PageSidebar from '../components/ExtraSidebar.vue'
import SidebarToggle from '../components/SidebarToggle.vue'
</script>

<style lang="scss">
.sn-layout-wrapper {
  .theme-default-content,
  .vp-page-meta {
    display: none !important;
  }
}
</style>
