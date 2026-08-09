---
title: Zero-Velocity Surface (ZVS)
description: The equipotential surface Ω = C/2 of the effective potential in the Circular Restricted Three-Body Problem, set by the Jacobi constant. It partitions configuration space into allowed and forbidden regions; plane sections are called zero-velocity curves (ZVC) or Hill curves. As C crosses the critical values C₁…C₅ the surface opens successively at the five libration points, defining the energy channels for Earth-Moon and cislunar-to-deep-space transfers.
keywords: zero-velocity surface, ZVS, zero-velocity curve, ZVC, Hill curve, Jacobi constant, CR3BP, forbidden region, libration point, cislunar
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Zero-Velocity Surface (ZVS)
  desc: The equipotential surface Ω = C/2; opens successively at L₁/L₂/L₃ as C drops, defining Earth-Moon and deep-space transfer channels.
  image: /logo.png
og:
  title: "Zero-Velocity Surface (ZVS) | Jacobi Constant and Accessible Regions"
  description: The equipotential surface Ω = C/2 of the effective potential in the CR3BP, set by the Jacobi constant. It partitions configuration space into allowed and forbidden regions.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Zero-Velocity Surface (ZVS) | Jacobi Constant and Accessible Regions"
  description: The equipotential surface Ω = C/2 of the effective potential in the CR3BP, set by the Jacobi constant.
  image: /logo.png
permalink: /en/glossary/dynamics/zero-velocity-surface/
---

# Zero-Velocity Surface (ZVS)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

From the [Jacobi integral](/en/glossary/dynamics/jacobi-integral/) $v^2 = 2\Omega - C$, setting $v=0$ yields the surface in configuration space
$$\Omega(x,y,z) = C/2,$$
i.e. a level surface of the [effective potential](/en/glossary/dynamics/jacobi-integral/) $\Omega$. It is called the **zero-velocity surface** (ZVS), or Hill surface. Its $xy$-plane sections are the **zero-velocity curves** (ZVC) or Hill curves (Szebehely 1967, §4.7; Vallado 2022, §12.7.3).

"Zero velocity" means: a spacecraft on this surface has zero speed in the synodic frame — all of its rotating-frame kinetic energy has been traded for potential energy. The surface is, for that $C$, the boundary of where the spacecraft can reach.

## Physical meaning: allowed and forbidden regions

From $v^2 = 2\Omega - C$:

- Where $2\Omega > C$, $v^2 > 0$: **allowed** (real velocity).

- Where $2\Omega < C$, $v^2 < 0$: **forbidden region** (imaginary velocity).

- Where $2\Omega = C$, $v = 0$: the ZVS itself.

A spacecraft on pure CR3BP dynamics cannot enter the forbidden region; to cross it one must apply $\Delta v$ to reduce $C$ below the relevant threshold. In other words, fixing $C$ fixes the spacecraft's "playpen" in configuration space — the most direct qualitative conclusion of the restricted problem (Szebehely 1967, §4.7).

## Topology evolution with $C$

As $C$ decreases from large values, the ZVS opens successively at the five [libration points](/en/glossary/dynamics/libration-point/), taking the accessible region through five topological stages (Earth-Moon: $C_1=3.18834$, $C_2=3.17216$, $C_3=3.01215$, $C_4=C_5=2.98800$; Parker & Anderson 2014, Table 2-2):

| Energy range | ZVS shape | Accessibility |
|---|---|---|
| $C > C_1$ | three disconnected closed surfaces | spacecraft confined to one of: near Earth, near Moon, or exterior; mutually inaccessible |
| $C_2 < C < C_1$ | open at $L_1$ | Earth and Moon regions connected; exterior still closed |
| $C_3 < C < C_2$ | open at $L_1$ and $L_2$ | cislunar region connected to deep space beyond $L_2$ |
| $C_4 < C < C_3$ | open at $L_1$, $L_2$, $L_3$ | only two small forbidden islands remain near $L_4$, $L_5$ |
| $C \le C_4=C_5$ | ZVS vanishes | entire space accessible |

The "openings" at $C_1$, $C_2$, $C_3$, $C_4$ correspond to the saddle structure of $\Omega$ at the respective libration points — geometrically, the saddles of $\Omega$ are the energy thresholds.

## Necks and transfer channels

