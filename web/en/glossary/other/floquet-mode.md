---
title: Floquet Mode Method
description: Detailed analysis of the Floquet mode method for orbit keeping based on dynamic characteristics near libration points
keywords: Floquet Mode Method, Orbit Keeping, Unstable Mode, Libration Point Orbit, Cislunar Space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Floquet Mode Method
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Floquet Mode Method Details | Dynamics-Based Orbit Keeping Strategy
  description: Detailed analysis of the Floquet mode method for orbit keeping based on dynamic characteristics near libration points
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Floquet Mode Method Details | Dynamics-Based Orbit Keeping Strategy
  description: Detailed analysis of the Floquet mode method for orbit keeping based on dynamic characteristics near libration points
  image: /logo.png
permalink: /en/glossary/other/floquet-mode/
---

# Floquet Mode Method

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Floquet mode method is an orbit keeping strategy based on the special dynamic characteristics near libration points, proposed by Gomez et al. This method achieves orbit keeping by eliminating the unstable Floquet modes associated with the reference orbit.

## Basic Principle

For a linear periodic system, Floquet theory decomposes the state transition matrix as:

$$\Phi(t+T, t) = P(t) e^{Rt} P^{-1}$$

where $R$ is a constant matrix whose eigenvalues (Floquet multipliers) determine orbital stability. Unstable Floquet modes correspond to eigenvalues with magnitude greater than 1, causing orbit deviations to grow exponentially.

The core idea of the Floquet mode method is: by applying control maneuvers, eliminate the unstable components of orbit deviations, thereby preventing orbit divergence.

## Comparison with Other Methods

| Method | Design Approach | Characteristics |
| :--- | :--- | :--- |
| Floquet mode method | Eliminate unstable components | Leverages dynamics, computationally efficient |
| Targeting method | Minimize deviation-control weighted sum | General-purpose, controllable fuel consumption |
| LQR | Optimal control theory | Requires precise model |

## Related Concepts

- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)
- [Stability Index](/en/glossary/dynamics/stability-index/)
- [Libration Point](/en/glossary/dynamics/libration-point/)

## References

- Gomez G, et al. Dynamics and mission design near libration point orbits[M]. World Scientific, 2001.
