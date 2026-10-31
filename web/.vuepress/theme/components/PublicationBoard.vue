<template>
  <div class="publication-board">
    <template v-if="error">
      <div class="pub-error" role="alert">
        <p>文献数据加载失败，请稍后重试。</p>
        <button type="button" class="pub-btn" @click="load">重新加载</button>
      </div>
    </template>

    <div
      v-else-if="!ready"
      class="pub-skeleton"
      aria-busy="true"
      aria-label="正在加载文献数据"
    ></div>

    <template v-else>
      <div v-if="filtered.length" class="pub-stats">
        <div class="pub-stat">
          <span class="pub-stat-value">{{ filtered.length }}</span>
          <span class="pub-stat-label">文献总数</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat-value">{{ venueCount }}</span>
          <span class="pub-stat-label">出版载体</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat-value">{{ yearCount }}</span>
          <span class="pub-stat-label">覆盖年份</span>
        </div>
        <div class="pub-stat">
          <span class="pub-stat-value">{{ completenessPercent }}%</span>
          <span class="pub-stat-label">字段完整率</span>
        </div>
      </div>

      <div class="pub-toolbar">
        <div role="tablist" class="pub-view-tabs" aria-label="视图切换" @keydown="onTablistKeydown">
          <button
            v-for="tab in VIEW_TABS"
            :id="`pub-view-${tab.value}`"
            :key="tab.value"
            ref="tabButtons"
            type="button"
            role="tab"
            class="pub-pill"
            :class="{ 'is-active': state.view === tab.value }"
            :aria-selected="state.view === tab.value"
            :tabindex="state.view === tab.value ? 0 : -1"
            @click="setView(tab.value)"
          >
            {{ tab.label }}
          </button>
        </div>
        <div
          v-if="state.view === 'board'"
          class="pub-group-tabs"
          role="group"
          aria-label="分组方式"
        >
          <button
            v-for="option in GROUP_TABS"
            :key="option.value"
            type="button"
            class="pub-pill pub-pill-sm"
            :class="{ 'is-active': state.group === option.value }"
            :aria-pressed="state.group === option.value"
            @click="setGroup(option.value)"
          >
            {{ option.label }}
          </button>
        </div>
      </div>

      <div class="pub-filters">
        <label class="pub-filter pub-filter-query">
          <span class="pub-filter-label">关键词</span>
          <input
            type="search"
            :value="state.query"
            placeholder="标题、作者、载体、DOI"
            @input="setFilter({ query: ($event.target as HTMLInputElement).value })"
          />
        </label>
        <label class="pub-filter">
          <span class="pub-filter-label">出版载体</span>
          <select :value="state.venue" @change="setFilter({ venue: readSelect($event) })">
            <option value="">全部载体</option>
            <option v-for="opt in venueOptList" :key="opt.key" :value="opt.key">
              {{ opt.label }}
            </option>
          </select>
        </label>
        <label class="pub-filter">
          <span class="pub-filter-label">年份</span>
          <select :value="state.year" @change="setFilter({ year: readSelect($event) })">
            <option value="">全部年份</option>
            <option v-for="opt in yearOptList" :key="opt.key" :value="opt.key">
              {{ opt.label }}
            </option>
          </select>
        </label>
        <label class="pub-filter">
          <span class="pub-filter-label">月份</span>
          <select :value="state.month" @change="setFilter({ month: readSelect($event) })">
            <option value="">全部月份</option>
            <option v-for="opt in monthOptList" :key="opt.key" :value="opt.key">
              {{ opt.label }}
            </option>
          </select>
        </label>
        <button type="button" class="pub-btn" @click="clearFilters">清除筛选</button>
      </div>

      <p class="pub-summary">
        共 <span class="pub-count">{{ filtered.length }}</span> 条文献
      </p>

      <div v-if="!filtered.length" class="pub-empty">
        <p>没有符合当前筛选条件的文献。</p>
        <button type="button" class="pub-btn" @click="clearFilters">清除筛选</button>
      </div>

      <div v-else-if="state.view === 'board'" class="pub-board">
        <section v-for="group in boardGroups" :key="group.key" class="pub-column">
          <header class="pub-column-head">
            <h3 class="pub-column-title">{{ group.label }}</h3>
            <span class="pub-column-count">{{ group.entries.length }}</span>
            <button
              type="button"
              class="pub-column-filter"
              :aria-label="`只看${group.label}`"
              @click="applyGroupFilter(group.key)"
            >
              筛选
            </button>
          </header>
          <article v-for="entry in visibleEntries(group)" :key="entry.id" class="pub-card">
            <p class="pub-card-title">{{ entry.title }}</p>
            <p v-if="entry.authors.length" class="pub-card-authors">
              {{ displayAuthors(entry) }}
            </p>
            <p class="pub-card-meta">
              <span>{{ formatWhen(entry) }}</span>
              <span v-if="entry.venue">{{ entry.venue }}</span>
            </p>
            <details class="pub-card-record">
              <summary>著录信息（GB/T 7714）</summary>
              <p>{{ entry.formatted }}</p>
            </details>
            <p v-if="entry.doi || entry.url" class="pub-card-links">
              <a
                v-if="entry.doi"
                :href="publicationDoiUrl(entry.doi)"
                target="_blank"
                rel="noopener noreferrer"
                >DOI</a
              >
              <a v-if="entry.url" :href="entry.url" target="_blank" rel="noopener noreferrer"
                >原文链接</a
              >
            </p>
          </article>
          <button
            v-if="group.entries.length > visibleCount(group.key)"
            type="button"
            class="pub-column-more"
            @click="showMore(group.key)"
          >
            再显示 12 条（剩余 {{ group.entries.length - visibleCount(group.key) }} 条）
          </button>
        </section>
      </div>

      <div v-else-if="state.view === 'table'" class="pub-table-area">
        <table v-if="!isNarrow" class="pub-table">
          <thead>
            <tr>
              <th scope="col">题名</th>
              <th scope="col">作者</th>
              <th scope="col">出版载体</th>
              <th scope="col">发表时间</th>
              <th scope="col">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in pageEntries" :key="entry.id">
              <td>
                <p class="pub-table-title">{{ entry.title }}</p>
                <p class="pub-table-type">{{ typeLabel(entry.type) }}</p>
              </td>
              <td>{{ displayAuthors(entry) }}</td>
              <td>{{ entry.venue ?? '未注明载体' }}</td>
              <td>{{ formatWhen(entry) }}</td>
              <td>
                <p class="pub-card-links">
                  <a
                    v-if="entry.doi"
                    :href="publicationDoiUrl(entry.doi)"
                    target="_blank"
                    rel="noopener noreferrer"
                    >DOI</a
                  >
                  <a v-if="entry.url" :href="entry.url" target="_blank" rel="noopener noreferrer"
                    >原文链接</a
                  >
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <ul v-else class="pub-table-cards">
          <li v-for="entry in pageEntries" :key="entry.id" class="pub-card">
            <p class="pub-card-title">{{ entry.title }}</p>
            <p class="pub-table-type">{{ typeLabel(entry.type) }}</p>
            <p v-if="entry.authors.length" class="pub-card-authors">
              {{ displayAuthors(entry) }}
            </p>
            <p class="pub-card-meta">
              <span>{{ formatWhen(entry) }}</span>
              <span v-if="entry.venue">{{ entry.venue }}</span>
            </p>
            <p v-if="entry.doi || entry.url" class="pub-card-links">
              <a
                v-if="entry.doi"
                :href="publicationDoiUrl(entry.doi)"
                target="_blank"
                rel="noopener noreferrer"
                >DOI</a
              >
              <a v-if="entry.url" :href="entry.url" target="_blank" rel="noopener noreferrer"
                >原文链接</a
              >
            </p>
          </li>
        </ul>
        <nav class="pub-pagination" aria-label="表格分页">
          <button
            type="button"
            class="pub-btn"
            :disabled="state.page <= 1"
            @click="goPage(state.page - 1)"
          >
            上一页
          </button>
          <span class="pub-pagination-status"> 第 {{ state.page }} / {{ totalPages }} 页 </span>
          <button
            type="button"
            class="pub-btn"
            :disabled="state.page >= totalPages"
            @click="goPage(state.page + 1)"
          >
            下一页
          </button>
        </nav>
      </div>

      <div v-else class="pub-charts">
        <section class="pub-chart" aria-label="按年份发表数量">
          <h3 class="pub-chart-title">按年份发表数量</h3>
          <ul class="pub-chart-list">
            <li v-for="row in yearCounts" :key="row.key" class="pub-chart-row">
              <span class="pub-chart-label">{{ row.label }}</span>
              <span class="pub-chart-count">{{ row.count }}</span>
              <span class="pub-chart-percent">{{ percentOf(row.count) }}</span>
              <span class="pub-chart-track" aria-hidden="true">
                <span
                  class="pub-chart-bar"
                  :style="{ width: barWidth(row.count, maxYearCount) }"
                ></span>
              </span>
              <button type="button" class="pub-btn" @click="viewBy('year', row.key)">
                查看文献
              </button>
            </li>
          </ul>
        </section>
        <section class="pub-chart" aria-label="按月份发表数量">
          <h3 class="pub-chart-title">按月份发表数量</h3>
          <ul class="pub-chart-list">
            <li v-for="row in monthCounts" :key="row.key" class="pub-chart-row">
              <span class="pub-chart-label">{{ row.label }}</span>
              <span class="pub-chart-count">{{ row.count }}</span>
              <span class="pub-chart-percent">{{ percentOf(row.count) }}</span>
              <span class="pub-chart-track" aria-hidden="true">
                <span
                  class="pub-chart-bar"
                  :style="{ width: barWidth(row.count, maxMonthCount) }"
                ></span>
              </span>
              <button type="button" class="pub-btn" @click="viewBy('month', row.key)">
                查看文献
              </button>
            </li>
          </ul>
        </section>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { LocationQuery } from 'vue-router';
