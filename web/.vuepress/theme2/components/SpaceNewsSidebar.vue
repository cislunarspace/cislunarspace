<template>
  <aside class="sn-sidebar" :class="{ 'is-hidden': isHidden }">
    <div class="sn-sidebar-inner">
      <!-- Header -->
      <div class="sn-sidebar-header">
        <router-link :to="homePath" class="sn-sidebar-brand">
          <span class="sn-sidebar-brand__icon">🚀</span>
          <div class="sn-sidebar-brand__text">
            <div class="sn-sidebar-brand__title">Space News</div>
            <div class="sn-sidebar-brand__subtitle">{{ labels.subtitle }}</div>
          </div>
        </router-link>
      </div>

      <!-- Quick Nav -->
      <nav class="sn-sidebar-section">
        <router-link :to="homePath" class="sn-quick-link" :class="{ active: route.path === homePath || route.path === homePath + '/' }">
          <span class="sn-quick-link__icon">📰</span>
          <span>{{ labels.home }}</span>
        </router-link>
        <router-link :to="archivePath" class="sn-quick-link" :class="{ active: route.path === archivePath || route.path === archivePath + '/' }">
          <span class="sn-quick-link__icon">📂</span>
          <span>{{ labels.archive }}</span>
        </router-link>
      </nav>

      <!-- Latest Articles -->
      <div class="sn-sidebar-section">
        <div class="sn-section-title">
          <span>{{ labels.latest }}</span>
          <router-link :to="archivePath" class="sn-section-title__more">{{ labels.more }}</router-link>
        </div>
        <ul class="sn-latest-list">
          <li v-for="item in sidebarData.latest" :key="item.path" class="sn-latest-item">
            <router-link :to="item.path" class="sn-latest-link" :class="{ active: route.path === item.path }">
              <span class="sn-latest-dot" :style="{ background: catColor(item.category) }"></span>
              <div class="sn-latest-body">
                <div class="sn-latest-title">{{ item.title }}</div>
                <time class="sn-latest-date">{{ formatShortDate(item.date) }}</time>
              </div>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Categories -->
      <div class="sn-sidebar-section">
        <div class="sn-section-title">{{ labels.categories }}</div>
        <div class="sn-category-list">
          <router-link
            v-for="cat in sidebarData.categories"
            :key="cat.key"
            :to="`${archivePath}?category=${cat.key}`"
            class="sn-category-tag"
            :style="{ background: cat.color + '18', color: cat.color, borderColor: cat.color + '30' }"
          >
            <span class="sn-category-tag__label">{{ cat.label }}</span>
            <span class="sn-category-tag__count">{{ cat.count }}</span>
          </router-link>
        </div>
      </div>

      <!-- Archive -->
      <div class="sn-sidebar-section">
        <div class="sn-section-title">{{ labels.timeline }}</div>
        <div class="sn-archive-tree">
          <div
            v-for="yearNode in sidebarData.archive"
            :key="yearNode.year"
            class="sn-archive-year"
          >
            <button
              class="sn-archive-year__btn"
              :class="{ expanded: expandedYears.has(yearNode.year) }"
              @click="toggleYear(yearNode.year)"
            >
              <span class="sn-archive-arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
              <span class="sn-archive-year__label">{{ yearNode.year }}</span>
              <span class="sn-archive-year__count">{{ yearNode.months.reduce((s, m) => s + m.count, 0) }}</span>
            </button>
            <Transition name="sn-expand">
              <ul v-show="expandedYears.has(yearNode.year)" class="sn-archive-months">
                <li v-for="mo in yearNode.months" :key="mo.month" class="sn-archive-month">
                  <router-link
                    :to="mo.path"
                    class="sn-archive-month__link"
                    :class="{ active: route.path === mo.path || route.path === mo.path + '/' }"
                  >
                    <span>{{ mo.label }}</span>
                    <span class="sn-archive-month__count">{{ mo.count }}</span>
                  </router-link>
                </li>
              </ul>
            </Transition>
          </div>
        </div>
      </div>

      <!-- Stats Footer -->
      <div class="sn-sidebar-footer">
        <div class="sn-stats">
          <span class="sn-stats__label">{{ labels.totalArticles }}</span>
          <span class="sn-stats__value">{{ sidebarData.stats.total }}</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useIsEn } from '../composables/useIsEn'
import sidebarRaw from '../../space-news-sidebar-data.json'

const route = useRoute()
const isEn = useIsEn()
const isHidden = ref(false)

const labels = computed(() =>
  isEn.value
    ? {
        subtitle: 'Cislunar Space',
        home: 'Home',
        archive: 'Archive',
        latest: 'Latest',
        more: 'More →',
        categories: 'Topics',
        timeline: 'Timeline',
        totalArticles: 'Articles',
      }
    : {
        subtitle: '地月空间入门指南',
        home: '首页',
        archive: '存档',
        latest: '最新文章',
        more: '更多 →',
        categories: '分类浏览',
        timeline: '时间线',
        totalArticles: '文章总数',
      },
)

