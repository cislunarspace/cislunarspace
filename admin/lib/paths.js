/**
 * 路径安全模块
 *
 * 只允许读写仓库 web/ 内的 .md 文件及其关联的 figures/ 图片。
 * 拒绝任何绝对路径穿越、`..`、越界访问。被删文件统一移到 admin/trash/。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** 仓库根目录（admin/ 的上一级） */
export const REPO_ROOT = path.resolve(__dirname, '../..');
/** 站点内容根目录，所有被管理的文件都在这里 */
export const WEB_ROOT = path.join(REPO_ROOT, 'web');
/** admin/ 目录 */
export const ADMIN_ROOT = path.resolve(__dirname, '..');
/** 回收站目录 */
export const TRASH_ROOT = path.join(WEB_ROOT, '.trash');
/** 操作日志目录 */
export const LOG_DIR = path.join(ADMIN_ROOT, 'logs');

export const MD_EXT = '.md';
/** 允许的图片/附件扩展名（删除时可清理） */
export const FIGURE_EXTS = new Set([
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif', '.bmp', '.ico',
]);

export class PathError extends Error {}

/**
 * 将仓库内相对路径解析为 web/ 下的绝对路径。
 * 拒绝绝对路径、`..` 穿越、越界。
 */
export function resolveInWeb(relPath) {
  if (typeof relPath !== 'string' || relPath.length === 0) {
    throw new PathError('路径不能为空');
  }
  if (path.isAbsolute(relPath)) {
    throw new PathError(`不支持绝对路径: ${relPath}`);
  }
  const normalized = relPath.replace(/\\/g, '/');
  const parts = normalized.split('/');
  if (parts.some((p) => p === '..')) {
    throw new PathError(`不允许路径穿越 (..): ${relPath}`);
  }
  if (parts.some((p) => p === '~' || p.includes(':') || p === '')) {
    throw new PathError(`非法路径段: ${relPath}`);
  }
  const full = path.resolve(WEB_ROOT, normalized);
  if (full !== WEB_ROOT && !full.startsWith(WEB_ROOT + path.sep)) {
    throw new PathError(`路径越界: ${relPath}`);
  }
  return full;
}

/** 判断相对路径是否位于 web/ 内且包含 figures/ 段 */
export function isWithinWeb(relPath) {
  try {
    resolveInWeb(relPath);
    return true;
  } catch {
    return false;
  }
}

/**
 * 校验一个相对路径是否可被本工具操作：
 * 必须是 web/ 内的 .md 文件，或位于 figures/ 目录下的图片文件。
 */
export function assertOperable(relPath) {
  const full = resolveInWeb(relPath);
  if (!fs.existsSync(full)) {
    throw new PathError(`文件不存在: ${relPath}`);
  }
  const stat = fs.statSync(full);
  if (!stat.isFile()) {
    throw new PathError(`不是普通文件: ${relPath}`);
  }
  const ext = path.extname(full).toLowerCase();
  const isMd = ext === MD_EXT;
  const isFigure =
    FIGURE_EXTS.has(ext) && full.includes(path.sep + 'figures' + path.sep);
  if (!isMd && !isFigure) {
    throw new PathError(`不允许操作该类型文件: ${relPath}`);
  }
  return full;
}

/** 校验一个相对路径是否可被编辑（编辑器只处理 .md） */
export function assertEditableMd(relPath) {
  const full = assertOperable(relPath);
  if (path.extname(full).toLowerCase() !== MD_EXT) {
    throw new PathError(`编辑器仅支持 .md 文件: ${relPath}`);
  }
  return full;
}
