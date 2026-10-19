<template>
  <div class="global-ai-assistant">
    <button
      v-if="!open"
      class="assistant-fab"
      type="button"
      :title="t('openAssistant')"
      :aria-label="t('openAssistant')"
      @click="openPanel"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10h16V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"
        />
        <circle cx="9" cy="14" r="1" fill="currentColor" />
        <circle cx="15" cy="14" r="1" fill="currentColor" />
      </svg>
    </button>

    <div v-else class="assistant-panel" role="dialog" :aria-label="t('assistantTitle')">
      <header class="assistant-header">
        <span class="assistant-header-title">{{ t('assistantTitle') }}</span>
        <div class="assistant-header-actions">
          <button
            class="assistant-icon-btn"
            type="button"
            :disabled="state.isLoading.value"
            :title="t('newChat')"
            :aria-label="t('newChat')"
            @click="actions.startNewChat"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </button>
          <button
            class="assistant-icon-btn"
            type="button"
            :class="{ active: historyOpen }"
            :title="t('historyToggle')"
            :aria-label="t('historyToggle')"
            @click="historyOpen = !historyOpen"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
          <button
            class="assistant-icon-btn"
            type="button"
            :title="t('closeAssistant')"
            :aria-label="t('closeAssistant')"
            @click="closePanel"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <div v-if="historyOpen" class="assistant-history">
        <p v-if="chatHistory.value.length === 0" class="assistant-history-empty">
          {{ t('historyEmpty') }}
        </p>
        <button
          v-for="(chat, idx) in chatHistory.value"
          :key="idx"
          type="button"
          class="assistant-history-item"
          @click="actions.switchChat(idx)"
        >
          {{ chat.title || '对话' }}
        </button>
      </div>

      <p v-if="readingContext" class="assistant-reading" :title="readingContext.path">
        {{ t('readingLabel') }}：《{{ readingContext.title }}》
      </p>

      <div ref="messagesContainer" class="assistant-messages" @click="onMessagesClick">
        <p v-if="state.messages.value.length === 0" class="assistant-welcome">
          {{ t('assistantWelcome') }}
        </p>
        <div
          v-for="(message, index) in state.messages.value"
          :key="index"
          :class="['assistant-msg', message.role === 'user' ? 'is-user' : 'is-assistant']"
        >
          <div v-if="message.role === 'user'" class="assistant-bubble assistant-bubble-user">
            {{ ui.getMessageText(message, index, state.messages.value, state.isLoading.value) }}
          </div>
          <template v-else>
            <ul v-if="message.processSteps && message.processSteps.length" class="assistant-steps">
              <li
                v-for="(ps, pi) in message.processSteps"
                :key="pi"
                :class="['assistant-step', 'assistant-step--' + (ps.status || 'done')]"
              >
                {{ ps.label
                }}<span v-if="ps.detail" class="assistant-step-detail">{{ ps.detail }}</span>
              </li>
            </ul>
            <details
              v-if="message.reasoning && String(message.reasoning).trim()"
              class="assistant-reasoning"
            >
              <summary>{{ t('reasoningTitle') }}</summary>
              <div class="assistant-reasoning-body">{{ message.reasoning }}</div>
            </details>
            <div class="assistant-bubble assistant-bubble-ai">
              <div
                v-html="
                  ui.renderMessageHtml(message, index, state.messages.value, state.isLoading.value)
                "
              ></div>
              <span
                v-if="
                  state.isLoading.value &&
                  !message.content &&
                  index === state.messages.value.length - 1
                "
                class="assistant-typing"
                role="status"
              >
                <span></span><span></span><span></span>
              </span>
            </div>
          </template>
        </div>
      </div>

      <div class="assistant-input-box">
        <textarea
          ref="inputRef"
          v-model="ui.userInput.value"
          rows="1"
          class="assistant-textarea"
          :placeholder="t('inputPlaceholder')"
          :aria-label="t('inputPlaceholder')"
          :disabled="state.isLoading.value || !state.config.value"
          @keydown.enter.exact.prevent="sendMessage"
          @input="ui.autoResize(inputRef)"
        ></textarea>
        <button
          class="assistant-send"
          type="button"
          :disabled="state.isLoading.value || !ui.userInput.value.trim() || !state.config.value"
          :title="t('send')"
          :aria-label="t('send')"
          @click="sendMessage"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useChatSurface } from './composables/useChatSurface';
import type { ReadingContext } from '../chat/chat-types';

/**
 * 全局 AI 助手：挂在默认 Layout 上的浮窗交互表面。复用 useChatSurface
 * （引擎接线、历史、i18n、消息渲染），额外维护两件事：
 * - 阅读上下文：当前路由命中 AI 路由索引时注入，供两阶段检索加权当前页。
 * - 面板开合：浮窗状态不持久化，刷新后收起（第一版约定）。
 */
const inputRef = ref<HTMLTextAreaElement | null>(null);
const messagesContainer = ref<HTMLDivElement | null>(null);
const surface = useChatSurface(inputRef, messagesContainer);
const { t, state, ui, actions, chatHistory, sendMessage } = surface;

const route = useRoute();
const open = ref(false);
const historyOpen = ref(false);

const readingContext = computed<ReadingContext | null>(() => {
  const path = route.path;
  for (const category of state.siteIndex.value) {
    for (const row of category.entries) {
      if (row.path === path) return { path: row.path, title: row.title };
    }
  }
  return null;
});

watch(readingContext, (ctx) => state.setReadingContext(ctx), { immediate: false });

function openPanel() {
  open.value = true;
  historyOpen.value = false;
  void nextTick(() => {
    inputRef.value?.focus();
    ui.scrollToBottom(messagesContainer.value, 'auto');
  });
}

function closePanel() {
  open.value = false;
  historyOpen.value = false;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) closePanel();
}

/** 回答里的站内链接被点击后收起面板，让用户看到跳转后的页面。 */
function onMessagesClick(e: MouseEvent) {
  if ((e.target as HTMLElement).closest('a')) closePanel();
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown);
});
</script>

<style lang="scss">
@use '../styles/ai-assistant';
</style>
