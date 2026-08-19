import fs from 'fs';
import path from 'path';
import { buildGlossaryScan } from '../intakes/glossary-intake.ts';
import { buildTranslationGapIntake as getTranslationGapReport } from '../intakes/translation-gap-intake.ts';
import { parseFrontmatterAndBody } from '../utils/frontmatter-parser.ts';
import type { MarkdownFile } from '../utils/markdown-walker.ts';
import { glossaryCategories } from '../taxonomy/adapters/glossary-categories.ts';
import type { GlossaryScanEntry } from '../sidebar/types.ts';

/**
 * 扫描 glossary 词条，打印翻译缺口报告，返回 scan 供 AI 索引消费。
 * 不再落盘 sidebar-glossary.auto.json：glossary 页面不在构建范围
 * （config.ts pagePatterns 排除），sidebar 树无消费者（ADR-0004）。
 */
export function generateGlossaryArtifacts(
  files: MarkdownFile[],
): ReturnType<typeof buildGlossaryScan> {
  const glossaryScan = buildGlossaryScan(files);
  const gapReport = getTranslationGapReport(glossaryScan);

  if (gapReport.total > 0) {
    console.log(
      `\n📋 Glossary translation gaps: ${gapReport.total} entries missing English translations`,
    );
    for (const [cat, count] of Object.entries(gapReport.byCategory)) {
      console.log(`   ${cat}: ${count} missing`);
    }
  }

  return glossaryScan;
}

// ── 客户端词典数据（glossary-dictionary.json） ──────────────────────────────

interface DictEntry {
  slug: string;
  title: string;
  otherTitle: string | null;
  definition: string;
}

interface DictCategory {
  slug: string;
  label: string;
  entries: DictEntry[];
}

/** zh 词条标题形如「自动微分（Automatic Differentiation）」——拆出中英。 */
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

function buildDictionarySide(
  files: MarkdownFile[],
  entries: GlossaryScanEntry[],
  counterpartEntries: GlossaryScanEntry[],
  locale: 'zh' | 'en',
): DictCategory[] {
  const fileBySlug = new Map<string, string>();
  const prefix = locale === 'en' ? 'en/glossary/' : 'glossary/';
  for (const f of files) {
    if (f.relPath.startsWith(prefix) && !f.relPath.endsWith('README.md')) {
      const parts = f.relPath.split('/');
      fileBySlug.set(parts[parts.length - 1].replace(/\.md$/, ''), f.content);
    }
  }
  const counterpartBySlug = new Map(counterpartEntries.map((e) => [e.slug, e]));

  const byCategory = new Map<string, DictEntry[]>();
  for (const entry of entries) {
    const raw = fileBySlug.get(entry.slug);
    let definition = '';
    let zhTitle = entry.title;
    if (raw) {
      const { frontmatter, body } = parseFrontmatterAndBody(raw);
      definition = extractDefinition(body);
      const zh = splitTitle(String(frontmatter.title ?? entry.title)).zh;
      zhTitle = zh;
    }
    const counter = counterpartBySlug.get(entry.slug);
    let otherTitle: string | null = null;
    if (locale === 'zh') {
      otherTitle = splitTitle(entry.title).en ?? counter?.title ?? null;
    } else {
      otherTitle = counter ? splitTitle(counter.title).zh : null;
    }
    const title = locale === 'zh' ? zhTitle : entry.title;
    const catSlug = entry.category.slug;
    if (!byCategory.has(catSlug)) byCategory.set(catSlug, []);
    byCategory.get(catSlug)!.push({ slug: entry.slug, title, otherTitle, definition });
  }

  const categories: DictCategory[] = [];
  for (const cat of glossaryCategories) {
    const list = byCategory.get(cat.slug);
    if (!list || list.length === 0) continue;
    categories.push({
      slug: cat.slug,
      label: cat.label[locale],
      entries: list.sort((a, b) => a.title.localeCompare(b.title, 'zh')),
    });
  }
  return categories;
}

/** 生成客户端词典数据 public/glossary-dictionary.json（中英分区视图）。 */
export function generateGlossaryDictionary(
  files: MarkdownFile[],
  scan: ReturnType<typeof buildGlossaryScan>,
  outDir: string,
): void {
  const data = {
    zh: { categories: buildDictionarySide(files, scan.zh.entries, scan.en.entries, 'zh') },
    en: { categories: buildDictionarySide(files, scan.en.entries, scan.zh.entries, 'en') },
  };
  const publicDir = path.join(outDir, 'public');
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
  const target = path.join(publicDir, 'glossary-dictionary.json');
  fs.writeFileSync(target, JSON.stringify(data));
  const zhCount = data.zh.categories.reduce((n, c) => n + c.entries.length, 0);
  const enCount = data.en.categories.reduce((n, c) => n + c.entries.length, 0);
  console.log(`Generated glossary-dictionary.json (${zhCount} zh, ${enCount} en entries)`);
}
