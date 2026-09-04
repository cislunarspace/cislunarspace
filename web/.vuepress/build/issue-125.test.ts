/**
 * Tests for issue #125: Fix broken glossary link paths.
 *
 * En-mirror cases and cases whose subject files were later reorganized
 * were removed together with the English content tree; this file now
 * covers the retargeted NRHO links that still exist.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const webDir = path.join(__dirname, '..', '..');

function readFile(relPath: string): string {
  return fs.readFileSync(path.join(webDir, relPath), 'utf-8');
}

// ── A: Path errors ────────────────────────────────────────────────────────────

describe('issue #125 — nrho path correction', () => {
  const files = ['background/math/continuation.md', 'background/math/shooting-method.md'];

  it.each(files)('%s does not reference /glossary/nrho/', (relPath) => {
    const content = readFile(relPath);
    expect(content).not.toContain('/glossary/nrho/');
  });

  it.each(files)('%s references /glossary/orbits/nrho/', (relPath) => {
    const content = readFile(relPath);
    expect(content).toContain('/glossary/orbits/nrho/');
  });
});
