import { SidebarConfig4Multiple } from "vuepress/config";

import knowledgeSideBar from "./sidebars/knowledgeSideBar";
// @ts-ignore
export default {
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
        "CAPSTONE任务",
        "GRAIL-SMART-1任务",
        "阿耳忒弥斯计划",
        "LONEStar实验",
    ],
    "/技术词典/": [
        "",
        "动力学基础",
        "轨道类型",
        "转移策略",
        "GNC 技术",
        "任务要素",
        "X 射线脉冲星导航",
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
                "/动力学/",
                "/案例实践/",
                "/技术词典/",
                "/资源工具/",
                "/关于/",
            ]
        }
    ],
} as SidebarConfig4Multiple;
