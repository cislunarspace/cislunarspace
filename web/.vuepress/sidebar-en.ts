import type { SidebarConfig } from 'vuepress'
import autoSidebar from './sidebar.auto.json'
import { wayfindingEnGroup } from './sidebar-shared.js'

const introSection = {
  text: 'What is cislunar space (environment & concepts)',
  collapsible: false,
  children: [
    '/en/what-is-cislunarspace/',
    '/en/what-is-cislunarspace/environment',
  ],
}

const orbitsSection = {
  text: 'Cislunar spacecraft orbits (mission trajectories)',
  collapsible: false,
  children: [
    '/en/cislunar-orbits/',
    {
      text: 'NRHO (Near-Rectilinear Halo Orbit)',
      link: '/en/cislunar-orbits/nrho/',
      collapsible: true,
      children: [
        '/en/cislunar-orbits/nrho/',
        '/en/cislunar-orbits/nrho/l1-nrho',
        '/en/cislunar-orbits/nrho/l2-nrho',
        '/en/cislunar-orbits/nrho/stability-maintenance',
        '/en/cislunar-orbits/nrho/gateway-cases',
        '/en/cislunar-orbits/nrho/design-parameters',
      ],
    },
    {
      text: 'DRO (Distant Retrograde Orbit)',
      link: '/en/cislunar-orbits/dro/',
      collapsible: true,
      children: [
        '/en/cislunar-orbits/dro/',
        '/en/cislunar-orbits/dro/mechanics',
        '/en/cislunar-orbits/dro/family-classification',
        '/en/cislunar-orbits/dro/applications',
        '/en/cislunar-orbits/dro/design-method',
      ],
    },
    {
      text: 'Earth-Moon Transfer Orbits',
      link: '/en/cislunar-orbits/transfer/',
      collapsible: true,
      children: [
        '/en/cislunar-orbits/transfer/',
        '/en/cislunar-orbits/transfer/tli-overview',
        '/en/cislunar-orbits/transfer/ballistic-capture',
        '/en/cislunar-orbits/transfer/corridor-design',
        '/en/cislunar-orbits/transfer/launch-windows',
      ],
    },
  ],
}

const researchSection = {
  text: 'Research frontiers (directions · institutions · programs)',
  collapsible: false,
  children: [
    '/en/research-frontiers/',
    {
      text: 'Research directions',
      link: '/en/research-frontiers/directions/',
      collapsible: true,
      children: [
        {
          text: 'Orbit Design & Optimization',
          link: '/en/research-frontiers/directions/orbit-design/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Navigation & Orbit Determination',
          link: '/en/research-frontiers/directions/navigation/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Space Situational Awareness',
          link: '/en/research-frontiers/directions/ssa/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Communication & Information Network',
          link: '/en/research-frontiers/directions/communication/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Spatiotemporal Reference & Measurement',
          link: '/en/research-frontiers/directions/reference-frame/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Space Transportation System',
          link: '/en/research-frontiers/directions/transportation/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Formation Flying',
          link: '/en/research-frontiers/directions/formation-flying/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Security & Governance',
          link: '/en/research-frontiers/directions/security-governance/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Infrastructure & Economy',
          link: '/en/research-frontiers/directions/infrastructure/',
          collapsible: true,
          children: [],
        },
        {
          text: 'Simulation Systems',
          link: '/en/research-frontiers/directions/simulation/',
          collapsible: true,
          children: [],
        },
      ],
    },
    {
      text: 'Research institutions',
      link: '/en/research-frontiers/institutions/',
      collapsible: true,
      children: [
        '/en/research-frontiers/institutions/hit',
      ],
    },
    '/en/research-frontiers/journals-conferences',
    '/en/research-frontiers/major-projects',
  ],
}

/** Home: site map only, no per-section deep trees */
const homeSidebar = [wayfindingEnGroup]

