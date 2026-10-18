import fs from 'fs';
import os from 'os';
import path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { createContentModule } from './module.ts';
import type { ContentModule } from './types.ts';

let webRoot: string;
let content: ContentModule;
let refreshSpy: ReturnType<typeof vi.fn>;

const AD_ZH = 'glossary/fundamentals/ad.md';
const BVP_ZH = 'glossary/fundamentals/bvp.md';

function write(rel: string, doc: string): void {
  const abs = path.join(webRoot, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, doc, 'utf-8');
}

beforeEach(() => {
  webRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'content-mod-'));
  write(
    AD_ZH,
    [
      '---',
      'title: 自动微分：原理与实现',
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
  write(BVP_ZH, '---\ntitle: 边值问题（缺英文）\ndate: 2026-04-02\n---\n\n边值问题正文。\n');
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
      '## 分类板块',
      '',
      '| 分类板块 | 条目数 | 涵盖范围 |',
      '| :--- | ---: | :--- |',
      '| [基础概念](/glossary/fundamentals/) | 2 | 基础 |',
      '| [天文观测技术](/glossary/observation/) | 1 | 观测 |',
      '',
      '以上 2 个分类共 3 条词条。',
      '',
    ].join('\n'),
  );
  write(
    'glossary/fundamentals/README.md',
    [
      '---',
      'title: 基础概念',
      'lastUpdated: 2026-01-01',
      '---',
      '',
      '# 基础概念',
      '',
      '- [自动微分（Automatic Differentiation）](/glossary/fundamentals/ad/)',
      '- [边值问题（Boundary Value Problem）](/glossary/fundamentals/bvp/)',
      '',
    ].join('\n'),
  );
  write(
    'glossary/observation/README.md',
    [
      '---',
      'title: 天文观测技术',
      'lastUpdated: 2026-01-01',
      '---',
      '',
      '# 天文观测技术',
      '',
      '- [空间态势感知（SSA）](/glossary/observation/ssa/)',
      '',
    ].join('\n'),
  );
  write('cislunar-orbits/README.md', '---\ntitle: 地月轨道\n---\n\n章节首页。\n');
  write('cislunar-orbits/nrho/page.md', '---\ntitle: NRHO\n---\n\nNRHO page.\n');

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
  it('glossary：列出词条并读取 frontmatter 摘要', () => {
    const entries = content.list('glossary');
    expect(entries.map((e) => e.relPath).sort()).toEqual(
      [AD_ZH, BVP_ZH, 'glossary/observation/ssa.md'].sort(),
    );
    const adZh = entries.find((e) => e.relPath === AD_ZH)!;
    expect(adZh.family).toBe('glossary');
    expect(adZh.frontmatter.title).toBe('自动微分：原理与实现');
  });

  it('glossary 与 kb-section：各归其族，README 算 kb 内容', () => {
    expect(
      content
        .list('glossary')
        .map((e) => e.relPath)
        .sort(),
    ).toEqual([AD_ZH, BVP_ZH, 'glossary/observation/ssa.md']);
    expect(
      content
        .list('kb-section')
        .map((e) => e.relPath)
        .sort(),
    ).toEqual(['cislunar-orbits/README.md', 'cislunar-orbits/nrho/page.md']);
  });
});

describe('content / read', () => {
  it('分离 frontmatter 与正文，保留数组与嵌套对象', () => {
    const doc = content.read(AD_ZH);
    expect(doc.frontmatter.title).toBe('自动微分：原理与实现');
    expect(doc.frontmatter.category).toEqual(['artemis', 'launch']);
    expect(doc.frontmatter.wechatShare).toEqual({ title: '分享标题', desc: '分享描述' });
    expect(doc.body).toContain('# 正文标题');
    expect(doc.body).toContain('内容段落。');
  });

  it('未识别路径与不存在文件抛错', () => {
    expect(() => content.read('glossary/README.md')).toThrow(/不是受管理的内容条目/);
    expect(() => content.read('glossary/fundamentals/none.md')).toThrow(/文件不存在/);
  });
});

