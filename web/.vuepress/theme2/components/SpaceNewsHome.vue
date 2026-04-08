<template>
  <main class="sn-home">
    <header class="sn-hero">
      <div class="sn-hero__inner">
        <p class="sn-hero__kicker">{{ labels.kicker }}</p>
        <h1 class="sn-hero__title">{{ labels.title }}</h1>
        <p class="sn-hero__lead">{{ labels.lead }}</p>
      </div>
    </header>

    <div class="sn-body">
      <div v-if="featuredList.length" class="sn-featured">
        <router-link :to="featuredList[currentFeatured].path" class="sn-featured__link" :key="featuredList[currentFeatured].path">
          <div class="sn-featured__img" :style="cardBg(featuredList[currentFeatured])">
            <span class="sn-cat-tag" :style="catStyle(featuredList[currentFeatured].category)">{{ catLabel(featuredList[currentFeatured].category) }}</span>
          </div>
          <div class="sn-featured__body">
            <h2 class="sn-featured__headline">{{ featuredList[currentFeatured].title }}</h2>
            <p class="sn-featured__deck">{{ featuredList[currentFeatured].description }}</p>
            <div class="sn-meta">
              <span v-if="featuredList[currentFeatured].author" class="sn-meta__author">{{ featuredList[currentFeatured].author }}</span>
              <span class="sn-meta__dot" v-if="featuredList[currentFeatured].author && featuredList[currentFeatured].date">&middot;</span>
              <time v-if="featuredList[currentFeatured].date" class="sn-meta__date">{{ formatDate(featuredList[currentFeatured].date) }}</time>
            </div>
          </div>
        </router-link>
        <div v-if="featuredList.length > 1" class="sn-featured__dots">
          <button
            v-for="(_, i) in featuredList"
            :key="i"
            class="sn-featured__dot"
            :class="{ active: i === currentFeatured }"
            @click="currentFeatured = i; startCarousel()"
          ></button>
        </div>
      </div>

      <section class="sn-section">
        <div class="sn-section__head">
          <h2 class="sn-section__title">{{ labels.latest }}</h2>
          <router-link class="sn-section__more" :to="archivePath">{{ labels.viewAll }}</router-link>
        </div>
        <ul class="sn-grid">
          <li v-for="item in latestItems" :key="item.path" class="sn-grid__cell">
            <router-link :to="item.path" class="sn-card">
              <div class="sn-card__img" :style="cardBg(item)">
                <span class="sn-cat-tag" :style="catStyle(item.category)">{{ catLabel(item.category) }}</span>
              </div>
              <div class="sn-card__body">
                <h3 class="sn-card__title">{{ item.title }}</h3>
                <p class="sn-card__deck">{{ item.description }}</p>
                <div class="sn-meta">
                  <span v-if="item.author" class="sn-meta__author">{{ item.author }}</span>
                  <span class="sn-meta__dot" v-if="item.author && item.date">&middot;</span>
                  <time v-if="item.date" class="sn-meta__date">{{ formatDate(item.date) }}</time>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </section>

      <section v-for="sec in categorySections" :key="sec.key" class="sn-section">
        <div class="sn-section__head">
          <h2 class="sn-section__title">
            <span class="sn-section__dot" :style="{ background: catColor(sec.key) }"></span>
            {{ sec.label }}
          </h2>
          <router-link class="sn-section__more" :to="archivePath + '#' + sec.key">{{ labels.viewMore }}</router-link>
        </div>
        <ul class="sn-grid">
          <li v-for="item in sec.items" :key="item.path" class="sn-grid__cell">
            <router-link :to="item.path" class="sn-card">
              <div class="sn-card__img" :style="cardBg(item)">
                <span class="sn-cat-tag" :style="catStyle(item.category)">{{ catLabel(item.category) }}</span>
              </div>
              <div class="sn-card__body">
                <h3 class="sn-card__title">{{ item.title }}</h3>
                <div class="sn-meta">
                  <span v-if="item.author" class="sn-meta__author">{{ item.author }}</span>
                  <span class="sn-meta__dot" v-if="item.author && item.date">&middot;</span>
                  <time v-if="item.date" class="sn-meta__date">{{ formatDate(item.date) }}</time>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { usePage } from 'vuepress/client'
