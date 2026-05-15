import { decodeStream } from './chat-stream'
import {
  buildAnswerRulesBlock,
  buildAnswerSystemWithRetrieved,
  buildContextBlob,
  buildRouterSystemPrompt,
  buildRouterUserMessage,
  buildSiteMapText,
  buildSystemPrompt,
  flattenCategories,
  formatPathList,
  normalizeAndValidatePaths,
  parseRouterResponse,
} from './chat-prompts'
import type {
  HierarchicalSiteIndex,
  IndexRow,
  Message,
  NormalizedConfig,
  RouteCallbacks,
  SiteContext,
} from './chat-types'
import type { ChatSessionDeps, ChatTransport, ContextLoader, Router, RouterCallbacks } from './chat-engine-seams'
import { keywordRouter } from './chat-engine-seams'

export class ChatSession {
  private readonly cfg: NormalizedConfig
  private readonly locale: 'zh' | 'en'
  private readonly siteIndex: HierarchicalSiteIndex
  private readonly flatIndex: IndexRow[]
  private readonly router: Router
  private readonly transport: ChatTransport
  private readonly contextLoader: ContextLoader
  private siteContext: SiteContext | null = null
  private contextLoadPromise: Promise<SiteContext> | null = null

  constructor(cfg: NormalizedConfig, locale: 'zh' | 'en', siteIndex: HierarchicalSiteIndex, deps: ChatSessionDeps = {}) {
    this.cfg = cfg
    this.locale = locale
    this.siteIndex = siteIndex
    this.flatIndex = flattenCategories(siteIndex[locale] || [])
    this.transport = deps.transport ?? this.createFetchTransport()
    this.contextLoader = deps.contextLoader ?? this.createFetchContextLoader()
    this.router = deps.router ?? this.createLLMRouter()
  }

  async loadSiteContext(signal: AbortSignal = new AbortController().signal): Promise<SiteContext> {
    return this.contextLoader.loadSiteContext(signal)
  }

