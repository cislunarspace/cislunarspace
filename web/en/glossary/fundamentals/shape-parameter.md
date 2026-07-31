---
title: Shape Parameter
description: 定义指数正弦曲线轨迹形状的四个参数 [k₀, k₁, k₂, φ]。k₀ 控制轨道大小（距离尺度），k₁ 控制振荡幅度，k₂ 控制角频率，φ 控制相位。当出发速度已知时，自由度降为单一参数 k₂，通过搜索 k₂ 来瞄准目标天体。论文中 k₂ 称为形状参数（shape parameter），在多圈 Lambert 问题求
keywords: 形状参数, Shape Parameter, 基础概念, 轨道力学, 坐标系统
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Shape Parameter
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Shape Parameter Explained | Term Definition
  description: 定义指数正弦曲线轨迹形状的四个参数 [k₀, k₁, k₂, φ]。k₀ 控制轨道大小（距离尺度），k₁ 控制振荡幅度，k₂ 控制角频率，φ 控制相位。当出发速度已知时，自由度降为单一参数 k₂，通过搜索 k₂ 来瞄准目标天体。论文中 k₂ 称为形状参数（shape parameter），在多圈 Lambert 问题求
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Shape Parameter Explained | Term Definition
  description: 定义指数正弦曲线轨迹形状的四个参数 [k₀, k₁, k₂, φ]。k₀ 控制轨道大小（距离尺度），k₁ 控制振荡幅度，k₂ 控制角频率，φ 控制相位。当出发速度已知时，自由度降为单一参数 k₂，通过搜索 k₂ 来瞄准目标天体。论文中 k₂ 称为形状参数（shape parameter），在多圈 Lambert 问题求
  image: /logo.png
permalink: /en/glossary/fundamentals/shape-parameter/
---

# Shape Parameter

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The four parameters [k₀, k₁, k₂, φ] that define the shape of an exponential sinusoid trajectory. k₀ sets the distance scale, k₁ controls oscillation amplitude, k₂ controls angular frequency, and φ sets the phase. When departure velocity is known, the degrees of freedom reduce to the single parameter k₂, which is searched to target the destination body. In the paper's multirevolution Lambert problem formulation, k₂ serves as a decision variable in the outer optimization loop.

## Application Value

形状参数是地月空间研究的基础概念，为理解更复杂的航天器动力学问题提供了理论支撑 在实际工程应用中，形状参数的准确计算和分析对于任务成功至关重要 掌握形状参数的概念有助于工程师进行轨道设计和任务规划 形状参数为航天器轨道力学研究提供了基本框架，是进一步学习高级概念的基础

## Related Concepts

- [Bang推力剖面](/en/glossary/fundamentals/bang推力剖面/)
- [春分点](/en/glossary/fundamentals/春分点/)
- [L1同伦法](/en/glossary/fundamentals/l1同伦法/)

## References

- Izzo - 2006 - Lambert's problem for exponential sinusoids
