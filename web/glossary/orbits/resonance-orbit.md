---
title: 共振轨道（Resonance Orbit）
description: 详细解析共振轨道的定义、共振分类体系、在DRO轨道族中的表现、IBEX与TESS任务应用及转移设计
keywords: 共振轨道, Resonance Orbit, 共振比, DRO, 轨道周期, 月球公转, 地月空间, IBEX, TESS, 转移设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 共振轨道（Resonance Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 共振轨道详解 | 轨道周期与天体运动的共振关系
  description: 详细解析共振轨道的定义、共振分类体系、在DRO轨道族中的表现、IBEX与TESS任务应用及转移设计
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 共振轨道详解 | 轨道周期与天体运动的共振关系
  description: 详细解析共振轨道的定义、共振分类体系、在DRO轨道族中的表现、IBEX与TESS任务应用及转移设计
  image: /logo.png
permalink: /glossary/orbits/resonance-orbit/
---

# 共振轨道

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

共振轨道（Resonance Orbit）是指航天器的轨道周期与天体公转周期之间存在简单整数比关系的轨道。当地月空间中航天器的轨道周期 $T$ 与月球公转周期 $T_M$ 满足 $T/T_M \approx m/n$（$m, n$ 为正整数）时，称为 $m:n$ 共振轨道。按照约定，$p:q$ 共振轨道意味着航天器在参考轨道上完成 $q$ 圈运行的时间内，月球恰好完成 $p$ 圈绕地球公转。

共振轨道最初在开普勒动力学框架下被定义为圆锥曲线弧段，后被成功地过渡到了多体动力学 regime 中。在地月系统中，共振轨道是地月空间轨道分类体系的重要组成部分，与平动点轨道、月心轨道并列。

## 核心要素

### 共振轨道的分类体系

根据地月系统中共振轨道的周期比和几何特性，可将其分为以下类别：

| 共振类型 | 符号表示 | 特征 |
| :--- | :--- | :--- |
| 1:1 共振 | rp11 | 轨道周期与月球公转周期相同，靠近月球 |
| 2:1 共振 | rp21 / rs21 | 轨道周期约为月球公转周期的一半 |
| 3:1 共振 | rp31 / rs31 | 轨道周期约为月球公转周期的三分之一 |
| 1:2 共振 | rp12 / rs12 | 轨道周期约为月球公转周期的两倍 |
| 1:3 共振 | rp13 / rs13 | 轨道周期约为月球公转周期的三倍 |
| 2:3 共振 | rp23 / rs23 | 轨道周期约为月球公转周期的 1.5 倍 |
| 3:2 共振 | rp32 / rs32 | 轨道周期约为月球公转周期的 2/3 |
| 3:4 共振 | rp34 / rs34 | 轨道周期约为月球公转周期的 4/3 |
| n:m 共振 | rpmn / rsmn | 一般整数比共振，平面/空间 |

其中，"rp" 表示平面共振轨道（Planar Resonant），"rs" 表示空间共振轨道（Spatial Resonant）。

### 共振轨道在 DRO 轨道族中的表现

DRO 轨道族中存在多种共振比的轨道：

| 共振比 | 特征 |
| :--- | :--- |
| 1:1 | 靠近月球，近似环月圆轨道，DRO 起始形态 |
| 2:1 | 轨道周期约为月球公转周期的一半 |
| 3:1 | 轨道周期约为月球公转周期的三分之一 |
| 高阶共振 | 远离月球，轨道幅值较大，非开普勒特性更明显 |

DRO 轨道起始时类似于较小的圆形开普勒轨道，与月球构成 1:1 共振关系。延拓过程中非开普勒特性越来越明显，共振比逐渐演变为 2:1 和 3:1。

### 共振轨道的轨道参数特征

以地月系统为例，各类共振轨道的主要参数范围如下（基于 Guzzetti 等人的动态目录统计）：

| 轨道族 | Jacobi 常数范围 | 周期范围（天） | 稳定性指数 |
| :--- | :--- | :--- | :--- |
| 1:1 平面 | 较高 | 约 27.3 | 较低 |
| 2:1 平面 | 中等 | 约 13.7 | 中等 |
| 3:1 平面 | 较低 | 约 9.1 | 中等 |
| 2:1 空间 | 中等 | 约 13.7 | 中等 |
| 3:1 空间 | 较低 | 约 9.1 | 中等 |

