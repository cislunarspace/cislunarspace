---
title: 日食规避路径约束（Eclipse Avoidance Path Constraint）
description: 嵌入微分修正过程的一种路径约束，强制转移轨迹始终处于地球和月球阴影之外。约束基于遮挡天体阴影锥的几何关系建立，用积分型表达式实现。当航天器位于遮挡天体的阴影侧时，Heaviside 函数激活约束项，黎曼和近似求解积分。该约束适用于星历模型中的多段打靶法，可灵活扩展到限日食时长等更宽泛的任务需求。
keywords: 日食规避路径约束, Eclipse Avoidance Path Constraint, 轨道动力学, 轨道优化, 非线性动力学
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 日食规避路径约束（Eclipse Avoidance Path Constraint）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 日食规避路径约束详解 | 术语定义
  description: 嵌入微分修正过程的一种路径约束，强制转移轨迹始终处于地球和月球阴影之外。约束基于遮挡天体阴影锥的几何关系建立，用积分型表达式实现。当航天器位于遮挡天体的阴影侧时，Heaviside 函数激活约束项，黎曼和近似求解积分。该约束适用于星历模型中的多段打靶法，可灵活扩展到限日食时长等更宽泛的任务需求。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 日食规避路径约束详解 | 术语定义
  description: 嵌入微分修正过程的一种路径约束，强制转移轨迹始终处于地球和月球阴影之外。约束基于遮挡天体阴影锥的几何关系建立，用积分型表达式实现。当航天器位于遮挡天体的阴影侧时，Heaviside 函数激活约束项，黎曼和近似求解积分。该约束适用于星历模型中的多段打靶法，可灵活扩展到限日食时长等更宽泛的任务需求。
  image: /logo.png
permalink: /glossary/dynamics/eclipse-avoidance-path-constraint/
---

# 日食规避路径约束（Eclipse Avoidance Path Constraint）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

嵌入微分修正过程的一种路径约束，强制转移轨迹始终处于地球和月球阴影之外。约束基于遮挡天体阴影锥的几何关系建立，用积分型表达式实现。当航天器位于遮挡天体的阴影侧时，Heaviside 函数激活约束项，黎曼和近似求解积分。该约束适用于星历模型中的多段打靶法，可灵活扩展到限日食时长等更宽泛的任务需求。

## 应用价值

在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。该方法可用于精确修正轨道偏差，提高轨道预报精度。

## 相关概念

- [希尔球半径（Hill Sphere Radius）](/glossary/dynamics/hill-sphere-radius/)
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincar-map-representation/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/minimum-norm-targeting/)

## 参考文献

- Zimovan-Spreen et al. 2022
