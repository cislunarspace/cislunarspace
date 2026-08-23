---
title: Libration Point Orbit (LPO)
description: Umbrella term for periodic orbits around libration points; narrowly, the subset of unstable periodic orbits in the three-body problem (collinear-point case); broadly, all periodic-orbit families around both collinear and triangular points — Lyapunov/vertical/halo/Lissajous/quasi-halo at the collinear points and short-period/long-period/vertical families at the triangular points.
keywords: Libration Point Orbit, LPO, periodic orbit, collinear Lagrangian point orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Libration Point Orbit (LPO)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Libration Point Orbit (LPO) Explained | Term Definition"
  description: Umbrella term for periodic orbits around libration points; narrowly, the subset of unstable periodic orbits in the three-body problem (collinear-point case); broadly, all periodic-orbit families around both collinear and triangular points — Lyapunov/vertical/halo/Lissajous/quasi-halo at the collinear points and short-period/long-period/vertical families at the triangular points.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Libration Point Orbit (LPO) Explained | Term Definition"
  description: Umbrella term for periodic orbits around libration points; narrowly, the subset of unstable periodic orbits in the three-body problem (collinear-point case); broadly, all periodic-orbit families around both collinear and triangular points — Lyapunov/vertical/halo/Lissajous/quasi-halo at the collinear points and short-period/long-period/vertical families at the triangular points.
  image: /logo.png
permalink: /en/glossary/orbits/libration-point-periodic-orbit/
---

# Libration Point Orbit (LPO)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A libration point orbit is an umbrella term for periodic orbits around libration points. Narrowly, the term denotes a subset of **unstable** periodic orbits in the three-body problem (Ren 2012, whose study is limited to the planar collinear-point case); broadly, it covers all periodic-orbit families around both collinear and triangular libration points (Qiao 2025, He 2025 catalogs). Collinear Lagrangian point orbit refers to periodic or quasi-periodic orbits around L1/L2 (and L3), such as Lissajous and halo orbits (Bucchioni & Innocenti 2021).

## Saddle-Center Structure and Family Catalog at Collinear Points

The motion mode at collinear equilibria is saddle × center × center: the periodic component produces periodic motion around the point, and the saddle component produces motion toward and away from these periodic solutions, i.e., the stable and unstable invariant manifolds; orbits of the same energy can be linked via manifolds at zero cost (Ren 2012, citing Koon 2000 et al.; Qiao 2025).

Family catalog (Qiao 2025, He 2025): each of L1/L2/L3 has Lyapunov, northern/southern halo, and vertical families, plus Lissajous, quasi-halo, and quasi-Lyapunov (quasi-Lyapunov orbits act as the demarcation between Lissajous and quasi-halo); the triangular points L4/L5 each have planar (short-period/long-period) and vertical families; see [Tadpole Orbit](/en/glossary/orbits/tadpole-orbit/).

## Substitution in the Four-Body Model

In the bicircular four-body problem, equilibria and periodic orbits are respectively replaced by periodic orbits and invariant tori: equilibrium → periodic orbit (dynamical substitute, via ε→1 continuation), periodic orbit → invariant torus (Ren 2012).

## Cataloging Application

In the context of cislunar space-domain awareness, cataloging objects near libration points (identifying, tracking, recording, and classifying) can be done with a characteristic-parameter method: a symplectic transformation decouples the hyperbolic / in-plane center / vertical center modes, yielding six characteristic parameters [q₁, p₁, I₂, θ₂, I₃, θ₃] that map one-to-one to the state vector, supplemented by a θ₃ = π/2 Poincaré section as a cataloging base map; orbit identification becomes an optimization problem, robust to ~100 km / 1 m/s level errors in an ephemeris model (Qiao 2025).

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Libration point orbit (LPO) | Umbrella term (narrowly the unstable periodic-orbit subset) | Ren 2012 |
| Collinear Lagrangian point orbit | Periodic/quasi-periodic orbits around collinear points (Lissajous, halo, etc.) | Bucchioni & Innocenti 2021 |
| Libration-point-orbit cataloging | Six-characteristic-parameter space-object identification method | Qiao 2025 |

## Related Concepts

- [Libration Point](/en/glossary/orbits/lagrangian-point/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Vertical Orbit](/en/glossary/orbits/vertical-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)

## References

- Ren et al., 2012, Optimal low-thrust transfers between libration point orbits
- Bucchioni & Innocenti, 2021, Rendezvous in cis-lunar space near rectilinear halo orbit dynamics and control issues
- Qiao et al., 2025, Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points
- He et al., 2025, Design of cislunar navigation constellation via orbits with a resonant period
