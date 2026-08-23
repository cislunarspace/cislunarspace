---
title: 面外振幅（Out-of-plane Amplitude, Az）
description: 描述地月空间三维周期轨道（如Halo轨道）在垂直于主天体轨道平面方向上的最大几何几何尺寸参数。
keywords: 面外振幅, Out-of-plane Amplitude, Az, orbits
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 面外振幅（Out-of-plane Amplitude, Az）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/az/
---

# 面外振幅（Out-of-plane Amplitude, Az）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

面外振幅（Out-of-plane Amplitude, Az）指在旋转坐标系（如圆形限制性三体问题坐标系）中，三维空间周期轨道（如地月L1/L2 Halo轨道或Lissajous轨道）沿垂直于主天体公转平面方向（Z轴方向）的最大位移峰值。

## 物理机制与工程价值

在非线性平动点动力学中，面外振幅是区分和参数化轨道族形态演化的核心特征量：

1. 轨道族分岔与拓扑演化：Halo轨道族起源于平面Lyapunov轨道族在特定雅可比能量常数下的三维分岔。随着面外振幅Az的连续变化，轨道的空间几何形态、周期以及稳定性指数（Floquet乘子）呈现规律性演化。在L2 Halo轨道族中，随着能量递增，Az呈现先增大后减小的非单调特性。
2. 地月视距与遮挡规避：在地月通信中继任务（如鹊桥号中继星）中，合理的Az设计可使航天器在围绕地月L2点运行时始终处于地球和月球的视线外侧，彻底规避月球本体对地通信的几何遮挡，维持全时段双向无线电测控链路。
3. 转移轨道设计与流形捕获：Az直接影响轨道对应的不变流形（流形管）在相空间中的几何延展截面，决定了从近地停泊轨道或低月轨道切入Halo轨道所需的速度增量大小。

## 相关概念

- [Halo轨道交会（Halo Orbit Rendezvous）](/glossary/navigation/halo-orbit-rendezvous/)
- [截面宽度（Trajectory Section Width）](/glossary/orbits/trajectory-section-width/)
- [转移轨道族（Transfer Family）](/glossary/orbits/transfer-family/)
- [月球同步共振（Lunar Synodic Resonance, LSR）](/glossary/orbits/lsr/)

## 参考文献

- Howell K C. Three-dimensional, periodic, halo orbits. *Celestial Mechanics*, 1984, 32(1): 53-71.
- Gordon K E. Transfers to Earth-moon L2 halo orbits using lunar proximity and invariant manifolds. *Master Thesis*, Purdue University, 2008.
