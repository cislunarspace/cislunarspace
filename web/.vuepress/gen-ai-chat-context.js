/**
 * 为 AI 多阶段问答生成：
 * - ai-chat-index.json  仅 path + title（供导览/路由，轻量）
 * - ai-chat-context.json  path -> { title, text } 正文（按需拉取，供回答阶段）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webRoot = path.join(__dirname, '..')

const MAX_TEXT_PER_PAGE = 14000

function parseFrontmatterAndBody(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) {
    return { fm: {}, body: content }
  }
  const fm = {}
  const lines = match[1].split('\n')
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^([\w][\w.-]*):\s*(.*)$/)
    if (!m) continue
    const key = m[1]
    let val = m[2].trim()
    if (val === '') {
      const items = []
      let j = i + 1
      while (j < lines.length) {
        const itemMatch = lines[j].match(/^\s+-\s+(.+)$/)
        if (!itemMatch) break
        items.push(itemMatch[1].trim().replace(/^['"]|['"]$/g, ''))
        j++
      }
      if (items.length > 0) {
        fm[key] = items
        i = j - 1
        continue
      }
    }
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    if (val === 'true') val = true
    else if (val === 'false') val = false
    else if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map(s => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean)
    }
    fm[key] = val
  }
  return { fm, body: content.slice(match[0].length) }
}

function markdownToPlain(body) {
  let s = String(body)
  s = s.replace(/```[\s\S]*?```/g, '\n')
  s = s.replace(/`([^`]+)`/g, '$1')
  s = s.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1')
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
  s = s.replace(/\$\$[\s\S]+?\$\$/g, ' ')
  s = s.replace(/\\[\[\(][\s\S]+?\\[\]\)]/g, ' ')
  s = s.replace(/^#{1,6}\s+/gm, '')
  s = s.replace(/\*\*([^*]+)\*\*/g, '$1')
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2')
  s = s.replace(/^>\s?/gm, '')
  s = s.replace(/^\s*[-*+]\s+/gm, '• ')
  s = s.replace(/^\s*\d+\.\s+/gm, '')
  s = s.replace(/<\/[^>]+>/g, '\n')
  s = s.replace(/<[^>]+>/g, ' ')
  s = s.replace(/\n{3,}/g, '\n\n')
  return s.replace(/\s+\n/g, '\n').trim()
}

function fileToUrlPath(relFromWeb, fm) {
  if (fm.permalink) {
    let p = String(fm.permalink).trim()
    if (!p.startsWith('/')) p = `/${p}`
    if (!p.endsWith('/')) p = `${p}/`
    return p
  }
  const noMd = relFromWeb.replace(/\\/g, '/').replace(/\.md$/i, '')
  const lower = noMd.toLowerCase()
  if (lower === 'readme' || lower.endsWith('/readme')) {
    if (lower === 'readme') return '/'
    const base = noMd.replace(/\/README$/i, '')
    if (!base) return '/'
    return `/${base}/`
  }
  return `/${noMd}/`
}

function collectMarkdownFiles() {
  const out = []
  function walk(dir) {
    for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
      if (name.name.startsWith('.')) continue
      const full = path.join(dir, name.name)
      if (name.isDirectory()) {
        if (name.name === 'node_modules' || name.name === 'figures' || name.name === 'dist') continue
        if (name.name === '.vuepress') continue
        walk(full)
      } else if (/\.md$/i.test(name.name)) {
        out.push(full)
      }
    }
  }
  walk(webRoot)
  return out
}

export function generateAiChatContext() {
  const zh = {}
  const en = {}
  const indexZh = []
  const indexEn = []

  for (const abs of collectMarkdownFiles()) {
    const rel = path.relative(webRoot, abs).replace(/\\/g, '/')
    const content = fs.readFileSync(abs, 'utf-8')
    const { fm, body } = parseFrontmatterAndBody(content)
    if (fm.draft === true) continue
    if (rel.startsWith('.vuepress/')) continue

    const pagePath = fileToUrlPath(rel, fm)
    const title = (fm.title && String(fm.title)) || pagePath
    const text = markdownToPlain(body).slice(0, MAX_TEXT_PER_PAGE) || ''
    const rec = { title, text: text || '(无正文)' }
    const isEn = rel.toLowerCase().startsWith('en/')

    if (isEn) {
      if (!en[pagePath]) {
        en[pagePath] = rec
        indexEn.push({ path: pagePath, title: rec.title })
      }
    } else if (!zh[pagePath]) {
      zh[pagePath] = rec
      indexZh.push({ path: pagePath, title: rec.title })
    }
  }

  const outDir = path.join(__dirname, 'public')
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

  const indexPath = path.join(outDir, 'ai-chat-index.json')
  const contextPath = path.join(outDir, 'ai-chat-context.json')

  fs.writeFileSync(indexPath, JSON.stringify({ zh: indexZh, en: indexEn }, null, 0))
  fs.writeFileSync(contextPath, JSON.stringify({ zh, en }, null, 0))

  const sizeIdx = (fs.statSync(indexPath).size / 1024).toFixed(1)
  const sizeCtx = (fs.statSync(contextPath).size / 1024).toFixed(1)
  console.log(
    `Generated ai-chat-index.json (${indexZh.length} zh, ${indexEn.length} en, ${sizeIdx} KB)`,
  )
  console.log(
    `Generated ai-chat-context.json (${Object.keys(zh).length} zh, ${Object.keys(en).length} en pages, ${sizeCtx} KB)`,
  )
}

const isMain =
  process.argv[1] && path.resolve(fileURLToPath(import.meta.url)) === path.resolve(process.argv[1])
if (isMain) {
  generateAiChatContext()
}
