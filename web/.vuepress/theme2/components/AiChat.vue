<template>
  <div :class="['ai-chat-root', { 'dark': theme.isDark.value }]">
    <aside :class="['chat-sidebar', { 'sidebar-open': ui.sidebarOpen.value }]">
      <div class="sidebar-header">
        <button class="sidebar-new-btn" @click="startNewChat" :disabled="state.isLoading.value">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          <span>{{ t('newChat') }}</span>
        </button>
      </div>
      <div class="sidebar-history">
        <div v-if="chatHistory.length === 0" class="sidebar-empty">
          {{ isEn ? 'No conversations yet' : '暂无对话记录' }}
        </div>
        <div
          v-for="(chat, idx) in chatHistory"
          :key="idx"
          :class="['sidebar-item', { active: activeChatIndex === idx }]"
          @click="switchChat(idx)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span class="sidebar-item-title">{{ chat.title }}</span>
          <button class="sidebar-item-delete" @click.stop="deleteChat(idx)" :title="isEn ? 'Delete' : '删除'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="sidebar-footer">
        <button class="sidebar-icon-btn" @click="theme.toggleTheme" :title="theme.isDark.value ? (isEn ? 'Light mode' : '浅色模式') : (isEn ? 'Dark mode' : '深色模式')">
          <svg v-if="theme.isDark.value" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>
    </aside>

    <div class="sidebar-overlay" v-if="ui.sidebarOpen.value" @click="ui.sidebarOpen.value = false"></div>

    <main class="chat-main">
      <header class="chat-header">
        <button class="header-menu-btn" @click="ui.sidebarOpen.value = !ui.sidebarOpen.value" :title="isEn ? 'Menu' : '菜单'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <h1 class="header-title">
          <span v-if="state.isLoading.value && state.loadingPhase.value === 'router'" class="header-title-pulse">{{ t('routerPhase') }}</span>
          <span v-else>{{ t('toolbarTitle') }}</span>
        </h1>
        <div class="header-actions">
          <button class="header-icon-btn" @click="theme.toggleTheme" :title="theme.isDark.value ? (isEn ? 'Light mode' : '浅色模式') : (isEn ? 'Dark mode' : '深色模式')">
            <svg v-if="theme.isDark.value" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button class="header-icon-btn" @click="startNewChat" :disabled="state.isLoading.value" :title="t('newChat')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
        </div>
      </header>

      <div class="chat-messages" ref="messagesContainer">
        <div v-if="state.messages.value.length === 0" class="chat-welcome">
          <p class="welcome-eyebrow">{{ t('welcomeEyebrow') }}</p>
          <div class="welcome-icon-wrap">
            <div class="welcome-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
          </div>
          <h2 class="welcome-title">{{ t('welcomeTitle') }}</h2>
          <p class="welcome-desc">{{ t('welcomeDesc') }}</p>
          <div class="suggested-grid">
            <button
              v-for="(question, index) in ui.suggestedQuestions.value"
              :key="index"
              class="suggested-card"
              @click="sendSuggested(question)"
              :disabled="state.isLoading.value"
            >
              <span class="suggested-card-text">{{ question }}</span>
              <svg class="suggested-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <div
          v-for="(message, index) in state.messages.value"
          :key="index"
          :class="['chat-message', message.role === 'user' ? 'user-message' : 'assistant-message']"
        >
          <div class="message-row" :class="{ 'is-assistant-stack': message.role === 'assistant' }">
            <div v-if="message.role === 'assistant'" class="message-avatar assistant-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10h16V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="15" cy="14" r="1" fill="currentColor"/></svg>
            </div>
            <div v-if="message.role === 'assistant'" class="assistant-column">
              <div
                v-if="message.processSteps && message.processSteps.length"
                class="assistant-process"
                aria-label="process"
              >
                <p class="assistant-process-title">{{ t('processTitle') }}</p>
                <ul class="assistant-process-list">
                  <li
                    v-for="(ps, pi) in message.processSteps"
                    :key="pi"
                    :class="['process-step', 'process-step--' + (ps.status || 'done')]"
                  >
                    <span class="process-step-icon" aria-hidden="true">
                      <span class="process-step-dot"></span>
                      <span class="process-step-check">&#10003;</span>
                    </span>
                    <div class="process-step-main">
                      <span class="process-step-text">{{ ps.label }}</span>
                      <span v-if="ps.detail" class="process-step-detail">{{ ps.detail }}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <details
                v-if="message.reasoning && String(message.reasoning).trim()"
                class="assistant-reasoning"
                :open="state.isLoading.value && index === state.messages.value.length - 1 && !ui.getMessageText(message, index, state.messages.value, state.isLoading.value)"
              >
                <summary class="assistant-reasoning-summary">{{ t('reasoningTitle') }}</summary>
                <div class="assistant-reasoning-body">{{ message.reasoning }}</div>
              </details>
              <div class="message-content assistant-content">
                <div v-html="ui.renderMessageHtml(message, index, state.messages.value, state.isLoading.value)"></div>
                <div
                  v-if="state.isLoading.value && message.role === 'assistant' && !message.content && !message.reasoning && index === state.messages.value.length - 1"
                  class="typing-dots"
                  role="status"
                >
                  <span></span><span></span><span></span>
                </div>
                <div
                  v-else-if="state.isLoading.value && message.role === 'assistant' && (message.reasoning && !message.content) && index === state.messages.value.length - 1"
                  class="typing-dots typing-dots--after-reasoning"
                  role="status"
                  :aria-label="t('answerStarting')"
                >
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
            <div v-else class="message-content user-content">
              {{ ui.getMessageText(message, index, state.messages.value, state.isLoading.value) }}
            </div>
            <div v-if="message.role === 'user'" class="message-avatar user-avatar">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </div>
          </div>
        </div>
      </div>

      <div class="chat-input-wrapper">
        <div class="chat-input-box">
          <textarea
            ref="inputRef"
            v-model="ui.userInput.value"
            @keydown.enter.exact.prevent="sendMessage"
            @input="ui.autoResize(inputRef)"
            :placeholder="t('inputPlaceholder')"
            :disabled="state.isLoading.value || !state.config.value"
            rows="1"
            class="chat-textarea"
          ></textarea>
          <button
            class="send-btn"
            @click="sendMessage"
            :disabled="state.isLoading.value || !ui.userInput.value.trim() || !state.config.value"
            :title="t('send')"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
        <p class="input-hint">{{ isEn ? 'AI may produce inaccurate information. Press Enter to send.' : 'AI 可能产生不准确的信息，按 Enter 发送' }}</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ChatSession } from '../utils/chat-session'
