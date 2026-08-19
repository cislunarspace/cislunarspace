import { afterEach, describe, it, expect, vi } from 'vitest';
import { ChatSession } from './chat-session';
import type { ChatAnswerEngine, AnswerPhase } from './chat-answer-engine';
import type { ChatContextManager } from './chat-context-manager';
import type { ChatSessionDeps, ChatTransport } from './chat-engine-seams';
import type { ChatRouter, RouterCallbacks } from './chat-router';
import type {
  HierarchicalSiteIndex,
  Message,
  NormalizedConfig,
  RouteCallbacks,
  SiteContext,
} from './chat-types';

const config: NormalizedConfig = {
  apiEndpoint: '/api/ai/v1/chat/completions',
  model: 'answer-model',
  routerModel: 'router-model',
  temperature: 0.7,
  routerTemperature: 0.2,
  twoPhaseRetrieval: true,
  twoPhaseContextCharBudget: 45000,
  routerMaxPaths: 8,
  stream: false,
  maxHistoryTurns: 10,
};

const siteIndex: HierarchicalSiteIndex = {
  zh: [
    {
      category: '轨道',
      entries: [{ path: '/cislunar-orbits/', title: '地月轨道' }],
    },
  ],
  en: [],
};

function createCallbacks(): RouteCallbacks {
  return {
    onPathsChosen: vi.fn(),
    onExcerptsLoaded: vi.fn(),
    onChunk: vi.fn(),
    onComplete: vi.fn(),
    onError: vi.fn(),
    onProcessStep: vi.fn(),
    onProcessStepComplete: vi.fn(),
  };
}

function createReader(chunks: string[]): ReadableStreamDefaultReader<Uint8Array> {
  const encoder = new TextEncoder();
  let index = 0;
  return {
    read: vi.fn(async () => {
      if (index < chunks.length) {
        return { done: false, value: encoder.encode(chunks[index++]) };
      }
      return { done: true, value: undefined };
    }),
    releaseLock: vi.fn(),
    cancel: vi.fn(),
    closed: Promise.resolve(undefined),
  } as unknown as ReadableStreamDefaultReader<Uint8Array>;
}

/** Build a stub ChatAnswerEngine that just records the call and returns a
 *  payload derived from the provided systemPrompt. */
function createAnswerEngineStub(
  opts: { systemPrompt: string; usedTwoPhase?: boolean; stream?: boolean } = {
    systemPrompt: 'retrieved context prompt',
  },
): {
  engine: ChatAnswerEngine;
  buildSpy: ReturnType<typeof vi.fn>;
} {
  const buildSpy = vi.fn(async (): Promise<AnswerPhase> => ({
    systemPrompt: opts.systemPrompt,
    history: [],
    payload: {
      model: 'answer-model',
      messages: [{ role: 'system', content: opts.systemPrompt }],
      stream: opts.stream ?? false,
    },
    usedTwoPhase: opts.usedTwoPhase ?? true,
  }));
  return { engine: { buildAnswerPhase: buildSpy }, buildSpy };
}

function createRouterStub(opts: { paths: string[]; throw?: Error }): ChatRouter {
  return {
    route: vi.fn(async (_params: unknown) => {
      if (opts.throw) throw opts.throw;
      return { paths: opts.paths };
    }),
  };
}

function createTransportStub(
  opts: {
    json?: () => Promise<unknown>;
    stream?: () => Promise<ReadableStreamDefaultReader<Uint8Array> | null>;
  } = {},
): ChatTransport {
  return {
    completeJson:
      opts.json ?? vi.fn(async () => ({ choices: [{ message: { content: '地月轨道回答' } }] })),
    completeStream: opts.stream ?? vi.fn(),
  };
}

function createContextManagerStub(
  context: SiteContext | null = null,
): ChatContextManager & { loadSpy: ReturnType<typeof vi.fn> } {
  const loadSpy = vi.fn(async () => context);
  return { loadContext: loadSpy, loadSpy };
}

