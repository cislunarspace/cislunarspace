---
title: 离散线性二次调节器（Discrete Linear Quadratic Regulator）
description: 基于离散动力学模型的最优控制策略。以状态偏差和控制增量构成二次型性能指标，通过递推求解 Riccati 方程获得最优反馈增益矩阵。在驻留维持中，DLQR 的优势在于反馈增益可预先计算存储，且无穷时域形式只需当前段信息，使用灵活。
keywords: 离散线性二次调节器, Discrete Linear Quadratic Regulator, DLQR, 轨道动力学, 轨道优化
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 离散线性二次调节器（Discrete Linear Quadratic Regulator）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 离散线性二次调节器详解 | 术语定义
  description: 基于离散动力学模型的最优控制策略。以状态偏差和控制增量构成二次型性能指标，通过递推求解 Riccati 方程获得最优反馈增益矩阵。在驻留维持中，DLQR 的优势在于反馈增益可预先计算存储，且无穷时域形式只需当前段信息，使用灵活。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 离散线性二次调节器详解 | 术语定义
  description: 基于离散动力学模型的最优控制策略。以状态偏差和控制增量构成二次型性能指标，通过递推求解 Riccati 方程获得最优反馈增益矩阵。在驻留维持中，DLQR 的优势在于反馈增益可预先计算存储，且无穷时域形式只需当前段信息，使用灵活。
  image: /logo.png
permalink: /glossary/dynamics/discrete-linear-quadratic-regulator/
---

# 离散线性二次调节器（Discrete Linear Quadratic Regulator）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

基于离散动力学模型的最优控制策略。以状态偏差和控制增量构成二次型性能指标，通过递推求解 Riccati 方程获得最优反馈增益矩阵。在驻留维持中，DLQR 的优势在于反馈增益可预先计算存储，且无穷时域形式只需当前段信息，使用灵活。

## 应用价值

该概念是分析地月空间动力学行为的基础工具。在轨道设计和任务分析中具有重要应用价值。

## 相关概念

- [希尔球半径（Hill Sphere Radius）](/glossary/dynamics/hill-sphere-radius/)
- [伪谱凸优化（Pseudospectral Convex Optimization）](/glossary/dynamics/pseudospectral-convex-optimization/)
- [庞加莱映射表示（Poincaré Map Representation）](/glossary/dynamics/poincar-map-representation/)
- [最小范数靶点法（Minimum Norm Targeting）](/glossary/dynamics/minimum-norm-targeting/)

## 参考文献

- Zhang et al., 2022
- Lian et al., 2014
