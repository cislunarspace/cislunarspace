---
title: Hyperbolic Tangent Smoothing
description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine thro
keywords: Hyperbolic Tangent Smoothing, dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hyperbolic Tangent Smoothing
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Hyperbolic Tangent Smoothing Explained | Term Definition
  description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine thro
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hyperbolic Tangent Smoothing Explained | Term Definition
  description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine thro
  image: /logo.png
permalink: /en/glossary/dynamics/hts/
---

# Hyperbolic Tangent Smoothing

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine throttle theoretically switches discontinuously between 0 and 1, causing numerical difficulties. HTS introduces a smoothing parameter rho and replaces the step discontinuity with a continuous tanh function, making the Hamiltonian BVP solvable. As rho approaches zero, the smoothed solution converges to the original discontinuous optimal control.

## Application Value

This term has significant practical applications in cislunar mission planning and execution.

## Related Concepts

- [Hidden-Genes Genetic Algorithm, HGGA](/en/glossary/dynamics/hgga/)
- [Variable-Size Design Space, VSDS](/en/glossary/dynamics/vsds/)
- [Station-Keeping](/en/glossary/dynamics/sk/)
- [Target Point Method](/en/glossary/dynamics/tp/)

## References

- Singh et al., 2021
