/**
 * ChatUIManager — presentation helpers for the AI chat surface.
 *
 * Pure module (no Vue runtime dependency). Manages sidebar state, input
 * auto-resize, scroll behavior, suggested questions, and message rendering.
 */
import type { Ref } from 'vue'
import { ref } from 'vue'
import { renderLinkedHtml } from './markdown-renderer'
import type { Message } from '../chat/chat-types'

const DEFAULT_SUGGESTED_QUESTIONS = {
  en: [
    'What is cislunar space?',
    'What is the CR3BP model?',
    'What are the characteristics of NRHO orbits?',
    'What are Lagrange points used for?',
  ],
  zh: ['什么是地月空间？', 'CR3BP 模型是什么？', '有谁在研究地月空间？', '地月空间研究前沿是什么？'],
}

export interface ChatUIManager {
  sidebarOpen: Ref<boolean>
  userInput: Ref<string>
  suggestedQuestions: Ref<string[]>
  /** Pick suggested questions based on locale. */
  updateSuggestedQuestions(isEn: boolean): void
  /** Auto-resize a textarea to fit its content. */
  autoResize(input: HTMLTextAreaElement | null): void
  /** Scroll a container to the bottom. */
  scrollToBottom(container: HTMLElement | null, behavior?: ScrollBehavior): void
  /** Extract display text from a message, hiding the loading placeholder. */
  getMessageText(message: Message, index: number, messages: Message[], isLoading: boolean): string
  /** Render message content as HTML, with a blinking cursor when streaming. */
  renderMessageHtml(message: Message, index: number, messages: Message[], isLoading: boolean): string
}

export function createChatUIManager(): ChatUIManager {
  const sidebarOpen = ref(false)
  const userInput = ref('')
  const suggestedQuestions = ref<string[]>([])

  function updateSuggestedQuestions(isEn: boolean) {
    suggestedQuestions.value = isEn ? DEFAULT_SUGGESTED_QUESTIONS.en : DEFAULT_SUGGESTED_QUESTIONS.zh
  }

  function autoResize(input: HTMLTextAreaElement | null) {
    if (!input) return
    input.style.height = 'auto'
    input.style.height = Math.min(input.scrollHeight, 200) + 'px'
  }

  function scrollToBottom(container: HTMLElement | null, behavior: ScrollBehavior = 'smooth') {
    if (!container) return
    container.scrollTo({ top: container.scrollHeight, behavior })
  }

  function getMessageText(message: Message, index: number, messages: Message[], isLoading: boolean): string {
    if (message.role === 'assistant' && !message.content && isLoading && index === messages.length - 1) {
      return ''
    }
    return message.content
  }

  function renderMessageHtml(message: Message, index: number, messages: Message[], isLoading: boolean): string {
    const text = getMessageText(message, index, messages, isLoading)
    if (!text && isLoading && index === messages.length - 1) return ''
    const html = renderLinkedHtml(text || '')
    if (isLoading && index === messages.length - 1 && text) {
      return html + '<span class="cursor-blink">|</span>'
    }
    return html
  }

  return {
    sidebarOpen,
    userInput,
    suggestedQuestions,
    updateSuggestedQuestions,
    autoResize,
    scrollToBottom,
    getMessageText,
    renderMessageHtml,
  }
}
