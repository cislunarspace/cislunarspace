/**
 * WayfindingIntake — hardcoded site-map tree builder.
 */
import type { VueSidebarItem } from '../sidebar-intake.js'

export function buildWayfindingIntake(): { zh: VueSidebarItem; en: VueSidebarItem } {
  const enItems: Array<{ link: string; text: string; children: string[] }> = [
    { link: '/en/', text: 'Home (overview)', children: [] },
    { link: '/en/what-is-cislunarspace/', text: 'Intro · what is cislunar space', children: [] },
    { link: '/en/cislunar-orbits/', text: 'Orbits · spacecraft trajectories', children: [] },
    { link: '/en/research-frontiers/', text: 'Frontiers · directions & labs', children: [] },
    { link: '/en/glossary/', text: 'Glossary · terms & definitions', children: [] },
    { link: '/en/resources-tools/', text: 'Tools · data & code', children: [] },
    { link: '/en/space-news/', text: 'News · space industry archive', children: [] },
    { link: '/en/blue-team-research/', text: 'Topic · blue-team research', children: [] },
  ]

  const zhItems: Array<{ link: string; text: string; children: string[] }> = [
    { link: '/', text: '首页（知识总览）', children: [] },
    { link: '/what-is-cislunarspace/', text: '入门 · 地月空间是什么', children: [] },
    { link: '/cislunar-orbits/', text: '轨道 · 飞行器运行轨道', children: [] },
    { link: '/research-frontiers/', text: '前沿 · 科研方向与机构', children: [] },
    { link: '/glossary/', text: '术语 · 定义与概念', children: [] },
    { link: '/resources-tools/', text: '工具 · 数据与代码', children: [] },
    { link: '/space-news/', text: '动态 · 航天新闻归档', children: [] },
    { link: '/blue-team-research/', text: '专题 · 蓝军研究', children: [] },
  ]

  return {
    zh: { text: '全站导览', collapsible: false, children: zhItems },
    en: { text: 'Site map', collapsible: false, children: enItems },
  }
}
