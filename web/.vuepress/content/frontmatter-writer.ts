/**
 * markdown 文档的读写与渲染（Content Module 的写侧工具）。
 *
 * YAML 的解析与序列化使用 yaml 包 —— 站点 frontmatter 大量使用嵌套
 * （wechatShare、og 等）与多行数组，utils/frontmatter-parser 的简化
 * 实现读侧覆盖不了，作为写侧往返会损坏这些结构，因此 content 模块
 * 不复用它。序列化不保留注释与空行 —— 现有内容不使用注释。
 */
import YAML from 'yaml';
import type { ContentDoc } from './types.ts';

const DELIMITER = /^---\r?\n([\s\S]*?)\r?\n---/;

/** 解析整篇 markdown（frontmatter 定界 + 正文）。无 frontmatter 时返回空对象。 */
export function parseMarkdownDoc(raw: string): ContentDoc {
  const m = raw.match(DELIMITER);
  if (!m) return { frontmatter: {}, body: raw };
  // 剥掉定界符后的全部前导空行（渲染约定 frontmatter 与正文间恰好一个空行，
  // 剥到首个非空行保证往返稳定；正文首行的空行在 markdown 中无语义）
  const body = raw.slice(m[0].length).replace(/^(?:\r?\n)+/, '');
  const frontmatter = YAML.parse(m[1]) as Record<string, unknown>;
  return { frontmatter: frontmatter ?? {}, body };
}

/** 渲染完整 markdown 文档：frontmatter 定界 + 正文。 */
export function renderMarkdown(doc: ContentDoc): string {
  const keys = Object.keys(doc.frontmatter);
  if (keys.length === 0) return doc.body;
  const yamlText = YAML.stringify(doc.frontmatter, { lineWidth: 0 }).replace(/\n$/, '');
  return `---\n${yamlText}\n---\n\n${doc.body}`;
}