共振轨道的 Jacobi 常数与共振比密切相关，低阶共振（如 3:1）通常对应较低的 Jacobi 常数（较高能量），而高阶共振（如 1:3）对应较高的 Jacobi 常数（较低能量）。

### 共振轨道的稳定性特征

共振轨道的稳定性特征因共振比而异：

- **1:1 共振**：通常具有较好的稳定性，适合长期驻留任务
- **2:1 和 3:1 共振**：稳定性适中，已成功应用于实际任务（如 TESS 和 IBEX）
- **高阶共振**：稳定性指数变化范围大，部分成员可能高度不稳定
- 共振轨道的稳定性优势在于：共振条件本身提供了一种"锁定"机制，使轨道在一定程度上抵抗小扰动

## 应用价值

### 天文观测任务应用

共振轨道在实际空间任务中已有成功应用：

- **IBEX 任务**：星际边界探测器（Interstellar Boundary Explorer, IBEX）在其扩展任务中成功利用了地月空间的 3:1 共振轨道。该轨道的有利稳定性条件使其能够在长期运行中保持可预测的轨迹，支持科学数据的持续采集
- **TESS 任务**：凌日系外行星巡天卫星（Transiting Exoplanet Survey Satellite, TESS）采用了 2:1 共振轨道作为其科学观测阶段的轨道方案。2:1 共振轨道提供了接近地球的近地点（利于高速科学数据回传）和远离地球的远地点（利于长时间观测天空），同时保持了较低的轨道插入成本

### 地月空间转移通道

共振轨道在地月空间转移设计中具有重要价值：

- **LEO 到共振轨道的转移**：从 300 km 高度的 LEO 出发，可通过直接双脉冲转移或月球借力三脉冲转移到达共振轨道。月球借力转移可显著降低轨道插入 $\Delta V$ 成本
- **共振轨道与平动点轨道的连接**：共振轨道的 Jacobi 常数范围与部分平动点轨道重叠，表明它们之间可能存在低成本的转移通道
- **长期存储与观测**：稳定性较好的共振轨道（如 2:1、3:1）适合作为长期科学观测平台

### 轨道比较与选择

在 Guzzetti 等人提出的动态目录框架中，共振轨道是四大轨道类别之一。选择共振轨道时，需综合考虑以下因素：

- **科学观测需求**：远地点高度决定观测时间和覆盖范围，近地点高度决定数据回传能力
- **辐射环境**：近地点应高于范艾伦辐射带（约 2.3 倍地球半径）以减少辐射暴露
- **轨道插入成本**：避免选择能量过低（JC 过小）的轨道，以免要求过高的 $\Delta V$
- **长期可预测性**：选择稳定性指数较低的轨道族，以降低轨道维持成本和预测难度

## 相关概念

- [远距离逆行轨道（DRO）](/glossary/orbits/dro/)
- [远距离顺行轨道（DPO）](/glossary/orbits/dpo/)
- [低顺行轨道（LoPO）](/glossary/orbits/lopo/)
- [延拓方法](/glossary/dynamics/continuation-method/)
- [圆型限制性三体问题（CR3BP）](/glossary/dynamics/cr3bp/)
- [雅可比积分](/glossary/dynamics/jacobi-integral/)

## 参考文献

- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Carrico J, Dichmann D, Policastri L, et al. Lunar resonant trajectory design for the Interstellar Boundary Explorer (IBEX) extended mission[C]. AAS/AIAA Astrodynamics Specialist Conference, 2011.
- Gangestad J W, Henning G A, Persinger R, et al. A high Earth, lunar resonant orbit for lower cost space science missions[C]. AAS/AIAA Space Flight Mechanics Meeting, 2013.
- Vaquero M, Howell K. Leveraging resonant orbit manifolds to design transfers between libration point orbits[J]. Journal of Guidance, Control, and Dynamics, 2014, 37(4): 1143-1157.
- 彭超, 温昶煊, 高扬. 地月空间DRO与HEO共振轨道延拓求解及其稳定性分析[J]. 载人航天, 2018.
- 陈昱桔. 面向地月空间态势感知的DRO轨道设计与控制研究[D]. 2024.
