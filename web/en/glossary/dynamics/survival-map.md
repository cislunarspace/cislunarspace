---
title: Survival Map
description: A two-dimensional parametric map in the Earth-Moon CR3BP where initial conditions near the lunar L2 point are sampled on a grid, each color-coded by orbital lifetime.
keywords: Survival Map, CR3BP, L2 point, weak capture, parametric map
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Survival Map
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Survival Map Explained | Term Definition"
  description: A two-dimensional parametric map where initial conditions near the lunar L2 point are sampled and color-coded by orbital lifetime.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Survival Map Explained | Term Definition"
  description: A two-dimensional parametric map where initial conditions near the lunar L2 point are sampled and color-coded by orbital lifetime.
  image: /logo.png
permalink: /en/glossary/dynamics/survival-map/
---

# Survival Map

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A two-dimensional parametric map in the Earth-Moon CR3BP where initial conditions near the lunar L2 point (position and velocity components) are sampled on a grid, and each point is color-coded by the resulting orbital lifetime before the spacecraft impacts the Moon, exits the L1/L2 region, or reaches a maximum propagation time. Survival maps enable rapid identification of initial states that lead to lunar weak capture or impact.

## Application Value

Survival maps serve as a rapid screening tool in orbital design. Engineers can directly determine from colors which initial conditions allow a spacecraft to remain in lunar vicinity or ultimately achieve capture. When designing lunar landing missions, survival maps quickly narrow the search scope to find initial states achieving weak capture with minimum velocity increment. This tool is particularly valuable for halo orbit design near Earth-Moon L2 and halo orbit transfer scenario assessment, substantially reducing computational burden of numerical search.

## Related Concepts

- Weak Capture
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)
- [Libration Point](/en/glossary/dynamics/libration-point/)

## References

- Van Der Weg and Vasile, 2016, Sun-Earth L1 and L2 to Moon Transfers Exploiting Natural Dynamics
