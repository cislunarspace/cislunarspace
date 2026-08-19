import { describe, it, expect, vi } from 'vitest';
import { decodeStream, parseSseLine } from './chat-stream';

describe('parseSseLine', () => {
  it('parses data line with content delta', () => {
    const line = 'data: {"choices":[{"delta":{"content":"hello"}}]}';
    expect(parseSseLine(line)).toEqual({ content: 'hello' });
  });

  it('parses data line with reasoning_content', () => {
    const line = 'data: {"choices":[{"delta":{"reasoning_content":"thinking"}}]}';
    expect(parseSseLine(line)).toEqual({ reasoning_content: 'thinking' });
  });

  it('returns null for [DONE]', () => {
    expect(parseSseLine('data: [DONE]')).toBeNull();
  });

  it('returns null for non-data lines', () => {
    expect(parseSseLine('event: message')).toBeNull();
    expect(parseSseLine(': ping')).toBeNull();
    expect(parseSseLine('')).toBeNull();
  });

  it('returns null for invalid JSON', () => {
    expect(parseSseLine('data: not-json')).toBeNull();
  });

  it('handles whitespace around data prefix', () => {
    const line = '  data:   {"choices":[{"delta":{"content":"hi"}}]}  ';
    expect(parseSseLine(line)).toEqual({ content: 'hi' });
  });
});

describe('decodeStream', () => {
  function createMockReader(chunks: string[]): ReadableStreamDefaultReader<Uint8Array> {
    const encoder = new TextEncoder();
    let index = 0;
    return {
      read: vi.fn(async () => {
        if (index < chunks.length) {
          const value = encoder.encode(chunks[index++]);
          return { done: false, value };
        }
        return { done: true, value: undefined };
      }),
      releaseLock: vi.fn(),
      cancel: vi.fn(),
      closed: Promise.resolve(undefined),
    } as unknown as ReadableStreamDefaultReader<Uint8Array>;
  }

  it('calls onChunk for each valid SSE delta', async () => {
    const reader = createMockReader([
      'data: {"choices":[{"delta":{"content":"Hello "}}]}\n',
      'data: {"choices":[{"delta":{"content":"world"}}]}\n',
    ]);
    const onChunk = vi.fn();
    const onComplete = vi.fn();
    const onError = vi.fn();

    await decodeStream(reader, { onChunk, onComplete, onError });

    expect(onChunk).toHaveBeenCalledTimes(2);
    expect(onChunk).toHaveBeenNthCalledWith(1, { content: 'Hello ' });
    expect(onChunk).toHaveBeenNthCalledWith(2, { content: 'world' });
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onError).not.toHaveBeenCalled();
  });

  it('handles multi-line chunks split across reads', async () => {
    const reader = createMockReader([
      'data: {"choices":[{"delta":{"content":"He',
      'llo"}}]}\ndata: {"choices":[{"delta":{"content":" world"}}]}\n',
    ]);
    const onChunk = vi.fn();
    const onComplete = vi.fn();

    await decodeStream(reader, { onChunk, onComplete, onError: vi.fn() });

    expect(onChunk).toHaveBeenCalledTimes(2);
    expect(onChunk).toHaveBeenNthCalledWith(1, { content: 'Hello' });
    expect(onChunk).toHaveBeenNthCalledWith(2, { content: ' world' });
  });

  it('handles [DONE] without calling onChunk', async () => {
    const reader = createMockReader([
      'data: {"choices":[{"delta":{"content":"hi"}}]}\n',
      'data: [DONE]\n',
    ]);
    const onChunk = vi.fn();
    const onComplete = vi.fn();

    await decodeStream(reader, { onChunk, onComplete, onError: vi.fn() });

    expect(onChunk).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('calls onComplete even with empty stream', async () => {
    const reader = createMockReader([]);
    const onComplete = vi.fn();

    await decodeStream(reader, {
      onChunk: vi.fn(),
      onComplete,
      onError: vi.fn(),
    });

    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('stops when signal is aborted', async () => {
    const reader = createMockReader([
      'data: {"choices":[{"delta":{"content":"a"}}]}\n',
      'data: {"choices":[{"delta":{"content":"b"}}]}\n',
    ]);
    const controller = new AbortController();
    const onChunk = vi.fn();

    let readCount = 0;
    const originalRead = reader.read;
    reader.read = vi.fn(async () => {
      const result = await originalRead();
      if (++readCount === 1) controller.abort();
      return result;
    });

    await decodeStream(
      reader,
      { onChunk, onComplete: vi.fn(), onError: vi.fn() },
      controller.signal,
    );

    expect(onChunk).toHaveBeenCalledTimes(1);
  });

  it('calls onError when reader throws', async () => {
    const reader = {
      read: vi.fn().mockRejectedValue(new Error('Stream broken')),
      releaseLock: vi.fn(),
      cancel: vi.fn(),
      closed: Promise.resolve(undefined),
    } as unknown as ReadableStreamDefaultReader<Uint8Array>;

    const onError = vi.fn();
    await decodeStream(reader, { onChunk: vi.fn(), onComplete: vi.fn(), onError });

    expect(onError).toHaveBeenCalledWith(new Error('Stream broken'));
  });

  it('handles leftover buffer without newline at end', async () => {
    const reader = createMockReader(['data: {"choices":[{"delta":{"content":"no newline"}}]}']);
    const onChunk = vi.fn();
    const onComplete = vi.fn();

    await decodeStream(reader, { onChunk, onComplete, onError: vi.fn() });

    expect(onChunk).toHaveBeenCalledTimes(1);
    expect(onChunk).toHaveBeenCalledWith({ content: 'no newline' });
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('releases reader on normal completion', async () => {
    const reader = createMockReader(['data: {"choices":[{"delta":{"content":"hi"}}]}\n']);
    await decodeStream(reader, { onChunk: vi.fn(), onComplete: vi.fn(), onError: vi.fn() });
    expect(reader.cancel).toHaveBeenCalled();
  });

  it('releases reader on error', async () => {
    const reader = {
      read: vi.fn().mockRejectedValue(new Error('broken')),
      releaseLock: vi.fn(),
      cancel: vi.fn(),
      closed: Promise.resolve(undefined),
    } as unknown as ReadableStreamDefaultReader<Uint8Array>;
    await decodeStream(reader, { onChunk: vi.fn(), onComplete: vi.fn(), onError: vi.fn() });
    expect(reader.cancel).toHaveBeenCalled();
  });

  it('re-throws AbortError instead of calling onError', async () => {
    const abortError = new DOMException('aborted', 'AbortError');
    const reader = {
      read: vi.fn().mockRejectedValue(abortError),
      releaseLock: vi.fn(),
      cancel: vi.fn(),
      closed: Promise.resolve(undefined),
    } as unknown as ReadableStreamDefaultReader<Uint8Array>;
    const onError = vi.fn();

    await expect(
      decodeStream(reader, { onChunk: vi.fn(), onComplete: vi.fn(), onError }),
    ).rejects.toThrow('aborted');
    expect(onError).not.toHaveBeenCalled();
    expect(reader.cancel).toHaveBeenCalled();
  });
});
