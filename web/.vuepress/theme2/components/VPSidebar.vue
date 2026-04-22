<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultVPSidebar from '@vuepress/theme-default/components/VPSidebar.vue'

const route = useRoute()

const ZH_HOME_HINT =
  '本站按「入门—轨道—前沿—术语—工具—动态」组织知识；首组链接可快速跳转各栏目。'

const EN_HOME_HINT =
  'This site groups intro, orbits, frontiers, glossary, tools, and news; use the first sidebar block to jump.'

const ZH_PREFIX_HINTS: [string, string][] = [
  ['/blue-team-research/', '本栏目整理条令、装备发展、作战场景与知识库索引（蓝军研究专题）。'],
  ['/satellite-simulation/', '轨道仿真教学入口，可与「飞行器运行轨道」章节对照练习。'],
  ['/space-news/', '行业与任务动态摘录；门户看最新，存档按月浏览全部条目。'],
  ['/resources-tools/', '数据集、代码与工具线索，支撑轨道与前沿章节的动手延伸。'],
  ['/glossary/', '按动力学、任务轨道、导航等主题查阅术语与定义。'],
  ['/research-frontiers/', '研究方向、机构、期刊会议与重大工程，便于跟踪领域进展。'],
  ['/cislunar-orbits/', '航天器在地月空间的轨道类型与任务设计基础。'],
  ['/what-is-cislunarspace/', '地月空间环境与基础概念，适合从零系统阅读。'],
]

const EN_PREFIX_HINTS: [string, string][] = [
  ['/en/blue-team-research/', 'Doctrine, programs, scenarios, and knowledge-base notes (blue-team topic).'],
  ['/en/satellite-simulation/', 'Hands-on orbit lab; pair with the cislunar orbits section.'],
  ['/en/space-news/', 'Industry and mission news; portal for latest, archive by month.'],
  ['/en/resources-tools/', 'Datasets, code, and tool pointers for deeper practice.'],
  ['/en/glossary/', 'Terms grouped by dynamics, orbits, and navigation.'],
  ['/en/research-frontiers/', 'Directions, labs, venues, and major programs to track the field.'],
  ['/en/cislunar-orbits/', 'Basics of trajectories and mission design in cislunar space.'],
  ['/en/what-is-cislunarspace/', 'Environment and core concepts for a first structured read.'],
]

function hintForPath(pathname: string): string {
  const p = pathname || '/'
  if (p === '/' || p === '') return ZH_HOME_HINT
  if (p === '/en' || p === '/en/') return EN_HOME_HINT
  if (p.startsWith('/en/')) {
    for (const [prefix, text] of EN_PREFIX_HINTS) {
      if (p.startsWith(prefix)) return text
    }
    return ''
  }
  for (const [prefix, text] of ZH_PREFIX_HINTS) {
    if (p.startsWith(prefix)) return text
  }
  return ''
}

const contextHint = computed(() => hintForPath(route.path))
</script>

<template>
  <DefaultVPSidebar>
    <template #top>
      <p v-if="contextHint" class="sidebar-context-hint">
        {{ contextHint }}
      </p>
    </template>
  </DefaultVPSidebar>
</template>
