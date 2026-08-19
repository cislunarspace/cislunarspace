/**
 * 内容路径约定的唯一表达（ADR-0003：路径约定只表达一次）。
 *
 * 双向规则：
 *   relPath → { family, locale, counterpartPath }
 *   family + locale + 标识（由各族的路径模式承载）→ relPath
 *
 * 规则来源（沿用既有目录约定，未引入新约定）：
 *   - space-news 文章：(en/)?space-news/YYYY/MM/YYYY-MM-DD-slug.md
 *     （月份 README 是索引页，不是内容条目，不识别）
 *   - glossary 词条：(en/)?glossary/<category>/<slug>.md
 *     （glossary/README.md 同理不识别）
 *   - kb-section 页面：(en/)?<section>/ 下任意深度的 .md（含各层 README）。
 *     section 目录列表由调用方注入 —— 生产环境从 taxonomy 的
 *     kind:'section' 节点派生，测试传 fixture 列表。
 */
import type { ContentFamily, ContentLocale, ContentRoute } from './types.ts';

const SPACE_NEWS_ARTICLE = /^(?:en\/)?space-news\/(\d{4})\/(\d{2})\/(\d{4}-\d{2}-\d{2}-[^/]+)\.md$/;
const GLOSSARY_ENTRY = /^(?:en\/)?glossary\/([^/]+)\/([^/]+)\.md$/;

/** 路径的安全检查：拒绝绝对路径与穿越（router 只认 web/ 内的相对路径）。 */
function isSafeRelPath(relPath: string): boolean {
  if (!relPath || relPath.includes('\\') || relPath.includes('\0')) return false;
  if (relPath.startsWith('/') || /^[a-zA-Z]:/.test(relPath)) return false;
  const parts = relPath.split('/');
  return parts.every((p) => p !== '' && p !== '.' && p !== '..');
}

function localeOf(relPath: string): ContentLocale {
  return relPath.startsWith('en/') ? 'en' : 'zh';
}

function withoutLocalePrefix(relPath: string): string {
  return relPath.startsWith('en/') ? relPath.slice(3) : relPath;
}

function withLocale(relPathNoPrefix: string, locale: ContentLocale): string {
  return locale === 'en' ? `en/${relPathNoPrefix}` : relPathNoPrefix;
}

export interface ContentRouter {
  /** 识别一个相对路径；不认识（含 README 索引页、未知目录）返回 null。 */
  resolve(relPath: string): ContentRoute | null;
  /** 双语对应路径：本侧推导对侧。不识别的路径原样返回 null。 */
  counterpart(relPath: string): string | null;
}

export function createContentRouter(sectionDirs: readonly string[]): ContentRouter {
  const sections = new Set(sectionDirs);

  function resolve(relPath: string): ContentRoute | null {
    if (!isSafeRelPath(relPath)) return null;

    let family: ContentFamily | null = null;
    if (SPACE_NEWS_ARTICLE.test(relPath)) {
      // 月份 README 已被文章正则排除（README.md 不匹配日期-slug 模式）
      family = 'space-news';
    } else if (GLOSSARY_ENTRY.test(relPath)) {
      family = 'glossary';
    } else {
      const top = withoutLocalePrefix(relPath).split('/')[0] ?? '';
      if (sections.has(top)) family = 'kb-section';
    }
    if (!family) return null;

    const locale = localeOf(relPath);
    const noPrefix = withoutLocalePrefix(relPath);
    return {
      relPath,
      family,
      locale,
      counterpartPath: withLocale(noPrefix, locale === 'zh' ? 'en' : 'zh'),
    };
  }

  return {
    resolve,
    counterpart(relPath: string): string | null {
      return resolve(relPath)?.counterpartPath ?? null;
    },
  };
}

/** 生产环境的 section 目录列表：从 taxonomy 的 section 节点路径派生。 */
export function sectionDirsFromPaths(sectionPaths: readonly string[]): string[] {
  return sectionPaths
    .map((p) => p.replace(/^\//, '').replace(/\/$/, ''))
    .filter((p) => p.length > 0 && !p.includes('/'));
}
