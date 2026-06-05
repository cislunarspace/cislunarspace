/**
 * Tests for issue #125: Fix broken glossary link paths.
 *
 * Validates that:
 *   1. /glossary/nrho/ references retargeted to /glossary/orbits/nrho/
 *   2. /research-frontiers/directions/orbital-game/ includes security-governance/
 *   3. /glossary/Figures/ absolute image paths converted to relative paths
 *   4. Category mismatch links retargeted to correct paths
 *   5. lEO-navigation case corrected to LEO-navigation
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const webDir = path.join(__dirname, '..', '..')

function readFile(relPath: string): string {
  return fs.readFileSync(path.join(webDir, relPath), 'utf-8')
}

// ── A: Path errors ────────────────────────────────────────────────────────────

describe('issue #125 — nrho path correction', () => {
  const files = [
    'background/math/continuation.md',
    'background/math/shooting-method.md',
    'en/background/math/continuation.md',
    'en/background/math/shooting-method.md',
  ]

  it.each(files)('%s does not reference /glossary/nrho/', (relPath) => {
    const content = readFile(relPath)
    expect(content).not.toContain('/glossary/nrho/')
  })

  it.each(files)('%s references /glossary/orbits/nrho/', (relPath) => {
    const content = readFile(relPath)
    expect(content).toContain('/glossary/orbits/nrho/')
  })
})

describe('issue #125 — orbital-game path includes security-governance', () => {
  const files = [
    'en/glossary/organizations/anduril.md',
    'en/glossary/organizations/gitai-usa.md',
    'en/glossary/organizations/true-anomaly-company.md',
    'en/glossary/organizations/turion-space.md',
    'en/glossary/organizations/lockheed-martin.md',
    'en/glossary/organizations/spacex.md',
  ]

  it.each(files)('%s uses full orbital-game path', (relPath) => {
    const content = readFile(relPath)
    expect(content).not.toContain('/directions/orbital-game/')
    expect(content).toContain('/security-governance/orbital-game/')
  })
})

// ── B: Image absolute paths → relative ────────────────────────────────────────

// Absolute path pattern: ](/glossary/Figures/ — the leading ]( ensures it's an absolute path ref, not ../../glossary/Figures/
const ABS_FIGURES = '](/glossary/Figures/'

describe('issue #125 — Figures image paths converted to relative', () => {
  it('glossary/orbits/dro.md uses relative Figures path', () => {
    const content = readFile('glossary/orbits/dro.md')
    expect(content).not.toContain(ABS_FIGURES)
    expect(content).toContain('../Figures/DRO/')
  })

  it('glossary/dynamics/cr3bp.md uses relative Figures path', () => {
    const content = readFile('glossary/dynamics/cr3bp.md')
    expect(content).not.toContain(ABS_FIGURES)
    expect(content).toContain('../Figures/CRTBP/')
  })

  it('glossary/orbits/nrho.md uses relative Figures path', () => {
    const content = readFile('glossary/orbits/nrho.md')
    expect(content).not.toContain(ABS_FIGURES)
    expect(content).toContain('../Figures/NRHO/')
  })

  it('en/glossary/orbits/dro.md uses relative Figures path', () => {
    const content = readFile('en/glossary/orbits/dro.md')
    expect(content).not.toContain(ABS_FIGURES)
    expect(content).toContain('../../glossary/Figures/DRO/')
  })

  it('en/glossary/orbits/nrho.md uses relative Figures path', () => {
    const content = readFile('en/glossary/orbits/nrho.md')
    expect(content).not.toContain(ABS_FIGURES)
    expect(content).toContain('../../glossary/Figures/NRHO/')
  })

  it('en/cislunar-orbits/dro/family-classification.md uses relative Figures path', () => {
    const content = readFile('en/cislunar-orbits/dro/family-classification.md')
    expect(content).not.toContain(ABS_FIGURES)
    expect(content).toContain('../../glossary/Figures/DRO/')
  })
})

// ── C1: Category mismatch retargeting ─────────────────────────────────────────

describe('issue #125 — category mismatch retargeting', () => {
  it('newton-euler-equations.md links to fundamentals/aerodynamic-coefficient', () => {
    const content = readFile('en/glossary/dynamics/newton-euler-equations.md')
    expect(content).not.toContain('/dynamics/aerodynamic-coefficient/')
    expect(content).toContain('/fundamentals/aerodynamic-coefficient/')
  })

  it('liason-navigation.md links to dynamics/libration-point', () => {
    const content = readFile('en/glossary/navigation/liason-navigation.md')
    expect(content).not.toContain('/orbits/libration-point/')
    expect(content).toContain('/dynamics/libration-point/')
  })

  it('vléo.md links to other/leo', () => {
    const content = readFile('glossary/fundamentals/vleo.md')
    expect(content).not.toContain('/fundamentals/leo/')
    expect(content).toContain('/other/leo/')
  })

  it('orbit-insertion.md links to fundamentals/tsiolkovsky-equation', () => {
    const content = readFile('en/glossary/other/orbit-insertion.md')
    expect(content).not.toContain('/glossary/tsiolkovsky-equation/')
    expect(content).toContain('/fundamentals/tsiolkovsky-equation/')
  })
})

// ── D: Case fix ───────────────────────────────────────────────────────────────

describe('issue #125 — LEO-navigation case fix', () => {
  it('glossary/navigation/pnt.md uses correct LEO-navigation casing', () => {
    const content = readFile('glossary/navigation/pnt.md')
    expect(content).not.toContain('lEO-navigation')
    expect(content).toContain('LEO-navigation')
  })

  it('en/glossary/navigation/pnt.md uses correct LEO-navigation casing', () => {
    const content = readFile('en/glossary/navigation/pnt.md')
    expect(content).not.toContain('lEO-navigation')
    expect(content).toContain('LEO-navigation')
  })
})
