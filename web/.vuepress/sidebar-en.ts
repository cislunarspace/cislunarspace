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
    "/en/what-is-cislunarspace/": mainSidebar,
    "/en/cislunar-orbits/": mainSidebar,
    "/en/research-frontiers/": mainSidebar,
    "/en/": mainSidebar,
};

export default sidebarConfigEn;