const homePath = computed(() => (isEn.value ? '/en/space-news/' : '/space-news/'))
const archivePath = computed(() => (isEn.value ? '/en/space-news/archive' : '/space-news/archive'))

const sidebarData = computed(() => {
  const data = (sidebarRaw as Record<string, any>)[isEn.value ? 'en' : 'zh']
  return data || { latest: [], categories: [], archive: [], stats: { total: 0 } }
})

// 默认展开最新的两个年份
const expandedYears = ref<Set<number>>(new Set())

watch(
  () => sidebarData.value.archive,
  (archive) => {
    if (archive && archive.length > 0) {
      const set = new Set<number>()
      archive.slice(0, 2).forEach((y: any) => set.add(y.year))
      expandedYears.value = set
    }
  },
  { immediate: true },
)

function toggleYear(year: number) {
  const set = new Set(expandedYears.value)
  if (set.has(year)) set.delete(year)
  else set.add(year)
  expandedYears.value = set
}

function catColor(cats: string[] | null) {
  if (!cats || !cats.length) return '#64748b'
  const meta = (categoryMeta as any)[cats[0]]
  return meta?.color || '#64748b'
}

function formatShortDate(raw: string | null) {
  if (!raw) return ''
  const d = new Date(raw)
  if (Number.isNaN(d.getTime())) return String(raw)
  return isEn.value
    ? d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
    : `${d.getMonth() + 1}/${d.getDate()}`
}

// 同步 sidebar-hidden 状态
function syncHidden() {
  isHidden.value = document.documentElement.classList.contains('sidebar-hidden')
}

onMounted(() => {
  syncHidden()
  const observer = new MutationObserver(syncHidden)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
})

// 内联分类颜色映射（与 gen-sidebar.js 保持一致）
const categoryMeta: Record<string, { color: string }> = {
  artemis: { color: '#6366f1' },
  spacex: { color: '#0ea5e9' },
  china: { color: '#dc2626' },
  nasa: { color: '#2563eb' },
  esa: { color: '#0891b2' },
  iss: { color: '#7c3aed' },
  launch: { color: '#ea580c' },
  commercial: { color: '#059669' },
  science: { color: '#8b5cf6' },
  policy: { color: '#ca8a04' },
  'blue-origin': { color: '#4338ca' },
  'commercial-space': { color: '#059669' },
}
</script>

