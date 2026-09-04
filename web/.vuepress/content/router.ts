/**
 * 内容路径约定的唯一表达（ADR-0003：路径约定只表达一次）。
 *
 * 规则来源（沿用既有目录约定，未引入新约定）：
 *   - glossary 词条：glossary/<category>/<slug>.md
 *     （glossary/README.md 同理不识别）
 *   - kb-section 页面：<section>/ 下任意深度的 .md（含各层 README）。
 *     section 目录列表由调用方注入 —— 生产环境从 taxonomy 的
 *     kind:'section' 节点派生，测试传 fixture 列表。
 */
import type { ContentFamily, ContentRoute } from './types.ts';

const GLOSSARY_ENTRY = /^glossary\/([^/]+)\/([^/]+)\.md$/;

/** 路径的安全检查：拒绝绝对路径与穿越（router 只认 web/ 内的相对路径）。 */
function isSafeRelPath(relPath: string): boolean {
  if (!relPath || relPath.includes('\\') || relPath.includes('\0')) return false;
  if (relPath.startsWith('/') || /^[a-zA-Z]:/.test(relPath)) return false;
  const parts = relPath.split('/');
  return parts.every((p) => p !== '' && p !== '.' && p !== '..');
}

export interface ContentRouter {
  /** 识别一个相对路径；不认识（含 README 索引页、未知目录）返回 null。 */
  resolve(relPath: string): ContentRoute | null;
}

export function createContentRouter(sectionDirs: readonly string[]): ContentRouter {
  const sections = new Set(sectionDirs);

  function resolve(relPath: string): ContentRoute | null {
    if (!isSafeRelPath(relPath)) return null;

    let family: ContentFamily | null = null;
    if (GLOSSARY_ENTRY.test(relPath)) {
      family = 'glossary';
    } else {
      const top = relPath.split('/')[0] ?? '';
      if (sections.has(top)) family = 'kb-section';
    }
    if (!family) return null;

    return { relPath, family };
  }

  return { resolve };
}

/** 生产环境的 section 目录列表：从 taxonomy 的 section 节点路径派生。 */
export function sectionDirsFromPaths(sectionPaths: readonly string[]): string[] {
  return sectionPaths
    .map((p) => p.replace(/^\//, '').replace(/\/$/, ''))
    .filter((p) => p.length > 0 && !p.includes('/'));
}
