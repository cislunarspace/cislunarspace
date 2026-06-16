import { afterEach, describe, it, expect, vi } from 'vitest'
import fs from 'fs'
import path from 'path'
import os from 'os'
import { writeArtifact } from './write-artifact.ts'

describe('writeArtifact', () => {
  let tmpDir: string

  beforeEach(() => {
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'write-artifact-'))
  })

  afterEach(() => {
    fs.rmSync(tmpDir, { recursive: true, force: true })
  })

  it('writes pretty-printed JSON with a trailing newline by default', () => {
    const filePath = path.join(tmpDir, 'nested', 'out.json')
    writeArtifact(filePath, { a: 1 })

    const content = fs.readFileSync(filePath, 'utf8')
    expect(content).toBe('{\n  "a": 1\n}\n')
  })

  it('creates missing parent directories', () => {
    const filePath = path.join(tmpDir, 'deep', 'dir', 'out.json')
    writeArtifact(filePath, [1, 2])
    expect(fs.existsSync(filePath)).toBe(true)
  })

  it('uses custom jsonSpace when provided', () => {
    const filePath = path.join(tmpDir, 'compact.json')
    writeArtifact(filePath, { a: 1 }, { jsonSpace: 0 })
    const content = fs.readFileSync(filePath, 'utf8')
    expect(content).toBe('{"a":1}\n')
  })

  it('omits trailing newline when configured', () => {
    const filePath = path.join(tmpDir, 'no-nl.json')
    writeArtifact(filePath, { a: 1 }, { trailingNewline: false })
    const content = fs.readFileSync(filePath, 'utf8')
    expect(content).toBe('{\n  "a": 1\n}')
  })

  it('calls log callback with the basename', () => {
    const filePath = path.join(tmpDir, 'out.json')
    const log = vi.fn()
    writeArtifact(filePath, { a: 1 }, { log })
    expect(log).toHaveBeenCalledWith('Generated out.json')
  })

  it('does not create directories when ensureDir is false', () => {
    const filePath = path.join(tmpDir, 'missing', 'out.json')
    expect(() => writeArtifact(filePath, { a: 1 }, { ensureDir: false })).toThrow()
  })
})
