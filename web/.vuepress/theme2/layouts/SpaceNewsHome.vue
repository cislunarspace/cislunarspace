<template>
  <Layout class="sn-layout-wrapper sn-sn-portal">
    <template #page-bottom>
      <span />
    </template>
  </Layout>
  <SpaceNewsHomeContent />
  <SpaceNewsSidebar />
  <PageSidebar />
  <SidebarToggle />
</template>

<script setup lang="ts">
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import SpaceNewsHomeContent from '../components/SpaceNewsHome.vue'
import SpaceNewsSidebar from '../components/SpaceNewsSidebar.vue'
import PageSidebar from '../components/ExtraSidebar.vue'
import SidebarToggle from '../components/SidebarToggle.vue'
</script>

<style lang="scss">
.sn-layout-wrapper {
  .vp-page-meta {
    display: none !important;
  }
}

/* 桌面端隐藏原生侧边栏，使用自定义 SpaceNewsSidebar；保留移动端导航菜单 */
@media (min-width: 960px) {
  .sn-layout-wrapper ~ .vp-sidebar,
  .sn-layout-wrapper .vp-sidebar {
    display: none !important;
  }
}
</style>
