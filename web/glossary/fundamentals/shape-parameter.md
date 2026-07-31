---
title: 形状参数（Shape Parameter）
description: 定义指数正弦曲线轨迹形状的四个参数 [k₀, k₁, k₂, φ]。k₀ 控制轨道大小（距离尺度），k₁ 控制振荡幅度，k₂ 控制角频率，φ 控制相位。当出发速度已知时，自由度降为单一参数 k₂，通过搜索 k₂ 来瞄准目标天体。论文中 k₂ 称为形状参数（shape parameter），在多圈 Lambert 问题求
keywords: 形状参数, Shape Parameter, 基础概念, 轨道力学, 坐标系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 形状参数（Shape Parameter）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 形状参数详解 | 术语定义
  description: 定义指数正弦曲线轨迹形状的四个参数 [k₀, k₁, k₂, φ]。k₀ 控制轨道大小（距离尺度），k₁ 控制振荡幅度，k₂ 控制角频率，φ 控制相位。当出发速度已知时，自由度降为单一参数 k₂，通过搜索 k₂ 来瞄准目标天体。论文中 k₂ 称为形状参数（shape parameter），在多圈 Lambert 问题求
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 形状参数详解 | 术语定义
  description: 定义指数正弦曲线轨迹形状的四个参数 [k₀, k₁, k₂, φ]。k₀ 控制轨道大小（距离尺度），k₁ 控制振荡幅度，k₂ 控制角频率，φ 控制相位。当出发速度已知时，自由度降为单一参数 k₂，通过搜索 k₂ 来瞄准目标天体。论文中 k₂ 称为形状参数（shape parameter），在多圈 Lambert 问题求
  image: /logo.png
permalink: /glossary/fundamentals/shape-parameter/
---

# 形状参数（Shape Parameter）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

定义指数正弦曲线轨迹形状的四个参数 [k₀, k₁, k₂, φ]。k₀ 控制轨道大小（距离尺度），k₁ 控制振荡幅度，k₂ 控制角频率，φ 控制相位。当出发速度已知时，自由度降为单一参数 k₂，通过搜索 k₂ 来瞄准目标天体。论文中 k₂ 称为形状参数（shape parameter），在多圈 Lambert 问题求解中它作为外层优化的决策变量。

## 应用价值

形状参数是地月空间研究的基础概念，为理解更复杂的航天器动力学问题提供了理论支撑。
在实际工程应用中，形状参数的准确计算和分析对于任务成功至关重要。
掌握形状参数的概念有助于工程师进行轨道设计和任务规划。
形状参数为航天器轨道力学研究提供了基本框架，是进一步学习高级概念的基础。

## 相关概念

- [Bang-off-Bang推力剖面（Bang-off-Bang Thrust Profile）](/glossary/fundamentals/bang-off-bang-thrust-profile/)
- [春分点（Vernal Equinox）](/glossary/fundamentals/vernal-equinox/)
- [L2-L1同伦法（L2-L1 Homotopy）](/glossary/fundamentals/l2-l1-homotopy/)

## 参考文献

- Izzo - 2006 - Lambert's problem for exponential sinusoids
