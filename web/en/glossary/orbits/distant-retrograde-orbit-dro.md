---
title: Distant Retrograde Orbit (DRO)
description: A family of planar periodic orbits in the circular restricted three-body problem that revolve retrograde around the Moon, larger in scale than the Moon–L1/L2 distance, linearly stable, and candidate orbits for cislunar stations, lunar constellations, and relay satellites.
keywords: Distant Retrograde Orbit, DRO, SPDRO, QPDRO, resonant DRO, cislunar space, periodic orbit
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Distant Retrograde Orbit (DRO)
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Distant Retrograde Orbit (DRO) Explained | Term Definition"
  description: A family of planar periodic orbits in the circular restricted three-body problem that revolve retrograde around the Moon, larger in scale than the Moon–L1/L2 distance, linearly stable, and candidate orbits for cislunar stations, lunar constellations, and relay satellites.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Distant Retrograde Orbit (DRO) Explained | Term Definition"
  description: A family of planar periodic orbits in the circular restricted three-body problem that revolve retrograde around the Moon, larger in scale than the Moon–L1/L2 distance, linearly stable, and candidate orbits for cislunar stations, lunar constellations, and relay satellites.
  image: /logo.png
permalink: /en/glossary/orbits/distant-retrograde-orbit-dro/
---

# Distant Retrograde Orbit (DRO)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A DRO is a member of a family of planar periodic orbits in the circular restricted three-body problem (CR3BP) that revolve retrograde around the secondary primary — in the Earth–Moon system, around the Moon, appearing clockwise in the top-down rotating frame (Welch 2015, Ren 2020). The orbit is symmetric about the rotating-frame x-axis and crosses it perpendicularly (Ren 2020). The family traces back to Hénon's classification of periodic orbits in the Hill-type three-body problem, where DROs form family f (Demeyer 2007, Minghu 2014).

"Distant" refers to the orbit's characteristic scale exceeding the primary-to-L1/L2 distance (Demeyer 2007, Scott 2010) — not to any location behind or beside the Moon; a DRO encircles the Moon completely.

The DRO's most notable property is linear stability: a perturbed spacecraft drifts onto nearby KAM tori and moves quasi-periodically around the orbit, and well-designed DROs can host objects for decades to centuries (Demeyer 2007, Welch 2015). In four-body models with solar perturbation, DROs are no longer strictly periodic and persist as long-term bounded quasi-periodic orbits (Zhou 2024).

## Stability and Neighborhood Structure

In the CR3BP a DRO is not an isolated periodic orbit but the core of a stable region (Scott 2010, in the Sun–Earth context; the structural conclusions carry over):

- **SPDRO (stable periodic DRO)**: the central orbit of the stable region, specified by its size — the x-axis crossing distance measured on the side away from the secondary, i.e. the maximum x-direction amplitude.
- **QPDRO (quasi-periodic DRO)**: quasi-periodic orbits surrounding an SPDRO, appearing as closed curves on a Poincaré section. They exist at all Jacobi values except two, where the stable region vanishes (the SPDRO curve intersects the curve of the bounding unstable orbit). Thin layers of bounded chaotic orbits also reside inside the stable region.
- **BUPO / P3DRO (boundary of the stable region)**: Scott 2010 describes a "bounding unstable periodic orbit" (BUPO, Hénon family g3, period-3 on the section); Wang 2025 describes the P3DRO, a period-tripling bifurcation off the DRO whose manifolds govern transport through the sticky region. Different names and contexts (Sun–Earth vs Earth–Moon), same class of structure: the period-3 unstable orbit delimiting the DRO stable region. The stable region plus the sticky region form a "stability barrier" that low-energy capture must cross (Wang 2025).

## Family Members

**Resonant members.** DROs whose period is a simple integer ratio of the lunar period are operationally valuable because the Earth–Moon–Sun geometry repeats each synodic month, giving two mission opportunities per month. Welch 2015's 2:1 resonant DRO (relative to the 29.53-day synodic period) has a period of about half that (~14.8 days), with perilune ~70,000 km and apolune ~90,000 km. Beware two baseline conventions: Zhang 2021 and Zhou 2024 measure against the sidereal month (27.32 days), and Zhang inverts the ratio (their 1:2 corresponds to a 13.66-day period). The same "2:1 resonant DRO" can differ by more than a day across papers — always state the convention.

**Near-planar and 3-D DROs.** Near-planar DROs (very small z-amplitude) offer better long-term stability than three-dimensional ones (Welch 2015, citing its ref. [11]); Zhou 2024 deliberately designs 3-D DROs parameterized by z-amplitude to cover the lunar poles. Stability versus coverage is a design trade-off.

## Long-Term Boundedness in High-Fidelity Models

- **Long-term DRO**: with solar gravity included, periodicity is no longer guaranteed; an orbit that remains bounded until the mission completes is a long-term DRO, and the required bounded duration is the DRO lifetime T. Given T, boundedness is decided by the initial solar phase angle ψ_S, whose feasible set is the launch window; longer lifetimes narrow the window. Both the long-term DRO and its Jacobi value are quasi-periodic (Minghu 2014).
- **DRO zone**: over its lifetime a long-term DRO's Jacobi value spans J_min to J_max; the DRO zone is the bounded region where the orbit predominantly resides, practically enclosed by the two ideal DROs at those limiting Jacobi values (Minghu 2014).
- **Phase-free DRO**: a modeling simplification that lets a spacecraft enter a DRO at any solar phase angle, used to study insertion at arbitrary epochs; it is a transfer-design device, not a new orbit type (Wang 2025-WSB, borrowed from Parrish et al. 2019).

