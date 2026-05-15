import { describe, expect, it } from 'vitest'
import { buildNavbar } from './navbar'

describe('navbar adapter', () => {
  it('produces a zh navbar with all visible items in declared order', () => {
    const navbar = buildNavbar('zh') as Array<{ text: string; link?: string }>

    // First item is the "探究工具" dropdown.
    expect(navbar[0].text).toBe('探究工具')

    // Subsequent top-level entries are in declared order.
    const labels = navbar.map((item) => item.text)
    expect(labels).toEqual([
      '探究工具',
      '地月空间术语词典',
      '资源与工具',
      'Space News',
      'AI问答',
      '论坛',
      '首页',
      'Gitee',
      'GitHub',
    ])
  })

  it('produces an en navbar with mirrored ordering and en labels', () => {
    const navbar = buildNavbar('en') as Array<{ text: string; link?: string }>

    expect(navbar.map((item) => item.text)).toEqual([
      'Inquiry Tools',
      'Cislunar Glossary',
      'Resources & Tools',
      'Space News',
      'AI Q&A',
      'Forum',
      'Home',
      'Gitee',
      'GitHub',
    ])
  })

  it('zh navbar links target zh paths, en navbar links target en paths', () => {
    const zh = buildNavbar('zh') as Array<{ text: string; link?: string }>
    const en = buildNavbar('en') as Array<{ text: string; link?: string }>

    const zhGlossary = zh.find((item) => item.text === '地月空间术语词典')
    const enGlossary = en.find((item) => item.text === 'Cislunar Glossary')

    expect(zhGlossary?.link).toBe('/glossary/')
    expect(enGlossary?.link).toBe('/en/glossary/')
  })

  it('external links carry their full href in both locales', () => {
    const zh = buildNavbar('zh') as Array<{ text: string; link?: string }>
    const en = buildNavbar('en') as Array<{ text: string; link?: string }>

    const zhGithub = zh.find((item) => item.text === 'GitHub')
    const enGithub = en.find((item) => item.text === 'GitHub')

    expect(zhGithub?.link).toBe('https://github.com/cislunarspace/cislunarspace')
    expect(enGithub?.link).toBe('https://github.com/cislunarspace/cislunarspace')
  })

  it('inquiry-tools group renders as a dropdown with its own children', () => {
    const zh = buildNavbar('zh') as Array<{ text: string; children?: Array<{ text: string; link?: string }> }>
    const dropdown = zh[0]

    expect(dropdown.text).toBe('探究工具')
    expect(dropdown.children?.map((c) => c.text)).toEqual([
      '卫星轨道仿真教学平台',
      '史学思辨',
    ])
    expect(dropdown.children?.map((c) => c.link)).toEqual([
      '/satellite-simulation/',
      '/dialectic',
    ])
  })

  it('en dropdown preserves the (intentional) unprefixed `/dialectic` route', () => {
    // Historical note: dialectic is locale-shared, not /en/dialectic.
    const en = buildNavbar('en') as Array<{ text: string; children?: Array<{ text: string; link?: string }> }>
    const inquiry = en[0].children!
    const dialectic = inquiry.find((c) => c.text === 'Historical Inquiry')

    expect(dialectic?.link).toBe('/dialectic')
  })
})
