---
title: 协态变量（Co-state Variables）
description: 详细解析协态变量的定义、物理意义、数学描述及其在最优控制与轨道优化中的核心作用
keywords: 协态变量, Co-state Variables, 拉格朗日乘子, 最优控制, 庞特里亚金极值原理, Hamilton函数, 轨道优化
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: 协态变量（Co-state Variables）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 协态变量详解 | 最优控制理论中的隐变量
  description: 详细解析协态变量的定义、物理意义、数学描述及其在最优控制与轨道优化中的核心作用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 协态变量详解 | 最优控制理论中的隐变量
  description: 详细解析协态变量的定义、物理意义、数学描述及其在最优控制与轨道优化中的核心作用
  image: /logo.png
permalink: /glossary/dynamics/co-state-variables/
---

# 协态变量（Co-state Variables）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室

## 定义

协态变量（Co-state Variables），又称伴随变量或拉格朗日乘子，是最优控制理论中与状态变量配对引入的辅助变量。它们不对应任何可直接测量的物理量，而是描述了最优性能指标对状态变量的灵敏度。在庞特里亚金极值原理框架下，协态变量通过与状态变量共同构成 Hamilton 正则方程组，决定了最优轨迹和最优控制律。

## 数学描述

### 协态方程

设状态变量为 $\mathbf{x} = [\mathbf{r}; \mathbf{v}; m]^T$，协态变量为 $\boldsymbol{\lambda} = [\boldsymbol{\lambda}_r; \boldsymbol{\lambda}_v; \lambda_m]^T$，Hamilton 函数为 $H$，协态变量满足微分方程：

$$\dot{\boldsymbol{\lambda}} = -\frac{\partial H}{\partial \mathbf{x}}$$

与状态方程 $\dot{\mathbf{x}} = \partial H / \partial \boldsymbol{\lambda}$ 共同构成 Hamilton 正则方程组，形成一阶微分方程组的边值问题。

### 航天器轨道优化中的协态变量

在航天器轨道优化问题中，各协态分量具有明确的数学角色：

- **位置协态 $\boldsymbol{\lambda}_r$**：满足 $\dot{\boldsymbol{\lambda}}_r = -\partial H / \partial \mathbf{r}$，与引力梯度相关，影响轨道形状
- **速度协态 $\boldsymbol{\lambda}_v$**：满足 $\dot{\boldsymbol{\lambda}}_v = -\partial H / \partial \mathbf{v}$，直接决定最优推力方向
- **质量协态 $\lambda_m$**：满足 $\dot{\lambda}_m = -\partial H / \partial m$，决定推力开/关切换时刻

### 开关函数与推力决策

协态变量通过开关函数 $\rho$ 决定最优推力比：

$$\rho_j = 1 - \lambda_{mj} - \frac{I_{sp}g_0}{m_j}\|\boldsymbol{\lambda}_{vj}\|$$

当 $\rho_j < 0$ 时推力最大，$\rho_j > 0$ 时推力为零，形成 Bang-bang 控制律。

## 在两点边值问题中的作用

在间接法求解最优控制问题时，初始状态 $\mathbf{x}(t_0)$ 已知，但初始协态 $\boldsymbol{\lambda}(t_0)$ 未知。协态边界由横截条件确定，每个协态分量可在 $[-\infty, +\infty]$ 取值，导致打靶问题的解空间极为庞大。协态归一化技术通过将 $\boldsymbol{\lambda}(t_0)$ 约束在单位球面上，有效缩减了搜索维度。

## 在地月空间中的应用

在地月空间轨道优化中，协态变量贯穿整个最优控制求解过程。从近地轨道到 DRO 或 NRHO 的燃料最优转移、多航天器协同交会等任务中，协态变量的初值猜测与迭代修正始终是间接法的核心难点。协态变量的归一化处理和物理意义解读，是连接数学最优性与工程可实现性的重要桥梁。

## 相关概念

- [协态归一化（Co-state Normalization）](/glossary/dynamics/co-state-normalization/)
- [庞特里亚金极值原理（Pontryagin's Maximum Principle）](/glossary/dynamics/pontryagin-principle/)
- [哈密顿函数（Hamiltonian）](/glossary/dynamics/hamiltonian/)
- [两点边值问题（TPBVP）](/glossary/dynamics/tpbvp/)
- [Bang-bang 控制](/glossary/dynamics/bang-bang-control/)
- [燃料最优（Fuel-optimal Control）](/glossary/dynamics/fuel-optimal/)
