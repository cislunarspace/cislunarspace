/**
 * Streaming utilities for the ChatEngine.
 *
 * decodeStream reads from a ReadableStreamDefaultReader and drives
 * a callback for each SSE chunk. Replaces the hand-rolled readStream
 * in AiChat.vue. Swap this implementation by replacing decodeStream
 * with a library SSE client when desired.
 */
import { parseSseLine } from './chat-prompts'
import type { SseDelta } from './chat-types'

export interface StreamCallbacks {
  onChunk(delta: SseDelta): void
  onComplete(): void
  onError(e: Error): void
}

/**
 * Read an SSE stream from a ReadableStreamDefaultReader, parsing each
 * data line and firing onChunk for every valid delta. Handles a
 * single buffered line that may span multiple reads.
 */
export async function decodeStream(
  reader: ReadableStreamDefaultReader<Uint8Array>,
  callbacks: StreamCallbacks,
  signal?: AbortSignal
): Promise<void> {
  const decoder = new TextDecoder('utf-8')
  let buffer = ''

  try {
    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() || ''

      for (const line of lines) {
        const delta = parseSseLine(line)
        if (delta) callbacks.onChunk(delta)
      }

      if (signal?.aborted) break
    }

    // Handle any remaining buffered line
    const trimmed = buffer.trim()
    if (trimmed.startsWith('data:')) {
      const delta = parseSseLine(trimmed)
      if (delta) callbacks.onChunk(delta)
    }

    callbacks.onComplete()
  } catch (e) {
    callbacks.onError(e instanceof Error ? e : new Error(String(e)))
  }
}
