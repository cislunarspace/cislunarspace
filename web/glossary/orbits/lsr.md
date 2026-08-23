---
title: 月球同步共振（Lunar Synodic Resonance, LSR）
description: 航天器轨道运行周期与地月会合周期呈现特定有理数比例关系的共振轨道动力学构型。
keywords: 月球同步共振, Lunar Synodic Resonance, LSR, orbits
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 月球同步共振（Lunar Synodic Resonance, LSR）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/lsr/
---

# 月球同步共振（Lunar Synodic Resonance, LSR）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

月球同步共振（Lunar Synodic Resonance, LSR）指航天器围绕地月共线拉格朗日点（L1/L2）运行的周期轨道（如近直线晕轨道NRHO）的轨道周期，与地月关于太阳的会合周期（地月朔望月，约29.53天）呈有理数比例 $p:q$（$p$ 个轨道周期等于 $q$ 个朔望月）的动力学共振状态。

## 物理机制与工程价值

月球同步共振在地月空间长期驻留任务的能源供给与轨道稳定性控制中具有决定性意义：

1. 地球日食规避机制：对于依靠太阳能帆板供电的地月空间站（如NASA月球门户空间站Gateway），地球对太阳光的遮挡（地球食）会导致星上供电中断与剧烈热交变。选择 9:2 共振（即每 9 个 NRHO 轨道周期约为 2 个朔望月，单圈周期约 6.56 天）能够锁定太阳、地球与月球的相对几何相位，使航天器在远月点时始终处于阳光直射区，实现数年乃至数十年内完全规避地球长日食。
2. 轨道共振自稳定性：在四体引力场（太阳、地球、月球、航天器）中，共振轨道能与太阳引力摄动形成动力学平衡，避免由于摄动相位累积导致的不稳定漂移发散。
3. 测控与通信窗口周期性：共振构型确保了对地/对月通信链路、极区中继窗口呈现高度确定性的周期重复性，大幅简化了地面测控站与月面着陆区的测控排期。

## 相关概念

- [面外振幅（Out-of-plane Amplitude, Az）](/glossary/orbits/az/)
- [轨道维持成本（Orbit Maintenance Cost）](/glossary/orbits/orbit-maintenance-cost/)
- [参考轨道（Reference Orbit）](/glossary/navigation/reference-orbit/)
- [转移轨道族（Transfer Family）](/glossary/orbits/transfer-family/)

## 参考文献

- McGuire M L. Orbit selection and maintenance for the Lunar Orbital Platform-Gateway. *NASA Glenn Research Center Technical Report*, NASA/TM-2018-220085, 2018.
- Sanna A, Celletti A, Pucacco G. Dynamical features of Earth-Moon Near Rectilinear Halo Orbits under Solar perturbations. *Aerospace*, 2024, 11(6): 460.
