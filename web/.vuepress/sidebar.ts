import { SidebarConfig4Multiple } from "vuepress/config";

// 全局侧边栏配置 - 在所有页面显示相同的导航结构
const globalSidebar = [
    {
        title: "地月空间是什么？",
        collapsable: true,
        children: [
            ["/what-is-cislunar-space/", "概述"],
            ["/what-is-cislunar-space/environment", "空间环境特征"],
            ["/what-is-cislunar-space/references", "参考文献"],
        ]
    },
    {
        title: "地月空间飞行器在什么轨道上运行？",
        collapsable: true,
        children: [
            ["/cislunar-orbits/", "概述"],
        ]
    },
    {
        title: "地月空间科学研究前沿在哪里？",
        collapsable: true,
        children: [
            ["/research-frontiers/", "引言"],
            ["/research-frontiers/directions", "研究方向"],
            ["/research-frontiers/institutions", "研究机构和组织"],
            ["/research-frontiers/journals-conferences", "期刊会议"],
            ["/research-frontiers/major-projects", "重大项目"],
        ]
    },
    {
        title: "地月空间术语词典",
        collapsable: true,
        children: [
            ["/glossary/", "概述"],
            ["/glossary/cr3bp", "圆形限制性三体问题"],
            ["/glossary/xray-pulsar-navigation", "X射线脉冲星导航"],
        ]
    },
    {
        title: "资源与工具",
        collapsable: true,
        children: [
            ["/resources-tools/", "引言"],
            ["/resources-tools/datasets", "数据集下载"],
        ]
    },
    {
        title: "关于本站",
        collapsable: true,
        children: [
            ["/about/", "引言"],
        ]
    }
];

// @ts-ignore
export default {
    // 所有页面都使用相同的全局侧边栏
    "/": globalSidebar,
    "/what-is-cislunar-space/": globalSidebar,
    "/what-is-cislunar-space/environment": globalSidebar,
    "/what-is-cislunar-space/references": globalSidebar,
    "/cislunar-orbits/": globalSidebar,
    "/research-frontiers/": globalSidebar,
    "/research-frontiers/journals-conferences": globalSidebar,
    "/research-frontiers/directions": globalSidebar,
    "/research-frontiers/institutions": globalSidebar,
    "/research-frontiers/major-projects": globalSidebar,
    "/glossary/": globalSidebar,
    "/glossary/cr3bp": globalSidebar,
    "/glossary/xray-pulsar-navigation": globalSidebar,
    "/resources-tools/": globalSidebar,
    "/resources-tools/datasets": globalSidebar,
    "/about/": globalSidebar,
} as SidebarConfig4Multiple;
