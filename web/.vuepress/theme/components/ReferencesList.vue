<template>
  <div class="references-root">
    <div v-if="loading" class="references-loading">Loading...</div>
    <div v-else-if="error" class="references-error">
      {{ error }}
    </div>
    <ol v-else class="references-list">
      <li
        v-for="(entry, key) in sortedEntries"
        :id="String(key)"
        :key="key"
        :class="['references-item', { 'cite-highlight': highlightedKey === key }]"
      >
        <span class="references-number">[{{ entry.number }}]</span>
        <span class="references-text">{{ entry.formatted }}</span>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';

interface BibliographyEntry {
  number: number;
  formatted: string;
}

interface BibliographyData {
  entries: Record<string, BibliographyEntry>;
  citedBy: Record<string, string[]>;
}

const loading = ref(true);
const error = ref<string | null>(null);
const data = ref<BibliographyData | null>(null);
const highlightedKey = ref<string | null>(null);

const sortedEntries = computed(() => {
  if (!data.value) return {};
  const entries = data.value.entries;
  return Object.keys(entries)
    .sort((a, b) => entries[a].number - entries[b].number)
    .reduce(
      (acc, key) => {
        acc[key] = entries[key];
        return acc;
      },
      {} as Record<string, BibliographyEntry>,
    );
});

onMounted(async () => {
  try {
    const response = await fetch('/bibliography.json');
    if (!response.ok) throw new Error('Failed to load bibliography');
    data.value = await response.json();
  } catch (e) {
    error.value = 'Failed to load bibliography data.';
  } finally {
    loading.value = false;
  }

  await nextTick();

  // Handle anchor highlight
  const hash = window.location.hash.slice(1);
  if (hash && data.value?.entries[hash]) {
    highlightedKey.value = hash;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    setTimeout(() => {
      highlightedKey.value = null;
    }, 2000);
  }
});
</script>

<style scoped>
.references-root {
  max-width: 52rem;
  margin: 0 auto;
  padding: 1rem 0;
}

.references-loading,
.references-error {
  text-align: center;
  padding: 2rem;
  color: var(--vp-c-text-mute);
}

.references-error {
  color: var(--c-danger);
}

.references-list {
  padding-left: 0;
  list-style: none;
}

.references-item {
  display: flex;
  gap: 0.6rem;
  padding: 0.7rem 0.85rem;
  margin: 0.4rem 0;
  background: var(--c-bg-lighter);
  border: 1px solid transparent;
  border-radius: var(--radius-lg);
  line-height: 1.7;
  transition:
    background-color 2s ease-out,
    border-color 2s ease-out,
    box-shadow 2s ease-out;
}

.references-number {
  flex-shrink: 0;
  color: var(--vp-c-text-mute);
  font-weight: 600;
  font-variant-numeric: tabular-nums;
  min-width: 2rem;
}

.references-text {
  color: var(--vp-c-text);
  word-break: break-word;
}

/* 覆盖 index.scss 中遗留的黄色高亮，深色主题同样使用中性色 */
.references-root .references-item.cite-highlight {
  background-color: color-mix(in oklab, var(--vp-c-accent) 12%, var(--c-bg-lighter));
  border-color: var(--vp-c-accent);
  box-shadow: inset 3px 0 0 var(--vp-c-accent);
}
</style>