import {
  buildPublicationCounts,
  filterPublications,
  groupPublications,
  monthOptions,
  publicationDoiUrl,
  readPublicationState,
  venueOptions,
  writePublicationState,
  yearOptions,
} from '../utils/publications.ts';
import type {
  PublicationEntry,
  PublicationFilters,
  PublicationGroup,
  PublicationGroupResult,
  PublicationView,
} from '../utils/publications.ts';

const PAGE_SIZE = 12;
const TABLE_PAGE_SIZE = 50;

const VIEW_TABS: { value: PublicationView; label: string }[] = [
  { value: 'board', label: '看板' },
  { value: 'table', label: '表格' },
  { value: 'charts', label: '统计图' },
];
const GROUP_TABS: { value: PublicationGroup; label: string }[] = [
  { value: 'venue', label: '按载体' },
  { value: 'year', label: '按年份' },
  { value: 'month', label: '按月份' },
];

const TYPE_LABELS: Record<string, string> = {
  'article-journal': '期刊论文',
  'article-magazine': '杂志文章',
  'paper-conference': '会议论文',
  book: '图书',
  chapter: '图书章节',
  thesis: '学位论文',
  report: '报告',
  webpage: '网页',
  patent: '专利',
  document: '文献',
};

const route = useRoute();
const router = useRouter();

