---
title: Simplex Algorithm
description: 用于优化的直接搜索方法，不依赖梯度信息，通过在可行域内逐步比较和替换顶点来寻找最优解。论文在 SQP 求解后，用单纯形算法对衔接点做局部精细优化，最小化电推进末端与目标流形初始条件之间的相空间距离，容差控制在 5% 以内。
keywords: 单纯形算法, Simplex Algorithm, 基础概念, 轨道力学, 坐标系统
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Simplex Algorithm
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Simplex Algorithm Explained | Term Definition
  description: 用于优化的直接搜索方法，不依赖梯度信息，通过在可行域内逐步比较和替换顶点来寻找最优解。论文在 SQP 求解后，用单纯形算法对衔接点做局部精细优化，最小化电推进末端与目标流形初始条件之间的相空间距离，容差控制在 5% 以内。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Simplex Algorithm Explained | Term Definition
  description: 用于优化的直接搜索方法，不依赖梯度信息，通过在可行域内逐步比较和替换顶点来寻找最优解。论文在 SQP 求解后，用单纯形算法对衔接点做局部精细优化，最小化电推进末端与目标流形初始条件之间的相空间距离，容差控制在 5% 以内。
  image: /logo.png
permalink: /en/glossary/fundamentals/simplex-algorithm/
---

# Simplex Algorithm

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A derivative-free direct search optimization method that progressively compares and replaces vertices in the feasible region to find the optimum. After the SQP solution, the paper applies the simplex algorithm to locally refine the connection points, minimizing the phase-space distance between the powered-arc endpoint and the target manifold initial conditions, with a tolerance of 5%.

## Application Value

单纯形算法是地月空间研究的基础概念，为理解更复杂的航天器动力学问题提供了理论支撑 在实际工程应用中，单纯形算法的准确计算和分析对于任务成功至关重要 掌握单纯形算法的概念有助于工程师进行轨道设计和任务规划 单纯形算法为航天器轨道力学研究提供了基本框架，是进一步学习高级概念的基础

## Related Concepts

- [Bang推力剖面](/en/glossary/fundamentals/bang推力剖面/)
- [春分点](/en/glossary/fundamentals/春分点/)
- [L1同伦法](/en/glossary/fundamentals/l1同伦法/)

## References

- Pergola 等 - 2010 - Three-body invariant manifold transition with electric propulsion
