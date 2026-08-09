---
title: Shape-Based Method
description: A class of approximate trajectory design methods that use predefined analytical functions (e.g., exponential sinusoids, polynomials, equinoctial elements) to re
keywords: Shape-Based Method, , dynamics
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Shape-Based Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Shape-Based Method Explained | Term Definition"
  description: A class of approximate trajectory design methods that use predefined analytical functions (e.g., exponential sinusoids, polynomials, equinoctial elements) to re
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Shape-Based Method Explained | Term Definition"
  description: A class of approximate trajectory design methods that use predefined analytical functions (e.g., exponential sinusoids, polynomials, equinoctial elements) to re
  image: /logo.png
permalink: /en/glossary/dynamics/shape-based-method/
---

# Shape-Based Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A class of approximate trajectory design methods that use predefined analytical functions (e.g., exponential sinusoids, polynomials, equinoctial elements) to represent low-thrust trajectory shapes. Unlike direct and indirect methods, shape-based methods do not solve the full optimal control problem; instead, they describe candidate trajectory families with a small number of shape parameters, then optimize over those parameters. The advantage is computational speed and suitability for global search; the limitation is that the chosen function family may not capture the true optimal solution.

## Application Value

This concept has important application value in cislunar space research and mission design, involving orbit design, navigation control, or mission planning.

## Related Concepts

- Nonlinear Programming
- [Zero-Velocity Curve](/en/glossary/dynamics/jacobi-integral/)
- Departure Excess Velocity

## References

- Izzo - 2006 - Lambert's problem for exponential sinusoids
- Conway - 2010 - Spacecraft trajectory optimization
