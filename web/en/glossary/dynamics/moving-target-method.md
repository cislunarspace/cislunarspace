---
title: Moving Target Method
description: A technique in three-body trajectory optimization that extends the terminal target from a fixed point on a periodic orbit to a parameterized, sliding point alon
keywords: Moving Target Method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Moving Target Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Moving Target Method Explained | Term Definition
  description: A technique in three-body trajectory optimization that extends the terminal target from a fixed point on a periodic orbit to a parameterized, sliding point alon
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Moving Target Method Explained | Term Definition
  description: A technique in three-body trajectory optimization that extends the terminal target from a fixed point on a periodic orbit to a parameterized, sliding point alon
  image: /logo.png
permalink: /en/glossary/dynamics/moving-target-method/
---

# Moving Target Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A technique in three-body trajectory optimization that extends the terminal target from a fixed point on a periodic orbit to a parameterized, sliding point along the orbit. A time parameter τ propagates the target state forward or backward in the unperturbed CRTBP equations, allowing the optimizer to search any location on the target orbit as a valid terminal condition. The terminal constraint ψ=xf-x(τ) thus covers the entire orbit rather than a single point, significantly enlarging the feasible search space.

## Application Value

This concept is applicable in cislunar space mission design, orbit optimization, and trajectory planning for spacecraft transfers and maneuver strategies.

## Related Concepts

- [Flight-Path Angle](/en/glossary/dynamics/flight-path-angle/)
- [Spherical Harmonic Model](/en/glossary/dynamics/spherical-harmonic-model/)
- [Ephemeris Model](/en/glossary/dynamics/ephemeris-model/)
- [Artificial Libration Point](/en/glossary/dynamics/artificial-libration-point/)

## References

- Lantoine & Russell 2011, JAS; Aziz et al. 2019, JGCD
