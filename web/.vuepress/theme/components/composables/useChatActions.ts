import type { Message } from '../../chat/chat-types';
import type { ChatStateMachine } from '../../utils/chat-state-machine';
import type { ChatUIManager } from '../../utils/chat-ui-manager';

export interface ChatHistoryApi {
  saveCurrentChat: (messages: Message[]) => void;
  startNewChat: (messages: Message[]) => void;
  switchChat: (idx: number, messages: Message[]) => Message[] | null;
  deleteChat: (idx: number) => void;
  activeChatIndex: { value: number };
}

/**
 * Thin wrapper grouping history mutations so AiChat.vue can bind them
 * directly to click handlers without knowing the save-on-switch dance.
 */
export function createChatActions(
  state: ChatStateMachine,
  ui: ChatUIManager,
  history: ChatHistoryApi,
) {
  function saveCurrentChat() {
    history.saveCurrentChat(state.messages.value);
  }

  function startNewChat() {
    history.startNewChat(state.messages.value);
    state.startNewChat();
    ui.userInput.value = '';
  }

  function switchChat(idx: number) {
    if (state.isLoading.value) return;
    const restored = history.switchChat(idx, state.messages.value);
    state.switchChat(restored);
    ui.sidebarOpen.value = false;
  }

  function deleteChat(idx: number) {
    const wasActive = history.activeChatIndex.value === idx;
    history.deleteChat(idx);
    state.deleteChat(wasActive);
    ui.sidebarOpen.value = false;
  }

  return {
    saveCurrentChat,
    startNewChat,
    switchChat,
    deleteChat,
  };
}
