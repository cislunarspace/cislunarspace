/**
 * Tests for generate.ts pipeline functions.
 * Run with: vitest run generate.test.ts
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import fs from 'fs';

afterEach(() => {
  vi.restoreAllMocks();
  vi.resetModules();
});

describe('gen-sidebar command generation', () => {
  it('does not write artifacts when imported', async () => {
    const writeFileSync = vi.spyOn(fs, 'writeFileSync').mockImplementation(() => {});

    await import('./generate.ts');

    expect(writeFileSync).not.toHaveBeenCalled();
  });

  it('writes expected artifacts when run explicitly', async () => {
    const writtenFilePaths = new Set<string>();
    const originalStatSync = fs.statSync;
    const writeFileSync = vi.spyOn(fs, 'writeFileSync').mockImplementation((filePath) => {
      writtenFilePaths.add(String(filePath));
    });
    vi.spyOn(fs, 'statSync').mockImplementation(((filePath: fs.PathLike) => {
      if (writtenFilePaths.has(String(filePath))) {
        return { size: 1024 } as fs.Stats;
      }
      return originalStatSync(filePath);
    }) as typeof fs.statSync);
    const { runGenerationCli } = await import('./generate.ts');

    runGenerationCli();

    const writtenPaths = writeFileSync.mock.calls.map(([filePath]) =>
      String(filePath).split(/[\\/]/).pop(),
    );
    expect(writtenPaths).toEqual(
      expect.arrayContaining([
        'ai-chat-index.json',
        'ai-chat-context.json',
        'glossary-dictionary.json',
      ]),
    );
    expect(writtenPaths).not.toContain('space-news-articles-zh.json');
    expect(writtenPaths).not.toContain('space-news-sidebar-data.json');
  });
});
