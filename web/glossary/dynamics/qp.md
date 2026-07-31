---
title: 二次规划（Quadratic Programming, QP）
description: 目标函数为二次型、约束为线性的优化问题。标准形式为 min (1/2)x^T H x + f^T x，s.t. Ax <= b。二次规划有成熟高效的求解器（如 Gurobi），可在多项式时间内求解。交会对接的 MPC 问题在概率约束线性化后自然归结为二次规划。
keywords: 二次规划, Quadratic Programming, QP, QP, dynamics
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
permalink: /glossary/dynamics/qp/
---

# 二次规划（Quadratic Programming, QP）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

目标函数为二次型、约束为线性的优化问题。标准形式为 min (1/2)x^T H x + f^T x，s.t. Ax <= b。二次规划有成熟高效的求解器（如 Gurobi），可在多项式时间内求解。交会对接的 MPC 问题在概率约束线性化后自然归结为二次规划。

## 应用价值

二次规划方法在地月空间任务规划中用于求解大规模优化问题，能够在多约束条件下找到满足任务需求的解决方案。

## 相关概念

- [序贯二次规划（Sequential Quadratic Programming）](/glossary/dynamics/sqp/)

## 参考文献

- Sanchez et al. 2020。
- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment。
