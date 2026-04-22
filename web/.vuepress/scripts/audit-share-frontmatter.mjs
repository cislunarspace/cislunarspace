import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.vuepress') continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, files)
    else if (e.name.endsWith('.md')) files.push(p)
  }
  return files
}

function extractFrontmatter(content) {
  if (!content.startsWith('---\n')) return { raw: '', body: content }
  const end = content.indexOf('\n---\n', 4)
  if (end === -1) return { raw: '', body: content }
  return {
    raw: content.slice(4, end),
    body: content.slice(end + 5),
  }
}

function hasKey(raw, key) {
  return new RegExp(`^${key}:`, 'm').test(raw)
}

function wechatShareComplete(raw) {
  if (!/^wechatShare:/m.test(raw)) return false
  return (
    /^\s+title:/m.test(raw)
    && /^\s+desc:/m.test(raw)
    && /^\s+image:/m.test(raw)
  )
}

const skipRel = new Set(['docs/seo-frontmatter-template.md'])

const files = walk(root).sort()
const report = {
  noTitle: [],
  noDescription: [],
  noWechatShare: [],
  incompleteWechatShare: [],
}

for (const f of files) {
  const rel = path.relative(root, f).replace(/\\/g, '/')
  if (skipRel.has(rel)) continue

  const content = fs.readFileSync(f, 'utf8')
  const { raw } = extractFrontmatter(content)
  if (!raw.trim()) continue

  const title = hasKey(raw, 'title')
  const desc = hasKey(raw, 'description')
  const wsOk = wechatShareComplete(raw)

  if (!title) report.noTitle.push(rel)
  if (!desc) report.noDescription.push(rel)
  if (!/^wechatShare:/m.test(raw)) report.noWechatShare.push(rel)
  else if (!wsOk) report.incompleteWechatShare.push(rel)
}

console.log(JSON.stringify(report, null, 2))
console.error(
  'counts:',
  Object.fromEntries(Object.entries(report).map(([k, v]) => [k, v.length]))
)
