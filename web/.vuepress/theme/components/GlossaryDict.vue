<template>
  <div class="glossary-dict">
    <div class="dict-toolbar">
      <input v-model="keyword" class="dict-search" type="search" placeholder="搜索术语（中英）…" />
      <div class="dict-cats">
        <button class="dict-chip" :class="{ active: activeCat === null }" @click="activeCat = null">
          全部 ({{ totalCount }})
        </button>
        <button
          v-for="c in categories"
          :key="c.slug"
          class="dict-chip"
          :class="{ active: activeCat === c.slug }"
          @click="activeCat = c.slug"
        >
          {{ c.label }} ({{ c.entries.length }})
        </button>
      </div>
    </div>

    <p v-if="error" class="dict-msg">{{ error }}</p>
    <p v-else-if="!ready" class="dict-msg">加载中…</p>
    <template v-else>
      <p v-if="autoHide && !hasQuery" class="dict-msg">输入关键词或选择分类开始检索。</p>
      <section v-for="c in visibleCategories" :key="c.slug" class="dict-section">
        <h3 :id="c.slug">
          {{ c.label }}<span class="dict-count">（{{ c.entries.length }}）</span>
        </h3>
        <div v-for="e in filtered(c.entries)" :key="e.url || e.slug" class="dict-entry">
          <div class="dict-titles">
            <a v-if="e.url" class="dict-title" :href="e.url">{{ e.title }}</a>
            <span v-else class="dict-title">{{ e.title }}</span>
            <span v-if="e.otherTitle" class="dict-other">{{ e.otherTitle }}</span>
          </div>
          <p v-if="e.definition" class="dict-def">{{ e.definition }}</p>
        </div>
        <p v-if="filtered(c.entries).length === 0" class="dict-msg">本分类无匹配词条。</p>
      </section>
      <p v-if="matchCount === 0 && (!autoHide || hasQuery)" class="dict-msg">没有匹配的词条。</p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

interface DictEntry {
  slug: string;
  title: string;
  otherTitle: string | null;
  definition: string;
  url?: string;
  keywords?: string[];
  aliases?: string[];
}
interface DictCategory {
  slug: string;
  label: string;
  entries: DictEntry[];
}

const keyword = ref('');
const activeCat = ref<string | null>(null);
const categories = ref<DictCategory[]>([]);
const ready = ref(false);
const error = ref('');

const props = withDefaults(defineProps<{ autoHide?: boolean }>(), { autoHide: false });

const totalCount = computed(() => categories.value.reduce((n, c) => n + c.entries.length, 0));

const hasQuery = computed(() => keyword.value.trim() !== '' || activeCat.value !== null);

const visibleCategories = computed(() => {
  if (props.autoHide && !hasQuery.value) return [];
  return activeCat.value === null
    ? categories.value
    : categories.value.filter((c) => c.slug === activeCat.value);
});

function filtered(entries: DictEntry[]): DictEntry[] {
  const kw = keyword.value.trim().toLowerCase();
  if (!kw) return entries;
  return entries.filter(
    (e) =>
      e.title.toLowerCase().includes(kw) ||
      (e.otherTitle ?? '').toLowerCase().includes(kw) ||
      (e.keywords ?? []).some((k) => k.toLowerCase().includes(kw)) ||
      (e.aliases ?? []).some((a) => a.toLowerCase().includes(kw)) ||
      e.definition.toLowerCase().includes(kw),
  );
}

const matchCount = computed(() =>
  visibleCategories.value.reduce((n, c) => n + filtered(c.entries).length, 0),
);

onMounted(async () => {
  try {
    const res = await fetch('/glossary-dictionary.json', { cache: 'no-store' });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as { categories: DictCategory[] };
    categories.value = data.categories;
    ready.value = true;
  } catch (err) {
    error.value = `词典数据加载失败：${err instanceof Error ? err.message : err}`;
  }
});
</script>

<style scoped>
.glossary-dict {
  margin-top: 1rem;
}

.dict-toolbar {
  position: sticky;
  top: 3rem;
  z-index: 10;
  padding: 0.7rem 0.85rem;
  background: var(--c-bg-lighter);
  border: 1px solid var(--c-border);
  border-radius: 12px;
}

.dict-search {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0.9rem;
  font-size: 1rem;
  color: var(--c-text);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-md);
  outline: none;
  transition: border-color 0.2s ease;
}

.dict-search::placeholder {
  color: var(--vp-c-text-subtle);
}

.dict-search:focus {
  border-color: var(--vp-c-accent);
  outline: 2px solid var(--vp-c-accent);
  outline-offset: 2px;
}

.dict-cats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.6rem;
}

.dict-chip {
  padding: 0.18rem 0.8rem;
  font-size: 0.85rem;
  color: var(--vp-c-text-mute);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.dict-chip:hover {
  color: var(--vp-c-text);
  border-color: var(--vp-c-border-hard);
}

.dict-chip:focus-visible {
  outline: 2px solid var(--vp-c-accent);
  outline-offset: 2px;
}

.dict-chip.active {
  color: var(--vp-c-accent-text);
  background: var(--vp-c-accent);
  border-color: var(--vp-c-accent);
}

.dict-chip.active:hover {
  background: var(--vp-c-accent-hover);
  border-color: var(--vp-c-accent-hover);
}

.dict-section {
  margin-top: 1.6rem;
}

.dict-count {
  color: var(--vp-c-text-mute);
  font-weight: normal;
  font-size: 0.9em;
}

.dict-entry {
  padding: 0.75rem 0.9rem;
  margin-bottom: 0.5rem;
  background: var(--c-bg-lighter);
  border: 1px solid var(--c-border);
  border-radius: var(--radius-lg);
}

.dict-titles {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
}

.dict-title {
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--c-text);
}

a.dict-title {
  color: inherit;
  text-decoration: none;
}

a.dict-title:hover {
  color: var(--c-link);
  text-decoration: underline;
}

a.dict-title:focus-visible {
  border-radius: var(--radius-sm);
  outline: 2px solid var(--vp-c-accent);
  outline-offset: 2px;
}

.dict-other {
  color: var(--vp-c-text-mute);
  font-size: 0.88rem;
}

.dict-def {
  margin: 0.3rem 0 0;
  color: var(--vp-c-text-mute);
  font-size: 0.92rem;
  line-height: 1.65;
}

.dict-msg {
  color: var(--vp-c-text-mute);
  padding: 0.8rem 0;
}
</style>
