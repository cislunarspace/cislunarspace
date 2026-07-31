---
title: Hyperbolic Tangent Smoothing, HTS
description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function.
keywords: Hyperbolic Tangent Smoothing, HTS, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hyperbolic Tangent Smoothing, HTS
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Hyperbolic Tangent Smoothing, HTS Explained | Term Definition"
  description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Hyperbolic Tangent Smoothing, HTS Explained | Term Definition"
  description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function.
  image: /logo.png
permalink: /en/glossary/dynamics/HTS/
---

# Hyperbolic Tangent Smoothing, HTS

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine throttle theoretically switches discontinuously between 0 and 1, causing numerical difficulties. HTS introduces a smoothing parameter rho and replaces the step discontinuity with a continuous tanh function, making the Hamiltonian BVP solvable. As rho approaches zero, the smoothed solution converges to the original discontinuous optimal control.

## Application Value

Smoothing discontinuous bang-off-bang controls into continuous functions resolves numerical difficulties in fuel-optimal control, an important preprocessing technique for low-thrust trajectory optimization.

## Related Concepts

- [Low-Thrust Hamiltonian, H_lt](/en/glossary/dynamics/H_lt/)
- [Natural Hamiltonian, H_nat](/en/glossary/dynamics/H_nat/)
- [High-order Target Point Approach, High-order TPA](/en/glossary/dynamics/H-O- TPA/)
- [Hamilton-Jacobi-Bellman Equation, HJB](/en/glossary/dynamics/HJB/)

## References

- Singh et al., 2021.
