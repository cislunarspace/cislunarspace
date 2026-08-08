---
title: 哈密顿函数（Hamiltonian）
description: 详细解析哈密顿函数在轨道力学中的定义、数学表达、在最优控制与三体问题中的应用
keywords: 哈密顿函数, Hamiltonian, 轨道力学, 最优控制, 三体问题, 协态变量, 正则方程
author: 天疆说
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: 哈密顿函数（Hamiltonian）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 哈密顿函数详解 | 轨道力学与最优控制的核心工具
  description: 详细解析哈密顿函数在轨道力学中的定义、数学表达、在最优控制与三体问题中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 哈密顿函数详解 | 轨道力学与最优控制的核心工具
  description: 详细解析哈密顿函数在轨道力学中的定义、数学表达、在最优控制与三体问题中的应用
  image: /logo.png
permalink: /glossary/dynamics/hamiltonian/
---

# 哈密顿函数（Hamiltonian）

> 本文作者：天疆说
>
> 参编单位：哈尔滨工业大学航天学院、微小型航天器快速设计与智能集群全国重点实验室

## 定义

哈密顿函数（Hamiltonian）是分析力学和最优控制理论中的核心标量函数，由广义坐标和广义动量（或状态变量与协态变量）构成。在轨道力学中，哈密顿函数既是描述系统能量守恒的物理量，也是建立最优控制必要条件的数学工具。庞特里亚金极值原理正是以哈密顿函数为核心框架，导出最优控制律。

## 数学描述

### 经典力学中的哈密顿函数

在哈密顿力学体系中，哈密顿函数定义为：

$$H(\mathbf{q}, \mathbf{p}, t) = \mathbf{p}^T \dot{\mathbf{q}} - L(\mathbf{q}, \dot{\mathbf{q}}, t)$$

其中 $\mathbf{q}$ 为广义坐标，$\mathbf{p} = \partial L / \partial \dot{\mathbf{q}}$ 为广义动量，$L$ 为拉格朗日函数。正则方程为：

$$\dot{\mathbf{q}} = \frac{\partial H}{\partial \mathbf{p}}, \quad \dot{\mathbf{p}} = -\frac{\partial H}{\partial \mathbf{q}}$$

当 $H$ 不显含时间 $t$ 时，$H$ 为守恒量，对应系统总能量。

### CR3BP 中的哈密顿函数

在圆形限制性三体问题（CR3BP）的旋转坐标系下，哈密顿函数为：

$$H = \frac{1}{2}(p_x^2 + p_y^2 + p_z^2) + y p_x - x p_y - \frac{1-\mu}{r_1} - \frac{\mu}{r_2}$$

其中 $p_x, p_y, p_z$ 为正则动量，$r_1, r_2$ 为航天器到两个主天体的距离。Jacobi 常数 $C = -2H$，是 CR3BP 中唯一的守恒量。

### 最优控制中的哈密顿函数

在最优控制问题中，哈密顿函数由状态方程、协态变量和性能指标构造：

$$H(\mathbf{x}, \boldsymbol{\lambda}, \mathbf{u}, t) = L(\mathbf{x}, \mathbf{u}, t) + \boldsymbol{\lambda}^T \mathbf{f}(\mathbf{x}, \mathbf{u}, t)$$

其中 $L$ 为瞬时代价函数，$\mathbf{f}$ 为状态方程右端，$\boldsymbol{\lambda}$ 为协态变量。最优控制 $\mathbf{u}^*$ 使 $H$ 取极值：

$$\frac{\partial H}{\partial \mathbf{u}} = 0 \quad \text{（对连续控制）}$$

## 在地月空间中的应用

哈密顿函数在地月空间任务中具有广泛的应用：

- **轨道设计**：在 CR3BP 框架下，哈密顿函数与 Jacobi 常数直接相关，零速度曲面由 $H$ 的等值面决定，为轨道可达性分析提供基础
- **燃料最优控制**：在庞特里亚金极值原理中，哈密顿函数的极值条件导出推力方向和大小的最优控制律，是间接法求解轨道优化问题的起点
- **不变流形分析**：哈密顿系统的辛结构保证了相空间体积守恒，为 DRO、NRHO 等周期轨道的稳定/不稳定流形计算提供理论保障

## 相关概念

- 庞特里亚金极值原理（Pontryagin's Maximum Principle）
- [协态变量（Co-state Variables）](/glossary/dynamics/co-state-variables/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [作用角变量（Action-Angle Variables）](/glossary/dynamics/action-angle-variables/)
- [Birkhoff-Gustavson 标准型](/glossary/dynamics/birkhoff-gustavson-normal-form/)
