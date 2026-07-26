import { computed, onBeforeUnmount, onMounted, ref, watch, type Ref } from 'vue';
import { ChatSession } from '../../chat/chat-session';
import { createChatStateMachine } from '../../utils/chat-state-machine';
import { createChatThemeController } from '../../utils/chat-theme-controller';
import { createChatUIManager } from '../../utils/chat-ui-manager';
import { createChatActions } from './useChatActions';
import { useChatHistory } from './useChatHistory';
import { useChatI18n } from './useChatI18n';
import { useIsEn } from '../../composables/useIsEn';
import type { HierarchicalSiteIndex, NormalizedConfig } from '../../chat/chat-types';

const MAX_INPUT_LENGTH = 2000

/**
 * useChatSurface — composable that owns AI Chat surface state.
 *
 * Bundles locale detection, i18n, chat history, theme, UI state, the chat
 * state machine, and session construction so AiChat.vue focuses on rendering
 * and event wiring.
 */
export function useChatSurface(
  inputRef: Ref<HTMLTextAreaElement | null>,
  messagesContainer: Ref<HTMLDivElement | null>,
) {
  const isEn = useIsEn();
  const { t } = useChatI18n(() => isEn.value);

  const state = createChatStateMachine()
  const theme = createChatThemeController(ref(false))
  const ui = createChatUIManager()
  const inputTooLong = ref(false)

  const {
    chatHistory,
    activeChatIndex,
    saveCurrentChat: saveCurrentChatRaw,
    switchChat: switchChatRaw,
    deleteChat: deleteChatRaw,
    startNewChat: startNewChatRaw,
  } = useChatHistory();

  const historyApi = {
    saveCurrentChat: saveCurrentChatRaw,
    switchChat: switchChatRaw,
    deleteChat: deleteChatRaw,
    startNewChat: startNewChatRaw,
    activeChatIndex,
  };
  const actions = createChatActions(state, ui, historyApi, isEn);

  const sendDeps = computed(() => ({
    locale: isEn.value ? 'en' : 'zh',
    t,
    createSession: (cfg: NormalizedConfig, locale: 'zh' | 'en', siteIndex: HierarchicalSiteIndex) =>
      new ChatSession(cfg, locale, siteIndex),
    onChunk: () => ui.scrollToBottom(messagesContainer.value, 'auto'),
    onComplete: () => {
      actions.saveCurrentChat();
      ui.scrollToBottom(messagesContainer.value);
    },
    saveCurrentChat: () => actions.saveCurrentChat(),
  }));

  async function sendMessage() {
    const text = ui.userInput.value.trim()
    if (!text) return
    if (text.length > MAX_INPUT_LENGTH) {
      ui.userInput.value = text.slice(0, MAX_INPUT_LENGTH)
      inputTooLong.value = true
      setTimeout(() => { inputTooLong.value = false }, 3000)
      return
    }
    ui.userInput.value = ''
    if (inputRef.value) inputRef.value.style.height = 'auto'
    await state.sendMessage(text, sendDeps.value)
  }

  function sendSuggested(question: string) {
    if (state.isLoading.value) return;
    ui.userInput.value = question;
    sendMessage();
  }

  let onEscapeHandler: ((e: KeyboardEvent) => void) | null = null;

  onMounted(async () => {
    theme.loadTheme();
    ui.updateSuggestedQuestions(isEn.value);
    await state.loadConfig(t);
    onEscapeHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && ui.sidebarOpen.value) ui.sidebarOpen.value = false;
    };
    window.addEventListener('keydown', onEscapeHandler);
  });

  watch(isEn, () => ui.updateSuggestedQuestions(isEn.value));
  watch(theme.isDark, theme.applyTheme);

  onBeforeUnmount(() => {
    state.abortRequest();
    if (onEscapeHandler) {
      window.removeEventListener('keydown', onEscapeHandler);
      onEscapeHandler = null;
    }
  });

  return {
    isEn,
    t,
    state,
    theme,
    ui,
    chatHistory,
    activeChatIndex,
    actions,
    sendMessage,
    sendSuggested,
    inputTooLong,
  }
}
