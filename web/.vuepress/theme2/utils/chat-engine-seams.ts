/**
 * Swappable seams behind ChatSession.
 */
import type {
  NormalizedConfig,
  HierarchicalSiteIndex,
  IndexRow,
  Message,
  SiteContext,
} from './chat-types'

export interface RoutingResult {
  paths: string[]
  context: SiteContext | null
  usedTwoPhase: boolean
  systemPrompt: string
}

export interface RouterCallbacks {
  onPathsChosen(paths: string[]): void
  onExcerptsLoaded(excerptText: string | null): void
  onProcessStep(key: 'stepNav' | 'stepExcerpt', detail?: string): void
  onProcessStepComplete(key: 'stepNav' | 'stepExcerpt', detail?: string): void
}

export interface Router {
  route(params: {
    question: string
    history: Message[]
    siteIndex: HierarchicalSiteIndex
    flatIndex: IndexRow[]
    config: NormalizedConfig
    locale: 'zh' | 'en'
    callbacks: RouterCallbacks
    signal: AbortSignal
  }): Promise<RoutingResult>
}

export interface ChatTransport {
  completeJson(endpoint: string, payload: Record<string, unknown>, signal: AbortSignal): Promise<unknown>
  completeStream(endpoint: string, payload: Record<string, unknown>, signal: AbortSignal): Promise<ReadableStreamDefaultReader<Uint8Array> | null>
}

export interface ContextLoader {
  loadSiteContext(signal: AbortSignal): Promise<SiteContext>
}

export interface ChatSessionDeps {
  router?: Router
  transport?: ChatTransport
  contextLoader?: ContextLoader
}

export function keywordRouter(params: {
  question: string
  flatIndex: IndexRow[]
  config: NormalizedConfig
  callbacks: RouterCallbacks
}): Promise<RoutingResult> {
  const { question, flatIndex, callbacks } = params
  const max = params.config.routerMaxPaths ?? 4
  const paths = fallbackKeywordPaths(question, flatIndex, max)
  callbacks.onPathsChosen(paths)
  return Promise.resolve({
    paths,
    context: null,
    usedTwoPhase: false,
    systemPrompt: '',
  })
}

function fallbackKeywordPaths(question: string, indexRows: IndexRow[], max: number): string[] {
  const q = question.toLowerCase()
  const scored = indexRows.map((row) => {
    const title = row.title.toLowerCase()
    const path = row.path.toLowerCase()
    let score = 0
    for (const word of q.split(/\s+/)) {
      if (title.includes(word)) score += 3
      if (path.includes(word)) score += 1
    }
    return { path: row.path, score }
  })
  return scored.filter((x) => x.score > 0).sort((a, b) => b.score - a.score).slice(0, max).map((x) => x.path)
}
