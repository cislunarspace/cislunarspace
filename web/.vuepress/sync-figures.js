import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webDir = path.join(__dirname, '..')
const distDir = path.join(__dirname, 'dist')

if (!fs.existsSync(distDir)) {
  console.error('dist/ directory not found. Run vuepress build first.')
  process.exit(1)
}

function syncFigures(sourceBase, destBase) {
  if (!fs.existsSync(sourceBase)) return 0
  let count = 0
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const src = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        if (entry.name === 'figures') {
          const rel = path.relative(sourceBase, src)
          const dest = path.join(destBase, rel)
          fs.mkdirSync(dest, { recursive: true })
          function copyRecursive(d, target) {
            for (const e of fs.readdirSync(d, { withFileTypes: true })) {
              const s = path.join(d, e.name)
              const t = path.join(target, e.name)
              if (e.isDirectory()) {
                fs.mkdirSync(t, { recursive: true })
                copyRecursive(s, t)
              } else {
                fs.copyFileSync(s, t)
                count++
              }
            }
          }
          copyRecursive(src, dest)
        } else {
          walk(src)
        }
      }
    }
  }
  walk(sourceBase)
  return count
}

const zhCount = syncFigures(
  path.join(webDir, 'space-news'),
  path.join(distDir, 'space-news'),
)
const enCount = syncFigures(
  path.join(webDir, 'en/space-news'),
  path.join(distDir, 'en/space-news'),
)

console.log(`Synced ${zhCount + enCount} figure files to dist/ (${zhCount} zh, ${enCount} en)`)
