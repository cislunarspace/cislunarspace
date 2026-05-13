/**
 * 为 AI 多阶段问答生成：
 * - ai-chat-index.json  仅 path + title（供导览/路由，轻量）
 * - ai-chat-context.json  path -> { title, text } 正文（按需拉取，供回答阶段）
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { parseFrontmatterAndBody, type Frontmatter } from './utils/frontmatter-parser.ts'
import { walkSiteMarkdown, type MarkdownFile } from './utils/markdown-walker.ts'
import { markdownToPlain } from './utils/markdown-to-plain.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webRoot = path.join(__dirname, '..')

const MAX_TEXT_PER_PAGE = 14000

function fileToUrlPath(relFromWeb: string, fm: Frontmatter): string {
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

export function generateAiChatContext(files: MarkdownFile[]): void {
  const zh: Record<string, { title: string; text: string }> = {}
  const en: Record<string, { title: string; text: string }> = {}
  const indexZh: Array<{ path: string; title: string }> = []
  const indexEn: Array<{ path: string; title: string }> = []

  for (const file of files) {
    const { frontmatter, body } = parseFrontmatterAndBody(file.content)
    if (frontmatter.draft === true) continue

    const pagePath = fileToUrlPath(file.relPath, frontmatter)
    const title = (frontmatter.title && String(frontmatter.title)) || pagePath
    const text = markdownToPlain(body).slice(0, MAX_TEXT_PER_PAGE) || ''
    const rec = { title, text: text || '(无正文)' }
    const isEn = file.relPath.toLowerCase().startsWith('en/')

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
  generateAiChatContext(walkSiteMarkdown(webRoot))
}
