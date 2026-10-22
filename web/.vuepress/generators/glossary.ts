import fs from 'fs';
import path from 'path';
import { buildGlossaryScan } from '../intakes/glossary-intake.ts';
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories.ts';
import type { GlossaryScanEntry, GlossaryScan } from '../sidebar/types.ts';

/**
 * 扫描 glossary 词条，返回 scan 供 AI 索引与客户端词典消费。
 * 不落盘 sidebar-glossary.auto.json：glossary 页面不在构建范围
 * （config.ts pagePatterns 排除），sidebar 树无消费者（ADR-0004）。
 */
export function generateGlossaryArtifacts(files: MarkdownFile[]): GlossaryScan {
  const glossaryScan = buildGlossaryScan(files);

  const byCategory = new Map<string, number>();
  for (const entry of glossaryScan.entries) {
    byCategory.set(entry.category.label, (byCategory.get(entry.category.label) || 0) + 1);
  }
  console.log(
    `Glossary scan: ${glossaryScan.entries.length} entries in ${byCategory.size} categories`,
  );

  return glossaryScan;
}

// ── 客户端词典数据（glossary-dictionary.json） ──────────────────────────────
// 该工件同时是站内词典页的数据源与对外检索的数据契约，见 ADR-0009。

export interface DictEntry {
  slug: string;
  title: string;
  /** 词条标题括注中的英文名（如「自动微分（Automatic Differentiation）」），无则为 null */
  otherTitle: string | null;
  /** 定义正文，已剥离引用标记与公式定界符 */
  definition: string;
  /** 词条页面路径，取自 frontmatter permalink，缺省用扫描路径 */
  url: string;
  keywords?: string[];
  aliases?: string[];
  citations?: string[];
}

export interface DictCategory {
  slug: string;
  label: string;
  entries: DictEntry[];
}

/** 词条标题形如「自动微分（Automatic Differentiation）」。拆出中英。 */
export function splitTitle(title: string): { zh: string; en: string | null } {
  const m = title.match(/^(.+?)[（(](.+)[)）]\s*$/);
  if (m) return { zh: m[1].trim(), en: m[2].trim() };
  return { zh: title.trim(), en: null };
}

/**
 * 提取正文定义段，压缩为单段文本。
 * 标题接受「## 定义」及其变体（定义与分层、定义与数值等），取不到时返回空串，
 * 由调用方退回 frontmatter description。
 */
export function extractDefinition(body: string): string {
  const lines = body.split('\n');
  const start = lines.findIndex((line) => /^##\s*定义/.test(line));
  if (start === -1) return '';
  const collected: string[] = [];
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^## /.test(lines[i])) break;
    collected.push(lines[i]);
  }
  return collected.join(' ').replace(/\s+/g, ' ').trim();
}

/** 提取引用键，多键引用按逗号拆开，按出现顺序去重。 */
export function extractCitations(text: string): string[] {
  const keys: string[] = [];
  for (const m of text.matchAll(/\\cite\{([^}]+)\}/g)) {
    for (const raw of m[1].split(',')) {
      const key = raw.trim();
      if (key && !keys.includes(key)) keys.push(key);
    }
  }
  return keys;
}

/** 去掉引用标记与公式定界符，保留可朗读的正文。 */
export function stripCitationsAndMath(text: string): string {
  return text
    .replace(/\\cite\{[^}]*\}/g, '')
    .replace(/\$\$[\s\S]*?\$\$/g, ' ')
    .replace(/\\\[[\s\S]*?\\\]/g, ' ')
    .replace(/\\\([\s\S]*?\\\)/g, ' ')
    .replace(/\$([^$]*)\$/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/\s+([，。、；：）])/g, '$1')
    .trim();
}

/** frontmatter keywords 可能是逗号分隔字符串或数组，统一成去重数组。 */
export function parseKeywords(value: unknown): string[] | undefined {
  const raw = Array.isArray(value)
    ? value.map((item) => String(item))
    : typeof value === 'string'
      ? value.split(',')
      : [];
  const list = raw.map((item) => item.trim()).filter(Boolean);
  return list.length > 0 ? Array.from(new Set(list)) : undefined;
}

function entryRelPath(entry: GlossaryScanEntry): string {
  return entry.path.replace(/^\/glossary\//, '').replace(/\/$/, '');
}

function buildDictionary(files: MarkdownFile[], entries: GlossaryScanEntry[]): DictCategory[] {
  // 键用分类加词条 slug：跨分类存在同名 slug，裸 slug 会互相覆盖。
  const contentByRelPath = new Map<string, string>();
  for (const f of files) {
    if (f.relPath.startsWith('glossary/') && !f.relPath.endsWith('README.md')) {
      contentByRelPath.set(f.relPath.slice('glossary/'.length).replace(/\.md$/, ''), f.content);
    }
  }

  const byCategory = new Map<string, DictEntry[]>();
  for (const entry of entries) {
    const raw = contentByRelPath.get(entryRelPath(entry));
    let title = entry.title;
    let definition = '';
    let url = entry.path;
    let keywords: string[] | undefined;
    let aliases: string[] | undefined;
    let citations: string[] | undefined;

    if (raw) {
      const { frontmatter, body } = parseFrontmatterAndBody(raw);
      const rawDefinition = extractDefinition(body);
      const sourceText = rawDefinition || String(frontmatter.description ?? '');
      definition = stripCitationsAndMath(sourceText);
      citations = extractCitations(rawDefinition);
      if (citations.length === 0) citations = undefined;
      title = splitTitle(String(frontmatter.title ?? entry.title)).zh;
      if (frontmatter.permalink) url = String(frontmatter.permalink);
      keywords = parseKeywords(frontmatter.keywords);
      aliases = Array.isArray(frontmatter.aliases)
        ? frontmatter.aliases.map((item) => String(item))
        : undefined;
    }

    const catSlug = entry.category.slug;
    if (!byCategory.has(catSlug)) byCategory.set(catSlug, []);
    byCategory.get(catSlug)!.push({
      slug: entry.slug,
      title,
      otherTitle: splitTitle(entry.title).en,
      definition,
      url,
      ...(keywords ? { keywords } : {}),
      ...(aliases ? { aliases } : {}),
      ...(citations ? { citations } : {}),
    });
  }

  const categories: DictCategory[] = [];
  for (const cat of glossaryCategories) {
    const list = byCategory.get(cat.slug);
    if (!list || list.length === 0) continue;
    categories.push({
      slug: cat.slug,
      label: cat.label,
      entries: list.sort((a, b) => a.title.localeCompare(b.title, 'zh')),
    });
  }
  return categories;
}

/** 生成客户端词典数据 public/glossary-dictionary.json。 */
export function generateGlossaryDictionary(
  files: MarkdownFile[],
  scan: GlossaryScan,
  outDir: string,
): void {
  const data = { categories: buildDictionary(files, scan.entries) };
  const publicDir = path.join(outDir, 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const target = path.join(publicDir, 'glossary-dictionary.json');
  fs.writeFileSync(target, JSON.stringify(data));
  const count = data.categories.reduce((n, c) => n + c.entries.length, 0);
  const cited = data.categories.reduce(
    (n, c) => n + c.entries.filter((e) => (e.citations?.length ?? 0) > 0).length,
    0,
  );
  console.log(`Generated glossary-dictionary.json (${count} entries, ${cited} with citations)`);
}
