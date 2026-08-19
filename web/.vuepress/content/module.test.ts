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
    ).toEqual(['en/glossary/fundamentals/ad.md', 'glossary/fundamentals/ad.md']);
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
