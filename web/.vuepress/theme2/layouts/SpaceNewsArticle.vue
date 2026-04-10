<template>
  <Layout>
    <template #page-top>
      <ArticleHero
        :title="fm.title"
        :image-url="heroImageUrl"
        :author="fm.author"
        :date="fm.date"
        :category="fm.category"
        :is-en="isEn"
      />
    </template>
    <template #page-bottom>
      <div class="article-back">
        <router-link :to="newsHome" class="article-back__link">
          &larr; {{ isEn ? 'Back to Space News' : '返回航天动态' }}
        </router-link>
      </div>
      <Footer />
    </template>
  </Layout>
  <PageToc />
  <SidebarToggle />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePage } from 'vuepress/client'
import { useRoute } from 'vue-router'
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import PageToc from '../components/PageToc.vue'
import ArticleHero from '../components/ArticleHero.vue'
import SidebarToggle from '../components/SidebarToggle.vue'
import { resolveFrontmatterImage } from '../utils/imageUrl'
import type { PageData } from '../utils/types'

const page = usePage()
const route = useRoute()

const fm = computed(() => (page.value as PageData).frontmatter || {})
const isEn = computed(() => (page.value.path || '').startsWith('/en/'))

const heroImageUrl = computed(() => resolveFrontmatterImage(fm.value.image, route.path) || null)

const newsHome = computed(() => isEn.value ? '/en/space-news/' : '/space-news/')
</script>

<style lang="scss">
/* Hide default VuePress H1 on SpaceNewsArticle pages (ArticleHero provides the H1) */
[vp-content] > h1:first-child {
  display: none;
}

.article-back {
  max-width: 740px;
  margin: 0 auto;
  padding: 1.5rem 2.5rem 0;

  @media (max-width: 719px) {
    padding: 1rem 1.25rem 0;
  }
}

.article-back__link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #0284c7;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
}
</style>
