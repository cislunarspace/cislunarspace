---
title: Shooting Method
description: Detailed analysis of the shooting method for solving boundary value problems in orbital mechanics
keywords: Shooting Method, Boundary Value Problem, Orbit Computation, Single Shooting, Multiple Shooting
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Shooting Method
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Shooting Method Details | Numerical Technique for Orbit Computation
  description: Detailed analysis of the shooting method for solving boundary value problems in orbital mechanics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Shooting Method Details | Numerical Technique for Orbit Computation
  description: Detailed analysis of the shooting method for solving boundary value problems in orbital mechanics
  image: /logo.png
permalink: /en/glossary/dynamics/shooting-method/
---

# Shooting Method

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The shooting method is a numerical technique for solving boundary value problems (BVPs) by converting them into initial value problems (IVPs). In orbital mechanics, it is widely used to compute periodic orbits, transfer trajectories, and other orbits that must satisfy specific boundary conditions.

## Single Shooting Method

The basic approach:

1. **Guess** initial conditions (e.g., position and velocity at the starting point)
2. **Propagate** the trajectory forward using the equations of motion
3. **Evaluate** the residual (difference between the final state and the desired boundary condition)
4. **Update** the initial conditions using the state transition matrix to reduce the residual
5. **Iterate** until convergence

$$\mathbf{x}_0^{(k+1)} = \mathbf{x}_0^{(k)} - \Phi^{-1} \mathbf{r}^{(k)}$$

## Multiple Shooting Method

For long-duration or sensitive orbits, multiple shooting divides the trajectory into segments and applies boundary conditions at each node. This improves convergence and numerical stability.

## Applications

| Application | Description |
|:---|:---|
| Periodic orbit computation | Finding closed orbits that return to their starting point |
| Transfer orbit design | Computing trajectories between two specified states |
| Orbit continuation | Tracing orbit families as parameters vary |
| Differential correction | Refining approximate orbits to satisfy constraints |

## Related Concepts

- [Differential Correction Method](/en/glossary/dynamics/differential-correction/)
- [State Transition Matrix (STM)](/en/glossary/dynamics/state-transition-matrix/)
- [Patch Point](/en/glossary/dynamics/patch-point/)
- [Continuation Method](/en/glossary/dynamics/continuation-method/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
