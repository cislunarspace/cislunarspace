/**
 * Unified WeChat share tool — single source of truth for audit and inject.
 *
 * Consumes the shared page-metadata-core normalizer (same as og-meta-plugin
 * and the client share composable) for title/desc/image resolution, so the
 * audit and inject pipeline cannot drift from build-time / runtime share data.
 *
 * CLI:
 *   --dry-run   print report, no mutations
 *   --inject    mutate files missing/incomplete wechatShare
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { resolveWechatShareFields } from '../page-metadata-core.mjs'

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
 * Light YAML scalar reader — handles top-level `key: value` with optional quoting.
 * Sufficient for the small set of frontmatter keys we care about (title /
 * description / image). Returns `null` when the key is absent, `''` for an
 * empty value.
 *
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

/**
 * Extract a minimal frontmatter object for the shared normalizer.
 *
 * The audit/inject tool reads raw YAML rather than a parsed page object, so
 * we hand-extract the three keys the normalizer reads (plus nested
 * `wechatShare.*` if present).
 */
function frontmatterForNormalizer(raw) {
  const title = getScalar(raw, 'title') ?? undefined
  const description = getScalar(raw, 'description') ?? undefined
  const image = getScalar(raw, 'image') ?? undefined

  // Nested wechatShare fields use indented keys; reuse the same scalar reader
  // but with the leading whitespace prefix included in the line.
  const wsTitle = readNested(raw, 'wechatShare', 'title')
  const wsDesc = readNested(raw, 'wechatShare', 'desc')
  const wsImage = readNested(raw, 'wechatShare', 'image')
  const wechatShare = (wsTitle != null || wsDesc != null || wsImage != null)
    ? {
        ...(wsTitle != null ? { title: wsTitle } : {}),
        ...(wsDesc != null ? { desc: wsDesc } : {}),
        ...(wsImage != null ? { image: wsImage } : {}),
      }
    : undefined

  return {
    ...(title != null ? { title } : {}),
    ...(description != null ? { description } : {}),
    ...(image != null ? { image } : {}),
    ...(wechatShare ? { wechatShare } : {}),
  }
}

function readNested(raw, parent, child) {
  // Match the parent key block, then look for an indented child within it.
  const block = new RegExp(`^${parent}:\\s*\\n((?:\\s+.+\\n?)+)`, 'm')
  const m = raw.match(block)
  if (!m) return null
  const childRe = new RegExp(`^\\s+${child}:\\s*(.*)$`, 'm')
  const cm = m[1].match(childRe)
  if (!cm) return null
  let v = cm[1].trim()
  if (!v.length) return ''
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
    return v.slice(1, -1)
  return v
}

function yamlJson(s) {
  return JSON.stringify(s ?? '')
}

// ── Dry-run adapter ────────────────────────────────────────────────────────────

export function runDryRun() {
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

export function runInject() {
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

    const fmObj = frontmatterForNormalizer(fm.raw)
    const share = resolveWechatShareFields(fmObj)
    if (!share) {
      skipped++
      continue
    }

    const block =
      `wechatShare:\n  title: ${yamlJson(share.title)}\n  desc: ${yamlJson(share.desc)}\n  image: ${yamlJson(share.image)}\n`

    const body = content.slice(fm.end + 5)
    const newContent = `---\n${fm.raw.trimEnd()}\n${block}---\n${body}`
    fs.writeFileSync(f, newContent, 'utf8')
    updated++
  }

  console.error(`inject-wechat-share: updated ${updated}, skipped ${skipped}`)
}

// ── CLI entry point ───────────────────────────────────────────────────────────

// Only invoke when run as `node wechat-share-tool.mjs --…`, not when imported.
if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith('wechat-share-tool.mjs')) {
  const [,, mode] = process.argv
  if (mode === '--dry-run') {
    runDryRun()
  } else if (mode === '--inject') {
    runInject()
  } else if (mode) {
    console.error('Usage: wechat-share-tool.mjs [--dry-run|--inject]')
    process.exit(1)
  }
}
