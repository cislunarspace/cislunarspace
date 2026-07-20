<template>
  <main class="sn-home">
    <header class="sn-hero star-bg">
      <div class="sn-hero__inner">
        <p class="sn-hero__kicker scroll-reveal">{{ labels.kicker }}</p>
        <h1 class="sn-hero__title scroll-reveal scroll-reveal-delay-1">{{ labels.title }}</h1>
        <p class="sn-hero__lead scroll-reveal scroll-reveal-delay-2">{{ labels.lead }}</p>
      </div>
    </header>

    <div class="sn-body">
      <div v-if="featuredList.length" class="sn-featured">
        <router-link :to="featuredList[currentFeatured].path" class="sn-featured__link" :key="featuredList[currentFeatured].path">
          <div class="sn-featured__img" :style="cardBg(featuredList[currentFeatured])">
            <span v-if="featuredList[currentFeatured].primaryCategory" class="sn-cat-tag" :style="catStyle(featuredList[currentFeatured])">{{ featuredList[currentFeatured].categoryLabel }}</span>
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

      <section class="sn-section scroll-reveal revealed">
        <div class="sn-section__head">
          <h2 class="sn-section__title">{{ labels.latest }}</h2>
          <router-link class="sn-section__more" :to="archivePath">{{ labels.viewAll }}</router-link>
        </div>
        <ul class="sn-grid">
          <li v-for="(item, idx) in latestItems" :key="item.path" class="sn-grid__cell scroll-reveal revealed" :class="`scroll-reveal-delay-${(idx % 3) + 1}`">
            <router-link :to="item.path" class="sn-card">
              <div class="sn-card__img" :style="cardBg(item)">
                <span v-if="item.primaryCategory" class="sn-cat-tag" :style="catStyle(item)">{{ item.categoryLabel }}</span>
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

      <section v-for="(sec, secIdx) in categorySections" :key="sec.key" class="sn-section scroll-reveal revealed" :class="`scroll-reveal-delay-${(secIdx % 2) + 1}`">
        <div class="sn-section__head">
          <h2 class="sn-section__title">
            <span class="sn-section__dot" :style="{ background: sec.color }"></span>
            {{ sec.label }}
          </h2>
          <router-link class="sn-section__more" :to="archivePath + '#' + sec.key">{{ labels.viewMore }}</router-link>
        </div>
        <ul class="sn-grid">
          <li v-for="(item, idx) in sec.items" :key="item.path" class="sn-grid__cell scroll-reveal revealed" :class="`scroll-reveal-delay-${(idx % 3) + 1}`">
            <router-link :to="item.path" class="sn-card">
              <div class="sn-card__img" :style="cardBg(item)">
                <span v-if="item.primaryCategory" class="sn-cat-tag" :style="catStyle(item)">{{ item.categoryLabel }}</span>
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
import Footer from './Footer.vue'
import { useIsEn } from '../composables/useIsEn'
import type { ArticlesData } from '../utils/types'
import {
  buildSpaceNewsDirectoryView,
  type SpaceNewsArticleView,
  type SpaceNewsCategoryMeta,
} from '../utils/spaceNewsDirectoryView'
import { articleCardBackground, formatArticleDate } from '../utils/spaceNewsPresentation'
import { spaceNewsLabels } from '../utils/spaceNewsLabels'

const isEn = useIsEn()

const articlesData = ref<ArticlesData | null>(null)
const categoryMeta = ref<SpaceNewsCategoryMeta>({})

onMounted(async () => {
  const response = await fetch('/space-news-articles.json')
  const data = await response.json() as ArticlesData
  articlesData.value = data
  categoryMeta.value = data.categoryMeta ?? {}
})

const directoryView = computed(() => {
  if (!articlesData.value) return null
  return buildSpaceNewsDirectoryView({
    articles: isEn.value ? articlesData.value.en : articlesData.value.zh,
    locale: isEn.value ? 'en' : 'zh',
    categoryMeta: categoryMeta.value,
  })
})

const labels = computed(() => spaceNewsLabels.home[isEn.value ? 'en' : 'zh'])
const featuredList = computed(() => directoryView.value?.featuredList ?? [])
const latestItems = computed(() => directoryView.value?.latestItems ?? [])
const categorySections = computed(() => directoryView.value?.categorySections ?? [])

const archivePath = computed(() => (isEn.value ? '/en/space-news/archive' : '/space-news/archive'))

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

function catStyle(article: SpaceNewsArticleView) {
  return { background: article.categoryColor, color: '#fff' }
}

function cardBg(article: SpaceNewsArticleView) {
  return articleCardBackground(article)
}

function formatDate(raw: string | null) {
  return formatArticleDate(raw, isEn.value ? 'en' : 'zh', 'long')
}
</script>

<style lang="scss" scoped>
.sn-home {
  width: 100%;
  min-height: 60vh;
  background: var(--c-bg-light, #f6f7f9);
}

.sn-hero {
  background: var(--sn-space-gradient);
  color: #fff;
  padding: 2.5rem 1.25rem 2.75rem;
  position: relative;
}

.sn-hero__inner {
  max-width: 960px;
  margin: 0 auto;
}

.sn-hero__kicker {
  font-size: 0.75rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  opacity: 0.8;
  margin: 0 0 0.5rem;
}

.sn-hero__title {
  font-size: clamp(1.75rem, 4vw, 2.35rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 0.75rem;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
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
    background: var(--vp-c-accent);
    transform: scale(1.25);
  }

  &:hover:not(.active) {
    background: #94a3b8;
  }
}

.sn-featured__link {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--c-bg, #fff);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--c-border);
  transition: transform 0.35s var(--ease-out-expo),
              box-shadow 0.35s var(--ease-out-expo);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
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
  color: var(--c-text-light, #475569);
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

/* ---- Meta ---- */
.sn-meta {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--c-text-lighter, #64748b);
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
  border-bottom: 2px solid var(--c-border, #e2e8f0);
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
  color: var(--c-text, #0f172a);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sn-section__more {
  margin-left: auto;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--c-brand, #2563eb);
  text-decoration: none;
  white-space: nowrap;
  position: relative;
  transition: color 0.2s;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1.5px;
    background: var(--c-brand);
    transition: width 0.3s var(--ease-out-expo);
  }

  &:hover {
    color: var(--c-brand-light);
  }

  &:hover::after {
    width: 100%;
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
  background: var(--c-bg, #fff);
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--c-border, #e2e8f0);
  transition: transform 0.35s var(--ease-out-expo),
              border-color 0.25s var(--ease-smooth),
              box-shadow 0.35s var(--ease-out-expo);

  &:hover {
    border-color: var(--c-brand-light);
    box-shadow: var(--shadow-glow);
    transform: translateY(-3px);
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
  color: var(--c-text, #0f172a);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.2s;
}

.sn-card:hover .sn-card__title {
  color: var(--c-brand);
}

.sn-card__deck {
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--c-text-lighter, #64748b);
  margin: 0 0 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}
</style>