const entries = ref<PublicationEntry[]>([]);
const ready = ref(false);
const error = ref(false);
const isNarrow = ref(false);

const state = reactive(readPublicationState(queryToSearch(route.query)));
const expanded = ref<Record<string, number>>({});
const tabButtons = ref<HTMLButtonElement[]>([]);

let narrowQuery: MediaQueryList | null = null;

function queryToSearch(query: LocationQuery): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(query)) {
    if (typeof value === 'string') {
      params.set(key, value);
    } else if (Array.isArray(value) && typeof value[0] === 'string') {
      params.set(key, value[0]);
    }
  }
  return params.toString();
}

async function load() {
  error.value = false;
  ready.value = false;
  try {
    const res = await fetch('/publications.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { entries: PublicationEntry[] };
    entries.value = data.entries;
    ready.value = true;
  } catch {
    error.value = true;
  }
}

onMounted(() => {
  narrowQuery = window.matchMedia('(max-width: 719px)');
  isNarrow.value = narrowQuery.matches;
  narrowQuery.addEventListener('change', onNarrowChange);
  load();
});

function onNarrowChange() {
  isNarrow.value = narrowQuery?.matches ?? false;
}

onBeforeUnmount(() => {
  narrowQuery?.removeEventListener('change', onNarrowChange);
});

const filtered = computed(() => filterPublications(entries.value, state));
const venueOptList = computed(() => venueOptions(entries.value));
const yearOptList = computed(() => yearOptions(entries.value));
const monthOptList = computed(() => monthOptions(entries.value));

const venueCount = computed(
  () => new Set(filtered.value.map((entry) => entry.venueKey).filter(Boolean)).size,
);
const yearCount = computed(
  () => new Set(filtered.value.map((entry) => entry.year).filter(Boolean)).size,
);
const completenessPercent = computed(() => {
  const total = filtered.value.length;
  if (!total) return 0;
  const complete = filtered.value.filter(
    (entry) => entry.year !== null && entry.month !== null && entry.venueKey !== null,
  ).length;
  return Math.round((complete / total) * 100);
});

const boardGroups = computed<PublicationGroupResult[]>(() =>
  groupPublications(filtered.value, state.group),
);

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / TABLE_PAGE_SIZE)));
const pageEntries = computed(() => {
  const start = (state.page - 1) * TABLE_PAGE_SIZE;
  return filtered.value.slice(start, start + TABLE_PAGE_SIZE);
});

