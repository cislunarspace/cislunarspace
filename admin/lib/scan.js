/**
 * 内容扫描模块
 *
 * 负责按三类内容（Space News / Glossary / 知识库章节）扫描 web/ 下的
 * markdown 文件，读取 frontmatter，按中英镜像（同 slug）分组输出。
 */
import fs from 'node:fs';
import path from 'node:path';
import { WEB_ROOT } from './paths.js';
import { splitFrontmatter, parseFrontmatter } from './frontmatter.js';

/** 知识库章节目录（web/ 下的顶层目录，不含 en/ 镜像与特殊页面） */
export const KB_SECTIONS = [
  'what-is-cislunarspace',
  'cislunar-orbits',
  'research-frontiers',
  'background',
  'resources-tools',
  'satellite-simulation',
];

/** 扫描时跳过的目录 */
const SKIP_DIRS = new Set(['figures', 'node_modules', '.vuepress', '.git', '.gitee', 'dist', '.temp']);

/** 读取一个 markdown 文件并解析 frontmatter，文件不存在返回 null。 */
export function readMd(relPath) {
  const full = path.join(WEB_ROOT, relPath);
  if (!fs.existsSync(full)) return null;
  let content = fs.readFileSync(full, 'utf8');
  if (content.charCodeAt(0) === 0xfeff) content = content.slice(1);
  const { raw, body } = splitFrontmatter(content);
  const parsed = parseFrontmatter(raw ?? '', relPath);
  return {
    relPath,
    content,
    rawFrontmatter: raw ?? '',
    body,
    fm: parsed.data,
    yamlOk: parsed.ok,
    yamlError: parsed.error,
  };
}

function listDirs(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

function listMdFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((f) => f.isFile() && f.name.endsWith('.md'))
    .map((f) => f.name);
}

/** 解析相对路径的类别信息 */
export function classify(rel) {
  let m = rel.match(/^(en\/)?space-news\/(\d{4})\/(\d{2})\/([^/]+)\.md$/);
  if (m) {
    return { kind: 'news', year: m[2], month: m[3], stem: m[4], lang: m[1] ? 'en' : 'zh' };
  }
  m = rel.match(/^(en\/)?glossary\/([^/]+)\/([^/]+)\.md$/);
  if (m) {
    return { kind: 'glossary', cat: m[2], stem: m[3], lang: m[1] ? 'en' : 'zh' };
  }
  return { kind: 'kb', stem: path.posix.basename(rel, '.md'), lang: rel.startsWith('en/') ? 'en' : 'zh' };
}

function pairKeyOf(rel, cls) {
  if (cls.kind === 'news') return `news:${cls.year}/${cls.month}/${cls.stem}`;
  if (cls.kind === 'glossary') return `glossary:${cls.cat}/${cls.stem}`;
  const stripped = rel.startsWith('en/') ? rel.slice(3) : rel;
  return `kb:${stripped.replace(/\.md$/, '')}`;
}

function sectionOf(rel, cls) {
  if (cls.kind === 'news') return `${cls.year}/${cls.month}`;
  if (cls.kind === 'glossary') return cls.cat;
  const stripped = rel.startsWith('en/') ? rel.slice(3) : rel;
  return stripped.split('/')[0] || '';
}

/** 构建单个条目的展示信息 */
function buildItem(rel) {
  const cls = classify(rel);
  const info = readMd(rel);
  const fm = info?.fm ?? {};
  const stem = cls.stem;
  return {
    relPath: rel,
    lang: cls.lang,
    kind: cls.kind,
    pairKey: pairKeyOf(rel, cls),
    section: sectionOf(rel, cls),
    stem,
    title: typeof fm.title === 'string' && fm.title ? fm.title : stem,
    date: typeof fm.date === 'string' ? fm.date : '',
    category: Array.isArray(fm.category)
      ? fm.category
      : fm.category
        ? [fm.category]
        : [],
    image: typeof fm.image === 'string' ? fm.image : '',
    draft: fm.draft === true,
    yamlOk: info?.yamlOk ?? true,
    yamlError: info?.yamlError ?? null,
  };
}

