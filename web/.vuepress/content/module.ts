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
  DeleteReport,
} from './types.ts';

export interface ContentDeps {
  /** 站点根目录（含 glossary/、各 section 目录）。 */
  webRoot: string;
  /** kb-section 的顶层目录名列表。 */
  sectionDirs: readonly string[];
  /** 写操作成功后的索引刷新回调。缺省为 no-op。 */
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
    // router.resolve 已拒绝绝对路径与穿越。resolve 归一化防止拼接异常
    return path.resolve(deps.webRoot, relPath);
  }

  /** list 的遍历根：每个内容族的具体目录列表。 */
  function familyRoots(family: ContentFamily): string[] {
    if (family === 'glossary') return ['glossary'];
    return [...deps.sectionDirs];
  }

  function toEntry(relPath: string): ContentEntry {
    const route = router.resolve(relPath)!; // 调用方已过滤
    const entry: ContentEntry = {
      ...route,
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

  function deleteMany(relPaths: readonly string[]): DeleteReport {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const trashDir = path.join('.trash', stamp);
    const targets = new Set<string>();
    const skipped: string[] = [];
    for (const rel of relPaths) {
      if (!router.resolve(rel) || !fs.existsSync(absOf(rel))) {
        skipped.push(rel);
        continue;
      }
      targets.add(rel);
    }
    const deletedFiles: string[] = [];
    for (const t of targets) {
      const trashPath = path.join(deps.webRoot, trashDir, t);
      fs.mkdirSync(path.dirname(trashPath), { recursive: true });
      fs.renameSync(absOf(t), trashPath);
      deletedFiles.push(t);
    }
    const report: DeleteReport = {
      deletedFiles,
      trashedTo: trashDir,
      readmeLinesRemoved: [],
      skipped,
    };
    if (deletedFiles.length > 0) {
      report.readmeLinesRemoved = cleanupReadmes(deletedFiles);
      refresh();
    }
    return report;
  }

  /**
   * 清理 glossary 索引：删除词条所在分类索引页（glossary/<cat>/README.md）
   * 中的索引行，并同步首页分类板块表的条目数与总计。
   */
  function cleanupReadmes(deletedFiles: string[]): DeleteReport['readmeLinesRemoved'] {
    const results: DeleteReport['readmeLinesRemoved'] = [];
    const byCat = new Map<string, string[]>();
    for (const f of deletedFiles) {
      const parts = f.split('/');
      if (!f.startsWith('glossary/') || parts.length < 3) continue;
      const token = `/glossary/${parts.slice(1).join('/').replace(/\.md$/, '')}/`;
      if (!byCat.has(parts[1])) byCat.set(parts[1], []);
      byCat.get(parts[1])!.push(token);
    }
    if (byCat.size === 0) return results;

    const today = new Date().toISOString().slice(0, 10);
    const bumpDate = (text: string) =>
      text.replace(/^(lastUpdated:\s*)\d{4}-\d{2}-\d{2}$/m, `$1${today}`);

    let totalRemoved = 0;
    const removedByCat = new Map<string, number>();
    for (const [cat, tokens] of byCat) {
      const pageRel = `glossary/${cat}/README.md`;
      const pageAbs = path.join(deps.webRoot, pageRel);
      if (!fs.existsSync(pageAbs)) continue;
      const lines = fs.readFileSync(pageAbs, 'utf-8').split('\n');
      const kept = lines.filter((line) => !tokens.some((t) => line.includes(t)));
      const removed = lines.length - kept.length;
      if (removed === 0) continue;
      fs.writeFileSync(pageAbs, bumpDate(kept.join('\n')), 'utf-8');
      results.push({ file: pageRel, count: removed });
      removedByCat.set(cat, removed);
      totalRemoved += removed;
    }

    if (totalRemoved > 0) {
      const homeAbs = path.join(deps.webRoot, 'glossary', 'README.md');
      if (fs.existsSync(homeAbs)) {
        let content = fs.readFileSync(homeAbs, 'utf-8');
        for (const [cat, removed] of removedByCat) {
          const rowRe = new RegExp(`(\\| \\[[^\\]]+\\]\\(/glossary/${cat}/\\) \\| )(\\d+)( \\|)`);
          content = content.replace(
            rowRe,
            (_m, p1: string, n: string, p3: string) => `${p1}${Number(n) - removed}${p3}`,
          );
        }
        content = content.replace(
          /(共 )(\d+)( 条词条)/,
          (_m, p1: string, n: string, p3: string) => `${p1}${Number(n) - totalRemoved}${p3}`,
        );
        fs.writeFileSync(homeAbs, bumpDate(content), 'utf-8');
      }
    }
    return results;
  }

  return {
    list,
    read,
    write,
    delete: (relPath: string) => deleteMany([relPath]),
    deleteMany,
    refreshIndex: refresh,
  };
}
