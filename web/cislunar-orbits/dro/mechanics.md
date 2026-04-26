---
title: DRO 动力学机理
description: 远距离逆行轨道的逆行几何、雅可比常数约束与CR3BP中的稳定性来源分析。
keywords: DRO动力学, 逆行几何, 雅可比常数, CR3BP稳定性, Coriolis效应
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/dro/mechanics/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# DRO 动力学机理

## 逆行几何

DRO 在地月旋转坐标系中的最显著特征是其**逆行运动**（Retrograde）：航天器的轨道运动方向与地月连线的旋转方向相反。在旋转坐标系中，轨道角速度 $\dot{\theta} < 0$，即航天器从旋转坐标系看是在"倒退"运行。

这一几何特性可以用会合坐标系的角动量来解释。设航天器在惯性空间中的角动量为 $h$，则其在旋转坐标系中的有效角动量为：

$$h_{eff} = h - r^2 \dot{\theta}_{frame}$$

对于逆行轨道，$h_{eff} < 0$，对应负的"有效"角动量方向。这种负向旋转使得 Coriolis 效应对轨道的稳定性的影响与顺行轨道截然不同。

## 雅可比常数约束

DRO 的存在性由 CR3BP 的雅可比常数 $C_J$ 守恒约束：

$$C_J = 2 - v^2 + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2} = 2\Omega - v^2$$

其中 $\Omega = \frac{1-\mu}{r_1} + \frac{\mu}{r_2}$ 为有效势函数。

DRO 对应的 $C_J$ 值通常在 $3.0 < C_J < 3.1$ 范围内，这是 CR3BP 相空间中一个特殊的无碰撞区域——该区域位于两个主要势井之间，对应月球影响球外的稳定振荡。

在旋转坐标系中，$C_J$ 可改写为：

$$C_J = x^2 + y^2 + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2} - \dot{x}^2 - \dot{y}^2$$

这表明在给定的位置 $(x,y)$，动能存在上界——即"雅可比能量"守恒。

## 稳定性来源

DRO 在 CR3BP 中的较高固有稳定性源于逆行运动与 Coriolis 效应的特殊相互作用。

### Coriolis 效应的角色

在旋转坐标系中，物体的运动受到 Coriolis 力 $-2\boldsymbol{\omega} \times \mathbf{v}$ 的作用。对于顺行轨道，Coriolis 力沿径向向外（类似于离心力增强），这使得某些方向的扰动会被放大；对于逆行轨道，Coriolis 力沿径向向内，起到类似"稳定弹簧"的作用，抑制了扰动的增长。

### 与 Lyapunov 轨道的联系

DRO 与 L1/L2 附近的 Lyapunov 周期轨道存在**同源分支**（Bifurcation）关系。随着雅可比常数 $C_J$ 的减小（能量增加），Lyapunov 轨道会通过分叉（bifurcation）转变为 DRO。这种分支关系说明 DRO 并非孤立的轨道族，而是 CR3BP 周期轨道族的一部分。

## 速度分量与轨道形态

在旋转坐标系中，DRO 的速度分量满足：

$$v_x^2 + v_y^2 + v_z^2 = 2\Omega - C_J$$

逆行特性意味着 $v_y < 0$（假设旋转方向为正 y），但这不意味着整个轨道都在"倒转"——而是指净角动量为负。DRO 的 $v_x$ 分量在轨道的不同相位可能为正或为负，形成近似椭圆形的轨道形态。

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中设置 DRO 初始条件，观察其在旋转坐标系中的逆行轨道形态，对比与 NRHO 的差异。
