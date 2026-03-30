import type { SidebarConfig } from 'vuepress'
import autoSidebar from './sidebar.auto.json' with { type: 'json' }

const mainSidebar = [
  {
    text: '地月空间是什么',
    collapsible: true,
    children: [
      '/what-is-cislunarspace/',
      '/what-is-cislunarspace/environment',
    ],
  },
  {
    text: '地月空间科学研究前沿',
    collapsible: true,
    children: [
      '/research-frontiers/',
      {
        text: '研究方向',
        link: '/research-frontiers/directions/',
        collapsible: true,
        children: [
          '/research-frontiers/directions/strategy',
          '/research-frontiers/directions/low-energy-transfer',
          '/research-frontiers/directions/orbit-characterization',
          '/research-frontiers/directions/simulation-systems',
          {
            text: '地月空间轨道博弈',
            link: '/research-frontiers/directions/orbital-game/',
            collapsible: true,
            children: [
              '/research-frontiers/directions/orbital-game/orbital-game-inspection',
            ],
          },
        ],
      },
      {
        text: '研究机构和组织',
        link: '/research-frontiers/institutions/',
        collapsible: true,
        children: [
          '/research-frontiers/institutions/nudt',
          '/research-frontiers/institutions/npu',
          '/research-frontiers/institutions/hit',
          '/research-frontiers/institutions/seu',
          '/research-frontiers/institutions/dfhscl',
          '/research-frontiers/institutions/thu',
        ],
      },
      '/research-frontiers/journals-conferences',
      '/research-frontiers/major-projects',
    ],
  },
  {
    text: '地月空间飞行器运行轨道',
    collapsible: true,
    children: [
      '/cislunar-orbits/',
    ],
  },
]

const glossarySidebar = [
  {
    text: '地月空间术语词典',
    collapsible: false,
    children: [
      '/glossary/',
      '/glossary/cr3bp',
      '/glossary/xray-pulsar-navigation',
    ],
  },
]

const resourcesToolsSidebar = [
  {
    text: '资源与工具',
    collapsible: false,
    children: [
      '/resources-tools/',
      '/resources-tools/e2m2e',
      '/resources-tools/scipy',
      '/resources-tools/r2s2',
      '/resources-tools/datasets',
    ],
  },
]

const spaceNewsSidebar = autoSidebar.zh

const blueTeamResearchSidebar = [
  {
    text: '蓝军研究',
    collapsible: false,
    children: [
      '/blue-team-research/',
      {
        text: '条令条例与战略文件',
        link: '/blue-team-research/doctrine-strategy/',
        collapsible: true,
        children: [
          '/blue-team-research/doctrine-strategy/',
          '/blue-team-research/doctrine-strategy/us-strategy-doctrine',
          '/blue-team-research/doctrine-strategy/literature-index',
          '/blue-team-research/doctrine-strategy/terminology',
        ],
      },
      {
        text: '装备与技术发展',
        link: '/blue-team-research/equipment-tech/',
        collapsible: true,
        children: [
          '/blue-team-research/equipment-tech/',
          '/blue-team-research/equipment-tech/sda-programs',
          '/blue-team-research/equipment-tech/spacex-role',
          '/blue-team-research/equipment-tech/architecture-programs',
          '/blue-team-research/equipment-tech/commercial-participation',
        ],
      },
      {
        text: '作战应用与聚焦场景',
        link: '/blue-team-research/operations-application/',
        collapsible: true,
        children: [
          '/blue-team-research/operations-application/',
          '/blue-team-research/operations-application/regional-conflicts',
          '/blue-team-research/operations-application/orbital-confrontation',
          '/blue-team-research/operations-application/kill-chain-focus',
          '/blue-team-research/operations-application/scenario-analysis',
          '/blue-team-research/operations-application/crosswalk',
        ],
      },
      {
        text: '资料共享与知识库',
        link: '/blue-team-research/knowledge-rag/',
        collapsible: true,
        children: [
          '/blue-team-research/knowledge-rag/',
          '/blue-team-research/knowledge-rag/search-metadata',
          '/blue-team-research/knowledge-rag/rag-roadmap',
        ],
      },
    ],
  },
]

export default <SidebarConfig>{
  '/glossary/': glossarySidebar,
  '/resources-tools/': resourcesToolsSidebar,
  '/blue-team-research/': blueTeamResearchSidebar,
  '/space-news/': spaceNewsSidebar,
  '/what-is-cislunarspace/': mainSidebar,
  '/cislunar-orbits/': mainSidebar,
  '/research-frontiers/': mainSidebar,
  '/': mainSidebar,
}
