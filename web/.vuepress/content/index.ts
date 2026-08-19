/**
 * Content Module 生产实例（ADR-0003）。
 *
 * section 目录列表从 taxonomy 的 section 节点派生 —— 新增章节时
 * content 模块的管辖范围随之扩展，无需在此维护第二份清单。
 * 写操作后自动重跑生成管线（runGenerationCli 已幂等）。
 */
import path from 'path';
import { fileURLToPath } from 'url';
import { runGenerationCli } from '../generate.ts';
import { createContentModule } from './module.ts';
import { sectionDirsFromPaths } from './router.ts';
import { taxonomy } from '../taxonomy/index.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.join(__dirname, '..', '..');

export const sectionDirs = sectionDirsFromPaths(
  taxonomy.byKind('section', null).map((s) => s.path.zh ?? ''),
);

export const content = createContentModule({
  webRoot,
  sectionDirs,
  refreshIndex: runGenerationCli,
});
