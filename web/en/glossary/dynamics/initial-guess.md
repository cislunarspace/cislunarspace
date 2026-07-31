---
title: Initial Guess
description: The initial values provided for variables when iteratively solving nonlinear programming or optimal control problems. Direct collocation methods have some...
keywords: Initial Guess
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Initial Guess
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Initial Guess Explained | Term Definition
  description: The initial values provided for variables when iteratively solving nonlinear programming or optimal control problems. Direct collocation methods have some...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Initial Guess Explained | Term Definition
  description: The initial values provided for variables when iteratively solving nonlinear programming or optimal control problems. Direct collocation methods have some...
  image: /logo.png
permalink: /en/glossary/dynamics/initial-guess/
---

# Initial Guess

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The initial values provided for variables when iteratively solving nonlinear programming or optimal control problems. Direct collocation methods have some robustness to initial guesses, but low-thrust trajectory problems are highly nonlinear with multiple local optima, requiring physically meaningful initial guesses. The paper uses a four-step construction: first integrate assuming posigrade thrust to determine phase 1 state, then integrate backward to determine phase 3 state, solve Lambert's problem to connect the two phases, and finally fill the mesh with nodes equidistributed in true anomaly.

## Application Value

This concept is essential for understanding motion characteristics in orbital design and control, and plays a vital role in mission success.

## Related Concepts

- [Minimum Norm Solution](/en/glossary/dynamics/minimum-norm-solution/)
- [Rigid Body Dynamics](/en/glossary/dynamics/rigid-body-dynamics/)
- [Variable-Size Design Space, VSDS](/en/glossary/dynamics/variable-size-design-space-vsds/)
- [Analytical Gradient](/en/glossary/dynamics/analytical-gradient/)

## References

- Betts and Erb, 2003, Optimal low thrust trajectories to the moon
- Spreen 2021
- Conway - 2010 - Spacecraft trajectory optimization