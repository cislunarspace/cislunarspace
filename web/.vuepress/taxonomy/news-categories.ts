/**
 * News category 数据文件（从 taxonomy/data.ts 拆出，ADR-0003 follow-up 2）。
 *
 * 本文件是 news-category 节点的唯一 authoring 位置。分类管理工具
 * （content 模块 / admin）通过 writeNewsCategoryNodes 整文件写回 ——
 * 内存中改数组、序列化生成全文，禁止对源文件做文本拼接或正则手术。
 *
 * 配色约定（色相族收敛）：机构与公司用蓝族（与品牌蓝 #2563eb 同族），重大
 * 计划与科学用靛紫族，语义色只留少数几个（china 国旗红、launch 火焰橙、
 * commercial 商业绿、policy 政策金、human-spaceflight 玫红）。新增分类时
 * 先归入既有色相族，不要再引入新色相。
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { TaxonomyNode } from './types';

export const newsCategoryNodes: TaxonomyNode[] = [
  {
    id: 'artemis',
    kind: 'news-category',
    label: { zh: 'Artemis', en: 'Artemis' },
    path: { zh: null, en: null },
    order: 30010,
    parentId: null,
    meta: { color: '#6366f1' },
  },
  {
    id: 'spacex',
    kind: 'news-category',
    label: { zh: 'SpaceX', en: 'SpaceX' },
    path: { zh: null, en: null },
    order: 30020,
    parentId: null,
    meta: { color: '#0ea5e9' },
  },
  {
    id: 'china',
    kind: 'news-category',
    label: { zh: '中国航天', en: 'China Space' },
    path: { zh: null, en: null },
    order: 30030,
    parentId: null,
    meta: { color: '#dc2626' },
  },
  {
    id: 'nasa',
    kind: 'news-category',
    label: { zh: 'NASA', en: 'NASA' },
    path: { zh: null, en: null },
    order: 30040,
    parentId: null,
    meta: { color: '#2563eb' },
  },
  {
    id: 'esa',
    kind: 'news-category',
    label: { zh: 'ESA', en: 'ESA' },
    path: { zh: null, en: null },
    order: 30050,
    parentId: null,
    meta: { color: '#0891b2' },
  },
  {
    id: 'iss',
    kind: 'news-category',
    label: { zh: '空间站', en: 'Space Station' },
    path: { zh: null, en: null },
    order: 30060,
    parentId: null,
    meta: { color: '#4f46e5' },
  },
  {
    id: 'launch',
    kind: 'news-category',
    label: { zh: '发射', en: 'Launches' },
    path: { zh: null, en: null },
    order: 30070,
    parentId: null,
    meta: { color: '#ea580c' },
  },
  {
    id: 'commercial',
    kind: 'news-category',
    label: { zh: '商业航天', en: 'Commercial Space' },
    path: { zh: null, en: null },
    order: 30080,
    parentId: null,
    meta: { color: '#059669' },
  },
  {
    id: 'science',
    kind: 'news-category',
    label: { zh: '科学发现', en: 'Science' },
    path: { zh: null, en: null },
    order: 30090,
    parentId: null,
    meta: { color: '#8b5cf6' },
  },
  {
    id: 'policy',
    kind: 'news-category',
    label: { zh: '政策战略', en: 'Policy & Strategy' },
    path: { zh: null, en: null },
    order: 30100,
    parentId: null,
    meta: { color: '#ca8a04' },
  },
  {
    id: 'blue-origin',
    kind: 'news-category',
    label: { zh: 'Blue Origin', en: 'Blue Origin' },
    path: { zh: null, en: null },
    order: 30110,
    parentId: null,
    meta: { color: '#1e40af' },
  },
  {
    id: 'commercial-space',
    kind: 'news-category',
    label: { zh: '商业航天', en: 'Commercial Space' },
    path: { zh: null, en: null },
    order: 30120,
    parentId: null,
    meta: { color: '#059669' },
  },
  {
    id: 'rocket-lab',
    kind: 'news-category',
    label: { zh: 'Rocket Lab', en: 'Rocket Lab' },
    path: { zh: null, en: null },
    order: 30130,
    parentId: null,
    meta: { color: '#0284c7' },
  },
  {
    id: 'technology',
    kind: 'news-category',
    label: { zh: '技术', en: 'Technology' },
    path: { zh: null, en: null },
    order: 30140,
    parentId: null,
    meta: { color: '#64748b' },
  },
  {
    id: 'human-spaceflight',
    kind: 'news-category',
    label: { zh: '载人航天', en: 'Human Spaceflight' },
    path: { zh: null, en: null },
    order: 30150,
    parentId: null,
    meta: { color: '#e11d48' },
  },
];

// ── 写回（整文件序列化生成） ────────────────────────────────────────────────

/** 单引号 TS 字符串转义。 */
function tsStr(s: string): string {
  return `'${s.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

/** 校验待写入的分类集，返回错误列表（空列表 = 通过）。 */
export function validateNewsCategories(nodes: TaxonomyNode[]): string[] {
  const errors: string[] = [];
  const seenId = new Set<string>();
  const seenLabel = new Set<string>();
  for (const n of nodes) {
    if (n.kind !== 'news-category') errors.push(`${n.id}: kind 不是 news-category`);
    if (seenId.has(n.id)) errors.push(`id 重复: ${n.id}`);
    seenId.add(n.id);
    const zh = n.label.zh;
    if (seenLabel.has(zh)) errors.push(`中文标签重复: ${zh}（${n.id}）`);
    seenLabel.add(zh);
    const color = String((n.meta as Record<string, unknown>)?.color ?? '');
    if (!/^#[0-9a-fA-F]{6}$/.test(color)) errors.push(`${n.id}: color 不是 7 位 hex: ${color}`);
    if (n.order < 30000 || n.order >= 40000) errors.push(`${n.id}: order 越出 30000 区间`);
  }
  return errors;
}

const FILE_HEADER = `/**
 * News category 数据文件（从 taxonomy/data.ts 拆出，ADR-0003 follow-up 2）。
 *
 * 本文件是 news-category 节点的唯一 authoring 位置。分类管理工具
 * （content 模块 / admin）通过 writeNewsCategoryNodes 整文件写回 ——
 * 内存中改数组、序列化生成全文，禁止对源文件做文本拼接或正则手术。
 *
 * 配色约定（色相族收敛）：机构与公司用蓝族（与品牌蓝 #2563eb 同族），重大
 * 计划与科学用靛紫族，语义色只留少数几个（china 国旗红、launch 火焰橙、
 * commercial 商业绿、policy 政策金、human-spaceflight 玫红）。新增分类时
 * 先归入既有色相族，不要再引入新色相。
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { TaxonomyNode } from './types';
`;

/**
 * 整文件写回：校验 → 序列化全部节点 → 生成完整 TS 文件落盘。
 * 写回内容与手工 authoring 的文件完全同构；targetPath 默认本文件，
 * 测试可注入临时路径。
 */
export function writeNewsCategoryNodes(nodes: TaxonomyNode[], targetPath?: string): void {
  const errors = validateNewsCategories(nodes);
  if (errors.length > 0) {
    throw new Error(`news-category 校验失败:\n  ${errors.join('\n  ')}`);
  }
  const nodeTexts = nodes.map((n) => {
    const color = (n.meta as Record<string, unknown>).color as string;
    return [
      '  {',
      `    id: ${tsStr(n.id)},`,
      `    kind: 'news-category',`,
      `    label: { zh: ${tsStr(n.label.zh)}, en: ${tsStr(n.label.en)} },`,
      `    path: { zh: null, en: null },`,
      `    order: ${n.order},`,
      `    parentId: null,`,
      `    meta: { color: ${tsStr(color)} },`,
      '  },',
    ].join('\n');
  });
  const fileBody = `${FILE_HEADER}\nexport const newsCategoryNodes: TaxonomyNode[] = [\n${nodeTexts.join('\n')}\n];\n`;
  const target =
    targetPath ?? path.join(path.dirname(fileURLToPath(import.meta.url)), 'news-categories.ts');
  fs.writeFileSync(target, fileBody, 'utf-8');
}
