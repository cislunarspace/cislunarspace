---
title: Moon-Centered Orbit
description: A class of periodic orbits around the Moon, continuable from lunar two-body initial guesses (prograde or retrograde alike), comprising the DRO, DPO, and LoPO families (corresponding to Hénon's f/g/g′ families); the engineering low lunar orbit / lunar parking orbit is a common destination of low-energy transfers.
keywords: Moon-Centered Orbit, DRO, DPO, LoPO, low lunar orbit, lunar parking orbit, periodic orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Moon-Centered Orbit
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Moon-Centered Orbit Explained | Term Definition"
  description: A class of periodic orbits around the Moon, continuable from lunar two-body initial guesses (prograde or retrograde alike), comprising the DRO, DPO, and LoPO families (corresponding to Hénon's f/g/g′ families); the engineering low lunar orbit / lunar parking orbit is a common destination of low-energy transfers.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Moon-Centered Orbit Explained | Term Definition"
  description: A class of periodic orbits around the Moon, continuable from lunar two-body initial guesses (prograde or retrograde alike), comprising the DRO, DPO, and LoPO families (corresponding to Hénon's f/g/g′ families); the engineering low lunar orbit / lunar parking orbit is a common destination of low-energy transfers.
  image: /logo.png
permalink: /en/glossary/orbits/moon-centered-orbit/
---

# Moon-Centered Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition and Classification Position

A moon-centered orbit is a periodic orbit around the Moon that can be continued from initial guesses of the lunar two-body problem, prograde or retrograde alike (He 2026). In periodic-orbit classification, moon-centered orbits stand alongside libration point orbits and resonant orbits (He 2026, Folta 2015).

## Three Member Families

Moon-centered orbits comprise three families, corresponding respectively to the f, g, and g′ families of Hénon 1969 (the periodic-orbit classification of Hill's case) (He 2026):

- **DRO (distant retrograde orbit, f family)**: retrograde around the Moon in the rotating frame; as amplitude grows it can extend beyond L1/L2; see [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/).
- **DPO (distant prograde orbit, g family)**: figure-eight-shaped in the rotating frame, with perilune close to the Moon and apolune extending along the y direction.
- **LoPO (low prograde orbit, g′ family)**: prograde, nearly circular, low-amplitude orbits; as amplitude grows the apolune extends along the x direction.

## Engineering Members: Low Lunar Orbit and Lunar Parking Orbit

The moon-centered orbit most used in engineering is the low lunar orbit (LLO) / lunar parking orbit, a two-body nearly circular orbit rather than a three-body orbit family. Typical usage: a near-circular orbit 100 km above the lunar surface serves as the parking orbit; a large-amplitude L1 Lyapunov orbit tangent to it can enter the parking orbit directly with a single tangential braking impulse at the tangent point (on the x-axis) (Zheng & Zhao 2023). This mechanism constitutes an Earth–Moon low-energy transfer in which one manifold connects near-Earth and near-Moon orbits (see [Low-Energy Transfer](/en/glossary/orbits/low-energy-transfer/)).

## Transfer Construction via Manifold Intersections with Lunar Periodic Orbits

Giancotti 2012 introduced a cylindrical isomorphic mapping in the planar CR3BP, reducing the state at a given Jacobi constant to the (x, y, γ) phase space (γ being the velocity direction angle), so that a lunar periodic orbit and the unstable manifold of an L1 Lyapunov orbit can be compared in the same space; along their intersection set one takes the minimum impulse that only rotates the velocity vector without changing its magnitude. In the example (a single-revolution lunar periodic orbit at C=3.185), the best transfer from the L1 Lyapunov orbit costs only 18.71 m/s.

## Related Umbrella Term

Near-Moon periodic orbits is a cross-category umbrella term selected by distance from the Moon: its members span libration point orbit families (halo, Lyapunov, butterfly) and moon-centered orbit families (DRO, LoPO) (Qi & Oguri 2023, used for comparing optical autonomous orbit determination performance: the periapsis–apoapsis distance difference sets the range of lunar apparent diameter variation, which in turn affects determination performance). It is not the same level of concept as moon-centered orbit; distinguish the two when citing.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Lunar parking orbit | Near-circular lunar orbit (e.g. 100 km) serving as a transfer destination | Zheng & Zhao 2023 |
| Lunar periodic orbit | Closed orbit around the Moon in the planar CR3BP | Giancotti 2012 |
| Near-Moon periodic orbit | Cross-category umbrella term selected by distance from the Moon | Qi & Oguri 2023 |
| DPO / LoPO | Distant prograde / low prograde orbit (g / g′ family) | He 2026 |

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)
- [Quasi-Satellite Orbit (QSO)](/en/glossary/orbits/qso-quasi-satellite-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Low-Energy Transfer](/en/glossary/orbits/low-energy-transfer/)

## References

- Hénon, 1969, Numerical exploration of the restricted problem. V. Hill's case
- Giancotti, Pontani & Teofilatto, 2012, Lunar capture trajectories and homoclinic connections through isomorphic mapping
- Folta et al., 2015, An Earth-Moon system trajectory design reference catalog
- Qi & Oguri, 2023, Analysis of autonomous orbit determination in various near-Moon periodic orbits
- Zheng & Zhao, 2023, Earth–Moon transfer method based on the stable manifolds of large-amplitude Lyapunov orbits
- He et al., 2026, A review of cislunar constellation design and optimization
