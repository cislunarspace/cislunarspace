/**
 * Transport-level seams for the chat engine.
 *
 * Router, context-manager, and answer-engine live in their own modules.
 * This file holds the *transport* seam (the only thing that actually
 * touches the network) and the aggregated dependency type used by
 * ChatSession's constructor.
 */
import type { ChatAnswerEngine } from './chat-answer-engine';
import type { ChatContextManager } from './chat-context-manager';
import type { ChatRouter } from './chat-router';

export interface ChatTransport {
  completeJson(
    endpoint: string,
    payload: Record<string, unknown>,
    signal: AbortSignal,
  ): Promise<unknown>;
  completeStream(
    endpoint: string,
    payload: Record<string, unknown>,
    signal: AbortSignal,
  ): Promise<ReadableStreamDefaultReader<Uint8Array> | null>;
}

/** Default fetch-backed transport. */
export function createFetchTransport(): ChatTransport {
  return {
    completeJson: async (endpoint, payload, signal) => {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    },
    completeStream: async (endpoint, payload, signal) => {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
      return res.body?.getReader() ?? null;
    },
  };
}

/** Aggregated dependency bundle for ChatSession. Each piece is independently
 *  swappable. If any is omitted, ChatSession wires in the default. */
export interface ChatSessionDeps {
  router?: ChatRouter;
  answerEngine?: ChatAnswerEngine;
  transport?: ChatTransport;
  contextManager?: ChatContextManager;
}
