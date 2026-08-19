import fs from 'fs';
import os from 'os';
import path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createContentModule } from './module.ts';
import type { ContentModule } from './types.ts';

let webRoot: string;
let content: ContentModule;
let refreshSpy: ReturnType<typeof vi.fn>;

const ALPHA_ZH = 'space-news/2026/04/2026-04-01-alpha.md';
const ALPHA_EN = 'en/space-news/2026/04/2026-04-01-alpha.md';
const BETA_ZH = 'space-news/2026/04/2026-04-02-beta.md';

function write(rel: string, doc: string): void {
  const abs = path.join(webRoot, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, doc, 'utf-8');
}

beforeEach(() => {
  webRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'content-mod-'));
  write(
    ALPHA_ZH,
    [
      '---',
      'title: 阿尔法任务：首次飞行',
      'date: 2026-04-01',
      'category:',
      '  - artemis',
      '  - launch',
      'draft: false',
      'wechatShare:',
      '  title: 分享标题',
      '  desc: 分享描述',
      '---',
      '',
      '# 正文标题',
      '',
      '内容段落。',
      '',
    ].join('\n'),
  );
  write(
    ALPHA_EN,
    '---\ntitle: Alpha mission: first flight\ndate: 2026-04-01\n---\n\n# Alpha body\n',
  );
  write(BETA_ZH, '---\ntitle: 贝塔（缺英文）\ndate: 2026-04-02\n---\n\n贝塔正文。\n');
  write('space-news/2026/04/README.md', '---\ntitle: 2026年4月\n---\n\n月份索引。\n');
  write('glossary/fundamentals/ad.md', '---\ntitle: 自动微分\n---\n\n## 定义\n词条正文。\n');
  write('en/glossary/fundamentals/ad.md', '---\ntitle: Automatic Differentiation\n---\n\nBody.\n');
  write('glossary/fundamentals/bvp.md', '---\ntitle: 边值问题\n---\n\n## 定义\n词条正文。\n');
  write('glossary/observation/ssa.md', '---\ntitle: 空间态势感知\n---\n\n## 定义\n词条正文。\n');
  write(
    'glossary/README.md',
    [
      '---',
      'title: 地月空间术语词典',
      '---',
      '',
      '# 地月空间术语词典',
      '',
      '## 索引',
      '',
      '### 基础概念（fundamentals，2 条）',
      '',
      '- [自动微分（Automatic Differentiation）](/glossary/fundamentals/ad/)',
      '- [边值问题（Boundary Value Problem）](/glossary/fundamentals/bvp/)',
      '',
      '### 观测技术（observation，1 条）',
      '',
      '- [空间态势感知（SSA）](/glossary/observation/ssa/)',
      '',
    ].join('\n'),
  );
  write('cislunar-orbits/README.md', '---\ntitle: 地月轨道\n---\n\n章节首页。\n');
  write('en/cislunar-orbits/nrho/page.md', '---\ntitle: NRHO\n---\n\nNRHO page.\n');

  refreshSpy = vi.fn();
  content = createContentModule({
    webRoot,
    sectionDirs: ['cislunar-orbits'],
    refreshIndex: refreshSpy as () => void,
  });
});

afterEach(() => {
  fs.rmSync(webRoot, { recursive: true, force: true });
});

describe('content / list', () => {
  it('space-news：列出双侧文章，排除月份 README，报告配对状态', () => {
    const entries = content.list('space-news');
    expect(entries.map((e) => e.relPath).sort()).toEqual([ALPHA_EN, ALPHA_ZH, BETA_ZH].sort());
    const alphaZh = entries.find((e) => e.relPath === ALPHA_ZH)!;
    expect(alphaZh.locale).toBe('zh');
    expect(alphaZh.counterpartPath).toBe(ALPHA_EN);
    expect(alphaZh.counterpartExists).toBe(true);
    expect(alphaZh.frontmatter.title).toBe('阿尔法任务：首次飞行');
    const beta = entries.find((e) => e.relPath === BETA_ZH)!;
    expect(beta.counterpartExists).toBe(false);
  });

  it('glossary 与 kb-section：各归其族，README 算 kb 内容', () => {
    expect(
      content
        .list('glossary')
        .map((e) => e.relPath)
        .sort(),
    ).toEqual([
      'en/glossary/fundamentals/ad.md',
      'glossary/fundamentals/ad.md',
      'glossary/fundamentals/bvp.md',
      'glossary/observation/ssa.md',
    ]);
    expect(
      content
        .list('kb-section')
        .map((e) => e.relPath)
        .sort(),
    ).toEqual(['cislunar-orbits/README.md', 'en/cislunar-orbits/nrho/page.md']);
  });
});

