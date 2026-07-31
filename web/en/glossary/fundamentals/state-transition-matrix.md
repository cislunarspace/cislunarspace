---
title: State Transition Matrix
description: A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks provide sensitivities used in differential correction and yield the monodromy matrix for invariant manifold computation.
keywords: State Transition Matrix, STM, differential correction, perturbation propagation, monodromy matrix, invariant manifold
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: State Transition Matrix
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: State Transition Matrix Explained | Term Definition
  description: A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: State Transition Matrix Explained | Term Definition
  description: A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system.
  image: /logo.png
permalink: /en/glossary/fundamentals/state-transition-matrix/
---

# State Transition Matrix

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A 6x6 matrix describing how perturbations propagate from initial to terminal state in a dynamical system. Its four sub-blocks represent partial derivative mappings for position-to-position (A), velocity-to-position (B), position-to-velocity (C), and velocity-to-velocity (D). In differential correction, the B and D sub-blocks provide sensitivities of terminal position and velocity to initial velocity, serving as the core mathematical tool for correction computation. The STM also yields the monodromy matrix for invariant manifold computation.

## Application Value

In orbital design and transfer trajectory optimization, this method is used to determine optimal transfer timing and orbital shapes to minimize propellant consumption or flight time. Through numerical simulation and iterative optimization, feasible orbital schemes satisfying mission constraints can be obtained.

## Related Concepts

- [Synodic Rotating Frame](/en/glossary/fundamentals/synodic-rotating-frame/)
- [Grid Search](/en/glossary/fundamentals/grid-search/)
- [Gauss Quadrature Formula](/en/glossary/fundamentals/gauss-quadrature-formula/)
- [Constellation Pattern Vector](/en/glossary/fundamentals/constellation-pattern-vector/)

## References

- Peng Kun et al. - 2016 - Earth-Moon L2 Point Halo Orbit Transfer Trajectory Design Based on Invariant Manifolds
