import { ref } from 'vue';
import type { Message } from '../../chat/chat-types';

const HISTORY_KEY = 'cislunar-chat-history';
const MAX_SAVED = 30;

interface ChatHistoryEntry {
  title: string;
  messages: Message[];
  timestamp: number;
}

function loadFromStorage(): ChatHistoryEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    // Migrate old entries that lack a title field
    return parsed.map((entry: ChatHistoryEntry) => {
      if (!entry.title && entry.messages?.length) {
        const first = entry.messages.find((m: Message) => m.role === 'user');
        entry.title = first?.content?.slice(0, 30) || '';
      }
      return entry;
    });
  } catch {
    return [];
  }
}

function saveToStorage(history: ChatHistoryEntry[]): void {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_SAVED)));
  } catch (e) {
    console.warn('[AiChat] saveChatHistory', e);
  }
}

/**
 * 模块级共享的历史列表：全局 AI 助手浮窗与 AI 问答全页表面在同一次页面
 * 会话里读写同一份内存态（localStorage 只在写入时落盘）。activeChatIndex
 * 刻意不共享：每个表面实例各自持有“当前编辑中的会话”，避免浮窗的新对话
 * 覆盖另一个表面正在进行的会话。
 */
const sharedChatHistory = ref<ChatHistoryEntry[]>(loadFromStorage());

export function useChatHistory() {
  const chatHistory = sharedChatHistory;
  const activeChatIndex = ref(-1);

  function getChatTitle(messages: Message[]): string {
    const first = messages.find((m) => m.role === 'user');
    if (!first) return '新对话';
    const text = first.content.slice(0, 30);
    return text.length < first.content.length ? text + '...' : text;
  }

  function saveCurrentChat(messages: Message[]): void {
    if (messages.length === 0) return;
    const title = getChatTitle(messages);
    const entry: ChatHistoryEntry = {
      title,
      messages: JSON.parse(JSON.stringify(messages)),
      timestamp: Date.now(),
    };
    if (activeChatIndex.value >= 0 && activeChatIndex.value < chatHistory.value.length) {
      chatHistory.value = [
        ...chatHistory.value.slice(0, activeChatIndex.value),
        entry,
        ...chatHistory.value.slice(activeChatIndex.value + 1),
      ];
    } else {
      chatHistory.value = [entry, ...chatHistory.value];
      activeChatIndex.value = 0;
    }
    chatHistory.value = chatHistory.value.filter((c) => c.messages && c.messages.length > 0);
    saveToStorage(chatHistory.value);
  }

  function switchChat(idx: number, messages: Message[]): Message[] | null {
    if (idx < 0 || idx >= chatHistory.value.length) return null;
    saveCurrentChat(messages);
    activeChatIndex.value = idx;
    return JSON.parse(JSON.stringify(chatHistory.value[idx].messages));
  }

  function deleteChat(idx: number): void {
    chatHistory.value = chatHistory.value.filter((_, i) => i !== idx);
    if (activeChatIndex.value === idx) {
      activeChatIndex.value = -1;
    } else if (activeChatIndex.value > idx) {
      activeChatIndex.value--;
    }
    saveToStorage(chatHistory.value);
  }

  function startNewChat(messages: Message[]): void {
    saveCurrentChat(messages);
    activeChatIndex.value = -1;
  }

  return {
    chatHistory,
    activeChatIndex,
    saveCurrentChat,
    switchChat,
    deleteChat,
    startNewChat,
  };
}
