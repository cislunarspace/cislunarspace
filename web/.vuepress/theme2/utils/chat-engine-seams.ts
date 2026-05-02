/**
 * ChatEngine seams — the swappable interfaces behind ChatSession.
 *
 * Two seams:
 * - Router: selects relevant content paths from the site index
 * - Answerer: generates the answer from selected paths and context
 *
 * Having two adapters at each seam means the seam is real (per the "two adapters = a real seam" rule).
 * The default adapters are LLMCallRouter and StreamingAnswerer (current inline behavior).
 */
import type {
  NormalizedConfig,
  HierarchicalSiteIndex,
  IndexRow,
  Message,
  SiteContext,
} from './chat-types'

// ── Routing result ─────────────────────────────────────────────────────────────

export interface RoutingResult {
  /** Chosen content paths from the site index. */
  paths: string[]
  /** Full site context (needed by the UI to show excerpt indicators). */
  context: SiteContext | null
  /** Whether two-phase retrieval was used (vs. single-phase fallback). */
  usedTwoPhase: boolean
  /** System prompt for the answer phase — includes context blob if usedTwoPhase. */
  systemPrompt: string
}

// ── Router seam ───────────────────────────────────────────────────────────────

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
  }): Promise<RoutingResult>
}

// ── Keyword router (fallback) ──────────────────────────────────────────────────

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
    systemPrompt: '', // filled in by ChatSession after routing
  })
}

function fallbackKeywordPaths(question: string, indexRows: IndexRow[], max: number): string[] {
  const q = question.toLowerCase()
  const scored = indexRows.map(row => {
    const title = row.title.toLowerCase()
    const path = row.path.toLowerCase()
    let score = 0
    for (const word of q.split(/\s+/)) {
      if (title.includes(word)) score += 3
      if (path.includes(word)) score += 1
    }
    return { path: row.path, score }
  })
  return scored.filter(x => x.score > 0).sort((a, b) => b.score - a.score).slice(0, max).map(x => x.path)
}