/** 通用：扫描某 zh 根目录 + 其 en/ 镜像目录下同结构的 md 文件 */
function scanBothLocales(zhRoot) {
  // zhRoot: 'space-news' | 'glossary'，en 镜像为 'en/<zhRoot>'
  const roots = [zhRoot, `en/${zhRoot}`];
  const out = [];
  for (const base of roots) {
    const baseAbs = path.join(WEB_ROOT, base);
    if (!fs.existsSync(baseAbs)) continue;
    for (const year of listDirs(baseAbs)) {
      if (!/^\d{4}$/.test(year)) continue;
      for (const month of listDirs(path.join(baseAbs, year))) {
        if (!/^\d{2}$/.test(month)) continue;
        const dir = path.join(baseAbs, year, month);
        for (const f of listMdFiles(dir)) {
          if (f.toLowerCase() === 'readme.md') continue;
          out.push(buildItem(`${base}/${year}/${month}/${f}`));
        }
      }
    }
  }
  return out;
}

function scanNews() {
  return scanBothLocales('space-news');
}

function scanGlossary() {
  const out = [];
  for (const base of ['glossary', 'en/glossary']) {
    const baseAbs = path.join(WEB_ROOT, base);
    if (!fs.existsSync(baseAbs)) continue;
    for (const cat of listDirs(baseAbs)) {
      if (cat === 'figures') continue;
      for (const f of listMdFiles(path.join(baseAbs, cat))) {
        if (f.toLowerCase() === 'readme.md') continue;
        out.push(buildItem(`${base}/${cat}/${f}`));
      }
    }
  }
  return out;
}

/** 递归扫描知识库章节目录下的 md 文件 */
function walkSection(baseRel, out) {
  const dir = path.join(WEB_ROOT, baseRel);
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (SKIP_DIRS.has(e.name)) continue;
    const rel = baseRel ? `${baseRel}/${e.name}` : e.name;
    if (e.isDirectory()) {
      walkSection(rel, out);
    } else if (e.isFile() && e.name.endsWith('.md') && e.name.toLowerCase() !== 'readme.md') {
      out.push(buildItem(rel));
    }
  }
}

function scanKb() {
  const out = [];
  for (const section of KB_SECTIONS) {
    walkSection(section, out);
    walkSection(`en/${section}`, out);
  }
  return out;
}

/**
 * 列出某类内容，按中英镜像分组。
 * opts: { q?: string 关键词; cat?: string 分类 }
 * 返回格式：[{ pairKey, kind, zh: item|null, en: item|null, total: 2|1 }]
 */
export function listContents(kind, opts = {}) {
  const q = typeof opts === 'string' ? opts : (opts.q || '');
  const cat = typeof opts === 'object' ? (opts.cat || '') : '';
  const items = kind === 'news' ? scanNews() : kind === 'glossary' ? scanGlossary() : scanKb();

  const map = new Map();
  for (const it of items) {
    if (q) {
      const needle = q.toLowerCase();
      const hay = `${it.title} ${it.relPath} ${it.stem} ${it.section} ${it.category.join(' ')}`.toLowerCase();
      if (!hay.includes(needle)) continue;
    }
    if (cat) {
      // news 按 category 标签筛；glossary 按目录(section)；kb 按顶层章节
      const hit = kind === 'news' ? it.category.includes(cat) : it.section === cat;
      if (!hit) continue;
    }
    if (!map.has(it.pairKey)) {
      map.set(it.pairKey, { pairKey: it.pairKey, kind: it.kind, zh: null, en: null });
    }
    map.get(it.pairKey)[it.lang] = it;
  }
  const list = [...map.values()];
  list.sort((a, b) => {
    const ta = (a.zh?.title ?? a.en?.title ?? '').toLowerCase();
    const tb = (b.zh?.title ?? b.en?.title ?? '').toLowerCase();
    return ta.localeCompare(tb, 'zh-Hans-CN');
  });
  return list;
}

/** 校验某类内容的数量（供接口返回统计） */
export function countByKind(kind) {
  return listContents(kind).length;
}

/**
 * 列出某类内容的全部分类及条目数（用于分类筛选下拉）。
 * news → frontmatter category 标签；glossary → 目录；kb → 顶层章节。
 * 返回 [{ name, count }]，按数量降序。
 */
export function listCategories(kind) {
  const items = kind === 'news' ? scanNews() : kind === 'glossary' ? scanGlossary() : scanKb();
  const counts = new Map();
  for (const it of items) {
    const names = kind === 'news' ? it.category : [it.section];
    for (const n of names) {
      if (!n) continue;
      counts.set(n, (counts.get(n) || 0) + 1);
    }
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
