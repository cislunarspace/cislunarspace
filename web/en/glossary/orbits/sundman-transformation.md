---
title: Sundman Transformation
description: A variable substitution technique that transforms the independent variable from the time domain to the true anomaly domain. The transformation follows dt = r...
keywords: Sundman Transformation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Sundman Transformation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Sundman Transformation Explained | Term Definition
  description: A variable substitution technique that transforms the independent variable from the time domain to the true anomaly domain. The transformation follows dt = r...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sundman Transformation Explained | Term Definition
  description: A variable substitution technique that transforms the independent variable from the time domain to the true anomaly domain. The transformation follows dt = r...
  image: /logo.png
permalink: /en/glossary/orbits/sundman-transformation/
---

# Sundman Transformation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A variable substitution technique that transforms the independent variable from the time domain to the true anomaly domain. The transformation follows dt = r^2/h dν, where r is the distance from the spacecraft to the central body and h is the angular momentum magnitude. This makes integration steps independent of orbital period but dependent on angular increments, particularly suited for many-revolution transfers: regardless of orbital period, each revolution requires a fixed number of discrete stages, preventing computational cost from growing with revolution count.

## Application Value

This concept is fundamental to cislunar orbital mechanics and mission analysis, providing essential theoretical support for trajectory design and operational planning.

## Related Concepts

- [Ballistic Lunar Transfer](/en/glossary/orbits/ballistic-lunar-transfer/)
- [Transfer Window](/en/glossary/orbits/transfer-window/)
- [Near Rectilinear Halo Orbit](/en/glossary/orbits/near-rectilinear-halo-orbit/)
- [Nominal Halo Orbit](/en/glossary/orbits/nominal-halo-orbit/)

## References

- Oue et al. - 2025 - Low-Thrust Many-Revolution Transfer between Near Rectilinear Halo Orbit and Low Lunar Orbit Using Hybrid Differential Dynamic Programming
- Vallado D. - 2022 - Fundamentals of astrodynamics and applications
