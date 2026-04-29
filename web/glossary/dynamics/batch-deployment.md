---
title: 批量部署（Batch Deployment）
description: 解析批量部署的概念、在卫星星座建设中的应用，以及与轨道转移飞行器（OTV）的结合
keywords: 批量部署, Batch Deployment, 小卫星部署, 星座部署, OTV, 轨道转移飞行器
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 批量部署（Batch Deployment）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 批量部署详解 | 卫星星座快速组网
  description: 解析批量部署的概念、在卫星星座建设中的应用，以及与轨道转移飞行器（OTV）的结合
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 批量部署详解 | 卫星星座快速组网
  description: 解析批量部署的概念及其在卫星星座快速组网中的应用
  image: /logo.png
permalink: /glossary/dynamics/batch-deployment/
---

# 批量部署（Batch Deployment）

>本文编辑来源：胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

批量部署（Batch Deployment）是指使用单个运载工具或轨道转移飞行器（OTV）将多颗卫星依次部署到目标轨道的任务模式。与传统的单星单次发射模式不同，批量部署通过优化部署序列和转移轨迹，实现多颗卫星的高效、经济部署。

## 批量部署的挑战

### 多目标交汇问题

批量部署任务本质上是多目标交汇问题（Multi-target Rendezvous, MTRP），其核心挑战在于：

- **离散-连续耦合**：离散的卫星访问序列与连续的转移轨迹需要进行深度耦合优化
- **NP-hard属性**：问题复杂度呈指数级增长，求解计算复杂度极高
- **状态依赖性**：每次卫星分离后的质量阶跃影响后续转移成本

### 质量阶跃影响

每次小卫星分离后，OTV总质量发生离散下降：

- 质量阶跃直接影响后续轨道转移的动力学特性
- 忽略质量阶跃的简化模型会系统性低估任务后期成本
- 精确建模质量阶跃对获得高质量规划方案至关重要

## 批量部署架构

### 中心辐射式架构

胡敏等（2026）提出基于"中心辐射式"（Hub-and-spoke）的小卫星批量部署架构：

- OTV与在轨驻留平台共轨驻留
- OTV从平台出发完成一批部署后返回平台补加工质
- 形成闭环的空间物流运行流程

### 与传统模式对比

| 部署模式 | 特点 | 适用场景 |
|:---|:---|:---|
| 直接入轨 | 成本高、周期长、灵活性差 | 小规模任务 |
| 间接入轨（火箭送至停泊轨道） | 消耗小卫星自身工质，缩短服役寿命 | 中等规模 |
| OTV批量部署 | 灵活、经济、可重复使用 | 大规模星座部署 |

## 求解方法

### 部分解耦两阶段算法

胡敏等提出的求解框架将问题分解为：

1. **轨迹优化阶段**：采用基于改进春分点轨道根数的Q-law控制律，离线生成高保真的状态依赖转移成本矩阵
2. **序列规划阶段**：将问题建模为状态依赖旅行商问题（SDTSP），采用动态规划算法求解最优部署序列

### 状态依赖建模的重要性

研究结果表明（胡敏等, 2026）：

- 精确考虑状态依赖性可显著提升规划方案质量
- 在N=12的部署场景中，状态相关方法的工质消耗比状态无关方法降低约25.8%
- 状态无关模型在任务规模较大时甚至无法找到可行解

## 应用场景

- **中高轨导航星座**：如GPS、北斗、MEO导航增强
- **LEO巨型星座**：如Starlink、OneWeb等大规模宽带星座
- **地月空间部署**：支持在地月空间各轨道面的卫星部署

## 相关概念

- [轨道转移飞行器（OTV）](/glossary/fundamentals/orbital-transfer-vehicle/)
- [状态依赖旅行商问题（SDTSP）](/glossary/dynamics/state-dependent-tsp/)
- [Q-law控制律](/glossary/dynamics/q-law/)
- [质量阶跃（Mass Discontinuity）](/glossary/dynamics/mass-discontinuity/)
- [中心辐射式（Hub-and-spoke）](/glossary/orbits/hub-and-spoke/)
- [在轨驻留平台（Orbital Residence Platform）](/glossary/other/orbital-residence-platform/)

## 参考文献

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Baratof T, Toson E, Milza F, et al. Investigation of different strategies for access to space of small satellites on a defined LEO orbit[J]. Acta Astronautica, 2024, 222: 11-28.
- Narayanaswamy S, Wu B, Ludivig P, et al. Low-thrust rendezvous trajectory generation for multi-target active space debris removal using the RQ-law[J]. Advances in Space Research, 2023, 71(10): 4276-4287.