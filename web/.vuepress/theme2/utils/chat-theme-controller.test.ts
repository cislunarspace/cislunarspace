import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest'
import { ref } from 'vue'
import { createChatThemeController, DEFAULT_THEME_KEY } from './chat-theme-controller'

describe('createChatThemeController', () => {
  let isDark = ref(false)
  let stored: Record<string, string> = {}

  beforeEach(() => {
    isDark = ref(false)
    stored = {}
    vi.stubGlobal('localStorage', {
      getItem: vi.fn((k: string) => stored[k] ?? null),
      setItem: vi.fn((k: string, v: string) => { stored[k] = v }),
    })
    document.documentElement.removeAttribute('data-chat-theme')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    document.documentElement.removeAttribute('data-chat-theme')
  })

  it('loads saved dark preference', () => {
    stored[DEFAULT_THEME_KEY] = 'dark'
    const ctrl = createChatThemeController(isDark)
    ctrl.loadTheme()
    expect(isDark.value).toBe(true)
    expect(document.documentElement.getAttribute('data-chat-theme')).toBe('dark')
  })

  it('loads saved light preference', () => {
    stored[DEFAULT_THEME_KEY] = 'light'
    const ctrl = createChatThemeController(isDark)
    ctrl.loadTheme()
    expect(isDark.value).toBe(false)
    expect(document.documentElement.getAttribute('data-chat-theme')).toBe('light')
  })

  it('falls back to system preference when nothing is saved', () => {
    vi.stubGlobal('window', {
      ...window,
      matchMedia: vi.fn(() => ({ matches: true })),
    })
    const ctrl = createChatThemeController(isDark)
    ctrl.loadTheme()
    expect(isDark.value).toBe(true)
  })

  it('toggles theme and persists the new value', () => {
    const ctrl = createChatThemeController(isDark)
    ctrl.loadTheme()
    ctrl.toggleTheme()
    expect(isDark.value).toBe(true)
    expect(stored[DEFAULT_THEME_KEY]).toBe('dark')
    expect(document.documentElement.getAttribute('data-chat-theme')).toBe('dark')

    ctrl.toggleTheme()
    expect(isDark.value).toBe(false)
    expect(stored[DEFAULT_THEME_KEY]).toBe('light')
  })

  it('uses a custom storage key', () => {
    stored['custom-key'] = 'dark'
    const ctrl = createChatThemeController(isDark, 'custom-key')
    ctrl.loadTheme()
    expect(isDark.value).toBe(true)
  })
})
