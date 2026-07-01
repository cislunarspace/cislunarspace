/**
 * Answer-phase orchestration.
 *
 * The ChatAnswerEngine takes the router's path decision and produces the
 * payload to send to the answer transport: it loads the site context
 * (when two-phase retrieval is on), builds the system prompt (with or
 * without the retrieved excerpt blob), trims history, and assembles the
 * final model payload. It does not call the transport itself — ChatSession
 * dispatches stream vs. non-stream after this.
 */
import {
  buildAnswerRulesBlock,
  buildAnswerSystemWithRetrieved,
  buildSystemPrompt,
} from './chat-prompts'
import { buildContextBlob } from './chat-data-utils'
import type { ChatContextManager } from './chat-context-manager'
import type { RouterStepKey } from './chat-router'
import type {
  ChatIndexCategory,
  HierarchicalSiteIndex,
  IndexRow,
  Message,
  NormalizedConfig,
  ProcessStepKey,
  SseDelta,
} from './chat-types'

export interface AnswerEngineCallbacks {
  onExcerptsLoaded(text: string | null): void
  onProcessStep(key: ProcessStepKey, detail?: string): void
  onProcessStepComplete(key: RouterStepKey | 'stepAnswer' | 'stepAnswerAlone', detail?: string): void
  onChunk(delta: SseDelta): void
  onComplete(content: string, reasoning: string): void
  onError(errorKey: 'noStrongMatch' | 'emptyReply' | 'networkError', details?: string): void
}

export interface AnswerPhase {
  /** The system prompt to use for the answer model call. */
  systemPrompt: string
  /** Trimmed history messages (role + content only). */
  history: Array<{ role: 'user' | 'assistant' | 'system'; content: string }>
  /** Final payload to send to the answer transport. */
  payload: Record<string, unknown>
  /** Whether two-phase retrieval was used (drives debug copy). */
  usedTwoPhase: boolean
}

export interface ChatAnswerEngine {
  buildAnswerPhase(input: {
    paths: string[]
    history: Message[]
    siteIndex: HierarchicalSiteIndex
    locale: 'zh' | 'en'
    config: NormalizedConfig
    callbacks: AnswerEngineCallbacks
    signal: AbortSignal
  }): Promise<AnswerPhase>
}

export interface AnswerEngineDeps {
  contextManager: ChatContextManager
}

function buildIndexText(categories: ChatIndexCategory[]): string {
  return categories
    .map((cat) => {
      const entries = cat.entries.map((e) => `- ${e.title}: ${e.path}`).join('\n')
      return `### ${cat.category}\n${entries}`
    })
    .join('\n')
}

function trimHistory(history: Message[], maxTurns: number) {
  const n = Number(maxTurns || 10)
  return history.slice(-n * 2).map((m) => ({ role: m.role, content: m.content }))
}

/** Read content + reasoning from a chat completions response. */
export function readMessage(data: unknown): { content?: string; reasoning_content?: unknown } {
  if (!data || typeof data !== 'object' || !('choices' in data) || !Array.isArray((data as { choices: unknown }).choices)) {
    return {}
  }
  const choice = (data as { choices: Array<unknown> }).choices[0]
  if (!choice || typeof choice !== 'object' || !('message' in choice)) return {}
  const message = (choice as { message?: unknown }).message
  if (!message || typeof message !== 'object') return {}
  return message as { content?: string; reasoning_content?: unknown }
}

/** Build the system prompt and (optionally) load the context blob. */
export async function buildSystemPromptForPaths(params: {
  paths: string[]
  locale: 'zh' | 'en'
  siteIndex: HierarchicalSiteIndex
  flatIndex: IndexRow[]
  config: NormalizedConfig
  contextManager: ChatContextManager
  callbacks: AnswerEngineCallbacks
  signal: AbortSignal
}): Promise<{ systemPrompt: string; usedTwoPhase: boolean }> {
  const { paths, locale, siteIndex, flatIndex, config, contextManager, callbacks, signal } = params
  const categories = siteIndex[locale] || []
  const indexText = buildIndexText(categories)
  const rules = buildAnswerRulesBlock(locale)

  if (!paths.length) {
    return { systemPrompt: buildSystemPrompt(rules, indexText, locale), usedTwoPhase: false }
  }

  const ctx = await contextManager.loadContext(signal)
  if (!ctx) {
    callbacks.onExcerptsLoaded(null)
    return { systemPrompt: buildSystemPrompt(rules, indexText, locale), usedTwoPhase: false }
  }

  const blob = buildContextBlob(
    ctx,
    locale,
    paths,
    config.twoPhaseContextCharBudget ?? 45000,
    locale === 'en',
  )
  callbacks.onExcerptsLoaded(blob)

  if (!blob) {
    return { systemPrompt: buildSystemPrompt(rules, indexText, locale), usedTwoPhase: false }
  }

  return {
    systemPrompt: buildAnswerSystemWithRetrieved(rules, blob, indexText, locale),
    usedTwoPhase: true,
  }
}

export function createAnswerEngine(deps: AnswerEngineDeps): ChatAnswerEngine {
  return {
    async buildAnswerPhase({ paths, history, siteIndex, locale, config, callbacks, signal }) {
      const { systemPrompt, usedTwoPhase } = await buildSystemPromptForPaths({
        paths,
        locale,
        siteIndex,
        flatIndex: [],
        config,
        contextManager: deps.contextManager,
        callbacks,
        signal,
      })

      const trimmedHistory = trimHistory(history, config.maxHistoryTurns)
      const useStream = config.stream !== false
      const payload = {
        model: config.model,
        messages: [{ role: 'system' as const, content: systemPrompt }, ...trimmedHistory],
        temperature: config.temperature ?? 0.7,
        stream: useStream,
      }

      return { systemPrompt, history: trimmedHistory, payload, usedTwoPhase }
    },
  }
}
