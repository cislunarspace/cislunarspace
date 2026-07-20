/**
 * ChatStateMachine — finite state machine for the AI chat flow.
 *
 * Pure module (no Vue runtime dependency). Owns messages, loading state,
 * abort controller, config, and site index. Provides action methods that
 * mutate the caller-supplied reactive refs. Network/session side effects are
 * injected via SendMessageDeps so the machine stays testable without a real
 * ChatSession or DOM.
 */
import type { Ref } from 'vue'
import { ref } from 'vue'
import { loadChatConfig } from './chat-config'
import type { ChatSession } from './chat-session'
import type { HierarchicalSiteIndex, Message, NormalizedConfig, ProcessStepKey, ErrorKey, SseDelta } from './chat-types'
import { beginStep, completeStep, finalizeSteps } from './chat-process-steps'

export interface SendMessageDeps {
  /** Current locale for the session. */
  locale: 'zh' | 'en'
  /** i18n lookup. */
  t: (key: string) => string
  /** Called after each SSE chunk to drive scroll/refresh. */
  onChunk?: () => void
  /** Called when the stream completes or errors. */
  onComplete?: () => void
  /** Factory that creates a ChatSession for the current config/locale/siteIndex. */
  createSession: (config: NormalizedConfig, locale: 'zh' | 'en', siteIndex: HierarchicalSiteIndex) => ChatSession
  /** Called after a message exchange finishes to persist history. */
  saveCurrentChat: (messages: Message[]) => void
}

export interface ChatStateMachine {
  readonly messages: Ref<Message[]>
  readonly isLoading: Ref<boolean>
  readonly loadingPhase: Ref<string>
  readonly config: Ref<NormalizedConfig | null>
  readonly siteIndex: Ref<HierarchicalSiteIndex>
  readonly abortController: Ref<AbortController | null>
  abortRequest(): void
  startNewChat(): void
  switchChat(restored: Message[] | null): void
  deleteChat(wasActive: boolean): void
  /** Load config and site index. On error, sets an assistant message. */
  loadConfig(t: (key: string) => string): Promise<void>
  sendMessage(text: string, deps: SendMessageDeps): Promise<void>
}

export function createChatStateMachine(): ChatStateMachine {
  const messages = ref<Message[]>([])
  const isLoading = ref(false)
  const loadingPhase = ref('')
  const config = ref<NormalizedConfig | null>(null)
  const siteIndex = ref<HierarchicalSiteIndex>({ zh: [], en: [] })
  const abortController = ref<AbortController | null>(null)

  function abortRequest() {
    if (abortController.value) {
      abortController.value.abort()
      abortController.value = null
    }
    isLoading.value = false
    loadingPhase.value = ''
  }

  function startNewChat() {
    abortRequest()
    messages.value = []
  }

  function switchChat(restored: Message[] | null) {
    if (restored) {
      messages.value = restored
    }
  }

  function deleteChat(wasActive: boolean) {
    if (wasActive) {
      messages.value = []
    }
  }

  function loadConfigError(error: unknown, t: (key: string) => string) {
    config.value = null
    siteIndex.value = { zh: [], en: [] }
    messages.value = [{ role: 'assistant', content: `${t('configError')} ${(error as Error).message}` }]
  }

  async function loadConfig(t: (key: string) => string): Promise<void> {
    try {
      config.value = await loadChatConfig()
      try {
        const idxRes = await fetch('/ai-chat-index.json', { cache: 'no-store' })
        siteIndex.value = idxRes.ok ? await idxRes.json() : { zh: [], en: [] }
      } catch {
        siteIndex.value = { zh: [], en: [] }
      }
    } catch (error) {
      loadConfigError(error, t)
    }
  }

  async function sendMessage(text: string, deps: SendMessageDeps) {
    if (!text || isLoading.value || !config.value) return

    const cfg = config.value
    const locale = deps.locale

    messages.value = [...messages.value, { role: 'user', content: text }]
    loadingPhase.value = 'answer'
    isLoading.value = true
    deps.onComplete?.()

    const assistantMessage: Message = { role: 'assistant', content: '', reasoning: '', processSteps: [] }
    messages.value = [...messages.value, assistantMessage]
    abortController.value = new AbortController()

    try {
      const session = deps.createSession(cfg, locale, siteIndex.value)
      await session.route(
        text,
        messages.value.slice(0, -1),
        {
          onPathsChosen: () => {},
          onExcerptsLoaded: () => {},
          onChunk: (delta: SseDelta) => {
            if (delta.reasoning_content !== undefined) {
              assistantMessage.reasoning = delta.reasoning_content
            }
            if (delta.content !== undefined) {
              assistantMessage.content = delta.content
            }
            deps.onChunk?.()
          },
          onComplete: (content: string, reasoning: string) => {
            assistantMessage.content = content
            if (reasoning) assistantMessage.reasoning = reasoning
          },
          onError: (errorKey: ErrorKey, details?: string) => {
            assistantMessage.content = deps.t(errorKey) + (details ? ` ${details}` : '')
          },
          onProcessStep: (stepKey: ProcessStepKey, detail?: string) => {
            assistantMessage.processSteps = beginStep(
              assistantMessage.processSteps ?? [],
              stepKey,
              deps.t,
              detail,
            )
          },
          onProcessStepComplete: (stepKey: ProcessStepKey, detail?: string) => {
            assistantMessage.processSteps = completeStep(
              assistantMessage.processSteps ?? [],
              stepKey,
              detail,
            )
          },
        },
        abortController.value.signal,
      )
    } catch (error) {
      if ((error as Error).name === 'AbortError') {
        messages.value = messages.value.slice(0, -1)
        return
      }
      assistantMessage.content = `${deps.t('networkError')} ${(error as Error).message}`
    } finally {
      assistantMessage.processSteps = finalizeSteps(assistantMessage.processSteps)
      isLoading.value = false
      loadingPhase.value = ''
      abortController.value = null
      deps.saveCurrentChat(messages.value)
      deps.onComplete?.()
    }
  }

  return {
    messages,
    isLoading,
    loadingPhase,
    config,
    siteIndex,
    abortController,
    abortRequest,
    startNewChat,
    switchChat,
    deleteChat,
    loadConfig,
    sendMessage,
  }
}
