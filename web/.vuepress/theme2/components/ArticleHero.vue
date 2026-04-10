<template>
  <div class="article-hero" :class="{ 'article-hero--img': imageUrl, 'article-hero--plain': !imageUrl }">
    <div v-if="imageUrl" class="article-hero__bg">
      <img :src="imageUrl" :alt="title" />
    </div>
    <div v-if="imageUrl" class="article-hero__overlay" />
    <div class="article-hero__content">
      <span v-if="categoryLabel" class="article-hero__tag" :style="tagStyle">{{ categoryLabel }}</span>
      <h1 class="article-hero__title">{{ title }}</h1>
      <div v-if="author || displayDate" class="article-hero__meta">
        <span v-if="author">{{ author }}</span>
        <span v-if="author && displayDate" class="article-hero__dot">&middot;</span>
        <time v-if="displayDate">{{ displayDate }}</time>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { categoryMeta } from '../utils/categoryMeta'

const props = defineProps<{
  title: string
  imageUrl: string | null
  author?: string | null
  date?: string | null
  category?: string | string[] | null
  isEn?: boolean
}>()

const primaryCategory = computed(() => {
  if (!props.category) return null
  return Array.isArray(props.category) ? props.category[0] : props.category
})

const categoryLabel = computed(() => {
  if (!primaryCategory.value) return ''
  const meta = categoryMeta[primaryCategory.value]
  if (!meta) return primaryCategory.value
  return props.isEn ? meta.en : meta.zh
})

const tagStyle = computed(() => {
  const color = primaryCategory.value
    ? (categoryMeta[primaryCategory.value]?.color || '#64748b')
    : '#64748b'
  return { background: color, color: '#fff' }
})

const displayDate = computed(() => {
  if (!props.date) return ''
  const d = new Date(props.date)
  if (Number.isNaN(d.getTime())) return String(props.date)
  return props.isEn
    ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : d.toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
})
</script>

<style lang="scss" scoped>
.article-hero {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.article-hero--img {
  min-height: 280px;
  max-height: 420px;

  @media (max-width: 719px) {
    min-height: 220px;
    max-height: 360px;
  }
}

.article-hero--plain {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 55%, #0c4a6e 100%);
  padding: 2rem 0;

  @media (max-width: 719px) {
    padding: 1.5rem 0;
  }
}

.article-hero__bg {
  position: absolute;
  inset: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.article-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 23, 42, 0.88) 0%,
    rgba(15, 23, 42, 0.5) 45%,
    rgba(15, 23, 42, 0.15) 100%
  );
}

.article-hero__content {
  position: relative;
  z-index: 1;
  padding: 2.5rem 2.5rem;
  width: 100%;
  max-width: 860px;
  color: #fff;

  @media (max-width: 719px) {
    padding: 1.5rem 1.25rem;
  }
}

.article-hero--img .article-hero__content {
  padding-top: 4rem;

  @media (max-width: 719px) {
    padding-top: 3rem;
  }
}

.article-hero__tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.article-hero__title {
  font-size: clamp(1.4rem, 3.5vw, 2rem);
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 0.75rem;
  color: #fff;
  letter-spacing: -0.01em;
}

.article-hero__meta {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  opacity: 0.9;
  flex-wrap: wrap;
}

.article-hero__dot {
  opacity: 0.5;
}
</style>
