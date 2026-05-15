import { describe, expect, it } from 'vitest'
import { buildAllSectionSidebars, buildSectionSidebar } from './sidebar-sections'

describe('sidebar-sections adapter', () => {
  it('builds all non-glossary section sidebars from the section taxonomy', () => {
    const sections = buildAllSectionSidebars()

    expect(Object.keys(sections).sort()).toEqual([
      'background',
      'cislunar-orbits',
      'research-frontiers',
      'resources-tools',
      'what-is-cislunarspace',
    ])
    expect(sections['cislunar-orbits'].zh.text).toBe('地月空间飞行器运行轨道（任务轨道基础）')
    expect(sections['cislunar-orbits'].en.text).toBe('Cislunar spacecraft orbits (mission trajectories)')
  })

  it('uses zh/en locale paths for the same section tree', () => {
    const zh = buildSectionSidebar('cislunar-orbits', 'zh')
    const en = buildSectionSidebar('cislunar-orbits', 'en')

    expect(zh.children?.[0]).toBe('/cislunar-orbits/')
    expect(en.children?.[0]).toBe('/en/cislunar-orbits/')

    const zhNrho = zh.children?.[1] as { link: string; children: string[] }
    const enNrho = en.children?.[1] as { link: string; children: string[] }
    expect(zhNrho.link).toBe('/cislunar-orbits/nrho/')
    expect(enNrho.link).toBe('/en/cislunar-orbits/nrho/')
    expect(zhNrho.children[1]).toBe('/cislunar-orbits/nrho/l1-nrho/')
    expect(enNrho.children[1]).toBe('/en/cislunar-orbits/nrho/l1-nrho/')
  })

  it('preserves sibling ordering from the taxonomy source', () => {
    const sidebar = buildSectionSidebar('cislunar-orbits', 'zh')
    const children = sidebar.children ?? []

    expect(children[0]).toBe('/cislunar-orbits/')
    expect((children[1] as { text: string }).text).toBe('NRHO（近直线晕轨道）')
    expect((children[2] as { text: string }).text).toBe('DRO（远距离逆行轨道）')
    expect((children[3] as { text: string }).text).toBe('地月转移轨道')
  })

  it('hides zh-only pages from the en sidebar', () => {
    const zh = JSON.stringify(buildSectionSidebar('research-frontiers', 'zh'))
    const en = JSON.stringify(buildSectionSidebar('research-frontiers', 'en'))

    expect(zh).toContain('/research-frontiers/institutions/nudt/')
    expect(en).not.toContain('/en/research-frontiers/institutions/nudt/')
    expect(en).not.toContain('NUDT')
  })

  it('preserves legacy empty group rendering when all children are gated out', () => {
    const en = buildSectionSidebar('research-frontiers', 'en')
    const json = JSON.stringify(en)

    // security-governance has zh-only children in the source; the historical
    // builder still rendered the parent group with an empty children array.
    expect(json).toContain('/en/research-frontiers/directions/security-governance/')
    expect(json).toContain('Security & Governance')
  })
})
