---
title: 多圈Halo轨道（Multi-Revolution Halo Orbit）
description: 详细解析多圈Halo轨道的定义、ERTBP框架下的周期性条件、弧长延拓求解方法及其在地月空间任务中的应用
keywords: 多圈Halo轨道, Multi-Revolution Halo Orbit, ERTBP, 椭圆限制性三体问题, 弧长延拓, 周期轨道, 轨道设计
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: 多圈Halo轨道（Multi-Revolution Halo Orbit）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多圈Halo轨道（Multi-Revolution Halo Orbit）详解 | ERTBP周期轨道
  description: 详细解析多圈Halo轨道的定义、ERTBP框架下的周期性条件、弧长延拓求解方法及其在地月空间任务中的应用
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多圈Halo轨道（Multi-Revolution Halo Orbit）详解 | ERTBP周期轨道
  description: 详细解析多圈Halo轨道的定义、ERTBP框架下的周期性条件、弧长延拓求解方法及其在地月空间任务中的应用
  image: /logo.png
permalink: /glossary/orbits/multi-revolution-halo/
---

# 多圈Halo轨道（Multi-Revolution Halo Orbit）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

多圈Halo轨道（Multi-Revolution Halo Orbit）是**椭圆限制性三体问题（ERTBP）下的周期轨道**。由于小主天体轨道偏心率的周期性扰动，CRTBP 下的周期轨道无法一直满足周期性条件，只存在周期为小主天体轨道周期整数倍的周期轨道。Peng 等采用弧长延拓法求解，有效解决了基于偏心率单参数延拓出现奇点的问题。

## 核心要素

### ERTBP 框架下的周期性约束

与圆形限制性三体问题（CRTBP）不同，ERTBP 中小主天体（如月球）沿椭圆轨道运动，导致系统不具有自治性：

- **非自治系统**：ERTBP 显含时间项，小主天体轨道偏心率引入周期性扰动
- **周期性条件**：仅当轨道周期为小主天体轨道周期的整数倍（$T = nT_M$，$n$ 为正整数）时，才存在满足周期性条件的解
- **多圈结构**：航天器在返回初始状态前需绕平动点运行多圈，形成空间中的多圈缠绕轨迹

### 弧长延拓法

Peng 等提出的弧长延拓法是求解多圈 Halo 轨道的关键技术：

- **参数化选择**：以轨道弧长作为延拓参数，替代传统的偏心率单参数延拓
- **奇点规避**：偏心率参数延拓在特定值处会出现雅可比矩阵奇异的问题，弧长延拓法有效解决了这一困难
- **连续追踪**：通过弧长参数的连续变化，可追踪从 CRTBP 周期解到 ERTBP 多圈轨道的完整轨道族

### CRTBP 到 ERTBP 的过渡

多圈 Halo 轨道可视为 CRTBP Halo 轨道在引入偏心率扰动后的自然推广：

- **偏心率为零**：ERTBP 退化为 CRTBP，多圈 Halo 轨道退化为标准 Halo 轨道（$n=1$）
- **偏心率较小时**：CRTBP Halo 轨道的周期性被破坏，需要多个轨道周期后才能近似闭合
- **偏心率增大**：扰动效应增强，多圈特征更加显著，轨道形态发生明显变化

### 稳定性与维持控制

多圈 Halo 轨道的稳定性分析较 CRTBP Halo 轨道更为复杂：

- **Floquet 理论推广**：需在非自治系统框架下分析轨道的稳定性特征
- **维持控制策略**：由于偏心率扰动的长期累积效应，维持控制需考虑更长时间尺度的动力学行为
- **实际任务应用**：多圈 Halo 轨道为实际地月任务中更精确的轨道设计提供理论基础

## 应用价值

多圈 Halo 轨道在地月空间任务中具有重要理论与应用价值：

- **精确轨道设计**：考虑月球轨道偏心率的真实动力学模型，提供更精确的轨道设计
- **任务窗口规划**：多圈周期性条件为任务发射窗口和轨道转移提供约束
- **平动点任务拓展**：为平动点附近的长期驻留任务提供更丰富的轨道选择

## 相关概念
- [Halo 轨道（Halo Orbit）](/glossary/orbits/halo-orbit/)
- [Lyapunov 轨道（Lyapunov Orbit）](/glossary/orbits/lyapunov-orbit/)
- [准周期轨道（Quasi-Periodic Orbit）](/glossary/orbits/quasi-periodic-orbit/)

## 参考文献
- Peng H, Bai X. Constructing cislunar multi-revolution halo orbits in the elliptic restricted three-body problem[J]. Celestial Mechanics and Dynamical Astronomy, 2019.
- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
- 唐歌畅等. 椭圆限制性三体问题下周期轨道研究进展[J]. 力学学报, 2020.
