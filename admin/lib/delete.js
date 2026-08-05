/**
 * 删除流程模块
 *
 * 负责：预览删除范围 → 移动到回收站 → 更新 README 索引 → 重跑 gen-sidebar。
 *
 * 安全约定：
 * - 只删除 web/ 内的 .md 与 figures/ 下的图片；
 * - 中英镜像（同 slug）一并纳入范围；
 * - 被删文件移动到 admin/trash/<时间戳>/ 下保留原相对路径；
 * - README 索引中的引用行被移除（仅结构化索引，如月份 README 表格、
 *   glossary/README.md 列表），其余页面引用仅提示不自动改动。
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { WEB_ROOT, TRASH_ROOT, PathError, assertOperable } from './paths.js';
import { classify } from './scan.js';
import { readMd } from './scan.js';
import { log } from './log.js';

const execFileP = promisify(execFile);

/** 中英镜像相对路径 */
export function mirrorPath(rel) {
  const norm = rel.replace(/\\/g, '/');
  if (norm.startsWith('en/')) return norm.slice(3);
  return 'en/' + norm;
}

/**
 * 展开删除范围：给定一个或多个 md 相对路径，返回
 * { md, figures, readmes, references }。
 */
export function expandDeleteScope(paths) {
  if (!Array.isArray(paths) || paths.length === 0) {
    throw new PathError('未提供要删除的路径');
  }

  const mdSet = new Set();
  for (const p of paths) {
    const rel = String(p).replace(/\\/g, '/').replace(/^\/+/, '');
    assertOperable(rel);
    if (!rel.endsWith('.md')) throw new PathError(`删除仅支持 .md 文件: ${rel}`);
    mdSet.add(rel);
    const mirror = mirrorPath(rel);
    if (fs.existsSync(path.join(WEB_ROOT, mirror))) {
      mdSet.add(mirror);
    }
  }

  // 收集正文中引用到的 ./figures/... 相对图片
  const figureSet = new Set();
  for (const rel of mdSet) {
    const info = readMd(rel);
    if (!info) continue;
    const mdDir = path.posix.dirname(rel);
    const refRe = /\]\(([^)]+)\)|src=["']([^"']+)["']/g;
    for (const m of info.content.matchAll(refRe)) {
      let ref = (m[1] || m[2] || '').trim().split(/[?#]/)[0];
      if (!ref || ref.startsWith('http') || ref.startsWith('/') || ref.startsWith('#') || ref.startsWith('mailto:')) {
        continue;
      }
      const resolved = path.posix.normalize(path.posix.join(mdDir, ref));
      if (!resolved.includes('/figures/')) continue;
      const full = path.join(WEB_ROOT, resolved);
      if (fs.existsSync(full) && fs.statSync(full).isFile()) {
        figureSet.add(resolved);
      }
    }
    // 新闻类：整目录 figures/<stem>/ 视为该文章私有图片目录，一并纳入
    const cls = classify(rel);
    if (cls.kind === 'news') {
      const figDir = path.posix.join(mdDir, 'figures', cls.stem);
      if (fs.existsSync(path.join(WEB_ROOT, figDir))) {
        collectDirFiles(figDir, figureSet);
      }
    }
  }

  const md = [...mdSet].sort();
  const figures = [...figureSet].sort();
  const readmes = collectReadmeRefs(md);
  const references = findReferences(md, readmes);

  return { md, figures, readmes, references };
}

function collectDirFiles(relDir, out) {
  const abs = path.join(WEB_ROOT, relDir);
  if (!fs.existsSync(abs)) return;
  const entries = fs.readdirSync(abs, { withFileTypes: true });
  for (const e of entries) {
    const rel = `${relDir}/${e.name}`;
    if (e.isDirectory()) collectDirFiles(rel, out);
    else if (e.isFile()) out.add(rel);
  }
}

/** 收集结构化 README 索引中的引用行 */
function collectReadmeRefs(mdList) {
  const map = new Map();
  for (const rel of mdList) {
    const cls = classify(rel);
    let candidates = [];
    if (cls.kind === 'news') {
      candidates = [
        { path: `space-news/${cls.year}/${cls.month}/README.md`, token: `./${cls.stem}/` },
        { path: `en/space-news/${cls.year}/${cls.month}/README.md`, token: `./${cls.stem}/` },
      ];
    } else if (cls.kind === 'glossary') {
      candidates = [
        { path: 'glossary/README.md', token: `/glossary/${cls.cat}/${cls.stem}/` },
      ];
    }
    for (const cand of candidates) {
      if (!cand.path) continue;
      const full = path.join(WEB_ROOT, cand.path);
      if (!fs.existsSync(full)) continue;
      const lines = fs.readFileSync(full, 'utf8').split('\n');
      const hits = lines
        .map((text, idx) => ({ number: idx + 1, text }))
        .filter((l) => l.text.includes(cand.token));
      if (hits.length === 0) continue;
      if (!map.has(cand.path)) {
        map.set(cand.path, { path: cand.path, lines: [], tokens: new Set() });
      }
      const entry = map.get(cand.path);
      for (const h of hits) {
        if (!entry.lines.some((x) => x.number === h.number)) entry.lines.push(h);
      }
      entry.tokens.add(cand.token);
    }
  }
  return [...map.values()].map((e) => ({
    path: e.path,
    tokens: [...e.tokens],
    lines: e.lines.sort((a, b) => a.number - b.number),
  }));
}

