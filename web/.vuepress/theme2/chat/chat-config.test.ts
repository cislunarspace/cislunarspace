import { describe, it, expect } from 'vitest'
import { normalizeApiEndpoint, sanitizeClientConfig } from './chat-config'

describe('normalizeApiEndpoint', () => {
  it('defaults to /api/ai/v1/chat/completions for non-string', () => {
    expect(normalizeApiEndpoint(null)).toBe('/api/ai/v1/chat/completions')
    expect(normalizeApiEndpoint(123)).toBe('/api/ai/v1/chat/completions')
  })

  it('defaults for empty string', () => {
    expect(normalizeApiEndpoint('')).toBe('/api/ai/v1/chat/completions')
  })

  it('keeps relative path starting with /', () => {
    expect(normalizeApiEndpoint('/custom/api')).toBe('/custom/api')
  })

  it('adds leading / if missing', () => {
    expect(normalizeApiEndpoint('custom/api')).toBe('/custom/api')
  })

  it('returns local path for same-origin absolute URL', () => {
    const origin = window.location.origin
    expect(normalizeApiEndpoint(`${origin}/api/ai`)).toBe('/api/ai')
  })

  it('defaults for cross-origin URL', () => {
    expect(normalizeApiEndpoint('https://example.com/api')).toBe('/api/ai/v1/chat/completions')
  })
})

describe('sanitizeClientConfig', () => {
  it('strips apiKey', () => {
    const result = sanitizeClientConfig({ apiKey: 'secret', model: 'gpt-4' })
    expect(result).not.toHaveProperty('apiKey')
  })

  it('sets defaults', () => {
    const result = sanitizeClientConfig({ model: 'gpt-4' })
    expect(result.model).toBe('gpt-4')
    expect(result.routerModel).toBe('gpt-4')
    expect(result.twoPhaseRetrieval).toBe(true)
    expect(result.routerTemperature).toBe(0.2)
    expect(result.twoPhaseContextCharBudget).toBe(45000)
    expect(result.routerMaxPaths).toBe(8)
    expect(result.stream).toBe(true)
  })

  it('preserves existing values', () => {
    const result = sanitizeClientConfig({
      model: 'gpt-4',
      routerModel: 'gpt-3.5',
      routerTemperature: 0.5,
      stream: false,
    })
    expect(result.routerModel).toBe('gpt-3.5')
    expect(result.routerTemperature).toBe(0.5)
    expect(result.stream).toBe(false)
  })

  it('normalizes apiEndpoint', () => {
    const result = sanitizeClientConfig({ apiEndpoint: 'custom/api' })
    expect(result.apiEndpoint).toBe('/custom/api')
  })
})
