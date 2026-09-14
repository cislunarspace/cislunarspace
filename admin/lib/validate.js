/**
 * YAML 校验模块
 *
 * 复用 yaml 包内置解析做 frontmatter 校验，
 * 返回 valid / errors 供前端即时展示。
 */
import fs from 'node:fs';
import YAML from 'yaml';

/**
 * 校验一段 frontmatter YAML 文本（不含 --- 分隔符）。
 * 空内容视为合法（对象为空）。
 */
export function validateYaml(frontmatterRaw) {
  const errors = [];
  let data = null;
  const raw = (frontmatterRaw ?? '').trim();
  if (raw === '') {
    return { valid: true, errors, data: {} };
  }
  try {
    data = YAML.parse(raw);
  } catch (err) {
    return { valid: false, errors: [err.message], data: null };
  }
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    return { valid: false, errors: ['frontmatter 必须是键值对对象'], data: null };
  }
  if (!('title' in data) || data.title === undefined || data.title === null || data.title === '') {
    errors.push('缺少 title 字段（建议补充）');
  }
  return { valid: errors.length === 0, errors, data };
}

/** 校验一个 web/ 内 markdown 文件的 frontmatter，供接口复用。 */
export function validateFile(fullPath, relPath) {
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    if (content.charCodeAt(0) === 0xfeff) content = content.slice(1);
    const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) return { valid: true, errors: [], hasFrontmatter: false, path: relPath };
    const res = validateYaml(m[1]);
    return { ...res, hasFrontmatter: true, path: relPath };
  } catch (err) {
    return { valid: false, errors: [err.message], hasFrontmatter: true, path: relPath };
  }
}
