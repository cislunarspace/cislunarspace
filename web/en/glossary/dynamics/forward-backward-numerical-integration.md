---
title: Forward-Backward Numerical Integration
description: A maneuver reconstruction method: at both ends of a detected maneuver time window, numerical integration of the natural evolution dynamics model is performed...
keywords: Forward-Backward Numerical Integration
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Forward-Backward Numerical Integration
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Forward-Backward Numerical Integration Explained | Term Definition
  description: A maneuver reconstruction method: at both ends of a detected maneuver time window, numerical integration of the natural evolution dynamics model is performed...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Forward-Backward Numerical Integration Explained | Term Definition
  description: A maneuver reconstruction method: at both ends of a detected maneuver time window, numerical integration of the natural evolution dynamics model is performed...
  image: /logo.png
permalink: /en/glossary/dynamics/forward-backward-numerical-integration/
---

# Forward-Backward Numerical Integration

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A maneuver reconstruction method: at both ends of a detected maneuver time window, numerical integration of the natural evolution dynamics model is performed forward and backward in time, producing two trajectories that assume no maneuver occurred. The time point where the position difference between the two trajectories is minimized marks the maneuver instant; the average position at that instant gives the maneuver location, and the velocity difference gives the delta-V. This method transforms maneuver parameter estimation into a difference analysis of two reference trajectories, avoiding the difficulty of directly solving nonlinear equations.

## Application Value

This concept is essential for understanding motion characteristics in orbital design and control, and plays a vital role in mission success.

## Related Concepts

- [Minimum Norm Solution](/en/glossary/dynamics/minimum-norm-solution/)
- [Rigid Body Dynamics](/en/glossary/dynamics/rigid-body-dynamics/)
- [Variable-Size Design Space, VSDS](/en/glossary/dynamics/variable-size-design-space-vsds/)
- [Analytical Gradient](/en/glossary/dynamics/analytical-gradient/)

## References

- Zhang和Dang - 2025 - Impulsive maneuver detection of cislunar space objects based on convolutional neural network