const yearCounts = computed(() => buildPublicationCounts(filtered.value, 'year'));
const monthCounts = computed(() => buildPublicationCounts(filtered.value, 'month'));
const maxYearCount = computed(() => Math.max(...yearCounts.value.map((row) => row.count), 1));
const maxMonthCount = computed(() => Math.max(...monthCounts.value.map((row) => row.count), 1));

function visibleCount(key: string): number {
  return expanded.value[key] ?? PAGE_SIZE;
}

function visibleEntries(group: PublicationGroupResult): PublicationEntry[] {
  return group.entries.slice(0, visibleCount(group.key));
}

function showMore(key: string) {
  expanded.value = { ...expanded.value, [key]: visibleCount(key) + PAGE_SIZE };
}

function readSelect(event: Event): string {
  return (event.target as HTMLSelectElement).value;
}

function setFilter(patch: Partial<PublicationFilters>) {
  Object.assign(state, patch);
  state.page = 1;
}

function setView(view: PublicationView) {
  state.view = view;
}

function setGroup(group: PublicationGroup) {
  state.group = group;
}

function goPage(page: number) {
  state.page = Math.min(Math.max(1, page), totalPages.value);
}

function clearFilters() {
  setFilter({ query: '', venue: '', year: '', month: '' });
}

function applyGroupFilter(key: string) {
  if (state.group === 'venue') setFilter({ venue: key });
  else if (state.group === 'year') setFilter({ year: key });
  else setFilter({ month: key });
}

function viewBy(dimension: 'year' | 'month', key: string) {
  setFilter(dimension === 'year' ? { year: key } : { month: key });
  state.view = 'table';
}

function onTablistKeydown(event: KeyboardEvent) {
  if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
  event.preventDefault();
  const delta = event.key === 'ArrowRight' ? 1 : -1;
  const index = VIEW_TABS.findIndex((tab) => tab.value === state.view);
  const next = (index + delta + VIEW_TABS.length) % VIEW_TABS.length;
  setView(VIEW_TABS[next].value);
  tabButtons.value[next]?.focus();
}

function displayAuthors(entry: PublicationEntry): string {
  const head = entry.authors.slice(0, 3).join('、');
  return entry.authors.length > 3 ? `${head} 等` : head;
}

function formatWhen(entry: PublicationEntry): string {
  if (entry.year !== null && entry.month !== null) return `${entry.year} 年 ${entry.month} 月`;
  if (entry.year !== null) return `${entry.year} 年`;
  if (entry.month !== null) return `${entry.month} 月`;
  return '发表时间未注明';
}

function typeLabel(type: string): string {
  return TYPE_LABELS[type] ?? type;
}

