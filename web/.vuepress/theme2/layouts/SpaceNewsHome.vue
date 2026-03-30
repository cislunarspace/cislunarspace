<template>
  <Layout>
    <template #page-bottom>
      <Footer />
    </template>
  </Layout>
  <SpaceNewsHomeContent />
  <PageSidebar />
</template>

<script setup lang="ts">
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import SpaceNewsHomeContent from '../components/SpaceNewsHome.vue'
import PageSidebar from '../components/ExtraSidebar.vue'
</script>
