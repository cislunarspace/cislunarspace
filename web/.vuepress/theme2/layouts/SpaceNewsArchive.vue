<template>
  <Layout>
    <template #page-bottom>
      <Footer />
    </template>
  </Layout>
  <SpaceNewsArchiveContent />
  <PageSidebar />
</template>

<script setup lang="ts">
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import SpaceNewsArchiveContent from '../components/SpaceNewsArchive.vue'
import PageSidebar from '../components/ExtraSidebar.vue'
</script>
