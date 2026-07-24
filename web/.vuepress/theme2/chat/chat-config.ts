/**
 * Configuration normalizer for the AI chat feature.
 *
 * Takes the raw JSON from /ai-chat-config.json and produces a
 * NormalizedConfig with all defaults filled in.
 */
import type { NormalizedConfig } from './chat-types'

/** Cached config promise — avoids duplicate fetches across Dialectic and Chat. */
let cachedConfigPromise: Promise<NormalizedConfig> | null = null

/**
 * Fetch and normalize /ai-chat-config.json.
 *
 * The result is cached for the lifetime of the page, so both the Dialectic
 * surface and AI Chat share a single fetch + parse.
 */
export async function loadChatConfig(): Promise<NormalizedConfig> {
  if (!cachedConfigPromise) {
    cachedConfigPromise = (async () => {
      const res = await fetch('/ai-chat-config.json', { cache: 'no-store' })
      if (!res.ok) throw new Error(`Failed to load AI config: HTTP ${res.status}`)
      return sanitizeClientConfig(await res.json())
    })().catch((err) => {
      cachedConfigPromise = null
      throw err
    })
  }
  return cachedConfigPromise
}

export function normalizeApiEndpoint(rawEndpoint: unknown): string {
  if (typeof rawEndpoint !== 'string') return '/api/ai/v1/chat/completions'

  const endpoint = rawEndpoint.trim()
  if (!endpoint) return '/api/ai/v1/chat/completions'

  if (/^https?:\/\//i.test(endpoint)) {
    try {
      const url = new URL(endpoint, window.location.origin)
      if (url.origin === window.location.origin) {
        return url.pathname + url.search + url.hash
      }
    } catch {
      return '/api/ai/v1/chat/completions'
    }
    return '/api/ai/v1/chat/completions'
  }

  return endpoint.startsWith('/') ? endpoint : `/${endpoint}`
}

export function sanitizeClientConfig(raw: unknown): NormalizedConfig {
  const next = Object.assign({}, (raw as Record<string, unknown>) || {})
  delete next.apiKey

  next.apiEndpoint = normalizeApiEndpoint(next.apiEndpoint)

  if (next.twoPhaseRetrieval === undefined) {
    next.twoPhaseRetrieval = true
  }
  if (next.routerTemperature == null) {
    next.routerTemperature = 0.2
  }
  if (next.twoPhaseContextCharBudget == null) {
    next.twoPhaseContextCharBudget = 45000
  }
  if (next.routerMaxPaths == null) {
    next.routerMaxPaths = 8
  }
  if (next.stream === undefined) {
    next.stream = true
  }
  if (!next.routerModel) {
    next.routerModel = next.model as string
  }

  return next as NormalizedConfig
}
