import fs from 'fs';
import path from 'path';

/**
 * Represents a markdown file with raw content.
 * Consumers are responsible for calling parseFrontmatterAndBody() if needed.
 */
export interface MarkdownFile {
  absPath: string;
  relPath: string; // relative to webRoot, forward slashes
  content: string; // raw markdown content (not parsed)
}

export const DEFAULT_EXCLUDED = new Set(['node_modules', 'dist', '.vuepress']);

export interface FileSystemWalkerOptions {
  excludedDirs?: Set<string>;
  onFile?: (absPath: string, relPath: string) => void;
  onEnterDir?: (absPath: string, relPath: string) => boolean | void; // return false to skip recursion
}

export function walkDir(
  root: string,
  { excludedDirs = DEFAULT_EXCLUDED, onFile, onEnterDir }: FileSystemWalkerOptions,
  relRoot = '',
): void {
  for (const entry of fs.readdirSync(root, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    const abs = path.join(root, entry.name);
    const rel = relRoot ? `${relRoot}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (excludedDirs.has(entry.name)) continue;
      const descend = onEnterDir?.(abs, rel) !== false;
      if (descend) walkDir(abs, { excludedDirs, onFile, onEnterDir }, rel);
    } else {
      onFile?.(abs, rel);
    }
  }
}

export function walkSiteMarkdown(webRoot: string): MarkdownFile[] {
  const result: MarkdownFile[] = [];

  walkDir(webRoot, {
    excludedDirs: DEFAULT_EXCLUDED,
    onFile: (abs, rel) => {
      if (!/\.md$/i.test(abs)) return;
      const content = fs.readFileSync(abs, 'utf-8');
      result.push({ absPath: abs, relPath: rel, content });
    },
  });

  return result;
}
