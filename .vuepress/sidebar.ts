import { SidebarConfig4Multiple } from "vuepress/config";

import knowledgeSideBar from "./sidebars/knowledgeSideBar";
// @ts-ignore
export default {
    "/知识体系/": knowledgeSideBar,
    "/案例实践/": [
        "",
        "CAPSTONE任务",
        "GRAIL-SMART-1任务",
        "阿耳忒弥斯计划",
        "LONEStar实验",
    ],
    "/技术词典/": [
        "",
        "X 射线脉冲星导航",
    ],
    "/资源工具/": [
        "",
        "数据集下载",
    ],
    "/关于/": [
        "",
    ],
    // 主页左侧边栏：显示主要导航
    "/": [
        {
            title: "快速导航",
            children: [
                "/知识体系/",
                "/案例实践/",
                "/技术词典/",
                "/资源工具/",
                "/关于/",
            ]
        }
    ],
} as SidebarConfig4Multiple;
