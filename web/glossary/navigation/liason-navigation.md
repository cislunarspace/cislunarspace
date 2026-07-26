---
title: LiAISON自主导航（LiAISON Navigation）
description: 详细解析LiAISON自主导航的定义、原理、星间伪距测量技术及其在平衡点轨道导航中的应用
keywords: LiAISON, 自主导航, 星间伪距, 平衡点导航, Halo轨道, 地月空间导航, 深空探测
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: LiAISON自主导航（LiAISON Navigation）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: LiAISON自主导航（LiAISON Navigation）详解 | 平衡点自主导航
  description: 详细解析LiAISON自主导航的定义、原理、星间伪距测量技术及其在平衡点轨道导航中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: LiAISON自主导航（LiAISON Navigation）详解 | 平衡点自主导航
  description: 详细解析LiAISON自主导航的定义、原理、星间伪距测量技术及其在平衡点轨道导航中的应用
  image: /logo.png
permalink: /glossary/navigation/liason-navigation/
---

# LiAISON自主导航（LiAISON Navigation）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

LiAISON（Linked Autonomous Interplanetary Satellite Orbit Navigation）即**链路自主行星际卫星轨道导航**，是由 Hill 等于 2005 年提出的导航概念。仅利用星间伪距测量信息即可进行卫星绝对导航，其可行性建立在平衡点轨道的非对称性和局部唯一性之上。通过交联测距可实现平衡点自主导航，实时在轨测量精度可达 10 米量级。

## 核心要素

### LiAISON 导航原理

LiAISON 导航的核心思想是利用星间测距实现绝对定位：

- **星间伪距测量**：两颗或多颗卫星之间通过微波或激光链路测量伪距，获得高精度的相对距离信息
- **绝对导航**：与传统相对导航不同，LiAISON 利用平衡点轨道的动力学特性，仅凭星间测距即可确定卫星在惯性空间中的绝对位置
- **无地面依赖**：导航完全自主进行，不依赖地面测控站或外部导航系统

### 平衡点轨道的动力学特性

LiAISON 导航可行性的理论基础是平衡点轨道的独特动力学性质：

- **非对称性**：共线平动点（L1、L2、L3）附近的轨道在地月连线方向上具有非对称结构，不同位置对应不同的动力学环境
- **局部唯一性**：在平衡点附近，给定一组星间测距观测值，对应唯一的轨道状态，这保证了导航解的唯一性
- **敏感性**：平衡点轨道对初始条件高度敏感，测距信息的微小变化可反映轨道状态的显著差异，有利于提高导航精度

### 交联测距技术

交联测距是 LiAISON 导航的关键技术环节：

- **测距精度**：微波测距精度可达米级，激光测距精度可达厘米级
- **链路设计**：星间链路需满足视距条件和信号质量要求
- **几何构型**：多颗卫星的几何构型影响导航精度，需优化卫星编队构型
- **测量频率**：高频率测距可提高导航滤波器的收敛速度和精度

### 导航精度分析

LiAISON 导航的精度受多种因素影响：

- **实时精度**：在轨实时测量精度可达 10 米量级
- **滤波算法**：扩展卡尔曼滤波（EKF）等算法可用于融合星间测距和轨道动力学模型
- **误差源**：测距误差、轨道模型误差、太阳光压等非引力摄动是主要误差源
- **精度提升**：增加观测弧长和测距频率可进一步提高导航精度

## 应用价值

LiAISON 自主导航在地月空间探测中具有重要应用价值：

- **平衡点任务导航**：为地月 L1/L2 平动点附近的卫星提供自主导航能力
- **月球背面通信中继**：支持月球背面中继卫星的自主定轨
- **深空探测扩展**：LiAISON 概念可推广至日地 L1/L2 等更远距离的深空任务
- **导航冗余**：为 GNSS 不可达区域提供独立的导航备份手段
- **地月空间基础设施**：支撑未来地月空间通信、导航和授时（PNT）体系建设

## 相关概念

- [平动点（Libration Point）](/glossary/dynamics/libration-point/)
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [X射线脉冲星导航](/glossary/navigation/xray-pulsar-navigation/)
- [月球导航星座](/glossary/navigation/lunar-navigation-constellation/)

## 参考文献

- Hill K, Born G H. Linked autonomous interplanetary satellite orbit navigation [LiAISON](C). AAS/AIAA Astrodynamics Specialist Conference, 2005.
- Hill K A. Autonomous Navigation in Libration Point Orbits[D]. University of Colorado, 2007.
- 刘林等. 地月系平动点动力学与轨道设计[M]. 北京: 国防工业出版社, 2019.
