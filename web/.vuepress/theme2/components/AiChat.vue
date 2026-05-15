<template>
  <div :class="['ai-chat-root', { 'dark': isDark }]">
    <aside :class="['chat-sidebar', { 'sidebar-open': sidebarOpen }]">
      <div class="sidebar-header">
        <button class="sidebar-new-btn" @click="handleStartNewChat" :disabled="isLoading">
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
          @click="handleSwitchChat(idx)"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span class="sidebar-item-title">{{ chat.title }}</span>
          <button class="sidebar-item-delete" @click.stop="handleDeleteChat(idx)" :title="isEn ? 'Delete' : '删除'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="sidebar-footer">
        <button class="sidebar-icon-btn" @click="toggleTheme" :title="isDark ? (isEn ? 'Light mode' : '浅色模式') : (isEn ? 'Dark mode' : '深色模式')">
          <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>
    </aside>

    <div class="sidebar-overlay" v-if="sidebarOpen" @click="sidebarOpen = false"></div>

    <main class="chat-main">
      <header class="chat-header">
        <button class="header-menu-btn" @click="sidebarOpen = !sidebarOpen" :title="isEn ? 'Menu' : '菜单'">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
        <h1 class="header-title">
          <span v-if="isLoading && loadingPhase === 'router'" class="header-title-pulse">{{ t('routerPhase') }}</span>
          <span v-else>{{ t('toolbarTitle') }}</span>
        </h1>
        <div class="header-actions">
          <button class="header-icon-btn" @click="toggleTheme" :title="isDark ? (isEn ? 'Light mode' : '浅色模式') : (isEn ? 'Dark mode' : '深色模式')">
            <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          </button>
          <button class="header-icon-btn" @click="handleStartNewChat" :disabled="isLoading" :title="t('newChat')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
          </button>
        </div>
      </header>

      <div class="chat-messages" ref="messagesContainer">
        <div v-if="messages.length === 0" class="chat-welcome">
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
              v-for="(question, index) in suggestedQuestions"
              :key="index"
              class="suggested-card"
              @click="sendSuggested(question)"
              :disabled="isLoading"
            >
              <span class="suggested-card-text">{{ question }}</span>
              <svg class="suggested-card-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>

        <div
          v-for="(message, index) in messages"
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
                :open="isLoading && index === messages.length - 1 && !getMessageText(message, index)"
              >
                <summary class="assistant-reasoning-summary">{{ t('reasoningTitle') }}</summary>
                <div class="assistant-reasoning-body">{{ message.reasoning }}</div>
              </details>
              <div class="message-content assistant-content">
                <div v-html="renderMessageHtml(message, index)"></div>
                <div
                  v-if="isLoading && message.role === 'assistant' && !message.content && !message.reasoning && index === messages.length - 1"
                  class="typing-dots"
                  role="status"
                >
                  <span></span><span></span><span></span>
                </div>
                <div
                  v-else-if="isLoading && message.role === 'assistant' && (message.reasoning && !message.content) && index === messages.length - 1"
                  class="typing-dots typing-dots--after-reasoning"
                  role="status"
                  :aria-label="t('answerStarting')"
                >
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
            <div v-else class="message-content user-content">
              {{ getMessageText(message, index) }}
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
            v-model="userInput"
            @keydown.enter.exact.prevent="sendMessage"
            @input="autoResize"
            :placeholder="t('inputPlaceholder')"
            :disabled="isLoading || !config"
            rows="1"
            class="chat-textarea"
          ></textarea>
          <button
            class="send-btn"
            @click="sendMessage"
            :disabled="isLoading || !userInput.trim() || !config"
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
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import {
  escapeHtml,
  renderKatex,
  renderInlineMarkdown,
  renderLinkedHtml,
} from '../utils/markdown-renderer'
import { ChatSession } from '../utils/chat-session'
import { sanitizeClientConfig } from '../utils/chat-config'
import { beginStep, completeStep, finalizeSteps } from '../utils/chat-process-steps'
import { useChatI18n } from './composables/useChatI18n'
import { useChatHistory } from './composables/useChatHistory'
import type { HierarchicalSiteIndex, Message, SseDelta, ProcessStepKey, ErrorKey } from '../utils/chat-types'

