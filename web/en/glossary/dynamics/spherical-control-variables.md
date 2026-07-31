---
title: Spherical Control Variables
description: "A parameterization of the thrust vector using three scalars: magnitude T, azimuth angle α, and elevation angle β. In CRTBP low-thrust optimization, the spher..."
keywords: Spherical Control Variables
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Spherical Control Variables
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Spherical Control Variables Explained | Term Definition"
  description: "A parameterization of the thrust vector using three scalars: magnitude T, azimuth angle α, and elevation angle β. In CRTBP low-thrust optimization, the spher..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Spherical Control Variables Explained | Term Definition"
  description: "A parameterization of the thrust vector using three scalars: magnitude T, azimuth angle α, and elevation angle β. In CRTBP low-thrust optimization, the spher..."
  image: /logo.png
permalink: /en/glossary/dynamics/spherical-control-variables/
---

# Spherical Control Variables

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A parameterization of the thrust vector using three scalars: magnitude T, azimuth angle α, and elevation angle β. In CRTBP low-thrust optimization, the spherical control u=[T, α, β]ᵀ is converted to Cartesian thrust components via the radial-transverse-normal (RSW) basis. This decouples thrust magnitude from direction: the magnitude bound is simple (0≤T≤T_max), and the steering angle trust-region scaling is independent. When the velocity vector becomes collinear with the position vector and the RSW frame degenerates, the formulation switches to Cartesian control variables.

## Application Value

This concept is fundamental to cislunar orbital mechanics and mission analysis, providing essential theoretical support for trajectory design and operational planning.

## Related Concepts

- [Retrograde Motion](/en/glossary/dynamics/retrograde-motion/)
- [Absolute Phase Bias](/en/glossary/dynamics/absolute-phase-bias/)
- [Relative Attitude Quaternion](/en/glossary/dynamics/relative-attitude-quaternion/)
- [Radial-Tangential-Normal Coordinate System, RTN](/en/glossary/dynamics/radial-tangential-normal-coordinate-system-rtn/)

## References

- Aziz et al. 2019, JGCD
