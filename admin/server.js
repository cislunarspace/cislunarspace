/**
 * 地月空间内容管理器 - 后端入口
 *
 * 纯本地运行：不部署线上，不做任何 git 操作，只做 web/ 下的
 * 文件/文件夹读写删除。删除统一进回收站（web/.trash，ADR-0003
 * content 模块管理），全部操作写日志。
 *
 * 数据操作走 web/.vuepress/content 模块（ADR-0003）——路径约定、
 * 双语配对、删除回收、索引刷新的真理在 content；本服务只做
 * HTTP 形状适配。
 *
 * 启动：cd admin && npm install && npm start（tsx 运行，可 import TS）
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
import { contentBridge as content } from './lib/content-bridge.ts';
import {
  addGlossaryCategory,
  deleteGlossaryCategory,
  assignCategory,
} from './lib/categories.js';
import { previewDelete, listTrash, restoreFile } from './lib/delete.js';
import * as sitePreview from './lib/preview.js';
import * as ai from './lib/ai.js';

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

/** 读取单个文件内容供编辑器使用 */
function readContent(relPath) {
  const rel = String(relPath).replace(/\\/g, '/').replace(/^\/+/, '');
  assertEditableMd(rel);
  const info = readMd(rel);
  if (!info) throw new PathError(`文件不存在: ${rel}`);
  const cls = classify(rel);
  return {
    path: rel,
    kind: cls.kind,
    frontmatter: info.fm,
    rawFrontmatter: info.rawFrontmatter,
    body: info.body,
    yamlOk: info.yamlOk,
    yamlError: info.yamlError,
  };
}

/** 保存一个 md 文件：frontmatterRaw 必须是合法 YAML；保存后后台刷新派生索引 */
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
  content.refreshIndexInBackground(`save:${r}`);
  return readContent(r);
}

/* ============ API 路由 ============ */

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, name: 'cislunarspace-admin', web: WEB_ROOT });
});

/** 列出内容：/api/contents?type=glossary|kb&q=关键词&cat=分类 */
app.get('/api/contents', (req, res) => {
  try {
    const type = req.query.type || 'glossary';
    const q = typeof req.query.q === 'string' ? req.query.q : '';
    const cat = typeof req.query.cat === 'string' ? req.query.cat : '';
    if (!['glossary', 'kb'].includes(type)) {
      return res.status(400).json({ ok: false, error: '未知类型: ' + type });
    }
    const list = listContents(type, { q, cat });
    res.json({ ok: true, type, total: list.length, items: list });
  } catch (err) {
    sendError(res, err);
  }
});

/** 列出某类内容的分类及条目数：/api/categories?type=glossary|kb */
app.get('/api/categories', (req, res) => {
  try {
    const type = req.query.type || 'glossary';
    if (!['glossary', 'kb'].includes(type)) {
      return res.status(400).json({ ok: false, error: '未知类型: ' + type });
    }
    res.json({ ok: true, type, categories: listCategories(type) });
  } catch (err) {
    sendError(res, err);
  }
});

/* ============ 分类管理 ============ */

/** 添加分类：POST /api/categories/add { type, name, parent?, labelZh? } */
app.post('/api/categories/add', async (req, res) => {
  try {
    const { type, name, parent, labelZh } = req.body || {};
    if (type !== 'glossary') {
      return res.status(400).json({ ok: false, error: '仅支持 glossary 分类管理' });
    }
    if (!name || !String(name).trim()) throw new PathError('分类名不能为空');
    const result = addGlossaryCategory(String(name).trim(), {
      parent: typeof parent === 'string' ? parent : '',
      labelZh: typeof labelZh === 'string' ? labelZh : '',
    });
    res.json({ ok: true, ...result });
  } catch (err) {
    sendError(res, err);
  }
});

