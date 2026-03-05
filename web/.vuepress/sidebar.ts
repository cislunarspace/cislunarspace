import { SidebarConfig4Multiple } from "vuepress/config";

// 主侧边栏配置 - 用于主要页面
const mainSidebar = [
    {
        title: "地月空间是什么",
        collapsable: true,
        children: [
            ["/what-is-cislunarspace/", "概述"],
            ["/what-is-cislunarspace/environment", "空间环境特征"],
            ["/what-is-cislunarspace/references", "参考文献"],
        ]
    },
    {
        title: "地月空间飞行器运行轨道",
        collapsable: true,
        children: [
            ["/cislunar-orbits/", "概述"],
        ]
    },
    {
        title: "地月空间科学研究前沿",
        collapsable: true,
        children: [
            ["/research-frontiers/", "引言"],
            ["/research-frontiers/directions", "研究方向"],
            ["/research-frontiers/institutions", "研究机构和组织"],
            ["/research-frontiers/journals-conferences", "期刊会议"],
            ["/research-frontiers/major-projects", "重大项目"],
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
            ["/resources-tools/", "概述"],
            ["/resources-tools/datasets", "数据集"],
        ]
    }
];

// @ts-ignore
export default {
    // 首页使用主侧边栏
    "/": mainSidebar,
    
    // 主要页面使用主侧边栏
    "/what-is-cislunarspace/": mainSidebar,
    "/what-is-cislunarspace/environment": mainSidebar,
    "/what-is-cislunarspace/references": mainSidebar,
    "/cislunar-orbits/": mainSidebar,
    "/research-frontiers/": mainSidebar,
    "/research-frontiers/journals-conferences": mainSidebar,
    "/research-frontiers/directions": mainSidebar,
    "/research-frontiers/institutions": mainSidebar,
    "/research-frontiers/major-projects": mainSidebar,
    
    // 词典页面使用独立的词典侧边栏
    "/glossary/": glossarySidebar,
    "/glossary/cr3bp": glossarySidebar,
    "/glossary/xray-pulsar-navigation": glossarySidebar,
    
    // 资源与工具页面使用独立的资源与工具侧边栏
    "/resources-tools/": resourcesToolsSidebar,
    "/resources-tools/datasets": resourcesToolsSidebar,
} as SidebarConfig4Multiple;
