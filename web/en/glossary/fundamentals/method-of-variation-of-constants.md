---
title: Method of Variation of Constants
description: A technique that replaces constant parameters in differential equations with undetermined functions, treating amplitudes and phases of periodic orbit first-order approximate solutions near libration points as time-varying functions.
keywords: Method of Variation of Constants, libration point, periodic orbit, polynomial fitting, Gauss pseudospectral method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Method of Variation of Constants
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Method of Variation of Constants Explained | Term Definition"
  description: A technique that replaces constant parameters in differential equations with undetermined functions, treating amplitudes and phases of periodic orbit solutions as time-varying functions.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Method of Variation of Constants Explained | Term Definition"
  description: A technique that replaces constant parameters in differential equations with undetermined functions, treating amplitudes and phases of periodic orbit solutions as time-varying functions.
  image: /logo.png
permalink: /en/glossary/fundamentals/method-of-variation-of-constants/
---

# Method of Variation of Constants

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A technique that replaces constant parameters in differential equations with undetermined functions. In this paper, the amplitudes and phases of the first-order approximate periodic orbit solution near libration points are treated as time-varying functions, fitted by polynomials to capture the spiral nature of transfer trajectories, thereby constructing shape functions applicable to Gauss pseudospectral method.

## Application Value

The method of variation of constants serves as an important bridge connecting analytical approximation and numerical computation. In transfer trajectory design for periodic orbits near libration points, linearized periodic orbit solutions have fixed amplitudes and phases, while actual transfer trajectories often gradually diverge from or converge to periodic orbits along spirals. By treating constants as time-varying functions and fitting their variation patterns with polynomials, shape functions conforming to actual dynamics can be constructed for use with numerical optimization methods such as Gauss pseudospectral method. This method effectively reduces the difficulty of solving periodic orbit transfer problems and holds important application value in halo orbit deployment and L1/L2 halo orbit insertion missions.


## Related Concepts

- [Gauss Pseudospectral Method](/en/glossary/fundamentals/gauss-pseudospectral-method/)
- [Periodic Orbit](/en/glossary/orbits/periodic-orbit/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Shape Function](/en/glossary/fundamentals/shape-function/)


## References

- Gauss Pseudospectral Method for Low-Thrust Transfer Between Periodic Orbits Near Libration Points
