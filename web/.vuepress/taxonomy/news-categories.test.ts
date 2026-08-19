import fs from 'fs';
import os from 'os';
import path from 'path';
import { afterEach, describe, expect, it } from 'vitest';
import type { TaxonomyNode } from './types';
import {
  newsCategoryNodes,
  validateNewsCategories,
  writeNewsCategoryNodes,
} from './news-categories';

function makeNode(overrides: Partial<TaxonomyNode> = {}): TaxonomyNode {
  return {
    id: 'test-cat',
    kind: 'news-category',
    label: { zh: '测试分类', en: 'Test' },
    path: { zh: null, en: null },
    order: 30010,
    parentId: null,
    meta: { color: '#2563eb' },
    ...overrides,
  };
}

let tmpFile: string | undefined;
afterEach(() => {
  if (tmpFile) fs.rmSync(tmpFile, { force: true });
  tmpFile = undefined;
});

describe('news-categories / validate', () => {
  it('合法节点集通过', () => {
    expect(
      validateNewsCategories([
        makeNode(),
        makeNode({ id: 'another', label: { zh: '另一个', en: 'Another' }, order: 30020 }),
      ]),
    ).toEqual([]);
  });

  it('拦截重复中文标签（commercial / commercial-space 这类重复）', () => {
    const errors = validateNewsCategories([
      makeNode({ id: 'a', label: { zh: '商业航天', en: 'A' }, order: 30010 }),
      makeNode({ id: 'b', label: { zh: '商业航天', en: 'B' }, order: 30020 }),
    ]);
    expect(errors.some((e) => e.includes('中文标签重复'))).toBe(true);
  });

  it('拦截重复 id、坏颜色与越界 order', () => {
    const errors = validateNewsCategories([
      makeNode({ id: 'x', order: 20000 }),
      makeNode({ id: 'x', label: { zh: '乙', en: 'B' }, order: 30020 }),
      makeNode({ id: 'c', label: { zh: '丙', en: 'C' }, order: 30030, meta: { color: 'red' } }),
    ]);
    expect(errors.some((e) => e.includes('id 重复'))).toBe(true);
    expect(errors.some((e) => e.includes('hex'))).toBe(true);
    expect(errors.some((e) => e.includes('order 越出'))).toBe(true);
  });

  it('存量数据现状：commercial 与 commercial-space 标签重复（已知待修，见 ADR-0003）', () => {
    // 记录性断言：修复合并这两个分类后本用例应改回期望通过
    expect(validateNewsCategories(newsCategoryNodes).some((e) => e.includes('商业航天'))).toBe(
      true,
    );
  });
});

describe('news-categories / write（整文件序列化）', () => {
  it('写入合法集后文件含全部节点且 id 有序完整，含非法集拒绝写入', () => {
    const nodes = [
      makeNode({ id: 'alpha', label: { zh: '甲', en: 'Alpha' }, order: 30010 }),
      makeNode({
        id: 'beta',
        label: { zh: '乙', en: 'Beta' },
        order: 30020,
        meta: { color: '#0ea5e9' },
      }),
    ];
    tmpFile = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'news-cat-')), 'news-categories.ts');
    writeNewsCategoryNodes(nodes, tmpFile);
    const text = fs.readFileSync(tmpFile, 'utf-8');
    // id 全部落盘且保持顺序
    const ids = [...text.matchAll(/^    id: '(.+)',$/gm)].map((m) => m[1]);
    expect(ids).toEqual(['alpha', 'beta']);
    expect(text).toContain("label: { zh: '甲', en: 'Beta' }".replace('Beta', 'Alpha'));
    expect(text).toContain("meta: { color: '#0ea5e9' }");
    expect(text.startsWith('/**')).toBe(true); // 文件头完整

    expect(() =>
      writeNewsCategoryNodes(
        [
          makeNode({ id: 'dup', label: { zh: '同', en: 'X' }, order: 30010 }),
          makeNode({ id: 'dup', label: { zh: '异', en: 'Y' }, order: 30020 }),
        ],
        tmpFile,
      ),
    ).toThrow(/校验失败/);
  });

  it('标签含单引号时正确转义', () => {
    tmpFile = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'news-cat-')), 'nc.ts');
    writeNewsCategoryNodes(
      [makeNode({ id: 'quote', label: { zh: "洛克希德·马丁's", en: "Lockheed's" } })],
      tmpFile,
    );
    const text = fs.readFileSync(tmpFile, 'utf-8');
    expect(text).toContain("zh: '洛克希德·马丁\\'s'");
  });
});
