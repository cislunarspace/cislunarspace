---
title: NRHO 设计参数
description: NRHO轨道的典型设计参数：周期、振幅、倾角约束、初始条件选取与敏感性分析。
keywords: NRHO设计, 设计参数, 伪弧长延续法, 初始条件, CRTBP
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/nrho/design-parameters/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# NRHO 设计参数

## 典型参数表

L1/L2 NRHO 的典型设计参数如下：

| 参数 | L1 NRHO | L2 NRHO |
|------|----------|----------|
| 周期 | 6.5-7.5 天 | 7.0-8.0 天 |
| 半长轴 $A_x$ | 2,000-4,000 km | 3,000-5,000 km |
| 振幅比 $A_z/A_x$ | 0.5-2.0 | 0.5-2.0 |
| 倾角范围 | 20°-50°（冻结倾角附近） | 20°-50° |
| 雅可比常数 $C_J$ | 2.95-3.05 | 2.90-3.00 |
| 典型维持 ΔV | 30-50 m/s/年 | 40-80 m/s/年 |

地月质量比参数：$\mu_{EM} = 0.0121505853$

## 初始条件选取

在 CR3BP 模型中，NRHO 的初始条件通常选取在轨道的近月点或远月点。会合坐标系中的状态向量表示为：

$$\mathbf{X}_0 = [x_0, y_0, z_0, \dot{x}_0, \dot{y}_0, \dot{z}_0]$$

对于 L1 NRHO，典型的近月点初始条件约为：
- $x \approx 0.825$（无量纲，距离 L1）
- $z \approx A_z$，$\dot{x} \approx 0$，$\dot{y} \approx \dot{y}_{halo}$

初始条件的精确选取需要通过数值延续法（numerical continuation）从已知的 Halo 轨道族逐步演化得到。

## 周期轨道计算

### 伪弧长延续法

伪弧长延续法（Pseudo-Arclength Continuation）是计算 NRHO 周期轨道族的标准方法。其核心思想是：

1. 从一个已知的周期轨道（如 Lyapunov 轨道）出发
2. 在参数空间（如雅可比常数 $C_J$）中逐步延续
3. 在每个参数步长内，利用打靶法（Shooting Method）求解周期边界条件

打靶法的目标函数为：
$$\mathbf{F}(\mathbf{X}_0) = \mathbf{X}(T; \mathbf{X}_0) - \mathbf{X}_0 = \mathbf{0}$$

其中 $T$ 为轨道周期，$\mathbf{X}(T; \mathbf{X}_0)$ 为从初始条件 $\mathbf{X}_0$ 传播 $T$ 时间后的状态。

### Floquet 模态分析

对于计算得到的周期轨道，需进行 Floquet 模态分析以评估其稳定性。Floquet 理论给出：

$$\mathbf{M}(T) \mathbf{v} = \lambda \mathbf{v}$$

其中 $\mathbf{M}(T)$ 为单周期状态转移矩阵，$\lambda$ 为 Floquet 乘数。稳定轨道的 Floquet 乘数位于单位圆上（$|\lambda| = 1$），不稳定轨道则存在 $|\lambda| > 1$ 的乘数。

## 敏感性分析

### 质量比不确定性的影响

地月质量比参数 $\mu_{EM}$ 的不确定性（当前精度约为 $10^{-8}$）对 NRHO 的周期和振幅有微小但可累积的影响。典型敏感性约为：

$$\frac{\Delta T}{T} \approx 0.1 \frac{\Delta \mu}{\mu}$$

对于 10 年的任务时间，该累积效应可能导致轨道周期的数分钟偏差，需要在轨道维持策略中予以考虑。

### 初始位置偏差的影响

NRHO 对初始位置偏差的敏感性可用状态转移矩阵的奇异值分解（SVD）来评估。典型地，沿不稳定流形方向的偏差放大率约为 $10^2$~$10^3$（每周期）。

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中输入典型 NRHO 初始条件，观察轨道形态并测试不同摄动下的轨道演化。
