---
title: 序列凸规划（Sequential Convex Programming, SCP）
description: 将非凸最优控制问题通过逐次凸化近似为一系列凸优化子问题的求解方法。每次迭代在当前解处对非凸约束做凸近似，求解凸子问题后更新参考点。具有良好的收敛性和实时性，但需要定制内点法求解器，工程实现复杂度较高。
keywords: 序列凸规划, Sequential Convex Programming, SCP, SCP
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 序列凸规划（Sequential Convex Programming, SCP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 序列凸规划详解 | 术语定义
  description: 将非凸最优控制问题通过逐次凸化近似为一系列凸优化子问题的求解方法。每次迭代在当前解处对非凸约束做凸近似，求解凸子问题后更新参考点。具有良好的收敛性和实时性，但需要定制内点法求解器，工程实现复杂度较高。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 序列凸规划详解 | 术语定义
  description: 将非凸最优控制问题通过逐次凸化近似为一系列凸优化子问题的求解方法。每次迭代在当前解处对非凸约束做凸近似，求解凸子问题后更新参考点。具有良好的收敛性和实时性，但需要定制内点法求解器，工程实现复杂度较高。
  image: /logo.png
permalink: /glossary/dynamics/sequential-convex-programming-scp/
---

# 序列凸规划（Sequential Convex Programming, SCP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将非凸最优控制问题通过逐次凸化近似为一系列凸优化子问题的求解方法。每次迭代在当前解处对非凸约束做凸近似，求解凸子问题后更新参考点。具有良好的收敛性和实时性，但需要定制内点法求解器，工程实现复杂度较高。

## 应用价值

在轨道设计、分析和控制中，需要利用动力学模型预测航天器轨迹，并通过数值方法或解析方法求解运动方程。该概念支撑轨道机动设计、轨道改进和编队飞行等关键任务。

## 相关概念

- [轨道改进（Orbit Improvement）](/glossary/dynamics/orbit-improvement/)
- [聚类聚合（Cluster Aggregation）](/glossary/dynamics/cluster-aggregation/)
- [伪谱法（Pseudospectral Method）](/glossary/dynamics/pseudospectral-method/)

## 参考文献

- Wang 等 - 2024 - Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics
