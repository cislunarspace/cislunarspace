/**
 * 操作日志模块
 *
 * 每次增删改都追加记录到 admin/logs/manager.log。
 * 行格式：[ISO 时间] 操作 :: 路径1 | 路径2 | ...
 */
import fs from 'node:fs';
import path from 'node:path';
import { LOG_DIR } from './paths.js';

const LOG_FILE = path.join(LOG_DIR, 'manager.log');

function ensureLogDir() {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

/** 追加一条操作日志，并同时打印到控制台便于观察。 */
export function log(action, details = []) {
  ensureLogDir();
  const ts = new Date().toISOString();
  const detailStr = details.length ? ' :: ' + details.join(' | ') : '';
  const line = `[${ts}] ${action}${detailStr}\n`;
  try {
    fs.appendFileSync(LOG_FILE, line, 'utf8');
  } catch (err) {
    // 日志写失败不应中断主流程，仅在控制台提示
    console.error('[admin] 写日志失败:', err.message);
  }
  console.log(line.trimEnd());
}

/** 返回日志文件绝对路径（供前端展示用） */
export function getLogPath() {
  ensureLogDir();
  return LOG_FILE;
}
