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
  CreateResult,
  CreateSpaceNewsInput,
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

  /**
   * 新建 Space News 文章：zh 必建，en 镜像可选；月份 README 不存在则创建，
   * 存在则按日期序插入表格行。配图（figures）由图片流程单独补，不在此建。
   */
  function createSpaceNews(input: CreateSpaceNewsInput): CreateResult {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date)) {
      throw new Error(`content.create: date 应为 YYYY-MM-DD: ${input.date}`);
    }
    if (!/^[a-z0-9-]+$/.test(input.slug)) {
      throw new Error(`content.create: slug 只允许小写字母数字连字符: ${input.slug}`);
    }
    if (input.withEn && !input.bodyEn) {
      throw new Error('content.create: withEn 需要 bodyEn');
    }
    const year = input.date.slice(0, 4);
    const month = input.date.slice(5, 7);
    const stem = `${input.date}-${input.slug}`;
    const zhPath = `space-news/${year}/${month}/${stem}.md`;
    const enPath = `en/space-news/${year}/${month}/${stem}.md`;
    if (fs.existsSync(absOf(zhPath)) || (input.withEn && fs.existsSync(absOf(enPath)))) {
      throw new Error(`content.create: 目标文章已存在: ${stem}`);
    }

    const makeDoc = (
      title: string,
      description: string | undefined,
      category: string | string[] | undefined,
      body: string,
      locale: 'zh' | 'en',
    ): ContentDoc => ({
      frontmatter: {
        layout: 'SpaceNewsArticle',
        title,
        description: description ?? title,
        permalink: `/${locale === 'en' ? 'en/' : ''}space-news/${year}/${month}/${stem}/`,
        author: '天疆说',
        date: input.date,
        lastUpdated: input.date,
        ...(category !== undefined ? { category } : {}),
        ...(input.sourceUrl ? { source_url: input.sourceUrl } : {}),
      },
      body,
    });

    fs.mkdirSync(path.dirname(absOf(zhPath)), { recursive: true });
    fs.writeFileSync(
      absOf(zhPath),
      renderMarkdown(
        makeDoc(input.titleZh, input.descriptionZh, input.categoryZh, input.bodyZh, 'zh'),
      ),
      'utf-8',
    );
    if (input.withEn) {
      fs.mkdirSync(path.dirname(absOf(enPath)), { recursive: true });
      fs.writeFileSync(
        absOf(enPath),
        renderMarkdown(
          makeDoc(
            input.titleEn,
            input.descriptionEn,
            input.categoryEn ?? input.categoryZh,
            input.bodyEn!,
            'en',
          ),
        ),
        'utf-8',
      );
    }
    upsertMonthReadmeRow(year, month, input.date, input.titleZh, stem);
    refresh();
    return { zhPath, enPath: input.withEn ? enPath : null };
  }

  /** 月份 README 不存在则建，存在则按日期序插入一行表格索引。 */
  function upsertMonthReadmeRow(
    year: string,
    month: string,
    date: string,
    title: string,
    stem: string,
  ): void {
    const readme = `space-news/${year}/${month}/README.md`;
    const abs = absOf(readme);
    const row = `| ${Number(month)}-${Number(date.slice(8, 10))} | [${title}](./${stem}/) |`;
    if (!fs.existsSync(abs)) {
      fs.mkdirSync(path.dirname(abs), { recursive: true });
      fs.writeFileSync(
        abs,
        [
          '---',
          `title: 航天动态 · ${year} 年 ${Number(month)} 月`,
          `description: ${year} 年 ${Number(month)} 月航天新闻条目索引。`,
          `permalink: /space-news/${year}/${month}/`,
          'author: 天疆说',
          `date: ${date}`,
          `lastUpdated: ${date}`,
          '---',
          '',
          `# ${year} 年 ${Number(month)} 月`,
          '',
          '## 本月条目',
          '',
          '| 日期 | 标题 |',
          '| ------ | ------ |',
          row,
          '',
        ].join('\n'),
        'utf-8',
      );
      return;
    }
    const lines = fs.readFileSync(abs, 'utf-8').split('\n');
    const rowIndex = lines.findIndex((l) => l.includes(`(./${stem}/)`));
    if (rowIndex >= 0) {
      lines[rowIndex] = row; // 已有条目：更新标题
    } else {
      // 插到最后一个表格行之后（表格行以 '| ' 开头）
      let insertAt = lines.findIndex((l) => l.startsWith('| ------'));
      insertAt = insertAt >= 0 ? insertAt + 1 : lines.length;
      while (insertAt < lines.length && lines[insertAt].startsWith('| ')) insertAt++;
      lines.splice(insertAt, 0, row);
    }
    fs.writeFileSync(abs, lines.join('\n'), 'utf-8');
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
      // Space News 文章删除时连 zh 侧 figures/<date>-<slug>/ 目录一并回收
      // （图片单一来源后 en 侧无物理副本）
      const figMatch = t.match(
        /^(?:en\/)?space-news\/(\d{4}\/\d{2})\/(\d{4}-\d{2}-\d{2}-[^/]+)\.md$/,
      );
      if (figMatch) {
        const figDir = `space-news/${figMatch[1]}/figures/${figMatch[2]}`;
        const figAbs = absOf(figDir);
        if (fs.existsSync(figAbs) && fs.statSync(figAbs).isDirectory()) {
          const figTrash = path.join(deps.webRoot, trashDir, figDir);
          fs.mkdirSync(path.dirname(figTrash), { recursive: true });
          fs.renameSync(figAbs, figTrash);
        }
      }
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
   * `(/glossary/<cat>/<slug>/)` 形态的索引行；space-news 文章在月份
   * README 有 `| M-DD | [标题](./YYYY-MM-DD-slug/) |` 表格行。
   */
  function cleanupReadmes(deletedFiles: string[]): DeleteReport['readmeLinesRemoved'] {
    const results: DeleteReport['readmeLinesRemoved'] = [];
    results.push(...cleanupGlossaryReadme(deletedFiles));
    results.push(...cleanupMonthReadmes(deletedFiles));
    return results;
  }

  /** 月份 README 的表格行清理：删除含 `](./YYYY-MM-DD-slug/)` 的行。 */
  function cleanupMonthReadmes(deletedFiles: string[]): DeleteReport['readmeLinesRemoved'] {
    const results: DeleteReport['readmeLinesRemoved'] = [];
    const byReadme = new Map<string, Set<string>>();
    for (const f of deletedFiles) {
      const m = f.match(/^(?:en\/)?space-news\/(\d{4}\/\d{2})\/(\d{4}-\d{2}-\d{2}-[^/]+)\.md$/);
      if (!m) continue;
      const readme = `space-news/${m[1]}/README.md`;
      if (!byReadme.has(readme)) byReadme.set(readme, new Set());
      byReadme.get(readme)!.add(`(./${m[2]}/)`);
    }
    for (const [readme, markers] of byReadme) {
      const abs = absOf(readme);
      if (!fs.existsSync(abs)) continue;
      const lines = fs.readFileSync(abs, 'utf-8').split('\n');
      const kept = lines.filter((l) => ![...markers].some((mk) => l.includes(mk)));
      const removed = lines.length - kept.length;
      if (removed > 0) {
        fs.writeFileSync(abs, kept.join('\n'), 'utf-8');
        results.push({ file: readme, count: removed });
      }
    }
    return results;
  }

  function cleanupGlossaryReadme(deletedFiles: string[]): DeleteReport['readmeLinesRemoved'] {
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
    create: (family: 'space-news', input: CreateSpaceNewsInput) => {
      if (family !== 'space-news') {
        throw new Error(`content.create: 暂不支持内容族 ${family}`);
      }
      return createSpaceNews(input);
    },
    delete: (relPath: string, o: DeleteOptions) => deleteMany([relPath], o),
    deleteMany,
    refreshIndex: refresh,
  };
}
