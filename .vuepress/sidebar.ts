import {SidebarConfig4Multiple} from "vuepress/config";

import roadmapSideBar from "./sidebars/roadmapSideBar";
import knowledgeSideBar from "./sidebars/knowledgeSideBar";
// @ts-ignore
export default {
    "/学习路径/": roadmapSideBar,
    "/知识体系/": knowledgeSideBar,
    "/动力学/": [
        "",
        "拉格朗日点与平动点轨道",
        "不变流形物理意义与工程应用",
        "弱稳定性边界理论与低能量转移",
        "数值计算方法",
    ],
    "/案例实践/": [
        "",
        "CAPSTONE 任务",
        "GRAIL-SMART-1 任务",
        "阿耳忒弥斯计划",
        "LONEStar 实验",
    ],
    "/技术词典/": [
        "",
        "动力学基础",
        "轨道类型",
        "转移策略",
        "GNC 技术",
        "任务要素",
    ],
    "/社区/": [
        "",
        "技术问答",
        "项目协作",
        "前沿追踪",
        "职业发展",
    ],
    "/资源工具/": [
        "",
        "开源代码库",
        "仿真平台指南",
        "数据集下载",
        "文献索引",
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
                "/学习路径/",
                "/动力学/",
                "/案例实践/",
                "/技术词典/",
                "/社区/",
                "/资源工具/",
                "/关于/",
            ]
        }
    ],
} as SidebarConfig4Multiple;
