<template>
  <main class="sn-archive">
    <header class="sna-hero">
      <div class="sna-hero__inner">
        <p class="sna-hero__kicker">{{ labels.kicker }}</p>
        <h1 class="sna-hero__title">{{ labels.title }}</h1>
        <p class="sna-hero__lead">{{ labels.lead }}</p>
        <router-link class="sna-back" :to="homePath">← {{ labels.backHome }}</router-link>
      </div>
    </header>

    <div class="sna-body">
      <nav class="sna-filters">
        <button
          class="sna-filter-btn"
          :class="{ active: activeFilter === 'all' }"
          @click="activeFilter = 'all'"
        >{{ labels.all }}</button>
        <button
          v-for="cat in usedCategories"
          :key="cat.key"
          class="sna-filter-btn"
          :class="{ active: activeFilter === cat.key }"
          :style="activeFilter === cat.key ? { background: cat.color, borderColor: cat.color, color: '#fff' } : {}"
          @click="activeFilter = cat.key"
        >{{ cat.label }}</button>
      </nav>

      <section v-for="group in filteredGroups" :key="group.key" :id="group.key" class="sna-group">
        <h2 class="sna-group__title">{{ group.label }}</h2>
        <ul class="sna-cards">
          <li v-for="item in group.items" :key="item.path" class="sna-cards__cell">
            <router-link :to="item.path" class="sna-card">
              <div class="sna-card__img" :style="cardBg(item)">
                <span class="sn-cat-tag" :style="catStyle(item.category)">{{ catLabel(item.category) }}</span>
              </div>
              <div class="sna-card__body">
                <h3 class="sna-card__title">{{ item.title }}</h3>
                <p class="sna-card__deck">{{ item.description }}</p>
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

      <div v-if="!filteredGroups.length" class="sna-empty">
        <p>{{ labels.empty }}</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePage } from 'vuepress/client'
import articlesData from '../../space-news-articles.json'

const page = usePage()
const isEn = computed(() => (page.value.path || '').startsWith('/en/'))
const activeFilter = ref('all')

const labels = computed(() =>
  isEn.value
    ? {
        kicker: 'Space News',
        title: 'Archive by date',
        lead: 'All published items, newest first within each month.',
        backHome: 'Back to Space News',
        empty: 'No articles yet.',
        all: 'All',
      }
    : {
        kicker: '航天动态',
        title: '按日期查阅',
        lead: '以下为已发布的全部条目，按月分组，月内按日期倒序。',
        backHome: '返回航天动态首页',
        empty: '暂无稿件。',
        all: '全部',
      },
)

const homePath = computed(() => (isEn.value ? '/en/space-news/' : '/space-news/'))

interface ArticleItem {
  path: string
  title: string
  description: string
  date: string | null
  lastUpdated: string | null
  author: string | null
  category: string[] | null
  image: string | null
  relativePath: string
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
  const list: any[] = isEn.value ? (articlesData as any).en : (articlesData as any).zh
  return [...list]
    .map(a => ({
      ...a,
      category: Array.isArray(a.category) ? a.category : a.category ? [a.category] : null,
    }))
    .sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0
      const db = b.date ? new Date(b.date).getTime() : 0
      return db - da
    })
})

interface ArticleGroup {
  key: string
  label: string
  items: ArticleItem[]
}

const groups = computed<ArticleGroup[]>(() => {
  const map = new Map<string, ArticleGroup>()
  for (const a of articles.value) {
    const ym = yearMonthFromPath(a.relativePath)
    if (!ym) continue
    const key = `${ym.y}-${String(ym.m).padStart(2, '0')}`
    if (!map.has(key)) {
      map.set(key, {
        key,
        label: formatMonthLabel(ym.y, ym.m),
        items: [],
      })
    }
    map.get(key)!.items.push(a)
  }
  return Array.from(map.values()).sort((a, b) => b.key.localeCompare(a.key))
})

const filteredGroups = computed(() => {
  if (activeFilter.value === 'all') return groups.value
  return groups.value
    .map(g => ({
      ...g,
      items: g.items.filter(a => a.category?.includes(activeFilter.value!)),
    }))
    .filter(g => g.items.length > 0)
})

