import { describe, it, expect, vi, afterEach } from 'vitest'
import { normalizeApiEndpoint, sanitizeClientConfig, loadChatConfig } from './chat-config'

describe('normalizeApiEndpoint', () => {
  it('defaults to /api/ai/v1/chat/completions for non-string', () => {
    expect(normalizeApiEndpoint(null)).toBe('/api/ai/v1/chat/completions');
    expect(normalizeApiEndpoint(123)).toBe('/api/ai/v1/chat/completions');
  });

  it('defaults for empty string', () => {
    expect(normalizeApiEndpoint('')).toBe('/api/ai/v1/chat/completions');
  });

  it('keeps relative path starting with /', () => {
    expect(normalizeApiEndpoint('/custom/api')).toBe('/custom/api');
  });

  it('adds leading / if missing', () => {
    expect(normalizeApiEndpoint('custom/api')).toBe('/custom/api');
  });

  it('returns local path for same-origin absolute URL', () => {
    const origin = window.location.origin;
    expect(normalizeApiEndpoint(`${origin}/api/ai`)).toBe('/api/ai');
  });

  it('defaults for cross-origin URL', () => {
    expect(normalizeApiEndpoint('https://example.com/api')).toBe('/api/ai/v1/chat/completions');
  });
});

describe('sanitizeClientConfig', () => {
  it('strips apiKey', () => {
    const result = sanitizeClientConfig({ apiKey: 'secret', model: 'gpt-4' });
    expect(result).not.toHaveProperty('apiKey');
  });

  it('sets defaults', () => {
    const result = sanitizeClientConfig({ model: 'gpt-4' });
    expect(result.model).toBe('gpt-4');
    expect(result.routerModel).toBe('gpt-4');
    expect(result.twoPhaseRetrieval).toBe(true);
    expect(result.routerTemperature).toBe(0.2);
    expect(result.twoPhaseContextCharBudget).toBe(45000);
    expect(result.routerMaxPaths).toBe(8);
    expect(result.stream).toBe(true);
  });

  it('preserves existing values', () => {
    const result = sanitizeClientConfig({
      model: 'gpt-4',
      routerModel: 'gpt-3.5',
      routerTemperature: 0.5,
      stream: false,
    });
    expect(result.routerModel).toBe('gpt-3.5');
    expect(result.routerTemperature).toBe(0.5);
    expect(result.stream).toBe(false);
  });

  it('normalizes apiEndpoint', () => {
    const result = sanitizeClientConfig({ apiEndpoint: 'custom/api' })
    expect(result.apiEndpoint).toBe('/custom/api')
  })
})

describe('loadChatConfig retry', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.resetModules()
  })

  it('allows retry after fetch failure', async () => {
    // 第一次：fetch 返回 500
    vi.stubGlobal('fetch', vi.fn(async () => new Response('', { status: 500 })))
    const { loadChatConfig: load1 } = await import('./chat-config')
    await expect(load1()).rejects.toThrow('HTTP 500')

    // 第二次：fetch 返回有效 config
    const validConfig = { model: 'test', apiEndpoint: '/api' }
    vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(validConfig))))
    const { loadChatConfig: load2 } = await import('./chat-config')
    const result = await load2()
    expect(result.model).toBe('test')
  })
})
