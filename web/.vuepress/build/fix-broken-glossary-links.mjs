// 修复指向【已删/改名词典词条】的链接。两步合一：
// 1) 恢复改名：按链接文字匹配现存词条标题（核心名精确匹配 + 括号缩写匹配），
//    能对上就把链接更新到现存 slug（保留链接、保留 /en/ 前缀）。
// 2) 纯删：对不上的（真删的），退化成纯文本（保留文字、去 ](url)）。
// 用法：node fix-broken-glossary-links.mjs           # dry-run
//       node fix-broken-glossary-links.mjs --write   # 真改
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const WRITE = process.argv.includes('--write');

// ── 收集现存词典词条：slug + 标题 ──
function walkMd(dir, out) {
  let e;
  try {
    e = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const x of e) {
    const f = path.join(dir, x.name);
    if (x.isDirectory()) walkMd(f, out);
    else if (x.isFile() && x.name.endsWith('.md') && !x.name.startsWith('_')) out.push(f);
  }
}
const glossFiles = [];
walkMd(path.join(root, 'glossary'), glossFiles);
walkMd(path.join(root, 'en/glossary'), glossFiles);

// core：去括号内容（全角／半角）、trim
const coreRe = /[（(][^）)]*[）)]/g;
const norm = (s) => (s || '').replace(coreRe, '').replace(/\s+/g, '').toLowerCase().trim();

const titleCoreMap = new Map(); // core -> {cat, slug}
const abbrevMap = new Map(); // abbrev -> {cat, slug}（仅当缩写唯一）
const abbrevCount = new Map(); // abbrev -> 出现次数（去歧义）
const entries = []; // {cat, slug, title, core, abbrevs}
for (const f of glossFiles) {
  const m = f.match(/glossary\/([^/]+)\/([^/]+)\.md$/);
  if (!m) continue;
  const cat = m[1],
    slug = m[2];
  let title = '';
  try {
    const c = readFileSync(f, 'utf8');
    const tm = c.match(/^---[\s\S]*?^title:\s*(.+)$/m);
    if (tm) title = tm[1].replace(/^["']|["']$/g, '').trim();
  } catch {}
  const core = norm(title);
  if (core) {
    if (!titleCoreMap.has(core)) titleCoreMap.set(core, { cat, slug });
  }
  // 抽括号里的缩写
  const abbrs = [];
  let am;
  const parensRe = /[（(]([^）)]*)[）)]/g;
  while ((am = parensRe.exec(title || '')) !== null) {
    for (const part of am[1].split(/[,，、]/)) {
      const p = part.trim();
      // 缩写：ASCII 字母/数字、短
      if (p && /^[\x00-\x7f]{1,12}$/.test(p) && /[A-Za-z]/.test(p)) abbrs.push(p);
    }
  }
  for (const a of abbrs) abbrevCount.set(a, (abbrevCount.get(a) || 0) + 1);
  entries.push({ cat, slug, title, core, abbrs });
}
for (const e of entries)
  for (const a of e.abbrs) {
    if (abbrevCount.get(a) === 1 && !abbrevMap.has(a))
      abbrevMap.set(a, { cat: e.cat, slug: e.slug });
  }
console.error(
  `[info] 现存词条 ${entries.length}；title core ${titleCoreMap.size}；唯一缩写 ${abbrevMap.size}；模式 ${WRITE ? 'WRITE' : 'DRY-RUN'}`,
);

// ── 扫描源 .md，修断链 ──
function* allMd(dir) {
  let e;
  try {
    e = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const x of e) {
    if (['node_modules', '.vuepress', 'dist', '.cache', '.temp', '.git'].includes(x.name)) continue;
    const f = path.join(dir, x.name);
    if (x.isDirectory()) yield* allMd(f);
    else if (x.isFile() && x.name.endsWith('.md')) yield f;
  }
}
const existingKeys = new Set(entries.map((e) => `${e.cat}/${e.slug}`));
const linkRe = /(!?)\[([^\]]*)\]\(([^)]+)\)/g;
let recovered = 0,
  unlinked = 0,
  filesChanged = 0;
const recSamples = [],
  delSamples = [];

for (const f of allMd(root)) {
  let content;
  try {
    content = readFileSync(f, 'utf8');
  } catch {
    continue;
  }
  let out = '',
    last = 0,
    m,
    changed = false;
  linkRe.lastIndex = 0;
  while ((m = linkRe.exec(content)) !== null) {
    const [full, bang, text, rawUrl] = m;
    if (bang === '!') continue;
    const urlPath = rawUrl.split(/\s+/)[0].replace(/[?#].*$/, '');
    const g = urlPath.match(/^(\/?(?:en\/)?)glossary\/([^/]+)(?:\/([^/?#]+))?\/?$/);
    if (!g) continue;
    const prefix = g[1],
      cat = g[2],
      slug = g[3];
    // 有 slug 且现存 → 保留；分类索引页（无 slug，或 slug 不存在）→ 当断链处理
    if (slug && existingKeys.has(`${cat}/${slug}`)) continue;
    // 断链：尝试恢复
    let target = null;
    const textCore = norm(text);
    if (textCore && titleCoreMap.has(textCore)) target = titleCoreMap.get(textCore);
    else if (abbrevMap.has(text)) target = abbrevMap.get(text);
    let replacement;
    if (target) {
      replacement = `[${text}](${prefix}glossary/${target.cat}/${target.slug}/)`;
      recovered++;
      if (recSamples.length < 10)
        recSamples.push(
          `${path.relative(root, f)}: [${text.slice(0, 24)}] → ${target.cat}/${target.slug}`,
        );
    } else {
      replacement = text;
      unlinked++;
      if (delSamples.length < 6)
        delSamples.push(
          `${path.relative(root, f)}: [${text.slice(0, 24)}](${cat}/${slug}) → 纯文本`,
        );
    }
    out += content.slice(last, m.index) + replacement;
    last = m.index + full.length;
    changed = true;
  }
  if (changed) {
    out += content.slice(last);
    filesChanged++;
    if (WRITE) writeFileSync(f, out);
  }
}
console.log(
  `${WRITE ? '已改' : '会改'} ${filesChanged} 个文件。恢复改名 ${recovered} 处，纯删 ${unlinked} 处。`,
);
console.log('--- 恢复改名抽样 ---');
for (const s of recSamples) console.log('  ' + s);
console.log('--- 纯删抽样 ---');
for (const s of delSamples) console.log('  ' + s);
