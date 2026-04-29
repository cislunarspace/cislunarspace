---
title: 协态归一化（Co-state Normalization）
description: 详细解析协态归一化的定义、在两点边值问题中的应用、归一化方法及在协态边界未知情况下的搜索策略
keywords: 协态归一化, Co-state Normalization, 协态变量, 两点边值问题, 轨道优化, 打靶法, 单位球面, 搜索空间缩减
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 协态归一化（Co-state Normalization）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 协态归一化详解 | 轨道优化中的搜索空间缩减
  description: 详细解析协态归一化的定义、在两点边值问题中的应用、归一化方法及在协态边界未知情况下的搜索策略
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 协态归一化详解 | 轨道优化中的搜索空间缩减
  description: 详细解析协态归一化的定义、在两点边值问题中的应用、归一化方法及在协态边界未知情况下的搜索策略
  image: /logo.png
permalink: /glossary/dynamics/co-state-normalization/
---

# 协态归一化（Co-state Normalization）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室
>
> 参考文献：关宇同等. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.

## 定义

协态归一化（Co-state Normalization）是将协态变量除以其初始值的欧几里得范数，将无穷多组协态解映射到单位球面上的技术。在最优控制问题的打靶法求解中，协态边界通常未知，导致搜索空间过大。归一化技术有效缩减了搜索空间，提高了找到收敛初始猜测的概率。

## 数学描述

### 归一化公式

对于协态向量 $\boldsymbol{\lambda}(t) = [\lambda_0; \boldsymbol{\lambda}_r(t); \boldsymbol{\lambda}_v(t); \lambda_m(t)]$，归一化定义为：

$$\bar{\boldsymbol{\lambda}} \triangleq \frac{\boldsymbol{\lambda}}{\|\boldsymbol{\lambda}(t_0)\|}$$

归一化后满足：

$$\|\bar{\boldsymbol{\lambda}}(t_0)\| = 1$$

### 物理意义

协态归一化的物理意义：
- 将协态变量约束在单位球面上
- 消除了解的不唯一性（协态乘以任意非零常数仍满足方程）
- 将搜索空间从无穷大缩减到单位球面

## 在两点边值问题中的应用

### 问题描述

在航天器轨道优化的间接法中，最优控制问题转化为两点边值问题（TPBVP）：

- **初始状态**：已知 $\mathbf{r}(t_0), \mathbf{v}(t_0), m(t_0)$
- **终端状态**：需满足 $\mathbf{r}(t_f) = \mathbf{r}_{target}, \mathbf{v}(t_f) = \mathbf{v}_{target}$
- **未知量**：初始协态 $\boldsymbol{\lambda}(t_0)$

### 协态边界的复杂性

协态边界是自由的（由横截条件决定），每个协态分量可在 $[-\infty, +\infty]$ 取值。这导致打靶函数的解空间几乎无限大。

### 归一化的优势

通过协态归一化：
1. 协态初值被限制在单位球面上（8维空间的7维流形）
2. 定义 7 个角度变量 $\chi_\vartheta (\vartheta = 1, 2, \cdots, 7)$
3. 将角度变量映射到 $[0, 1]$ 区间的优化变量 $X_\vartheta$

### 角度变量映射

| 变量范围 | 映射公式 |
|:---|:---|
| $[0, \pi/2]$ | $\chi_\vartheta = \frac{\pi}{2}X_\vartheta, \quad \vartheta = 1,2,3$ |
| $[-\pi/2, \pi/2]$ | $\chi_\vartheta = \pi\left(X_\vartheta - \frac{1}{2}\right), \quad \vartheta = 4,5$ |
| $[0, 2\pi]$ | $\chi_\vartheta = 2\pi X_\vartheta, \quad \vartheta = 6,7$ |

## 赵海涵等（2026）的应用

在 RLEPSO-同伦方法中：
1. RLEPSO 优化归一化协态（7 个角度变量 + 终端时间 = 8 维优化变量）
2. 归一化协态作为同伦打靶的初始猜测
3. 同伦参数递减至零，获得燃料最优协态

## 相关概念

- [打靶法（Shooting Method）](/glossary/dynamics/shooting-method/)
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)
- [同伦法（Homotopy Method）](/glossary/dynamics/homotopy-method/)
- [庞特里亚金极值原理（Pontryagin's Maximum Principle）](/glossary/dynamics/pontryagin-principle/)

## 参考文献

- 关宇同, 高长生, 胡玉东, 赵海涵. 面向航天器远距离协同交会的超参数自主调优-同伦方法[J]. 航天器环境工程, 2026.
- Betts J T. Practical Methods for Optimal Control and Estimation Using Nonlinear Programming[M]. SIAM, 2010.
