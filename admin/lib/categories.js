/**
 * 分类管理模块
 *
 * 两种分类语义：
 * - news   ：frontmatter `category` 标签（如 china/commercial/science），
 *            删除分类 = 从所有文章移除该标签（保条目），或移除标签 + 删除带该标签的文章（连删）。
 *            taxonomy（web/.vuepress/taxonomy/data.ts）定义了 news-category 节点（含配色），
 *            添加/删除分类时同步维护该文件，让站点配色与分类一致。
 * - glossary：文件系统目录（如 dynamics/orbits/navigation），
 *            删除分类 = 删目录但条目移到指定目标分类（保条目），或删除目录下全部条目（连删）。
 *
 * 安全约定：与删除模块一致，只操作 web/ 内的 .md 与目录；不碰 git；
 *           全部写操作记日志。
 */
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';
import { WEB_ROOT, PathError, assertOperable, resolveInWeb } from './paths.js';
import { readMd, classify } from './scan.js';
import { splitFrontmatter, buildMarkdown } from './frontmatter.js';
import { executeDelete } from './delete.js';
import { log } from './log.js';
import {
  newsCategoryNodes,
  writeNewsCategoryNodes,
} from '../../web/.vuepress/taxonomy/news-categories.ts';
import { contentBridge as content } from './content-bridge.ts';

/** news-category 数据文件（web/.vuepress/taxonomy/news-categories.ts，序列化写回） */
const NEWS_CATEGORIES_FILE = path.join(WEB_ROOT, '.vuepress', 'taxonomy', 'news-categories.ts');

/* ============ News 标签分类 ============ */

/** 重新读一个 md 的原始 frontmatter + body（readMd 已有缓存，这里直接读文件保证最新） */
function readRawMd(rel) {
  const full = path.join(WEB_ROOT, rel);
  const content = fs.readFileSync(full, 'utf8');
  const { raw, body } = splitFrontmatter(content);
  return { raw, body };
}

/**
 * 添加 news 分类：在 taxonomy/data.ts 的 newsCategoryNodes 数组末尾插入一个节点。
 * 颜色自动从既有色相族取一个（蓝族 #2563eb 的变体），避免引入新色相。
 */
export async function addNewsCategory(name) {
  const id = String(name).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  if (!id) throw new PathError('分类名不能为空');
  if (newsCategoryNodes.some((n) => n.id === id)) {
    throw new PathError(`分类已存在: ${id}`);
  }

  // 从既有蓝族配色里挑一个可用色（色相族收敛约定见 news-categories.ts 头注释）
  const palette = ['#2563eb', '#0ea5e9', '#0891b2', '#0284c7', '#1e40af'];
  const used = new Set(newsCategoryNodes.map((n) => String(n.meta?.color ?? '')));
  const color = palette.find((c) => !used.has(c)) || '#2563eb';

  const nextOrder =
    newsCategoryNodes.reduce((max, n) => Math.max(max, n.order), 30000) + 10;

  // 整文件序列化写回（ADR-0003：禁止对源文件做文本拼接/正则手术），
  // 重复标签等错误由 writeNewsCategoryNodes 的校验拦截。
  writeNewsCategoryNodes(
    [
      ...newsCategoryNodes,
      {
        id,
        kind: 'news-category',
        label: { zh: String(name).trim(), en: id },
        path: { zh: null, en: null },
        order: nextOrder,
        parentId: null,
        meta: { color },
      },
    ],
    NEWS_CATEGORIES_FILE,
  );
  content.refreshIndexInBackground(`addNewsCategory:${id}`);
  log('ADD_NEWS_CATEGORY', [`${id} -> taxonomy/news-categories.ts (serialized)`]);
  return { ok: true, id, color, node: `taxonomy/news-categories.ts + ${id}` };
}

/**
 * 删除 news 分类：
 * - 保条目（deleteEntries=false）：从所有文章 frontmatter 移除该 category 标签。
 * - 连删（deleteEntries=true）：移除标签 + 把带该标签的文章移到回收站。
 * 之后同步从 taxonomy/data.ts 移除该节点。
 */
