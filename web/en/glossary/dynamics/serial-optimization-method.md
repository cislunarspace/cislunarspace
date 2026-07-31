---
title: Serial Optimization Method
description: A trajectory optimization strategy that executes global search and local refinement in sequence. The first step performs a global traversal initial value sea...
keywords: Serial Optimization Method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Serial Optimization Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Serial Optimization Method Explained | Term Definition
  description: A trajectory optimization strategy that executes global search and local refinement in sequence. The first step performs a global traversal initial value sea...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Serial Optimization Method Explained | Term Definition
  description: A trajectory optimization strategy that executes global search and local refinement in sequence. The first step performs a global traversal initial value sea...
  image: /logo.png
permalink: /en/glossary/dynamics/serial-optimization-method/
---

# Serial Optimization Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A trajectory optimization strategy that executes global search and local refinement in sequence. The first step performs a global traversal initial value search over all candidate points on the target manifold, optimizing velocity impulse as a single variable at each point to find a suboptimal solution. The second step uses this suboptimal solution as the initial guess for local three-variable gradient optimization in its neighborhood to find the global optimum. This serial approach avoids local minima traps of pure gradient methods while controlling computational cost.

## Application Value

Based on its definition, a trajectory optimization strategy that executes global search and local refinement in sequence. the first step performs a global traversal initial value search over all candidate points on the target.

## Related Concepts

- [三体问题（Three-Body Problem）](/en/glossary/dynamics/three-body-problem/)
- [最优控制（Optimal Control）](/en/glossary/dynamics/optimal-control/)
- [轨迹优化（Trajectory Optimization）](/en/glossary/dynamics/trajectory-optimization/)

## References

- 曹鹏飞 等 - 2017 - 地月L2点Halo轨道支持的登月轨道优化设计
