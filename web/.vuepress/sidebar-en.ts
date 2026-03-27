// Main sidebar configuration (English)
const mainSidebar = [
    {
        title: "What Is Cislunar Space",
        collapsable: true,
        children: [
            ["/en/what-is-cislunarspace/", "Introduction"],
            ["/en/what-is-cislunarspace/environment", "Cislunar Space Environment"],
        ]
    },
    {
        title: "Cislunar Spacecraft Orbits",
        collapsable: true,
        children: [
            ["/en/cislunar-orbits/", "Introduction"],
        ]
    },
    {
        title: "Research Frontiers",
        collapsable: true,
        children: [
            ["/en/research-frontiers/", "Introduction"],
            ["/en/research-frontiers/directions", "Research Directions"],
            {
                title: "Research Institutions",
                path: "/en/research-frontiers/institutions",
                collapsable: true,
                children: [
                    ["/en/research-frontiers/institutions", "Introduction"],
                    ["/en/research-frontiers/institutions/hit", "Harbin Institute of Technology"],
                ]
            },
            ["/en/research-frontiers/journals-conferences", "Journals & Conferences"],
            ["/en/research-frontiers/major-projects", "Major Projects"],
        ]
    },
];

// Glossary sidebar (English)
const glossarySidebar = [
    {
        title: "Cislunar Space Glossary",
        collapsable: false,
        children: [
            ["/en/glossary/", "Overview"],
            ["/en/glossary/cr3bp", "Circular Restricted Three-Body Problem"],
            ["/en/glossary/xray-pulsar-navigation", "X-ray Pulsar Navigation"],
        ]
    }
];

// Resources & Tools sidebar (English)
const resourcesToolsSidebar = [
    {
        title: "Resources & Tools",
        collapsable: false,
        children: [
            ["/en/resources-tools/", "Overview"],
            ["/en/resources-tools/datasets", "Datasets"],
        ]
    }
];

// Space News sidebar (English) — add new months under the year group as you publish
const spaceNewsSidebar = [
    {
        title: "Space News",
        collapsable: false,
        children: [
            ["/en/space-news/", "Home"],
            ["/en/space-news/archive", "Archive by date"],
            {
                title: "2025",
                path: "/en/space-news/2025/",
                collapsable: true,
                children: [
                    ["/en/space-news/2025/03/", "March 2025"],
                ],
            },
            {
                title: "2026",
                path: "/en/space-news/2026/",
                collapsable: true,
                children: [
                    ["/en/space-news/2026/02/", "February 2026"],
                    ["/en/space-news/2026/03/", "March 2026"],
                ],
            },
        ],
    },
];

// Blue team research sidebar (English) — overview + nested groups like Research Frontiers
const blueTeamResearchSidebar = [
    {
        title: "Blue Team Research",
        collapsable: false,
        children: [
            ["/en/blue-team-research/", "Overview"],
            {
                title: "Doctrine & Strategy",
                path: "/en/blue-team-research/doctrine-strategy/",
                collapsable: true,
                children: [
                    ["/en/blue-team-research/doctrine-strategy/", "Overview"],
                    ["/en/blue-team-research/doctrine-strategy/us-strategy-doctrine", "U.S. Strategy & Doctrine"],
                    ["/en/blue-team-research/doctrine-strategy/literature-index", "Literature Index & Extract Rules"],
                    ["/en/blue-team-research/doctrine-strategy/terminology", "Terms & Acronyms"],
                ],
            },
            {
                title: "Equipment & Technology",
                path: "/en/blue-team-research/equipment-tech/",
                collapsable: true,
                children: [
                    ["/en/blue-team-research/equipment-tech/", "Overview"],
                    ["/en/blue-team-research/equipment-tech/sda-programs", "SDA & Related Programs"],
                    ["/en/blue-team-research/equipment-tech/spacex-role", "SpaceX & Industry Roles"],
                    ["/en/blue-team-research/equipment-tech/architecture-programs", "Architectures & Programs"],
                    ["/en/blue-team-research/equipment-tech/commercial-participation", "Commercial Participation"],
                ],
            },
            {
                title: "Operations & Scenarios",
                path: "/en/blue-team-research/operations-application/",
                collapsable: true,
                children: [
                    ["/en/blue-team-research/operations-application/", "Overview"],
                    ["/en/blue-team-research/operations-application/regional-conflicts", "Space in Regional Conflicts"],
                    ["/en/blue-team-research/operations-application/orbital-confrontation", "Orbital Confrontation Focus"],
                    ["/en/blue-team-research/operations-application/kill-chain-focus", "Kill-Chain Focus"],
                    ["/en/blue-team-research/operations-application/scenario-analysis", "Scenarios & Evidence"],
                    ["/en/blue-team-research/operations-application/crosswalk", "Doctrine–Capability–Employment"],
                ],
            },
            {
                title: "Knowledge Base & RAG",
                path: "/en/blue-team-research/knowledge-rag/",
                collapsable: true,
                children: [
                    ["/en/blue-team-research/knowledge-rag/", "Overview"],
                    ["/en/blue-team-research/knowledge-rag/search-metadata", "Search & Metadata"],
                    ["/en/blue-team-research/knowledge-rag/rag-roadmap", "Knowledge Services Roadmap"],
                ],
            },
        ],
    },
];

// VuePress 1.x multi-sidebar config
const sidebarConfigEn = {
    "/en/glossary/": glossarySidebar,
    "/en/resources-tools/": resourcesToolsSidebar,
    "/en/blue-team-research/": blueTeamResearchSidebar,
    "/en/space-news/": spaceNewsSidebar,
    "/en/what-is-cislunarspace/": mainSidebar,
    "/en/cislunar-orbits/": mainSidebar,
    "/en/research-frontiers/": mainSidebar,
    "/en/": mainSidebar,
};

export default sidebarConfigEn;
