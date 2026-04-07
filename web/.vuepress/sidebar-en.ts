import type { SidebarConfig } from 'vuepress'
import autoSidebar from './sidebar.auto.json' with { type: 'json' }

const mainSidebar = [
  {
    text: 'What Is Cislunar Space',
    collapsible: true,
    children: [
      '/en/what-is-cislunarspace/',
      '/en/what-is-cislunarspace/environment',
    ],
  },
  {
    text: 'Cislunar Spacecraft Orbits',
    collapsible: true,
    children: [
      '/en/cislunar-orbits/',
    ],
  },
  {
    text: 'Research Frontiers',
    collapsible: true,
    children: [
      '/en/research-frontiers/',
      '/en/research-frontiers/directions',
      {
        text: 'Research Institutions',
        link: '/en/research-frontiers/institutions',
        collapsible: true,
        children: [
          '/en/research-frontiers/institutions',
          '/en/research-frontiers/institutions/hit',
        ],
      },
      '/en/research-frontiers/journals-conferences',
      '/en/research-frontiers/major-projects',
    ],
  },
]

const glossarySidebar = [
  {
    text: 'Cislunar Space Glossary',
    collapsible: false,
    children: [
      '/en/glossary/',
      {
        text: 'Dynamics Models',
        collapsible: true,
        children: [
          '/en/glossary/cr3bp',
        ],
      },
      {
        text: 'Navigation',
        collapsible: true,
        children: [
          '/en/glossary/xray-pulsar-navigation',
        ],
      },
    ],
  },
]

const resourcesToolsSidebar = [
  {
    text: 'Resources & Tools',
    collapsible: false,
    children: [
      '/en/resources-tools/',
      '/en/resources-tools/datasets',
    ],
  },
]

const spaceNewsSidebar = autoSidebar.en

const blueTeamResearchSidebar = [
  {
    text: 'Blue Team Research',
    collapsible: false,
    children: [
      '/en/blue-team-research/',
      {
        text: 'Doctrine & Strategy',
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
        text: 'Equipment & Technology',
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
        text: 'Operations & Scenarios',
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
        text: 'Knowledge Base & RAG',
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

export default <SidebarConfig>{
  '/en/glossary/': glossarySidebar,
  '/en/resources-tools/': resourcesToolsSidebar,
  '/en/blue-team-research/': blueTeamResearchSidebar,
  '/en/space-news/': spaceNewsSidebar,
  '/en/what-is-cislunarspace/': mainSidebar,
  '/en/cislunar-orbits/': mainSidebar,
  '/en/research-frontiers/': mainSidebar,
  '/en/': mainSidebar,
}
