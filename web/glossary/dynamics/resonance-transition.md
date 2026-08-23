---
title: 共振跃迁（Resonance Transition / Resonance Hopping）
description: 天体或航天器在限制性三体问题的相空间通道中，由不变流形管驱动从一个平均运动共振比穿越到另一个共振比的动力学过程。覆盖 Oterma/Gehrels 3彗星的自然跃迁、SMART-1类低能转移中的共振跳转机制，及其在木星 tour 与地月转移中的应用。
keywords: 共振跃迁, 共振跳转, Resonance Transition, Resonance Hopping, 不变流形, 相空间通道, 低能转移, SMART-1, 弱稳定边界, 临时捕获, Oterma, Gehrels 3, 地月空间
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 共振跃迁（Resonance Transition / Resonance Hopping）
  desc: 从 Oterma 彗星到 SMART-1 转移：流形管驱动下的共振比跃迁与低能捕获。
  image: /logo.png
og:
  title: 共振跃迁（Resonance Transition）详解 | 术语定义
  description: 天体或航天器在限制性三体问题的相空间通道中，由不变流形管驱动从一个平均运动共振比穿越到另一个共振比的动力学过程，是低能转移设计的理论基础。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 共振跃迁（Resonance Transition）详解 | 术语定义
  description: 天体或航天器在限制性三体问题的相空间通道中，由不变流形管驱动从一个平均运动共振比穿越到另一个共振比的动力学过程，是低能转移设计的理论基础。
  image: /logo.png
permalink: /glossary/dynamics/resonance-transition/
---

# 共振跃迁（Resonance Transition / Resonance Hopping）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

共振跃迁（resonance transition），又称共振跳转（resonance hopping），指天体或航天器在多体引力环境中，从一个平均运动共振比 $(p_1:q_1)$ 转移到另一个共振比 $(p_2:q_2)$ 的动力学过程。该过程的本质不是轨道要素的连续渐变，而是通过穿越共线平动点 $L_1$、$L_2$ 附近的颈部区域，借助不稳定周期轨道的稳定/不稳定流形管在相空间中从一个共振岛跳跃到相邻共振岛（Koon et al. 2001；Perozzi & Ferraz-Mello 2010）。

## 力学机制

在 CR3BP 中，共线平动点 $L_1$、$L_2$ 附近的周期轨道具有中心、稳定、不稳定子空间，其稳定/不稳定流形在相空间中形成管状结构。这类流形管不仅是局部动力学结构，还可全局延拓，在太阳系尺度上构成相互交织的动力学通道（dynamical channels）。当不同共振岛的不稳定流形横截相交时，形成同宿/异宿纠缠，产生混沌输运（Perozzi & Ferraz-Mello 2010）。

从轨道根数视角：航天器每次穿越 $L_1$ 颈部并绕过 $P_2$（如月球），其开普勒轨道半长轴发生跳跃，等价于从一个平均运动共振比切换到另一个。每次跳跃后航天器进入新的共振范域，直到下一次颈部穿越。离散的共振比变化与连续的能量（雅可比常数）降低耦合，形成跃迁现象。

## 自然天体实例

- **Oterma 与 Gehrels 3 彗星**：在太阳-木星 CR3BP 中，从 3:2 共振被木星临时捕获，经过 $L_2$ 颈部跃迁到 2:3 共振，再释放回日心轨道，整个过程在不变流形管网络中解释为异宿连接（Koon et al. 2001）。

- **Shoemaker-Levy 9**：撞击木星前处于 2:3 共振，实际上经历了共振与木星引力相互作用的复杂动力学（Perozzi & Ferraz-Mello 2010）。

## 工程应用

- **SMART-1 式低能地月转移**：利用太阳引力摄动，航天器多次穿越地月系 $L_1$ 颈部、每次从近共振状态跃迁到能量更低的近共振状态，逐步降低到月球捕获能量。这本质上是弱稳定边界（WSB）转移在不变流形框架下的一种实现（Scott 2010；Perozzi & Ferraz-Mello 2010）。

- **行星卫星 tour**：木卫欧罗巴轨道器（JEO）的 endgame 阶段利用两个不同共振比（如 3:5 和 4:6）的过渡实现轨道能量降低与最终捕获，其轨迹可由共振轨道的不变流形交会构造（Escribano & Howell 2013）。

## 应用要点

1. 共振跃迁依赖混沌区域的黏性：轨道在共振岛边缘可长期徘徊，为小推力或自然耗散捕获提供足够时间窗口（Scott 2010）。
2. 设计流程：在庞加莱截面上观察不同共振流的流形交会，用微分修正将各段拼接为连续轨迹。
3. 与纯二体霍曼转移相比，共振跃迁可显著降低速度增量，但代价是转移时间延长数倍至数十倍。

## 相关概念

- [弱稳定边界（Weak Stability Boundary）](/glossary/dynamics/wsb/)

- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)

- [共振流形（Resonant Manifold）](/glossary/dynamics/invariant-manifold/)

- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)

- [天平动点（Libration Point）](/glossary/fundamentals/libration-point/)

- [DRO低能捕获（DRO Low-energy Capture）](/glossary/dynamics/ballistic-capture/)

- [微分改正法（Differential Correction）](/glossary/dynamics/differential-correction/)

- [轨道共振（Orbital Resonance）](/glossary/dynamics/orbital-resonance/)

## 参考文献

- Koon, W. S., Lo, M. W., Marsden, J. E. & Ross, S. D., 2001, "Resonance and capture of Jupiter comets", *Celestial Mechanics and Dynamical Astronomy*, 81 (1):27–38

- Perozzi, E. & Ferraz-Mello, S. (eds.), 2010, *Space Manifold Dynamics*

- Scott, C. J., 2010, *Transfer and Capture into Distant Retrograde Orbits* (Ph.D. dissertation, Penn State University)

- Fantino, E. et al., 2010, "Resonance hopping in the comet Oterma", *Celestial Mechanics and Dynamical Astronomy*

- Escribano, T. M. V. & Howell, K. C., 2013, *Spacecraft Transfer Trajectory Design Exploiting Resonant Orbits in Multi-Body Environments* (Ph.D. dissertation, Purdue University)
