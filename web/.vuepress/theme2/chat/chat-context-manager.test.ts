import { afterEach, describe, it, expect, vi } from 'vitest';
import { createFetchContextManager, createInMemoryContextManager } from './chat-context-manager';
import type { SiteContext } from './chat-types';

const sample: SiteContext = {
  zh: { '/foo/': { title: 'Foo', text: 'zh body' } },
  en: {},
};

describe('chat-context-manager', () => {
  afterEach(() => vi.unstubAllGlobals());

  describe('createFetchContextManager', () => {
    it('fetches the context once and reuses the cache on subsequent calls', async () => {
      const fetchMock = vi.fn(async () => new Response(JSON.stringify(sample), { status: 200 }));
      vi.stubGlobal('fetch', fetchMock);
      const manager = createFetchContextManager();

      await expect(manager.loadContext(new AbortController().signal)).resolves.toEqual(sample);
      await expect(manager.loadContext(new AbortController().signal)).resolves.toEqual(sample);

      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('deduplicates concurrent loadContext calls', async () => {
      let resolveFetch: (r: Response) => void;
      const fetchPromise = new Promise<Response>((resolve) => {
        resolveFetch = resolve;
      });
      const fetchMock = vi.fn(() => fetchPromise);
      vi.stubGlobal('fetch', fetchMock);
      const manager = createFetchContextManager();

      const p1 = manager.loadContext(new AbortController().signal);
      const p2 = manager.loadContext(new AbortController().signal);
      resolveFetch!(new Response(JSON.stringify(sample), { status: 200 }));

      await expect(p1).resolves.toEqual(sample);
      await expect(p2).resolves.toEqual(sample);
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('returns an empty context when fetch fails and caches that fallback', async () => {
      const fetchMock = vi.fn(async () => new Response('', { status: 500 }));
      vi.stubGlobal('fetch', fetchMock);
      const manager = createFetchContextManager();

      await expect(manager.loadContext(new AbortController().signal)).resolves.toEqual({
        zh: {},
        en: {},
      });
      // Second call uses the empty-context cache, not a new fetch
      await expect(manager.loadContext(new AbortController().signal)).resolves.toEqual({
        zh: {},
        en: {},
      });
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    it('propagates AbortError without caching', async () => {
      const abortError = new DOMException('Aborted', 'AbortError');
      const fetchMock = vi.fn(async () => {
        throw abortError;
      });
      vi.stubGlobal('fetch', fetchMock);
      const manager = createFetchContextManager();

      await expect(manager.loadContext(new AbortController().signal)).rejects.toBe(abortError);
    });
  });

  describe('createInMemoryContextManager', () => {
    it('returns the injected context without fetching', async () => {
      const manager = createInMemoryContextManager(sample);
      await expect(manager.loadContext(new AbortController().signal)).resolves.toEqual(sample);
    });

    it('returns null when constructed with null', async () => {
      const manager = createInMemoryContextManager(null);
      await expect(manager.loadContext(new AbortController().signal)).resolves.toBeNull();
    });
  });
});