import Footer from './Footer.vue'
import articlesData from '../../space-news-articles.json'

const page = usePage()
const isEn = computed(() => (page.value.path || '').startsWith('/en/'))

const labels = computed(() =>
  isEn.value
    ? {
        kicker: 'Cislunar Space',
        title: 'Space News',
        lead: 'Policy, launches, missions, and industry updates — sourced from public reporting.',
        latest: 'Latest News',
        viewAll: 'Full archive →',
        viewMore: 'More →',
      }
    : {
        kicker: '地月空间入门指南',
        title: '航天动态',
        lead: '政策、发射、任务与产业动态摘录，均基于公开报道并可在正文中核对来源。',
        latest: '最新动态',
        viewAll: '全部存档 →',
        viewMore: '更多 →',
      },
)

const archivePath = computed(() => (isEn.value ? '/en/space-news/archive' : '/space-news/archive'))

interface ArticleItem {
  path: string
  title: string
  description: string
  date: string | null
  lastUpdated: string | null
  author: string | null
  category: string[] | null
  image: string | null
}

const categoryMeta: Record<string, { zh: string; en: string; color: string }> = {
  artemis: { zh: 'Artemis', en: 'Artemis', color: '#6366f1' },
  spacex: { zh: 'SpaceX', en: 'SpaceX', color: '#0ea5e9' },
  china: { zh: '中国航天', en: 'China Space', color: '#dc2626' },
  nasa: { zh: 'NASA', en: 'NASA', color: '#2563eb' },
  esa: { zh: 'ESA', en: 'ESA', color: '#0891b2' },
  iss: { zh: '空间站', en: 'Space Station', color: '#7c3aed' },
  launch: { zh: '发射', en: 'Launches', color: '#ea580c' },
  commercial: { zh: '商业航天', en: 'Commercial Space', color: '#059669' },
  science: { zh: '科学发现', en: 'Science', color: '#8b5cf6' },
  policy: { zh: '政策战略', en: 'Policy & Strategy', color: '#ca8a04' },
}

const articles = computed<ArticleItem[]>(() => {
  const list: ArticleItem[] = isEn.value ? (articlesData as any).en : (articlesData as any).zh
  return [...list].map(a => ({
    ...a,
    category: Array.isArray(a.category) ? a.category : a.category ? [a.category] : null,
  })).sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return db - da
  })
})

const featuredList = computed<ArticleItem[]>(() => {
  const now = new Date()
  const twoDaysAgo = new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000)
  return articles.value.filter(a => {
    if (!a.date) return false
    return new Date(a.date) >= twoDaysAgo
  })
})

const currentFeatured = ref(0)
let carouselTimer: ReturnType<typeof setInterval> | null = null

function startCarousel() {
  stopCarousel()
  if (featuredList.value.length <= 1) return
  carouselTimer = setInterval(() => {
    if (featuredList.value.length === 0) {
      stopCarousel()
      return
    }
    currentFeatured.value = (currentFeatured.value + 1) % featuredList.value.length
  }, 5000)
}

function stopCarousel() {
  if (carouselTimer) {
    clearInterval(carouselTimer)
    carouselTimer = null
  }
}

watch(featuredList, () => {
  currentFeatured.value = 0
  startCarousel()
})

onMounted(() => {
  startCarousel()
})

onBeforeUnmount(() => {
  stopCarousel()
})

const latestItems = computed(() => {
  return articles.value.slice(0, 6)
})

const categorySections = computed(() => {
  const catOrder = ['artemis', 'spacex', 'china', 'nasa', 'esa', 'iss', 'launch', 'commercial', 'policy', 'science']
  const sections: { key: string; label: string; items: ArticleItem[] }[] = []
  for (const cat of catOrder) {
    const items = articles.value.filter(a => a.category?.includes(cat)).slice(0, 3)
    if (!items.length) continue
    const meta = categoryMeta[cat]
    if (!meta) continue
    sections.push({
      key: cat,
      label: isEn.value ? meta.en : meta.zh,
      items,
    })
  }
  return sections
})

function primaryCat(cats: string[] | string | null) {
  if (Array.isArray(cats)) return cats[0] || null
  return cats
}

function catLabel(cats: string[] | string | null) {
  const cat = primaryCat(cats)
  if (!cat) return ''
  return (categoryMeta[cat] || {})[isEn.value ? 'en' : 'zh'] || cat
}