describe('content / read', () => {
  it('分离 frontmatter 与正文，保留数组与嵌套对象', () => {
    const doc = content.read(ALPHA_ZH);
    expect(doc.frontmatter.title).toBe('阿尔法任务：首次飞行');
    expect(doc.frontmatter.category).toEqual(['artemis', 'launch']);
    expect(doc.frontmatter.wechatShare).toEqual({ title: '分享标题', desc: '分享描述' });
    expect(doc.body).toContain('# 正文标题');
    expect(doc.body).toContain('内容段落。');
  });

  it('未识别路径与不存在文件抛错', () => {
    expect(() => content.read('space-news/2026/04/README.md')).toThrow(/不是受管理的内容条目/);
    expect(() => content.read('space-news/2026/04/2026-04-09-none.md')).toThrow(/文件不存在/);
  });
});

describe('content / write', () => {
  it('只改正文时 frontmatter 原样往返', () => {
    const before = content.read(ALPHA_ZH);
    content.write(ALPHA_ZH, { body: '# 新正文\n\n替换后的内容。\n' });
    const after = content.read(ALPHA_ZH);
    expect(after.frontmatter).toEqual(before.frontmatter);
    expect(after.body).toBe('# 新正文\n\n替换后的内容。\n');
  });

  it('改 frontmatter 单键：键级合并，正文与未提及的键保留', () => {
    content.write(ALPHA_ZH, { frontmatter: { title: '新标题' } });
    const after = content.read(ALPHA_ZH);
    expect(after.frontmatter.title).toBe('新标题');
    expect(after.frontmatter.date).toBe('2026-04-01');
    expect(after.frontmatter.category).toEqual(['artemis', 'launch']);
    expect(after.body).toContain('内容段落。');
  });

  it('含冒号与引号的标题写回后再读不损坏', () => {
    content.write(ALPHA_ZH, { frontmatter: { title: '含"引号"与: 冒号的标题' } });
    expect(content.read(ALPHA_ZH).frontmatter.title).toBe('含"引号"与: 冒号的标题');
  });

  it('写操作触发索引刷新', () => {
    expect(refreshSpy).not.toHaveBeenCalled();
    content.write(BETA_ZH, { body: 'x\n' });
    expect(refreshSpy).toHaveBeenCalledTimes(1);
  });

  it('未识别路径拒绝写入', () => {
    expect(() => content.write('space-news/2026/04/README.md', { body: 'x' })).toThrow(
      /不是受管理的内容条目/,
    );
  });
});

describe('content / delete', () => {
  it('删除双语对应一起入回收站，glossary 索引行清理、计数更新、空节移除', () => {
    const report = content.delete('glossary/fundamentals/ad.md', { withCounterpart: true });
    expect(report.deletedFiles.sort()).toEqual([
      'en/glossary/fundamentals/ad.md',
      'glossary/fundamentals/ad.md',
    ]);
    expect(report.skipped).toEqual([]);
    expect(report.readmeLinesRemoved).toEqual([{ file: 'glossary/README.md', count: 1 }]);
    // 文件移入回收站且内容原样
    const trashed = path.join(webRoot, report.trashedTo, 'glossary/fundamentals/ad.md');
    expect(fs.existsSync(trashed)).toBe(true);
    expect(fs.readFileSync(trashed, 'utf-8')).toContain('词条正文');
    expect(fs.existsSync(path.join(webRoot, 'glossary/fundamentals/ad.md'))).toBe(false);
    // README：计数 2→1，索引行消失，另一节不动
    const readme = fs.readFileSync(path.join(webRoot, 'glossary/README.md'), 'utf-8');
    expect(readme).toContain('### 基础概念（fundamentals，1 条）');
    expect(readme).not.toContain('(/glossary/fundamentals/ad/)');
    expect(readme).toContain('### 观测技术（observation，1 条）');
    // 索引刷新已触发
    expect(refreshSpy).toHaveBeenCalled();
  });

  it('deleteMany 清空一节时移除节标题，只刷新一次索引', () => {
    refreshSpy.mockClear();
    const report = content.deleteMany(
      ['glossary/observation/ssa.md', 'glossary/fundamentals/bvp.md'],
      { withCounterpart: false },
    );
    expect(report.deletedFiles).toHaveLength(2);
    expect(refreshSpy).toHaveBeenCalledTimes(1);
    const readme = fs.readFileSync(path.join(webRoot, 'glossary/README.md'), 'utf-8');
    expect(readme).not.toContain('观测技术');
    expect(readme).not.toContain('(/glossary/observation/ssa/');
    expect(readme).toContain('### 基础概念（fundamentals，1 条）');
    // 剩余条目仍可列出
    expect(content.list('glossary').map((e) => e.relPath)).toContain('glossary/fundamentals/ad.md');
  });

  it('不识别与不存在路径进 skipped，不影响其他删除', () => {
    const report = content.deleteMany(
      ['glossary/fundamentals/bvp.md', 'glossary/README.md', 'glossary/fundamentals/none.md'],
      { withCounterpart: false },
    );
    expect(report.skipped).toEqual(['glossary/README.md', 'glossary/fundamentals/none.md']);
    expect(report.deletedFiles).toEqual(['glossary/fundamentals/bvp.md']);
  });
});

