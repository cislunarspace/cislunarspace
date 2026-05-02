/**
 * ChatSession — the stateful two-phase retrieval engine.
 *
 * Encapsulates the full sendMessage logic extracted from AiChat.vue.
 * The Vue component provides RouteCallbacks to receive events and
 * update its own reactive state.
 *
 * All network calls go through this class; swapping the HTTP adapter
 * only requires changing callChatJson.
 */
import { decodeStream } from './chat-stream'
import {
  buildAnswerRulesBlock,
  buildAnswerSystemWithRetrieved,
  buildContextBlob,
  buildRouterSystemPrompt,
  buildRouterUserMessage,
  buildSiteMapText,
  buildSystemPrompt,
  fallbackKeywordPaths,
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

export class ChatSession {
  private readonly cfg: NormalizedConfig
  private readonly locale: 'zh' | 'en'
  private readonly siteIndex: HierarchicalSiteIndex
  private readonly flatIndex: IndexRow[]
  private siteContext: SiteContext | null = null
  private contextLoadPromise: Promise<SiteContext> | null = null

  constructor(cfg: NormalizedConfig, locale: 'zh' | 'en', siteIndex: HierarchicalSiteIndex) {
    this.cfg = cfg
    this.locale = locale
    this.siteIndex = siteIndex
    this.flatIndex = flattenCategories(siteIndex[locale] || [])
  }

  /** Load the site context JSON (with in-memory cache). */
  async loadSiteContext(): Promise<SiteContext> {
    if (this.siteContext) return this.siteContext
    if (this.contextLoadPromise) return this.contextLoadPromise

    this.contextLoadPromise = fetch('/ai-chat-context.json', { cache: 'no-store' })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json() as Promise<SiteContext>
      })
      .then((data) => {
        this.siteContext = data
        return data
      })
      .catch(() => {
        this.siteContext = { zh: {}, en: {} }
        return this.siteContext!
      })
      .finally(() => {
        this.contextLoadPromise = null
      })

    return this.contextLoadPromise
  }

  /** The main two-phase sendMessage loop. */
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

    // Build index text for prompts (from hierarchical categories)
    const indexText = categories
      .map((cat) => {
        const entries = cat.entries.map((e) => `- ${e.title}: ${e.path}`).join('\n')
        return `### ${cat.category}\n${entries}`
      })
      .join('\n')

    let systemPrompt = buildSystemPrompt(rules, indexText, loc)
    let usedTwoPhase = false

    // Phase 1: two-phase retrieval
    if (this.cfg.twoPhaseRetrieval !== false && indexRows.length) {
      try {
        const mapText = buildSiteMapText(categories)
        const routerUser = buildRouterUserMessage(history, question, loc)
        const maxPaths = this.cfg.routerMaxPaths ?? 8

        callbacks.onProcessStep(callbacks.t('stepNav'))

        const rawRouter = await this.callChatJson(
          {
            model: this.cfg.routerModel || this.cfg.model,
            max_tokens: 800,
            temperature: this.cfg.routerTemperature ?? 0.2,
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

        let chosen = normalizeAndValidatePaths(
          parseRouterResponse(rawRouter).paths,
          new Set(indexRows.map((r) => r.path)),
          maxPaths
        )

        if (!chosen.length) {
          chosen = fallbackKeywordPaths(question, indexRows, 4)
        }

        if (chosen.length) {
          callbacks.onProcessStepComplete(
            callbacks.t('stepNav'),
            formatPathList(chosen, indexRows) || (loc === 'en' ? 'ok' : '已选')
          )
          callbacks.onProcessStep(callbacks.t('stepExcerpt'))

          const ctx = await this.loadSiteContext()
          const blob = buildContextBlob(
            ctx,
            loc,
            chosen,
            this.cfg.twoPhaseContextCharBudget ?? 45000,
            loc === 'en'
          )

          callbacks.onExcerptsLoaded(blob)

          if (blob) {
            systemPrompt = buildAnswerSystemWithRetrieved(rules, blob, indexText, loc)
            usedTwoPhase = true
          }
        } else {
          callbacks.onProcessStepComplete(callbacks.t('stepNav'), callbacks.t('noStrongMatch'))
        }
        callbacks.onProcessStep(callbacks.t('stepAnswer'))
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') throw err
        callbacks.onProcessStepComplete(callbacks.t('stepNav'), loc === 'en' ? 'error' : '导览未成功')
        callbacks.onProcessStep(callbacks.t('stepAnswer'))
        systemPrompt = buildSystemPrompt(rules, indexText, loc)
      }
    } else {
      callbacks.onProcessStep(callbacks.t('stepAnswerAlone'))
    }

    if (!usedTwoPhase) {
      systemPrompt = buildSystemPrompt(rules, indexText, loc)
    }

    // Phase 2: answer
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
      const response = await fetch(this.cfg.apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal,
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`)
      }

      if (useStream && response.body && response.body.getReader) {
        let content = ''
        let reasoning = ''

        await decodeStream(response.body.getReader(), {
          onChunk: (delta) => {
            if (delta.reasoning_content) reasoning += delta.reasoning_content
            if (delta.content) content += delta.content
            callbacks.onChunk({ reasoning_content: reasoning, content })
          },
          onComplete: () => {
            callbacks.onComplete(content.trim() || callbacks.t('emptyReply'), reasoning)
          },
          onError: (e) => {
            callbacks.onError(e.message)
          },
        })
      } else {
        const data = await response.json()
        const msg = data.choices?.[0]?.message
        const content = msg?.content || ''
        const reasoning = msg?.reasoning_content ? String(msg.reasoning_content) : ''
        callbacks.onComplete(content.trim() || callbacks.t('emptyReply'), reasoning)
      }
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') throw err
      callbacks.onError(`${callbacks.t('networkError')} ${err instanceof Error ? err.message : String(err)}`)
    }
  }

  private async callChatJson(payload: Record<string, unknown>, signal: AbortSignal): Promise<string> {
    const res = await fetch(this.cfg.apiEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal,
    })
    if (!res.ok) {
      const t = await res.text()
      throw new Error(`HTTP ${res.status} ${t}`)
    }
    const data = await res.json()
    return data.choices?.[0]?.message?.content || ''
  }

}
