---
title: 自主定轨（Autonomous Orbit Determination）
description: 航天器不依赖地面测控站，仅利用星间测距数据和轨道动力学模型自主确定自身轨道的技术。在围绕单一天体的系统中，仅用星间测距存在旋转对称性导致的秩亏问题，无法定轨。在三体问题中，第三体强引力摄动破坏了力场的旋转对称性，使信息矩阵恢复满秩，从而可仅凭星间测距完成定轨。
keywords: 自主定轨, Autonomous Orbit Determination, AOD, 自主导航, 轨道确定, 测距
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 自主定轨（Autonomous Orbit Determination）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 自主定轨详解 | 术语定义
  description: 航天器不依赖地面测控站，仅利用星间测距数据和轨道动力学模型自主确定自身轨道的技术。在围绕单一天体的系统中，仅用星间测距存在旋转对称性导致的秩亏问题，无法定轨。在三体问题中，第三体强引力摄动破坏了力场的旋转对称性，使信息矩阵恢复满秩，从而可仅凭星间测距完成定轨。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 自主定轨详解 | 术语定义
  description: 航天器不依赖地面测控站，仅利用星间测距数据和轨道动力学模型自主确定自身轨道的技术。在围绕单一天体的系统中，仅用星间测距存在旋转对称性导致的秩亏问题，无法定轨。在三体问题中，第三体强引力摄动破坏了力场的旋转对称性，使信息矩阵恢复满秩，从而可仅凭星间测距完成定轨。
  image: /logo.png
permalink: /glossary/navigation/autonomous-orbit-determination/
---

# 自主定轨（Autonomous Orbit Determination）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

航天器不依赖地面测控站，仅利用星间测距数据和轨道动力学模型自主确定自身轨道的技术。在围绕单一天体的系统中，仅用星间测距存在旋转对称性导致的秩亏问题，无法定轨。在三体问题中，第三体强引力摄动破坏了力场的旋转对称性，使信息矩阵恢复满秩，从而可仅凭星间测距完成定轨。

## 应用价值

在轨道力学分析和任务设计中，该概念为轨道特性评估和方案比选提供理论依据，有助于优化轨道设计参数，提高任务经济性。

## 相关概念

- [地心天体参考框架（Geocentric Celestial Reference Frame）](/glossary/dynamics/geocentric-celestial-reference-frame/)
- [运行轨道库（Operational Orbit Library）](/glossary/orbits/operational-orbit-library/)
- [月球自由返回轨道（Lunar Free-Return Orbit, LFO）](/glossary/orbits/lunar-free-return-orbit/)
- [临界轨道（Critical Orbit）](/glossary/orbits/critical-orbit/)

## 参考文献

- Liu et al. 2024, A novel autonomous navigation constellation in the Earth–Moon system
- 黄勇 等 - 2023 - 地月空间探测器星间测距自主定轨