const whatIsCislunarspaceSidebar = [wayfindingEnGroup, introSection]
const cislunarOrbitsMainSidebar = [wayfindingEnGroup, orbitsSection]
const researchFrontiersMainSidebar = [wayfindingEnGroup, researchSection]

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
        children: [
          '/en/glossary/dynamics/cr3bp',
          '/en/glossary/dynamics/cr3bp-lt',
          '/en/glossary/dynamics/a2ppo',
          '/en/glossary/dynamics/curriculum-learning',
          '/en/glossary/dynamics/lt-transfer-mdp',
          '/en/glossary/dynamics/gae',
          '/en/glossary/dynamics/direct-collocation',
          '/en/glossary/dynamics/birkhoff-gustavson',
          '/en/glossary/dynamics/central-manifold',
          '/en/glossary/dynamics/action-angle',
          '/en/glossary/dynamics/poincare-section',
        ],
      },
      {
        text: 'Mission orbits',
        collapsible: true,
        children: [
          '/en/glossary/orbits/eml-halo',
          '/en/glossary/orbits/orbit-identification',
        ],
      },
      {
        text: 'Navigation',
        collapsible: true,
        children: [
          '/en/glossary/navigation/xray-pulsar-navigation',
        ],
      },
      {
        text: 'Lunar minerals',
        collapsible: true,
        children: [
          '/en/glossary/minerals/mg-changeite',
          '/en/glossary/minerals/ce-changeite',
        ],
      },
      {
        text: 'Other',
        collapsible: true,
        children: [
          '/en/glossary/other/starshade',
        ],
      },
      {
        text: 'Organizations',
        collapsible: true,
        children: [
          '/en/glossary/organizations/anduril',
          '/en/glossary/organizations/booz-allen-hamilton',
          '/en/glossary/organizations/general-dynamics-mission-systems',
          '/en/glossary/organizations/gitai-usa',
          '/en/glossary/organizations/lockheed-martin',
          '/en/glossary/organizations/northrop-grumman',
          '/en/glossary/organizations/quindar',
          '/en/glossary/organizations/raytheon',
          '/en/glossary/organizations/sci-tec',
          '/en/glossary/organizations/spacex',
          '/en/glossary/organizations/true-anomaly',
          '/en/glossary/organizations/turion-space',
        ],
      },
    ],
  },
]

const backgroundSidebarEn = [
  wayfindingEnGroup,
  {
    text: 'Background Knowledge (Fundamentals & Math Tools)',
    collapsible: false,
    children: [
      '/en/background/',
      {
        text: 'Math Tools',
        collapsible: true,
        children: [
          '/en/background/math/shooting-method',
          '/en/background/math/continuation',
          '/en/background/math/symplectic-integrator',
        ],
      },
      {
        text: 'Celestial Mechanics',
        collapsible: true,
        children: [
          '/en/background/mechanics/perturbation',
        ],
      },
      {
        text: 'Control & Optimization',
        collapsible: true,
        children: [
          '/en/background/control/optimal-control',
        ],
      },
    ],
  },
]

const resourcesToolsSidebar = [
  wayfindingEnGroup,
  {
    text: 'Resources & Tools (Data, Code & Datasets)',
    collapsible: false,
    children: [
      '/en/resources-tools/',
      {
        text: 'Simulation Software',
        collapsible: true,
        children: [
          '/en/resources-tools/gmat',
          '/en/resources-tools/stk',
          '/en/resources-tools/atk',
          '/en/resources-tools/cesium',
        ],
      },
      {
        text: 'Core Algorithm Libraries',
        collapsible: true,
        children: [
          '/en/resources-tools/e2m2e',
          '/en/resources-tools/scipy',
          '/en/resources-tools/r2s2',
          '/en/resources-tools/orekit',
          '/en/resources-tools/poliastro',
          '/en/resources-tools/basilisk',
          '/en/resources-tools/pykep',
        ],
      },
      {
        text: 'Data Resources',
        collapsible: true,
        children: [
          '/en/resources-tools/datasets',
        ],
      },
      {
        text: 'AI & Cloud Platforms',
        collapsible: true,
        children: [
          '/en/resources-tools/digital-lunar',
          '/en/resources-tools/llm',
          '/en/resources-tools/naoc-data',
        ],
      },
    ],
  },
]

const spaceNewsSidebar = [wayfindingEnGroup, ...autoSidebar.en]

const blueTeamResearchSidebar = [
  wayfindingEnGroup,
  {
    text: 'Blue-team research',
    collapsible: false,
    children: [
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

export default <SidebarConfig>{
  '/en/glossary/': glossarySidebar,
  '/en/resources-tools/': resourcesToolsSidebar,
  '/en/blue-team-research/': blueTeamResearchSidebar,
  '/en/background/': backgroundSidebarEn,
  '/en/space-news/': spaceNewsSidebar,
  '/en/satellite-simulation/': false,
  '/en/what-is-cislunarspace/': whatIsCislunarspaceSidebar,
  '/en/cislunar-orbits/': cislunarOrbitsMainSidebar,
  '/en/research-frontiers/': researchFrontiersMainSidebar,
  '/en/': homeSidebar,
}
