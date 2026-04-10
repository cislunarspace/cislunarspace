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
  if (!fs.existsSync(sourceBase)) return { count: 0, errors: 0 }
  let count = 0
  let errors = 0
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
          copyRecursive(src, dest)
        } else {
          walk(src)
        }
      }
    }
  }
  walk(sourceBase)
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