function percentOf(count: number): string {
  return `${Math.round((count / filtered.value.length) * 100)}%`;
}

function barWidth(count: number, max: number): string {
  return `${Math.round((count / max) * 100)}%`;
}

// 浏览器后退、前进与分享链接恢复状态；自身同步产生的查询不回写。
watch(
  () => route.query,
  (query) => {
    const next = readPublicationState(queryToSearch(query));
    if (JSON.stringify(next) !== JSON.stringify({ ...state })) {
      Object.assign(state, next);
    }
  },
);

watch(
  () => ({ ...state }),
  (current) => {
    const query = writePublicationState(current);
    if (queryToSearch(route.query) !== new URLSearchParams(query).toString()) {
      // 显式带 path：只传 query 会被 VuePress dev 路由把当前路径改写成 %2F 编码的 .html
      router.replace({ path: route.path, query });
    }
  },
  { deep: true },
);

// 筛选或分组变化时重置各列展开数；结果变化导致当前页越界时收敛到最后有效页。
watch(
  () => [state.query, state.venue, state.year, state.month, state.group],
  () => {
    expanded.value = {};
  },
);

watch(totalPages, (pages) => {
  if (state.page > pages) state.page = pages;
});
</script>

<style scoped lang="scss">
.publication-board {
  --pub-focus: 2px solid var(--vp-c-accent);

  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  select:focus-visible,
  summary:focus-visible {
    outline: var(--pub-focus);
    outline-offset: 2px;
  }
}

.pub-btn {
  padding: 0.45rem 1rem;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-pill);
  background: var(--c-bg-light);
  color: var(--c-text);
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;

  &:hover:not(:disabled) {
    border-color: var(--vp-c-accent);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}

.pub-skeleton {
  height: 24rem;
  border-radius: 20px;
  background: var(--c-bg-lighter);
}

.pub-error,
.pub-empty {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 1.5rem;
  border-radius: 20px;
  background: var(--c-bg-lighter);

  p {
    margin: 0;
  }
}

.pub-stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.pub-stat {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 1rem 1.25rem;
  border-radius: 20px;
  background: var(--c-bg-lighter);
}

.pub-stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text);
}

.pub-stat-label {
  font-size: 0.8125rem;
  color: var(--vp-c-text-mute);
}

.pub-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 20px;
  background: var(--c-bg-lighter);
  margin-bottom: 0.75rem;
}

.pub-view-tabs,
.pub-group-tabs {
  display: flex;
  gap: 0.25rem;
}

.pub-pill {
  padding: 0.45rem 1.1rem;
  border: 0;
  border-radius: var(--radius-pill);
  background: transparent;
  color: var(--vp-c-text-mute);
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover {
    color: var(--vp-c-text);
  }

  &.is-active {
    background: var(--vp-c-accent);
    color: var(--vp-c-accent-text);
  }
}

.pub-pill-sm {
  padding: 0.35rem 0.85rem;
  font-size: 0.8125rem;
}

.pub-filters {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 20px;
  background: var(--c-bg-lighter);
  margin-bottom: 0.75rem;
}

.pub-filter {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
}

.pub-filter-label {
  font-size: 0.8125rem;
  color: var(--vp-c-text-mute);
}

.pub-filter input,
.pub-filter select {
  min-width: 9rem;
  max-width: 100%;
  width: 14rem;
  padding: 0.45rem 0.7rem;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  background: var(--c-bg-light);
  color: var(--c-text);
  font-size: 0.875rem;
}

.pub-filter-query {
  flex: 1 1 16rem;

  input {
    width: 100%;
  }
}

.pub-summary {
  margin: 0 0 1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-mute);
}

.pub-count {
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text);
  font-weight: 600;
}

.pub-board {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  -webkit-overflow-scrolling: touch;
}

.pub-column {
  flex: 0 0 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--c-bg-lighter);
  border: 0;
  border-radius: 20px;
  min-width: 0;
}

.pub-column-head {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pub-column-title {
  flex: 1;
  margin: 0;
  min-width: 0;
  overflow-wrap: anywhere;
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--vp-c-text);
}

