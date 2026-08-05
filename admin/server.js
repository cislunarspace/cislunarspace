/**
 * 地月空间内容管理器 - 后端入口
 *
 * 纯本地运行：不部署线上，不做任何 git 操作，只做 web/ 下的
 * 文件/文件夹读写删除。删除统一进回收站，全部操作写日志。
 *
 * 启动：cd admin && npm install && node server.js
 * 访问：http://localhost:8765
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import { build as viteBuild } from 'vite';

import { WEB_ROOT, ADMIN_ROOT, PathError, assertEditableMd, assertOperable } from './lib/paths.js';
import { log } from './lib/log.js';
import { splitFrontmatter, parseFrontmatter, stringifyFrontmatter, buildMarkdown } from './lib/frontmatter.js';
import { validateYaml, validateFile } from './lib/validate.js';
import { listContents, listCategories, readMd, classify } from './lib/scan.js';
import {
  addNewsCategory,
  deleteNewsCategory,
  addGlossaryCategory,
  deleteGlossaryCategory,
} from './lib/categories.js';
import { previewDelete, executeDelete, listTrash, restoreFile } from './lib/delete.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 8765;
const WEB_DIST = path.join(__dirname, 'web', 'dist');

const app = express();
app.use(express.json({ limit: '20mb' }));

/* ============ 前端构建（首次启动自动构建） ============ */

async function ensureFrontendBuilt() {
  const indexHtml = path.join(WEB_DIST, 'index.html');
  if (fs.existsSync(indexHtml)) return;
  console.log('[admin] 未检测到前端构建产物，开始构建 web/ 前端 ...');
  try {
    await viteBuild({
      configFile: path.join(__dirname, 'web', 'vite.config.js'),
      logLevel: 'warn',
    });
    console.log('[admin] 前端构建完成');
  } catch (err) {
    console.error('[admin] 前端构建失败:', err.message);
    console.error('[admin] 仍会启动 API 服务，但界面不可用。可手动执行: cd admin && npm run build');
  }
}

/* ============ 工具函数 ============ */

function sendError(res, err) {
  const status = err instanceof PathError ? 400 : 500;
  return res.status(status).json({ ok: false, error: err.message || String(err) });
}

/** 读取单个文件内容（含镜像）供编辑器使用 */
function readContent(relPath) {
  const rel = String(relPath).replace(/\\/g, '/').replace(/^\/+/, '');
  assertEditableMd(rel);
  const info = readMd(rel);
  if (!info) throw new PathError(`文件不存在: ${rel}`);
  const cls = classify(rel);
  const base = {
    path: rel,
    lang: cls.lang,
    kind: cls.kind,
    frontmatter: info.fm,
    rawFrontmatter: info.rawFrontmatter,
    body: info.body,
    yamlOk: info.yamlOk,
    yamlError: info.yamlError,
  };
  const mirrorRel = rel.startsWith('en/') ? rel.slice(3) : 'en/' + rel;
  const mirrorInfo = readMd(mirrorRel);
  if (mirrorInfo) {
    const mcls = classify(mirrorRel);
    base.mirror = {
      path: mirrorRel,
      lang: mcls.lang,
      kind: mcls.kind,
      frontmatter: mirrorInfo.fm,
      rawFrontmatter: mirrorInfo.rawFrontmatter,
      body: mirrorInfo.body,
      yamlOk: mirrorInfo.yamlOk,
      yamlError: mirrorInfo.yamlError,
    };
  } else {
    base.mirror = null;
  }
  return base;
}

/** 保存一个 md 文件：frontmatterRaw 必须是合法 YAML */
function saveMdFile({ path: rel, frontmatterRaw, body }) {
  const r = String(rel).replace(/\\/g, '/').replace(/^\/+/, '');
  assertEditableMd(r);
  if (typeof frontmatterRaw !== 'string') {
    throw new PathError('frontmatter 必须是 YAML 文本字符串');
  }
  const v = validateYaml(frontmatterRaw);
  if (!v.valid) {
    throw new PathError(`YAML 校验未通过: ${v.errors.join('; ')}`);
  }
  const full = path.join(WEB_ROOT, r);
  if (!fs.existsSync(full)) throw new PathError(`文件不存在: ${r}`);
  const content = buildMarkdown(frontmatterRaw, body ?? '');
  fs.writeFileSync(full, content, 'utf8');
  log('SAVE', [r]);
  return readContent(r);
}

