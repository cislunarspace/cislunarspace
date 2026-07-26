<template>
  <div
    class="article-hero"
    :class="{ 'article-hero--img': imageUrl, 'article-hero--plain': !imageUrl }"
  >
    <div v-if="imageUrl" class="article-hero__bg">
      <img :src="imageUrl" :alt="title" />
    </div>
    <div v-if="imageUrl" class="article-hero__overlay" />
    <div class="article-hero__content">
      <span v-if="categoryLabel" class="article-hero__tag scroll-reveal" :style="tagStyle">{{
        categoryLabel
      }}</span>
      <h1 class="article-hero__title scroll-reveal scroll-reveal-delay-1">{{ title }}</h1>
      <div
        v-if="author || displayDate"
        class="article-hero__meta scroll-reveal scroll-reveal-delay-2"
      >
        <span v-if="author">{{ author }}</span>
        <span v-if="author && displayDate" class="article-hero__dot">&middot;</span>
        <time v-if="displayDate">{{ displayDate }}</time>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import {
  formatArticleDate,
  resolveCategoryColor,
  resolveCategoryLabel,
} from '../utils/spaceNewsPresentation';
import type { SpaceNewsCategoryMeta } from '../utils/spaceNewsDirectoryView';

const props = defineProps<{
  title: string;
  imageUrl: string | null;
  author?: string | null;
  date?: string | null;
  category?: string[] | null;
  isEn?: boolean;
}>();

const locale = computed<'zh' | 'en'>(() => (props.isEn ? 'en' : 'zh'));

const categoryMeta = ref<SpaceNewsCategoryMeta>({});
onMounted(async () => {
  try {
    const res = await fetch('/space-news-articles.json');
    if (res.ok) {
      const data = await res.json();
      categoryMeta.value = data.categoryMeta ?? {};
    }
  } catch {
    // SSR 或网络失败时 categoryMeta 保持 {}，函数会返回原始 category key
  }
});

const categoryLabel = computed(() =>
  resolveCategoryLabel(props.category ?? null, locale.value, categoryMeta.value),
);

const tagStyle = computed(() => ({
  background: resolveCategoryColor(props.category ?? null, categoryMeta.value),
  color: '#fff',
}));

const displayDate = computed(() => {
  if (!props.date) return '';
  // Empty-string for missing date preserved to keep the v-if conditional behaviour;
  // formatArticleDate would return '—' for null.
  return formatArticleDate(props.date, locale.value, 'long');
});
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
  background: var(--sn-space-gradient);
  padding: 2rem 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(1.5px 1.5px at 10% 20%, rgba(255, 255, 255, 0.25), transparent),
      radial-gradient(1px 1px at 30% 60%, rgba(255, 255, 255, 0.2), transparent),
      radial-gradient(2px 2px at 50% 30%, rgba(255, 255, 255, 0.3), transparent),
      radial-gradient(1px 1px at 70% 70%, rgba(255, 255, 255, 0.15), transparent),
      radial-gradient(1.5px 1.5px at 90% 40%, rgba(255, 255, 255, 0.25), transparent);
    pointer-events: none;
    animation: twinkle 4s ease-in-out infinite alternate;
  }

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
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
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
