---
title: Multiple Shooting Method
description: A numerical method that divides the integration interval into subintervals, integrates independently on each, and enforces continuity between adjacent subint...
keywords: Multiple Shooting Method, spacecraft dynamics, orbital mechanics, coordinate system
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Multiple Shooting Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Multiple Shooting Method Explained | Term Definition
  description: A numerical method that divides the integration interval into subintervals, integrates independently on each, and enforces continuity between adjacent subint...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Multiple Shooting Method Explained | Term Definition
  description: A numerical method that divides the integration interval into subintervals, integrates independently on each, and enforces continuity between adjacent subint...
  image: /logo.png
permalink: /en/glossary/fundamentals/multiple-shooting-method/
---

# Multiple Shooting Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A numerical method that divides the integration interval into subintervals, integrates independently on each, and enforces continuity between adjacent subintervals through constraint equations. The initial state on each subinterval is an independent optimization variable. Compared with single shooting, multiple shooting is less sensitive to initial guesses and better suited for long-duration, strongly nonlinear trajectory problems, though computational cost grows with system dimension.

## Application Value

The shooting method solves two-point boundary value problems through iterative adjustment, commonly used in trajectory optimization and optimal control.

## Related Concepts

- [Continuous Low Thrust](/en/glossary/fundamentals/continuous-low-thrust/)
- [Two-Way Link](/en/glossary/fundamentals/two-way-link/)
- [Inertial Coordinate System](/en/glossary/fundamentals/inertial-coordinate-system/)
- [Equivalent Illuminated Area](/en/glossary/fundamentals/equivalent-illuminated-area/)

## References

- Serban et al., 2002, Acta Astronautica
