---
title: 最优控制理论 (Optimal Control)
description: 最优控制理论研究如何选择控制律使系统性能指标达到最优，是轨道机动设计与任务轨迹优化的理论基础。
keywords: 最优控制, Optimal Control, 变分法, 极大值原理, 轨道机动, 轨迹优化
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/control/optimal-control/
---

# 最优控制理论

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

最优控制理论（Optimal Control）是现代控制理论的重要分支，研究如何对给定动态系统选择控制律，使得预定的性能指标达到极值（最小或最大）。在航天任务中，性能指标通常为燃料消耗、时间、能量等。

## 基本要素

最优控制问题由以下要素定义：

- **状态方程**：$\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u}, t)$，描述系统动态特性
- **控制变量**：$\mathbf{u}(t)$，由控制器设计
- **边界条件**：初始状态 $\mathbf{x}(t_0)$ 和终端状态 $\mathbf{x}(t_f)$
- **性能指标**：$J = \phi(\mathbf{x}(t_f), t_f) + \int_{t_0}^{t_f} L(\mathbf{x}, \mathbf{u}, t) dt$
- **约束条件**：控制约束 $|\mathbf{u}| \leq u_{\max}$，状态约束 $\mathbf{x} \in \mathcal{X}$

## 原理

### 变分法与欧拉-拉格朗日方程

无约束最优控制的必要条件通过变分法推导。引入拉格朗日乘子 $\boldsymbol{\lambda}(t)$，构造哈密尔顿函数：

$$H(\mathbf{x}, \mathbf{u}, \boldsymbol{\lambda}, t) = L(\mathbf{x}, \mathbf{u}, t) + \boldsymbol{\lambda}^T f(\mathbf{x}, \mathbf{u}, t)$$

欧拉-拉格朗日方程给出状态和协状态的演化方程：

$$\dot{\mathbf{x}} = \frac{\partial H}{\partial \boldsymbol{\lambda}}, \quad \dot{\boldsymbol{\lambda}} = -\frac{\partial H}{\partial \mathbf{x}}$$

### 极大值原理（Pontryagin Maximum Principle）

对于带控制约束的最优控制问题，极大值原理给出控制变量的最优性条件：

$$\mathbf{u}^*(t) = \arg\max_{\mathbf{u} \in \mathcal{U}} H(\mathbf{x}^*, \mathbf{u}, \boldsymbol{\lambda}^*, t)$$

该原理将连续优化问题转化为在每时刻选择最优控制的问题。

## 在地月空间中的应用

- **最小燃料轨道转移**：在地月空间中使用庞特里亚金极大值原理推导低推力最优转移轨道，产生燃料最省的双尔塔-V 最优轨迹
- **低推力轨迹优化**：离子推进、电推进等低推力推进器的轨迹设计，本质上是最优控制问题，常用间接法（极大值原理）或直接法（伪谱法）求解
- **软着陆制导**：月球/火星着陆的燃料最优下降轨迹设计，约束项包括推力大小、推力方向、终端高度和速度
- **姿态机动优化**：航天器大角度姿态机动过程中的时间-燃料双目标优化

## 相关概念

- [伪谱法（Pseudospectral Methods）](../math/pseudospectral/)
- [打靶法（Shooting Method）](/background/math/shooting-method/)
- [模型预测控制（MPC）](./mpc/)

## 参考文献

- Bryson A E, Ho Y C. Applied optimal control[M]. Taylor & Francis, 1975.
- Betts J T. Survey of numerical methods for trajectory optimization[J]. Journal of Guidance, Control, and Dynamics, 1998.
