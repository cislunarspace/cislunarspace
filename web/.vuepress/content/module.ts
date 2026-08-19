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
  DeleteOptions,
  DeleteReport,
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

  function deleteMany(relPaths: readonly string[], opts: DeleteOptions): DeleteReport {
    const stamp = new Date().toISOString().replace(/[:.]/g, '-');
    const trashDir = path.join('.trash', stamp);
    const targets = new Set<string>();
    const skipped: string[] = [];
    for (const rel of relPaths) {
      const route = router.resolve(rel);
      if (!route || !fs.existsSync(absOf(rel))) {
        skipped.push(rel);
        continue;
      }
      targets.add(rel);
      if (
        opts.withCounterpart &&
        route.counterpartPath !== rel &&
        fs.existsSync(absOf(route.counterpartPath))
      ) {
        targets.add(route.counterpartPath);
      }
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
   * 清理 README 索引行：glossary 词条在 glossary/README.md 有
   * `(/glossary/<cat>/<slug>/)` 形态的索引行；删除后清行、重算节计数、
   * 移除空节。其他族暂无 README 索引维护需求（随 admin 迁移补充）。
   */
  function cleanupReadmes(deletedFiles: string[]): DeleteReport['readmeLinesRemoved'] {
    const results: DeleteReport['readmeLinesRemoved'] = [];
    const glossarySlugs = new Set(
      deletedFiles.filter((f) => f.startsWith('glossary/') && f !== 'glossary/README.md'),
    );
    if (glossarySlugs.size === 0) return results;

    const readmeAbs = path.join(deps.webRoot, 'glossary', 'README.md');
    if (!fs.existsSync(readmeAbs)) return results;
    const lines = fs.readFileSync(readmeAbs, 'utf-8').split('\n');

    const isIndexLine = (line: string) => {
      const m = line.match(/\]\(\/glossary\/([^/]+)\/([^/)]+)\/\)/);
      return m !== null && glossarySlugs.has(`glossary/${m[1]}/${m[2]}.md`);
    };
    const removed = lines.filter(isIndexLine).length;
    if (removed === 0) return results;

    // 过滤索引行，同时按节重算
    const outLines: string[] = [];
    let sectionHeaderIdx = -1; // outLines 中当前节标题的位置
    let sectionCount = 0;
    const flushSection = () => {
      if (sectionHeaderIdx < 0) return;
      if (sectionCount === 0) {
        // 空节：删除节标题与其后的空行，保留一个空行与后续内容分隔
        outLines.splice(sectionHeaderIdx);
        while (outLines.length > 0 && outLines[outLines.length - 1] === '') outLines.pop();
        if (outLines.length > 0) outLines.push('');
        sectionHeaderIdx = -1;
      } else {
        // 节标题形如「### 基础概念（fundamentals，218 条）」——重算计数
        outLines[sectionHeaderIdx] = outLines[sectionHeaderIdx].replace(
          /^(### .*?[（(][^,，]+[,，]\s*)\d+(\s*条[)）])/,
          `$1${sectionCount}$2`,
        );
      }
    };
    for (const line of lines) {
      if (line.startsWith('### ')) {
        flushSection();
        outLines.push(line);
        sectionHeaderIdx = outLines.length - 1;
        sectionCount = 0;
      } else if (isIndexLine(line)) {
        continue; // 已删除
      } else {
        if (line.startsWith('- [') && sectionHeaderIdx >= 0) sectionCount++;
        outLines.push(line);
      }
    }
    flushSection();
    fs.writeFileSync(readmeAbs, `${outLines.join('\n').replace(/\n{3,}/g, '\n\n')}\n`, 'utf-8');
    results.push({ file: 'glossary/README.md', count: removed });
    return results;
  }

  return {
    list,
    read,
    write,
    delete: (relPath: string, o: DeleteOptions) => deleteMany([relPath], o),
    deleteMany,
    refreshIndex: refresh,
  };
}
