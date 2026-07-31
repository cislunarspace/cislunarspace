---
title: Measurement Jacobian
description: A matrix describing the local sensitivity of measurements to system states, defined as the partial derivatives of the measurement function with respect to the s
keywords: Measurement Jacobian, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Measurement Jacobian
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Measurement Jacobian Explained | Term Definition"
  description: A matrix describing the local sensitivity of measurements to system states, defined as the partial derivatives of the measurement function with respect to the s
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Measurement Jacobian Explained | Term Definition"
  description: A matrix describing the local sensitivity of measurements to system states, defined as the partial derivatives of the measurement function with respect to the s
  image: /logo.png
permalink: /en/glossary/dynamics/measurement-jacobian/
---

# Measurement Jacobian

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A matrix describing the local sensitivity of measurements to system states, defined as the partial derivatives of the measurement function with respect to the state vector. In the observability gramian P(x₀) = ∫₀ᵀ Φ'(t)H'(t)H(t)Φ(t)dt, H is the measurement Jacobian which, together with the fundamental matrix solution Φ, determines the gramian elements.

## Application Value

该矩阵在可观测性分析和滤波器设计中起关键作用。在编目系统中，该技术可提高对空间目标的探测、跟踪和编目能力。

## Related Concepts

- [Hill Sphere Radius](/en/glossary/dynamics/hill-sphere-radius/)
- [Pseudospectral Convex Optimization](/en/glossary/dynamics/pseudospectral-convex-optimization/)
- [Poincaré Map Representation](/en/glossary/dynamics/poincar-map-representation/)
- [Minimum Norm Targeting](/en/glossary/dynamics/minimum-norm-targeting/)

## References

- Observability metrics for space-based cislunar domain awareness (Fowler & Paley, 2023)
