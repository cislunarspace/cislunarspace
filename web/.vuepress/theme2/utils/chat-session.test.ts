import { afterEach, describe, it, expect, vi } from 'vitest'
import { ChatSession } from './chat-session'
import type { ChatSessionDeps, Router } from './chat-engine-seams'
import type { HierarchicalSiteIndex, NormalizedConfig, RouteCallbacks, SiteContext } from './chat-types'

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
}

const siteIndex: HierarchicalSiteIndex = {
  zh: [
    {
      category: '轨道',
      entries: [{ path: '/cislunar-orbits/', title: '地月轨道' }],
    },
  ],
  en: [],
}

function createCallbacks(): RouteCallbacks {
  return {
    onPathsChosen: vi.fn(),
    onExcerptsLoaded: vi.fn(),
    onChunk: vi.fn(),
    onComplete: vi.fn(),
    onError: vi.fn(),
    onProcessStep: vi.fn(),
    onProcessStepComplete: vi.fn(),
  }
}

function createReader(chunks: string[]): ReadableStreamDefaultReader<Uint8Array> {
  const encoder = new TextEncoder()
  let index = 0
  return {
    read: vi.fn(async () => {
      if (index < chunks.length) {
        return { done: false, value: encoder.encode(chunks[index++]) }
      }
      return { done: true, value: undefined }
    }),
    releaseLock: vi.fn(),
    cancel: vi.fn(),
    closed: Promise.resolve(undefined),
  } as unknown as ReadableStreamDefaultReader<Uint8Array>
}