/** 删除分类：POST /api/categories/delete { type, name, deleteEntries?, target? } */
app.post('/api/categories/delete', async (req, res) => {
  try {
    const { type, name, deleteEntries, target } = req.body || {};
    if (type !== 'glossary') {
      return res.status(400).json({ ok: false, error: '仅支持 glossary 分类管理' });
    }
    if (!name || !String(name).trim()) throw new PathError('分类名不能为空');
    const result = await deleteGlossaryCategory(String(name).trim(), {
      deleteEntries: !!deleteEntries,
      target: typeof target === 'string' ? target : '',
    });
    res.json({ ok: true, ...result });
  } catch (err) {
    sendError(res, err);
  }
});

/** 批量修改分类：POST /api/categories/assign { type, paths, target, mode? } */
app.post('/api/categories/assign', async (req, res) => {
  try {
    const { type, paths, target, mode } = req.body || {};
    if (type !== 'glossary') {
      return res.status(400).json({ ok: false, error: '仅支持 glossary 修改分类' });
    }
    if (!Array.isArray(paths) || paths.length === 0) throw new PathError('缺少要修改的路径');
    const rels = paths.map((p) => {
      const r = String(p).replace(/\\/g, '/').replace(/^\/+/, '');
      assertEditableMd(r);
      return r;
    });
    if (!target || !String(target).trim()) throw new PathError('目标分类不能为空');
    const result = await assignCategory(type, rels, String(target).trim(), {
      mode: mode === 'append' ? 'append' : 'replace',
    });
    res.json({ ok: true, ...result });
  } catch (err) {
    sendError(res, err);
  }
});

/** 读取单个文件：/api/content?path=<相对路径> */
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

/* ============ 整站预览 ============ */

/** 预览服务状态：GET /api/preview/status */
app.get('/api/preview/status', async (_req, res) => {
  try {
    res.json({ ok: true, ...(await sitePreview.status()) });
  } catch (err) {
    sendError(res, err);
  }
});

/** 启动预览服务：POST /api/preview/start（幂等，等待就绪后返回 url） */
app.post('/api/preview/start', async (_req, res) => {
  try {
    res.json({ ok: true, ...(await sitePreview.start()) });
  } catch (err) {
    sendError(res, err);
  }
});

/** md 路径 → 站点路由：GET /api/preview/route?path=<相对路径> */
app.get('/api/preview/route', (req, res) => {
  try {
    const rel = String(req.query.path || '');
    assertEditableMd(rel);
    res.json({ ok: true, route: sitePreview.pathToRoute(rel) });
  } catch (err) {
    sendError(res, err);
  }
});

/* ============ AI 润色 ============ */

/** 读取 AI 配置（脱敏）：GET /api/ai/config */
app.get('/api/ai/config', (_req, res) => {
  try {
    res.json({ ok: true, ...ai.getPublicConfig() });
  } catch (err) {
    sendError(res, err);
  }
});

/** 保存 AI 配置：POST /api/ai/config { provider, baseUrl, apiKey?, model } */
app.post('/api/ai/config', (req, res) => {
  try {
    res.json({ ok: true, ...ai.saveConfig(req.body || {}) });
  } catch (err) {
    sendError(res, err);
  }
});

/** AI 对话：POST /api/ai/chat { messages: [...], system? } */
app.post('/api/ai/chat', async (req, res) => {
  try {
    const { messages, system } = req.body || {};
    const reply = await ai.chat(messages, system);
    res.json({ ok: true, reply });
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
  // 只绑定回环地址，确保纯本地运行：管理接口含内容修改/删除/执行 gen-sidebar，
  // 绑定 0.0.0.0 会把整个内容仓库和一个命令执行通道暴露给局域网/外网。
  const HOST = process.env.HOST || '127.0.0.1';
  app.listen(PORT, HOST, () => {
    console.log('');
    console.log('==================================================');
    console.log('  地月空间内容管理器 (本地 GUI)');
    console.log(`  访问: http://${HOST}:${PORT}`);
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
