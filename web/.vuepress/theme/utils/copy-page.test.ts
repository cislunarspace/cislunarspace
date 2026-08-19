import { describe, it, expect } from 'vitest';
import { getCopyPageLocaleText, shouldShowCopyButton } from './copy-page';

describe('getCopyPageLocaleText', () => {
  it('returns Chinese labels for Chinese path', () => {
    const result = getCopyPageLocaleText('/space-news/2025/01/article');
    expect(result.copy).toBe('复制页面');
    expect(result.copied).toBe('已复制');
  });

  it('returns English labels for /en/ path', () => {
    const result = getCopyPageLocaleText('/en/space-news/2025/01/article');
    expect(result.copy).toBe('Copy page');
    expect(result.copied).toBe('Copied!');
  });
});

describe('shouldShowCopyButton', () => {
  it('hides on Chinese homepage', () => {
    expect(shouldShowCopyButton('/', { home: true })).toBe(false);
  });

  it('hides on English homepage', () => {
    expect(shouldShowCopyButton('/en/', { home: true })).toBe(false);
  });

  it('hides on ai-chat page', () => {
    expect(shouldShowCopyButton('/ai-chat', {})).toBe(false);
  });

  it('hides on English ai-chat page', () => {
    expect(shouldShowCopyButton('/en/ai-chat', {})).toBe(false);
  });

  it('hides when frontmatter has home: true', () => {
    expect(shouldShowCopyButton('/some-page', { home: true })).toBe(false);
  });

  it('shows on a regular article page', () => {
    expect(
      shouldShowCopyButton('/space-news/2025/01/article', { layout: 'SpaceNewsArticle' }),
    ).toBe(true);
  });

  it('shows on an English article page', () => {
    expect(shouldShowCopyButton('/en/space-news/2025/01/article', {})).toBe(true);
  });
});