export async function deleteNewsCategory(id, { deleteEntries = false } = {}) {
  const norm = String(id).trim().toLowerCase();
  if (!norm) throw new PathError('分类名不能为空');

  // 收集所有带该标签的文章
  const rels = [];
  const walkBase = ['space-news', 'en/space-news'];
  for (const base of walkBase) {
    (function walk(d) {
      const abs = path.join(WEB_ROOT, d);
      if (!fs.existsSync(abs)) return;
      for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
        const rel = d ? `${d}/${e.name}` : e.name;
        if (e.isDirectory()) {
          if (['figures', 'node_modules', '.git'].includes(e.name)) continue;
          walk(rel);
        } else if (e.isFile() && e.name.endsWith('.md') && !e.name.toLowerCase().startsWith('readme')) {
          const info = readMd(rel);
          const cats = (info?.fm.category ?? []);
          const arr = Array.isArray(cats) ? cats : [cats];
          if (arr.filter(Boolean).map((x) => String(x).toLowerCase()).includes(norm)) {
            rels.push(rel);
          }
        }
      }
    })(base);
  }

  if (rels.length === 0) {
    // 没有文章带该标签，直接清 taxonomy 节点
    removeTaxonomyNode(norm);
    log('DELETE_NEWS_CATEGORY', [`${norm} (no articles)`]);
    return { ok: true, removedTagFrom: [], deletedArticles: [], articleCount: 0 };
  }

  const removedTagFrom = [];
  const deletedArticles = [];
  let trashStamp = null;
  let readmesUpdated = [];
  let genSidebarResult = null;

  for (const rel of rels) {
    if (deleteEntries) {
      // 连删：复用主删除流程（expandDeleteScope 会带出同 slug 中英镜像、figures/ 与
      // README 索引引用；executeDelete 移到回收站 + 更新 README + 重跑 gen-sidebar）
      const result = await executeDelete([rel], true);
      deletedArticles.push(rel);
      trashStamp = result.trashStamp;
      readmesUpdated = [...readmesUpdated, ...(result.readmesUpdated || [])];
      genSidebarResult = result.genSidebar;
    } else {
      // 保条目：从 frontmatter 移除该标签
      const { raw, body } = readRawMd(rel);
      const stripped = stripCategory(raw, norm);
      const updated = buildMarkdown(stripped, body);
      fs.writeFileSync(path.join(WEB_ROOT, rel), updated, 'utf8');
      removedTagFrom.push(rel);
    }
  }

  removeTaxonomyNode(norm);
  // 索引刷新统一走 content 模块（后台执行）
  content.refreshIndexInBackground(`deleteNewsCategory:${norm}`);
  genSidebarResult = { ok: true, note: 'background' };

  log('DELETE_NEWS_CATEGORY', [
    `${norm} mode=${deleteEntries ? 'with-entries' : 'keep-entries'}`,
    `tagRemoved=${removedTagFrom.length}`,
    `deleted=${deletedArticles.length}`,
    `readmes=${readmesUpdated.length}`,
    `trash=${deleteEntries ? path.relative(process.cwd(), path.join(WEB_ROOT, '..', 'admin', 'trash', trashStamp || '')) : '-'}`,
    `genSidebar=${genSidebarResult?.ok ? 'ok' : genSidebarResult ? 'failed' : 'n/a'}`,
  ]);
  return {
    ok: true,
    id: norm,
    deleteEntries,
    removedTagFrom,
    deletedArticles,
    readmesUpdated,
    articleCount: rels.length,
    trashStamp,
    genSidebar: genSidebarResult,
  };
}

