---
title: 圆锥曲线拼接法（Patched Conic Method）
description: 将多天体引力场中的飞行轨道分段处理，每段只考虑一个主导天体的引力，以圆锥曲线（椭圆、抛物线或双曲线）描述，然后在各段边界处拼接连续的轨道设计方法。本文在解析搜索阶段基于此方法思想，将地月转移轨道分为地心段、月心段和中间段分别求解，通过B平面瞄准实现月球交会。该方法精度有限但计算快速，适合作为数值迭代的初始解。
keywords: 圆锥曲线拼接法, Patched Conic Method, 基础概念, 轨道力学, 坐标系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 圆锥曲线拼接法（Patched Conic Method）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 圆锥曲线拼接法详解 | 术语定义
  description: 将多天体引力场中的飞行轨道分段处理，每段只考虑一个主导天体的引力，以圆锥曲线（椭圆、抛物线或双曲线）描述，然后在各段边界处拼接连续的轨道设计方法。本文在解析搜索阶段基于此方法思想，将地月转移轨道分为地心段、月心段和中间段分别求解，通过B平面瞄准实现月球交会。该方法精度有限但计算快速，适合作为数值迭代的初始解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 圆锥曲线拼接法详解 | 术语定义
  description: 将多天体引力场中的飞行轨道分段处理，每段只考虑一个主导天体的引力，以圆锥曲线（椭圆、抛物线或双曲线）描述，然后在各段边界处拼接连续的轨道设计方法。本文在解析搜索阶段基于此方法思想，将地月转移轨道分为地心段、月心段和中间段分别求解，通过B平面瞄准实现月球交会。该方法精度有限但计算快速，适合作为数值迭代的初始解。
  image: /logo.png
permalink: /glossary/fundamentals/patched-conic-method/
---

# 圆锥曲线拼接法（Patched Conic Method）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

将多天体引力场中的飞行轨道分段处理，每段只考虑一个主导天体的引力，以圆锥曲线（椭圆、抛物线或双曲线）描述，然后在各段边界处拼接连续的轨道设计方法。本文在解析搜索阶段基于此方法思想，将地月转移轨道分为地心段、月心段和中间段分别求解，通过B平面瞄准实现月球交会。该方法精度有限但计算快速，适合作为数值迭代的初始解。

## 应用价值

圆锥曲线拼接法是地月空间研究的基础概念，为理解更复杂的航天器动力学问题提供了理论支撑。
在实际工程应用中，圆锥曲线拼接法的准确计算和分析对于任务成功至关重要。
掌握圆锥曲线拼接法的概念有助于工程师进行轨道设计和任务规划。
圆锥曲线拼接法为航天器轨道力学研究提供了基本框架，是进一步学习高级概念的基础。

## 相关概念

- [Bang-off-Bang推力剖面（Bang-off-Bang Thrust Profile）](/glossary/fundamentals/bang-off-bang-thrust-profile/)
- [春分点（Vernal Equinox）](/glossary/fundamentals/vernal-equinox/)
- [L2-L1同伦法（L2-L1 Homotopy）](/glossary/fundamentals/l2-l1-homotopy/)

## 参考文献

- 刘磊 等 - 2008 - 多约束条件下的地月转移轨道设计
- 轨道力学 第8章