describe('content / write', () => {
  it('只改正文时 frontmatter 原样往返', () => {
    const before = content.read(AD_ZH);
    content.write(AD_ZH, { body: '# 新正文\n\n替换后的内容。\n' });
    const after = content.read(AD_ZH);
    expect(after.frontmatter).toEqual(before.frontmatter);
    expect(after.body).toBe('# 新正文\n\n替换后的内容。\n');
  });

  it('改 frontmatter 单键：键级合并，正文与未提及的键保留', () => {
    content.write(AD_ZH, { frontmatter: { title: '新标题' } });
    const after = content.read(AD_ZH);
    expect(after.frontmatter.title).toBe('新标题');
    expect(after.frontmatter.date).toBe('2026-04-01');
    expect(after.frontmatter.category).toEqual(['artemis', 'launch']);
    expect(after.body).toContain('内容段落。');
  });

  it('含冒号与引号的标题写回后再读不损坏', () => {
    content.write(AD_ZH, { frontmatter: { title: '含"引号"与: 冒号的标题' } });
    expect(content.read(AD_ZH).frontmatter.title).toBe('含"引号"与: 冒号的标题');
  });

  it('写操作触发索引刷新', () => {
    expect(refreshSpy).not.toHaveBeenCalled();
    content.write(BVP_ZH, { body: 'x\n' });
    expect(refreshSpy).toHaveBeenCalledTimes(1);
  });

  it('未识别路径拒绝写入', () => {
    expect(() => content.write('glossary/README.md', { body: 'x' })).toThrow(
      /不是受管理的内容条目/,
    );
  });
});

describe('content / delete', () => {
  it('删除入回收站，分类索引行清理、首页计数更新', () => {
    const report = content.delete(AD_ZH);
    expect(report.deletedFiles).toEqual([AD_ZH]);
    expect(report.skipped).toEqual([]);
    expect(report.readmeLinesRemoved).toEqual([
      { file: 'glossary/fundamentals/README.md', count: 1 },
    ]);
    // 文件移入回收站且内容原样
    const trashed = path.join(webRoot, report.trashedTo, AD_ZH);
    expect(fs.existsSync(trashed)).toBe(true);
    expect(fs.readFileSync(trashed, 'utf-8')).toContain('内容段落');
    expect(fs.existsSync(path.join(webRoot, AD_ZH))).toBe(false);
    // 分类页：索引行消失，另一行保留
    const catPage = fs.readFileSync(path.join(webRoot, 'glossary/fundamentals/README.md'), 'utf-8');
    expect(catPage).not.toContain('(/glossary/fundamentals/ad/)');
    expect(catPage).toContain('(/glossary/fundamentals/bvp/)');
    // 首页：条目数与总计递减，另一分类不动
    const home = fs.readFileSync(path.join(webRoot, 'glossary/README.md'), 'utf-8');
    expect(home).toContain('| [基础概念](/glossary/fundamentals/) | 1 |');
    expect(home).toContain('| [天文观测技术](/glossary/observation/) | 1 |');
    expect(home).toContain('以上 2 个分类共 2 条词条。');
    // 索引刷新已触发
    expect(refreshSpy).toHaveBeenCalled();
  });

  it('deleteMany 清空两个分类时索引行全清，只刷新一次索引', () => {
    refreshSpy.mockClear();
    const report = content.deleteMany([
      'glossary/observation/ssa.md',
      'glossary/fundamentals/bvp.md',
    ]);
    expect(report.deletedFiles).toHaveLength(2);
    expect(report.readmeLinesRemoved).toHaveLength(2);
    expect(refreshSpy).toHaveBeenCalledTimes(1);
    const home = fs.readFileSync(path.join(webRoot, 'glossary/README.md'), 'utf-8');
    expect(home).toContain('| [基础概念](/glossary/fundamentals/) | 1 |');
    expect(home).toContain('| [天文观测技术](/glossary/observation/) | 0 |');
    expect(home).toContain('以上 2 个分类共 1 条词条。');
    const obsPage = fs.readFileSync(path.join(webRoot, 'glossary/observation/README.md'), 'utf-8');
    expect(obsPage).not.toContain('(/glossary/observation/ssa/');
    // 剩余条目仍可列出
    expect(content.list('glossary').map((e) => e.relPath)).toContain(AD_ZH);
  });

  it('不识别与不存在路径进 skipped，不影响其他删除', () => {
    const report = content.deleteMany([
      'glossary/fundamentals/bvp.md',
      'glossary/README.md',
      'glossary/fundamentals/none.md',
    ]);
    expect(report.skipped).toEqual(['glossary/README.md', 'glossary/fundamentals/none.md']);
    expect(report.deletedFiles).toEqual(['glossary/fundamentals/bvp.md']);
  });
});
