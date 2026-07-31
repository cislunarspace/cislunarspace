---
title: Upper Confidence Bounds Applied to Trees, UCT
description: The tree policy in Monte Carlo tree search for balancing exploration and exploitation. Formulated as U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a)), where Q is the action value estimate and N(s), N(s,a) ar...
keywords: Upper Confidence Bounds Applied to Trees, UCT
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Upper Confidence Bounds Applied to Trees, UCT
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Upper Confidence Bounds Applied to Trees, UCT Explained | Term Definition"
  description: The tree policy in Monte Carlo tree search for balancing exploration and exploitation. Formulated as U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a)), where Q is the action value estimate and N(s), N(s,a) ar...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Upper Confidence Bounds Applied to Trees, UCT Explained | Term Definition"
  description: The tree policy in Monte Carlo tree search for balancing exploration and exploitation. Formulated as U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a)), where Q is the action value estimate and N(s), N(s,a) ar...
  image: /logo.png
permalink: /en/glossary/dynamics/upper-confidence-bounds-applied-to-trees-uct/
---
# Upper Confidence Bounds Applied to Trees, UCT

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The tree policy in Monte Carlo tree search for balancing exploration and exploitation. Formulated as U(s,a) = Q(s,a) + C*sqrt(ln(N(s))/N(s,a)), where Q is the action value estimate and N(s), N(s,a) are visit counts. In MO-MCTS, Q(s,a) is replaced by the HVI to handle multi-objective cases.

## Application Value

为状态估计提供概率框架，提高跟踪精度 该概念为地月空间任务设计提供了重要的理论基础 在实际工程中可用于轨道设计、任务规划或控制系统分析。

## References

- Klonowski 等 - 2024 - Cislunar space domain awareness architecture design and analysis for cooperative agents