  private createFetchContextLoader(): ContextLoader {
    return {
      loadSiteContext: async (signal) => {
        if (this.siteContext) return this.siteContext
        if (this.contextLoadPromise) return this.contextLoadPromise

        this.contextLoadPromise = fetch('/ai-chat-context.json', { cache: 'no-store', signal })
          .then((r) => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`)
            return r.json() as Promise<SiteContext>
          })
          .then((data) => {
            this.siteContext = data
            return data
          })
          .catch((err) => {
            if (err instanceof Error && err.name === 'AbortError') throw err
            this.siteContext = { zh: {}, en: {} }
            return this.siteContext
          })
          .finally(() => {
            this.contextLoadPromise = null
          })

        return this.contextLoadPromise
      },
    }
  }

  private createLLMRouter(): Router {
    return {
      route: async ({ question, history, siteIndex, flatIndex, config, locale, callbacks, signal }) => {
        const loc = locale
        const categories = siteIndex[loc] || []
        const indexRows = flatIndex
        const indexText = categories
          .map((cat) => {
            const entries = cat.entries.map((e) => `- ${e.title}: ${e.path}`).join('\n')
            return `### ${cat.category}\n${entries}`
          })
          .join('\n')

        const mapText = buildSiteMapText(categories)
        const routerUser = buildRouterUserMessage(history, question, loc)
        const maxPaths = config.routerMaxPaths ?? 8

        callbacks.onProcessStep('stepNav')

        let rawRouter: string
        try {
          rawRouter = await this.callChatJson(
            {
              model: config.routerModel || config.model,
              max_tokens: 800,
              temperature: config.routerTemperature ?? 0.2,
              messages: [
                { role: 'system', content: buildRouterSystemPrompt(loc, maxPaths) },
                {
                  role: 'user',
                  content:
                    `${loc === 'en' ? 'Site map: one line per row as path<tab>title' : '站点地图：每行 path<tab>title'}\n\n${mapText}\n\n---\n\n${routerUser}`,
                },
              ],
              stream: false,
            },
            signal
          )
        } catch (err) {
          if (err instanceof Error && err.name === 'AbortError') throw err
          callbacks.onProcessStepComplete('stepNav', loc === 'en' ? 'error' : '导览未成功')
          return keywordRouter({ question, flatIndex, config, callbacks })
        }

        let chosen = normalizeAndValidatePaths(
          parseRouterResponse(rawRouter).paths,
          new Set(indexRows.map((r) => r.path)),
          maxPaths
        )

        if (!chosen.length) {
          return keywordRouter({ question, flatIndex, config, callbacks })
        }

        callbacks.onProcessStepComplete(
          'stepNav',
          formatPathList(chosen, indexRows) || (loc === 'en' ? 'ok' : '已选')
        )
        callbacks.onProcessStep('stepExcerpt')

        const ctx = await this.loadSiteContext(signal)
        const blob = buildContextBlob(
          ctx,
          loc,
          chosen,
          config.twoPhaseContextCharBudget ?? 45000,
          loc === 'en'
        )

        callbacks.onExcerptsLoaded(blob)

        const systemPrompt = blob
          ? buildAnswerSystemWithRetrieved(buildAnswerRulesBlock(loc), blob, indexText, loc)
          : buildSystemPrompt(buildAnswerRulesBlock(loc), indexText, loc)

        return { paths: chosen, context: ctx, usedTwoPhase: !!blob, systemPrompt }
      },
    }
  }

  async route(
    question: string,
    history: Message[],
    callbacks: RouteCallbacks,
    signal: AbortSignal
  ): Promise<void> {
    const loc = this.locale
    const categories = this.siteIndex[loc] || []
    const indexRows = this.flatIndex
    const rules = buildAnswerRulesBlock(loc)

    const indexText = categories
      .map((cat) => {
        const entries = cat.entries.map((e) => `- ${e.title}: ${e.path}`).join('\n')
        return `### ${cat.category}\n${entries}`
      })
      .join('\n')

    const routerCallbacks: RouterCallbacks = {
      onPathsChosen: (paths) =>
        callbacks.onProcessStepComplete('stepNav', formatPathList(paths, indexRows) || (loc === 'en' ? 'ok' : '已选')),
      onExcerptsLoaded: (text) => callbacks.onExcerptsLoaded(text),
      onProcessStep: (key, detail) => callbacks.onProcessStep(key, detail),
      onProcessStepComplete: (key, detail) => callbacks.onProcessStepComplete(key, detail),
    }

    let systemPrompt: string
    let usedTwoPhase = false

    if (this.cfg.twoPhaseRetrieval !== false && indexRows.length) {
      const router = this.router
      try {
        const result = await router.route({
          question,
          history,
          siteIndex: this.siteIndex,
          flatIndex: indexRows,
          config: this.cfg,
          locale: loc,
          callbacks: routerCallbacks,
          signal,
        })
        systemPrompt = result.systemPrompt || buildSystemPrompt(rules, indexText, loc)
        usedTwoPhase = result.usedTwoPhase
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') throw err
        callbacks.onProcessStepComplete('stepNav', loc === 'en' ? 'error' : '导览未成功')
        callbacks.onProcessStep('stepAnswer')
        systemPrompt = buildSystemPrompt(rules, indexText, loc)
      }
    } else {
      callbacks.onProcessStep('stepAnswerAlone')
      systemPrompt = buildSystemPrompt(rules, indexText, loc)
    }

    if (!usedTwoPhase) {
      systemPrompt = buildSystemPrompt(rules, indexText, loc)
    }

    const maxHistory = Number(this.cfg.maxHistoryTurns || 10)
    const historyMessages = history.slice(-maxHistory * 2).map((m) => ({
      role: m.role,
      content: m.content,
    }))

    const useStream = this.cfg.stream !== false
    const payload = {
      model: this.cfg.model,
      messages: [{ role: 'system', content: systemPrompt }, ...historyMessages],
      temperature: this.cfg.temperature ?? 0.7,
      stream: useStream,
    }

    try {
      if (useStream) {
        const reader = await this.transport.completeStream(this.cfg.apiEndpoint, payload, signal)

        if (reader) {
          let content = ''
          let reasoning = ''

          await decodeStream(reader, {
            onChunk: (delta) => {
              if (delta.reasoning_content) reasoning += delta.reasoning_content
              if (delta.content) content += delta.content
              callbacks.onChunk({ reasoning_content: reasoning, content })
            },
            onComplete: () => {
              const trimmed = content.trim()
              if (!trimmed) {
                callbacks.onError('emptyReply')
                return
              }
              callbacks.onComplete(trimmed, reasoning)
            },
            onError: (e) => {
              callbacks.onError('networkError', e.message)
            },
          }, signal)
          return
        }
      }

      const data = await this.transport.completeJson(this.cfg.apiEndpoint, payload, signal)
      const msg = this.readMessage(data)
      const content = (msg.content || '').trim()
      const reasoning = msg.reasoning_content ? String(msg.reasoning_content) : ''
      if (!content) {
        callbacks.onError('emptyReply')
        return
      }
      callbacks.onComplete(content, reasoning)
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') throw err
      callbacks.onError('networkError', err instanceof Error ? err.message : String(err))
    }
  }

  private async callChatJson(payload: Record<string, unknown>, signal: AbortSignal): Promise<string> {
    const data = await this.transport.completeJson(this.cfg.apiEndpoint, payload, signal)
    return this.readMessage(data).content || ''
  }

  private createFetchTransport(): ChatTransport {
    return {
      completeJson: async (endpoint, payload, signal) => {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal,
        })
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        return res.json()
      },
      completeStream: async (endpoint, payload, signal) => {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal,
        })
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} ${res.statusText}`)
        }
        return res.body?.getReader() ?? null
      },
    }
  }

  private readMessage(data: unknown): { content?: string; reasoning_content?: unknown } {
    if (!data || typeof data !== 'object' || !('choices' in data) || !Array.isArray(data.choices)) {
      return {}
    }

    const choice = data.choices[0]
    if (!choice || typeof choice !== 'object' || !('message' in choice) || !choice.message || typeof choice.message !== 'object') {
      return {}
    }

    return choice.message as { content?: string; reasoning_content?: unknown }
  }

}