/* ============ API 路由 ============ */

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, name: 'cislunarspace-admin', web: WEB_ROOT });
});

/** 列出内容：/api/contents?type=news|glossary|kb&q=关键词&cat=分类 */
app.get('/api/contents', (req, res) => {
  try {
    const type = req.query.type || 'news';
    const q = typeof req.query.q === 'string' ? req.query.q : '';
    const cat = typeof req.query.cat === 'string' ? req.query.cat : '';
    if (!['news', 'glossary', 'kb'].includes(type)) {
      return res.status(400).json({ ok: false, error: '未知类型: ' + type });
    }
    const list = listContents(type, { q, cat });
    res.json({ ok: true, type, total: list.length, items: list });
  } catch (err) {
    sendError(res, err);
  }
});

/** 列出某类内容的分类及条目数：/api/categories?type=news|glossary|kb */
app.get('/api/categories', (req, res) => {
  try {
    const type = req.query.type || 'news';
    if (!['news', 'glossary', 'kb'].includes(type)) {
      return res.status(400).json({ ok: false, error: '未知类型: ' + type });
    }
    res.json({ ok: true, type, categories: listCategories(type) });
  } catch (err) {
    sendError(res, err);
  }
});

/* ============ 分类管理 ============ */

/** 添加分类：POST /api/categories/add { type, name } */
app.post('/api/categories/add', async (req, res) => {
  try {
    const { type, name } = req.body || {};
    if (!['news', 'glossary'].includes(type)) {
      return res.status(400).json({ ok: false, error: '仅支持 news / glossary 分类管理' });
    }
    if (!name || !String(name).trim()) throw new PathError('分类名不能为空');
    const result =
      type === 'news'
        ? await addNewsCategory(String(name).trim())
        : addGlossaryCategory(String(name).trim());
    res.json({ ok: true, ...result });
  } catch (err) {
    sendError(res, err);
  }
});

/** 删除分类：POST /api/categories/delete { type, name, deleteEntries?, target? } */
app.post('/api/categories/delete', async (req, res) => {
  try {
    const { type, name, deleteEntries, target } = req.body || {};
    if (!['news', 'glossary'].includes(type)) {
      return res.status(400).json({ ok: false, error: '仅支持 news / glossary 分类管理' });
    }
    if (!name || !String(name).trim()) throw new PathError('分类名不能为空');
    const result =
      type === 'news'
        ? await deleteNewsCategory(String(name).trim(), { deleteEntries: !!deleteEntries })
        : await deleteGlossaryCategory(String(name).trim(), {
            deleteEntries: !!deleteEntries,
            target: typeof target === 'string' ? target : '',
          });
    res.json({ ok: true, ...result });
  } catch (err) {
    sendError(res, err);
  }
});

/** 读取单个文件（含中英镜像）：/api/content?path=<相对路径> */
app.get('/api/content', (req, res) => {
  try {
    const data = readContent(req.query.path || '');
    res.json({ ok: true, ...data });
  } catch (err) {
    sendError(res, err);
  }
});

/** 图片/附件访问：/api/image?path=<相对路径>（供图片预览使用） */
app.get('/api/image', (req, res) => {
  try {
    const rel = String(req.query.path || '').replace(/\\/g, '/').replace(/^\/+/, '');
    const full = assertOperable(rel);
    if (!fs.existsSync(full)) throw new PathError(`文件不存在: ${rel}`);
    const ext = path.extname(full).toLowerCase();
    const mime = {
      '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
      '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
      '.avif': 'image/avif', '.bmp': 'image/bmp', '.ico': 'image/x-icon',
    };
    res.setHeader('Content-Type', mime[ext] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'no-store');
    fs.createReadStream(full).pipe(res);
  } catch (err) {
    sendError(res, err);
  }
});

