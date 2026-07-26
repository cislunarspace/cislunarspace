/**
 * Streaming utilities for the ChatEngine.
 *
 * decodeStream reads from a ReadableStreamDefaultReader and drives
 * a callback for each SSE chunk. Replaces the hand-rolled readStream
 * in AiChat.vue. Swap this implementation by replacing decodeStream
 * with a library SSE client when desired.
 */
import type { RouteCallbacks, SseDelta } from './chat-types';

/** Parse a single SSE data line. Returns null if the line is not a content delta. */
export function parseSseLine(line: string): SseDelta | null {
  const trimmed = line.trim();
  if (!trimmed || !trimmed.startsWith('data:')) return null;
  const data = trimmed.slice(5).trim();
  if (data === '[DONE]') return null;
  try {
    const parsed = JSON.parse(data);
    return parsed.choices?.[0]?.delta || null;
  } catch {
    return null;
  }
}

export interface StreamCallbacks {
  onChunk(delta: SseDelta): void;
  onComplete(): void;
  onError(e: Error): void;
}

/** Run an answer SSE stream to completion, dispatching RouteCallbacks for
 *  content/reasoning accumulation, completion, and errors. Used by ChatSession
 *  to keep the facade free of stream-buffer bookkeeping. */
export async function runAnswerStream(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  callbacks: RouteCallbacks,
  signal?: AbortSignal,
): Promise<void> {
  let content = '';
  let reasoning = '';
  await decodeStream(
    reader,
    {
      onChunk: (delta) => {
        if (delta.reasoning_content) reasoning += delta.reasoning_content;
        if (delta.content) content += delta.content;
        callbacks.onChunk({ reasoning_content: reasoning, content });
      },
      onComplete: () => {
        const trimmed = content.trim();
        if (!trimmed) {
          callbacks.onError('emptyReply');
          return;
        }
        callbacks.onComplete(trimmed, reasoning);
      },
      onError: (e) => callbacks.onError('networkError', e.message),
    },
    signal,
  );
}

/**
 * Read an SSE stream from a ReadableStreamDefaultReader, parsing each
 * data line and firing onChunk for every valid delta. Handles a
 * single buffered line that may span multiple reads.
 */
export async function decodeStream(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  callbacks: StreamCallbacks,
  signal?: AbortSignal,
): Promise<void> {
  const decoder = new TextDecoder('utf-8');
  let buffer = '';

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        const delta = parseSseLine(line);
        if (delta) callbacks.onChunk(delta);
      }

      if (signal?.aborted) break;
    }

    // Handle any remaining buffered line
    const trimmed = buffer.trim();
    if (trimmed.startsWith('data:')) {
      const delta = parseSseLine(trimmed);
      if (delta) callbacks.onChunk(delta);
    }

    callbacks.onComplete();
  } catch (e) {
    callbacks.onError(e instanceof Error ? e : new Error(String(e)));
  }
}
