/**
 * Site context loading and caching.
 *
 * The AI Chat flow loads the site context corpus once per session and
 * reuses it for every subsequent answer. ChatContextManager owns that
 * load + cache lifecycle so the fetch + cache state stays in one place
 * and can be swapped (fetch vs. in-memory) without changing the answer
 * engine.
 */
import type { SiteContext } from './chat-types';

export interface ChatContextManager {
  loadContext(signal: AbortSignal): Promise<SiteContext | null>;
}

/** Default fetch-backed manager with in-memory cache. */
export function createFetchContextManager(endpoint = '/ai-chat-context.json'): ChatContextManager {
  let cached: SiteContext | null = null;
  let inflight: Promise<SiteContext> | null = null;

  return {
    async loadContext(signal) {
      if (cached) return cached;
      if (inflight) return inflight;

      inflight = fetch(endpoint, { cache: 'no-store', signal })
        .then((r) => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`);
          return r.json() as Promise<SiteContext>;
        })
        .then((data) => {
          cached = data;
          return data;
        })
        .catch((err) => {
          if (err instanceof Error && err.name === 'AbortError') throw err;
          cached = { zh: {}, en: {} };
          return cached;
        })
        .finally(() => {
          inflight = null;
        });

      return inflight;
    },
  };
}

/** In-memory manager — always returns the injected context, no fetch.
 *  Use in tests and in non-browser environments. */
export function createInMemoryContextManager(context: SiteContext | null): ChatContextManager {
  return {
    async loadContext() {
      return context;
    },
  };
}
