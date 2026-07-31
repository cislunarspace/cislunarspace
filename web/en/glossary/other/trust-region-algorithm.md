---
title: Trust-Region Algorithm
description: A class of iterative optimization algorithms. At each iteration, a trust region is defined around the current point, and a quadratic model approximates the obje
keywords: Trust-Region Algorithm
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Trust-Region Algorithm
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Trust-Region Algorithm Explained | Term Definition
  description: A class of iterative optimization algorithms. At each iteration, a trust region is defined around the current point, and a quadratic model approximates the obje
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Trust-Region Algorithm Explained | Term Definition
  description: A class of iterative optimization algorithms. At each iteration, a trust region is defined around the current point, and a quadratic model approximates the obje
  image: /logo.png
permalink: /en/glossary/other/trust-region-algorithm/
---

# Trust-Region Algorithm

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A class of iterative optimization algorithms. At each iteration, a trust region is defined around the current point, and a quadratic model approximates the objective function. A trial step is computed by solving the subproblem within the region; if it yields sufficient decrease, the step is accepted (and the region may expand), otherwise the step is rejected and the region shrinks. It combines the fast convergence of Newton's method with the robustness of gradient descent.

## Application Value

See Definition section above.


## Related Concepts

- [FreeFlyer（FreeFlyer）](/en/glossary/other/freeflyer/)
- [水平起降运载器（Horizontal Take-off Horizontal Landing）](/en/glossary/other/horizontal-take-off-horizontal-landing/)
- [轻量化全连接神经网络（Lightweight Fully-Connected Neural Network）](/en/glossary/fundamentals/lightweight-fully-connected-neural-network/)
- [CUDAjectory（CUDAjectory）](/en/glossary/other/cudajectory/)


## References

- Li et al., 2026, Chinese Journal of Space Science, 46(1):175-188; Byrd et al., 1988, Mathematical Programming, 40(1):247-263