## Parameterization

Papers parameterize the family differently, and "amplitude" carries two opposite conventions — always state which is meant:

- **Near-side convention (Ren 2020)**: the DRO amplitude is the distance from the Moon at the x-axis crossing where the spacecraft moves in the negative y direction; with the Moon at the origin and Earth along +x, this crossing lies between Earth and Moon, on the near side. Minghu 2014 likewise uses the x-axis crossing position x₀ as the family parameter.
- **Far-side convention (Scott 2010)**: the SPDRO size is measured at the x-axis crossing away from the Sun (the secondary), i.e. the maximum x-amplitude. Large DROs are noticeably asymmetric front-to-back, so the two conventions diverge non-negligibly.
- **Phase factor σ (Wang 2025)**: the ratio of the spacecraft's time on the DRO to the orbital period, σ ∈ [0,1]; zero phase is defined at the right-hand perpendicular x-axis crossing.
- **Insertion angle τ (Welch 2015)**: an angle advancing uniformly along the DRO, analogous to mean anomaly on Keplerian orbits, used to mark insertion points.
- **Three parameters for 3-D DROs (Zhou 2024)**: initial phase angle θ, mean period T̄, and z-amplitude Z_m.
- **Jacobi value**: both Minghu 2014 and Scott 2010 index family members by Jacobi value.

## Applications

- **Lunar constellations (Zhou 2024)**: borrowing the Walker constellation idea, one period of a DRO is treated as a "benchmark orbit" (analogous to the orbital plane in two-body constellation design), with satellites deployed at equal phase differences; the constellation is characterized by five parameters — satellite count, number of benchmark orbits, initial phase angle, initial z-component, and initial mean period.
- **Station parking and return transfers (Zhang 2021)**: DROs can park a long-term cislunar station; return transfers from DROs to LEO/MEO/GSO are computed in the bicircular four-body model via grid search plus nonlinear programming, and the return cost is a key criterion for choosing a parking DRO.
- **Insertion transfers**: via L1/L2 Lyapunov orbit manifolds (Demeyer 2007, Minghu 2014), differential correction with numerical continuation (Scott 2010), direct and powered lunar-flyby transfers (Welch 2015), transfer families from low lunar orbit (Ren 2020), and low-energy insertion via the weak stability boundary (Wang 2025).
- **Asteroid storage (Welch 2015)**: the ARM concept placed an asteroid on a lunar DRO for long-term stability and cheap insertion.
- **Communication relay (Minghu 2014)**: stability and altitude make DROs a preferred candidate for lunar relay and TT&C satellites.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| SPDRO | Stable periodic DRO, the central orbit of the stable region | Scott 2010 |
| QPDRO | Quasi-periodic DRO surrounding an SPDRO | Scott 2010 |
| P3DRO / BUPO | Period-3 unstable orbit delimiting the stable region | Wang 2025 / Scott 2010 |
| 2:1 resonant DRO | DRO with period about half the synodic month | Welch 2015 |
| Near-planar DRO | DRO with very small z-amplitude | Welch 2015 |
| Long-term DRO | DRO staying bounded under solar perturbation for the mission lifetime | Minghu 2014 |
| DRO zone | Bounded region a long-term DRO predominantly occupies | Minghu 2014 |
| DRO amplitude | x-axis crossing distance from the Moon (near- vs far-side conventions) | Ren 2020 / Scott 2010 |
| DRO phase factor σ | On-orbit time over period | Wang 2025 |
| DRO benchmark orbit | Single-period trajectory used as deployment reference in constellation design | Zhou 2024 |
| Phase-free DRO | Design simplification allowing entry at any solar phase angle | Wang 2025-WSB |

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Resonant Orbit Family](/en/glossary/orbits/resonant-orbit-family/)
- [Quasi-Periodic Orbit (QPO)](/en/glossary/orbits/qpo/)
- [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## References

- Demeyer & Gurfil, 2007, Transfer to distant retrograde orbits using manifold theory
- Scott & Spencer, 2010, Calculating transfer families to periodic distant retrograde orbits using differential correction, JGCD, DOI:10.2514/1.47791
- Tan Minghu et al., 2014, Transfer to long term distant retrograde orbits around the Moon
- Welch, Parker & Buxton, 2015, Mission considerations for transfers to a distant retrograde orbit
- Ren et al., 2020, Families of transfers from the Moon to distant retrograde orbits in cislunar space
- Zhang et al., 2021, The transfers from lunar DROs to Earth orbits via optimization in the four body problem
- Zhou et al., 2024, Design of circumlunar global positioning satellite constellation on DRO in the cislunar space
- Wang et al., 2025, Mechanism analysis of the DRO low-energy transfer problem: An energy perspective
- Wang et al., 2025, Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO
