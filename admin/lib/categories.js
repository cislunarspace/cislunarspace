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
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import YAML from 'yaml';
import { WEB_ROOT, PathError, assertOperable, resolveInWeb } from './paths.js';
import { readMd, classify } from './scan.js';
import { splitFrontmatter, buildMarkdown } from './frontmatter.js';
import { executeDelete } from './delete.js';
import { log } from './log.js';

const execFileP = promisify(execFile);

/** taxonomy 分类节点文件路径（web/.vuepress/taxonomy/data.ts） */
const TAXONOMY_FILE = path.join(WEB_ROOT, '.vuepress', 'taxonomy', 'data.ts');

/* ============ News 标签分类 ============ */

/** 列出 taxonomy 中已定义的 news-category 节点 id（用于配色同步） */
function listTaxonomyNewsCategories() {
  if (!fs.existsSync(TAXONOMY_FILE)) return new Set();
  const content = fs.readFileSync(TAXONOMY_FILE, 'utf8');
  const ids = new Set();
  // 匹配任意 news-category 节点块里的 id（id 与 kind 之间可能隔着 label 行）
  const re = /id:\s*'([^']+)',\s*\n([\s\S]*?)\n\s*kind:\s*'news-category'/g;
  let m;
  while ((m = re.exec(content))) ids.add(m[1]);
  return ids;
}

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
  if (!fs.existsSync(TAXONOMY_FILE)) throw new PathError(`taxonomy 文件不存在: ${TAXONOMY_FILE}`);
  const content = fs.readFileSync(TAXONOMY_FILE, 'utf8');
  if (listTaxonomyNewsCategories().has(id)) {
    throw new PathError(`分类已存在: ${id}`);
  }
  // 中文标签直接拼进 TS 单引号字符串，必须转义单引号/反斜杠，避免写坏源文件
  const labelZh = String(name).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  // 从既有蓝族配色里挑一个可用色；color 列表来自 news-category 节点现有取值
  const palette = ['#2563eb', '#0ea5e9', '#0891b2', '#0284c7', '#1e40af'];
  const used = new Set([...content.matchAll(/meta:\s*\{\s*color:\s*'([^']+)'/g)].map((m) => m[1]));
  const color = palette.find((c) => !used.has(c)) || '#2563eb';

  const lastOrder = [...content.matchAll(/order:\s*(\d+)/g)].map((m) => Number(m[1])).filter((n) => n >= 30000);
  const nextOrder = (lastOrder.length ? Math.max(...lastOrder) : 30000) + 10;

  const node = `  {
    id: '${id}',
    kind: 'news-category',
    label: { zh: '${labelZh}', en: '${id}' },
    path: { zh: null, en: null },
    order: ${nextOrder},
    parentId: null,
    meta: { color: '${color}' },
  },`;

  // 插入到 newsCategoryNodes 数组的结尾（该数组声明为 `const newsCategoryNodes: TaxonomyNode[] = [`，
  // 收尾是它的 `];`）。不能用全文件最后一个 `];`——那是 flatTaxonomyNodes 的收尾，会写错数组。
  const arrStart = content.indexOf('const newsCategoryNodes: TaxonomyNode[] = [');
  if (arrStart === -1) throw new PathError('未找到 newsCategoryNodes 数组声明');
  const arrEndMarker = content.indexOf('];', arrStart);
  if (arrEndMarker === -1) throw new PathError('未找到 newsCategoryNodes 数组结尾');
  // 插在 `];` 之前；数组为空（`[`; 同行收尾）时先补换行
  const before = content.slice(0, arrEndMarker);
  const updated = before + (before.endsWith('\n') ? '' : '\n') + node + '\n' + content.slice(arrEndMarker);
  fs.writeFileSync(TAXONOMY_FILE, updated, 'utf8');
  log('ADD_NEWS_CATEGORY', [`${id} -> ${path.relative(process.cwd(), TAXONOMY_FILE)}`]);
  return { ok: true, id, color, node: `taxonomy/data.ts: newsCategoryNodes + ${id}` };
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
  // 保条目模式重跑 gen-sidebar；连删模式 executeDelete 已各自重跑，此处不重复
  if (!deleteEntries) {
    genSidebarResult = await runGenSidebar();
  }

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

/** 从 taxonomy/data.ts 移除 news-category 节点（连同其配置块） */
function removeTaxonomyNode(id) {
  if (!fs.existsSync(TAXONOMY_FILE)) return false;
  const content = fs.readFileSync(TAXONOMY_FILE, 'utf8');
  const lines = content.split('\n');

  // 找到包含 `id: '<id>'` 的行
  const idLineIdx = lines.findIndex((l) => l.includes(`id: '${id}'`));
  if (idLineIdx === -1) return false;

  // 向上找到节点起始行：该节点块是 2 空格缩进的 `  {`（在 newsCategoryNodes 数组内）
  let startIdx = idLineIdx;
  while (startIdx > 0 && !/^  \{$/.test(lines[startIdx])) startIdx--;
  if (startIdx <= 0) return false;

  // 向下找到节点结束行：`  },`（2 空格缩进的 },，且不是内嵌对象如 label 的结束）
  let endIdx = idLineIdx;
  while (endIdx < lines.length && !/^  \},$/.test(lines[endIdx])) endIdx++;
  if (endIdx >= lines.length) return false;

  // 删除 [startIdx, endIdx] 整段行
  const updated = [...lines.slice(0, startIdx), ...lines.slice(endIdx + 1)].join('\n');
  if (updated === content) return false;
  fs.writeFileSync(TAXONOMY_FILE, updated, 'utf8');
  return true;
}

/* ============ Glossary 目录分类 ============ */

/** 列出 glossary 分类目录（zh 侧）：顶级 + 一级子分类（路径形如 'orbits/halo'） */
export function listGlossaryCategories() {
  const base = path.join(WEB_ROOT, 'glossary');
  if (!fs.existsSync(base)) return [];
  const out = [];
  for (const d of fs.readdirSync(base, { withFileTypes: true })) {
    if (!d.isDirectory() || d.name === 'figures' || d.name.startsWith('.')) continue;
    out.push(d.name);
    for (const s of fs.readdirSync(path.join(base, d.name), { withFileTypes: true })) {
      if (s.isDirectory() && s.name !== 'figures' && !s.name.startsWith('.')) {
        out.push(`${d.name}/${s.name}`);
      }
    }
  }
  return out.sort();
}

/**
 * 把 glossary 分类注册进 taxonomy/data.ts（幂等：已存在则跳过）。
 * 不注册的话站点 intake 查不到该分类，会跳过其词条。
 * 顶级分类插入 glossaryCategoryNodes，子分类插入 glossarySubcategoryNodes。
 */
function registerGlossaryTaxonomyNode(fullSlug, labelZh) {
  if (!fs.existsSync(TAXONOMY_FILE)) return false;
  const content = fs.readFileSync(TAXONOMY_FILE, 'utf8');
  if (content.includes(`id: 'glossary/${fullSlug}'`)) return false;

  const isSub = fullSlug.includes('/');
  const arrMarker = isSub
    ? 'const glossarySubcategoryNodes: TaxonomyNode[] = ['
    : 'const glossaryCategoryNodes: TaxonomyNode[] = [';
  const arrStart = content.indexOf(arrMarker);
  if (arrStart === -1) throw new PathError(`未找到 taxonomy 数组声明: ${arrMarker}`);
  const arrEndMarker = content.indexOf('];', arrStart);
  if (arrEndMarker === -1) throw new PathError('未找到 taxonomy 数组结尾');

  // order 取该数组内现有最大值 +10（顶级桶与子分类桶各自独立）
  const region = content.slice(arrStart, arrEndMarker);
  const orders = [...region.matchAll(/order:\s*(\d+)/g)].map((m) => Number(m[1]));
  const nextOrder = (orders.length ? Math.max(...orders) : 20000) + 10;

  const parent = isSub ? `'glossary/${fullSlug.split('/')[0]}'` : 'GLOSSARY_ROOT_ID';
  const enLabel = fullSlug.split('/').pop();
  // 中文标签直接拼进 TS 单引号字符串，必须转义单引号/反斜杠，避免写坏源文件
  const zhSafe = String(labelZh).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  const node = `  {
    id: 'glossary/${fullSlug}',
    kind: 'glossary-category',
    label: { zh: '${zhSafe}', en: '${enLabel}' },
    path: { zh: null, en: null },
    order: ${nextOrder},
    parentId: ${parent},
    meta: { slug: '${fullSlug}' },
  },`;

  const updated =
    content.slice(0, arrEndMarker) +
    (content.slice(0, arrEndMarker).endsWith('\n') ? '' : '\n') +
    node +
    '\n' +
    content.slice(arrEndMarker);
  fs.writeFileSync(TAXONOMY_FILE, updated, 'utf8');
  return true;
}

/**
 * 添加 glossary 分类：
 * - 顶级：创建 web/glossary/<name>/ 与 web/en/glossary/<name>/；
 * - 子分类（opts.parent 指定父分类 slug）：创建 <parent>/<name>/ 两级目录。
 * 创建后幂等注册 taxonomy 节点；opts.labelZh 为节点的中文名（缺省用 name）。
 */
export function addGlossaryCategory(name, { parent = '', labelZh = '' } = {}) {
  const slug = String(name).trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  if (!slug) throw new PathError('分类名不能为空');
  let fullSlug = slug;
  if (parent) {
    if (parent.includes('/')) throw new PathError('子分类只支持一层');
    const topLevel = listGlossaryCategories().filter((c) => !c.includes('/'));
    if (!topLevel.includes(parent)) throw new PathError(`父分类不存在: ${parent}`);
    fullSlug = `${parent}/${slug}`;
  }
  if (listGlossaryCategories().includes(fullSlug)) throw new PathError(`分类已存在: ${fullSlug}`);
  for (const rel of [`glossary/${fullSlug}`, `en/glossary/${fullSlug}`]) {
    fs.mkdirSync(path.join(WEB_ROOT, rel), { recursive: true });
  }
  const registered = registerGlossaryTaxonomyNode(fullSlug, labelZh || name);
  log('ADD_GLOSSARY_CATEGORY', [`${fullSlug} (zh+en dirs)`, `taxonomy=${registered ? 'registered' : 'exists'}`]);
  return {
    ok: true,
    slug: fullSlug,
    dirs: [`glossary/${fullSlug}`, `en/glossary/${fullSlug}`],
    taxonomyRegistered: registered,
  };
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
  // 含子分类的目录不允许直接删，避免层级混乱；先删除或移走子分类
  if (listGlossaryCategories().some((c) => c.startsWith(`${norm}/`))) {
    throw new PathError(`分类 ${norm} 含有子分类，请先删除或移走其子分类`);
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

  if (!deleteEntries) {
    // 移动后重跑 gen-sidebar，更新站点索引
    return runGenSidebar().then((genSidebar) => {
      log('DELETE_GLOSSARY_CATEGORY', [
        `${norm} -> ${target} (keep-entries)`,
        `moved=${moved.length}`,
        `genSidebar=${genSidebar.ok ? 'ok' : 'failed'}`,
      ]);
      return { ok: true, slug: norm, deleteEntries, target, moved, deleted: [], genSidebar };
    });
  }

  // 连删：删除后也重跑 gen-sidebar，清理站点索引中的已删条目
  return runGenSidebar().then((genSidebar) => {
    log('DELETE_GLOSSARY_CATEGORY', [
      `${norm} (with-entries)`,
      `deleted=${deleted.length}`,
      `trash=${path.relative(process.cwd(), trashRoot)}`,
      `genSidebar=${genSidebar.ok ? 'ok' : 'failed'}`,
    ]);
    return {
      ok: true,
      slug: norm,
      deleteEntries,
      deleted,
      trashStamp,
      moved: [],
      genSidebar,
    };
  });
}

/* ============ 批量修改分类（拖动改分类） ============ */

/** 把一个 md 相对路径展开为含中英镜像的列表（只保留实际存在的） */
function expandMirrors(rel) {
  const pair = rel.startsWith('en/') ? [rel.slice(3), rel] : [rel, `en/${rel}`];
  return pair.filter((r) => fs.existsSync(path.join(WEB_ROOT, r)));
}

/**
 * 在 frontmatter YAML 文本中设置 category。
 * mode=replace：替换为目标（单值按仓库惯例写标量）；mode=append：追加（已有则不动）。
 * 用 parseDocument 保留原文其余字段的格式；多值写成内联数组 `[a, b]`，与仓库惯例一致。
 * 返回 { raw, changed }；YAML 无法解析时抛错（由调用方跳过该文件，避免写坏）。
 */
function setCategoryYaml(raw, target, mode) {
  const doc = YAML.parseDocument(raw ?? '');
  if (doc.errors.length) throw new PathError(`YAML 解析失败: ${doc.errors[0].message}`);
  // doc.get 对标量返回 JS 值，对集合返回节点对象，分别处理
  const cur = doc.get('category');
  const arr = YAML.isSeq(cur)
    ? cur.items.map((x) => String(x?.value ?? x))
    : cur != null
      ? [String(cur)]
      : [];
  const next =
    mode === 'append'
      ? arr.some((x) => x.toLowerCase() === target.toLowerCase())
        ? arr
        : [...arr, target]
      : [target];
  const changed = next.length !== arr.length || next.some((x, i) => x !== arr[i]);
  if (!changed) return { raw, changed: false };
  if (next.length === 1) {
    doc.set('category', next[0]);
  } else {
    const seq = doc.createNode(next);
    seq.flow = true;
    doc.set('category', seq);
  }
  // lineWidth: 0 避免长行被重新折行；flow 序列输出 `[ a, b ]` 带内层空格，归一化为 `[a, b]`
  const text = doc
    .toString({ lineWidth: 0 })
    .replace(/^(category:\s*)\[ (.*) \]$/m, '$1[$2]');
  return { raw: text.trimEnd(), changed: true };
}

/**
 * 批量修改分类：
 * - news：改写每篇文章（含中英镜像）frontmatter 的 category，
 *         mode=replace 替换为目标标签，mode=append 追加 target。
 * - glossary：把条目文件（含中英镜像）移动到 target 目录，
 *         并同步更新 glossary/README.md 索引中的分类路径。
 */
export async function assignCategory(kind, paths, target, { mode = 'replace' } = {}) {
  const tgt = String(target || '').trim();
  if (!tgt) throw new PathError('目标分类不能为空');
  if (!Array.isArray(paths) || paths.length === 0) throw new PathError('缺少要修改的路径');
  if (kind === 'news') return assignNewsCategory(paths, tgt, mode);
  if (kind === 'glossary') return assignGlossaryCategory(paths, tgt);
  throw new PathError(`不支持的内容类型: ${kind}`);
}

async function assignNewsCategory(paths, target, mode) {
  if (!['replace', 'append'].includes(mode)) throw new PathError(`未知 mode: ${mode}`);
  const rels = [...new Set(paths.flatMap((p) => expandMirrors(String(p))))];
  const changed = [];
  const unchanged = [];
  const errors = [];
  for (const rel of rels) {
    if (classify(rel).kind !== 'news') {
      errors.push({ path: rel, error: '非 news 路径' });
      continue;
    }
    try {
      const { raw, body } = readRawMd(rel);
      const r = setCategoryYaml(raw, target, mode);
      if (!r.changed) {
        unchanged.push(rel);
        continue;
      }
      fs.writeFileSync(path.join(WEB_ROOT, rel), buildMarkdown(r.raw, body), 'utf8');
      changed.push(rel);
    } catch (err) {
      errors.push({ path: rel, error: err.message });
    }
  }
  const genSidebar = changed.length ? await runGenSidebar() : null;
  log('ASSIGN_CATEGORY', [
    `news -> ${target}`,
    `mode=${mode}`,
    `changed=${changed.length}`,
    `unchanged=${unchanged.length}`,
    `errors=${errors.length}`,
    `genSidebar=${genSidebar ? (genSidebar.ok ? 'ok' : 'failed') : 'n/a'}`,
  ]);
  return { ok: true, kind: 'news', target, mode, changed, unchanged, errors, genSidebar };
}

async function assignGlossaryCategory(paths, target) {
  if (!listGlossaryCategories().includes(target)) {
    throw new PathError(`目标分类不存在: ${target}`);
  }
  const rels = [...new Set(paths.flatMap((p) => expandMirrors(String(p))))];
  const moved = [];
  const skipped = [];
  const errors = [];
  for (const rel of rels) {
    const cls = classify(rel);
    if (cls.kind !== 'glossary') {
      errors.push({ path: rel, error: '非 glossary 路径' });
      continue;
    }
    if (cls.cat === target) {
      skipped.push({ path: rel, status: 'same-category' });
      continue;
    }
    const targetRel = `${cls.lang === 'en' ? 'en/' : ''}glossary/${target}/${cls.stem}.md`;
    if (fs.existsSync(path.join(WEB_ROOT, targetRel))) {
      skipped.push({ from: rel, to: targetRel, status: 'exists' });
      continue;
    }
    fs.renameSync(path.join(WEB_ROOT, rel), path.join(WEB_ROOT, targetRel));
    moved.push({ from: rel, to: targetRel, fromCat: cls.cat, stem: cls.stem, lang: cls.lang });
  }

  // 更新 glossary/README.md 索引：条目链接含分类路径，移动后需同步改写
  const zhMoved = moved.filter((m) => m.lang !== 'en');
  const readmeUpdated = zhMoved.length ? updateGlossaryReadmeIndex(zhMoved, target) : false;

  const genSidebar = moved.length ? await runGenSidebar() : null;
  log('ASSIGN_CATEGORY', [
    `glossary -> ${target}`,
    `moved=${moved.length}`,
    `skipped=${skipped.length}`,
    `errors=${errors.length}`,
    `readme=${readmeUpdated ? 'updated' : 'n/a'}`,
    `genSidebar=${genSidebar ? (genSidebar.ok ? 'ok' : 'failed') : 'n/a'}`,
  ]);
  return { ok: true, kind: 'glossary', target, moved, skipped, errors, readmeUpdated, genSidebar };
}

/** 把 glossary/README.md 中已移动条目的链接路径改写到新分类，并刷新 lastUpdated */
function updateGlossaryReadmeIndex(zhMoved, target) {
  const readmeRel = 'glossary/README.md';
  const full = path.join(WEB_ROOT, readmeRel);
  if (!fs.existsSync(full)) return false;
  let content = fs.readFileSync(full, 'utf8');
  let updated = false;
  for (const m of zhMoved) {
    const oldToken = `/glossary/${m.fromCat}/${m.stem}/`;
    const newToken = `/glossary/${target}/${m.stem}/`;
    if (content.includes(oldToken)) {
      content = content.split(oldToken).join(newToken);
      updated = true;
    }
  }
  const today = new Date().toISOString().slice(0, 10);
  const withDate = content.replace(/^(lastUpdated:\s*)\d{4}-\d{2}-\d{2}$/m, `$1${today}`);
  if (withDate !== content) {
    content = withDate;
    updated = true;
  }
  if (updated) fs.writeFileSync(full, content, 'utf8');
  return updated;
}

/** 在 web/ 目录执行 npm run gen-sidebar */
async function runGenSidebar() {
  try {
    const { stdout, stderr } = await execFileP('npm', ['run', 'gen-sidebar'], {
      cwd: WEB_ROOT,
      timeout: 120000,
    });
    return { ok: true, stdout: stdout.slice(-600), stderr: stderr.slice(-600) };
  } catch (err) {
    return {
      ok: false,
      message: String(err.message || '').slice(0, 300),
      stderr: String(err.stderr || '').slice(0, 600),
    };
  }
}
