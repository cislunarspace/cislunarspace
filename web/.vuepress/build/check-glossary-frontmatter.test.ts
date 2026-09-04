import { describe, expect, it } from 'vitest';
import { scanGlossaryFrontmatter } from './check-glossary-frontmatter';
import type { MarkdownFile } from '../utils/markdown-walker.ts';

function entry(relPath: string, frontmatter: string): MarkdownFile {
  return {
    absPath: `/web/${relPath}`,
    relPath,
    content: `---\n${frontmatter}\n---\n\n# 词条\n`,
  };
}

const validFrontmatter = `
aliases:
  - NRHO
related:
  - ref: orbits/halo-orbit
    relation: broader`;

describe('scanGlossaryFrontmatter', () => {
  it('passes a valid entry and skips entries without the fields', () => {
    const files = [
      entry('glossary/orbits/nrho.md', validFrontmatter),
      entry('glossary/orbits/plain.md', 'title: 普通词条'),
    ];
    expect(scanGlossaryFrontmatter(files)).toEqual([]);
  });

  it('flags related.ref whose entry file is missing', () => {
    const files = [entry('glossary/orbits/nrho.md', validFrontmatter)];
    const findings = scanGlossaryFrontmatter(files, () => false);
    expect(findings).toHaveLength(1);
    expect(findings[0]!.message).toContain('glossary/orbits/halo-orbit.md');
  });

  it('flags disallowed relation values', () => {
    const files = [
      entry(
        'glossary/orbits/nrho.md',
        `
related:
  - ref: orbits/halo-orbit
    relation: is-a`,
      ),
    ];
    const findings = scanGlossaryFrontmatter(files);
    expect(findings).toHaveLength(1);
    expect(findings[0]!.message).toContain('relation 非法');
  });

  it('flags malformed ref paths and duplicate aliases', () => {
    const files = [
      entry(
        'glossary/orbits/bad.md',
        `
aliases:
  - NRHO
  - NRHO
related:
  - ref: halo-orbit
    relation: broader`,
      ),
    ];
    const findings = scanGlossaryFrontmatter(files);
    expect(findings).toHaveLength(2);
    expect(findings.some((f) => f.message.includes('related.ref 非法'))).toBe(true);
    expect(findings.some((f) => f.message.includes('aliases 存在重复项'))).toBe(true);
  });

  it('ignores non-glossary files and README indexes', () => {
    const files = [
      entry('cislunar-orbits/foo.md', validFrontmatter),
      entry('glossary/orbits/README.md', validFrontmatter),
    ];
    expect(scanGlossaryFrontmatter(files)).toEqual([]);
  });
});
