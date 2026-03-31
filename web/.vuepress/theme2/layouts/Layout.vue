<template>
  <Layout>
    <template #page-bottom>
      <Footer />
    </template>
  </Layout>
  <PageSidebar />
  <PageToc />
</template>

<script setup lang="ts">
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import PageSidebar from '../components/ExtraSidebar.vue'
import PageToc from '../components/PageToc.vue'
</script>