import { createChatStateMachine } from '../utils/chat-state-machine'
import { createChatThemeController } from '../utils/chat-theme-controller'
import { createChatUIManager } from '../utils/chat-ui-manager'
import { createChatActions } from './composables/useChatActions'
import { useChatHistory } from './composables/useChatHistory'
import { useChatI18n } from './composables/useChatI18n'
import type { HierarchicalSiteIndex, NormalizedConfig } from '../utils/chat-types'

// --- Template refs ---
const inputRef = ref<HTMLTextAreaElement | null>(null)
const messagesContainer = ref<HTMLDivElement | null>(null)

// --- Locale ---
const isEn = computed(() => typeof window !== 'undefined' && window.location.pathname.startsWith('/en/'))
const { t } = useChatI18n(() => isEn.value)

// --- State controllers ---
const state = createChatStateMachine()
const theme = createChatThemeController(ref(false))
const ui = createChatUIManager()

// --- Chat history wiring ---
const {
  chatHistory,
  activeChatIndex,
  saveCurrentChat: saveCurrentChatRaw,
  switchChat: switchChatRaw,
  deleteChat: deleteChatRaw,
  startNewChat: startNewChatRaw,
} = useChatHistory()
const historyApi = {
  saveCurrentChat: saveCurrentChatRaw,
  switchChat: switchChatRaw,
  deleteChat: deleteChatRaw,
  startNewChat: startNewChatRaw,
  activeChatIndex,
}
const actions = createChatActions(state, ui, historyApi, isEn)

const sendDeps = computed(() => ({
  locale: isEn.value ? 'en' : 'zh',
  t,
  createSession: (cfg: NormalizedConfig, locale: 'zh' | 'en', siteIndex: HierarchicalSiteIndex) =>
    new ChatSession(cfg, locale, siteIndex),
  onChunk: () => ui.scrollToBottom(messagesContainer.value, 'auto'),
  onComplete: () => ui.scrollToBottom(messagesContainer.value),
  saveCurrentChat: () => actions.saveCurrentChat(),
}))

async function sendMessage() {
  const text = ui.userInput.value.trim()
  if (!text) return
  ui.userInput.value = ''
  if (inputRef.value) inputRef.value.style.height = 'auto'
  await state.sendMessage(text, sendDeps.value)
}

// --- Lifecycle ---
let onEscapeHandler: ((e: KeyboardEvent) => void) | null = null

onMounted(async () => {
  theme.loadTheme()
  ui.updateSuggestedQuestions(isEn.value)
  await state.loadConfig(t)
  onEscapeHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && ui.sidebarOpen.value) ui.sidebarOpen.value = false
  }
  window.addEventListener('keydown', onEscapeHandler)
})

watch(isEn, () => ui.updateSuggestedQuestions(isEn.value))
watch(theme.isDark, theme.applyTheme)

onBeforeUnmount(() => {
  state.abortRequest()
  if (onEscapeHandler) {
    window.removeEventListener('keydown', onEscapeHandler)
    onEscapeHandler = null
  }
})
</script>

<style scoped lang="scss">
@use '../styles/ai-chat';
</style>
