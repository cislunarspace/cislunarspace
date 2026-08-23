---
title: 接触圆（Tangent Circle）
description: 庞加莱截面上稳定不变流形与不稳定不变流形环面相割或相切形成的封闭拓扑边界。
keywords: 接触圆, Tangent Circle, 动力学, 庞加莱截面, 不变流形
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 接触圆（Tangent Circle）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/dynamics/tangent-circle/
---

# 接触圆（Tangent Circle）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

接触圆（Tangent Circle）是指在限制性三体问题或弱稳定性边界动力学系统的庞加莱截面（Poincare Section）上，由中心天体周围的稳定不变流形管（Stable Invariant Manifold Tube）与不稳定不变流形管（Unstable Invariant Manifold Tube）在相空间中相交、相切或边界切割所形成的环状同胚拓扑曲线。

## 物理机制与工程价值

在多体动力学几何相空间分析中，弱稳定性边界（WSB）与平动点不变流形构成航天器无动力捕获或逃逸的天然输运通道。当选择特定的空间几何面（例如穿过次天体且垂直于地月连线的平面）作为庞加莱截面时，三维流形管在四维相空间中的投影截面通常表现为封闭或半开的环形同胚曲线。

1. **拓扑完整性与动力学输运**：当稳定与不稳定流形在截面上相割产生连续完整的接触圆时，相空间中存在横截同宿（Homoclinic）或异宿（Heteroclinic）轨道连接，航天器可实现零速度增量（$\Delta v = 0$）的弹道捕获与能量跃迁；
2. **断裂与混沌海**：当能量降低或系统受到周期扰动时，接触圆发生断裂，流形管发生横截交错并卷入混沌海（Chaotic Sea），导致相空间扩散与输运通道的局部阻塞；
3. **低能转移切点设计**：在工程轨迹设计中，接触圆的切点位置直接指示了转移轨道与目标捕获轨道在能量与几何上的最优交会切入点。

该概念为月球低能弹道捕获、多引力天体巡游任务中的免制动变轨与不变流形拼接提供了精确的相空间拓扑判据。

## 相关概念

- [庞加莱截面（Poincare Section）](/glossary/dynamics/poincare-section/)
- [庞加莱映射（Poincare Map）](/glossary/dynamics/poincare-map/)
- [不变流形（Invariant Manifold）](/glossary/dynamics/invariant-manifold/)
- [混沌海（Chaotic Sea）](/glossary/dynamics/chaotic-sea/)

## 参考文献

- Belbruno, E., Topputo, F., & Gidea, M. Resonance transitions and invariant manifolds in the planar circular restricted three-body problem. Discrete and Continuous Dynamical Systems, 2010, 26(3): 795-814.
- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. Dynamical Systems, the Three-Body Problem and Space Mission Design. Springer, 2011.
