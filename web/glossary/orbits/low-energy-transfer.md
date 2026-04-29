---
title: 低能量转移轨道（Low-Energy Transfer Orbit）
description: 详细解析低能量转移轨道的定义、不变流形转移与弱稳定边界转移两种方式、动力学原理及其在深空探测中的应用
keywords: 低能量转移轨道, Low-Energy Transfer, 不变流形, 弱稳定边界, Halo轨道, 深空探测, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 低能量转移轨道（Low-Energy Transfer Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 低能量转移轨道（Low-Energy Transfer Orbit）详解 | 三体动力学转移
  description: 详细解析低能量转移轨道的定义、不变流形转移与弱稳定边界转移两种方式、动力学原理及其在深空探测中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 低能量转移轨道（Low-Energy Transfer Orbit）详解 | 三体动力学转移
  description: 详细解析低能量转移轨道的定义、不变流形转移与弱稳定边界转移两种方式、动力学原理及其在深空探测中的应用
  image: /logo.png
permalink: /glossary/orbits/low-energy-transfer/
---

# 低能量转移轨道（Low-Energy Transfer Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

低能量转移轨道（Low-Energy Transfer Orbit）是**利用三体系统动力学特性设计的低能量转移轨道**，主要包括基于不变流形的转移和基于弱稳定边界的弹道转移两种方式。不变流形转移利用 Halo 轨道的稳定/不稳定流形自然滑入目标轨道，无需施加入轨脉冲；弱稳定边界转移利用太阳扰动力实现自然捕获。相比直接转移方式，低能量转移所需能量远小但转移时间较长。

## 核心要素

### 基于不变流形的转移

不变流形转移是低能量转移的主要方式之一：

- **稳定流形与不稳定流形**：每个周期轨道（如 Halo 轨道）都存在稳定流形（趋近轨道）和不稳定流形（远离轨道），它们是相空间中的自然通道
- **流形交汇**：通过寻找出发轨道不稳定流形与目标轨道稳定流形的交汇区域，可构建零或近零速度增量的转移轨道
- **自然滑入/滑出**：航天器沿稳定流形自然滑入目标 Halo 轨道，沿不稳定流形自然滑出，无需施加入轨或离轨脉冲
- **管状结构**：不变流形在构型空间中呈管状结构，为转移轨道提供了明确的几何路径

### 基于弱稳定边界的弹道转移

弱稳定边界转移利用天体引力的弱稳定区域：

- **太阳扰动利用**：当探测器远离主天体时，太阳引力扰动可引导探测器自然进入目标天体引力范围
- **无动力捕获**：在弱稳定边界附近，探测器无需施加制动脉冲即可被目标天体临时捕获
- **弹道捕获**：Hiten、GRAIL 等任务成功验证了基于弱稳定边界的弹道捕获技术

### 能量与时间的权衡

低能量转移的核心特征是能量与时间的权衡：

- **能量节省**：相比霍曼转移等直接转移方式，低能量转移可节省显著的速度增量 $\Delta V$
- **时间代价**：低能量转移的飞行时间通常为直接转移的数倍
- **雅可比常数**：在圆形限制性三体问题中，雅可比常数 $C_J$ 决定了航天器在旋转坐标系中的可达区域，低能量转移利用了 $C_J$ 对应的低能通道
- **任务适用性**：对于不要求快速到达的科学探测和货运任务，低能量转移具有明显优势

### 设计方法

低能量转移轨道的设计方法包括：

- **庞加莱截面法**：在选定截面上搜索稳定流形和不稳定流形的交汇点
- **打靶法**：利用微分修正使转移轨道精确连接初始和目标状态
- **全局搜索**：利用演化算法在大范围参数空间中搜索最优转移方案

## 应用价值

低能量转移轨道在深空探测中具有重要应用价值：

- **月球探测**：Genesis、GRAIL 等任务成功应用了低能量转移技术
- **平动点任务**：低能量转移是地月 L1/L2 平动点任务的首选转移方式
- **行星际探测**：低能量转移概念可扩展至行星际任务，利用多天体引力实现低能巡航
- **未来交通体系**：低能量转移将构成未来地月空间交通体系的重要组成部分

## 相关概念
- [不变流形（Invariant Manifold）](/glossary/invariant-manifold/)
- [转移轨道（Transfer Orbit）](/glossary/orbits/transfer-orbit/)
- [弹道捕获轨道（Ballistic Capture Orbit）](/glossary/orbits/ballistic-capture/)
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)

## 参考文献
- Lo M W, Ross S D. Low-energy interplanetary transfers using the invariant manifolds of L1, L2 halo orbits[C]. AAS/AIAA Astrodynamics Specialist Conference, 1998.
- Belbruno E, Miller J. Sun-perturbed Earth-to-Moon transfers with ballistic capture[J]. Journal of Guidance, Control, and Dynamics, 1993, 16(4): 770-775.
- Koon W S, Lo M W, Marsden J E, et al. Dynamical Systems, the Three-Body Problem and Space Mission Design[M]. 2011.
