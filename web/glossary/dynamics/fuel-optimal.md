---
title: 燃料最优控制（Fuel-optimal Control）
description: 详细解析燃料最优控制的定义、数学描述、与Bang-bang控制的关系及在地月空间轨道转移中的应用
keywords: 燃料最优控制, Fuel-optimal, Bang-bang控制, 轨道优化, 推进效率, 最优控制, 同伦法
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: 燃料最优控制（Fuel-optimal Control）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 燃料最优控制详解 | 最小化推进剂消耗的最优轨迹设计
  description: 详细解析燃料最优控制的定义、数学描述、与Bang-bang控制的关系及在地月空间轨道转移中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 燃料最优控制详解 | 最小化推进剂消耗的最优轨迹设计
  description: 详细解析燃料最优控制的定义、数学描述、与Bang-bang控制的关系及在地月空间轨道转移中的应用
  image: /logo.png
permalink: /glossary/dynamics/fuel-optimal/
---

# 燃料最优控制（Fuel-optimal Control）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室

## 定义

燃料最优控制（Fuel-optimal Control）是一类以最小化总推进剂消耗为性能指标的最优控制问题。在深空探测任务中，航天器携带的推进剂有限，燃料消耗量直接决定任务寿命和可达范围。因此，燃料最优控制是轨道设计中最重要的优化目标之一。根据庞特里亚金极值原理，燃料最优控制律具有 Bang-bang 特性。

## 数学描述

### 性能指标

燃料最优控制的性能指标定义为：

$$J = \frac{F}{I_{sp}g_0} \int_{t_0}^{t_f} u \, dt$$

其中 $F$ 为最大推力，$I_{sp}$ 为比冲，$g_0$ 为标准重力加速度，$u \in [0, 1]$ 为推力比。

### 最优控制律

由庞特里亚金极值原理导出的最优推力比满足：

$$u^* = \begin{cases} 0, & \rho > 0 \\ 1, & \rho < 0 \\ \in (0,1), & \rho = 0 \end{cases}$$

其中 $\rho$ 为开关函数：

$$\rho = 1 - \lambda_m - \frac{I_{sp}g_0}{m}\|\boldsymbol{\lambda}_v\|$$

$\boldsymbol{\lambda}_v$ 为速度协态变量，$\lambda_m$ 为质量协态变量。

### 时间最优与燃料最优的区别

| 特征 | 时间最优 | 燃料最优 |
| :--- | :--- | :--- |
| 性能指标 | $J = t_f - t_0$（最短时间） | $J = \int u \, dt$（最少燃料） |
| 推力特性 | 始终最大推力 | Bang-bang（开/关切换） |
| 切换函数 | 线性函数 | 含协态范数的非线性函数 |

## 数值求解的挑战

燃料最优控制的数值求解面临特殊困难：

- **不连续性**：Bang-bang 控制律在切换点处不连续，微分方程右端函数存在间断
- **奇异弧**：当开关函数在有限时间内恒为零时，出现奇异弧（singular arc），推力比无法由极值条件唯一确定
- **同伦法平滑**：通过引入正则化参数 $\varepsilon$，将 Bang-bang 控制平滑为连续控制，逐步令 $\varepsilon \to 0$ 收敛至燃料最优解

## 在地月空间中的应用

燃料最优控制在地月空间任务中有广泛应用：

- **低能转移轨道**：从近地轨道到 DRO 或 NRHO 的转移，通过燃料最优设计最大限度利用三体动力学结构
- **多航天器协同交会**：编队航天器的协同交会问题中，总燃料消耗的最小化是关键优化目标
- **月球门户轨道维持**：NRHO 等任务轨道的长期保持需要周期性的轨道修正，燃料最优策略直接影响任务寿命

## 相关概念

- [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)
- 庞特里亚金极值原理（Pontryagin's Maximum Principle）
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [开关函数（Switching Function）](/glossary/dynamics/switching-function/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
