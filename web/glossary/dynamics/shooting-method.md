---
title: 打靶法（Shooting Method）
description: 详细解析打靶法的定义、单点打靶与多点打靶的原理、在轨道设计中的应用
keywords: 打靶法, Shooting Method, 单点打靶, 多点打靶, 轨道设计, 微分修正, 地月空间
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 打靶法（Shooting Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 打靶法详解 | 轨道设计经典数值方法
  description: 详细解析打靶法的定义、单点打靶与多点打靶的原理、在轨道设计中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 打靶法详解 | 轨道设计经典数值方法
  description: 详细解析打靶法的定义、单点打靶与多点打靶的原理、在轨道设计中的应用
  image: /logo.png
permalink: /glossary/dynamics/shooting-method/
---

# 打靶法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

打靶法（Shooting Method）是求解边值问题的经典数值方法，广泛应用于轨道力学中的周期轨道计算和转移轨道设计。其核心思想是：将边值问题转化为初值问题，通过迭代修正初始条件，使轨道的末端状态满足预定的边界条件。

## 单点打靶与多点打靶

| 方法 | 描述 | 适用场景 |
| :--- | :--- | :--- |
| **单点打靶** | 从初始点一次积分到末端，用状态转移矩阵修正初始条件 | 短弧段、约束简单 |
| **多点打靶** | 将轨道分为多段，每段独立积分并在节点处施加连续性约束 | 长弧段、复杂约束、高精度要求 |

多点打靶在每段内使用各自的状态转移矩阵，通过节点处的状态匹配约束将各段耦合。相比单点打靶，多点打靶具有更好的数值稳定性和更快的收敛速度。

## 在轨道转换中的应用

单点和多点打靶法可用于将最初收敛在低保真度模型中的轨道转换到高保真度星历模型。在拼接法中，打靶法用于调整各段轨道的设计参数，使其在拼接点处满足位置和速度的连续性约束。

## 核心要素

### 数学定义

打靶法将边值问题转化为初值问题，通过迭代修正初始条件 $\mathbf{x}_0$，使轨道末端状态 $\mathbf{x}(t_f)$ 满预定的边界条件。修正量通过状态转移矩阵 $\Phi$ 线性化求解。

### 关键性质

单点打靶适用于短弧段和简单约束，多点打靶将轨道分为多段并在节点处施加连续性约束，具有更好的数值稳定性和更快的收敛速度。

### 数值方法

多点打靶在每段内使用各自的状态转移矩阵，通过节点处的状态匹配约束将各段耦合。常与微分修正法配合使用。

## 应用价值

打靶法是轨道力学中周期轨道计算和转移轨道设计的经典数值方法，广泛应用于 CR3BP 和星历模型下的轨道生成，是从低保真度模型向高保真度模型转换的核心工具。

## 相关概念

- [微分修正法](/glossary/dynamics/differential-correction/)
- [状态转移矩阵](/glossary/dynamics/state-transition-matrix/)
- [二级微分修正法](/glossary/dynamics/two-level-differential-correction/)
- [拼接点](/glossary/dynamics/patch-point/)

## 参考文献

- Keller H B. Numerical methods in boundary-layer theory[J]. Annual Review of Fluid Mechanics, 1978.
- Pavlak T A. Trajectory design and orbit maintenance strategies in multi-body dynamical regimes[D]. Purdue University, 2013.