.pub-column-count {
  font-variant-numeric: tabular-nums;
  font-size: 0.8125rem;
  color: var(--vp-c-text-mute);
}

.pub-column-filter {
  padding: 0.15rem 0.6rem;
  border: 1px solid var(--c-border);
  border-radius: var(--radius-pill);
  background: var(--c-bg-light);
  color: var(--vp-c-text-mute);
  font-size: 0.75rem;
  cursor: pointer;

  &:hover {
    color: var(--vp-c-text);
    border-color: var(--vp-c-accent);
  }
}

.pub-card {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 1rem;
  background: var(--c-bg-light);
  border: 1px solid var(--c-border);
  border-radius: 12px;
  min-width: 0;
}

.pub-card-title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.45;
  color: var(--vp-c-text);
  overflow-wrap: anywhere;
}

.pub-card-authors {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--vp-c-text-mute);
  overflow-wrap: anywhere;
}

.pub-card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
  margin: 0;
  font-size: 0.8125rem;
  color: var(--vp-c-text-mute);
}

.pub-card-record {
  font-size: 0.8125rem;
  color: var(--vp-c-text-mute);

  summary {
    cursor: pointer;
    color: var(--c-link);
  }

  p {
    margin: 0.5rem 0 0;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }
}

.pub-card-links {
  display: flex;
  gap: 0.75rem;
  margin: 0;
  font-size: 0.8125rem;

  a {
    color: var(--c-link);
  }
}

.pub-column-more {
  padding: 0.45rem;
  border: 1px dashed var(--c-border);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--vp-c-text-mute);
  font-size: 0.8125rem;
  cursor: pointer;

  &:hover {
    color: var(--vp-c-text);
    border-color: var(--vp-c-accent);
  }
}

.pub-table-area {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.pub-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.875rem;

  th,
  td {
    padding: 0.65rem 0.9rem;
    border-bottom: 1px solid var(--c-border);
    text-align: start;
    vertical-align: top;
    overflow-wrap: anywhere;
  }

  thead th {
    background: var(--vp-c-bg-elv);
    color: var(--vp-c-text);
    font-weight: 600;
    border-bottom: 1px solid var(--c-border-dark);
  }
}

.pub-table-title {
  margin: 0;
  font-weight: 600;
  color: var(--vp-c-text);
}

.pub-table-type {
  margin: 0.15rem 0 0;
  font-size: 0.75rem;
  color: var(--vp-c-text-subtle);
}

.pub-table-cards {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.pub-pagination {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.pub-pagination-status {
  font-variant-numeric: tabular-nums;
  font-size: 0.875rem;
  color: var(--vp-c-text-mute);
}

.pub-charts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pub-chart {
  padding: 1.25rem;
  border-radius: 20px;
  background: var(--c-bg-lighter);
}

.pub-chart-title {
  margin: 0 0 1rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text);
}

.pub-chart-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.pub-chart-row {
  display: grid;
  grid-template-columns: 6rem 3.5rem 3.5rem 1fr auto;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
}

.pub-chart-label {
  color: var(--vp-c-text-mute);
}

.pub-chart-count,
.pub-chart-percent {
  font-variant-numeric: tabular-nums;
  color: var(--vp-c-text);
}

.pub-chart-percent {
  color: var(--vp-c-text-subtle);
}

.pub-chart-track {
  height: 0.625rem;
  border-radius: var(--radius-pill);
  background: var(--vp-c-control);
  overflow: hidden;
}

.pub-chart-bar {
  display: block;
  height: 100%;
  border-radius: var(--radius-pill);
  background: var(--vp-c-accent);
  transition: width 0.3s ease;
}

@media (max-width: 719px) {
  .pub-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pub-filters {
    flex-direction: column;
    align-items: stretch;
  }

  .pub-filter input,
  .pub-filter select {
    width: 100%;
  }

  .pub-chart-row {
    grid-template-columns: 4.5rem 3rem 3rem 1fr;
    gap: 0.5rem;

    .pub-btn {
      grid-column: 1 / -1;
      justify-self: start;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .publication-board *,
  .publication-board *::before,
  .publication-board *::after {
    transition: none !important;
    animation: none !important;
  }
}
</style>
