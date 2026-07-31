---
title: 单纯形算法（Simplex Algorithm）
description: 用于优化的直接搜索方法，不依赖梯度信息，通过在可行域内逐步比较和替换顶点来寻找最优解。论文在 SQP 求解后，用单纯形算法对衔接点做局部精细优化，最小化电推进末端与目标流形初始条件之间的相空间距离，容差控制在 5% 以内。
keywords: 单纯形算法, Simplex Algorithm, 基础概念, 轨道力学, 坐标系统
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: 单纯形算法（Simplex Algorithm）
  desc: 地月空间研究前沿、术语定义与工具资源一站式学习。
  image: /logo.png
og:
  title: 单纯形算法详解 | 术语定义
  description: 用于优化的直接搜索方法，不依赖梯度信息，通过在可行域内逐步比较和替换顶点来寻找最优解。论文在 SQP 求解后，用单纯形算法对衔接点做局部精细优化，最小化电推进末端与目标流形初始条件之间的相空间距离，容差控制在 5% 以内。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: 单纯形算法详解 | 术语定义
  description: 用于优化的直接搜索方法，不依赖梯度信息，通过在可行域内逐步比较和替换顶点来寻找最优解。论文在 SQP 求解后，用单纯形算法对衔接点做局部精细优化，最小化电推进末端与目标流形初始条件之间的相空间距离，容差控制在 5% 以内。
  image: /logo.png
permalink: /glossary/fundamentals/simplex-algorithm/
---

# 单纯形算法（Simplex Algorithm）

> 本文作者：[天疆说](https://blog.csdn.net/qq_33254264)
>
>本站地址：[https://cislunarspace.cn](https://cislunarspace.cn)

## 定义

用于优化的直接搜索方法，不依赖梯度信息，通过在可行域内逐步比较和替换顶点来寻找最优解。论文在 SQP 求解后，用单纯形算法对衔接点做局部精细优化，最小化电推进末端与目标流形初始条件之间的相空间距离，容差控制在 5% 以内。

## 应用价值

单纯形算法是地月空间研究的基础概念，为理解更复杂的航天器动力学问题提供了理论支撑。
在实际工程应用中，单纯形算法的准确计算和分析对于任务成功至关重要。
掌握单纯形算法的概念有助于工程师进行轨道设计和任务规划。
单纯形算法为航天器轨道力学研究提供了基本框架，是进一步学习高级概念的基础。

## 相关概念

- [Bang-off-Bang推力剖面（Bang-off-Bang Thrust Profile）](/glossary/fundamentals/bang-off-bang-thrust-profile/)
- [春分点（Vernal Equinox）](/glossary/fundamentals/vernal-equinox/)
- [L2-L1同伦法（L2-L1 Homotopy）](/glossary/fundamentals/l2-l1-homotopy/)

## 参考文献

- Pergola 等 - 2010 - Three-body invariant manifold transition with electric propulsion
