---
title: NRHO 设计参数
description: NRHO轨道的典型设计参数：周期、振幅、倾角约束、初始条件选取与敏感性分析。
wechatShare:
  title: NRHO 设计参数
  desc: NRHO轨道的典型设计参数：周期、振幅、倾角约束、初始条件选取与敏感性分析。
  image: /logo.png
keywords: NRHO设计, 设计参数, 伪弧长延续法, 初始条件, CRTBP
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-08-27
permalink: /cislunar-orbits/nrho/design-parameters/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：<https://cislunarspace.cn>

# NRHO 设计参数

## 典型参数表

L1/L2 NRHO 的典型设计参数如下：

| 参数 | L1 NRHO | L2 NRHO |
| ------ | ---------- | ---------- |
| 周期 | 约 6.5–10 天 | 约 6.5–9 天 |
| 近月点高度 | 数百至数千公里 | 数百至数千公里（Gateway 基线约 1500–3000 km） |
| 远月点高度 | 可达约 7 万公里 | 可达约 7 万公里 |
| 振幅比 $A_z/A_x$ | 大于约 0.3（近直线特征） | 同左 |
| 雅可比常数 $C_J$ | 约 2.95–3.05 | 约 2.90–3.00（9:2 成员约 3.047） |
| 典型维持 ΔV | 年均数米/秒（现代方法 ≤ 2 m/s/年） | 年均数米/秒（现代方法 ≤ 2 m/s/年） |

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

上述方法适用于 CR3BP 模型下的单圈周期轨道计算。对于真实星历模型（如 JPL DE430）下的多圈 NRHO 计算，需采用多次打靶法并配合特殊的连接点选取策略，详见 [多圈 NRHO 星历模型计算](/cislunar-orbits/nrho/ephemeris-computation/)。

## 敏感性分析

### 质量比不确定性的影响

地月质量比参数 $\mu_{EM}$ 的不确定性（当前精度约为 $10^{-8}$）对 NRHO 的周期和振幅有微小但可累积的影响。典型敏感性约为：

$$\frac{\Delta T}{T} \approx 0.1 \frac{\Delta \mu}{\mu}$$

对于 10 年的任务时间，该累积效应可能导致轨道周期的数分钟偏差，需要在轨道维持策略中予以考虑。

### 初始位置偏差的影响

NRHO 对初始位置偏差的敏感性可用单值矩阵的不稳定 Floquet 模态评估。以 9:2 成员为例，误差沿不稳定方向每圈放大约 2 至 3 倍（见[稳定性与轨道维持](/cislunar-orbits/nrho/stability-maintenance/)），长期任务必须配合逐圈监控与靶向修正。
