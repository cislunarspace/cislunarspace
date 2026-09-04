import { describe, it, expect } from 'vitest';
import { shouldShowCopyButton } from './copy-page';

describe('shouldShowCopyButton', () => {
  it('hides on homepage', () => {
    expect(shouldShowCopyButton('/', { home: true })).toBe(false);
  });

  it('hides on ai-chat page', () => {
    expect(shouldShowCopyButton('/ai-chat', {})).toBe(false);
    expect(shouldShowCopyButton('/ai-chat/', {})).toBe(false);
  });

  it('hides when frontmatter has home: true', () => {
    expect(shouldShowCopyButton('/some/page/', { home: true })).toBe(false);
  });

  it('shows on an article page', () => {
    expect(shouldShowCopyButton('/space-news/2025/01/article', {})).toBe(true);
  });
});
