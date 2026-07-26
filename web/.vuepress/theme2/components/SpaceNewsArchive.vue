<template>
  <main class="sn-archive">
    <header class="sna-hero">
      <div class="sna-hero__inner">
        <p class="sna-hero__kicker scroll-reveal">{{ labels.kicker }}</p>
        <h1 class="sna-hero__title scroll-reveal scroll-reveal-delay-1">{{ labels.title }}</h1>
        <p class="sna-hero__lead scroll-reveal scroll-reveal-delay-2">{{ labels.lead }}</p>
        <router-link class="sna-back" :to="homePath">← {{ labels.backHome }}</router-link>
      </div>
    </header>

    <div class="sna-body">
      <nav class="sna-filters">
        <button
          class="sna-filter-btn"
          :class="{ active: activeFilter === 'all' }"
          @click="activeFilter = 'all'"
        >
          {{ labels.all }}
        </button>
        <button
          v-for="cat in usedCategories"
          :key="cat.key"
          class="sna-filter-btn"
          :class="{ active: activeFilter === cat.key }"
          :style="
            activeFilter === cat.key
              ? { background: cat.color, borderColor: cat.color, color: '#fff' }
              : {}
          "
          @click="activeFilter = cat.key"
        >
          {{ cat.label }}
        </button>
      </nav>

      <section
        v-for="(group, gIdx) in filteredGroups"
        :id="group.key"
        :key="group.key"
        class="sna-group scroll-reveal revealed"
        :class="`scroll-reveal-delay-${(gIdx % 3) + 1}`"
      >
        <h2 class="sna-group__title">{{ group.label }}</h2>
        <ul class="sna-cards">
          <li v-for="item in group.items" :key="item.path" class="sna-cards__cell">
            <router-link :to="item.path" class="sna-card">
              <div class="sna-card__img" :style="cardBg(item)">
                <span v-if="item.primaryCategory" class="sn-cat-tag" :style="catStyle(item)">{{
                  item.categoryLabel
                }}</span>
              </div>
              <div class="sna-card__body">
                <h3 class="sna-card__title">{{ item.title }}</h3>
                <p class="sna-card__deck">{{ item.description }}</p>
                <div class="sn-meta">
                  <span v-if="item.author" class="sn-meta__author">{{ item.author }}</span>
                  <span v-if="item.author && item.date" class="sn-meta__dot">&middot;</span>
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
import { computed, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useIsEn } from '../composables/useIsEn';
import type { ArticlesData } from '../utils/types';
import {
  buildSpaceNewsDirectoryView,
  type SpaceNewsArticleView,
  type SpaceNewsCategoryMeta,
} from '../utils/spaceNewsDirectoryView';
import { articleCardBackground, formatArticleDate } from '../utils/spaceNewsPresentation';
import { spaceNewsLabels } from '../utils/spaceNewsLabels';

const isEn = useIsEn();
const route = useRoute();
const activeFilter = ref('all');

const articlesData = ref<ArticlesData | null>(null);
const categoryMeta = ref<SpaceNewsCategoryMeta>({});
const fetchError = ref(false);

onMounted(async () => {
  try {
    const response = await fetch('/space-news-articles.json');
    const data = (await response.json()) as ArticlesData;
    articlesData.value = data;
    categoryMeta.value = data.categoryMeta ?? {};
  } catch {
    fetchError.value = true;
  }
});

// 从 URL query 读取分类过滤
watch(
  () => route.query.category,
  (cat) => {
    if (cat && typeof cat === 'string') {
      activeFilter.value = cat;
    } else {
      activeFilter.value = 'all';
    }
  },
  { immediate: true },
);

const directoryView = computed(() => {
  if (!articlesData.value) return null;
  return buildSpaceNewsDirectoryView({
    articles: isEn.value ? articlesData.value.en : articlesData.value.zh,
    locale: isEn.value ? 'en' : 'zh',
    categoryMeta: categoryMeta.value,
  });
});

const labels = computed(() => spaceNewsLabels.archive[isEn.value ? 'en' : 'zh']);
const usedCategories = computed(() => directoryView.value?.usedCategories ?? []);
const monthGroups = computed(() => directoryView.value?.monthGroups ?? []);

const homePath = computed(() => (isEn.value ? '/en/space-news/' : '/space-news/'));

const filteredGroups = computed(() => {
  if (activeFilter.value === 'all') return monthGroups.value;
  return monthGroups.value
    .map((group) => ({
      ...group,
      items: group.items.filter((article) => article.category?.includes(activeFilter.value)),
    }))
    .filter((group) => group.items.length > 0);
});

function catStyle(article: SpaceNewsArticleView) {
  return { background: article.categoryColor, color: '#fff' };
}

function cardBg(article: SpaceNewsArticleView) {
  return articleCardBackground(article);
}

function formatDate(raw: string | null) {
  return formatArticleDate(raw, isEn.value ? 'en' : 'zh');
}
</script>

<style lang="scss" scoped>
.sn-archive {
  width: 100%;
  min-height: 60vh;
  background: var(--vp-c-bg);
}

.sna-hero {
  background: var(--sn-space-gradient);
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
  font-weight: 700;
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
  color: var(--sn-on-space-accent);
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
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-alt);
  border-radius: 20px;
  padding: 0.35rem 0.85rem;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  color: var(--vp-c-text-mute);
  transition: all 0.15s;

  &:hover {
    border-color: var(--vp-c-text-subtle);
  }

  &.active {
    background: var(--vp-c-accent-bg);
    border-color: var(--vp-c-accent-bg);
    color: var(--vp-c-accent-text);
  }
}

/* ---- Group ---- */
.sna-group {
  margin-bottom: 2.5rem;
}

.sna-group__title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text);
  margin: 0 0 1rem;
  padding-bottom: 0.35rem;
  border-bottom: 2px solid var(--vp-c-border);
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
  background: var(--vp-c-bg-alt);
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--vp-c-border);
  transition:
    border-color 0.15s,
    box-shadow 0.15s;

  &:hover {
    border-color: var(--vp-c-accent);
    box-shadow: var(--shadow-glow);
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
  font-weight: 600;
  line-height: 1.35;
  margin: 0 0 0.35rem;
  color: var(--vp-c-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.sna-card__deck {
  font-size: 0.82rem;
  line-height: 1.45;
  color: var(--vp-c-text-mute);
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
  color: var(--vp-c-text-mute);
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
  background: var(--vp-c-bg-alt);
  border: 1px dashed var(--vp-c-border-hard);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: var(--vp-c-text-mute);
}
</style>
