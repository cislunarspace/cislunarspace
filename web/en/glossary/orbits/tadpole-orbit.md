---
title: Tadpole Orbit
description: A small-amplitude co-orbital libration orbit around the triangular libration point L4 or L5, named for the elongated shape of its zero-velocity curve, with angular extent terminating at the L3 direction; the L4/L5 vicinity also hosts short-period (~28 day), long-period (~92 day), and vertical periodic-orbit families.
keywords: Tadpole Orbit, L4, L5, triangular libration point, short period orbit, horseshoe orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Tadpole Orbit
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Tadpole Orbit Explained | Term Definition"
  description: A small-amplitude co-orbital libration orbit around the triangular libration point L4 or L5, named for the elongated shape of its zero-velocity curve, with angular extent terminating at the L3 direction; the L4/L5 vicinity also hosts short-period (~28 day), long-period (~92 day), and vertical periodic-orbit families.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Tadpole Orbit Explained | Term Definition"
  description: A small-amplitude co-orbital libration orbit around the triangular libration point L4 or L5, named for the elongated shape of its zero-velocity curve, with angular extent terminating at the L3 direction; the L4/L5 vicinity also hosts short-period (~28 day), long-period (~92 day), and vertical periodic-orbit families.
  image: /logo.png
permalink: /en/glossary/orbits/tadpole-orbit/
---

# Tadpole Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

In the restricted three-body problem, a particle started close to L4 or L5 executes small-amplitude libration about the equilibrium point; increasing the initial separation elongates the orbit toward the L3 direction. These elongated zero-velocity curves give the orbit its name: tadpole orbit (Murray & Dermott 1999, §3.9). The angular extent is limited: the critical tadpole orbit just reaches the L3 direction (minimum angular distance 23.5°, i.e., maximum angular range ~156.5°, terminating at L3 without encircling it); larger amplitudes transition into [horseshoe orbits](/en/glossary/orbits/horseshoe-orbit/) librating about L3, L4, and L5. The triangular points are linearly stable (see [Libration Point](/en/glossary/orbits/lagrangian-point/)), but individual family members vary in stability.

## L4/L5 Periodic-Orbit Families

Planar motion near the triangular points has two modal frequencies: short-period ω₁ ≈ 0.9546 and long-period ω₂ ≈ 0.2979 (in units of the lunar mean motion), near a 3:1 resonance (Gómez 2001 Vol. II, citing Breakwell–Pringle):

- **Short-period family**: emanates from L4/L5 with a limiting (linear) period of about 28.6 days, decreasing monotonically with amplitude; continues to a bifurcation orbit B₄₅ that connects to the L3 Lyapunov family.
- **Long-period family**: limiting period about 91.6 days.
- **Vertical family (L4V/L5V)**: non-planar periodic orbits extending mainly perpendicular to the Earth–Moon orbital plane (rotating-frame z direction), symmetric about the XZ plane; combined with L2 northern/southern NRHOs they form the optimal resonant navigation constellation (He 2025).

**SPO (short-period orbit)**: representative L4/L5 short-period members selected as transfer-network nodes have period 28.3488 days and Jacobi constant 2.9132, with L4 and L5 being mirror images (about the rotating-frame x-axis); they are practically stable with no usable manifolds for transfer design (Capdevila & Howell 2018). He 2025's L4P/L5P families (~27.3-day period) and Xu 2026's L4 planar short-period orbit are different names for members of the same family.

**Planar orbits (SDA context)**: the cislunar SDA observer catalog includes L4/L5 planar orbits, but almost no planar observers appear in the Pareto front: planar observers have observation gaps due to sun-pointing constraints when viewing planar transfer trajectories, while non-planar observers (such as L4/L5 axial orbits) can fill those gaps with their z-direction motion (Klonowski 2024).

## Applications

Orbits in the L4/L5 region provide dual Earth–Moon coverage and uninterrupted communication; two-impulse DRO ↔ L4/L5 SPO transfers form one branch of a Moon-centered transfer network (Capdevila & Howell 2018); a near-coplanar two-spacecraft configuration of an L4 planar short-period orbit and a DRO is studied for inter-satellite-link autonomous orbit determination (Xu 2026).

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Short-period orbit (SPO) | Triangular-point short-period family (~27.3–28.6 days, amplitude-dependent) | Capdevila & Howell 2018 |
| Long-period orbit | Triangular-point long-period family (~91.6 days) | Gómez 2001 Vol. II |
| L4P/L5P, L4 planar short-period orbit | Alternative names for short-period family members | He 2025, Xu 2026 |
| L4V/L5V | Triangular-point vertical family | He 2025 |
| Planar orbit | L4/L5 planar family (SDA observer catalog context) | Klonowski 2024 |

## Related Concepts

- [Libration Point](/en/glossary/orbits/lagrangian-point/)
- [Horseshoe Orbit](/en/glossary/orbits/horseshoe-orbit/)
- [Libration Point Orbit (LPO)](/en/glossary/orbits/libration-point-periodic-orbit/)
- [Resonant Orbit Family](/en/glossary/orbits/resonant-orbit-family/)

## References

- Murray & Dermott, 1999, Solar System Dynamics (§3.9)
- Gómez et al., 2001, Dynamics and Mission Design Near Libration Points, Vol. II
- Capdevila & Howell, 2018, A transfer network linking Earth, Moon, and the triangular libration point regions
- Klonowski et al., 2024, Cislunar space domain awareness architecture design and analysis for cooperative agents
- He et al., 2025, Design of cislunar navigation constellation via orbits with a resonant period
- Xu et al., 2026, Adaptive robust cubature filtering-based autonomous navigation study