describe('ChatSession', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('routes through an injected router before requesting an answer', async () => {
    const router: Router = {
      route: vi.fn(async () => ({
        paths: ['/cislunar-orbits/'],
        context: { zh: {}, en: {} },
        usedTwoPhase: true,
        systemPrompt: 'retrieved context prompt',
      })),
    }
    const completeJson = vi.fn(async () => ({
      choices: [{ message: { content: '地月轨道回答' } }],
    }))
    const deps: ChatSessionDeps = {
      router,
      transport: {
        completeJson,
        completeStream: vi.fn(),
      },
      contextLoader: { loadSiteContext: vi.fn() },
    }
    const callbacks = createCallbacks()

    const session = new ChatSession(config, 'zh', siteIndex, deps)
    await session.route('什么是地月轨道？', [{ role: 'user', content: '什么是地月轨道？' }], callbacks, new AbortController().signal)

    expect(router.route).toHaveBeenCalledWith(expect.objectContaining({
      question: '什么是地月轨道？',
      locale: 'zh',
      flatIndex: [{ path: '/cislunar-orbits/', title: '地月轨道' }],
    }))
    expect(completeJson).toHaveBeenCalledWith(
      config.apiEndpoint,
      expect.objectContaining({
        model: 'answer-model',
        messages: expect.arrayContaining([
          { role: 'system', content: 'retrieved context prompt' },
        ]),
      }),
      expect.any(AbortSignal)
    )
    expect(callbacks.onComplete).toHaveBeenCalledWith('地月轨道回答', '')
    expect(callbacks.onError).not.toHaveBeenCalled()
  })

  it('falls back to full-index answering when an injected router fails', async () => {
    const router: Router = {
      route: vi.fn(async () => {
        throw new Error('router unavailable')
      }),
    }
    const completeJson = vi.fn(async () => ({
      choices: [{ message: { content: '回退回答' } }],
    }))
    const callbacks = createCallbacks()

    const session = new ChatSession(config, 'zh', siteIndex, {
      router,
      transport: {
        completeJson,
        completeStream: vi.fn(),
      },
    })
    await session.route('什么是地月轨道？', [], callbacks, new AbortController().signal)

    const answerPayload = completeJson.mock.calls[0][1] as { messages: Array<{ content: string }> }
    expect(answerPayload.messages[0].content).toContain('站点索引')
    expect(answerPayload.messages[0].content).toContain('/cislunar-orbits/')
    expect(callbacks.onProcessStepComplete).toHaveBeenCalledWith('stepNav', '导览未成功')
    expect(callbacks.onComplete).toHaveBeenCalledWith('回退回答', '')
  })

  it('caches loaded site context from the default context loader', async () => {
    const context: SiteContext = {
      zh: { '/cislunar-orbits/': { title: '地月轨道', text: '轨道节选' } },
      en: {},
    }
    const fetchMock = vi.fn(async () => new Response(JSON.stringify(context), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const session = new ChatSession(config, 'zh', siteIndex)
    await expect(session.loadSiteContext()).resolves.toEqual(context)
    await expect(session.loadSiteContext()).resolves.toEqual(context)

    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toHaveBeenCalledWith('/ai-chat-context.json', expect.objectContaining({ cache: 'no-store' }))
  })

  it('returns empty context when the default context loader cannot fetch context', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response('', { status: 500 })))

    const session = new ChatSession(config, 'zh', siteIndex)

    await expect(session.loadSiteContext()).resolves.toEqual({ zh: {}, en: {} })
  })

  it('streams answer chunks through an injected transport', async () => {
    const router: Router = {
      route: vi.fn(async () => ({
        paths: ['/cislunar-orbits/'],
        context: null,
        usedTwoPhase: true,
        systemPrompt: 'stream prompt',
      })),
    }
    const reader = createReader([
      'data: {"choices":[{"delta":{"reasoning_content":"思考"}}]}\n',
      'data: {"choices":[{"delta":{"content":"回答"}}]}\n',
    ])
    const completeStream = vi.fn(async () => reader)
    const callbacks = createCallbacks()

    const session = new ChatSession({ ...config, stream: true }, 'zh', siteIndex, {
      router,
      transport: {
        completeJson: vi.fn(),
        completeStream,
      },
    })
    await session.route('什么是地月轨道？', [], callbacks, new AbortController().signal)

    expect(completeStream).toHaveBeenCalledWith(
      config.apiEndpoint,
      expect.objectContaining({ stream: true }),
      expect.any(AbortSignal)
    )
    expect(callbacks.onChunk).toHaveBeenLastCalledWith({ reasoning_content: '思考', content: '回答' })
    expect(callbacks.onComplete).toHaveBeenCalledWith('回答', '思考')
  })

  it('propagates abort errors from an injected router', async () => {
    const abortError = new DOMException('Aborted', 'AbortError')
    const router: Router = {
      route: vi.fn(async () => {
        throw abortError
      }),
    }
    const callbacks = createCallbacks()

    const session = new ChatSession(config, 'zh', siteIndex, {
      router,
      transport: {
        completeJson: vi.fn(),
        completeStream: vi.fn(),
      },
    })

    await expect(session.route('取消请求', [], callbacks, new AbortController().signal)).rejects.toBe(abortError)
    expect(callbacks.onError).not.toHaveBeenCalled()
  })

  it('does not expose upstream response body when default non-stream transport fails', async () => {
    vi.stubGlobal('fetch', vi.fn(async (input: string) => {
      if (input === '/ai-chat-context.json') {
        return new Response(JSON.stringify({ zh: {}, en: {} }), { status: 200 })
      }
      return new Response('SECRET_UPSTREAM_DIAGNOSTIC', { status: 502 })
    }))
    const callbacks = createCallbacks()

    const session = new ChatSession({ ...config, twoPhaseRetrieval: false }, 'zh', siteIndex)
    await session.route('问题', [], callbacks, new AbortController().signal)

    expect(callbacks.onError).toHaveBeenCalledWith('networkError', 'HTTP 502')
    expect(callbacks.onError).not.toHaveBeenCalledWith('networkError', expect.stringContaining('SECRET_UPSTREAM_DIAGNOSTIC'))
  })

  it('emits emptyReply error when non-streamed response has no content', async () => {
    const completeJson = vi.fn(async () => ({
      choices: [{ message: { content: '' } }],
    }))
    const callbacks = createCallbacks()

    const session = new ChatSession({ ...config, twoPhaseRetrieval: false }, 'zh', siteIndex, {
      transport: { completeJson, completeStream: vi.fn() },
    })

    await session.route('空问题', [], callbacks, new AbortController().signal)

    expect(callbacks.onError).toHaveBeenCalledWith('emptyReply')
    expect(callbacks.onComplete).not.toHaveBeenCalled()
  })

  it('emits emptyReply error when streamed response produces no content', async () => {
    const reader = createReader([
      'data: {"choices":[{"delta":{"reasoning_content":"思考"}}]}\n',
    ])
    const completeStream = vi.fn(async () => reader)
    const callbacks = createCallbacks()

    const session = new ChatSession(
      { ...config, stream: true, twoPhaseRetrieval: false },
      'zh',
      siteIndex,
      {
        transport: { completeJson: vi.fn(), completeStream },
      },
    )

    await session.route('空问题', [], callbacks, new AbortController().signal)

    expect(callbacks.onError).toHaveBeenCalledWith('emptyReply')
    expect(callbacks.onComplete).not.toHaveBeenCalled()
  })

  it('trims history to maxHistoryTurns when sending to the answer phase', async () => {
    const router: Router = {
      route: vi.fn(async () => ({
        paths: ['/cislunar-orbits/'],
        context: { zh: {}, en: {} },
        usedTwoPhase: true,
        systemPrompt: 'prompt',
      })),
    }
    const completeJson = vi.fn(async () => ({
      choices: [{ message: { content: '回答' } }],
    }))
    const callbacks = createCallbacks()

    const sessionConfig = { ...config, maxHistoryTurns: 1 }
    const session = new ChatSession(sessionConfig, 'zh', siteIndex, {
      router,
      transport: { completeJson, completeStream: vi.fn() },
    })

    // 4 user messages = 4 history items. maxHistoryTurns=1 means max 2 kept.
    const longHistory = [
      { role: 'user' as const, content: 'msg1' },
      { role: 'assistant' as const, content: 'ans1' },
      { role: 'user' as const, content: 'msg2' },
      { role: 'assistant' as const, content: 'ans2' },
    ]

    await session.route('follow up', longHistory, callbacks, new AbortController().signal)

    // The router receives the full history; the answer phase trims to last 2.
    const answerPayload = completeJson.mock.calls[0][1] as { messages: Array<{ role: string; content: string }> }
    // system + last 2 history messages = 3 total
    expect(answerPayload.messages.length).toBe(3)
    expect(answerPayload.messages[1].content).toBe('msg2')
    expect(answerPayload.messages[2].content).toBe('ans2')
  })
})
