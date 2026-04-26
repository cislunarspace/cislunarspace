---
title: NRHO 稳定性与轨道维持
description: NRHO轨道的初值敏感性、Lyapunov指数分析、ΔV维持预算与维持策略。
keywords: NRHO稳定性, 轨道维持, station-keeping, ΔV预算, Lyapunov指数
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/nrho/stability-maintenance/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# NRHO 稳定性与轨道维持

## 初值敏感性与 Lyapunov 指数

NRHO 虽然在 CR3BP 模型中表现为稳定的准周期轨道，但在真实星历环境中对初始条件误差和外部摄动表现出显著敏感性。这种敏感性可用 **Lyapunov 指数**（Lyapunov Exponent）来量化描述。

Lyapunov 指数 $\lambda$ 表征相空间中相邻轨道的指数分离（或收敛）率：
- $\lambda > 0$：轨道对初始误差指数放大（不稳定）
- $\lambda < 0$：误差被抑制（稳定）
- $\lambda = 0$：中性（沿轨道方向的边缘稳定性）

对于 L1/L2 NRHO，线性化方程的 Floquet 模态分析表明：沿某些方向存在 $\lambda > 0$ 的不稳定模态，这意味着即使微小的初始误差也会在数个轨道周期内被放大。

典型的 NRHO Lyapunov 指数量级为 $\lambda \sim 10^{-2}$ 天$^{-1}$，对应的 e-folding 时间约为 50-100 天。

## ΔV 维持预算

NRHO 的轨道维持（station-keeping）需要周期性的小推力修正。典型的维持 ΔV 预算取决于：
- 轨道位置（L1 vs L2）
- 任务持续时间
- 推进系统类型（电推 vs 化学推力）

典型数值：
- L1 NRHO：$\Delta V \approx 30-50$ m/s/年
- L2 NRHO：$\Delta V \approx 40-80$ m/s/年（略高于 L1，因太阳引力摄动更强）

相比之下，DRO 的维持 ΔV 预算约为 5-20 m/s/年，显示了其更高的固有稳定性。

## 维持策略

### 脉冲式维持（Impulsive Station-Keeping）

利用小推力发动机（如肼推进器）进行周期性脉冲修正。每次修正的 $\Delta V$ 约为 1-5 m/s，修正时机通常选在轨道的远地点或近地点（速度最低点），以最大化修正效果。

### 连续推力维持（Continuous Thrust Station-Keeping）

对于电推进系统，可采用连续小推力修正，通过调节推力方向来补偿摄动。这需要更复杂的姿轨耦合控制，但能获得更精确的轨道保持精度。

### 维持时机优化

最优维持策略需在修正频率与修正精度之间权衡。过低的修正频率会导致轨道偏差累积，增加每次修正的 $\Delta V$ 消耗；过高的修正频率则增加了推进剂消耗和任务调度复杂度。

## 外部摄动的影响

### 太阳引力摄动

太阳引力是 NRHO 轨道维持的主要外部干扰源。在 L2 NRHO 附近，太阳引力摄动的影响尤为显著，因为 L2 点方向的引力梯度更弱。

### 月球非球形摄动

月球的非球形引力（J2 项、$C_{22}$ 项等）对 NRHO 的长期演化有不可忽略的影响。尤其是对于低倾角的 NRHO，月球 J2 项会导致轨道的升交点赤经（RAAN）漂移。

### 太阳辐射压力

对于大面积太阳帆板或高面质比的航天器，太阳辐射压力（SRP）也是需要专门建模的摄动源。

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中设置 NRHO 初始条件，加入摄动模型后观察轨道的长期演化与漂移趋势。
