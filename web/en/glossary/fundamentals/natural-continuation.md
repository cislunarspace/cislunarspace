---
title: Natural Continuation
description: "A class of numerical methods that traces an orbit family continuously. Starting from a known orbit's initial conditions, the parameter (e.g., the apolune abs..."
keywords: Natural Continuation, fundamentals
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Natural Continuation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Natural Continuation Explained | Term Definition"
  description: "A class of numerical methods that traces an orbit family continuously. Starting from a known orbit's initial conditions, the parameter (e.g., the apolune abs..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Natural Continuation Explained | Term Definition"
  description: "A class of numerical methods that traces an orbit family continuously. Starting from a known orbit's initial conditions, the parameter (e.g., the apolune abs..."
  image: /logo.png
permalink: /en/glossary/fundamentals/natural-continuation/
---

# Natural Continuation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A class of numerical methods that traces an orbit family continuously. Starting from a known orbit's initial conditions, the parameter (e.g., the apolune abscissa x0) is incrementally changed, and the current solution seeds the iteration for the next orbit, sweeping out the entire family. This approach is far more efficient than searching from scratch and is the standard technique for computing halo orbit families.

## Application Value

在轨道设计和转移轨道优化中，该方法用于确定最优转移时机和轨道形状，以最小化燃料消耗或飞行时间. 通过数值仿真和迭代优化，可获得满足任务约束的可行轨道方案.

## Related Concepts

- [同步旋转坐标系（Synodic Rotating Frame）](/glossary/fundamentals/synodic-rotating-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- Gauss求积公式（Gauss Quadrature Formula）
- 星座构型向量（Constellation Pattern Vector）

## References

- Conti and Circi, 2025, Design of halo orbit constellation for lunar global positioning and communication services
