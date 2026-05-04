---
title: 远距离顺行轨道（DPO）
description: 详细解析远距离顺行轨道（DPO）的定义、动力学特性、与DRO的区别及其在地月空间低能量转移中的应用
keywords: 远距离顺行轨道, DPO, Distant Prograde Orbit, 地月空间, 月心轨道, 低能量转移, 轨道动力学, 顺行
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 远距离顺行轨道（DPO）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 远距离顺行轨道（DPO）详解 | 地月空间低能量转移通道
  description: 详细解析远距离顺行轨道（DPO）的定义、动力学特性、与DRO的区别及其在地月空间低能量转移中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 远距离顺行轨道（DPO）详解 | 地月空间低能量转移通道
  description: 详细解析远距离顺行轨道（DPO）的定义、动力学特性、与DRO的区别及其在地月空间低能量转移中的应用
  image: /logo.png
permalink: /glossary/orbits/dpo/
---

# 远距离顺行轨道（DPO）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

远距离顺行轨道（Distant Prograde Orbit，DPO）是**圆形限制性三体问题（CR3BP）中一类环绕月球的顺行周期轨道**。与 DRO（远距离逆行轨道）的运行方向相反，DPO 在会合坐标系中的运动方向与月球绕地球公转方向相同（逆时针），因此称为"顺行"。DPO 属于月心轨道（Moon-Centered Orbits）家族，与 DRO、LoPO（低顺行轨道）共同构成了地月空间月心周期轨道的主要类别。

## 核心要素

### DPO 的动力学特性

DPO 在 CR3BP 框架下具有以下特性：

- **顺行运动**：DPO 在会合坐标系中绕月逆时针运动，与月球公转方向一致
- **周期多样性**：DPO 轨道族的周期范围较宽，从约 5.8 天到 28.0 天不等
- **能量范围宽**：DPO 的 Jacobi 常数覆盖范围较大（约 2.99 ~ 3.18），表明该族包含从低能量到较高能量的多种轨道
- **不稳定特性**：DPO 的稳定性指数变化范围很大（1.0 ~ 1342.8），族内既有接近稳定的成员，也有高度不稳定的成员

### DPO 的轨道参数特征

以地月系统为例，DPO 轨道族的主要参数范围如下（基于 Guzzetti 等人的动态目录统计）：

| 参数 | 范围 |
|:---|:---|
| Jacobi 常数 | 2.9941 ~ 3.1827（均值 3.1150） |
| 轨道周期 | 5.82 ~ 28.00 天（均值 13.10 天） |
| 稳定性指数 | 1.000 ~ 1342.8（均值 302.43） |

DPO 的轨道周期和稳定性指数分布较广，这意味着在轨道族内可以根据任务需求选择不同特性的成员。

### DPO 与 DRO 的对比

DPO 和 DRO 是月心轨道家族中两个重要的对比对象：

| 特征 | DRO（远距离逆行轨道） | DPO（远距离顺行轨道） |
|:---|:---|:---|
| 运动方向 | 逆行（顺时针） | 顺行（逆时针） |
| 稳定性 |  predominantly 稳定 | 变化大，部分不稳定 |
| 典型应用 | 长期存储、态势感知 | 低能量转移、月球停泊 |
| 周期范围 | 5.87 ~ 27.38 天 | 5.82 ~ 28.00 天 |
| 能量水平 | 较低（JC 1.44 ~ 3.02） | 较高（JC 2.99 ~ 3.18） |

### DPO 在转移设计中的角色

DPO 在地月空间转移设计中具有独特价值：

- **L1-L2 转移通道**：DPO 可用于设计 L1 和 L2 Lyapunov 轨道之间的低成本转移轨道，利用 DPO 的不变流形结构连接不同的平动点区域
- **月球停泊轨道**：部分 DPO 成员靠近月球，可作为月球探测任务的临时停泊轨道
- **与 DRO 的对比**：虽然 DRO 因稳定性优势更适合长期驻留，但 DPO 在某些转移几何中可能提供更优的到达/ departure 条件

### 稳定性分析

DPO 的稳定性特征复杂多变：

- DPO 族内稳定性指数覆盖范围极广，从接近 1（稳定）到超过 1000（高度不稳定）
- 稳定性指数较低的 DPO 成员周围可能存在准周期运动和不变环面
- 稳定性指数较高的 DPO 成员具有显著的不稳定流形，可用于设计低能量逃逸/捕获转移

## 应用价值

DPO 在地月空间任务中具有以下应用价值：

- **低能量转移设计**：利用 DPO 的不变流形，可设计连接平动点轨道与月心轨道的低能量转移通道
- **月球探测任务**：DPO 可作为月球探测任务的临时停泊轨道，支持月球表面操作和轨道器部署
- **轨道比较与选择**：在 Guzzetti 等人提出的动态目录框架中，DPO 是与 DRO、Lyapunov 轨道、Halo 轨道并列的候选轨道族，为任务设计提供了更多选择
- **动力学结构研究**：DPO 作为月心轨道家族的重要成员，是理解地月空间月心区域动力学结构的关键

## 相关概念
- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [低顺行轨道（LoPO）](/glossary/orbits/lopo/)
- [顺行（Prograde）](/glossary/orbits/prograde/)
- [逆行（Retrograde）](/glossary/orbits/retrograde/)
- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

## 参考文献
- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Mingotti G, Topputo F, Bernelli-Zazzera F. Exploiting distant periodic orbits and their invariant manifolds to design novel space trajectories to the Moon[C]. AAS/AIAA Space Flight Mechanics Meeting, 2010.
- Folta D, Bosanac N, Guzzetti D, et al. An Earth-Moon system trajectory design reference catalog[C]. 2nd IAA Conference on Dynamics and Control of Space Systems, 2014.
