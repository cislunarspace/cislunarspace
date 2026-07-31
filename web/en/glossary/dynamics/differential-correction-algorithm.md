---
title: Differential Correction Algorithm
description: An iterative method that maps terminal constraint residuals back to initial velocity corrections via the state transfer matrix. Used in libration point Halo orbit transfer design with fast convergence for strongly nonlinear problems.
keywords: Differential Correction Algorithm, state transition matrix, Halo orbit, trajectory design, differential correction, libration point orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Differential Correction Algorithm
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Differential Correction Algorithm Explained | Term Definition"
  description: An iterative method that maps terminal constraint residuals back to initial velocity corrections via the state transfer matrix.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Differential Correction Algorithm Explained | Term Definition"
  description: An iterative method that maps terminal constraint residuals back to initial velocity corrections via the state transfer matrix.
  image: /logo.png
permalink: /en/glossary/dynamics/differential-correction-algorithm/
---

# Differential Correction Algorithm

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An iterative method that maps terminal constraint residuals back to initial velocity corrections via the state transfer matrix. In libration point Halo orbit transfer design, it uses perilune distance and flight path angle as constraints, computing velocity increment corrections through partial derivatives decomposed by the state transfer matrix. The algorithm converges quickly for strongly nonlinear problems but is sensitive to initial guesses, requiring invariant manifolds to provide starting values.

## Application Value

Based on the functionality and properties described in its definition, this term has significant application value in cislunar space mission design, analysis, and control. During the orbital design phase, the related dynamical characteristics can be leveraged for transfer trajectory optimization. In navigation and control, it can improve mission execution accuracy and reliability. In system analysis, it helps deepen understanding of complex multi-body dynamical behavior and guides mission scheme demonstration and risk assessment.

## Related Concepts

- [J2-Invariant Orbit](/en/glossary/dynamics/j2-invariant-orbit/)
- [Interior Point Optimization](/en/glossary/dynamics/interior-point-optimization/)
- [N-Body Dynamics](/en/glossary/dynamics/n-body-dynamics/)
- [Start-End State Constraint](/en/glossary/dynamics/start-end-state-constraint/)

## References

- Peng Kun et al. - 2016 - Earth-Moon L2 Point Halo Orbit Transfer Trajectory Design Based on Invariant Manifolds
