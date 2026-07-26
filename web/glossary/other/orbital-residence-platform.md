---
title: 在轨驻留平台（Orbital Residence Platform）
description: 解析在轨驻留平台的概念、在中心辐射式部署架构中的作用、以及与OTV的协同运行模式
keywords: 在轨驻留平台, Orbital Residence Platform, 空间物流, 中心辐射式, OTV, 卫星部署
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 在轨驻留平台（Orbital Residence Platform）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 在轨驻留平台详解 | 空间物流枢纽
  description: 解析在轨驻留平台在中心辐射式部署架构中的作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 在轨驻留平台详解 | 空间物流枢纽
  description: 解析在轨驻留平台在空间物流和卫星部署中的作用
  image: /logo.png
permalink: /glossary/other/orbital-residence-platform/
---

# 在轨驻留平台（Orbital Residence Platform）

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在轨驻留平台（Orbital Residence Platform）是中心辐射式（Hub-and-spoke）部署架构中的核心基础设施，与轨道转移飞行器（OTV）共轨驻留，为OTV提供补给、维护和任务接力的停泊站点。

在轨驻留平台是实现OTV可重复使用和构建高效费比空间物流体系的关键组成部分。

## 功能定位

### 核心功能

1. **OTV停泊与补给**：为完成部署任务返回的OTV提供停泊位置和推进剂补给
2. **维护与检修**：对OTV进行状态检查和维护保养
3. **任务接力**：接收已完成部署任务的OTV，并为下一批任务做准备
4. **有效载荷中转**：可作为小卫星等有效载荷的中转存储点

### 与传统模式的区别

中心辐射式架构中，在轨驻留平台扮演类似以下角色：

- 航天领域的"太空港口"
- 地月空间的"物流枢纽"
- 星座部署的"指挥塔"

## 架构中的作用

### 部署流程中的地位

胡敏等（2026）描述的任务流程：

1. **任务起点**：OTV从平台出发执行部署任务
2. **任务终点**：OTV完成一批部署后返回平台
3. **补给循环**：平台为OTV补加工质、实施维护
4. **任务接续**：OTV执行下一批部署任务

### 闭环运行机制

平台的存在使部署任务形成闭环：

```text
平台 → OTV出发 → 依次部署 → OTV返回 → 补给维护 → 平台 → OTV再出发
```

这种闭环是OTV可重复使用的基础，实现了单次发射、多次部署的高效运行模式。

## 技术特点

### 轨道共驻

平台与OTV共轨驻留，具有以下优势：

- **转移成本低**：OTV无需额外机动即可对接
- **任务调度灵活**：可根据需要灵活调度OTV出动
- **系统可靠性高**：冗余设计提高任务可靠性

### 补给能力

平台应具备的补给能力：

| 补给类型 | 说明 |
| :--- | :--- |
| 推进剂补给 | 为OTV补加工质 |
| 电力补给 | 为OTV充电或供电 |
| 热控管理 | 维持OTV适宜温度环境 |
| 状态监测 | 检测OTV技术状态 |

## 应用场景

### 中高轨卫星部署

在中高轨导航星座部署中：

- 平台部署在目标工作区域附近
- OTV从平台出发可覆盖多个轨道面
- 通过多次循环完成全星座部署

### 地月空间运输

在地月空间物流体系中：

- 平台可作为地月转移的中转站
- 支持多艘OTV协同运行
- 构建地月空间的运输网络

## 相关概念

- [轨道转移飞行器（OTV）](/glossary/fundamentals/orbital-transfer-vehicle/)
- [中心辐射式（Hub-and-spoke）](/glossary/orbits/hub-and-spoke/)
- [批量部署（Batch Deployment）](/glossary/dynamics/batch-deployment/)
- [状态依赖旅行商问题（SDTSP）](/glossary/dynamics/state-dependent-tsp/)
- [质量阶跃（Mass Discontinuity）](/glossary/dynamics/mass-discontinuity/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- 宋征宇. 推动航天运输系统持续创新的控制技术与挑战[J]. 航空学报, 2025, 46(6): 531446.
