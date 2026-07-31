---
title: 二次规划（Quadratic Programming, QP）
description: 目标函数为二次型、约束为线性的优化问题。标准形式为 min (1/2)x^T H x + f^T x，s.t. Ax <= b。二次规划有成熟高效的求解器（如 Gurobi），可在多项式时间内求解。交会对接的 MPC 问题在概率约束线性化后自然归结为二次规划。
keywords: 二次规划, Quadratic Programming, QP, QP, 轨道动力学, 姿态控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 二次规划（Quadratic Programming, QP）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 二次规划详解 | 术语定义
  description: 目标函数为二次型、约束为线性的优化问题。标准形式为 min (1/2)x^T H x + f^T x，s.t. Ax <= b。二次规划有成熟高效的求解器（如 Gurobi），可在多项式时间内求解。交会对接的 MPC 问题在概率约束线性化后自然归结为二次规划。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 二次规划详解 | 术语定义
  description: 目标函数为二次型、约束为线性的优化问题。标准形式为 min (1/2)x^T H x + f^T x，s.t. Ax <= b。二次规划有成熟高效的求解器（如 Gurobi），可在多项式时间内求解。交会对接的 MPC 问题在概率约束线性化后自然归结为二次规划。
  image: /logo.png
permalink: /glossary/dynamics/quadratic-programming-qp/
---

# 二次规划（Quadratic Programming, QP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

目标函数为二次型、约束为线性的优化问题。标准形式为 min (1/2)x^T H x + f^T x，s.t. Ax <= b。二次规划有成熟高效的求解器（如 Gurobi），可在多项式时间内求解。交会对接的 MPC 问题在概率约束线性化后自然归结为二次规划。

## 应用价值

本术语在地月空间任务中具有重要应用价值。在轨道设计方面，它可以用于优化转移轨迹，降低任务燃料消耗。在姿态控制与动力学分析中，它有助于理解航天器在复杂引力场中的运动特性，为任务规划提供理论支撑。在导航与轨道确定中，基于该术语的方法能够提高轨道预报精度，支撑自主导航算法的发展。

## 相关概念

- [相对运动周期性条件（Periodicity Conditions in Relative Orbital Motion）](/glossary/dynamics/periodicity-conditions-in-relative-orbital-motion/)
- [螺旋式编队（Helix Formation）](/glossary/dynamics/helix-formation/)
- [能量耗散法（Energy Dissipation Method）](/glossary/dynamics/energy-dissipation-method/)
- [不稳定流形（Unstable Manifold）](/glossary/dynamics/unstable-manifold/)

## 参考文献

- Sanchez et al. 2020
- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
