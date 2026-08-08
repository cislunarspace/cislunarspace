---
title: 多圆锥截线法（Multi-Conic Method）
description: 一种快速轨道传播方法，将转移时间等分为若干段，在每段时间内用圆锥曲线近似轨道弧段，并叠加月球和太阳的平均摄动加速度进行修正。相比圆锥曲线拼接法精度更高，计算效率远高于全数值积分。本文在其基础上引入地球扁率（J2项）修正，当探测器距地心较近时切换为J2模型外推，进一步提升了近地段的求解精度。
keywords: 多圆锥截线法, Multi-Conic Method, 轨道力学, 基础概念, 参考系
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 多圆锥截线法（Multi-Conic Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 多圆锥截线法详解 | 术语定义
  description: 一种快速轨道传播方法，将转移时间等分为若干段，在每段时间内用圆锥曲线近似轨道弧段，并叠加月球和太阳的平均摄动加速度进行修正。相比圆锥曲线拼接法精度更高，计算效率远高于全数值积分。本文在其基础上引入地球扁率（J2项）修正，当探测器距地心较近时切换为J2模型外推，进一步提升了近地段的求解精度。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 多圆锥截线法详解 | 术语定义
  description: 一种快速轨道传播方法，将转移时间等分为若干段，在每段时间内用圆锥曲线近似轨道弧段，并叠加月球和太阳的平均摄动加速度进行修正。相比圆锥曲线拼接法精度更高，计算效率远高于全数值积分。本文在其基础上引入地球扁率（J2项）修正，当探测器距地心较近时切换为J2模型外推，进一步提升了近地段的求解精度。
  image: /logo.png
permalink: /glossary/fundamentals/multi-conic-method/
---

# 多圆锥截线法（Multi-Conic Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

一种快速轨道传播方法，将转移时间等分为若干段，在每段时间内用圆锥曲线近似轨道弧段，并叠加月球和太阳的平均摄动加速度进行修正。相比圆锥曲线拼接法精度更高，计算效率远高于全数值积分。本文在其基础上引入地球扁率（J2项）修正，当探测器距地心较近时切换为J2模型外推，进一步提升了近地段的求解精度。

## 应用价值

该轨道设计方法在地月空间任务中可用于转移轨道设计、轨道保持和任务规划，提升飞行器的性能和任务灵活性。

## 相关概念

- 月心旋转坐标系（Moon-Centered Rotating Frame）
- [有效势能（Effective Pseudo-Potential）](/glossary/fundamentals/effective-pseudo-potential/)
- 比冲（Specific Impulse）
- 月球二体能量（Two-Body Energy with Respect to the Moon）

## 参考文献

- 陆林 等 - 2021 - 载人月球极地探测地月转移轨道设计
