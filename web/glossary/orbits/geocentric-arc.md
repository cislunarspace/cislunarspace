---
title: 地心弧段（Geocentric Arc）
description: 复合地月转移轨迹中以地球为主导中心引力源的飞行段，常采用修正平分轨道根数进行摄动积分与轨迹优化。
keywords: 地心弧段, Geocentric Arc, 轨道设计, 轨道力学, 转移轨道, 周期轨道
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 地心弧段（Geocentric Arc）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
permalink: /glossary/orbits/geocentric-arc/
---

# 地心弧段（Geocentric Arc）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
> 本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

地心弧段（Geocentric Arc）指地月空间航天器轨道转移过程中，航天器位于地球引力占绝对支配地位的区域（如地球停泊轨道至月球影响球边界之间），动力学建模以地心天球参考系为主导的一段空间飞行弧段。

## 物理机制与工程价值

在地月空间分段轨道拼接与多尺度动力学优化中，地心弧段具有独特的力学表征与数值计算优势：

1. 修正平分轨道根数（MEE）描述：由于地心弧段覆盖近地高偏心率椭圆轨道及逃逸抛物线/双曲线轨道，传统经典轨道根数在零偏心率或零倾角时存在坐标奇异性；采用一组无奇异的修正平分轨道根数（Modified Equinoctial Elements, MEE）结合高斯摄动方程，能够高精度刻画地球非球形引力（J2及高阶项）、大气阻力及日月三体摄动。
2. 连续推力轨道累积抬升：对于低推力电推进探测器，地心弧段通常表现为长达数月的多次多圈螺旋外推过程，通过在地心弧段优化推力方向角控制律，能够实现最优燃料消耗并精准穿过范艾伦辐射带。
3. 轨道链分段拓扑拼接：地心弧段与月心弧段、平动点流形弧段共同构成完整的地月多体轨道链，通过在影响球交界面实施速度与位置连续性配准，实现大尺度复杂任务的高效快速寻优。

## 相关概念

- [轨道链（Orbit Chain）](/glossary/orbits/orbit-chain/)
- [近地点地心距离（Perigee Geocentric Distance）](/glossary/orbits/perigee-geocentric-distance/)
- [接近段（Approach Phase）](/glossary/orbits/approach-phase/)
- [借力转移（Gravity Assist / Swingby）](/glossary/orbits/gravity-assist-swingby/)

## 参考文献

- Pozzi G, Topputo F. Unified framework for low-thrust trajectory optimization in cis-lunar space using modified equinoctial elements. *Journal of Guidance, Control, and Dynamics*, 2025, 48(2): 301-315.
- Betts J T. *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming*. Philadelphia: SIAM, 2010.
