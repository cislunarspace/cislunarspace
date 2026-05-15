import { describe, expect, it } from 'vitest'
import { buildSectionChatIndexCategories } from './chat-index-sections'

describe('chat-index-sections adapter', () => {
  it('builds zh section categories from the section taxonomy in declared order', () => {
    const categories = buildSectionChatIndexCategories('zh')

    expect(categories.map(c => c.category)).toEqual([
      '地月空间是什么（环境与概念入门）',
      '地月空间飞行器运行轨道（任务轨道基础）',
      '地月空间科学研究前沿（方向 · 机构 · 项目）',
      '背景知识（基础理论 · 数学工具）',
      '资源与工具（数据、代码与数据集）',
    ])
  })

  it('builds en entries with en-prefixed locale paths', () => {
    const categories = buildSectionChatIndexCategories('en')
    const orbit = categories.find(c => c.category === 'Cislunar spacecraft orbits (mission trajectories)')!

    expect(orbit.entries[0]).toEqual({
      path: '/en/cislunar-orbits/',
      title: 'Cislunar spacecraft orbits (mission trajectories)',
    })
    expect(orbit.entries).toContainEqual({
      path: '/en/cislunar-orbits/nrho/l1-nrho/',
      title: 'L1-NRHO',
    })
  })

  it('skips display-only groups and index nodes as chat entries', () => {
    const categories = buildSectionChatIndexCategories('zh')
    const resources = categories.find(c => c.category === '资源与工具（数据、代码与数据集）')!

    expect(resources.entries).toContainEqual({ path: '/resources-tools/gmat/', title: 'GMAT' })
    expect(resources.entries.some(e => e.title === '仿真软件')).toBe(false)
    expect(resources.entries.filter(e => e.path === '/resources-tools/')).toHaveLength(1)
  })

  it('hides zh-only pages from the en chat index', () => {
    const zhJson = JSON.stringify(buildSectionChatIndexCategories('zh'))
    const enJson = JSON.stringify(buildSectionChatIndexCategories('en'))

    expect(zhJson).toContain('/research-frontiers/institutions/nudt/')
    expect(enJson).not.toContain('/en/research-frontiers/institutions/nudt/')
    expect(enJson).not.toContain('NUDT')
  })
})
