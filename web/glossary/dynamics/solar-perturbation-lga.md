---
title: 太阳摄动月球引力辅助（前向/后向月球借力，Solar-Perturbation Lunar Gravity Assist）
description: 在双圆限制性四体问题（BCR4BP）中，地月会合系按月球位置分为四个象限：太阳引力摄动使第二、四象限飞行的航天器地月雅可比能量与机械能升高（前向月球借力），第一、三象限则反之（后向月球借力）。是 WSB 低能 DRO 入轨能否实现的能量判据。
keywords: 前向月球借力, 后向月球借力, 太阳摄动月球引力辅助, forward lunar gravity assist, backward lunar gravity assist, BCR4BP, 雅可比能量, 机械能, 象限, 低能转移, WSB
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 太阳摄动月球引力辅助（前向/后向月球借力）
  desc: 太阳摄动在地月机械能坐标系的不同象限里符号相反，把航天器的雅可比能量推上或拉下。
  image: /logo.png
og:
  title: 太阳摄动月球引力辅助详解 | 术语定义
  description: 在双圆限制性四体问题（BCR4BP）中，地月会合系按月球位置分为四个象限：太阳引力摄动使第二、四象限飞行的航天器地月雅可比能量与机械能升高（前向月球借力），第一、三象限则反之（后向月球借力）。是 WSB 低能 DRO 入轨能否实现的能量判据。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 太阳摄动月球引力辅助详解 | 术语定义
  description: 在双圆限制性四体问题（BCR4BP）中，地月会合系按月球位置分为四个象限：太阳引力摄动使第二、四象限飞行的航天器地月雅可比能量与机械能升高（前向月球借力），第一、三象限则反之（后向月球借力）。是 WSB 低能 DRO 入轨能否实现的能量判据。
  image: /logo.png
permalink: /glossary/dynamics/solar-perturbation-lga/
---

# 太阳摄动月球引力辅助（前向/后向月球借力，Solar-Perturbation Lunar Gravity Assist）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

在双圆限制性四体问题（BCR4BP）里，太阳引力是地月 CR3BP 上的**周期性摄动**。航天器相对地月系质心的机械能 $E$ 的导数为

$$
\frac{dE}{dt} = \mu(1-\mu)\,y\left(\frac{1}{r_1^3} - \frac{1}{r_2^3}\right)
$$

（Wang 等 2025, Eq. 8），其中 $\mu$ 为地月质量比，$r_1$、$r_2$ 为航天器到地球与月球的距离。以 $x = 0.5 - \mu$ 和 $y = 0$ 为坐标轴把会合系分成四个象限，则 $\mathrm{d}E/\mathrm{d}t$ 在**第二、四象限为正**，在**第一、三象限为负**（远离主天体处近似为零；Wang 等 2025）。Wang 等（2025）把这一坐标系称为**机械能坐标系**。

同时由 $E + C/2 = H + \mu(1-\mu)/2$（Wang 等 2025, Eq. 10），机械能 $E$、雅可比常数 $C$ 与角动量 $H$ 在太阳摄动下会同向变化。于是按象限命名两种能量走向相反的机制：

- **前向月球借力（forward lunar gravity assist）**：航天器在第二、四象限飞行时，太阳引力摄动**增加**其地月机械能、雅可比能量与角动量，并抬高近地点；

- **后向月球借力（backward lunar gravity assist）**：航天器在第一、三象限飞行时，太阳引力摄动**减小**其地月机械能、雅可比能量与角动量，并降低近地点。

这里的前/后指的是**太阳摄动下能量变化的方向**，不是航天器绕月的运动方向（顺/逆行见 [月球飞越](/glossary/dynamics/lunar-flyby/)）。借力在这里更接近一种**能量走向的命名**，而不是单次飞越事件。

## 为什么起作用的是太阳，不是月球

在地月作用球内，航天器相对地球或月球的二体能量本应守恒；引力辅助的能量交换发生在**过最近接近点的那一瞬间**。太阳引力不同：它持续作用，在 BCR4BP 中正是它使 $E$ 和 $C$ 变成非常数。月球在这里只起路由作用：一次月球相遇可以把航天器从一个象限弹到另一个象限，从而改变 $\mathrm{d}E/\mathrm{d}t$ 的符号。低能转移设计本质上就是规划象限序列。

## 应用要点

- **低能 DRO 入轨**：以 2:1 DRO 为例，Wang 等（2025）给出 WSB 回程轨迹需要满足的能量–几何条件，称为**低能转移门户（LEGT）**；满足 LEGT 的候选轨迹中约 73.6% 可用，而无判据的网格搜索可用率不到 1%，这是前/后向借力分析的实际收益。

- **相位分段**：把 WSB 转移分三段（地月转移段、日地 WSB 段、DRO 低能捕获段），各段的主导力学与能量趋势都不同；前向借力主要发生在日地 WSB 段。

- **拼接处的能量匹配**：WSB 回到 DRO 时，航天器应处于 $E\in[-1/3, -1/5]$（WSB 区域特征能量，Wang 等 2025）并具有合适的角动量符号；若回程进入后向象限，则不具备低能 DRO 入轨条件，应在数值优化前先剔除。

## 易混点

- 前/后向借力不是月球前/后方，也不是顺行/逆行飞越。轴心是机械能坐标系下**太阳摄动能量走向的符号**，由**航天器所处象限**决定，与飞越几何无关。

- 这里的能量 $E$ **不是**地心或月心二体的开普勒能量，而是地月会合系下的机械能（Wang 等 2025, Eq. 6）；它在二体极限退化为开普勒形式，在 BCR4BP 中含太阳引力的累积效应。

## 相关概念

- [月球飞越与月球引力辅助（Lunar Flyby）](/glossary/dynamics/lunar-flyby/)

- [双圆限制性四体问题（BCR4BP）](/glossary/dynamics/bcr4bp/)

- [弱稳定边界（WSB）](/glossary/dynamics/wsb/)

- [圆形限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [低能转移门户（LEGT）](/glossary/dynamics/low-energy-transfer/)

- [远距离逆行轨道（DRO）](/glossary/programs/dro/)

- [会合坐标系（Synodic Frame）](/glossary/fundamentals/synodic-frame/)

## 参考文献

- Wang M., Zhang C., Zhang H., 2025, Mechanism analysis of the DRO low-energy transfer problem: an energy perspective（机械能坐标系、象限划分、LEGT、前/后向借力的定义出处）

- Peng 等, 2024, Low-Energy Transfers to Lunar Distant Retrograde Orbits from Geostationary Transfer Orbits, J. Spacecraft and Rockets, doi:10.2514/1.A35623
