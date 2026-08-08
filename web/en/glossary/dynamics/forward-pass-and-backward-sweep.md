---
title: Forward Pass and Backward Sweep
description: The two core computational steps of DDP algorithms. The forward pass propagates from the initial state through the equations of motion at each stage using th...
keywords: Forward Pass and Backward Sweep
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Forward Pass and Backward Sweep
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Forward Pass and Backward Sweep Explained | Term Definition"
  description: The two core computational steps of DDP algorithms. The forward pass propagates from the initial state through the equations of motion at each stage using th...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Forward Pass and Backward Sweep Explained | Term Definition"
  description: The two core computational steps of DDP algorithms. The forward pass propagates from the initial state through the equations of motion at each stage using th...
  image: /logo.png
permalink: /en/glossary/dynamics/forward-pass-and-backward-sweep/
---

# Forward Pass and Backward Sweep

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The two core computational steps of DDP algorithms. The forward pass propagates from the initial state through the equations of motion at each stage using the current control sequence, producing the nominal state trajectory and evaluating the cost. The backward sweep recurses from the final stage backward, using gradient and Hessian information of the cost and constraints to solve for optimal control updates δu and parameter updates δw at each stage. One forward-backward pair constitutes a single iteration, repeated until optimality conditions are met.

## Application Value

This concept is fundamental to cislunar orbital mechanics and mission analysis, providing essential theoretical support for trajectory design and operational planning.

## Related Concepts

- Retrograde Motion
- [Absolute Phase Bias](/en/glossary/dynamics/absolute-phase-bias/)
- Relative Attitude Quaternion
- Radial-Tangential-Normal Coordinate System, RTN

## References

- Mayne 1966; Lantoine & Russell 2012, JOTA; Aziz et al. 2019, JGCD
