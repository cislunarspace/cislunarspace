// web/.vuepress/build/check-glossary-frontmatter.ts
// Glossary 词条 frontmatter 质量门：校验知识库字段 aliases / related。
//
// Usage:
//   tsx .vuepress/build/check-glossary-frontmatter.ts
//
// 规则（渐进采用：未声明字段的词条跳过该字段校验）：
//   aliases           非空字符串数组，项不重复
//   related[].ref     词条 slug 路径（如 orbits/halo-orbit），
//                     指向的词条文件必须存在
//   related[].relation ∈ {broader, transfer, related}（开放枚举）
//
// Exit codes:
//   0  no findings
//   1  findings found
//   2  invocation error

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml } from 'yaml';
import { runChecker } from './checker-runner';
import type { MarkdownFile } from '../utils/markdown-walker.ts';

const REF_PATTERN = /^[a-z0-9-]+(?:\/[a-z0-9-]+)+$/;
const GLOSSARY_ENTRY_PATTERN = /^glossary\/.+\/[^/]+\.md$/;
const ALLOWED_RELATIONS: Record<string, true> = {
  broader: true,
  transfer: true,
  related: true,
};
export interface GlossaryFrontmatterFinding {
  file: string;
  message: string;
}

/** 提取并解析 YAML frontmatter；缺失或解析失败返回 null。 */
function extractFrontmatter(content: string): Record<string, unknown> | null {
  if (!content.startsWith('---\n')) return null;
  const end = content.indexOf('\n---', 4);
  if (end === -1) return null;
  try {
    const parsed = parseYaml(content.slice(4, end));
    return typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)
      ? (parsed as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

interface RelatedItem {
  ref?: unknown;
  relation?: unknown;
}

export function scanGlossaryFrontmatter(
  files: MarkdownFile[],
  fileExists: (relPath: string) => boolean = () => true,
): GlossaryFrontmatterFinding[] {
  const findings: GlossaryFrontmatterFinding[] = [];

  const glossaryFiles = files.filter((f) => {
    if (!GLOSSARY_ENTRY_PATTERN.test(f.relPath)) return false;
    return !path.basename(f.relPath).startsWith('README');
  });

  for (const file of glossaryFiles) {
    const fm = extractFrontmatter(file.content);
    if (!fm) continue;
    const fail = (message: string) => findings.push({ file: file.relPath, message });

    if (fm.aliases !== undefined) {
      const aliases: unknown = fm.aliases;
      if (
        !Array.isArray(aliases) ||
        aliases.length === 0 ||
        aliases.some((a) => typeof a !== 'string' || a.trim() === '')
      ) {
        fail('aliases 必须是非空字符串数组');
      } else if (new Set(aliases).size !== aliases.length) {
        fail(`aliases 存在重复项：${(aliases as string[]).join('、')}`);
      }
    }

    if (fm.related !== undefined) {
      const related: unknown = fm.related;
      if (!Array.isArray(related) || related.length === 0) {
        fail('related 必须是非空数组');
        continue;
      }
      for (const raw of related) {
        if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
          fail(`related 条目必须是 { ref, relation } 对象，实际为：${JSON.stringify(raw)}`);
          continue;
        }
        const item = raw as RelatedItem;
        if (typeof item.ref !== 'string' || !REF_PATTERN.test(item.ref)) {
          fail(
            `related.ref 非法：${JSON.stringify(item.ref)}（应为词条 slug 路径，如 orbits/halo-orbit）`,
          );
        } else {
          if (!fileExists(`glossary/${item.ref}.md`)) {
            fail(`related.ref 指向的词条不存在：glossary/${item.ref}.md`);
          }
        }
        if (typeof item.relation !== 'string' || !ALLOWED_RELATIONS[item.relation]) {
          fail(
            `related.relation 非法：${JSON.stringify(item.relation)}（允许 ${Object.keys(ALLOWED_RELATIONS).join(' / ')}）`,
          );
        }
      }
    }
  }

  return findings;
}

// ── CLI entry via shared runner ──────────────────────────────────────────────

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1]);
if (isMain) {
  runChecker({
    name: 'check-glossary-frontmatter',
    description: 'Glossary entry frontmatter validator (aliases / related).',
    scanMessage: 'glossary entry frontmatter (aliases / related)',
    usageExamples: ['npx tsx .vuepress/build/check-glossary-frontmatter.ts'],
    defaultSeverity: 'error',
    supportedSeverities: ['error'],
    scriptDir: __dirname,
    scan: (files, { webRoot }) =>
      scanGlossaryFrontmatter(files, (rel) => fs.existsSync(path.join(webRoot, rel))),
    formatTerminal: (findings) => ({
      summary:
        findings.length === 0
          ? 'No frontmatter findings. All declared aliases/related fields are valid.'
          : `Found ${findings.length} frontmatter finding(s):`,
      details: findings.map((f) => `  ${f.file}: ${f.message}`),
    }),
    buildJsonReport: (findings) => ({ count: findings.length, findings }),
    reportPath: 'glossary-frontmatter-report.json',
    computeExitCode: (findings) => (findings.length > 0 ? 1 : 0),
  });
}
