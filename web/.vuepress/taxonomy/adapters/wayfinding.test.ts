import { describe, expect, it } from 'vitest'
import { buildWayfindingIntake } from './wayfinding'

describe('wayfinding adapter', () => {
  it('produces a zh disclosure with all 7 wayfinding links in declared order', () => {
    const intake = buildWayfindingIntake()
    expect(intake.zh.text).toBe('全站导览')
    expect(intake.zh.collapsible).toBe(false)
    expect(intake.zh.children).toBeDefined()
    const children = intake.zh.children as Array<{ text: string; link?: string }>
    expect(children.map((c) => c.text)).toEqual([
      '首页（知识总览）',
      '地月空间是什么',
      '飞行器运行轨道',
      '科研方向与机构',
      '术语 · 定义与概念',
      '数据与代码',
      '航天新闻归档',
    ])
    expect(children.map((c) => c.link)).toEqual([
      '/',
      '/what-is-cislunarspace/',
      '/cislunar-orbits/',
      '/research-frontiers/',
      '/glossary/',
      '/resources-tools/',
      '/space-news/',
    ])
  })

  it('produces an en disclosure with the matching 7 en labels and en paths', () => {
    const intake = buildWayfindingIntake()
    expect(intake.en.text).toBe('Site map')
    const children = intake.en.children as Array<{ text: string; link?: string }>
    expect(children.map((c) => c.text)).toEqual([
      'Home (overview)',
      'What is cislunar space',
      'Spacecraft trajectories',
      'Directions & labs',
      'Glossary · terms & definitions',
      'Data & code',
      'Space industry archive',
    ])
    expect(children.map((c) => c.link)).toEqual([
      '/en/',
      '/en/what-is-cislunarspace/',
      '/en/cislunar-orbits/',
      '/en/research-frontiers/',
      '/en/glossary/',
      '/en/resources-tools/',
      '/en/space-news/',
    ])
  })

  it('drops the previous brand prefix from each link label', () => {
    // The hand-built intake prepended "入门 · ", "轨道 · ", etc. The
    // taxonomy-derived version drops those — the surrounding sidebar
    // already gives context.
    const intake = buildWayfindingIntake()
    const zhChildren = intake.zh.children as Array<{ text: string }>
    expect(zhChildren.find((c) => c.text === '地月空间是什么')).toBeDefined()
    expect(zhChildren.find((c) => c.text.startsWith('入门 ·'))).toBeUndefined()
  })
})