function catColor(cats: string[] | string | null) {
  const cat = primaryCat(cats)
  if (!cat) return '#64748b'
  return (categoryMeta[cat] || {}).color || '#64748b'
}

function catStyle(cats: string[] | string | null) {
  return { background: catColor(cats), color: '#fff' }
}

function cardBg(item: ArticleItem) {
  if (item.image) {
    return { backgroundImage: `url(${item.image})` }
  }
  return { background: `linear-gradient(135deg, ${catColor(item.category)} 0%, ${catColor(item.category)}99 100%)` }
}

function formatDate(raw: string | null) {
  if (!raw) return '—'
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return String(raw)
  return isEn.value
    ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style lang="scss" scoped>
.sn-home {
  width: 100%;
  min-height: 60vh;
  background: #f6f7f9;
}

.sn-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0c4a6e 100%);
  color: #fff;
  padding: 2.5rem 1.25rem 2.75rem;
}

.sn-hero__inner {
  max-width: 960px;
  margin: 0 auto;
}

.sn-hero__kicker {
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.85;
  margin: 0 0 0.5rem;
}

.sn-hero__title {
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
}

.sn-hero__lead {
  font-size: 1.05rem;
  line-height: 1.55;
  opacity: 0.92;
  max-width: 40rem;
  margin: 0;
}

.sn-body {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* ---- Featured ---- */
.sn-featured {
  margin-top: -1.25rem;
  margin-bottom: 2rem;
  position: relative;
}

.sn-featured__dots {
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 0.75rem;
}

.sn-featured__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  background: #cbd5e1;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;

  &.active {
    background: #0284c7;
    transform: scale(1.25);
  }

  &:hover:not(.active) {
    background: #94a3b8;
  }
}

.sn-featured__link {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 36px rgba(15, 23, 42, 0.12);
  }

  @media (max-width: 719px) {
    grid-template-columns: 1fr;
  }
}

.sn-featured__img {
  min-height: 260px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  padding: 1rem;
}

.sn-featured__body {
  padding: 1.5rem 1.5rem 1.65rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sn-featured__headline {
  font-size: clamp(1.35rem, 2.5vw, 1.75rem);
  font-weight: 700;
  line-height: 1.25;
  margin: 0.35rem 0 0.65rem;
}

.sn-featured__deck {
  font-size: 1rem;
  line-height: 1.55;
  color: #475569;
  margin: 0 0 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ---- Category tag ---- */
.sn-cat-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.4;
}

.sn-cat-tag--sm {
  font-size: 0.65rem;
  padding: 0.15rem 0.45rem;
}

/* ---- Meta ---- */
.sn-meta {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: #64748b;
  margin-top: 0.25rem;
}

.sn-meta__author {
  font-weight: 500;
}

.sn-meta__dot {
  opacity: 0.4;
}

/* ---- Section ---- */
.sn-section {
  margin-bottom: 2.5rem;
}

.sn-section__head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.sn-section__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.sn-section__title {
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: #0f172a;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sn-section__more {
  margin-left: auto;
  font-size: 0.875rem;
  font-weight: 600;
  color: #0284c7;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
}

/* ---- Grid (latest) ---- */
.sn-grid {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.sn-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e2e8f0;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: #bae6fd;
    box-shadow: 0 4px 16px rgba(14, 165, 233, 0.12);
  }
}

.sn-card__img {
  min-height: 140px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
}

.sn-card__body {
  padding: 0.85rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.sn-card__title {
  font-size: 1rem;
  font-weight: 650;
  line-height: 1.35;
  margin: 0 0 0.35rem;
  color: #0f172a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sn-card__deck {
  font-size: 0.85rem;
  line-height: 1.5;
  color: #64748b;
  margin: 0 0 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

/* ---- Snippet grid (category sections) ---- */
.sn-grid-snippet {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.75rem;
}

.sn-snippet {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  background: #fff;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e2e8f0;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:hover {
    border-color: #bae6fd;
    box-shadow: 0 2px 8px rgba(14, 165, 233, 0.1);
  }
}

.sn-snippet__text {
  min-width: 0;
}

.sn-snippet__title {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.4;
  margin: 0 0 0.2rem;
  color: #0f172a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
