import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import knowledgeSideBar from "./sidebars/knowledgeSideBar";
// @ts-ignore
export default {
    "/学习路径/": roadmapSideBar,
    "/知识体系/": knowledgeSideBar,
    "/动力学/": "auto",
    "/案例实践/": "auto",
    "/技术词典/": "auto",
    "/社区/": "auto",
    "/资源工具/": "auto",
    "/关于/": "auto",
    // 降级，默认根据文章标题渲染侧边栏
    "/": "auto",
} as SidebarConfig4Multiple;
