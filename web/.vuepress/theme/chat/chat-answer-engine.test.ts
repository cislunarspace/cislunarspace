import { describe, it, expect, vi } from 'vitest';
import {
  buildAnswerRulesBlock,
  buildAnswerSystemWithRetrieved,
  buildSystemPrompt,
} from './chat-prompts';
import { buildContextBlob } from './chat-data-utils';
import { createAnswerEngine, readMessage } from './chat-answer-engine';
import type { ChatContextManager } from './chat-context-manager';
import type { HierarchicalSiteIndex, Message, NormalizedConfig, SiteContext } from './chat-types';

const config: NormalizedConfig = {
  apiEndpoint: '/api/ai',
  model: 'answer-model',
  temperature: 0.7,
  twoPhaseRetrieval: true,
  twoPhaseContextCharBudget: 45000,
  routerMaxPaths: 8,
  stream: false,
  maxHistoryTurns: 1,
};

const siteIndex: HierarchicalSiteIndex = [
  { category: '轨道', entries: [{ path: '/cislunar-orbits/', title: '地月轨道' }] },
];

const context: SiteContext = {
  '/cislunar-orbits/': { title: '地月轨道', text: '轨道节选' },
};

function createContextManager(ctx: SiteContext | null = context): ChatContextManager {
  return { loadContext: vi.fn(async () => ctx) };
}

function createCallbacks() {
  return {
    onExcerptsLoaded: vi.fn(),
    onProcessStep: vi.fn(),
    onProcessStepComplete: vi.fn(),
    onChunk: vi.fn(),
    onComplete: vi.fn(),
    onError: vi.fn(),
  };
}

describe('chat-answer-engine', () => {
  describe('createAnswerEngine.buildAnswerPhase', () => {
    it('loads the context, builds the system prompt with retrieved excerpt, and assembles the payload', async () => {
      const engine = createAnswerEngine({ contextManager: createContextManager() });
      const cb = createCallbacks();
      const history: Message[] = [
        { role: 'user', content: 'm1' },
        { role: 'assistant', content: 'a1' },
        { role: 'user', content: 'm2' },
        { role: 'assistant', content: 'a2' },
      ];

      const phase = await engine.buildAnswerPhase({
        paths: ['/cislunar-orbits/'],
        history,
        siteIndex,
        config,
        callbacks: cb,
        signal: new AbortController().signal,
      });

      expect(phase.usedTwoPhase).toBe(true);
      expect(phase.history.length).toBe(2); // maxHistoryTurns=2 → 4 messages
      expect(cb.onExcerptsLoaded).toHaveBeenCalledWith(expect.stringContaining('轨道节选'));

      const payload = phase.payload as {
        model: string;
        messages: Array<{ role: string; content: string }>;
        temperature: number;
        stream: boolean;
      };
      expect(payload.model).toBe('answer-model');
      expect(payload.messages[0]).toEqual({ role: 'system', content: phase.systemPrompt });
      expect(payload.messages[1].content).toBe('m2');
      expect(payload.messages[2].content).toBe('a2');
      expect(payload.temperature).toBe(0.7);
      expect(payload.stream).toBe(false);
    });

    it('falls back to the no-retrieval system prompt when paths is empty', async () => {
      const engine = createAnswerEngine({ contextManager: createContextManager() });
      const cb = createCallbacks();

      const phase = await engine.buildAnswerPhase({
        paths: [],
        history: [],
        siteIndex,
        config,
        callbacks: cb,
        signal: new AbortController().signal,
      });

      expect(phase.usedTwoPhase).toBe(false);
      expect(cb.onExcerptsLoaded).not.toHaveBeenCalled();
    });

    it('falls back to the no-retrieval system prompt when contextManager returns null', async () => {
      const engine = createAnswerEngine({ contextManager: createContextManager(null) });
      const cb = createCallbacks();

      const phase = await engine.buildAnswerPhase({
        paths: ['/cislunar-orbits/'],
        history: [],
        siteIndex,
        config,
        callbacks: cb,
        signal: new AbortController().signal,
      });

      expect(phase.usedTwoPhase).toBe(false);
      expect(cb.onExcerptsLoaded).toHaveBeenCalledWith(null);
    });

    it('reflects stream config in the payload', async () => {
      const engine = createAnswerEngine({ contextManager: createContextManager() });
      const cb = createCallbacks();

      const phase = await engine.buildAnswerPhase({
        paths: ['/cislunar-orbits/'],
        history: [],
        siteIndex,
        config: { ...config, stream: true },
        callbacks: cb,
        signal: new AbortController().signal,
      });

      expect((phase.payload as { stream: boolean }).stream).toBe(true);
    });
  });

  describe('readMessage', () => {
    it('extracts content and reasoning_content from a chat completions response', () => {
      const data = { choices: [{ message: { content: 'final', reasoning_content: 'thinking' } }] };
      expect(readMessage(data)).toEqual({ content: 'final', reasoning_content: 'thinking' });
    });

    it('returns empty object for malformed input', () => {
      expect(readMessage(null)).toEqual({});
      expect(readMessage({})).toEqual({});
      expect(readMessage({ choices: [] })).toEqual({});
    });
  });
});

// Sanity check: the helper exports we use internally exist and are wired together.
describe('chat-prompts integration', () => {
  it('buildContextBlob produces a non-empty string when contexts match the paths', () => {
    const blob = buildContextBlob(context, ['/cislunar-orbits/'], 1000);
    expect(blob).toContain('轨道节选');
  });

  it('buildAnswerSystemWithRetrieved embeds the blob into the system prompt', () => {
    const rules = buildAnswerRulesBlock();
    const indexText = '### 轨道\n- 地月轨道: /cislunar-orbits/';
    const prompt = buildAnswerSystemWithRetrieved(rules, '## CONTEXT\n[节选]', indexText);
    expect(prompt).toContain('节选');
  });

  it('buildSystemPrompt produces a no-retrieval system prompt', () => {
    const rules = buildAnswerRulesBlock();
    const indexText = '### 轨道\n- 地月轨道: /cislunar-orbits/';
    const prompt = buildSystemPrompt(rules, indexText);
    expect(prompt).toContain('地月轨道');
  });
});