/** 从 frontmatter YAML 文本中移除指定 category 值（保条目用） */
function stripCategory(raw, id) {
  if (!raw) return raw;
  // 优先用 YAML 解析 → 过滤 category → 重新序列化，健壮处理标量/内联数组/多行块数组。
  // 仅当 YAML 无法解析时回退到文本行过滤，避免把异常文件写坏。
  try {
    const parsed = YAML.parse(raw);
    if (parsed && typeof parsed === 'object') {
      const cat = parsed.category;
      const arr = Array.isArray(cat)
        ? cat
        : cat !== undefined && cat !== null
          ? [cat]
          : [];
      const kept = arr
        .map((x) => String(x))
        .filter((x) => x.toLowerCase() !== id);
      if (kept.length) {
        parsed.category = kept.map((x) => (x.includes(' ') ? `"${x}"` : x));
      } else {
        delete parsed.category;
      }
      return YAML.stringify(parsed, { lineWidth: 0 }).trimEnd();
    }
  } catch {
    /* 解析失败走文本降级 */
  }

  // 文本降级：只处理 category 标量行与内联数组，其余行原样保留
  const lines = raw.split('\n');
  const out = [];
  for (const line of lines) {
    const catMatch = line.match(/^category:\s*(.*)$/);
    if (catMatch) {
      const val = catMatch[1].trim();
      if (val.startsWith('[')) {
        const items = val
          .slice(1, -1)
          .split(',')
          .map((s) => s.trim().replace(/^['"]|['"]$/g, ''))
          .filter(Boolean);
        const kept = items.filter((s) => s.toLowerCase() !== id);
        if (kept.length) out.push(`category: [${kept.map((s) => `"${s}"`).join(', ')}]`);
        // 若 kept 为空则省略该行
      } else if (val.toLowerCase() !== id) {
        out.push(line);
      }
      continue;
    }
    out.push(line);
  }
  return out.join('\n');
}

/** 从 news-categories.ts 移除节点（序列化写回剩余节点） */
function removeTaxonomyNode(id) {
  if (!newsCategoryNodes.some((n) => n.id === id)) return false;
  writeNewsCategoryNodes(
    newsCategoryNodes.filter((n) => n.id !== id),
    NEWS_CATEGORIES_FILE,
  );
  return true;
}

/* ============ Glossary 目录分类 ============ */

/** 列出 glossary 分类目录（zh 侧） */
export function listGlossaryCategories() {
  const base = path.join(WEB_ROOT, 'glossary');
  if (!fs.existsSync(base)) return [];
  return fs
    .readdirSync(base, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== 'figures' && !d.name.startsWith('.'))
    .map((d) => d.name)
    .sort();
}

/** 添加 glossary 分类：创建 web/glossary/<cat>/ 与 web/en/glossary/<cat>/ */
export function addGlossaryCategory(name) {
  const slug = String(name).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  if (!slug) throw new PathError('分类名不能为空');
  if (listGlossaryCategories().includes(slug)) throw new PathError(`分类已存在: ${slug}`);
  for (const rel of [`glossary/${slug}`, `en/glossary/${slug}`]) {
    fs.mkdirSync(path.join(WEB_ROOT, rel), { recursive: true });
  }
  log('ADD_GLOSSARY_CATEGORY', [`${slug} (zh+en dirs)`]);
  return { ok: true, slug, dirs: [`glossary/${slug}`, `en/glossary/${slug}`] };
}

/**
 * 删除 glossary 分类：
 * - 保条目（deleteEntries=false）：把该目录下所有条目移到目标分类（必须提供 target）。
 * - 连删（deleteEntries=true）：删除目录下所有条目（中英镜像），目录也一并删除。
 */
export function deleteGlossaryCategory(slug, { deleteEntries = false, target = '' } = {}) {
  const norm = String(slug).trim().toLowerCase();
  if (!norm || !listGlossaryCategories().includes(norm)) {
    throw new PathError(`分类不存在: ${norm}`);
  }
  if (!deleteEntries) {
    if (!target) throw new PathError('保条目模式必须指定目标分类 target');
    if (!listGlossaryCategories().includes(target)) throw new PathError(`目标分类不存在: ${target}`);
    if (target === norm) throw new PathError('目标分类不能与被删分类相同');
  }

  // 收集中英镜像下所有 md
  const rels = [];
  for (const base of [`glossary/${norm}`, `en/glossary/${norm}`]) {
    const abs = path.join(WEB_ROOT, base);
    if (!fs.existsSync(abs)) continue;
    for (const f of fs.readdirSync(abs)) {
      if (f.endsWith('.md') && !f.toLowerCase().startsWith('readme')) {
        rels.push(`${base}/${f}`);
      }
    }
  }

  const moved = [];
  const deleted = [];
  const trashStamp = new Date().toISOString().replace(/[:.]/g, '-');
  const trashRoot = path.join(WEB_ROOT, '..', 'admin', 'trash', trashStamp);

  for (const rel of rels) {
    if (deleteEntries) {
      const src = path.join(WEB_ROOT, rel);
      const dest = path.join(trashRoot, rel);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.renameSync(src, dest);
      deleted.push(rel);
    } else {
      // 移到目标分类：web/glossary/<target>/<stem>.md（en 同理）
      const cls = classify(rel);
      const targetRel = `${cls.lang === 'en' ? 'en/' : ''}glossary/${target}/${cls.stem}.md`;
      if (fs.existsSync(path.join(WEB_ROOT, targetRel))) {
        // 目标已存在同名文件：保留被删分类的，跳过去重（记日志）
        moved.push({ from: rel, to: targetRel, status: 'exists' });
        continue;
      }
      fs.renameSync(path.join(WEB_ROOT, rel), path.join(WEB_ROOT, targetRel));
      moved.push({ from: rel, to: targetRel, status: 'moved' });
    }
  }

  // 删除空目录（连删模式目录一定空，保条目模式若全部移走也删）
  for (const base of [`glossary/${norm}`, `en/glossary/${norm}`]) {
    const abs = path.join(WEB_ROOT, base);
    try {
      if (fs.existsSync(abs) && fs.readdirSync(abs).length === 0) fs.rmdirSync(abs);
    } catch {
      /* 忽略清理失败 */
    }
  }

  content.refreshIndexInBackground(`deleteGlossaryCategory:${norm}`);
  if (!deleteEntries) {
    log('DELETE_GLOSSARY_CATEGORY', [`${norm} -> ${target} (keep-entries)`, `moved=${moved.length}`]);
    return { ok: true, slug: norm, deleteEntries, target, moved, deleted: [], genSidebar: { ok: true, note: 'background' } };
  }

  log('DELETE_GLOSSARY_CATEGORY', [
    `${norm} (with-entries)`,
    `deleted=${deleted.length}`,
    `trash=${path.relative(process.cwd(), trashRoot)}`,
  ]);
  return { ok: true, slug: norm, deleteEntries, deleted, trashStamp, moved: [], genSidebar: { ok: true, note: 'background' } };
}


