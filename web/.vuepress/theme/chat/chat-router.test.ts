import { describe, it, expect, vi } from 'vitest';
import { createLLMRouter, createKeywordRouter, flatIndexFor } from './chat-router';
import type { ChatTransport } from './chat-engine-seams';
import type { HierarchicalSiteIndex, NormalizedConfig } from './chat-types';

const config: NormalizedConfig = {
  apiEndpoint: '/api/ai',
  model: 'answer',
  routerModel: 'router',
  temperature: 0.7,
  routerTemperature: 0.2,
  twoPhaseRetrieval: true,
  twoPhaseContextCharBudget: 45000,
  routerMaxPaths: 8,
  stream: false,
  maxHistoryTurns: 10,
};

const siteIndex: HierarchicalSiteIndex = [
  {
    category: '轨道',
    entries: [
      { path: '/cislunar-orbits/', title: '地月轨道' },
      { path: '/background/intro/', title: '背景' },
    ],
  },
];

function createCallbacks() {
  return {
    onPathsChosen: vi.fn(),
    onProcessStep: vi.fn(),
    onProcessStepComplete: vi.fn(),
  };
}

function createTransport(respondWith: unknown): ChatTransport {
  return {
    completeJson: vi.fn(async () => respondWith),
    completeStream: vi.fn(),
  };
}

const routerParams = {
  question: '什么是地月轨道？',
  history: [],
  siteIndex,
  flatIndex: flatIndexFor(siteIndex),
  config,
};

describe('chat-router', () => {
  describe('createLLMRouter', () => {
    it('parses paths from the LLM response and validates them against the flat index', async () => {
      const transport = createTransport({
        choices: [
          { message: { content: '{"paths": ["/cislunar-orbits/", "/background/intro/"]}' } },
        ],
      });
      const router = createLLMRouter({ transport });
      const cb = createCallbacks();

      const decision = await router.route({
        ...routerParams,
        callbacks: cb,
        signal: new AbortController().signal,
      });

      expect(decision.paths).toEqual(['/cislunar-orbits/', '/background/intro/']);
      expect(cb.onPathsChosen).toHaveBeenCalledWith(['/cislunar-orbits/', '/background/intro/']);
      expect(cb.onProcessStep).toHaveBeenCalledWith('stepNav');
      expect(cb.onProcessStepComplete).toHaveBeenCalledWith('stepNav', expect.any(String));
      expect(cb.onProcessStep).toHaveBeenCalledWith('stepExcerpt');
    });

    it('falls back to keyword matching when the LLM returns no valid paths', async () => {
      const transport = createTransport({
        choices: [{ message: { content: '/no-such-path/' } }],
      });
      const router = createLLMRouter({ transport });
      const cb = createCallbacks();

      const decision = await router.route({
        ...routerParams,
        question: '轨道',
        callbacks: cb,
        signal: new AbortController().signal,
      });

      // Keyword fallback picks the "轨道" path
      expect(decision.paths).toContain('/cislunar-orbits/');
    });

    it('falls back to keyword matching when the LLM transport throws', async () => {
      const transport: ChatTransport = {
        completeJson: vi.fn(async () => {
          throw new Error('boom');
        }),
        completeStream: vi.fn(),
      };
      const router = createLLMRouter({ transport });
      const cb = createCallbacks();

      const decision = await router.route({
        ...routerParams,
        question: '轨道',
        callbacks: cb,
        signal: new AbortController().signal,
      });

      expect(decision.paths).toContain('/cislunar-orbits/');
      expect(cb.onProcessStepComplete).toHaveBeenCalledWith('stepNav', '导览未成功');
    });

    it('rethrows AbortError without falling back', async () => {
      const abortError = new DOMException('Aborted', 'AbortError');
      const transport: ChatTransport = {
        completeJson: vi.fn(async () => {
          throw abortError;
        }),
        completeStream: vi.fn(),
      };
      const router = createLLMRouter({ transport });
      const cb = createCallbacks();

      await expect(
        router.route({ ...routerParams, callbacks: cb, signal: new AbortController().signal }),
      ).rejects.toBe(abortError);
    });
  });

  describe('createKeywordRouter', () => {
    it('returns paths whose titles or paths match keywords in the question', async () => {
      const router = createKeywordRouter();
      const cb = createCallbacks();

      const decision = await router.route({
        ...routerParams,
        question: '地月轨道',
        callbacks: cb,
        signal: new AbortController().signal,
      });

      expect(decision.paths).toContain('/cislunar-orbits/');
      expect(cb.onPathsChosen).toHaveBeenCalled();
    });
  });

  describe('flatIndexFor', () => {
    it('flattens the hierarchical site index', () => {
      expect(flatIndexFor(siteIndex)).toEqual([
        { path: '/cislunar-orbits/', title: '地月轨道' },
        { path: '/background/intro/', title: '背景' },
      ]);
    });
  });
});
