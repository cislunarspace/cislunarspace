import { ref } from 'vue'
import type { Message } from '../../chat/chat-types'

const HISTORY_KEY = 'cislunar-chat-history'
const MAX_SAVED = 30

interface ChatHistoryEntry {
  title: string
  messages: Message[]
  timestamp: number
}

function loadFromStorage(): ChatHistoryEntry[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveToStorage(history: ChatHistoryEntry[]): void {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_SAVED)))
  } catch (e) {
    console.warn('[AiChat] saveChatHistory', e)
  }
}

export function useChatHistory() {
  const chatHistory = ref<ChatHistoryEntry[]>(loadFromStorage())
  const activeChatIndex = ref(-1)

  function getChatTitle(messages: Message[], isEn: boolean): string {
    const first = messages.find((m) => m.role === 'user')
    if (!first) return isEn ? 'New Chat' : '新对话'
    const text = first.content.slice(0, 30)
    return text.length < first.content.length ? text + '...' : text
  }

  function saveCurrentChat(messages: Message[], isEn: boolean): void {
    if (messages.length === 0) return
    const title = getChatTitle(messages, isEn)
    const entry: ChatHistoryEntry = { title, messages: JSON.parse(JSON.stringify(messages)), timestamp: Date.now() }
    if (activeChatIndex.value >= 0 && activeChatIndex.value < chatHistory.value.length) {
      chatHistory.value = [
        ...chatHistory.value.slice(0, activeChatIndex.value),
        entry,
        ...chatHistory.value.slice(activeChatIndex.value + 1),
      ]
    } else {
      chatHistory.value = [entry, ...chatHistory.value]
      activeChatIndex.value = 0
    }
    chatHistory.value = chatHistory.value.filter((c) => c.messages && c.messages.length > 0)
    saveToStorage(chatHistory.value)
  }

  function switchChat(idx: number, messages: Message[], isEn: boolean): Message[] | null {
    if (idx < 0 || idx >= chatHistory.value.length) return null
    saveCurrentChat(messages, isEn)
    activeChatIndex.value = idx
    return JSON.parse(JSON.stringify(chatHistory.value[idx].messages))
  }

  function deleteChat(idx: number): void {
    chatHistory.value = chatHistory.value.filter((_, i) => i !== idx)
    if (activeChatIndex.value === idx) {
      activeChatIndex.value = -1
    } else if (activeChatIndex.value > idx) {
      activeChatIndex.value--
    }
    saveToStorage(chatHistory.value)
  }

  function startNewChat(messages: Message[], isEn: boolean): void {
    saveCurrentChat(messages, isEn)
    activeChatIndex.value = -1
  }

  return {
    chatHistory,
    activeChatIndex,
    saveCurrentChat,
    switchChat,
    deleteChat,
    startNewChat,
  }
}
