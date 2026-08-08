---
title: Defect Constraint
description: In collocation methods, a constraint form that approximately satisfies differential equations by using the deviation between predicted state values at discre...
keywords: Defect Constraint, orbital dynamics, trajectory optimization, celestial mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Defect Constraint
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Defect Constraint Explained | Term Definition"
  description: In collocation methods, a constraint form that approximately satisfies differential equations by using the deviation between predicted state values at discre...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Defect Constraint Explained | Term Definition"
  description: In collocation methods, a constraint form that approximately satisfies differential equations by using the deviation between predicted state values at discre...
  image: /logo.png
permalink: /en/glossary/dynamics/defect-constraint/
---

# Defect Constraint

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

In collocation methods, a constraint form that approximately satisfies differential equations by using the deviation between predicted state values at discrete nodes and integrated true trajectories. For Hermite-Simpson formulation, defect constraints are defined as the state at segment endpoints minus the state prediction from Simpson quadrature over the segment, which should be zero at each collocation point. Defect constraints are the core mechanism for transcribing continuous optimal control problems into nonlinear programming.

## Application Value

[Translation needed for: 该概念在地月空间轨道设计、导航控制或任务分析中具有重要应用价值，理解其内涵有助于掌握相关领域的核心知...]

## Related Concepts

- Lyapunov Stability
- [Adams-Cowell Integrator](/en/glossary/dynamics/adams-cowell-integrator/)
- Hansen Coefficients
- [Control Curve, U_i](/en/glossary/dynamics/control-curve-ui/)

## References

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon
- Conway - 2010 - Spacecraft trajectory optimization
