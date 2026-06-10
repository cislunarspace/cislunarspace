import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { describe, expect, test } from 'vitest'

const __dirname = dirname(fileURLToPath(import.meta.url))

function getComponent(name: string): string {
  return readFileSync(join(__dirname, '../components', name), 'utf8')
}

describe('scroll reveal SSR fallback', () => {
  test('SpaceNewsHome renders card elements visible before client JS runs', () => {
    const source = getComponent('SpaceNewsHome.vue')

    expect(source).toContain('class="sn-section scroll-reveal revealed"')
    expect(source).toContain('class="sn-grid__cell scroll-reveal revealed"')
  })

  test('SpaceNewsArchive renders month groups visible before client JS runs', () => {
    const source = getComponent('SpaceNewsArchive.vue')

    expect(source).toContain('class="sna-group scroll-reveal revealed"')
  })
})
