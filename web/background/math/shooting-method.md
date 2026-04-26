---
title: 打靶法 (Shooting Method)
description: 打靶法是将两点边值问题转化为初值问题迭代求解的数值方法，广泛用于轨道设计与周期轨道生成。
keywords: 打靶法, Shooting Method, 边值问题, 初值问题, 轨道设计, 微分修正
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /background/math/shooting-method/
---

# 打靶法

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

打靶法（Shooting Method）是一种将两点边值问题（Two-Point Boundary Value Problem, TPBVP）转化为初值问题进行迭代求解的数值方法。其核心思想是：通过猜测初始状态，积分至终点约束条件，计算偏差后修正初始猜测，反复迭代直至收敛。

## 原理

在轨道设计中，打靶法常用于求解周期轨道。以晕轨道（Halo Orbit）为例，其求解步骤如下：

1. 在某个参考流形（如 $xOz$ 平面）上选取初始猜测状态 $\mathbf{x}_0 = (x_0, 0, z_0, 0, \dot{y}_0, 0)$
2. 积分轨道至周期约束截面（如 $xOz$ 平面再次穿越点）
3. 计算状态偏差 $\Delta \mathbf{x}_f = \mathbf{x}_f - \mathbf{x}_0$
4. 利用状态转移矩阵（State Transition Matrix, STM）$\mathbf{\Phi}$ 线性化：$\Delta \mathbf{x}_f = \mathbf{\Phi} \cdot \Delta \mathbf{x}_0$
5. 修正初始猜测，迭代直至满足周期条件

### 偏差校正

打靶法中关键是选择自由变量（shooting variables）和目标函数（targeting equations）。对于 Halo 轨道，通常选择 $z_0$ 和 $\dot{y}_0$ 作为自由变量，目标函数为在截面处的 $y=0$ 和 $z=0$ 偏差。

## 在地月空间中的应用

打靶法在地月空间轨道设计中应用广泛：

- **NRHO 初始条件生成**：Zimovan (2017) 系统总结了地月 L1/L2 NRHO 的单次打靶与多步打靶求解策略
- **DRO 轨道生成**：利用关于 $x$ 轴的对称性，只在 $x$ 轴上选取初始点，以 $\dot{y}_0$ 和周期 $T$ 为自由变量进行迭代
- **Halo 轨道族延续**：从已知的平面 Lyapunov 轨道出发，通过弧长延续法逐步增大 $A_z$ 振幅，每步配合打靶法求解

打靶法通常需要与**弧长延续法**（Arc-length Continuation）和**微分修正**（Differential Correction）配合使用，以提高收敛性和全局性。

## 相关概念

- [弧长延续法（Arc-length Continuation）](../continuation/)
- [辛积分器（Symplectic Integrator）](./symplectic-integrator/)
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [近直线晕轨道（NRHO）](/glossary/nrho/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献

- Zimovan E M. Characteristics and design strategies for near rectilinear halo orbits within the Earth-Moon system[D]. Purdue University, 2017.
- Liu X, Baoyin H, Ma X. Design of optimal lunar landing trajectories with plane change[J]. Advances in Space Research, 2022.
