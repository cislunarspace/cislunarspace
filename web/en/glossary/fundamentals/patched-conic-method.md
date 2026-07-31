---
title: Patched Conic Method
description: 将多天体引力场中的飞行轨道分段处理，每段只考虑一个主导天体的引力，以圆锥曲线（椭圆、抛物线或双曲线）描述，然后在各段边界处拼接连续的轨道设计方法。本文在解析搜索阶段基于此方法思想，将地月转移轨道分为地心段、月心段和中间段分别求解，通过B平面瞄准实现月球交会。该方法精度有限但计算快速，适合作为数值迭代的初始解。
keywords: 圆锥曲线拼接法, Patched Conic Method, 基础概念, 轨道力学, 坐标系统
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Patched Conic Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Patched Conic Method Explained | Term Definition
  description: 将多天体引力场中的飞行轨道分段处理，每段只考虑一个主导天体的引力，以圆锥曲线（椭圆、抛物线或双曲线）描述，然后在各段边界处拼接连续的轨道设计方法。本文在解析搜索阶段基于此方法思想，将地月转移轨道分为地心段、月心段和中间段分别求解，通过B平面瞄准实现月球交会。该方法精度有限但计算快速，适合作为数值迭代的初始解。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Patched Conic Method Explained | Term Definition
  description: 将多天体引力场中的飞行轨道分段处理，每段只考虑一个主导天体的引力，以圆锥曲线（椭圆、抛物线或双曲线）描述，然后在各段边界处拼接连续的轨道设计方法。本文在解析搜索阶段基于此方法思想，将地月转移轨道分为地心段、月心段和中间段分别求解，通过B平面瞄准实现月球交会。该方法精度有限但计算快速，适合作为数值迭代的初始解。
  image: /logo.png
permalink: /en/glossary/fundamentals/patched-conic-method/
---

# Patched Conic Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An orbit design method that divides a multi-body trajectory into segments, each governed by a single dominant gravitational body and described as a conic section (ellipse, parabola, or hyperbola), with segments joined at boundary points. This paper's analytical search stage uses this concept to divide the cislunar transfer orbit into Earth-centered, Moon-centered, and mid-course segments, with B-plane targeting to achieve lunar rendezvous. The method has limited accuracy but fast computation, suitable as an initial guess for numerical iteration.

## Application Value

圆锥曲线拼接法是地月空间研究的基础概念，为理解更复杂的航天器动力学问题提供了理论支撑 在实际工程应用中，圆锥曲线拼接法的准确计算和分析对于任务成功至关重要 掌握圆锥曲线拼接法的概念有助于工程师进行轨道设计和任务规划 圆锥曲线拼接法为航天器轨道力学研究提供了基本框架，是进一步学习高级概念的基础

## Related Concepts

- [Bang推力剖面](/en/glossary/fundamentals/bang推力剖面/)
- [春分点](/en/glossary/fundamentals/春分点/)
- [L1同伦法](/en/glossary/fundamentals/l1同伦法/)

## References

- 刘磊 等 - 2008 - 多约束条件下的地月转移轨道设计
- 轨道力学 第8章
