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
      <section v-for="c in visibleCategories" :key="c.slug" class="dict-section">
        <h3 :id="c.slug">
          {{ c.label }}<span class="dict-count">（{{ c.entries.length }}）</span>
        </h3>
        <div v-for="e in filtered(c.entries)" :key="e.slug" class="dict-entry">
          <div class="dict-titles">
            <span class="dict-title">{{ e.title }}</span>
            <span v-if="e.otherTitle" class="dict-other">{{ e.otherTitle }}</span>
          </div>
          <p v-if="e.definition" class="dict-def">{{ e.definition }}</p>
        </div>
        <p v-if="filtered(c.entries).length === 0" class="dict-msg">本分类无匹配词条。</p>
      </section>
      <p v-if="matchCount === 0" class="dict-msg">没有匹配的词条。</p>
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

const totalCount = computed(() => categories.value.reduce((n, c) => n + c.entries.length, 0));

const visibleCategories = computed(() =>
  activeCat.value === null
    ? categories.value
    : categories.value.filter((c) => c.slug === activeCat.value),
);

function filtered(entries: DictEntry[]): DictEntry[] {
  const kw = keyword.value.trim().toLowerCase();
  if (!kw) return entries;
  return entries.filter(
    (e) =>
      e.title.toLowerCase().includes(kw) ||
      (e.otherTitle ?? '').toLowerCase().includes(kw) ||
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
  background: var(--c-bg, #fff);
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--c-border, #e2e8f0);
}

.dict-search {
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem 0.9rem;
  font-size: 1rem;
  border: 1px solid var(--c-border, #dcdfe6);
  border-radius: 8px;
  outline: none;
}

.dict-search:focus {
  border-color: var(--c-brand, #2563eb);
}

.dict-cats {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.6rem;
}

.dict-chip {
  border: 1px solid var(--c-border, #e2e8f0);
  background: transparent;
  color: var(--c-text-light, #476582);
  border-radius: 999px;
  padding: 0.15rem 0.75rem;
  font-size: 0.85rem;
  cursor: pointer;
}

.dict-chip.active {
  background: var(--c-brand, #2563eb);
  border-color: var(--c-brand, #2563eb);
  color: #fff;
}

.dict-section {
  margin-top: 1.6rem;
}

.dict-count {
  color: var(--c-text-lighter, #90a4b7);
  font-weight: normal;
  font-size: 0.9em;
}

.dict-entry {
  padding: 0.7rem 0;
  border-bottom: 1px dashed var(--c-border-light, #eef1f4);
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
}

.dict-other {
  color: var(--c-text-lighter, #90a4b7);
  font-size: 0.88rem;
}

.dict-def {
  margin: 0.3rem 0 0;
  color: var(--c-text-light, #476582);
  font-size: 0.92rem;
  line-height: 1.65;
}

.dict-msg {
  color: var(--c-text-lighter, #90a4b7);
  padding: 0.8rem 0;
}
</style>
