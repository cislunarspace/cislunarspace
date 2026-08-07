---
title: Lyapunov Orbit
description: A family of planar periodic orbits around a collinear libration point in the circular restricted three-body problem, whose existence is guaranteed by Lyapunov's center theorem; all members are unstable and carry invariant manifolds, making them the foundational structure for low-energy transfers, weak stability boundary patching, and temporary-capture studies.
keywords: Lyapunov Orbit, planar periodic orbit, libration point orbit, invariant manifold, low-energy transfer
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Lyapunov Orbit
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Lyapunov Orbit Explained | Term Definition"
  description: A family of planar periodic orbits around a collinear libration point in the circular restricted three-body problem, whose existence is guaranteed by Lyapunov's center theorem; all members are unstable and carry invariant manifolds, making them the foundational structure for low-energy transfers, weak stability boundary patching, and temporary-capture studies.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Lyapunov Orbit Explained | Term Definition"
  description: A family of planar periodic orbits around a collinear libration point in the circular restricted three-body problem, whose existence is guaranteed by Lyapunov's center theorem; all members are unstable and carry invariant manifolds, making them the foundational structure for low-energy transfers, weak stability boundary patching, and temporary-capture studies.
  image: /logo.png
permalink: /en/glossary/orbits/lyapunov-orbit/
---

# Lyapunov Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Lyapunov orbit is a planar periodic orbit around a collinear libration point of the circular restricted three-body problem (CR3BP) — one family each at L1, L2, and L3 (Gómez 2001, Parker & Anderson 2014). Under linearization, the center subspace of a collinear point decomposes into two normal oscillations: in-plane (frequency ωp) and out-of-plane (frequency ωv); the periodic solution that excites only the in-plane center mode is the planar Lyapunov orbit (Belló 2010). The family's existence is guaranteed by Lyapunov's center theorem — hence the name (Alessi 2009) — and has nothing to do with "Lyapunov stability theory."

What is usually meant by Lyapunov orbit is the planar family; the vertical family is its sibling family of the same rank (see [Vertical Orbit](/en/glossary/orbits/vertical-orbit/)). Earth–Moon L1/L2 family periods run about 2–4 weeks (closer to 2 weeks the nearer the libration point), and the L3 family about 4 weeks (Parker & Anderson 2014).

## Geometry and Symmetry

The orbit is symmetric about the rotating-frame x-axis and crosses it perpendicularly twice per revolution — a perpendicular crossing means zero x-velocity at the crossing point, velocity along y, and an initial state of the form [x₀, 0, 0, ẏ₀] (Parker & Anderson 2014, Tan 2014). The motion is prograde on the near-Moon side and retrograde on the far side (Oshima 2019, citing Lam & Whiffen 2005).

## Stability and Manifolds

All family members are unstable (Parker & Anderson 2014): the monodromy matrix eigenvalues are λ₁=λ₂=1 and λ₃=1/λ₄, giving the stable and unstable directions (Tan 2014). The manifolds form smooth tubes ahead of the Moon. Besides the in-plane hyperbolic mode, some members also carry a vertical instability mode — their out-of-plane stable/unstable manifolds are natural transport channels between in-plane and out-of-plane states, and can raise inclination through multiple lunar flybys (Oshima 2019).

Two important corollaries:

- At equal Jacobi constant, free (zero-maneuver) heteroclinic transfers exist between members of the LL1 and LL2 families, findable on Poincaré maps (Parker & Anderson 2014).
- The stable manifolds of L1/L2 planar Lyapunov orbits mark the boundary of the WSB region, while the unstable manifolds govern temporary capture by the Moon (Fantino 2010); patching Sun–Earth EL1/EL2 Lyapunov manifolds to Earth–Moon LL2 ones is the classic construction of a weak stability boundary transfer (Xu 2010).

## Relation to Other Families

- **Bifurcating the halo family**: when the in-plane and out-of-plane frequencies become equal (1:1 resonance), the family member whose vertical stability turns critical bifurcates into the halo family (Belló 2010, Gómez 2001, Alessi 2009).
- **Bifurcating the axial family**, at a location different from the halo bifurcation (He 2026).
- **Sibling of the vertical family**: the planar Lyapunov is the Lissajous limit as out-of-plane amplitude → 0, the vertical orbit the limit as in-plane amplitude → 0; the two are connected by families of quasi-periodic tori (Belló 2010, Guzzetti 2016).