const SCAN_SKIP_DIRS = new Set(['node_modules', '.vuepress', '.git', '.gitee', 'dist', '.temp', 'figures']);

/** 递归遍历 web/ 下的 md 文件（跳过目录） */
function* walkMd(baseRel) {
  const abs = path.join(WEB_ROOT, baseRel);
  if (!fs.existsSync(abs)) return;
  const entries = fs.readdirSync(abs, { withFileTypes: true });
  for (const e of entries) {
    if (SCAN_SKIP_DIRS.has(e.name)) continue;
    const rel = baseRel ? `${baseRel}/${e.name}` : e.name;
    if (e.isDirectory()) {
      yield* walkMd(rel);
    } else if (e.isFile() && e.name.endsWith('.md')) {
      yield rel;
    }
  }
}

/**
 * 扫描全站，找出其它页面里对目标文件的引用（仅提示，不自动改动）。
 * tokens 取：目标页面 frontmatter 的 permalink + 相对链接 `./stem/`。
 */
function findReferences(targetRels, readmes) {
  const exclude = new Set(targetRels);
  const excludeReadmes = new Set(readmes.map((r) => r.path));
  const tokens = new Set();
  for (const rel of targetRels) {
    const cls = classify(rel);
    const info = readMd(rel);
    if (info && typeof info.fm.permalink === 'string' && info.fm.permalink) {
      tokens.add(info.fm.permalink);
    }
    tokens.add(`./${cls.stem}/`);
  }
  const result = [];
  for (const rel of walkMd('')) {
    if (exclude.has(rel) || excludeReadmes.has(rel)) continue;
    let content;
    try {
      content = fs.readFileSync(path.join(WEB_ROOT, rel), 'utf8');
    } catch {
      continue;
    }
    const lines = content.split('\n');
    const hits = [];
    for (let i = 0; i < lines.length; i++) {
      if ([...tokens].some((t) => t.length >= 4 && lines[i].includes(t))) {
        hits.push({ number: i + 1, text: lines[i].slice(0, 160) });
      }
    }
    if (hits.length) result.push({ path: rel, lines: hits.slice(0, 20) });
    if (result.length >= 50) break;
  }
  return result;
}

/**
 * 移动文件到回收站：admin/trash/<时间戳>/<原相对路径>。
 * 跨设备时回退为复制+删除。
 */
