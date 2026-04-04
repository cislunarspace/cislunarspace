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
import { computed, onMounted, watch, nextTick } from 'vue'
import { usePage } from 'vuepress/client'
import { useRoute } from 'vue-router'
import Layout from '@vuepress/theme-default/dist/client/layouts/Layout.vue'
import Footer from '../components/Footer.vue'
import PageToc from '../components/PageToc.vue'
import ArticleHero from '../components/ArticleHero.vue'
import SidebarToggle from '../components/SidebarToggle.vue'

const page = usePage()
const route = useRoute()

const fm = computed(() => (page.value as any).frontmatter || {})
const isEn = computed(() => (page.value.path || '').startsWith('/en/'))

const heroImageUrl = computed(() => {
  const img = fm.value.image
  if (!img) return null
  if (/^https?:\/\//i.test(img)) return img
  if (img.startsWith('/')) return img
  if (img.startsWith('./')) {
    const dir = route.path.replace(/[^/]+\/$/, '')
    return dir + img.slice(2)
  }
  return null
})

const newsHome = computed(() => isEn.value ? '/en/space-news/' : '/space-news/')

function hideDefaultH1() {
  nextTick(() => {
    const el = document.querySelector('[vp-content] h1')
    if (el) (el as HTMLElement).style.display = 'none'
  })
}

onMounted(hideDefaultH1)

watch(() => route.path, () => {
  setTimeout(hideDefaultH1, 100)
})
</script>

<style lang="scss">
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
