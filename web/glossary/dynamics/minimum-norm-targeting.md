---
title: 最小范数靶点法（Minimum Norm Targeting）
description: 一种微分修正策略，在多个约束条件下求解使速度修正量范数最小的解。与标准靶点法相比，该方法产生的修正量最小，使高保真星历模型中的转移轨迹尽量贴近圆形限制性三体问题中的初始设计。论文用此方法将 CR3BP 轨道过渡到星历模型，保持几何特征基本不变。
keywords: 最小范数靶点法, Minimum Norm Targeting, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 最小范数靶点法（Minimum Norm Targeting）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 最小范数靶点法详解 | 术语定义
  description: 一种微分修正策略，在多个约束条件下求解使速度修正量范数最小的解。与标准靶点法相比，该方法产生的修正量最小，使高保真星历模型中的转移轨迹尽量贴近圆形限制性三体问题中的初始设计。论文用此方法将 CR3BP 轨道过渡到星历模型，保持几何特征基本不变。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 最小范数靶点法详解 | 术语定义
  description: 一种微分修正策略，在多个约束条件下求解使速度修正量范数最小的解。与标准靶点法相比，该方法产生的修正量最小，使高保真星历模型中的转移轨迹尽量贴近圆形限制性三体问题中的初始设计。论文用此方法将 CR3BP 轨道过渡到星历模型，保持几何特征基本不变。
  image: /logo.png
permalink: /glossary/dynamics/minimum-norm-targeting/
---

# 最小范数靶点法（Minimum Norm Targeting）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种微分修正策略，在多个约束条件下求解使速度修正量范数最小的解。与标准靶点法相比，该方法产生的修正量最小，使高保真星历模型中的转移轨迹尽量贴近圆形限制性三体问题中的初始设计。论文用此方法将 CR3BP 轨道过渡到星历模型，保持几何特征基本不变。

## 应用价值

在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。该方法可用于精确修正轨道偏差，提高轨道预报精度。该模型是分析地月空间动力学、设计低能量转移轨道的基础工具。

## 相关概念

- [希尔球半径（Hill Sphere Radius）](/glossary/dynamics/hill-sphere-radius/)
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincar-map-representation/)
- [混合差分动态规划（Hybrid Differential Dynamic Programming, HDDP）](/glossary/dynamics/hybrid-differential-dynamic-programming-hddp/)

## 参考文献

- Zimovan-Spreen et al. 2022
