---
permalink: /resources-tools/
title: 地月空间资源与工具
description: 仿真软件、核心算法库、数据资源与计算平台索引。
lastUpdated: 2026-04-27
wechatShare:
  title: 地月空间资源与工具
  desc: 数据、代码库与数据集索引。
  image: /logo.png
---

# 地月空间资源与工具

地月空间轨道设计与任务分析依赖专门的动力学算法、星历数据与仿真工具。这里汇总经过工程验证的软件、开源算法库、物理数据集与数据平台，方便直接调用与复现。

## 仿真软件

用于轨道方案设计、多体摄动分析与空间几何可视化的专业软件。

| 工具 | 说明 |
| ------ | ------ |
| [GMAT](https://sourceforge.net/projects/gmat/) | NASA开源通用任务分析工具，支持高精度数值积分、多体引力场建模与轨迹优化 |
| STK | AGI商业仿真平台，用于全域空间几何视线、星间链路与轨道机动综合推演 |
| [ATK](https://www.osredm.com/atknudt/atk/about) | 国防科技大学航天任务分析工具箱，适配复杂深空多体动力学校核与自主规划 |
| [Cesium](https://cesium.com/) | 开源三维地球与空间场景可视化引擎，支持地月大尺度轨迹的动态三维渲染 |

## 核心算法库

用于天体力学计算、周期轨道求解与轨道转移搜索的开源代码库。

| 工具 | 说明 |
| ------ | ------ |
| [e2m2e](/resources-tools/e2m2e/)（[GitHub](https://github.com/cislunarspace/e2m2e)） | 地月空间轨道设计库，覆盖三体动力学、N体历表动力学、八类典型轨道族生成与系统工程建模 |
| [r2s2](https://github.com/r2s2-astro/r2s2) | 地月空间时空坐标转换库，支持惯性系、旋转系与月面固连系之间的高精度历表转换 |
| [Orekit](https://github.com/CS-SI/Orekit) | 欧洲空间局开源飞行动力学底层算法库，基于Java实现，支持高保真数值积分 |
| [pykep](https://github.com/esa/pykep) | 欧洲空间局行星际与深空轨迹优化库，提供转移轨道全局搜索算法 |
| [scipy](https://github.com/scipy/scipy) | Python科学计算库，提供非线性方程求解、数值微分与常微分方程积分基础工具 |
| [poliastro](https://github.com/poliastro/poliastro) | Python天体力学计算库，提供开普勒轨道根数转换与简单机动计算 |

## 数据资源

高精度行星月球星历、月球重力场球谐系数与空间物理参数的下载渠道与使用说明，详见 [数据集资源](/resources-tools/datasets/)。

## 科学数据平台

| 平台 | 说明 |
|------|------|
| 数字月球云平台 | 中科院地球化学研究所月球探测数据云平台，提供月球地质演化与矿物光谱遥感数据检索 |
