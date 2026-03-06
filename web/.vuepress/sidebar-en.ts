import { SidebarConfig } from "vuepress/config";

// Main sidebar configuration (English)
const mainSidebar = [
    {
        title: "What Is Cislunar Space",
        collapsable: true,
        children: [
            ["/what-is-cislunarspace/", "Introduction"],
            ["/what-is-cislunarspace/environment", "Cislunar Space Environment"],
        ]
    },
    {
        title: "Cislunar Spacecraft Orbits",
        collapsable: true,
        children: [
            ["/cislunar-orbits/", "Introduction"],
        ]
    },
    {
        title: "Research Frontiers",
        collapsable: true,
        children: [
            ["/research-frontiers/", "Introduction"],
            ["/research-frontiers/directions", "Research Directions"],
            ["/research-frontiers/institutions", "Research Institutions"],
            ["/research-frontiers/journals-conferences", "Journals & Conferences"],
            ["/research-frontiers/major-projects", "Major Projects"],
        ]
    },
];

// Glossary sidebar (English)
const glossarySidebar = [
    {
        title: "Cislunar Space Glossary",
        collapsable: false,
        children: [
            ["/glossary/", "Overview"],
            ["/glossary/cr3bp", "Circular Restricted Three-Body Problem"],
            ["/glossary/xray-pulsar-navigation", "X-ray Pulsar Navigation"],
        ]
    }
];

// Resources & Tools sidebar (English)
const resourcesToolsSidebar = [
    {
        title: "Resources & Tools",
        collapsable: false,
        children: [
            ["/resources-tools/", "Overview"],
            ["/resources-tools/datasets", "Datasets"],
        ]
    }
];

// VuePress 1.x multi-sidebar config
const sidebarConfigEn: SidebarConfig = {
    "/glossary/": glossarySidebar,
    "/resources-tools/": resourcesToolsSidebar,
    "/what-is-cislunarspace/": mainSidebar,
    "/cislunar-orbits/": mainSidebar,
    "/research-frontiers/": mainSidebar,
    "/": mainSidebar,
};

export default sidebarConfigEn;