describe('ChatSession', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('routes through an injected router before requesting an answer', async () => {
    const router = createRouterStub({ paths: ['/cislunar-orbits/'] });
    const { engine, buildSpy } = createAnswerEngineStub({
      systemPrompt: 'retrieved context prompt',
    });
    const transport = createTransportStub({
      json: vi.fn(async () => ({ choices: [{ message: { content: '地月轨道回答' } }] })),
    });
    const deps: ChatSessionDeps = {
      router,
      answerEngine: engine,
      transport,
      contextManager: createContextManagerStub(),
    };
    const callbacks = createCallbacks();

    const session = new ChatSession(config, 'zh', siteIndex, deps);
    await session.route(
      '什么是地月轨道？',
      [{ role: 'user', content: '什么是地月轨道？' }],
      callbacks,
      new AbortController().signal,
    );

    expect(router.route).toHaveBeenCalledWith(
      expect.objectContaining({
        question: '什么是地月轨道？',
        locale: 'zh',
        flatIndex: [{ path: '/cislunar-orbits/', title: '地月轨道' }],
      }),
    );
    expect(buildSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        paths: ['/cislunar-orbits/'],
        locale: 'zh',
      }),
    );
    expect(transport.completeJson).toHaveBeenCalledWith(
      config.apiEndpoint,
      expect.objectContaining({
        model: 'answer-model',
        messages: expect.arrayContaining([{ role: 'system', content: 'retrieved context prompt' }]),
      }),
      expect.any(AbortSignal),
    );
    expect(callbacks.onComplete).toHaveBeenCalledWith('地月轨道回答', '');
    expect(callbacks.onError).not.toHaveBeenCalled();
  });

  it('falls back to full-index answering when an injected router fails', async () => {
    const router = createRouterStub({ paths: [], throw: new Error('router unavailable') });
    const { engine } = createAnswerEngineStub({
      systemPrompt: 'fallback system prompt with site index',
    });
    const transport = createTransportStub({
      json: vi.fn(async () => ({ choices: [{ message: { content: '回退回答' } }] })),
    });
    const callbacks = createCallbacks();

    const session = new ChatSession(config, 'zh', siteIndex, {
      router,
      answerEngine: engine,
      transport,
      contextManager: createContextManagerStub(),
    });
    await session.route('什么是地月轨道？', [], callbacks, new AbortController().signal);

    expect(engine.buildAnswerPhase).toHaveBeenCalledWith(expect.objectContaining({ paths: [] }));
    expect(transport.completeJson).toHaveBeenCalled();
    expect(callbacks.onProcessStepComplete).toHaveBeenCalledWith('stepNav', '导览未成功');
    expect(callbacks.onComplete).toHaveBeenCalledWith('回退回答', '');
  });

  it('caches loaded site context from the default context manager', async () => {
    const context: SiteContext = {
      zh: { '/cislunar-orbits/': { title: '地月轨道', text: '轨道节选' } },
      en: {},
    };
    const fetchMock = vi.fn(async () => new Response(JSON.stringify(context), { status: 200 }));
    vi.stubGlobal('fetch', fetchMock);

    const session = new ChatSession(config, 'zh', siteIndex);
    await expect(session.loadSiteContext()).resolves.toEqual(context);
    await expect(session.loadSiteContext()).resolves.toEqual(context);

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      '/ai-chat-context.json',
      expect.objectContaining({ cache: 'no-store' }),
    );
  });

  it('returns empty context when the default context manager cannot fetch context', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('', { status: 500 })),
    );

    const session = new ChatSession(config, 'zh', siteIndex);

    await expect(session.loadSiteContext()).resolves.toEqual({ zh: {}, en: {} });
  });

  it('streams answer chunks through an injected transport', async () => {
    const router = createRouterStub({ paths: ['/cislunar-orbits/'] });
    const { engine } = createAnswerEngineStub({ systemPrompt: 'stream prompt', stream: true });
    const reader = createReader([
      'data: {"choices":[{"delta":{"reasoning_content":"思考"}}]}\n',
      'data: {"choices":[{"delta":{"content":"回答"}}]}\n',
    ]);
    const transport = createTransportStub({
      json: vi.fn(),
      stream: vi.fn(async () => reader),
    });
    const callbacks = createCallbacks();

    const session = new ChatSession({ ...config, stream: true }, 'zh', siteIndex, {
      router,
      answerEngine: engine,
      transport,
      contextManager: createContextManagerStub(),
    });
    await session.route('什么是地月轨道？', [], callbacks, new AbortController().signal);

    expect(transport.completeStream).toHaveBeenCalledWith(
      config.apiEndpoint,
      expect.objectContaining({ stream: true }),
      expect.any(AbortSignal),
    );
    expect(callbacks.onChunk).toHaveBeenLastCalledWith({
      reasoning_content: '思考',
      content: '回答',
    });
    expect(callbacks.onComplete).toHaveBeenCalledWith('回答', '思考');
  });

  it('propagates abort errors from an injected router', async () => {
    const abortError = new DOMException('Aborted', 'AbortError');
    const router = createRouterStub({ paths: [], throw: abortError });
    const callbacks = createCallbacks();

    const session = new ChatSession(config, 'zh', siteIndex, {
      router,
      answerEngine: createAnswerEngineStub().engine,
      transport: createTransportStub(),
      contextManager: createContextManagerStub(),
    });

    await expect(
      session.route('取消请求', [], callbacks, new AbortController().signal),
    ).rejects.toBe(abortError);
    expect(callbacks.onError).not.toHaveBeenCalled();
  });

  it('does not expose upstream response body when default non-stream transport fails', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string) => {
        if (input === '/ai-chat-context.json') {
          return new Response(JSON.stringify({ zh: {}, en: {} }), { status: 200 });
        }
        return new Response('SECRET_UPSTREAM_DIAGNOSTIC', { status: 502 });
      }),
    );
    const callbacks = createCallbacks();

    const session = new ChatSession({ ...config, twoPhaseRetrieval: false }, 'zh', siteIndex);
    await session.route('问题', [], callbacks, new AbortController().signal);

    expect(callbacks.onError).toHaveBeenCalledWith('networkError', 'HTTP 502');
    expect(callbacks.onError).not.toHaveBeenCalledWith(
      'networkError',
      expect.stringContaining('SECRET_UPSTREAM_DIAGNOSTIC'),
    );
  });

  it('emits emptyReply error when non-streamed response has no content', async () => {
    const transport = createTransportStub({
      json: vi.fn(async () => ({ choices: [{ message: { content: '' } }] })),
    });
    const callbacks = createCallbacks();

    const session = new ChatSession({ ...config, twoPhaseRetrieval: false }, 'zh', siteIndex, {
      transport,
      answerEngine: createAnswerEngineStub().engine,
      contextManager: createContextManagerStub(),
    });

    await session.route('空问题', [], callbacks, new AbortController().signal);

    expect(callbacks.onError).toHaveBeenCalledWith('emptyReply');
    expect(callbacks.onComplete).not.toHaveBeenCalled();
  });

  it('emits emptyReply error when streamed response produces no content', async () => {
    const reader = createReader(['data: {"choices":[{"delta":{"reasoning_content":"思考"}}]}\n']);
    const transport = createTransportStub({ json: vi.fn(), stream: vi.fn(async () => reader) });
    const callbacks = createCallbacks();

    const session = new ChatSession(
      { ...config, stream: true, twoPhaseRetrieval: false },
      'zh',
      siteIndex,
      {
        transport,
        answerEngine: createAnswerEngineStub().engine,
        contextManager: createContextManagerStub(),
      },
    );

    await session.route('空问题', [], callbacks, new AbortController().signal);

    expect(callbacks.onError).toHaveBeenCalledWith('emptyReply');
    expect(callbacks.onComplete).not.toHaveBeenCalled();
  });

  it('forwards the untrimmed history to the answer engine', async () => {
    const router = createRouterStub({ paths: ['/cislunar-orbits/'] });
    const { engine, buildSpy } = createAnswerEngineStub({ systemPrompt: 'prompt' });
    const transport = createTransportStub({
      json: vi.fn(async () => ({ choices: [{ message: { content: '回答' } }] })),
    });

    const longHistory: Message[] = [
      { role: 'user', content: 'msg1' },
      { role: 'assistant', content: 'ans1' },
      { role: 'user', content: 'msg2' },
      { role: 'assistant', content: 'ans2' },
    ];
    const session = new ChatSession({ ...config, maxHistoryTurns: 1 }, 'zh', siteIndex, {
      router,
      answerEngine: engine,
      transport,
      contextManager: createContextManagerStub(),
    });

    await session.route('follow up', longHistory, createCallbacks(), new AbortController().signal);

    // ChatSession no longer trims history; the answer engine owns that. The
    // session passes the full history through, leaving trimming to the engine.
    expect(buildSpy).toHaveBeenCalledWith(expect.objectContaining({ history: longHistory }));
  });
});