describe('content / create（space-news）', () => {
  it('新建中英文章：frontmatter 模板完整，月份 README 自动建表', () => {
    const r = content.create('space-news', {
      date: '2026-08-20',
      slug: 'test-create-demo',
      titleZh: '测试新建文章',
      titleEn: 'Test create article',
      categoryZh: ['china'],
      bodyZh: '正文一段。\n',
      bodyEn: 'Body paragraph.\n',
      withEn: true,
    });
    expect(r.zhPath).toBe('space-news/2026/08/2026-08-20-test-create-demo.md');
    expect(r.enPath).toBe('en/space-news/2026/08/2026-08-20-test-create-demo.md');
    const zh = content.read(r.zhPath);
    expect(zh.frontmatter.layout).toBe('SpaceNewsArticle');
    expect(zh.frontmatter.permalink).toBe('/space-news/2026/08/2026-08-20-test-create-demo/');
    expect(zh.frontmatter.category).toEqual(['china']);
    // 月份 README 新建并含表格行
    const readme = fs.readFileSync(path.join(webRoot, 'space-news/2026/08/README.md'), 'utf-8');
    expect(readme).toContain('[测试新建文章](./2026-08-20-test-create-demo/)');
    expect(refreshSpy).toHaveBeenCalled();
  });

  it('重复 slug 拒绝；非法 slug/date 拒绝；缺 bodyEn 的 withEn 拒绝', () => {
    content.create('space-news', {
      date: '2026-08-20',
      slug: 'dup-check',
      titleZh: 'x',
      titleEn: 'x',
      categoryZh: 'china',
      bodyZh: 'x',
      withEn: false,
    });
    expect(() =>
      content.create('space-news', {
        date: '2026-08-20',
        slug: 'dup-check',
        titleZh: 'x',
        titleEn: 'x',
        categoryZh: 'china',
        bodyZh: 'x',
        withEn: false,
      }),
    ).toThrow(/已存在/);
    expect(() =>
      content.create('space-news', {
        date: '20260820',
        slug: 'ok',
        titleZh: 'x',
        titleEn: 'x',
        categoryZh: 'china',
        bodyZh: 'x',
        withEn: false,
      }),
    ).toThrow(/date/);
    expect(() =>
      content.create('space-news', {
        date: '2026-08-20',
        slug: 'Bad_Slug',
        titleZh: 'x',
        titleEn: 'x',
        categoryZh: 'china',
        bodyZh: 'x',
        withEn: false,
      }),
    ).toThrow(/slug/);
    expect(() =>
      content.create('space-news', {
        date: '2026-08-21',
        slug: 'no-en',
        titleZh: 'x',
        titleEn: 'x',
        categoryZh: 'china',
        bodyZh: 'x',
        withEn: true,
      }),
    ).toThrow(/bodyEn/);
  });

  it('create 后 delete：月份 README 表格行与 figures 目录一并回收', () => {
    content.create('space-news', {
      date: '2026-08-20',
      slug: 'neighbor-entry',
      titleZh: '邻行文章',
      titleEn: 'Neighbor',
      categoryZh: 'china',
      bodyZh: 'x',
      withEn: false,
    });
    const r = content.create('space-news', {
      date: '2026-08-22',
      slug: 'full-cycle',
      titleZh: '全周期文章',
      titleEn: 'Full cycle',
      categoryZh: 'china',
      bodyZh: '正文。\n',
      withEn: true,
      bodyEn: 'Body.\n',
    });
    const figDir = path.join(webRoot, 'space-news/2026/08/figures/2026-08-22-full-cycle');
    fs.mkdirSync(figDir, { recursive: true });
    fs.writeFileSync(path.join(figDir, 'hero.jpg'), 'fake');
    const report = content.delete(r.zhPath, { withCounterpart: true });
    expect(report.deletedFiles.sort()).toEqual([r.enPath, r.zhPath].sort());
    expect(fs.existsSync(figDir)).toBe(false);
    expect(
      fs.existsSync(
        path.join(webRoot, report.trashedTo, 'space-news/2026/08/figures/2026-08-22-full-cycle/hero.jpg'),
      ),
    ).toBe(true);
    const readme = fs.readFileSync(path.join(webRoot, 'space-news/2026/08/README.md'), 'utf-8');
    expect(readme).not.toContain('full-cycle');
    expect(readme).toContain('neighbor-entry'); // 其他行保留
  });
});