The openings at $L_1$, $L_2$, $L_3$ are called **necks** or energy channels:

- **$L_1$ neck**: connects the Earth and Moon regions; the geometric choke point of low-energy Earth-Moon transfers (Halo insertion, manifold-based transfers).

- **$L_2$ neck**: connects the interior cislunar region to deep space beyond the Moon; the departure gate for lunar-far-side relay orbits (e.g. NRHO) and for cislunar-to-Sun-Earth manifold splicing.

- **$L_3$ neck**: connects the Earth-Moon system to exterior space on the anti-Earth side; rarely used operationally.

Dynamics near a neck is governed by the unstable/stable [invariant manifolds](/en/glossary/dynamics/invariant-manifold/) of the corresponding libration point — whether two periodic orbits at the same $C$ have manifolds that intersect in phase space determines whether a zero-fuel transfer between them exists (Parker & Anderson 2014, §2.6).

## Sections and visualization

- **$xy$ section** (most common): the Hill curves give the in-plane accessible outline. For Earth-Moon, $C=3.18$ is the curve just touching at $L_1$; $C=3.0$ leaves only two small islands at $L_{4,5}$ (Parker & Anderson 2014, Fig. 2-3; Vallado 2022, Fig. 12-14).

- **$xz$ section**: reveals that out-of-plane motion is also restricted — the forbidden layer is thin near the primaries and thicker far away (Vallado 2022, Fig. 12-16; Lundberg et al. 1985).

- **Three-dimensional picture**: plotting $\Omega$ as a surface $z=\Omega(x,y)$ shows infinite peaks at the primaries, the lowest basins at $L_{4,5}$, and saddle-shaped passes at $L_{1,2,3}$ — this is the classical Deprit illustration (Szebehely 1967, Fig. 4.30).

## Applications

- **Transfer feasibility**: comparing $C$ at the start and end of a candidate transfer tells whether $\Delta v$ is needed to cross a $C_i$ threshold — a zeroth-order filter at the concept-study stage.

- **Minimum-energy budget**: the lower bound on the $\Delta v$ required to take $C$ from LEO to below $C_1$ follows from $\Delta C = -2\,\mathbf v\cdot\Delta\mathbf v$ (see [Jacobi integral](/en/glossary/dynamics/jacobi-integral/)).

- **Manifold splicing**: invariant manifolds of periodic orbits evolve at fixed $C$; the size of a ZVS neck determines how far a manifold can stretch and whether it intersects the next segment's manifold (Koon et al. 2011).

- **Forbidden-region avoidance**: some missions (e.g. lunar pulsar-navigation constellations) deliberately keep $C$ above $C_1$ to lock spacecraft near Earth or Moon and prevent drift into the libration-point neighborhoods.

## Common confusions

- **The ZVS is not the graph of $\Omega$**: the ZVS is one specific level surface $\Omega=C/2$, whereas a 3D plot of $\Omega$ itself (the Deprit illustration) is only a visualization aid.

- **The ZVS depends on $C$**: each spacecraft has its own $C$ and therefore its own ZVS. When orbit families are overlaid on a Hill-curve plot, they correspond to different values of $C$.

- **No crossing at fixed $C$**: a spacecraft's trajectory in configuration space cannot cross its own ZVS — crossing requires $\Delta v$ and hence a change in $C$.

## Related concepts

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Libration Point](/en/glossary/dynamics/libration-point/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

## References

- Szebehely V. *Theory of Orbits: The Restricted Problem of Three Bodies.* Academic Press, 1967, Ch. 4 (Curves of Zero Velocity).

- Vallado D. A. *Fundamentals of Astrodynamics and Applications.* 5th ed., 2022, §12.7.3.

- Parker J. S., Anderson R. L. *Low-Energy Lunar Trajectory Design.* JPL, 2014, Ch. 2.

- Lundberg J. S., Szebehely V., Whipple C. "Surfaces of zero velocity in the restricted problem of three bodies." *Celestial Mechanics*, 1985.

- Koon W. S., Lo M. W., Marsden J. E., Ross S. D. *Dynamical Systems, the Three-Body Problem and Space Mission Design.* 2nd ed., 2011.

- Oshima K. "A hidden barrier surface complementary to the zero velocity surface in the circular restricted three-body problem." 2024.
