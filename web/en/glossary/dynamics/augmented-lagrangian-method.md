---
title: Augmented Lagrangian Method
description: A constraint-handling method that augments the objective function with both Lagrange multiplier terms and a quadratic penalty term. In HDDP, terminal constra...
keywords: Augmented Lagrangian Method, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Augmented Lagrangian Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Augmented Lagrangian Method Explained | Term Definition"
  description: A constraint-handling method that augments the objective function with both Lagrange multiplier terms and a quadratic penalty term. In HDDP, terminal constra...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Augmented Lagrangian Method Explained | Term Definition"
  description: A constraint-handling method that augments the objective function with both Lagrange multiplier terms and a quadratic penalty term. In HDDP, terminal constra...
  image: /logo.png
permalink: /en/glossary/dynamics/augmented-lagrangian-method/
---

# Augmented Lagrangian Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A constraint-handling method that augments the objective function with both Lagrange multiplier terms and a quadratic penalty term. In HDDP, terminal constraints ψ=0 are adjoined via multipliers λ and a penalty matrix Σ as φ+λᵀψ+ψᵀΣψ. Multipliers are updated each iteration to steer the trajectory toward feasibility; the penalty provides additional discouragement of constraint violations for stability. Compared to pure penalty methods, the augmented Lagrangian converges to the exact solution without requiring the penalty weight to grow unboundedly.

## Application Value

在轨道动力学数值仿真中，该方法用于提高计算精度和效率. 通过合理的离散化策略，可以在保证数值稳定性的同时大幅减少计算量.

## Related Concepts

- [Hill 模型（Hill Model）](/glossary/dynamics/hill-model/)
- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- [探测器定位（Probe Targeting）](/glossary/dynamics/probe-targeting/)

## References

- Lantoine & Russell 2012, JOTA Part 1 & 2; Aziz et al. 2019, JGCD