/** 保存一个或多个文件：{ saves: [{ path, frontmatterRaw, body }] } */
app.post('/api/content', (req, res) => {
  try {
    const { saves } = req.body || {};
    if (!Array.isArray(saves) || saves.length === 0) {
      throw new PathError('缺少 saves 数组');
    }
    const results = saves.map((s) => saveMdFile(s));
    res.json({ ok: true, saved: results.length, results });
  } catch (err) {
    sendError(res, err);
  }
});

/** 校验 frontmatter：POST /api/validate { frontmatterRaw } 或 { path } */
app.post('/api/validate', (req, res) => {
  try {
    const body = req.body || {};
    if (typeof body.path === 'string' && body.path) {
      const r = String(body.path).replace(/\\/g, '/').replace(/^\/+/, '');
      assertEditableMd(r);
      res.json({ ok: true, ...validateFile(path.join(WEB_ROOT, r), r) });
      return;
    }
    if (typeof body.frontmatterRaw === 'string') {
      const v = validateYaml(body.frontmatterRaw);
      res.json({ ok: true, valid: v.valid, errors: v.errors, data: v.data });
      return;
    }
    throw new PathError('缺少 frontmatterRaw 或 path');
  } catch (err) {
    sendError(res, err);
  }
});

/** 预览删除范围：POST /api/delete/preview { paths: [...] } */
app.post('/api/delete/preview', (req, res) => {
  try {
    const { paths } = req.body || {};
    if (!Array.isArray(paths) || paths.length === 0) {
      throw new PathError('缺少要预览的路径');
    }
    const result = previewDelete(paths);
    res.json({ ok: true, ...result });
  } catch (err) {
    sendError(res, err);
  }
});

/** 执行删除：POST /api/delete/execute { paths: [...], confirmed: true } */
app.post('/api/delete/execute', async (req, res) => {
  try {
    const { paths, confirmed } = req.body || {};
    if (!Array.isArray(paths) || paths.length === 0) {
      throw new PathError('缺少要删除的路径');
    }
    const result = await executeDelete(paths, confirmed === true);
    res.json({ ok: true, ...result });
  } catch (err) {
    sendError(res, err);
  }
});

/** 列出回收站：GET /api/trash */
app.get('/api/trash', (_req, res) => {
  try {
    res.json({ ok: true, trash: listTrash() });
  } catch (err) {
    sendError(res, err);
  }
});

/** 恢复回收站文件：POST /api/trash/restore { relPath, stamp? } */
app.post('/api/trash/restore', (req, res) => {
  try {
    const { relPath, stamp } = req.body || {};
    if (!relPath) throw new PathError('缺少 relPath');
    const result = restoreFile(relPath, stamp);
    res.json({ ok: true, ...result });
  } catch (err) {
    sendError(res, err);
  }
});

/* ============ 静态资源与 SPA 兜底 ============ */

app.use(express.static(WEB_DIST));

app.get(/^(?!\/api\/).*/, (_req, res) => {
  const indexHtml = path.join(WEB_DIST, 'index.html');
  if (fs.existsSync(indexHtml)) {
    res.sendFile(indexHtml);
  } else {
    res.status(503).send('前端未构建，请运行: cd admin && npm run build');
  }
});

/* ============ 启动 ============ */

async function main() {
  await ensureFrontendBuilt();
  app.listen(PORT, () => {
    console.log('');
    console.log('==================================================');
    console.log('  地月空间内容管理器 (本地 GUI)');
    console.log(`  访问: http://localhost:${PORT}`);
    console.log(`  内容根: ${WEB_ROOT}`);
    console.log(`  回收站: ${path.join(ADMIN_ROOT, 'trash')}`);
    console.log('  （仅本地使用，不做任何 git 操作）');
    console.log('==================================================');
    console.log('');
  });
}

main().catch((err) => {
  console.error('[admin] 启动失败:', err);
  process.exit(1);
});
