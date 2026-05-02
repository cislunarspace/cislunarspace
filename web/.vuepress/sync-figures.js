import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { walkDir, DEFAULT_EXCLUDED } from './utils/markdown-walker.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webDir = path.join(__dirname, '..')
const distDir = path.join(__dirname, 'dist')

if (!fs.existsSync(distDir)) {
  console.error('dist/ directory not found. Run vuepress build first.')
  process.exit(1)
}

function syncFigures(sourceBase, destBase) {
  if (!fs.existsSync(sourceBase)) return { count: 0, errors: 0 }
  let count = 0
  let errors = 0

  function copyRecursive(src, dest) {
    fs.mkdirSync(dest, { recursive: true })
    for (const e of fs.readdirSync(src, { withFileTypes: true })) {
      const s = path.join(src, e.name)
      const t = path.join(dest, e.name)
      if (e.isDirectory()) {
        copyRecursive(s, t)
      } else {
        try {
          fs.copyFileSync(s, t)
          count++
        } catch (err) {
          console.warn(`  Failed to copy ${s}: ${err.message}`)
          errors++
        }
      }
    }
  }

  walkDir(sourceBase, {
    excludedDirs: DEFAULT_EXCLUDED,
    onEnterDir: (abs, rel) => {
      if (path.basename(abs) === 'figures') {
        const dest = path.join(destBase, rel)
        copyRecursive(abs, dest)
        return false  // skip recursing into figures — already copied
      }
      return true
    },
  })

  return { count, errors }
}

const zhResult = syncFigures(
  path.join(webDir, 'space-news'),
  path.join(distDir, 'space-news'),
)
const enResult = syncFigures(
  path.join(webDir, 'en/space-news'),
  path.join(distDir, 'en/space-news'),
)

const totalErrors = zhResult.errors + enResult.errors
console.log(`Synced ${zhResult.count + enResult.count} figure files to dist/ (${zhResult.count} zh, ${enResult.count} en)${totalErrors ? ` — ${totalErrors} errors` : ''}`)
if (totalErrors > 0) {
  process.exitCode = 1
}
