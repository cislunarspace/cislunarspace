---
title: 中心辐射式（Hub-and-spoke）
description: 解析中心辐射式架构的定义、在卫星部署中的应用、以及与轨道转移飞行器的结合
keywords: 中心辐射式, Hub-and-spoke, 空间物流, 部署架构, OTV, 卫星部署
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 中心辐射式（Hub-and-spoke）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 中心辐射式架构详解 | 卫星部署模式
  description: 解析中心辐射式架构在卫星部署中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 中心辐射式架构详解 | 卫星部署模式
  description: 解析中心辐射式部署架构及其与OTV的结合
  image: /logo.png
permalink: /glossary/orbits/hub-and-spoke/
---

# 中心辐射式（Hub-and-spoke）

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

中心辐射式（Hub-and-spoke）是一种空间物流与部署架构，其中轨道转移飞行器（OTV）作为"太空巴士"，与在轨驻留平台共轨驻留，从平台出发完成部署任务后必须返回平台补加工质、实施维护，以承接后续任务。

该架构是实现OTV可重复使用和构建高效费比空间物流体系的关键工程约束。

## 架构特点

### 核心组件

1. **在轨驻留平台**：与OTV共轨驻留的长期在轨平台
2. **轨道转移飞行器（OTV）**：执行具体部署任务的运输工具
3. **目标轨道**：各小卫星的工作轨道
4. **小卫星**：待部署的有效载荷

### 运行流程

胡敏等（2026）描述的运行流程：

1. 运载火箭上面级将OTV送入目标工作区域附近的停泊轨道
2. OTV与在轨驻留平台对接或共轨运行
3. OTV从平台出发，按访问序列依次到达各目标工作轨道
4. OTV在各目标轨道精确释放相应小卫星
5. 完成一批部署后，OTV返回平台补加工质
6. 循环执行直至完成全部部署任务

### 工程优势

| 优势 | 说明 |
| :--- | :--- |
| 可重复使用 | OTV返回平台可补加推进剂、实施维护 |
| 灵活部署 | 从统一平台出发，灵活应对多轨道面、多高度层部署需求 |
| 延长寿命 | 小卫星无需消耗自身工质，延长在轨服役寿命 |
| 高效费比 | 多次复用降低单位有效载荷运输成本 |

## 与传统模式对比

### 直接入轨模式

- 卫星直接由运载火箭送入目标轨道
- 成本高昂、发射周期长
- 难以灵活应对复杂部署需求

### 间接入轨模式（卫星自主机动）

- 火箭送至停泊轨道
- 卫星依靠自身推进系统机动至目标轨道
- 大量消耗小卫星自身宝贵的工质
- 显著缩短在轨服役寿命

### 中心辐射式OTV部署模式

- OTV作为运输中介
- 小卫星被动部署（无需自主机动）
- 平台补给实现OTV可重复使用
- 综合成本和灵活性最优

## 在中高轨部署中的适用性

### 中高轨特性

中高轨卫星星座具有以下特点：

- **覆盖性能优越**：单星覆盖范围大
- **构型集中**：卫星集中部署在特定轨道平面附近
- **部署难度大**：轨道转移需要更多推进剂

### 中心辐射式解决方案

胡敏等（2026）的研究表明：

- OTV从平台出发可依次访问中高轨各目标轨道
- 平台补给确保OTV有足够工质完成任务
- 部署序列优化实现总成本最小化
- 工质节省可达25.8%（相比状态无关模型）

## 多OTV协同展望

研究指出，未来可探索多OTV协同的部署模式：

- 多艘OTV并行执行部署任务
- 协同规划进一步提高部署效率
- SDTSP模型是协同规划的核心基础

## 相关概念

- [轨道转移飞行器（OTV）](/glossary/fundamentals/orbital-transfer-vehicle/)
- [批量部署（Batch Deployment）](/glossary/dynamics/batch-deployment/)
- [在轨驻留平台（Orbital Residence Platform）](/glossary/other/orbital-residence-platform/)
- [状态依赖旅行商问题（SDTSP）](/glossary/dynamics/state-dependent-tsp/)
- [质量阶跃（Mass Discontinuity）](/glossary/dynamics/mass-discontinuity/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Baratof T, Toson E, Milza F, et al. Investigation of different strategies for access to space of small satellites on a defined LEO orbit[J]. Acta Astronautica, 2024, 222: 11-28.
