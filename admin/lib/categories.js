/**
 * 分类管理模块
 *
 * 两种分类语义：
 *            删除分类 = 从所有文章移除该标签（保条目），或移除标签 + 删除带该标签的文章（连删）。
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
import { contentBridge as content } from './content-bridge.ts';

function readRawMd(rel) {
  const full = path.join(WEB_ROOT, rel);
  const content = fs.readFileSync(full, 'utf8');
  const { raw, body } = splitFrontmatter(content);
  return { raw, body };
}

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
  // 中文标签直接拼进 TS 单引号字符串，必须转义单引号/反斜杠，避免写坏源文件
  const zhSafe = String(labelZh).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

  const node = `  {
    id: 'glossary/${fullSlug}',
    kind: 'glossary-category',
    label: '${zhSafe}',
    path: null,
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
 * - 顶级：创建 web/glossary/<name>/；
 * - 子分类（opts.parent 指定父分类 slug）：创建 <parent>/<name>/ 目录。
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
  fs.mkdirSync(path.join(WEB_ROOT, `glossary/${fullSlug}`), { recursive: true });
  const registered = registerGlossaryTaxonomyNode(fullSlug, labelZh || name);
  log('ADD_GLOSSARY_CATEGORY', [`${fullSlug}`, `taxonomy=${registered ? 'registered' : 'exists'}`]);
  return {
    ok: true,
    slug: fullSlug,
    dirs: [`glossary/${fullSlug}`],
    taxonomyRegistered: registered,
  };
}

/**
 * 删除 glossary 分类：
 * - 保条目（deleteEntries=false）：把该目录下所有条目移到目标分类（必须提供 target）。
 * - 连删（deleteEntries=true）：删除目录下所有条目，目录也一并删除。
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

  // 收集该分类目录下所有 md
  const rels = [];
  const catAbs = path.join(WEB_ROOT, `glossary/${norm}`);
  if (fs.existsSync(catAbs)) {
    for (const f of fs.readdirSync(catAbs)) {
      if (f.endsWith('.md') && !f.toLowerCase().startsWith('readme')) {
        rels.push(`glossary/${norm}/${f}`);
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
      // 移到目标分类：web/glossary/<target>/<stem>.md
      const cls = classify(rel);
      const targetRel = `glossary/${target}/${cls.stem}.md`;
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
  {
    const abs = catAbs;
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

/* ============ 批量修改分类（拖动改分类） ============ */

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
 * - glossary：把条目文件移动到 target 目录，
 *         并同步更新 glossary/README.md 索引中的分类路径。
 */
export async function assignCategory(kind, paths, target, { mode = 'replace' } = {}) {
  const tgt = String(target || '').trim();
  if (!tgt) throw new PathError('目标分类不能为空');
  if (!Array.isArray(paths) || paths.length === 0) throw new PathError('缺少要修改的路径');
  if (kind === 'glossary') return assignGlossaryCategory(paths, tgt);
  throw new PathError(`不支持的内容类型: ${kind}`);
}

async function assignGlossaryCategory(paths, target) {
  if (!listGlossaryCategories().includes(target)) {
    throw new PathError(`目标分类不存在: ${target}`);
  }
  const rels = [...new Set(paths.map(String))];
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
    const targetRel = `glossary/${target}/${cls.stem}.md`;
    if (fs.existsSync(path.join(WEB_ROOT, targetRel))) {
      skipped.push({ from: rel, to: targetRel, status: 'exists' });
      continue;
    }
    fs.renameSync(path.join(WEB_ROOT, rel), path.join(WEB_ROOT, targetRel));
    moved.push({ from: rel, to: targetRel, fromCat: cls.cat, stem: cls.stem });
  }

  // 更新 glossary/README.md 索引：条目链接含分类路径，移动后需同步改写
  const readmeUpdated = moved.length ? updateGlossaryReadmeIndex(moved, target) : false;

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
