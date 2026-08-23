---
title: 双向对发星间测距（Bidirectional Inter-Satellite Ranging）
description: 两颗航天器通过同时相互发射与接收测距信号并解算飞行时延以完全消除星载时钟钟差的高精度相对测量体制。
keywords: 双向对发星间测距, Bidirectional Inter-Satellite Ranging, 自主导航, 星间链路, 钟差消除
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 双向对发星间测距（Bidirectional Inter-Satellite Ranging）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/navigation/bidirectional-inter-satellite-ranging/
---

# 双向对发星间测距（Bidirectional Inter-Satellite Ranging）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

双向对发星间测距（Bidirectional Inter-Satellite Ranging）是指两颗处于空间轨道运行的航天器，在近似相同的历元时刻互相向对方发射无线电微波（如 Ka 频段）或激光测距测速信号，并分别测量记录各自接收到对方信号的单程传播时延，通过联合差分代数处理精确消除两星时钟物理钟差与硬件群时延的相对测量技术。

## 物理机制与工程价值

在地月空间深空自主导航中，单向测距（One-Way Ranging）包含巨大的星载原子钟或晶振钟差参数，容易造成状态估计维数膨胀与几何秩亏；传统的转发式双向测距（Transponding Ranging）又存在转发应答机转发时延抖动及信道占用的局限。

双向对发体制的物理机制与工程优势在于：
1. **完全解耦物理钟差**：设两星发射时刻偏差为 $\Delta \tau$，光速为 $c$，两星测得的伪距分别为 $\rho_{12} = d + c\Delta \tau$ 与 $\rho_{21} = d - c\Delta \tau$。通过对称求和相加 $\rho = (\rho_{12} + \rho_{21})/2$ 即可解析消除纳秒级星载钟差，获得几何真实距离 $d$；
2. **高精度相对论修正**：结合地月引力势引起的引力红移（Gravitational Redshift）与二阶多普勒效应相对论修正，在毫米级测距误差（如 Ka/激光测距）下即可直接解算轨道动力学曲率；
3. **摆脱地基测控依赖**：在地月 $L_1/L_2$ 平动点星群、月球中继星与环月星座之间构建双向链路网，能够实现厘米级几何距离测量与亚米级星载全自主协同定轨。

该技术是地月空间自主时空基准建立与多星分布式协同导航的关键支撑。

## 相关概念

- [星间测距（Inter-Satellite Ranging）](/glossary/navigation/inter-satellite-ranging/)
- [组合自主定轨（CAOD）](/glossary/navigation/caod/)
- [地月空间时空基准（High-Precision Cislunar Space-Time Benchmark）](/glossary/navigation/high-precision-cislunar-space-time-benchmark/)
- [双层星间链路（Dual-Layer ISL）](/glossary/navigation/dual-layer-isl/)

## 参考文献

- 丛佃伟, 郑晋生, 高为广, 等. 地月空间航天器自主导航技术及研究进展. 宇航学报, 2025, 46(1): 16-30.
- Liu, L., Xu, T. H., & Yang, Y. X. Autonomous orbit determination of navigation constellation based on inter-satellite links. Advances in Space Research, 2018, 62(1): 180-192.
