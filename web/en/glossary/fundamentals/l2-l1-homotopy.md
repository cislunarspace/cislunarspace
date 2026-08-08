---
title: L2-L1 Homotopy
description: 一种连接能量最小化（L2范数）和最小燃料（L1范数）问题的同伦延拓方法。通过对两个代价函数取凸组合作为同伦族，从光滑的能量最小化解出发，逐步过渡到bang-bang结构的最小燃料解。缺点是在低推力下控制切换次数剧增，射方程精度恶化。
keywords: L2-L1同伦法, L2-L1 Homotopy, 基础概念, 轨道力学, 坐标系统
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: L2-L1 Homotopy
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "L2-L1 Homotopy Explained | Term Definition"
  description: 一种连接能量最小化（L2范数）和最小燃料（L1范数）问题的同伦延拓方法。通过对两个代价函数取凸组合作为同伦族，从光滑的能量最小化解出发，逐步过渡到bang-bang结构的最小燃料解。缺点是在低推力下控制切换次数剧增，射方程精度恶化。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "L2-L1 Homotopy Explained | Term Definition"
  description: 一种连接能量最小化（L2范数）和最小燃料（L1范数）问题的同伦延拓方法。通过对两个代价函数取凸组合作为同伦族，从光滑的能量最小化解出发，逐步过渡到bang-bang结构的最小燃料解。缺点是在低推力下控制切换次数剧增，射方程精度恶化。
  image: /logo.png
permalink: /en/glossary/fundamentals/l2-l1-homotopy/
---

# L2-L1 Homotopy

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A homotopy continuation method connecting the energy minimization problem (L2-norm) to the minimum-fuel problem (L1-norm) via convex combination of the two cost functionals. Starting from the smooth energy-optimal solution, it progressively transitions to the bang-bang minimum-fuel solution. Its drawback is that shooting precision degrades significantly at low thrust as the number of control switchings grows rapidly.

## Application Value

L2-L1同伦法是地月空间研究的基础概念，为理解更复杂的航天器动力学问题提供了理论支撑 在实际工程应用中，L2-L1同伦法的准确计算和分析对于任务成功至关重要 掌握L2-L1同伦法的概念有助于工程师进行轨道设计和任务规划 L2-L1同伦法为航天器轨道力学研究提供了基本框架，是进一步学习高级概念的基础

## Related Concepts

- Bang推力剖面
- 春分点
- [分析历表](/en/glossary/fundamentals/analytical-ephemeris/)

## References

- Caillau et al. 2012 - Minimum fuel control of the planar circular restricted three-body problem
