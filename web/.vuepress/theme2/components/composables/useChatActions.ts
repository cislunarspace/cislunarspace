import type { ComputedRef } from 'vue'
import type { ChatStateMachine } from '../../utils/chat-state-machine'
import type { ChatUIManager } from '../../utils/chat-ui-manager'
import type { Message } from '../../chat/chat-types'

export interface ChatHistoryApi {
  saveCurrentChat: (messages: Message[], isEn: boolean) => void
  startNewChat: (messages: Message[], isEn: boolean) => void
  switchChat: (idx: number, messages: Message[], isEn: boolean) => Message[] | null
  deleteChat: (idx: number) => void
  activeChatIndex: { value: number }
}

export function createChatActions(
  state: ChatStateMachine,
  ui: ChatUIManager,
  history: ChatHistoryApi,
  isEn: ComputedRef<boolean>,
) {
  function saveCurrentChat() {
    history.saveCurrentChat(state.messages.value, isEn.value)
  }

  function startNewChat() {
    history.startNewChat(state.messages.value, isEn.value)
    state.startNewChat()
    ui.userInput.value = ''
  }

  function switchChat(idx: number) {
    if (state.isLoading.value) return
    const restored = history.switchChat(idx, state.messages.value, isEn.value)
    state.switchChat(restored)
    ui.sidebarOpen.value = false
  }

  function deleteChat(idx: number) {
    const wasActive = history.activeChatIndex.value === idx
    history.deleteChat(idx)
    state.deleteChat(wasActive)
  }

  function sendSuggested(question: string) {
    if (state.isLoading.value) return
    ui.userInput.value = question
  }

  return { saveCurrentChat, startNewChat, switchChat, deleteChat, sendSuggested }
}