// --- Template refs ---
const inputRef = ref<HTMLTextAreaElement | null>(null)
const messagesContainer = ref<HTMLDivElement | null>(null)

// --- State ---
const userInput = ref('')
const messages = ref<Message[]>([])
const isLoading = ref(false)
const config = ref<ReturnType<typeof sanitizeClientConfig> | null>(null)
const abortController = ref<AbortController | null>(null)
const suggestedQuestions = ref<string[]>([])
const sidebarOpen = ref(false)
const siteIndex = ref<HierarchicalSiteIndex>({ zh: [], en: [] })
const loadingPhase = ref('')

// --- Computed ---
const isEn = computed(() => typeof window !== 'undefined' && window.location.pathname.startsWith('/en/'))

// --- i18n ---
const { t } = useChatI18n(() => isEn.value)

// --- Chat history ---
const {
  chatHistory,
  activeChatIndex,
  saveCurrentChat: saveCurrentChatRaw,
  switchChat: switchChatRaw,
  deleteChat: deleteChatRaw,
  startNewChat: startNewChatRaw,
} = useChatHistory()

function saveCurrentChat() {
  saveCurrentChatRaw(messages.value, isEn.value)
}

// --- Theme (inline) ---
const THEME_KEY = 'cislunar-chat-theme'
const isDark = ref(false)

function getSystemTheme(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function loadTheme(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const saved = localStorage.getItem(THEME_KEY)
    if (saved === 'dark') return true
    if (saved === 'light') return false
  } catch (e) {
    console.warn('[AiChat] loadTheme', e)
  }
  return getSystemTheme()
}

function applyTheme() {
  document.documentElement.setAttribute('data-chat-theme', isDark.value ? 'dark' : 'light')
}

function toggleTheme() {
  isDark.value = !isDark.value
  try {
    localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'light')
  } catch (e) {
    console.warn('[AiChat] toggleTheme', e)
  }
}

// --- UI helpers ---
function autoResize() {
  nextTick(() => {
    const el = inputRef.value
    if (!el) return
    el.style.height = 'auto'
    el.style.height = Math.min(el.scrollHeight, 200) + 'px'
  })
}

function getMessageText(message: Message, index: number): string {
  if (message && message.role === 'assistant' && !message.content && isLoading.value && index === messages.value.length - 1) {
    return ''
  }
  return message.content
}

function renderMessageHtml(message: Message, index: number): string {
  const text = getMessageText(message, index)
  if (!text && isLoading.value && index === messages.value.length - 1) return ''
  const html = renderLinkedHtml(text || '')
  if (isLoading.value && index === messages.value.length - 1 && text) {
    return html + '<span class="cursor-blink">|</span>'
  }
  return html
}

function updateSuggestedQuestions() {
  suggestedQuestions.value = isEn.value
    ? ['What is cislunar space?', 'What is the CR3BP model?', 'What are the characteristics of NRHO orbits?', 'What are Lagrange points used for?']
    : ['什么是地月空间？', 'CR3BP 模型是什么？', '有谁在研究地月空间？', '地月空间研究前沿是什么？']
}

function scrollToBottom(behavior?: ScrollBehavior) {
  nextTick(() => {
    const container = messagesContainer.value
    if (!container) return
    container.scrollTo({ top: container.scrollHeight, behavior: behavior || 'smooth' })
  })
}

