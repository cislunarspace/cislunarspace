/**
 * Unified WeChat share tool — single source of truth for audit and inject.
 *
 * CLI:
 *   --dry-run   print report, no mutations
 *   --inject    mutate files missing/incomplete wechatShare
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const root = path.resolve(__dirname, '../..')

// ── Shared utilities ──────────────────────────────────────────────────────────

const skipRel = new Set(['docs/seo-frontmatter-template.md'])

function walk(dir, files = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.vuepress') continue
    const p = path.join(dir, e.name)
    if (e.isDirectory()) walk(p, files)
    else if (e.name.endsWith('.md')) files.push(p)
  }
  return files
}

/**
 * @returns {{ raw: string, body: string, end: number } | null}
 */
function extractFrontmatter(content) {
  if (!content.startsWith('---\n')) return null
  const end = content.indexOf('\n---\n', 4)
  if (end === -1) return null
  return {
    raw: content.slice(4, end),
    body: content.slice(end + 5),
    end,
  }
}

/**
 * @returns {string | null}
 */
function getScalar(raw, key) {
  const re = new RegExp(`^${key}:\\s*(.*)$`, 'm')
  const m = raw.match(re)
  if (!m) return null
  let v = m[1].trim()
  if (!v.length) return ''
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
    return v.slice(1, -1)
  return v
}

function wechatShareComplete(raw) {
  if (!/^wechatShare:/m.test(raw)) return false
  return (
    /^\s+title:/m.test(raw)
    && /^\s+desc:/m.test(raw)
    && /^\s+image:/m.test(raw)
  )
}

function clipDesc(s, max = 220) {
  if (s.length <= max) return s
  return `${s.slice(0, max - 1)}…`
}

function yamlJson(s) {
  return JSON.stringify(s ?? '')
}

// ── WechatShareIntake interface ────────────────────────────────────────────────

/**
 * @param {string} absPath
 * @returns {{
 *   needsShare: boolean,
 *   currentMeta?: { title?: string, desc?: string, image?: string, missing: string[] }
 * }}
 */
function analyzeFile(absPath) {
  const rel = path.relative(root, absPath).replace(/\\/g, '/')
  const content = fs.readFileSync(absPath, 'utf8')
  const fm = extractFrontmatter(content)

  if (!fm || !fm.raw.trim()) return { needsShare: false }

  if (/^wechatShare:/m.test(fm.raw)) {
    if (wechatShareComplete(fm.raw)) return { needsShare: false }
    const missing = []
    if (!/^\s+title:/m.test(fm.raw)) missing.push('title')
    if (!/^\s+desc:/m.test(fm.raw)) missing.push('desc')
    if (!/^\s+image:/m.test(fm.raw)) missing.push('image')
    return {
      needsShare: true,
      currentMeta: { missing },
    }
  }

  return { needsShare: true }
}

// ── Dry-run adapter ────────────────────────────────────────────────────────────

function runDryRun() {
  const report = {
    noTitle: [],
    noDescription: [],
    noWechatShare: [],
    incompleteWechatShare: [],
  }

  for (const f of walk(root).sort()) {
    const rel = path.relative(root, f).replace(/\\/g, '/')
    if (skipRel.has(rel)) continue

    const content = fs.readFileSync(f, 'utf8')
    const fm = extractFrontmatter(content)
    if (!fm || !fm.raw.trim()) continue

    const title = getScalar(fm.raw, 'title')
    const desc = getScalar(fm.raw, 'description')
    const wsOk = wechatShareComplete(fm.raw)

    if (!title) report.noTitle.push(rel)
    if (!desc) report.noDescription.push(rel)
    if (!/^wechatShare:/m.test(fm.raw)) report.noWechatShare.push(rel)
    else if (!wsOk) report.incompleteWechatShare.push(rel)
  }

  console.log(JSON.stringify(report, null, 2))
  console.error(
    'counts:',
    Object.fromEntries(Object.entries(report).map(([k, v]) => [k, v.length])),
  )
}

// ── Inject adapter ─────────────────────────────────────────────────────────────

function runInject() {
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

    const title = getScalar(fm.raw, 'title')
    if (!title) {
      skipped++
      continue
    }

    let desc = getScalar(fm.raw, 'description') || ''
    desc = clipDesc(desc.trim() || title)
    const image = getScalar(fm.raw, 'image')
    const img = image && image.length ? image : '/logo.png'

    const block =
      `wechatShare:\n  title: ${yamlJson(title)}\n  desc: ${yamlJson(desc)}\n  image: ${yamlJson(img)}\n`

    const body = content.slice(fm.end + 5)
    const newContent = `---\n${fm.raw.trimEnd()}\n${block}---\n${body}`
    fs.writeFileSync(f, newContent, 'utf8')
    updated++
  }

  console.error(`inject-wechat-share: updated ${updated}, skipped ${skipped}`)
}

// ── CLI entry point ───────────────────────────────────────────────────────────

const [,, mode] = process.argv
if (mode === '--dry-run') {
  runDryRun()
} else if (mode === '--inject') {
  runInject()
} else {
  console.error('Usage: wechat-share-tool.mjs [--dry-run|--inject]')
  process.exit(1)
}
