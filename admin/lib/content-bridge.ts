/**
 * content 模块桥接（ADR-0003 follow-up 3b）。
 *
 * admin 后端经此访问 web/.vuepress/content——路径约定、删除回收站
 * （web/.trash）、索引刷新的真理都在 content 模块。
 * 保存后的索引刷新为异步后台执行（gen-sidebar 全量约数秒），
 * 不阻塞编辑器返回。
 */
import { content, sectionDirs } from '../../web/.vuepress/content/index.ts';
import { log } from './log.js';

export const contentBridge = {
  list: content.list.bind(content),
  read: content.read.bind(content),
  deleteMany: content.deleteMany.bind(content),
  sectionDirs,
  refreshIndex: content.refreshIndex.bind(content),

  /** 保存/删除后的异步刷新：立即返回，失败仅记日志不打断操作。 */
  refreshIndexInBackground(op: string): void {
    Promise.resolve()
      .then(() => content.refreshIndex())
      .then(() => log('REFRESH_INDEX', [op]))
      .catch((err: Error) => log('REFRESH_INDEX_FAILED', [op, err.message]));
  },
};