function moveToTrash(srcRel, trashDir) {
  const src = path.join(WEB_ROOT, srcRel);
  if (!fs.existsSync(src)) return false;
  const dest = path.join(trashDir, srcRel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  try {
    fs.renameSync(src, dest);
  } catch (err) {
    if (err.code !== 'EXDEV') throw err;
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    fs.unlinkSync(src);
  }
  return true;
}

/** 移除 README 中的引用行并刷新 lastUpdated */
function updateReadmeFile(readmeRel, tokens) {
  const full = path.join(WEB_ROOT, readmeRel);
  if (!fs.existsSync(full)) return false;
  let content = fs.readFileSync(full, 'utf8');
  const lines = content.split('\n');
  const kept = lines.filter((line) => !tokens.some((t) => t && line.includes(t)));
  let updated = false;
  if (kept.length !== lines.length) {
    content = kept.join('\n');
    updated = true;
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

/**
 * 预览删除范围（不做任何修改）。
 */
export function previewDelete(paths) {
  const scope = expandDeleteScope(paths);
  return {
    files: [
      ...scope.md.map((p) => ({ path: p, type: 'md' })),
      ...scope.figures.map((p) => ({ path: p, type: 'figure' })),
    ],
    readmes: scope.readmes,
    references: scope.references,
    genSidebar: scope.md.length > 0,
  };
}

/**
 * 执行删除：
 * 1. 移动 md + figures 到回收站；
 * 2. 更新结构化 README 索引；
 * 3. 重跑 npm run gen-sidebar；
 * 4. 全部写操作日志。
 */
export async function executeDelete(paths, confirmed) {
  if (confirmed !== true) {
    throw new PathError('必须确认删除后才能执行');
  }
  const scope = expandDeleteScope(paths);
  if (scope.md.length === 0) {
    throw new PathError('没有可删除的文件');
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const trashDir = path.join(TRASH_ROOT, stamp);

  const moved = [];
  for (const rel of [...scope.md, ...scope.figures]) {
    if (moveToTrash(rel, trashDir)) moved.push(rel);
  }

  const readmesUpdated = [];
  for (const r of scope.readmes) {
    if (updateReadmeFile(r.path, r.tokens)) readmesUpdated.push(r.path);
  }

  const genSidebar = await runGenSidebar();

  log('DELETE', [
    `trash=${path.relative(process.cwd(), trashDir) || trashDir}`,
    `moved=${moved.join(',')}`,
    `readmes=${readmesUpdated.join(',')}`,
    `genSidebar=${genSidebar.ok ? 'ok' : 'failed'}`,
  ]);

  return {
    trashDir: trashDir,
    trashStamp: stamp,
    moved,
    figures: scope.figures,
    readmesUpdated,
    genSidebar,
  };
}

/** 列出回收站内容（按时间戳目录） */
export function listTrash() {
  if (!fs.existsSync(TRASH_ROOT)) return [];
  const stamps = fs
    .readdirSync(TRASH_ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
    .reverse();
  const out = [];
  for (const stamp of stamps) {
    const stampDir = path.join(TRASH_ROOT, stamp);
    const files = [];
    (function walk(relBase) {
      const abs = path.join(stampDir, relBase);
      for (const e of fs.readdirSync(abs, { withFileTypes: true })) {
        const rel = relBase ? `${relBase}/${e.name}` : e.name;
        if (e.isDirectory()) walk(rel);
        else files.push(rel);
      }
    })('');
    // 跳过空的时间戳目录
    if (files.length === 0) continue;
    out.push({ stamp, files: files.sort() });
  }
  return out;
}

/** 从回收站恢复单个文件到 web/ 原位置 */
export function restoreFile(relPath, stamp) {
  const rel = String(relPath).replace(/\\/g, '/').replace(/^\/+/, '');
  if (!rel || rel.includes('..')) throw new PathError(`非法路径: ${relPath}`);

  let stampDir = null;
  if (stamp) {
    stampDir = path.join(TRASH_ROOT, stamp);
    if (!fs.existsSync(stampDir)) throw new PathError(`回收站目录不存在: ${stamp}`);
  } else {
    // 未指定时间戳时，从最新的包含该文件的时间戳目录里恢复
    const stamps = fs.existsSync(TRASH_ROOT)
      ? fs.readdirSync(TRASH_ROOT).sort().reverse()
      : [];
    for (const s of stamps) {
      if (fs.existsSync(path.join(TRASH_ROOT, s, rel))) {
        stampDir = path.join(TRASH_ROOT, s);
        break;
      }
    }
    if (!stampDir) throw new PathError(`回收站中找不到该文件: ${rel}`);
  }

  const src = path.join(stampDir, rel);
  if (!fs.existsSync(src)) throw new PathError(`回收站文件不存在: ${stamp}/${rel}`);
  const dest = path.join(WEB_ROOT, rel);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  // 复制到目标，成功后删除回收站副本（即“移回”），并清理空目录
  fs.copyFileSync(src, dest);
  fs.unlinkSync(src);
  cleanupEmptyDirs(stampDir);

  log('RESTORE', [`${path.basename(stampDir)}/${rel} -> web/${rel}`]);
  return { rel, stamp: path.basename(stampDir) };
}

/** 从底向上清理回收站内变空的目录；若整个时间戳目录都空了则一并删除。 */
function cleanupEmptyDirs(stampDir) {
  try {
    const dirs = [];
    (function collect(d) {
      for (const e of fs.readdirSync(d, { withFileTypes: true })) {
        if (e.isDirectory()) {
          const child = path.join(d, e.name);
          dirs.push(child);
          collect(child);
        }
      }
    })(stampDir);
    dirs.sort((a, b) => b.length - a.length);
    for (const d of dirs) {
      try {
        if (fs.readdirSync(d).length === 0) fs.rmdirSync(d);
      } catch {
        /* 忽略清理失败 */
      }
    }
    // 整个时间戳目录空了则删除
    try {
      if (fs.readdirSync(stampDir).length === 0) fs.rmdirSync(stampDir);
    } catch {
      /* 忽略 */
    }
  } catch {
    /* 忽略 */
  }
}
