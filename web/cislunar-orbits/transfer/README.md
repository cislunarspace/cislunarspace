---
title: 地月转移轨道
description: 地月转移轨道概览：分类、能量预算、时间与燃料的权衡，以及与NRHO/DRO的衔接设计。
keywords: 地月转移轨道, TLI, 弹道捕获, 转移走廊, 发射窗口, 能量预算
author: 天疆说
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /cislunar-orbits/transfer/
---

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本文编辑来源：[CislunarSpace](https://cislunarspace.cn)
>
> 来源：https://cislunarspace.cn

# 地月转移轨道

## 定义与分类

地月转移轨道是连接近地轨道（LEO）与地月空间目标轨道（如 NRHO、DRO、月球表面）的轨道段。根据转移策略的不同，可分为以下几类：

### 高能弹道转移（Impulsive Transfer）

利用单次或少数几次大推力机动完成转移，典型的是霍曼转移（Hohmann Transfer）或直接的跨月转移（Direct Transfer）。从 LEO 到 TLI（Trans-Lunar Injection）的典型 $\Delta V \approx 3.1-3.3$ km/s。

### 低能转移（Low-Energy Transfer）

利用地月系统的动力学特性（弱稳定边界、晕轨道稳定流形等），以更低的能量代价完成转移。代价是转移时间更长（数周到数月）。典型代表是 WSB（Weak Stability Boundary）转移。

### 弹道捕获转移（Ballistic Capture Transfer）

利用月球引力辅助，在接近月球时无需推进即可被月球引力"捕获"，之后再进行少量机动进入目标轨道。这种方式可显著节省燃料，但需要精确的发射时机。

## 能量预算

地月转移的能量需求通常用双曲面超速（$C_3$）来表征：

$$C_3 = v^2 - \frac{2\mu}{r}$$

其中 $v$ 为航天器在地心惯性坐标系中的速度，$\mu$ 为地球引力常数。

从 LEO（185 km 圆轨道）到 TLI 的典型 $C_3 \approx -0.5$ km$^2$/s$^2$（对应 $v \approx 10.9$ km/s），所需的 $\Delta V \approx 3.1-3.3$ km/s。

## 转移时间 vs 能量权衡

地月转移是典型的时间-燃料双目标优化问题：

| 转移类型 | 典型时间 | 典型 ΔV | 适用场景 |
|----------|----------|----------|----------|
| 直接转移 | 3-5 天 | ~3.2 km/s | 紧急任务、货运 |
| 低能转移 | 2-4 周 | ~3.0 km/s | 载人、探测器 |
| 弹道捕获 | 1-3 月 | ~2.9 km/s | 小型探测器、立方星 |

## 与 NRHO/DRO 的衔接

到达地月空间后，航天器需要与目标轨道进行交会对接或轨道插入：

- **与 NRHO 衔接**：在 L1 点附近进行轨道插入机动（$\Delta V \approx 200-400$ m/s），进入 NRHO
- **与 DRO 衔接**：在接近目标 DRO 时进行插入机动（$\Delta V \approx 100-300$ m/s）
- **与月面衔接**：从 NRHO 或转移轨道到月面的下降机动（$\Delta V \approx 1.5-2.0$ km/s）

## 仿真实验

可在 [卫星轨道仿真实验室](/satellite-simulation/) 中设计地月转移轨道，观察不同 $C_3$ 和发射窗口下的转移轨迹。

## 相关概念

- [NRHO（近直线晕轨道）](/cislunar-orbits/nrho/)
- [DRO（远距离逆行轨道）](/cislunar-orbits/dro/)
- [TLI 概览](/cislunar-orbits/transfer/tli-overview/)
- [弹道捕获](/cislunar-orbits/transfer/ballistic-capture/)
