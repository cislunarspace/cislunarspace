/**
 * 为尚未配置 wechatShare 的 Markdown 注入 wechatShare（基于 title / description / image）。
 * 仅处理存在 YAML frontmatter 且含 title 的文件；已有 wechatShare 的跳过。
 */
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
  if (!content.startsWith('---\n')) return null
  const end = content.indexOf('\n---\n', 4)
  if (end === -1) return null
  return {
    raw: content.slice(4, end),
    end,
  }
}

function scalarLine(raw, key) {
  const re = new RegExp(`^${key}:\\s*(.*)$`, 'm')
  const m = raw.match(re)
  if (!m) return null
  let v = m[1].trim()
  if (!v.length) return ''
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
    return v.slice(1, -1)
  return v
}

function clipDesc(s, max = 220) {
  if (s.length <= max) return s
  return `${s.slice(0, max - 1)}…`
}

function yamlJson(s) {
  return JSON.stringify(s ?? '')
}

const skipRel = new Set(['docs/seo-frontmatter-template.md'])

let updated = 0
let skipped = 0

for (const f of walk(root).sort()) {
  const rel = path.relative(root, f).replace(/\\/g, '/')
  if (skipRel.has(rel)) continue

  const content = fs.readFileSync(f, 'utf8')
  const fm = extractFrontmatter(content)
  if (!fm) {
    skipped++
    continue
  }

  if (/^wechatShare:/m.test(fm.raw)) {
    skipped++
    continue
  }

  const title = scalarLine(fm.raw, 'title')
  if (!title) {
    skipped++
    continue
  }

  let desc = scalarLine(fm.raw, 'description') || ''
  desc = clipDesc(desc.trim() || title)
  const image = scalarLine(fm.raw, 'image')
  const img = image && image.length ? image : '/logo.png'

  const block =
    `wechatShare:\n  title: ${yamlJson(title)}\n  desc: ${yamlJson(desc)}\n  image: ${yamlJson(img)}\n`

  const body = content.slice(fm.end + 5)
  const newContent = `---\n${fm.raw.trimEnd()}\n${block}---\n${body}`
  fs.writeFileSync(f, newContent, 'utf8')
  updated++
}

console.error(`inject-wechat-share: updated ${updated}, skipped ${skipped}`)