## Parameterization and Notation

Family members can be labeled by x₀, ẏ₀, or the Jacobi constant C, and are commonly presented as x₀–C characteristic curves (Parker & Anderson 2014). Literature notation: ELi denotes an orbit at point Li of the Sun–Earth system, LLi one of the Earth–Moon system (Xu 2010, Parker & Anderson 2014).

## Large-Amplitude Members and Earth–Moon Transfers

Members whose amplitude grows large enough to be tangent to lunar orbits have special transfer value: their stable manifolds no longer have tube topology but reach directly into near-Earth space — a single stable manifold connects a near-Earth orbit straight to a near-Moon orbit (first shown by Tan 2014; Zheng & Zhao 2023). Two-impulse Earth–Moon transfers designed on this basis save about 100 m/s over Hohmann transfers and take less time than WSB transfers (Tan 2014); the Zheng & Zhao 2023 example totals about 3921 m/s ΔV over 62 days. Xu 2010 gives the parameters of Lyapunov orbits tangent to large-amplitude DROs (for a DRO with Ax=90867 km, the tangent L1 Lyapunov has Ax=32828 km), used respectively for fast and low-energy entry into the DRO.

**Lyapunov-like orbits**: in NRHO→DRO outbound transfers, the arc after the lunar flyby often takes a large-amplitude Lyapunov shape — tangent to the DRO on one side and close to the Moon on the other, naturally accompanied by a lunar flyby, which favors low-impulse DRO insertion (Wang 2021, the term traced back to Zhang 2020). Wang 2025 (the WSB paper) further classifies the L1/L2 Lyapunov-like segments in DRO capture trajectories by arrival Jacobi energy: high energy enters directly on the near-Earth side; low energy goes through a more inclined, larger-amplitude Lyapunov-like segment to the far side.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Lyapunov orbit family / periodic orbit | The planar Lyapunov family | Gómez 2001 |
| Planar Lyapunov (periodic) orbit | Family of periodic solutions with zero out-of-plane amplitude and frequency ωp | Belló 2010 |
| EL1/EL2/LL1/LL2 Lyapunov orbits | Lyapunov orbits at the corresponding points of the Sun–Earth / Earth–Moon systems | Xu 2010 |
| Large-amplitude Lyapunov orbit | Family members tangent to lunar orbits, whose stable manifolds reach near-Earth space directly | Tan 2014, Zheng & Zhao 2023 |
| Lyapunov-like orbit / segment | Transfer-arc portions with large-amplitude Lyapunov morphology | Wang 2021, Wang 2025 |

## Related Concepts

- [Vertical Orbit](/en/glossary/orbits/vertical-orbit/)
- [Axial Orbit](/en/glossary/orbits/axial-orbit/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Manifold Connection](/en/glossary/orbits/manifold-connection/)
- [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## References

- Gómez et al., 2001, Dynamics and Mission Design Near Libration Points, Vol. I
- Alessi et al., 2009, Leaving the Moon by means of invariant manifolds of libration point orbits
- Belló et al., 2010, Invariant manifolds, Lagrangian trajectories and space mission design
- Fantino et al., 2010, A note on libration point orbits, temporary capture and low-energy transfers
- Xu, 2010, Onset conditions and trajectory construction of Earth–Moon low-energy transfers
- Parker & Anderson, 2014, Low-Energy Lunar Trajectory Design
- Tan et al., 2014, Earth–Moon transfer trajectory design based on large-amplitude Lyapunov orbits
- Guzzetti et al., 2016, Rapid trajectory design in the Earth–Moon ephemeris system via an interactive catalog of periodic and quasi-periodic orbits
- Oshima, 2019, The use of vertical instability of L1 and L2 planar Lyapunov orbits for transfers from near rectilinear orbits
- Wang et al., 2021, Transfers between NRHOs and DROs in the Earth-Moon system
- Zheng & Zhao, 2023, Earth–Moon transfer method based on the stable manifolds of large-amplitude Lyapunov orbits
- Wang et al., 2025, Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO
- He et al., 2026, A review of cislunar constellation design and optimization
