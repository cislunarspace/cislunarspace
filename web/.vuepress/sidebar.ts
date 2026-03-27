// 主侧边栏配置
const mainSidebar = [
    {
        title: "地月空间是什么",
        collapsable: true,
        children: [
            ["/what-is-cislunarspace/", "引言"],
            ["/what-is-cislunarspace/environment", "地月空间环境"],
            // ["/what-is-cislunarspace/military-application", "军事应用"]
        ]
    },
    {
        title: "地月空间科学研究前沿",
        collapsable: true,
        children: [
            ["/research-frontiers/", "引言"],
            {
                title: "研究方向",
                path: "/research-frontiers/directions/",
                collapsable: true,
                children: [
                    ["/research-frontiers/directions/strategy", "地月空间战略"],
                    ["/research-frontiers/directions/low-energy-transfer", "地月空间低能转移轨道"],
                    ["/research-frontiers/directions/orbit-characterization", "地月空间轨道参数表征"],
                    ["/research-frontiers/directions/simulation-systems", "地月空间仿真系统设计"],
                    {
                        title:"地月空间轨道博弈",
                        path: "/research-frontiers/directions/orbital-game/",
                        collapsable: true,
                        children: [
                            ["/research-frontiers/directions/orbital-game/orbital-game-inspection", "地月空间轨道博弈"],
                        ]
                    },
                ]
            },
            {
                title: "研究机构和组织",
                path: "/research-frontiers/institutions/",
                collapsable: true,
                children: [
                    ["/research-frontiers/institutions/nudt", "国防科技大学"],
                    ["/research-frontiers/institutions/npu", "西北工业大学"],
                    ["/research-frontiers/institutions/hit", "哈尔滨工业大学"],
                    ["/research-frontiers/institutions/seu", "航天工程大学"],
                    ["/research-frontiers/institutions/dfhscl", "航天东方红卫星有限公司"],
                    ["/research-frontiers/institutions/thu", "清华大学"],
                ]
            },
            ["/research-frontiers/journals-conferences", "期刊会议"],
            ["/research-frontiers/major-projects", "重大项目"],
        ]
    },
    {
        title: "地月空间飞行器运行轨道",
        collapsable: true,
        children: [
            ["/cislunar-orbits/", "引言"],
            // ["/cislunar-orbits/transfer-orbit", "地月间转移轨道"],
            // ["/cislunar-orbits/near-moon-orbit", "近月轨道"],
            // ["/cislunar-orbits/collinear-libration-point-orbit", "共线平动点轨道"],
            // ["/cislunar-orbits/triangular-libration-point-orbit", "三角平动点轨道"]
        ]
    },
];

// 词典独立侧边栏
const glossarySidebar = [
    {
        title: "地月空间术语词典",
        collapsable: false,
        children: [
            ["/glossary/", "概述"],
            ["/glossary/cr3bp", "圆形限制性三体问题"],
            ["/glossary/xray-pulsar-navigation", "X射线脉冲星导航"],
        ]
    }
];

// 资源与工具独立侧边栏
const resourcesToolsSidebar = [
    {
        title: "资源与工具",
        collapsable: false,
        children: [
            ["/resources-tools/", "引言"],
            ["/resources-tools/e2m2e", "e2m2e"],
            ["/resources-tools/scipy", "scipy"],
            ["/resources-tools/r2s2", "r2s2"],
            ["/resources-tools/datasets", "数据集"],
        ]
    }
];

// Space News 独立侧边栏（按年/月扩展时在此追加子链接）
const spaceNewsSidebar = [
    {
        title: "Space News",
        collapsable: false,
        children: [
            ["/space-news/", "首页"],
            ["/space-news/archive", "按日期查阅"],
            {
                title: "2026",
                path: "/space-news/2026/",
                collapsable: true,
                children: [
                    ["/space-news/2026/03/", "2026年3月"],
                ],
            },
        ],
    },
];

// 蓝军研究独立侧边栏（结构同「地月空间科学研究前沿」：概述 + 分栏下概述与子主题）
const blueTeamResearchSidebar = [
    {
        title: "蓝军研究",
        collapsable: false,
        children: [
            ["/blue-team-research/", "概述"],
            {
                title: "条令条例与战略文件",
                path: "/blue-team-research/doctrine-strategy/",
                collapsable: true,
                children: [
                    ["/blue-team-research/doctrine-strategy/", "概述"],
                    ["/blue-team-research/doctrine-strategy/us-strategy-doctrine", "美军战略文件与条令体系"],
                    ["/blue-team-research/doctrine-strategy/literature-index", "文献索引与摘录规范"],
                    ["/blue-team-research/doctrine-strategy/terminology", "术语与缩写"],
                ],
            },
            {
                title: "装备与技术发展",
                path: "/blue-team-research/equipment-tech/",
                collapsable: true,
                children: [
                    ["/blue-team-research/equipment-tech/", "概述"],
                    ["/blue-team-research/equipment-tech/sda-programs", "太空发展局（SDA）与相关方案"],
                    ["/blue-team-research/equipment-tech/spacex-role", "SpaceX 与产业参与"],
                    ["/blue-team-research/equipment-tech/architecture-programs", "体系与项目跟踪"],
                    ["/blue-team-research/equipment-tech/commercial-participation", "商业航天参与"],
                ],
            },
            {
                title: "作战应用与聚焦场景",
                path: "/blue-team-research/operations-application/",
                collapsable: true,
                children: [
                    ["/blue-team-research/operations-application/", "概述"],
                    ["/blue-team-research/operations-application/regional-conflicts", "地区冲突中的太空运用"],
                    ["/blue-team-research/operations-application/orbital-confrontation", "轨道对抗聚焦"],
                    ["/blue-team-research/operations-application/kill-chain-focus", "杀伤链闭环聚焦"],
                    ["/blue-team-research/operations-application/scenario-analysis", "场景与证据链"],
                    ["/blue-team-research/operations-application/crosswalk", "条令—能力—运用对照"],
                ],
            },
            {
                title: "资料共享与知识库",
                path: "/blue-team-research/knowledge-rag/",
                collapsable: true,
                children: [
                    ["/blue-team-research/knowledge-rag/", "概述"],
                    ["/blue-team-research/knowledge-rag/search-metadata", "检索与元数据"],
                    ["/blue-team-research/knowledge-rag/rag-roadmap", "知识服务技术路线"],
                ],
            },
        ],
    },
];

// VuePress 1.x 多侧边栏配置
// 注意：回退配置 '/' 应该放在最后
const sidebarConfig = {
    // 词典页面使用独立的词典侧边栏
    "/glossary/": glossarySidebar,
    
    // 资源与工具页面使用独立的资源与工具侧边栏
    "/resources-tools/": resourcesToolsSidebar,

    // 蓝军研究
    "/blue-team-research/": blueTeamResearchSidebar,

    // Space News
    "/space-news/": spaceNewsSidebar,
    
    // 主要页面使用主侧边栏
    "/what-is-cislunarspace/": mainSidebar,
    "/cislunar-orbits/": mainSidebar,
    "/research-frontiers/": mainSidebar,
    
    // 默认侧边栏（用于首页和其他页面）- 放在最后
    "/": mainSidebar,
};

export default sidebarConfig;