const usedCategories = computed(() => {
  const cats = new Set<string>()
  for (const a of articles.value) {
    if (a.category) for (const c of a.category) cats.add(c)
  }
  const result: { key: string; label: string; color: string }[] = []
  for (const cat of cats) {
    const meta = categoryMeta[cat]
    if (!meta) continue
    result.push({ key: cat, label: isEn.value ? meta.en : meta.zh, color: meta.color })
  }
  return result
})

function primaryCat(cats: string[] | null) {
  return (cats && cats.length) ? cats[0] : null
}

function catLabel(cats: string[] | null) {
  const cat = primaryCat(cats)
  if (!cat) return ''
  return (categoryMeta[cat] || {})[isEn.value ? 'en' : 'zh'] || cat
}

function catColor(cats: string[] | null) {
  const cat = primaryCat(cats)
  if (!cat) return '#64748b'
  return (categoryMeta[cat] || {}).color || '#64748b'
}

function catStyle(cats: string[] | null) {
  return { background: catColor(cats), color: '#fff' }
}

function cardBg(item: ArticleItem) {
  if (item.image) {
    return { backgroundImage: `url(${item.image})` }
  }
  return { background: `linear-gradient(135deg, ${catColor(item.category)} 0%, ${catColor(item.category)}99 100%)` }
}

function yearMonthFromPath(rp: string) {
  const re = isEn.value
    ? /^en\/space-news\/(\d{4})\/(\d{2})\//
    : /^space-news\/(\d{4})\/(\d{2})\//
  const m = rp.match(re)
  if (!m) return null
  return { y: parseInt(m[1], 10), m: parseInt(m[2], 10) }
}

function formatMonthLabel(y: number, mo: number) {
  if (isEn.value) {
    const d = new Date(y, mo - 1, 1)
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
  }
  return `${y} 年 ${mo} 月`
}

function formatDate(raw: string | null) {
  if (!raw) return '—'
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return String(raw)
  return isEn.value
    ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' })
}
</script>

<style lang="scss" scoped>
.sn-archive {
  width: 100%;
  min-height: 60vh;
  background: #f6f7f9;
}

.sna-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #fff;
  padding: 2rem 1.25rem 2.25rem;
}

.sna-hero__inner {
  max-width: 960px;
  margin: 0 auto;
}

.sna-hero__kicker {
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.8;
  margin: 0 0 0.35rem;
}

.sna-hero__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  margin: 0 0 0.5rem;
}

.sna-hero__lead {
  font-size: 0.95rem;
  line-height: 1.5;
  opacity: 0.9;
  margin: 0 0 1rem;
}

.sna-back {
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #7dd3fc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.sna-body {
  max-width: 960px;
  margin: 0 auto;
  padding: 1.75rem 1.25rem 0;
}

/* ---- Filters ---- */
.sna-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
}

.sna-filter-btn {
  border: 1px solid #e2e8f0;
  background: #fff;
  border-radius: 20px;
  padding: 0.35rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  color: #475569;
  transition: all 0.15s;

  &:hover {
    border-color: #94a3b8;
  }

  &.active {
    background: #0f172a;
    border-color: #0f172a;
    color: #fff;
  }
}

/* ---- Group ---- */
.sna-group {
  margin-bottom: 2.5rem;
}

.sna-group__title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 1rem;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid #e2e8f0;
}

/* ---- Cards grid ---- */
.sna-cards {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1rem;
}

.sna-card {
  display: flex;
  flex-direction: column;
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

.sna-card__img {
  min-height: 120px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
}

.sna-card__body {
  padding: 0.75rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.sna-card__title {
  font-size: 0.95rem;
  font-weight: 650;
  line-height: 1.35;
  margin: 0 0 0.35rem;
  color: #0f172a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sna-card__deck {
  font-size: 0.82rem;
  line-height: 1.45;
  color: #64748b;
  margin: 0 0 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex: 1;
}

/* ---- Category tag (shared with home) ---- */
.sn-cat-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 600;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.4;
}

/* ---- Meta (shared) ---- */
.sn-meta {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  color: #64748b;
  margin-top: 0.25rem;
}

.sn-meta__author {
  font-weight: 500;
}

.sn-meta__dot {
  opacity: 0.4;
}

/* ---- Empty ---- */
.sna-empty {
  background: #fff;
  border: 1px dashed #cbd5e1;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: #64748b;
}
</style>
