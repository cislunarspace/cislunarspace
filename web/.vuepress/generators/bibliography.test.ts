import { describe, expect, test, beforeEach, afterEach } from 'vitest'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { generateBibliographyArtifacts } from './bibliography'

describe('generateBibliographyArtifacts', () => {
  let tmpDir: string

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'bib-test-'))
    fs.mkdirSync(path.join(tmpDir, '.vuepress', 'public'), { recursive: true })
  })

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  })

  test('parses BibTeX and scans citations to produce bibliography.json', () => {
    // Arrange
    const bibContent = `@book{vallado2001,
  author    = {Vallado, David A.},
  title     = {Fundamentals of Astrodynamics and Applications},
  publisher = {Microcosm Press},
  year      = {2001},
  edition   = {2nd},
}
`
    fs.writeFileSync(path.join(tmpDir, 'ref.bib'), bibContent)

    const mdFiles = [
      {
        absPath: path.join(tmpDir, 'test-page.md'),
        relPath: 'test-page.md',
        content: '# Test\n\nDeep space exploration \\cite{vallado2001} requires planning.\n',
      },
    ]

    const cslPath = path.join(__dirname, 'gb-t-7714.csl')
    const outDir = path.join(tmpDir, '.vuepress')

    // Act
    generateBibliographyArtifacts(mdFiles, tmpDir, outDir, cslPath)

    // Assert
    const outputPath = path.join(outDir, 'public', 'bibliography.json')
    expect(fs.existsSync(outputPath)).toBe(true)

    const data = JSON.parse(fs.readFileSync(outputPath, 'utf-8'))
    expect(data.entries).toHaveProperty('vallado2001')
    expect(data.entries.vallado2001.number).toBe(1)
    expect(data.entries.vallado2001.formatted).toContain('Vallado')
    expect(data.entries.vallado2001.formatted).toContain('2001')
    expect(data.citedBy.vallado2001).toContain('test-page.md')
  })

  test('sorts entries alphabetically by author surname', () => {
    const bibContent = `@book{vallado2001,
  author = {Vallado, David A.},
  title = {Fundamentals of Astrodynamics},
  publisher = {Microcosm Press},
  year = {2001},
}
@book{montenbruck2000,
  author = {Montenbruck, Oliver and Gill, Eberhard},
  title = {Satellite Orbits},
  publisher = {Springer},
  year = {2000},
}
`
    fs.writeFileSync(path.join(tmpDir, 'ref.bib'), bibContent)

    const mdFiles = [
      {
        absPath: path.join(tmpDir, 'page1.md'),
        relPath: 'page1.md',
        content: 'Citation \\cite{vallado2001} and \\cite{montenbruck2000}.\n',
      },
    ]

    const outDir = path.join(tmpDir, '.vuepress')
    generateBibliographyArtifacts(mdFiles, tmpDir, outDir)

    const data = JSON.parse(
      fs.readFileSync(path.join(outDir, 'public', 'bibliography.json'), 'utf-8'),
    )

    // Montenbruck (M) comes before Vallado (V) alphabetically
    expect(data.entries.montenbruck2000.number).toBe(1)
    expect(data.entries.vallado2001.number).toBe(2)
  })

  test('tracks citedBy across multiple files', () => {
    const bibContent = `@book{vallado2001,
  author = {Vallado, David A.},
  title = {Fundamentals of Astrodynamics},
  publisher = {Microcosm Press},
  year = {2001},
}
`
    fs.writeFileSync(path.join(tmpDir, 'ref.bib'), bibContent)

    const mdFiles = [
      {
        absPath: path.join(tmpDir, 'page-a.md'),
        relPath: 'page-a.md',
        content: 'First \\cite{vallado2001} reference.\n',
      },
      {
        absPath: path.join(tmpDir, 'page-b.md'),
        relPath: 'page-b.md',
        content: 'Second \\cite{vallado2001} reference.\n',
      },
    ]

    const outDir = path.join(tmpDir, '.vuepress')
    generateBibliographyArtifacts(mdFiles, tmpDir, outDir)

    const data = JSON.parse(
      fs.readFileSync(path.join(outDir, 'public', 'bibliography.json'), 'utf-8'),
    )

    expect(data.citedBy.vallado2001).toContain('page-a.md')
    expect(data.citedBy.vallado2001).toContain('page-b.md')
    expect(data.citedBy.vallado2001).toHaveLength(2)
  })

  test('warns on unmatched citation key', () => {
    const bibContent = `@book{vallado2001,
  author = {Vallado, David A.},
  title = {Fundamentals},
  publisher = {Microcosm Press},
  year = {2001},
}
`
    fs.writeFileSync(path.join(tmpDir, 'ref.bib'), bibContent)

    const mdFiles = [
      {
        absPath: path.join(tmpDir, 'page.md'),
        relPath: 'page.md',
        content: 'Reference \\cite{nonexistent2025} here.\n',
      },
    ]

    const outDir = path.join(tmpDir, '.vuepress')
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    generateBibliographyArtifacts(mdFiles, tmpDir, outDir)

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining('nonexistent2025'),
    )
    warnSpy.mockRestore()

    // Should not include the unmatched key in entries
    const data = JSON.parse(
      fs.readFileSync(path.join(outDir, 'public', 'bibliography.json'), 'utf-8'),
    )
    expect(data.entries).not.toHaveProperty('nonexistent2025')
  })

  test('throws when ref.bib does not exist', () => {
    const mdFiles: any[] = []
    const outDir = path.join(tmpDir, '.vuepress')

    expect(() => generateBibliographyArtifacts(mdFiles, tmpDir, outDir)).toThrow(
      /not found/i,
    )
  })

  test('excludes uncited BibTeX entries', () => {
    const bibContent = `@book{vallado2001,
  author = {Vallado, David A.},
  title = {Fundamentals},
  publisher = {Microcosm Press},
  year = {2001},
}
@book{montenbruck2000,
  author = {Montenbruck, Oliver},
  title = {Satellite Orbits},
  publisher = {Springer},
  year = {2000},
}
`
    fs.writeFileSync(path.join(tmpDir, 'ref.bib'), bibContent)

    const mdFiles = [
      {
        absPath: path.join(tmpDir, 'page.md'),
        relPath: 'page.md',
        content: 'Only \\cite{vallado2001} is cited.\n',
      },
    ]

    const outDir = path.join(tmpDir, '.vuepress')
    generateBibliographyArtifacts(mdFiles, tmpDir, outDir)

    const data = JSON.parse(
      fs.readFileSync(path.join(outDir, 'public', 'bibliography.json'), 'utf-8'),
    )

    expect(data.entries).toHaveProperty('vallado2001')
    expect(data.entries).not.toHaveProperty('montenbruck2000')
  })

  test('handles multi-key citation syntax', () => {
    const bibContent = `@book{vallado2001,
  author = {Vallado, David A.},
  title = {Fundamentals},
  publisher = {Microcosm Press},
  year = {2001},
}
@book{montenbruck2000,
  author = {Montenbruck, Oliver},
  title = {Satellite Orbits},
  publisher = {Springer},
  year = {2000},
}
`
    fs.writeFileSync(path.join(tmpDir, 'ref.bib'), bibContent)

    const mdFiles = [
      {
        absPath: path.join(tmpDir, 'page.md'),
        relPath: 'page.md',
        content: 'References \\cite{vallado2001,montenbruck2000} here.\n',
      },
    ]

    const outDir = path.join(tmpDir, '.vuepress')
    generateBibliographyArtifacts(mdFiles, tmpDir, outDir)

    const data = JSON.parse(
      fs.readFileSync(path.join(outDir, 'public', 'bibliography.json'), 'utf-8'),
    )

    expect(data.entries).toHaveProperty('vallado2001')
    expect(data.entries).toHaveProperty('montenbruck2000')
    expect(data.entries.montenbruck2000.number).toBe(1)
    expect(data.entries.vallado2001.number).toBe(2)
  })
})
