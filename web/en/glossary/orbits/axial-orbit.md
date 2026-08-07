---
title: Axial Orbit
description: A three-dimensional periodic orbit family among libration point orbits; at the collinear points it bifurcates from the planar Lyapunov family (at a location different from the halo family), is symmetric about the x-axis, and splits into axial-1 and axial-2 branches; L4/L5 axial orbits are linearly stable and can serve Earth–Moon dual coverage and space domain awareness.
keywords: Axial Orbit, libration point orbit, resonant orbit, system translation, periodic orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Axial Orbit
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Axial Orbit Explained | Term Definition"
  description: A three-dimensional periodic orbit family among libration point orbits; at the collinear points it bifurcates from the planar Lyapunov family (at a location different from the halo family), is symmetric about the x-axis, and splits into axial-1 and axial-2 branches; L4/L5 axial orbits are linearly stable and can serve Earth–Moon dual coverage and space domain awareness.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Axial Orbit Explained | Term Definition"
  description: A three-dimensional periodic orbit family among libration point orbits; at the collinear points it bifurcates from the planar Lyapunov family (at a location different from the halo family), is symmetric about the x-axis, and splits into axial-1 and axial-2 branches; L4/L5 axial orbits are linearly stable and can serve Earth–Moon dual coverage and space domain awareness.
  image: /logo.png
permalink: /en/glossary/orbits/axial-orbit/
---

# Axial Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An axial orbit is a three-dimensional periodic orbit family among the libration point orbits (LPOs). At the collinear points, the axial family and the halo family bifurcate from the planar Lyapunov family at **different locations**; the axial family is symmetric about the **x-axis** and accordingly splits into two branches, axial-1 and axial-2 (He 2026). At the triangular points, the L4/L5 axial family bifurcates from the vertical Lyapunov family and no longer has any symmetry (He 2026). In periodic-orbit catalogs, the axial family stands alongside the Lyapunov, vertical, and halo families as a standard LPO family (Folta 2015, Guzzetti 2016).

## Stability

L1/L2 axial orbits are strongly unstable throughout the family, with no center subspace (so they cannot host torus-based formations) (Guzzetti 2016); L4 axial orbits are linearly stable and remain bounded in a 120-year extrapolation (Vaquero & Howell 2014). Early catalogs give L1/L2 axial-family stability indices on the order of hundreds (strongly unstable), consistent with these qualitative conclusions.

## Axial Resonant Orbits

Three-dimensional **asymmetric** resonant orbits are called axial resonant orbits, computed by perturbing a bifurcating orbit in the z direction (Vaquero & Howell 2014). Its 3:1 member can be migrated directly from the Earth–Moon system to other three-body systems (such as Saturn–Titan) by **system translation** — continuation in the mass parameter μ — without redoing the initial-guess–bifurcation–continuation pipeline in the new system (Vaquero & Howell 2014). Two caveats:

- Resonance ratios have two conventions: Vaquero & Howell's 3:1 means "3 spacecraft revolutions per 1 lunar revolution," while Parker & Anderson 2014 and Guzzetti 2016 use the p:q convention "p lunar revolutions : q spacecraft revolutions" — the same orbit carries reversed labels under the two conventions, so state the convention when citing.
- System translation does not preserve stability: the Earth–Moon 4:3 resonant family is entirely unstable, while the same family at Saturn–Titan is mostly linearly stable (Vaquero & Howell 2014).

## Applications

- **Transfers to L4 axial orbits**: a three-dimensional transfer from LEO to an L4 axial orbit — patching the stable manifold of an L2 axial orbit (which passes near the Earth naturally) to the unstable manifold of a 3:2 axial resonant orbit, at ΔV 3.27 km/s over 22.54 days; the L4 axial orbit is linearly stable, covers both Earth and Moon, and never loses communication (Vaquero & Howell 2014).
- **Space domain awareness**: L4/L5 axial orbits traverse large volumes of cislunar space and are frequently selected in space domain awareness architecture optimization, favoring persistent detection of targets maneuvering in the plane (Klonowski 2024).

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| axial-1 / axial-2 branches | The two branches into which the collinear axial family splits by its x-axis symmetry | He 2026 |
| Axial resonant orbit | Three-dimensional asymmetric resonant orbit obtained by z-direction perturbation of a bifurcating orbit | Vaquero & Howell 2014 |
| 3:1 axial resonant orbit | Resonant member migratable to other three-body systems by system translation | Vaquero & Howell 2014 |

## Related Concepts

- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Vertical Orbit](/en/glossary/orbits/vertical-orbit/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Resonant Orbit Family](/en/glossary/orbits/resonant-orbit-family/)

## References

- Vaquero & Howell, 2014, Leveraging resonant-orbit manifolds to design transfers between libration-point orbits
- Folta et al., 2015, An Earth-Moon system trajectory design reference catalog
- Guzzetti et al., 2016, Rapid trajectory design in the Earth–Moon ephemeris system via an interactive catalog of periodic and quasi-periodic orbits
- Klonowski et al., 2024, Cislunar space domain awareness architecture design and analysis for cooperative agents
- He et al., 2026, A review of cislunar constellation design and optimization
