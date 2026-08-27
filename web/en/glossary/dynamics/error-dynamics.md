---
title: Error Dynamics
description: "The evolution equation describing the deviation between the spacecraft's actual trajectory and the nominal orbit. Obtained by substituting the difference del..."
keywords: Error Dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: Error Dynamics
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Error Dynamics Explained | Term Definition"
  description: "The evolution equation describing the deviation between the spacecraft's actual trajectory and the nominal orbit. Obtained by substituting the difference del..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Error Dynamics Explained | Term Definition"
  description: "The evolution equation describing the deviation between the spacecraft's actual trajectory and the nominal orbit. Obtained by substituting the difference del..."
  image: /logo.png
permalink: /en/glossary/dynamics/error-dynamics/
---

# Error Dynamics

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The evolution equation describing the deviation between the spacecraft's actual trajectory and the nominal orbit. Obtained by substituting the difference delta_X = X_A - X_H into the CR3BP dynamics and performing a first-order Taylor expansion around the nominal orbit. After first-order approximation, the error dynamics is a linear periodic system: dot{delta_X} = A(t) delta_X + BU, where A(t) = df/dX|_{X_H(t)} is the periodic matrix obtained by partial differentiation along the nominal orbit. This is the starting point for the paper's controller design.

## Application Value

in the orbit design phase, this orbit type can be used to build a candidate orbit pool, providing a reference for constellation deployment and mission orbit selection. during operations, its orbit characteristics can be used to design station-keeping strategies and reduce propellant consumption. in transfer planning, its stable manifold structure can guide the search for low-energy transfer corridors.

## Related Concepts

- [Geocentric Celestial Reference Frame](/en/glossary/fundamentals/inertial-reference-frames/)
- [Operational Orbit Library](/glossary/orbits/operational-orbit-library/)
- Lunar Free-Return Orbit (LFO)
- Critical Orbit

## References

- Xu Ming & Xu Shijie - 2008 - Linear periodic control strategy for Halo orbit station-keeping