<style lang="scss" scoped>
.sn-sidebar {
  position: fixed;
  top: var(--navbar-height, 3.6rem);
  left: 0;
  bottom: 0;
  width: var(--sidebar-width, 20rem);
  z-index: 10;
  background: var(--vp-sidebar-c-bg, #fff);
  border-inline-end: 1px solid var(--vp-c-divider, #e2e8f0);
  transition: transform 0.4s var(--ease-out-expo), opacity 0.3s var(--ease-smooth);
  overflow: hidden;

  &.is-hidden {
    transform: translateX(-100%);
    opacity: 0;
    pointer-events: none;
  }
}

.sn-sidebar-inner {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb, #cbd5e1) transparent;
  padding: 1.25rem 0 1.5rem;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--scrollbar-thumb, #cbd5e1);
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--scrollbar-thumb-hover, #94a3b8);
  }
}

/* ---- Header ---- */
.sn-sidebar-header {
  padding: 0 1.25rem 1rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid var(--vp-c-divider, #e2e8f0);
}

.sn-sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
}

.sn-sidebar-brand__icon {
  font-size: 1.5rem;
  line-height: 1;
}

.sn-sidebar-brand__title {
  font-family: var(--font-family-heading);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text, #1e293b);
  line-height: 1.3;
}

.sn-sidebar-brand__subtitle {
  font-size: 0.7rem;
  color: var(--vp-c-text-subtle, #64748b);
  margin-top: 1px;
  letter-spacing: 0.02em;
}

/* ---- Section ---- */
.sn-sidebar-section {
  padding: 0.75rem 0;
  margin: 0 0.75rem;
  border-bottom: 1px solid var(--vp-c-divider, #e2e8f0);

  &:last-of-type {
    border-bottom: none;
  }
}

.sn-section-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-family-heading);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--vp-c-text-subtle, #64748b);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.sn-section-title__more {
  font-size: 0.7rem;
  color: var(--vp-c-accent, #0ea5e9);
  text-decoration: none;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  transition: color 0.2s;

  &:hover {
    color: var(--vp-c-accent-hover, #38bdf8);
  }
}

/* ---- Quick Nav ---- */
.sn-quick-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.6rem;
  margin: 0.15rem 0;
  border-radius: 8px;
  color: var(--vp-c-text-mute, #475569);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 500;
  transition: background 0.2s, color 0.2s, transform 0.2s var(--ease-out-back);

  &:hover {
    background: var(--vp-c-accent-soft, rgba(14,165,233,0.08));
    color: var(--vp-c-accent, #0ea5e9);
  }

  &.active {
    background: var(--vp-c-accent-soft, rgba(14,165,233,0.12));
    color: var(--vp-c-accent, #0ea5e9);
    font-weight: 600;
  }
}

.sn-quick-link__icon {
  font-size: 1rem;
  line-height: 1;
  opacity: 0.85;
}

/* ---- Latest Articles ---- */
.sn-latest-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sn-latest-item {
  margin: 0;
}

.sn-latest-link {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--vp-c-text-mute, #475569);
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--vp-c-accent-soft, rgba(14,165,233,0.06));
    color: var(--vp-c-text, #1e293b);
  }

  &.active {
    background: var(--vp-c-accent-soft, rgba(14,165,233,0.1));
    color: var(--vp-c-accent, #0ea5e9);
  }
}

.sn-latest-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.sn-latest-body {
  min-width: 0;
  flex: 1;
}

.sn-latest-title {
  font-size: 0.8rem;
  line-height: 1.45;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sn-latest-date {
  display: block;
  font-size: 0.7rem;
  color: var(--vp-c-text-subtle, #94a3b8);
  margin-top: 2px;
}

/* ---- Categories ---- */
.sn-category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0 0.25rem;
}

.sn-category-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2rem 0.55rem;
  border-radius: 20px;
  border: 1px solid transparent;
  font-size: 0.75rem;
  font-weight: 500;
  text-decoration: none;
  transition: transform 0.2s var(--ease-out-back), box-shadow 0.2s, filter 0.2s;

  &:hover {
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    filter: brightness(1.05);
  }
}

.sn-category-tag__count {
  font-size: 0.65rem;
  font-weight: 600;
  opacity: 0.75;
  background: rgba(0,0,0,0.06);
  padding: 0 0.3rem;
  border-radius: 10px;
}

/* ---- Archive Tree ---- */
.sn-archive-tree {
  padding: 0 0.25rem;
}

.sn-archive-year {
  margin-bottom: 0.15rem;
}

.sn-archive-year__btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.4rem;
  border: none;
  background: none;
  border-radius: 8px;
  color: var(--vp-c-text-mute, #475569);
  font-family: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  text-align: left;

  &:hover {
    background: var(--vp-c-control, rgba(14,165,233,0.04));
    color: var(--vp-c-text, #1e293b);
  }
}

.sn-archive-arrow {
  display: inline-flex;
  transition: transform 0.25s var(--ease-out-expo);
  color: var(--vp-c-text-subtle, #94a3b8);
}

.sn-archive-year__btn.expanded .sn-archive-arrow {
  transform: rotate(90deg);
}

.sn-archive-year__label {
  flex: 1;
}

.sn-archive-year__count {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--vp-c-text-subtle, #94a3b8);
  background: var(--vp-c-bg-alt, #f8fafc);
  padding: 0.05rem 0.4rem;
  border-radius: 10px;
}

.sn-archive-months {
  list-style: none;
  padding: 0.15rem 0 0.15rem 1.6rem;
  margin: 0;
}

.sn-archive-month {
  margin: 0;
}

.sn-archive-month__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.4rem;
  border-radius: 6px;
  text-decoration: none;
  color: var(--vp-c-text-subtle, #64748b);
  font-size: 0.82rem;
  transition: background 0.2s, color 0.2s, padding-left 0.25s var(--ease-out-expo);

  &:hover {
    background: var(--vp-c-accent-soft, rgba(14,165,233,0.06));
    color: var(--vp-c-accent, #0ea5e9);
    padding-left: 0.6rem;
  }

  &.active {
    background: var(--vp-c-accent-soft, rgba(14,165,233,0.1));
    color: var(--vp-c-accent, #0ea5e9);
    font-weight: 600;
  }
}

.sn-archive-month__count {
  font-size: 0.7rem;
  color: var(--vp-c-text-subtle, #94a3b8);
}

/* ---- Expand Animation ---- */
.sn-expand-enter-active,
.sn-expand-leave-active {
  transition: opacity 0.25s ease, transform 0.25s var(--ease-out-expo);
  transform-origin: top;
}

.sn-expand-enter-from,
.sn-expand-leave-to {
  opacity: 0;
  transform: scaleY(0.95) translateY(-4px);
}

/* ---- Footer Stats ---- */
.sn-sidebar-footer {
  padding: 0.75rem 1rem 0;
  margin-top: 0.5rem;
}

.sn-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: var(--vp-c-bg-alt, #f8fafc);
  border-radius: 10px;
  font-size: 0.8rem;
  color: var(--vp-c-text-subtle, #64748b);
}

.sn-stats__value {
  font-weight: 700;
  color: var(--vp-c-accent, #0ea5e9);
  font-size: 0.95rem;
}

/* ---- Mobile: hide custom sidebar (native sidebar already hidden on mobile) ---- */
@media (max-width: 959px) {
  .sn-sidebar {
    display: none;
  }
}
</style>
