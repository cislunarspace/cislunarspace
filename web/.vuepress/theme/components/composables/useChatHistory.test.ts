import { beforeEach, describe, expect, it, vi } from 'vitest';
import type { Message } from '../../chat/chat-types';

/**
 * useChatHistory 把历史列表放在模块级单例上，测试用 resetModules +
 * 动态导入让每个用例拿到干净的模块实例。
 */

async function freshUseChatHistory() {
  vi.resetModules();
  const mod = await import('./useChatHistory');
  return mod.useChatHistory;
}

const messages = (text: string): Message[] => [
  { role: 'user', content: text },
  { role: 'assistant', content: '回答' },
];

describe('useChatHistory', () => {
  beforeEach(() => {
    vi.unstubAllGlobals();
    window.localStorage.clear();
  });

  it('shares the history list across surface instances', async () => {
    const useChatHistory = await freshUseChatHistory();
    const surfaceA = useChatHistory();
    const surfaceB = useChatHistory();

    surfaceA.saveCurrentChat(messages('晕轨道是什么'));

    expect(surfaceB.chatHistory.value).toHaveLength(1);
    expect(surfaceB.chatHistory.value[0].title).toBe('晕轨道是什么');
  });

  it('keeps activeChatIndex per instance so surfaces do not overwrite each other', async () => {
    const useChatHistory = await freshUseChatHistory();
    const surfaceA = useChatHistory();
    const surfaceB = useChatHistory();

    surfaceA.saveCurrentChat(messages('第一次提问'));
    // 表面 A 保存后指向会话 0。表面 B 仍是新对话（-1）。
    expect(surfaceA.activeChatIndex.value).toBe(0);
    expect(surfaceB.activeChatIndex.value).toBe(-1);

    // 表面 B 发起新对话：新会话前插（最新在最上），不覆盖 A 的会话。
    surfaceB.saveCurrentChat(messages('另一个问题'));
    expect(surfaceA.chatHistory.value).toHaveLength(2);
    expect(surfaceA.chatHistory.value[0].title).toBe('另一个问题');
    expect(surfaceA.chatHistory.value[1].title).toBe('第一次提问');
    expect(surfaceB.activeChatIndex.value).toBe(0);
  });

  it('persists saves to localStorage capped at MAX_SAVED', async () => {
    const useChatHistory = await freshUseChatHistory();

    // 每个实例的首个保存都是新会话（前插）。31 个实例攒出 31 条，落盘只留 30 条。
    for (let i = 1; i <= 31; i++) {
      useChatHistory().saveCurrentChat(messages(`问题${i}`));
    }

    const raw = window.localStorage.getItem('cislunar-chat-history');
    expect(raw).not.toBeNull();
    const persisted = JSON.parse(raw as string);
    expect(persisted).toHaveLength(30);
    expect(persisted[0].title).toBe('问题31');
    expect(persisted[29].title).toBe('问题2');
  });
});
