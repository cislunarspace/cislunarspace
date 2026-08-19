import { describe, it, expect, vi } from 'vitest';
import { createChatUIManager } from './chat-ui-manager';
import type { Message } from '../chat/chat-types';

describe('createChatUIManager', () => {
  it('updates suggested questions by locale', () => {
    const ui = createChatUIManager();
    ui.updateSuggestedQuestions(false);
    expect(ui.suggestedQuestions.value[0]).toBe('什么是地月空间？');
    ui.updateSuggestedQuestions(true);
    expect(ui.suggestedQuestions.value[0]).toBe('What is cislunar space?');
  });

  it('auto-resizes a textarea', () => {
    const ui = createChatUIManager();
    const input = document.createElement('textarea');
    input.style.height = '0px';
    Object.defineProperty(input, 'scrollHeight', { value: 120, configurable: true });
    ui.autoResize(input);
    expect(input.style.height).toBe('120px');
  });

  it('scrolls a container to the bottom', () => {
    const ui = createChatUIManager();
    const container = document.createElement('div');
    Object.defineProperty(container, 'scrollHeight', { value: 500, configurable: true });
    const scrollTo = vi.fn();
    container.scrollTo = scrollTo;
    ui.scrollToBottom(container, 'auto');
    expect(scrollTo).toHaveBeenCalledWith({ top: 500, behavior: 'auto' });
  });

  it('returns empty text for loading placeholder assistant message', () => {
    const ui = createChatUIManager();
    const messages: Message[] = [{ role: 'assistant', content: '' }];
    const text = ui.getMessageText(messages[0], 0, messages, true);
    expect(text).toBe('');
  });

  it('returns content for non-placeholder messages', () => {
    const ui = createChatUIManager();
    const messages: Message[] = [{ role: 'assistant', content: 'hello' }];
    expect(ui.getMessageText(messages[0], 0, messages, true)).toBe('hello');
  });

  it('appends cursor blink to the latest assistant message while loading', () => {
    const ui = createChatUIManager();
    const messages: Message[] = [{ role: 'assistant', content: 'hello' }];
    const html = ui.renderMessageHtml(messages[0], 0, messages, true);
    expect(html).toContain('cursor-blink');
  });
});
