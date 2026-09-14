/**
 * frontmatter 读写模块
 *
 * 用 yaml 包解析/序列化 markdown 的 YAML frontmatter，保留正文原样。
 * 若 yaml 解析失败（个别历史文件格式较怪），回退到与站点
 * web/.vuepress/utils/frontmatter-parser.ts 行为对齐的简易解析器，
 * 保证列表页仍能展示出 title/date 等基础字段。
 */
import YAML from 'yaml';

const DELIMITER = /^---\r?\n([\s\S]*?)\r?\n---/;

/**
 * 切分 markdown 为 frontmatter 文本与正文。
 * 找不到 frontmatter 时 raw 为 null，正文为全文。
 */
export function splitFrontmatter(content) {
  const m = content.match(DELIMITER);
  if (!m) return { raw: null, body: content };
  return { raw: m[1], body: content.slice(m[0].length) };
}

/** 用 yaml 包解析 frontmatter 文本为对象。 */
export function parseFrontmatter(raw, relPath = '') {
  if (raw === null || raw === undefined) return { ok: true, data: {}, error: null };
  try {
    const data = YAML.parse(raw);
    return { ok: true, data: data && typeof data === 'object' ? data : {}, error: null };
  } catch (err) {
    // yaml 解析失败时降级到简易解析，保证列表可用
    return { ok: false, data: fallbackParse(raw), error: err.message, relPath };
  }
}

/**
 * 把 frontmatter 对象序列化为 YAML 文本（不含 --- 分隔符）。
 * lineWidth: 0 表示不自动换行，保持与仓库现有单行描述风格一致。
 */
export function stringifyFrontmatter(obj) {
  if (!obj || typeof obj !== 'object' || Object.keys(obj).length === 0) return '';
  return YAML.stringify(obj, { lineWidth: 0 });
}

/** 由 frontmatter 文本 + 正文重建完整 markdown。 */
export function buildMarkdown(frontmatterRaw, body) {
  const yaml = (frontmatterRaw || '').trimEnd();
  let bodyText = body ?? '';
  // 确保正文与 frontmatter 分隔符之间有换行，避免 `---正文` 粘连
  if (bodyText !== '' && !bodyText.startsWith('\n')) {
    bodyText = '\n' + bodyText;
  }
  if (yaml === '') return `---\n\n---\n` + bodyText;
  return `---\n${yaml}\n---` + bodyText;
}

/**
 * 简易解析器：与站点 frontmatter-parser.ts 对齐，处理扁平键值、
 * 简单列表、引号字符串、布尔与内联数组。
 * 仅在 yaml 解析失败时兜底使用。
 */
function fallbackParse(raw) {
  const fm = {};
  const lines = raw.replace(/\r/g, '').split('\n');
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([\w][\w.-]*):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    const val = m[2].trim();
    if (val === '') {
      // 多行列表：后续缩进的 `- ` 行
      const items = [];
      let j = i + 1;
      while (j < lines.length) {
        const itemMatch = lines[j].match(/^\s+-\s+(.+)$/);
        if (!itemMatch) break;
        items.push(unquote(itemMatch[1].trim()));
        j++;
      }
      if (items.length > 0) {
        fm[key] = items;
        i = j - 1;
        continue;
      }
    }
    fm[key] = parseValue(val);
  }
  return fm;
}

function unquote(value) {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

function parseValue(raw) {
  const val = raw.trim();
  if (val === 'true') return true;
  if (val === 'false') return false;
  if (val.startsWith('[') && val.endsWith(']')) {
    return val
      .slice(1, -1)
      .split(',')
      .map((s) => unquote(s.trim()))
      .filter(Boolean);
  }
  return unquote(val);
}
