---
title: Libration Point / Lagrangian Point
description: The five equilibrium points of the circular restricted three-body problem — three collinear (L1/L2/L3, Euler's solutions, unstable) and two triangular (L4/L5, Lagrange's solutions, linearly stable when the mass ratio is below Routh's critical value, as in the Earth–Moon system); the Hill's region and neck passages bounded by the Jacobi constant shape the geometry of low-energy transfers.
keywords: Libration Point, Lagrangian Point, L1, L2, L4, L5, Hill's region, zero-velocity surface
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Libration Point / Lagrangian Point
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Libration Point Explained | Term Definition"
  description: The five equilibrium points of the circular restricted three-body problem — three collinear (L1/L2/L3, Euler's solutions, unstable) and two triangular (L4/L5, Lagrange's solutions, linearly stable when the mass ratio is below Routh's critical value, as in the Earth–Moon system); the Hill's region and neck passages bounded by the Jacobi constant shape the geometry of low-energy transfers.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Libration Point Explained | Term Definition"
  description: The five equilibrium points of the circular restricted three-body problem — three collinear (L1/L2/L3, Euler's solutions, unstable) and two triangular (L4/L5, Lagrange's solutions, linearly stable when the mass ratio is below Routh's critical value, as in the Earth–Moon system); the Hill's region and neck passages bounded by the Jacobi constant shape the geometry of low-energy transfers.
  image: /logo.png
permalink: /en/glossary/orbits/lagrangian-point/
---

# Libration Point / Lagrangian Point

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The restricted three-body problem has five equilibrium points: locations where a massless third body maintains a fixed position relative to the two primaries. Three **collinear libration points** L1, L2, L3 lie on the line joining the primaries (attributed to Euler); two **triangular libration points** L4, L5 sit at the vertices of equilateral triangles on the primaries' connecting line as base (attributed to Lagrange) (Meyer & Offin 2017, Murray & Dermott 1999). Libration point is the dynamics-community term; engineering literature favors Lagrangian point.

Positions in the Earth–Moon system (Qiao 2025 normalized distances, converted at 384,400 km): L1 is about 58,000 km from the Moon / 326,000 km from Earth; L2 about 64,500 km from the Moon / 449,000 km from Earth; L3 on the Earth's far side from the Moon, about 382,000 km from Earth.

## Stability

- **Collinear points are unstable**: the linearized eigenvalues include a real pair: the motion mode is saddle × center × center (Qiao 2025; Meyer & Offin 2017 prove the collinear points are saddle points in the plane). This is exactly why nearby orbits carry hyperbolic invariant manifolds, hence both the engineering value (low-energy transfer channels) and the cataloging challenge.
- **Triangular points are conditionally stable**: linearly stable when the mass ratio μ is below Routh's critical value μ₁ ≈ 0.0385; the Earth–Moon system with μ ≈ 0.0122 satisfies this (Murray & Dermott 1999, Meyer & Offin 2017). Strictly, a few resonant mass ratios are exceptions in the planar case, but Earth–Moon μ does not coincide with any of them.

## Zero-Velocity Surfaces, Hill's Region, and Neck Passages

The Jacobi integral C constrains the positions accessible to motion; the set ℌ(C) = {x : W(x) ≥ C} is the **Hill's region**, its boundary the zero-velocity curve (Meyer & Offin 2017). The critical Jacobi values are ordered C_L1 > C_L2 > C_L3 > C_L4,5 (Murray & Dermott 1999): as C decreases from high values, the two zero-velocity surfaces enclosing Earth and Moon first meet at L1 (C = C₁); when C drops slightly below C₁ a narrow corridor opens at L1, a **necessary but not sufficient** condition for a spacecraft to transit toward the Moon; whether a transfer succeeds also depends on the initial state (Peng & Zhang 2016).

**L1/L2 gateway**: a descriptive term for the passage region near L1/L2 through which trajectories travel between the lunar vicinity and the exterior region; used as an itinerary label in natural-trajectory clustering studies (Bosanac 2026).

## The L1 Transfer Corridor

Transfers through the L1 corridor (Peng & Zhang 2016): the L1 stable manifold at C ≈ C₁ comes no closer to Earth than about 0.1 Earth–Moon distances, so a connecting arc is needed: first burn at the low-Earth parking orbit, second at the manifold insertion point; without a target lunar orbit the spacecraft is often automatically captured by the Moon upon entry (cheaper than Hohmann), while with a target orbit a third burn near perilune is generally applied. An example transfer takes about 363 days from the stable manifold to L1; the survey table lists over 4100 m/s and tens to hundreds of days. For crewed lunar missions the original text judges them often not to save energy, and time-consuming and costly, not advisable.

## Applications

Although unstable, collinear-point orbits (halo, quasi-halo, Lissajous) can be maintained at low cost, and their invariant manifolds enable low-energy transfers (Vellutini & Avanzini 2014). Mission examples: Queqiao relay on an Earth–Moon L2 halo orbit supporting far-side communication; ARTEMIS in L1/L2 Lissajous orbits; CAPSTONE validating the L2 southern NRHO (Qiao 2025). For the triangular points see [Tadpole Orbit](/en/glossary/orbits/tadpole-orbit/) and [Horseshoe Orbit](/en/glossary/orbits/horseshoe-orbit/).

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Collinear libration points | L1/L2/L3, Euler's solutions | Meyer & Offin 2017 |
| Triangular libration points | L4/L5, Lagrange's solutions, equilateral-triangle vertices | Murray & Dermott 1999 |
| Hill's region | The accessible region {W(x)≥C} bounded by the Jacobi constant | Meyer & Offin 2017 |
| L1 (transfer) corridor | The passage opened at L1 when C drops slightly below C₁ | Peng & Zhang 2016 |
| L1/L2 gateway | The passage near L1/L2 connecting the lunar vicinity with the exterior | Bosanac 2026 |

## Related Concepts

- [Libration Point Orbit (LPO)](/en/glossary/orbits/libration-point-periodic-orbit/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Tadpole Orbit](/en/glossary/orbits/tadpole-orbit/)
- [Horseshoe Orbit](/en/glossary/orbits/horseshoe-orbit/)
- [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## References

- Murray & Dermott, 1999, Solar System Dynamics
- Vellutini & Avanzini, 2014, Shape-based design of low-thrust trajectories to cislunar Lagrangian points
- Peng & Zhang, 2016, Survey of crewed lunar Earth–Moon transfer trajectory schemes
- Meyer & Offin, 2017, Introduction to Hamiltonian Dynamical Systems and the N-Body Problem
- Qiao et al., 2025, Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points
- Bosanac, 2026, Clustering natural trajectories in the Earth-Moon circular restricted three-body problem
