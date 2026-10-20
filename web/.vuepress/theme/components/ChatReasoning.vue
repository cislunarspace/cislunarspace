<template>
  <details v-if="reasoningText" class="chat-reasoning" :open="autoOpen">
    <summary class="chat-reasoning-summary">{{ title }}</summary>
    <div ref="bodyRef" class="chat-reasoning-body">{{ reasoningText }}</div>
  </details>
</template>

<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue';
import { isNearBottom } from './chat-reasoning';

/**
 * 思考过程展示：流式期间（autoOpen 为真）自动展开并贴底跟随滚动，
 * 正文开始后由父级把 autoOpen 置假让位折叠，用户仍可手动展开回看。
 * 颜色变量同时兼容两套表面体系：AI 问答页的 --chat-* 与浮窗的 --ai-*。
 */
const props = defineProps<{
  reasoning: string;
  /** 流式期间是否自动展开。父级决定：正在加载且为本轮消息且正文未开始。 */
  autoOpen: boolean;
  title: string;
}>();

const bodyRef = ref<HTMLDivElement | null>(null);

const reasoningText = computed(() => String(props.reasoning ?? '').trim());

watch(
  () => props.reasoning,
  async () => {
    if (!props.autoOpen) return;
    const el = bodyRef.value;
    if (!el || !isNearBottom(el)) return;
    await nextTick();
    el.scrollTop = el.scrollHeight;
  },
);
</script>

<style scoped lang="scss">
.chat-reasoning {
  font-size: 0.8rem;
  line-height: 1.6;
  border: 1px solid var(--chat-border, var(--ai-border, #e2e8f0));
  border-radius: 10px;
  background: var(--chat-bg-secondary, var(--ai-bg-secondary, #f0f9ff));
  color: var(--chat-text-secondary, var(--ai-text-secondary, #475569));
  overflow: hidden;
  width: 100%;
}

.chat-reasoning-summary {
  padding: 0.4rem 0.7rem;
  cursor: pointer;
  font-weight: 600;
  color: var(--chat-text-primary, var(--ai-text-primary, #0f172a));
  list-style: none;
  font-size: 0.75rem;
}

.chat-reasoning-summary::-webkit-details-marker {
  display: none;
}

.chat-reasoning-body {
  padding: 0.4rem 0.7rem 0.6rem;
  border-top: 1px solid var(--chat-border, var(--ai-border, #e2e8f0));
  white-space: pre-wrap;
  word-break: break-word;
  max-height: min(14rem, 40vh);
  overflow-y: auto;
}
</style>
