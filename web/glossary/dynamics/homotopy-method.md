---
title: 同伦法（Homotopy Method）
description: 详细解析同伦法的定义、从能量最优到燃料最优的平滑过渡原理、及在轨道优化中的应用
keywords: 同伦法, Homotopy Method, 连续法, 燃料最优, 能量最优, Bang-bang控制, 轨道优化, 协态归一化
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 同伦法（Homotopy Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 同伦方法详解 | 从能量最优到燃料最优的平滑过渡
  description: 详细解析同伦法的定义、从能量最优到燃料最优的平滑过渡原理、及在轨道优化中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 同伦方法详解 | 从能量最优到燃料最优的平滑过渡
  description: 详细解析同伦法的定义、从能量最优到燃料最优的平滑过渡原理、及在轨道优化中的应用
  image: /logo.png
permalink: /glossary/dynamics/homotopy-method/
---

# 同伦法（Homotopy Method）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室
>
> 参考文献：关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## 定义

同伦法（Homotopy Method）是一种求解非线性问题的迭代数值方法。其基本思想是构造一个从简单问题到复杂问题的连续变形过程，通过求解一系列中间问题，最终得到目标问题的解。在轨道优化中，同伦法常用于将易于求解的能量最优问题过渡到难以直接求解的燃料最优问题。

## 原理

### 燃料最优与能量最优

航天器交会的最优控制问题中：

- **燃料最优问题**：以燃料消耗最小化为目标，控制律呈不连续的 Bang-bang 形式
- **能量最优问题**：以推力能量最小化为目标，控制律连续，易于求解

### 同伦构造

引入同伦参数 $\varepsilon \in [0,1]$，构造性能指标：

$$J = \sum_{j=1}^{2} \frac{\lambda_{j0}F_j}{I_{sp}g_0} \int_{t_0}^{t_f} \left[u_j - \varepsilon u_j(1-u_j)\right] dt$$

- 当 $\varepsilon = 1$ 时：退化为能量最优问题（连续控制）
- 当 $\varepsilon \to 0$ 时：逼近燃料最优问题（Bang-bang 控制）

### 平滑过渡机制

同伦方法通过逐步减小 $\varepsilon$ 实现从能量最优到燃料最优的平滑过渡：

$$\varepsilon_d = 10^{-(d/15)}, \quad d = 1, 2, \cdots, N$$

每一步以前一步的协态作为初始猜测，有效扩大了收敛域。

## 在轨道优化中的应用

### 解决 Bang-bang 控制的不光滑积分问题

燃料最优控制的 Bang-bang 特性导致微分方程右侧不连续，无法直接数值积分。同伦法通过引入连续化的性能指标，使得：

1. 当 $\varepsilon > 0$ 时，控制律连续可微
2. 逐步减小 $\varepsilon$ 至零，获得燃料最优解
3. 有效避免了直接求解 Bang-bang 控制带来的数值困难

### 赵海涵等（2026）的应用

赵海涵等将 RLEPSO 与同伦法结合：

- RLEPSO 快速获得高质量能量最优初始协态
- 同伦法平滑过渡到燃料最优控制
- 解决了 J₂ 摄动下远距离协同交会的燃料最优问题

## 同伦法与延拓法的比较

| 特征 | 同伦法 | 延拓法 |
| :--- | :--- | :--- |
| 目的 | 问题平滑化 | 轨道族探索 |
| 参数 | 同伦参数 $\varepsilon$ | 轨道参数（振幅、周期等） |
| 应用 | 最优控制过渡 | 周期轨道族生成 |
| 初始解要求 | 较低（能量最优易得） | 较高（需已知周期解） |

## 相关概念

- [强化学习增强粒子群（RLEPSO）](/glossary/dynamics/rlepeso/)
- [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)
- [协态归一化（Co-state Normalization）](/glossary/dynamics/co-state-normalization/)
- [延拓法（Continuation）](/glossary/dynamics/continuation/)
- [打靶法（Shooting Method）](/glossary/dynamics/shooting-method/)

## 参考文献

- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
- Topputo F, et al. A survey on direct optimal control via homoto py continuation[C]. AIAA/AAS Astrodynamics Specialist Conference, 2014.
