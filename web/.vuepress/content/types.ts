/**
 * 内容操作模块（Content Module，ADR-0003）的类型定义。
 *
 * taxonomy 回答「站点结构是什么」；content 回答「内容如何被安全地增删改查」。
 * 两个内容写入者（admin GUI、agent/人工）都通过本模块操作内容。
 */

/** 内容族：每类内容的路径约定与 frontmatter 规则各不相同。 */
export type ContentFamily = 'glossary' | 'kb-section';

export type ContentLocale = 'zh' | 'en';

/** 一条内容条目的路由信息，由 router 从相对路径推导。 */
export interface ContentRoute {
  /** 相对 web/ 的 md 路径，如 'glossary/fundamentals/nrho.md'。 */
  relPath: string;
  family: ContentFamily;
  locale: ContentLocale;
  /** 双语对应文件的相对路径（目录约定推导）；两侧各推得对方。 */
  counterpartPath: string;
}

/** list() 返回的条目视图：路由 + frontmatter 摘要。 */
export interface ContentEntry extends ContentRoute {
  /** 双语对应文件是否存在于磁盘。 */
  counterpartExists: boolean;
  frontmatter: Record<string, unknown>;
  /** frontmatter 解析失败时的错误信息（条目仍列出，便于修复）。 */
  frontmatterError?: string;
}

/** read() 返回的完整文档。 */
export interface ContentDoc {
  frontmatter: Record<string, unknown>;
  body: string;
}

/** write() 的局部更新：只给要改的部分，其余保持原样。 */
export interface ContentUpdate {
  /** 键级合并：给出的键覆盖旧值，未给出的键保留。 */
  frontmatter?: Record<string, unknown>;
  body?: string;
}

export interface DeleteOptions {
  /** 连同双语对应文件一起删除（不存在时静默跳过）。 */
  withCounterpart: boolean;
}

export interface DeleteReport {
  /** 已删除（移入回收站）的相对路径，含双语对应文件。 */
  deletedFiles: string[];
  /** 回收站目录（相对 webRoot）。 */
  trashedTo: string;
  /** 被清理索引行的 README 文件与行数。 */
  readmeLinesRemoved: Array<{ file: string; count: number }>;
  /** 不识别或不存在而跳过的路径。 */
  skipped: string[];
}

export interface ContentModule {
  /** 列出一个内容族的全部条目（含配对状态与 frontmatter 摘要）。 */
  list(family: ContentFamily): ContentEntry[];
  /** 读一篇：frontmatter + 正文。路径不被 router 识别时抛错。 */
  read(relPath: string): ContentDoc;
  /** 改一篇（须已存在）：局部合并落盘，写后触发索引刷新。 */
  write(relPath: string, next: ContentUpdate): void;
  /** 删一篇：移入回收站、清 README 索引行、刷新索引。 */
  delete(relPath: string, opts: DeleteOptions): DeleteReport;
  /** 批量删除：回收站共用一个时间戳目录，索引只在结束时刷新一次。 */
  deleteMany(relPaths: readonly string[], opts: DeleteOptions): DeleteReport;
  /** 重跑派生索引生成。write 内部已调用；幂等。 */
  refreshIndex(): void;
}
