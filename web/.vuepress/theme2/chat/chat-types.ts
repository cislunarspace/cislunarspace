/**
 * Shared types for the ChatEngine module.
 */

export interface NormalizedConfig {
  apiEndpoint: string
  apiKey?: string
  model: string
  routerModel: string
  temperature: number
  routerTemperature: number
  twoPhaseRetrieval: boolean
  twoPhaseContextCharBudget: number
  routerMaxPaths: number
  stream: boolean
  maxHistoryTurns: number
}

export interface IndexRow {
  path: string
  title: string
}

export interface SiteIndex {
  zh: IndexRow[]
  en: IndexRow[]
}

export interface ChatIndexCategory {
  category: string
  entries: IndexRow[]
}

export interface HierarchicalSiteIndex {
  zh: ChatIndexCategory[]
  en: ChatIndexCategory[]
}

export interface SiteContext {
  zh: Record<string, { title: string; text: string }>
  en: Record<string, { title: string; text: string }>
}

export interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
  reasoning?: string
  processSteps?: ProcessStep[]
}

export interface ProcessStep {
  label: string
  status: 'done' | 'running'
  detail?: string
}

export interface SseDelta {
  reasoning_content?: string
  content?: string
}

export interface RouteResult {
  paths: string[]
  rationale?: string
}

export type ProcessStepKey = 'stepNav' | 'stepExcerpt' | 'stepAnswer' | 'stepAnswerAlone'
export type ErrorKey = 'noStrongMatch' | 'emptyReply' | 'networkError'

export interface RouteCallbacks {
  onPathsChosen(paths: string[]): void
  onExcerptsLoaded(excerptText: string | null): void
  onChunk(delta: SseDelta): void
  onComplete(content: string, reasoning: string): void
  onError(errorKey: ErrorKey, details?: string): void
  onProcessStep(stepKey: ProcessStepKey, detail?: string): void
  onProcessStepComplete(stepKey: ProcessStepKey, detail?: string): void
}
