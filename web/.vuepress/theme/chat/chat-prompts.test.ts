import { describe, it, expect } from 'vitest';
import {
  buildAnswerRulesBlock,
  buildAnswerSystemWithRetrieved,
  buildRouterSystemPrompt,
  buildRouterUserMessage,
  buildSystemPrompt,
} from './chat-prompts';

describe('buildAnswerRulesBlock', () => {
  it('returns Chinese rules', () => {
    const result = buildAnswerRulesBlock();
    expect(result).toContain('地月空间入门指南');
    expect(result).toContain('中文');
  });
});

describe('buildSystemPrompt', () => {
  it('embeds rules and site index', () => {
    const rules = 'RULES';
    const index = '- /foo: Foo';
    const result = buildSystemPrompt(rules, index);
    expect(result).toContain(rules);
    expect(result).toContain('站点索引');
    expect(result).toContain(index);
  });
});

describe('buildAnswerSystemWithRetrieved', () => {
  it('includes excerpts and index', () => {
    const result = buildAnswerSystemWithRetrieved('rules', 'excerpt', 'index');
    expect(result).toContain('rules');
    expect(result).toContain('本站节选');
    expect(result).toContain('excerpt');
    expect(result).toContain('站点索引');
    expect(result).toContain('index');
  });
});

describe('buildRouterSystemPrompt', () => {
  it('mentions maxPaths', () => {
    const result = buildRouterSystemPrompt(5);
    expect(result).toContain('3～5');
    expect(result).toContain('JSON 对象');
  });
});

describe('buildRouterUserMessage', () => {
  it('includes current question', () => {
    const result = buildRouterUserMessage([], '问题');
    expect(result).toContain('当前用户问题：');
    expect(result).toContain('问题');
  });

  it('includes condensed history with long messages truncated', () => {
    const history = [
      { role: 'user', content: 'a'.repeat(600) },
      { role: 'assistant', content: 'short' },
    ];
    const result = buildRouterUserMessage(history, 'q');
    expect(result).toContain('近期对话摘要');
    expect(result).toContain('a'.repeat(500) + '…');
    expect(result).toContain('short');
  });

  it('keeps only the last 6 messages', () => {
    const history = Array.from({ length: 10 }, (_, i) => ({
      role: 'user',
      content: `msg${i}`,
    }));
    const result = buildRouterUserMessage(history, 'q');
    expect(result).toContain('msg9');
    expect(result).toContain('msg4');
    expect(result).not.toContain('msg3');
  });
});