// --- Config loading ---
async function loadConfig() {
  try {
    const url = '/ai-chat-config.json'
    const response = await fetch(url, { cache: 'no-store' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    config.value = sanitizeClientConfig(await response.json())
    try {
      const idxRes = await fetch('/ai-chat-index.json', { cache: 'no-store' })
      if (idxRes.ok) {
        siteIndex.value = await idxRes.json()
      } else {
        siteIndex.value = { zh: [], en: [] }
      }
    } catch {
      siteIndex.value = { zh: [], en: [] }
    }
  } catch (error) {
    config.value = null
    siteIndex.value = { zh: [], en: [] }
    messages.value = [{ role: 'assistant', content: `${t('configError')} ${(error as Error).message}` }]
  }
}

// --- Request control ---
function abortRequest() {
  if (abortController.value) {
    abortController.value.abort()
    abortController.value = null
  }
  isLoading.value = false
  loadingPhase.value = ''
}

// --- Chat actions ---
function handleStartNewChat() {
  startNewChatRaw(messages.value, isEn.value)
  abortRequest()
  messages.value = []
  userInput.value = ''
}

function handleSwitchChat(idx: number) {
  if (isLoading.value) return
  const restored = switchChatRaw(idx, messages.value, isEn.value)
  if (restored) {
    messages.value = restored
  }
  sidebarOpen.value = false
}

function handleDeleteChat(idx: number) {
  deleteChatRaw(idx)
  if (activeChatIndex.value === -1) {
    messages.value = []
  }
}

function sendSuggested(question: string) {
  if (isLoading.value) return
  userInput.value = question
  sendMessage()
}

// --- Main send loop ---
async function sendMessage() {
  const text = userInput.value.trim()
  if (!text || isLoading.value || !config.value) return

  messages.value = [...messages.value, { role: 'user', content: text }]
  userInput.value = ''
  isLoading.value = true
  loadingPhase.value = 'answer'
  scrollToBottom()

  if (inputRef.value) {
    inputRef.value.style.height = 'auto'
  }

  const assistantMessage: Message = { role: 'assistant', content: '', reasoning: '', processSteps: [] }
  messages.value = [...messages.value, assistantMessage]
  abortController.value = new AbortController()

  try {
    // History trimming is owned by ChatSession (uses maxHistoryTurns from config).
    // The view just passes every prior message.
    const priorHistory = messages.value.slice(0, -1)

    const session = new ChatSession(config.value, isEn.value ? 'en' : 'zh', siteIndex.value)

    await session.route(text, priorHistory, {
      onPathsChosen: () => {},
      onExcerptsLoaded: () => {},
      onChunk: (delta: SseDelta) => {
        if (delta.reasoning_content !== undefined) {
          assistantMessage.reasoning = delta.reasoning_content
        }
        if (delta.content !== undefined) {
          assistantMessage.content = delta.content
        }
        scrollToBottom('auto')
      },
      onComplete: (content: string, reasoning: string) => {
        assistantMessage.content = content
        if (reasoning) assistantMessage.reasoning = reasoning
      },
      onError: (errorKey: ErrorKey, details?: string) => {
        assistantMessage.content = t(errorKey) + (details ? ` ${details}` : '')
      },
      onProcessStep: (stepKey: ProcessStepKey, detail?: string) => {
        assistantMessage.processSteps = beginStep(
          assistantMessage.processSteps ?? [],
          stepKey,
          (key) => t(key),
          detail,
        )
      },
      onProcessStepComplete: (stepKey: ProcessStepKey, detail?: string) => {
        assistantMessage.processSteps = completeStep(
          assistantMessage.processSteps ?? [],
          stepKey,
          detail,
        )
      },
    }, abortController.value.signal)
  } catch (error) {
    if ((error as Error).name === 'AbortError') {
      messages.value = messages.value.slice(0, -1)
      return
    }
    assistantMessage.content = `${t('networkError')} ${(error as Error).message}`
  } finally {
    assistantMessage.processSteps = finalizeSteps(assistantMessage.processSteps)
    isLoading.value = false
    loadingPhase.value = ''
    abortController.value = null
    saveCurrentChat()
    scrollToBottom()
  }
}

// --- Lifecycle ---
let onEscapeHandler: ((e: KeyboardEvent) => void) | null = null

onMounted(async () => {
  isDark.value = loadTheme()
  updateSuggestedQuestions()
  await loadConfig()
  applyTheme()
  onEscapeHandler = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && sidebarOpen.value) {
      sidebarOpen.value = false
    }
  }
  window.addEventListener('keydown', onEscapeHandler)
})

watch(isEn, () => {
  updateSuggestedQuestions()
})

watch(isDark, () => {
  applyTheme()
})

onBeforeUnmount(() => {
  abortRequest()
  if (onEscapeHandler) {
    window.removeEventListener('keydown', onEscapeHandler)
    onEscapeHandler = null
  }
})
</script>

<style scoped lang="scss">
@use '../styles/ai-chat';
</style>
