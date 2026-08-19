/**
 * Content Module 实现（ADR-0003 骨架：list / read / write / refreshIndex）。
 *
 * 依赖全部由构造函数注入（webRoot、section 目录、索引刷新回调），
 * 测试传 fixture 目录与 spy，生产实例见 index.ts。create/delete 与
 * 分类操作随 admin 迁移批次加入。
 */
import fs from 'fs';
import path from 'path';
import { parseMarkdownDoc, renderMarkdown } from './frontmatter-writer.ts';
import { createContentRouter, type ContentRouter } from './router.ts';
import type {
  ContentDoc,
  ContentEntry,
  ContentFamily,
  ContentModule,
  ContentUpdate,
} from './types.ts';

export interface ContentDeps {
  /** 站点根目录（含 space-news/、glossary/、各 section 目录）。 */
  webRoot: string;
  /** kb-section 的顶层目录名列表。 */
  sectionDirs: readonly string[];
  /** 写操作成功后的索引刷新回调；缺省为 no-op。 */
  refreshIndex?: () => void;
}

function walkMarkdownFiles(absDir: string, base: string, out: string[]): void {
  if (!fs.existsSync(absDir)) return;
  for (const e of fs.readdirSync(absDir, { withFileTypes: true })) {
    const abs = path.join(absDir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'figures' || e.name === 'node_modules') continue;
      walkMarkdownFiles(abs, base, out);
    } else if (e.isFile() && e.name.endsWith('.md')) {
      out.push(path.relative(base, abs).replace(/\\/g, '/'));
    }
  }
}

export function createContentModule(deps: ContentDeps): ContentModule {
  const router: ContentRouter = createContentRouter(deps.sectionDirs);
  const refresh = deps.refreshIndex ?? (() => {});

  function absOf(relPath: string): string {
    // router.resolve 已拒绝绝对路径与穿越；resolve 归一化防止拼接异常
    return path.resolve(deps.webRoot, relPath);
  }

  /** list 的遍历根：每个内容族 × 每个语言侧的具体目录列表。 */
  function familyRoots(family: ContentFamily): string[] {
    if (family === 'space-news') return ['space-news', 'en/space-news'];
    if (family === 'glossary') return ['glossary', 'en/glossary'];
    // kb-section 逐 section 目录遍历，天然不会越过 locale 根
    return [...deps.sectionDirs, ...deps.sectionDirs.map((s) => `en/${s}`)];
  }

  function toEntry(relPath: string): ContentEntry {
    const route = router.resolve(relPath)!; // 调用方已过滤
    const entry: ContentEntry = {
      ...route,
      counterpartExists: fs.existsSync(absOf(route.counterpartPath)),
      frontmatter: {},
    };
    try {
      entry.frontmatter = parseMarkdownDoc(fs.readFileSync(absOf(relPath), 'utf-8')).frontmatter;
    } catch (err) {
      entry.frontmatterError = err instanceof Error ? err.message : String(err);
    }
    return entry;
  }

  function list(family: ContentFamily): ContentEntry[] {
    const rels: string[] = [];
    for (const root of familyRoots(family)) {
      walkMarkdownFiles(path.resolve(deps.webRoot, root), deps.webRoot, rels);
    }
    return rels
      .map((rel) => router.resolve(rel))
      .filter((r): r is NonNullable<typeof r> => r !== null && r.family === family)
      .map((r) => toEntry(r.relPath));
  }

  function read(relPath: string): ContentDoc {
    const route = router.resolve(relPath);
    if (!route) {
      throw new Error(`content: 路径不是受管理的内容条目: ${relPath}`);
    }
    const abs = absOf(relPath);
    if (!fs.existsSync(abs)) {
      throw new Error(`content: 文件不存在: ${relPath}`);
    }
    return parseMarkdownDoc(fs.readFileSync(abs, 'utf-8'));
  }

  function write(relPath: string, next: ContentUpdate): void {
    const current = read(relPath);
    const doc: ContentDoc = {
      frontmatter:
        next.frontmatter !== undefined
          ? { ...current.frontmatter, ...next.frontmatter }
          : current.frontmatter,
      body: next.body !== undefined ? next.body : current.body,
    };
    fs.writeFileSync(absOf(relPath), renderMarkdown(doc), 'utf-8');
    refresh();
  }

  return { list, read, write, refreshIndex: refresh };
}
