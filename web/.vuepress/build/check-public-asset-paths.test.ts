/**
 * Test: public asset path spelling (issue #75)
 *
 * Validates that:
 *   1. The public directory uses the correct "environment" spelling (not "envrionment")
 *   2. No markdown content references the misspelled path
 *   3. The images exist at the corrected path
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webDir = path.join(__dirname, '..', '..')

const CORRECT_DIR = path.join(webDir, '.vuepress', 'public', 'environment')
const MISSPELLED_DIR = path.join(webDir, '.vuepress', 'public', 'envrionment')

const EXPECTED_IMAGES = [
  '地月空间环境示意图.png',
  '磁层内的氧离子的4条逃逸路径.png',
  '月球磁异常反射质子通量分布.png',
]

// ── Directory naming ──────────────────────────────────────────────────────────

describe('public/envrionment → environment rename (issue #75)', () => {
  it('correctly-spelled environment directory exists', () => {
    expect(fs.existsSync(CORRECT_DIR)).toBe(true)
    expect(fs.statSync(CORRECT_DIR).isDirectory()).toBe(true)
  })

  it('misspelled envrionment directory does not exist', () => {
    expect(fs.existsSync(MISSPELLED_DIR)).toBe(false)
  })

  it.each(EXPECTED_IMAGES)('image "%s" exists at correct path', (filename) => {
    const filePath = path.join(CORRECT_DIR, filename)
    expect(fs.existsSync(filePath)).toBe(true)
  })
})

// ── Content references ────────────────────────────────────────────────────────

describe('no markdown content references misspelled path', () => {
  const envMd = path.join(webDir, 'what-is-cislunarspace', 'environment.md')
  const content = fs.readFileSync(envMd, 'utf-8')

  it('environment.md has no references to /envrionment/', () => {
    expect(content).not.toContain('/envrionment/')
  })

  it.each(EXPECTED_IMAGES)(
    'environment.md references /environment/%s',
    (filename) => {
      expect(content).toContain(`/environment/${filename}`)
    },
  )
})
