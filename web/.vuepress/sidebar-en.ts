import type { SidebarConfig } from 'vuepress'
import autoSidebar from './sidebar.auto.json'
import { wayfindingEnGroup } from './sidebar-shared.js'

const mainSidebarContent = [
  {
    text: 'What is cislunar space (environment & concepts)',
    collapsible: false,
    children: [
      '/en/what-is-cislunarspace/',
      '/en/what-is-cislunarspace/environment',
    ],
  },
  {
    text: 'Cislunar spacecraft orbits (mission trajectories)',
    collapsible: false,
    children: ['/en/cislunar-orbits/'],
  },
  {
    text: 'Research frontiers (directions · institutions · programs)',
    collapsible: false,
    children: [
      '/en/research-frontiers/',
      '/en/research-frontiers/directions/',
      {
        text: 'Research institutions',
        link: '/en/research-frontiers/institutions/',
        collapsible: true,
        children: [
          '/en/research-frontiers/institutions/',
          '/en/research-frontiers/institutions/hit',
        ],
      },
      '/en/research-frontiers/journals-conferences',
      '/en/research-frontiers/major-projects',
    ],
  },
]

const mainSidebar = [wayfindingEnGroup, ...mainSidebarContent]

const glossarySidebar = [
  wayfindingEnGroup,
  {
    text: 'Cislunar glossary (terms & definitions)',
    collapsible: false,
    children: [
      '/en/glossary/',
      {
        text: 'Dynamics models',
        collapsible: true,
        children: ['/en/glossary/cr3bp'],
      },
      {
        text: 'Navigation',
        collapsible: true,
        children: ['/en/glossary/xray-pulsar-navigation'],
      },
    ],
  },
]

const resourcesToolsSidebar = [
  wayfindingEnGroup,
  {
    text: 'Resources & tools (data, code & datasets)',
    collapsible: false,
    children: [
      '/en/resources-tools/',
      '/en/resources-tools/e2m2e',
      '/en/resources-tools/scipy',
      '/en/resources-tools/r2s2',
      '/en/resources-tools/datasets',
    ],
  },
]

const spaceNewsSidebar = [wayfindingEnGroup, ...autoSidebar.en]

const blueTeamResearchSidebar = [
  wayfindingEnGroup,
  {
    text: 'Blue-team research (doctrine · tech · scenarios · RAG)',
    collapsible: false,
    children: [
      '/en/blue-team-research/',
      {
        text: 'Doctrine & strategy',
        link: '/en/blue-team-research/doctrine-strategy/',
        collapsible: true,
        children: [
          '/en/blue-team-research/doctrine-strategy/',
          '/en/blue-team-research/doctrine-strategy/us-strategy-doctrine',
          '/en/blue-team-research/doctrine-strategy/literature-index',
          '/en/blue-team-research/doctrine-strategy/terminology',
        ],
      },
      {
        text: 'Equipment & technology',
        link: '/en/blue-team-research/equipment-tech/',
        collapsible: true,
        children: [
          '/en/blue-team-research/equipment-tech/',
          '/en/blue-team-research/equipment-tech/sda-programs',
          '/en/blue-team-research/equipment-tech/spacex-role',
          '/en/blue-team-research/equipment-tech/architecture-programs',
          '/en/blue-team-research/equipment-tech/commercial-participation',
        ],
      },
      {
        text: 'Operations & scenarios',
        link: '/en/blue-team-research/operations-application/',
        collapsible: true,
        children: [
          '/en/blue-team-research/operations-application/',
          '/en/blue-team-research/operations-application/regional-conflicts',
          '/en/blue-team-research/operations-application/orbital-confrontation',
          '/en/blue-team-research/operations-application/kill-chain-focus',
          '/en/blue-team-research/operations-application/scenario-analysis',
          '/en/blue-team-research/operations-application/crosswalk',
        ],
      },
      {
        text: 'Knowledge base & RAG',
        link: '/en/blue-team-research/knowledge-rag/',
        collapsible: true,
        children: [
          '/en/blue-team-research/knowledge-rag/',
          '/en/blue-team-research/knowledge-rag/search-metadata',
          '/en/blue-team-research/knowledge-rag/rag-roadmap',
        ],
      },
    ],
  },
]

const satelliteSimulationSidebar = [
  wayfindingEnGroup,
  {
    text: 'Satellite orbit simulation lab',
    collapsible: false,
    children: ['/en/satellite-simulation/'],
  },
]

export default <SidebarConfig>{
  '/en/glossary/': glossarySidebar,
  '/en/resources-tools/': resourcesToolsSidebar,
  '/en/blue-team-research/': blueTeamResearchSidebar,
  '/en/space-news/': spaceNewsSidebar,
  '/en/satellite-simulation/': satelliteSimulationSidebar,
  '/en/what-is-cislunarspace/': mainSidebar,
  '/en/cislunar-orbits/': mainSidebar,
  '/en/research-frontiers/': mainSidebar,
  '/en/': mainSidebar,
}
