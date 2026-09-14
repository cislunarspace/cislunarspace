/**
 * ChatThemeController — manages dark/light theme for the AI chat surface.
 *
 * Pure module (no Vue runtime dependency). The controller reads/writes
 * localStorage and updates the document root attribute. Callers pass a
 * reactive boolean reference (e.g. a Vue ref) that the controller mutates.
 */
import type { Ref } from 'vue';

export const DEFAULT_THEME_KEY = 'cislunar-chat-theme';

export interface ThemeController {
  /** Current dark mode state. The controller mutates this ref. */
  readonly isDark: Ref<boolean>;
  /** Load saved preference or system preference into isDark. */
  loadTheme(): void;
  /** Toggle theme, persist, and apply to DOM. */
  toggleTheme(): void;
  /** Apply current isDark value to document.documentElement. */
  applyTheme(): void;
}

function getSystemTheme(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function readSavedTheme(storageKey: string): boolean | null {
  if (typeof window === 'undefined') return null;
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
  } catch (e) {
    console.warn('[ChatThemeController] readSavedTheme', e);
  }
  return null;
}

function persistTheme(storageKey: string, isDark: boolean): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
  } catch (e) {
    console.warn('[ChatThemeController] persistTheme', e);
  }
}

export function createChatThemeController(
  isDarkRef: Ref<boolean>,
  storageKey = DEFAULT_THEME_KEY,
): ThemeController {
  function applyTheme() {
    if (typeof document === 'undefined') return;
    document.documentElement.setAttribute('data-chat-theme', isDarkRef.value ? 'dark' : 'light');
  }

  return {
    get isDark() {
      return isDarkRef;
    },
    loadTheme() {
      isDarkRef.value = readSavedTheme(storageKey) ?? getSystemTheme();
      applyTheme();
    },
    toggleTheme() {
      isDarkRef.value = !isDarkRef.value;
      persistTheme(storageKey, isDarkRef.value);
      applyTheme();
    },
    applyTheme,
  };
}
