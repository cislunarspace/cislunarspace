---
title: 轨道平衡法（Orbit Balancing Method）
description: 一种平动点轨道保持策略，也称轨道延续法。其核心思路是不追求回到某条预定参考轨道，而是通过在当前轨道上选择机动点，设定数圈之后的速度或能量目标，使轨道持续运行下去。例如在 X 轴穿越处设定 X 方向速度略为负值，确保轨道始终向平动点内侧卷绕而不逃逸。该方法由 VF13AD 等优化器求解机动方向和时刻，同时施加自旋面约束。
keywords: 轨道平衡法, Orbit Balancing Method, 轨道, 动力学, 控制
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 轨道平衡法（Orbit Balancing Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 轨道平衡法详解 | 术语定义
  description: 一种平动点轨道保持策略，也称轨道延续法。其核心思路是不追求回到某条预定参考轨道，而是通过在当前轨道上选择机动点，设定数圈之后的速度或能量目标，使轨道持续运行下去。例如在 X 轴穿越处设定 X 方向速度略为负值，确保轨道始终向平动点内侧卷绕而不逃逸。该方法由 VF13AD 等优化器求解机动方向和时刻，同时施加自旋面约束。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 轨道平衡法详解 | 术语定义
  description: 一种平动点轨道保持策略，也称轨道延续法。其核心思路是不追求回到某条预定参考轨道，而是通过在当前轨道上选择机动点，设定数圈之后的速度或能量目标，使轨道持续运行下去。例如在 X 轴穿越处设定 X 方向速度略为负值，确保轨道始终向平动点内侧卷绕而不逃逸。该方法由 VF13AD 等优化器求解机动方向和时刻，同时施加自旋面约束。
  image: /logo.png
permalink: /glossary/dynamics/orbit-balancing-method/
---

# 轨道平衡法（Orbit Balancing Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种平动点轨道保持策略，也称轨道延续法。其核心思路是不追求回到某条预定参考轨道，而是通过在当前轨道上选择机动点，设定数圈之后的速度或能量目标，使轨道持续运行下去。例如在 X 轴穿越处设定 X 方向速度略为负值，确保轨道始终向平动点内侧卷绕而不逃逸。该方法由 VF13AD 等优化器求解机动方向和时刻，同时施加自旋面约束。其优势在于不依赖参考轨道，适合 ARTEMIS 这类没有严格轨道要求的任务。

## 应用价值

平动点轨道在月球探测任务中可作为长期停泊点和中继平台。该控制方法在地月空间航天器姿态与轨道控制中具有重要应用价值。优化方法的应用可有效提升地月转移轨道的性能和任务效率。

## 相关概念

- [保守系统（Conservative System）](/glossary/dynamics/conservative-system/)
- 空间流形动力学（Space Manifold Dynamics, SMD）
- [RSW坐标系（Radial-Transverse-Normal Frame, RSW Frame）](/glossary/dynamics/rsw/)

## 参考文献

- Folta et al. 2010
