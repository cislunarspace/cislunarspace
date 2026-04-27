---
title: Low-Energy Transfer Orbits for Cislunar Space
description: Representative works on low-energy transfer orbit design and applications for cislunar missions
keywords: cislunar low-energy transfer, Halo orbits, Lissajous orbits, orbit design
author: 天疆说
date: 2026-03-07
lastUpdated: 2026-04-27
permalink: /research-frontiers/directions/low-energy-transfer/
---

> Author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

# Low-Energy Transfer Orbits for Cislunar Space

## Background

Low-energy transfer orbits are a key enabling technology for cislunar missions. Traditional Hohmann transfers require large velocity increments (Δv ~3.2 km/s), while leveraging invariant manifold structures in three-body dynamics can achieve significant fuel savings.

The core idea is to utilize dynamical properties near libration points: within the CRTBP framework, periodic/quasi-periodic orbits (such as Halo and Lissajous orbits) exist around libration points (especially L1 and L2), and their stable/unstable manifolds form "tubes" in phase space that naturally connect different regions.

## Key Techniques

### Invariant Manifolds and Transfer Orbit Design

- **Stable manifolds**: Orbits along stable manifolds naturally approach the target orbit
- **Unstable manifolds**: Orbits along unstable manifolds naturally depart from the current orbit
- **Manifold matching**: By connecting the unstable manifold of the departure orbit with the stable manifold of the arrival orbit, low-energy transfers can be designed

### Lissajous Relay Station Scheme

Using Lissajous orbits as relay stations enables more flexible orbit design:
- Lissajous orbits are quasi-periodic with larger amplitude ranges than Halo orbits
- The manifold network of Lissajous orbits covers broader transfer requirements
- Applicable to L1/L2 space stations, communication relays, and other mission scenarios

### Orbit Optimization Methods

Low-energy transfer design typically involves multi-objective optimization:
- Minimize total velocity increment (Δv)
- Minimize transfer time
- Satisfy launch window constraints
- Account for orbit maintenance requirements

Common methods include shooting methods, differential evolution algorithms, and multi-objective genetic algorithms.

## References

[1] Qiao C, Yang L. Low-energy transfer orbit design and optimization for Earth-Moon L1 point[J]. Systems Engineering and Electronics, 2024, 46(10): 3519-3527.

[2] Yu H, Dai H, Zhang J, et al. Low-energy transfer orbit design and applications based on Lissajous relay stations[J]. Journal of Northwestern Polytechnical University, 2025, 43(2): 212-221.

---

**Related Links**
- ↑ [Orbit Design & Optimization](./README.md) — Back to direction homepage
- ↔ [Orbit Parameter Characterization](./orbit-characterization.md) — Related subtopic
