/**
 * Configuration normalizer for the AI chat feature.
 *
 * Takes the raw JSON from /ai-chat-config.json and produces a
 * NormalizedConfig with all defaults filled in.
 */
import type { NormalizedConfig } from './chat-types'

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
