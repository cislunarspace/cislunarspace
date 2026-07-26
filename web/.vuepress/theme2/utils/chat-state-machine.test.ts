import { describe, it, expect, vi } from 'vitest';
import { nextTick } from 'vue';
import { createChatStateMachine } from './chat-state-machine';
import type { ChatSession } from '../chat/chat-session';
import type { Message, NormalizedConfig, SseDelta } from '../chat/chat-types';

const config: NormalizedConfig = {
  apiEndpoint: '/api/ai',
  model: 'model',
  routerModel: 'router',
  temperature: 0.7,
  routerTemperature: 0.2,
  twoPhaseRetrieval: true,
  twoPhaseContextCharBudget: 45000,
  routerMaxPaths: 8,
  stream: false,
  maxHistoryTurns: 10,
};

function createMockSession(overrides: Partial<ChatSession> = {}): ChatSession {
  return {
    loadSiteContext: vi.fn(),
    route: vi.fn(async () => {}),
    ...overrides,
  } as unknown as ChatSession;
}

const t = (key: string) => {
  const map: Record<string, string> = {
    emptyReply: 'empty',
    networkError: 'network',
    configError: 'config error',
  };
  return map[key] ?? key;
};

describe('createChatStateMachine', () => {
  it('starts a new chat', () => {
    const sm = createChatStateMachine();
    sm.messages.value = [{ role: 'user', content: 'hi' }];
    sm.isLoading.value = true;

    sm.startNewChat();

    expect(sm.messages.value).toEqual([]);
    expect(sm.isLoading.value).toBe(false);
  });

  it('switches chat when restored messages are provided', () => {
    const sm = createChatStateMachine();
    sm.messages.value = [{ role: 'user', content: 'old' }];
    sm.switchChat([{ role: 'user', content: 'new' }]);
    expect(sm.messages.value).toEqual([{ role: 'user', content: 'new' }]);
  });

  it('clears messages when the active chat is deleted', () => {
    const sm = createChatStateMachine();
    sm.messages.value = [{ role: 'user', content: 'hi' }];
    sm.deleteChat(true);
    expect(sm.messages.value).toEqual([]);
  });

  it('records config loading error as an assistant message', async () => {
    const sm = createChatStateMachine();
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('', { status: 500 })),
    );
    await sm.loadConfig(t);
    expect(sm.messages.value).toEqual([
      { role: 'assistant', content: 'config error Failed to load AI config: HTTP 500' },
    ]);
    expect(sm.config.value).toBeNull();
  });

  it('sends a message through the injected session', async () => {
    const sm = createChatStateMachine();
    sm.config.value = config;

    let capturedCallbacks: unknown;
    const session = createMockSession({
      route: vi.fn(async (_q, _h, callbacks) => {
        capturedCallbacks = callbacks;
        callbacks.onComplete('answer', '');
      }),
    });

    const save = vi.fn();
    await sm.sendMessage('question', {
      locale: 'zh',
      t,
      createSession: () => session,
      saveCurrentChat: save,
    });

    expect(sm.messages.value).toHaveLength(2);
    expect(sm.messages.value[0]).toEqual({ role: 'user', content: 'question' });
    expect(sm.messages.value[1].content).toBe('answer');
    expect(save).toHaveBeenCalled();
    expect(sm.isLoading.value).toBe(false);
    expect(session.route).toHaveBeenCalledWith(
      'question',
      [{ role: 'user', content: 'question' }],
      expect.any(Object),
      expect.any(AbortSignal),
    );
  });

  it('accumulates streaming content through callbacks', async () => {
    const sm = createChatStateMachine();
    sm.config.value = config;

    const session = createMockSession({
      route: vi.fn(async (_q, _h, callbacks) => {
        callbacks.onChunk({ content: 'chunk1' } as SseDelta);
        callbacks.onChunk({ content: 'chunk2' } as SseDelta);
        callbacks.onComplete('final', 'reasoning');
      }),
    });

    await sm.sendMessage('q', {
      locale: 'zh',
      t,
      createSession: () => session,
      saveCurrentChat: vi.fn(),
    });

    const assistant = sm.messages.value[sm.messages.value.length - 1];
    expect(assistant.content).toBe('final');
    expect(assistant.reasoning).toBe('reasoning');
  });

  it('removes the assistant placeholder on abort', async () => {
    const sm = createChatStateMachine();
    sm.config.value = config;

    const session = createMockSession({
      route: vi.fn(async () => {
        throw new DOMException('Aborted', 'AbortError');
      }),
    });

    const p = sm.sendMessage('q', {
      locale: 'zh',
      t,
      createSession: () => session,
      saveCurrentChat: vi.fn(),
    });
    sm.abortRequest();
    await p;

    expect(sm.messages.value).toHaveLength(1);
  });

  it('surfaces network errors as assistant content', async () => {
    const sm = createChatStateMachine();
    sm.config.value = config;

    const session = createMockSession({
      route: vi.fn(async () => {
        throw new Error('offline');
      }),
    });

    await sm.sendMessage('q', {
      locale: 'zh',
      t,
      createSession: () => session,
      saveCurrentChat: vi.fn(),
    });

    const assistant = sm.messages.value[sm.messages.value.length - 1];
    expect(assistant.content).toContain('offline');
  });

  it('switchChat aborts in-flight request before switching', () => {
    const sm = createChatStateMachine();
    const abortSpy = vi.fn();
    sm.abortController.value = { abort: abortSpy } as unknown as AbortController;
    sm.isLoading.value = true;

    sm.switchChat([{ role: 'user', content: 'new' }]);

    expect(abortSpy).toHaveBeenCalled();
    expect(sm.isLoading.value).toBe(false);
    expect(sm.messages.value).toEqual([{ role: 'user', content: 'new' }]);
  });

  it('switchChat with null keeps existing messages', () => {
    const sm = createChatStateMachine();
    sm.messages.value = [{ role: 'user', content: 'old' }];
    sm.switchChat(null);
    expect(sm.messages.value).toEqual([{ role: 'user', content: 'old' }]);
  });

  it('calls onComplete only once, after save, in finally block', async () => {
    const sm = createChatStateMachine();
    sm.config.value = config;
    const callOrder: string[] = [];
    const session = createMockSession({
      route: vi.fn(
        async (
          _q: string,
          _h: unknown,
          callbacks: Record<string, (...args: unknown[]) => unknown>,
        ) => {
          callbacks.onComplete('answer', '');
        },
      ),
    });
    const save = vi.fn(() => callOrder.push('save'));

    await sm.sendMessage('q', {
      locale: 'zh',
      t,
      createSession: () => session,
      saveCurrentChat: save,
      onComplete: () => callOrder.push('onComplete'),
    });

    expect(callOrder.filter((c) => c === 'onComplete')).toHaveLength(1);
    expect(callOrder.indexOf('save')).toBeLessThan(callOrder.indexOf('onComplete'));
  });
});
