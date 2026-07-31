---
title: Hyperbolic Tangent Smoothing, HTS (HTS)
description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine...
keywords: Hyperbolic Tangent Smoothing, HTS
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hyperbolic Tangent Smoothing, HTS (HTS)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Hyperbolic Tangent Smoothing, HTS (HTS) Explained | Term Definition
  description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hyperbolic Tangent Smoothing, HTS (HTS) Explained | Term Definition
  description: A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine...
  image: /logo.png
permalink: /en/glossary/dynamics/hyperbolic-tangent-smoothing-hts/
---

# Hyperbolic Tangent Smoothing, HTS

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A smoothing technique that approximates discontinuous bang-off-bang control inputs using a hyperbolic tangent function. In fuel-optimal control, the engine throttle theoretically switches discontinuously between 0 and 1, causing numerical difficulties. HTS introduces a smoothing parameter rho and replaces the step discontinuity with a continuous tanh function, making the Hamiltonian BVP solvable. As rho approaches zero, the smoothed solution converges to the original discontinuous optimal control.


## Related Concepts


## References

- Singh et al., 2021
