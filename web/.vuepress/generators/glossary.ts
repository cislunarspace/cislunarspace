import fs from 'fs';
import path from 'path';
import { buildGlossaryScan } from '../intakes/glossary-intake.ts';
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories.ts';
import type { GlossaryScanEntry, GlossaryScan } from '../sidebar/types.ts';

/**
 * 扫描 glossary 词条，返回 scan 供 AI 索引与客户端词典消费。
 * 不再落盘 sidebar-glossary.auto.json：glossary 页面不在构建范围
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

interface DictEntry {
  slug: string;
  title: string;
  /** 词条标题括注中的英文名（如「自动微分（Automatic Differentiation）」），无则为 null */
  otherTitle: string | null;
  definition: string;
}

interface DictCategory {
  slug: string;
  label: string;
  entries: DictEntry[];
}

/** 词条标题形如「自动微分（Automatic Differentiation）」——拆出中英。 */
function splitTitle(title: string): { zh: string; en: string | null } {
  const m = title.match(/^(.+?)[（(](.+)[)）]\s*$/);
  if (m) return { zh: m[1].trim(), en: m[2].trim() };
  return { zh: title.trim(), en: null };
}

/** 提取正文 `## 定义` 段（到下一个二级标题），压缩为单段文本。 */
function extractDefinition(body: string): string {
  const m = body.match(/^## 定义\s*\n([\s\S]*?)(?=^## |\s*$)/m);
  if (!m) return '';
  return m[1].replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
}

function buildDictionary(files: MarkdownFile[], entries: GlossaryScanEntry[]): DictCategory[] {
  const fileBySlug = new Map<string, string>();
  for (const f of files) {
    if (f.relPath.startsWith('glossary/') && !f.relPath.endsWith('README.md')) {
      const parts = f.relPath.split('/');
      fileBySlug.set(parts[parts.length - 1].replace(/\.md$/, ''), f.content);
    }
  }

  const byCategory = new Map<string, DictEntry[]>();
  for (const entry of entries) {
    const raw = fileBySlug.get(entry.slug);
    let definition = '';
    let zhTitle = entry.title;
    if (raw) {
      const { frontmatter, body } = parseFrontmatterAndBody(raw);
      definition = extractDefinition(body);
      zhTitle = splitTitle(String(frontmatter.title ?? entry.title)).zh;
    }
    const otherTitle = splitTitle(entry.title).en;
    const catSlug = entry.category.slug;
    if (!byCategory.has(catSlug)) byCategory.set(catSlug, []);
    byCategory.get(catSlug)!.push({ slug: entry.slug, title: zhTitle, otherTitle, definition });
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
  console.log(`Generated glossary-dictionary.json (${count} entries)`);
}
