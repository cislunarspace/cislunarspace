/**
 * Path selection for the AI Chat flow.
 *
 * A ChatRouter takes the question, history, site index, and config, and
 * returns the paths to look up. It does NOT load site context, build
 * prompts, or call the answer transport — those are the ChatAnswerEngine's
 * job (see chat-answer-engine.ts). Returning paths only keeps the router
 * single-purpose and unit-testable without a real LLM or fetch.
 */
import {
  buildRouterSystemPrompt,
  buildRouterUserMessage,
  buildSiteMapText,
  fallbackKeywordPaths,
  flattenCategories,
  formatPathList,
  normalizeAndValidatePaths,
  parseRouterResponse,
} from './chat-prompts'
import type { ChatTransport } from './chat-engine-seams'
import type {
  HierarchicalSiteIndex,
  IndexRow,
  Message,
  NormalizedConfig,
  ProcessStepKey,
} from './chat-types'

export type RouterStepKey = Extract<ProcessStepKey, 'stepNav' | 'stepExcerpt'>

export interface RouterCallbacks {
  onPathsChosen(paths: string[]): void
  onProcessStep(key: RouterStepKey, detail?: string): void
  onProcessStepComplete(key: RouterStepKey, detail?: string): void
}

export interface RoutingDecision {
  paths: string[]
}

export interface ChatRouter {
  route(params: {
    question: string
    history: Message[]
    siteIndex: HierarchicalSiteIndex
    flatIndex: IndexRow[]
    config: NormalizedConfig
    locale: 'zh' | 'en'
    callbacks: RouterCallbacks
    signal: AbortSignal
  }): Promise<RoutingDecision>
}

export interface LLMRouterDeps {
  transport: ChatTransport
}

/** Pure-keyword router — no LLM call. Used as a default and as the
 *  fallback when the LLM router fails or returns no usable paths. */
export function createKeywordRouter(): ChatRouter {
  return {
    async route({ question, flatIndex, config, callbacks }) {
      const maxPaths = config.routerMaxPaths ?? 4
      const paths = fallbackKeywordPaths(question, flatIndex, maxPaths)
      callbacks.onPathsChosen(paths)
      return { paths }
    },
  }
}

/** LLM-based router with keyword fallback on error or empty result. */
export function createLLMRouter(deps: LLMRouterDeps): ChatRouter {
  const { transport } = deps
  return {
    async route({ question, history, siteIndex, flatIndex, config, locale, callbacks, signal }) {
      const categories = siteIndex[locale] || []
      const maxPaths = config.routerMaxPaths ?? 8

      const indexText = categories
        .map((cat) => {
          const entries = cat.entries.map((e) => `- ${e.title}: ${e.path}`).join('\n')
          return `### ${cat.category}\n${entries}`
        })
        .join('\n')

      const mapText = buildSiteMapText(categories)
      const routerUser = buildRouterUserMessage(history, question, locale)

      callbacks.onProcessStep('stepNav')

      let rawRouter: string
      try {
        const data = (await transport.completeJson(
          config.apiEndpoint,
          {
            model: config.routerModel || config.model,
            max_tokens: 800,
            temperature: config.routerTemperature ?? 0.2,
            messages: [
              { role: 'system', content: buildRouterSystemPrompt(locale, maxPaths) },
              {
                role: 'user',
                content:
                  `${locale === 'en' ? 'Site map: one line per row as path<tab>title' : '站点地图：每行 path<tab>title'}\n\n${mapText}\n\n---\n\n${routerUser}`,
              },
            ],
            stream: false,
          },
          signal,
        )) as { choices?: Array<{ message?: { content?: string } }> }
        rawRouter = data?.choices?.[0]?.message?.content || ''
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') throw err
        callbacks.onProcessStepComplete('stepNav', locale === 'en' ? 'error' : '导览未成功')
        return createKeywordRouter().route({ question, history, siteIndex, flatIndex, config, locale, callbacks, signal })
      }

      const validPaths = new Set(flatIndex.map((r) => r.path))
      const chosen = normalizeAndValidatePaths(parseRouterResponse(rawRouter).paths, validPaths, maxPaths)

      if (!chosen.length) {
        return createKeywordRouter().route({ question, history, siteIndex, flatIndex, config, locale, callbacks, signal })
      }

      callbacks.onPathsChosen(chosen)
      callbacks.onProcessStepComplete(
        'stepNav',
        formatPathList(chosen, flatIndex) || (locale === 'en' ? 'ok' : '已选'),
      )
      callbacks.onProcessStep('stepExcerpt')

      return { paths: chosen }
    },
  }
}

/** Helper used by ChatSession — flatten a hierarchical site index for a locale. */
export function flatIndexFor(siteIndex: HierarchicalSiteIndex, locale: 'zh' | 'en'): IndexRow[] {
  return flattenCategories(siteIndex[locale] || [])
}
