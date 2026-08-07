---
title: Resonant Orbit Family
description: An orbit family whose period is a simple integer ratio of some reference period; the reference may be the lunar sidereal period (27.32 days) or the synodic period (29.53 days), and the writing direction of resonance ratios differs across the literature; resonant orbits serve observation coverage, eclipse-avoidance design, and intermediate transfer structures, and the 9:2 synodic resonant NRHO is the Gateway baseline orbit.
keywords: Resonant Orbit, Resonant Orbit Family, synodic resonance, sidereal resonance, libration resonance, periodic orbit, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Resonant Orbit Family
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Resonant Orbit Family Explained | Term Definition"
  description: An orbit family whose period is a simple integer ratio of some reference period; the reference may be the lunar sidereal period (27.32 days) or the synodic period (29.53 days), and the writing direction of resonance ratios differs across the literature; resonant orbits serve observation coverage, eclipse-avoidance design, and intermediate transfer structures, and the 9:2 synodic resonant NRHO is the Gateway baseline orbit.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Resonant Orbit Family Explained | Term Definition"
  description: An orbit family whose period is a simple integer ratio of some reference period; the reference may be the lunar sidereal period (27.32 days) or the synodic period (29.53 days), and the writing direction of resonance ratios differs across the literature; resonant orbits serve observation coverage, eclipse-avoidance design, and intermediate transfer structures, and the 9:2 synodic resonant NRHO is the Gateway baseline orbit.
  image: /logo.png
permalink: /en/glossary/orbits/resonant-orbit-family/
---

# Resonant Orbit Family

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A resonant orbit is one whose orbital period is a simple integer ratio of some reference period (Vaquero & Howell 2014). In the Earth–Moon context it specifically means resonance between the spacecraft orbit and the lunar orbit — a resonant orbit in the Earth–Moon three-body problem is "essentially a two-body Earth orbit in resonance with, and significantly perturbed by, the Moon" (Parker & Anderson 2014). Resonant orbits are generally not tied to any particular libration point (Vaquero & Howell 2014).

One qualification: in multibody models the resonance holds only approximately — in the CR3BP a two-body initial guess needs differential correction to close into a periodic resonant orbit, and in an ephemeris model it degrades to a quasi-periodic orbit, though the approximate resonance ratio is preserved (Vaquero & Howell 2014).

## Reference Periods

"Resonant with what" must always be stated; the literature has two main baselines:

- **Lunar sidereal period, 27.32 days** (the primary period in the CR3BP): used by Vaquero & Howell 2014, Parker & Anderson 2014, Ding 2025, Zhou 2024, Li 2024, and the surveillance-orbit literature (Frueh 2021, Gupta 2023's Earth–Moon / sidereal resonant orbits).
- **Lunar synodic period, 29.53 days** (the interval over which the Earth–Moon–Sun geometry repeats): used by the NRHO literature (Spreen 2021, Singh 2021, Fu 2022, Zimovan-Spreen 2022) and the space-domain-awareness literature (Vendl 2021, Klonowski 2023/2024, Visonneau 2023).
- Beware "Sun-resonant" (Gao 2023): in their quasi-bicircular model the Sun's apparent period numerically equals the lunar synodic period, so it is an equivalent phrasing of the synodic baseline — not an integer ratio with the tropical year (Ding 2025 likewise gives T_sun/T_moon ≈ 1.0809).

A third usage also exists: constellation members whose periods are integer multiples of each other (referenced to the shortest-period baseline orbit in the catalog), unrelated to any celestial period (He 2025) — see "resonant period orbit (constellation usage)" in the terminology table.

## Writing Direction of Resonance Ratios

Resonance labels follow two opposite conventions; combined with the two baselines, the same label can correspond to entirely different periods, so confirm the convention before quoting any number:

- **Forward (spacecraft revolutions : lunar revolutions)**: Vaquero & Howell 2014, Spreen 2021, Vendl 2021, Li 2024. Example: 2:1 (sidereal baseline) ≈ 13.66 days.
- **Reversed (primary revolutions : spacecraft revolutions, or period ratio)**: Parker & Anderson 2014, Ding 2025, Gao 2023. Example: Ding's 1:2 family = Vaquero's 2:1; Gao's 1:4 = the Purdue literature's 4:1 NRHO.

Under Vaquero & Howell's forward convention (p/q = T_Moon/T_spacecraft): **p > q is an interior resonant orbit** (period shorter than the Moon's, e.g. IBEX's 3:1); **p < q is an exterior resonant orbit** (period longer than the Moon's, whose manifolds can tour the whole Earth–Moon space).

## Families and Continuation

- A single resonance ratio continues into a family: a two-body initial guess is closed by differential correction, then continued by pseudo-arclength; family members share characteristics and are distinguished by specific parameters (Vaquero & Howell 2014). Three-dimensional families bifurcate from planar ones: a z-direction perturbation plus an xz-plane symmetry correction yields **out-of-plane resonant orbits** (symmetric about the xz-plane); asymmetric three-dimensional resonant orbits are called axial resonant orbits (see [Axial Orbit](/en/glossary/orbits/axial-orbit/)).
- A single resonance ratio plus a single resonant phase angle σ also forms a family: σ is a resonant angle combined from modified Delaunay variables, and the equilibria of the integrable approximate Hamiltonian in the (e, σ) plane correspond to periodic resonant orbits; fixing the ratio and σ while varying the unperturbed eccentricity continues into a family (Ding 2025).
- Stability varies with the mass parameter: the Earth–Moon 4:3 resonant family is entirely unstable but provides continuous touring paths to all five libration points, while the 4:3 family at Saturn–Titan is mostly linearly stable (Vaquero & Howell 2014).

## Notable Members

- **The 9:2 synodic resonant NRHO** (period 6.556 days): the Gateway baseline orbit; other resonant members of the same family include 4:1 (7.38 days), 24:5 (6.07 days), and others (Singh 2021, Fu 2022). See [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/).
- **IBEX's 3:1 lunar resonant orbit** (sidereal baseline, period about 9.1 days): the first of its kind, entered by maneuver in 2011 and long-term stable; orbit selection was driven by radiation dose, science observation, and eclipse avoidance. TESS was likewise designed as a long-term stable Earth orbit resonant with the Moon (Vaquero & Howell 2014).
- **2:1/3:1 surveillance orbits**: frequently approaching both Earth and Moon, covering the whole cislunar region within twenty revolutions, used for cislunar surveillance constellations (Frueh 2021, Gupta 2023; as relayed by Patel 2024, Bhadauria & Frueh 2025).
- **Resonant DROs**: near DRO resonance ratios of 2:1–4:1 the gravity-field asymmetry is stronger, favoring autonomous orbit determination by inter-satellite measurement, with 4:1 giving the maximum polar elevation angle (Zhou 2024); the capture segment of WSB transfers to the 2:1 DRO contains four classes of quasi-resonant segments — 2:1, 3:1, 4:1, 5:1 — of which 4:1 appears only at higher Jacobi energy (Wang 2025).

## Applications

- **Space domain awareness observation**: retrograde periodic orbits resonant with the lunar synodic period perform excellently (Vendl 2021: the 1:1 resonance with a roughly 210° phase shift — an L1 Lyapunov — is best; local peaks at 1:1, 4:3, 3:2, 2:1) — the mechanism is that synodic resonance with the right phase keeps the Sun illuminating the target region almost continuously. Constellation geometry repeats every least-common-multiple number of synodic months (Klonowski 2023/2024); constraining the orbital period to an integer multiple of the Sun's synodic period keeps the optimal illumination geometry long-term (Ding 2025).
- **Eclipse avoidance**: synodic resonance makes the orbit geometry repeat every synodic month, and a careful choice of ratio and epoch lets Earth's and the Moon's shadows pass through gaps in the trajectory (Spreen 2021: the 9:2 NRHO's lunar-eclipse transit lasts <90 minutes; the 4:1 NRHO has a 19-year quasi-continuous eclipse-free solution).
- **Navigation constellations**: screening an orbit catalog for orbits whose periods are integer multiples builds a resonant constellation; the best-performing combination for both near-Earth and lunar regions is L2 northern/southern NRHOs plus L4/L5 vertical orbits (He 2025).
- **Intermediate transfer structures**: the 4:3 and other resonant orbits and their manifolds construct low-cost transfers from LEO to all five libration points and full-system tours (Vaquero & Howell 2014); resonant orbits can serve as parking/quarantine orbits (Parker & Anderson 2014); 3:4 and 4:3 resonant orbits serve as intermediate orbits for NRHO↔DRO transfers (Zimovan-Spreen 2022).

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Resonance ratio | Integer ratio of orbital period to reference period (both writing directions in use) | Vaquero & Howell 2014 |
| Synodic resonance | Resonance referenced to the lunar synodic period (29.53 days) | Spreen 2021 |
| Earth–Moon resonant orbit | Generic term for cislunar resonant orbits on the sidereal baseline | Sun 2025 |
| Lunar resonant orbit | Earth orbit in resonance with the Moon (IBEX 3:1, TESS) | Vaquero & Howell 2014 |
| Sidereal resonant orbit | Resonant orbit referenced to the lunar sidereal period (surveillance context) | Gupta 2023 |
| Interior / exterior resonant orbit | p>q / p<q under the forward convention | Vaquero & Howell 2014 |
| Out-of-plane resonant orbit | Three-dimensional resonant orbit symmetric about the xz-plane | Vaquero & Howell 2014 |
| Quasi-resonant segment | Capture-segment arcs with 2:1–5:1 resonant character | Wang 2025 |
| Synodic resonant periodic orbit | Periodic orbit on the synodic baseline (the phrasings of Vendl 2021 / Klonowski 2023 / Visonneau 2023 all refer to the same thing) | Vendl 2021 |
| Sun-resonant orbit | Baseline = Sun's apparent period = lunar synodic period | Gao 2023 |
| Resonant period orbit (constellation usage) | Member whose period is an integer multiple of the constellation's baseline orbit | He 2025 |

## Related Concepts

- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)
- [Axial Orbit](/en/glossary/orbits/axial-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)

## References

- Vaquero & Howell, 2014, Leveraging resonant-orbit manifolds to design transfers between libration-point orbits
- Parker & Anderson, 2014, Low-Energy Lunar Trajectory Design
- Spreen, 2021, Trajectory design and targeting for applications to the exploration program in cislunar space (thesis)
- Singh et al., 2021, Low-thrust transfers to southern L2 near-rectilinear halo orbits facilitated by invariant manifolds
- Vendl & Holzinger, 2021, Cislunar periodic orbit analysis for persistent space object detection capability
- Fu et al., 2022, Stochastic optimization for stationkeeping of periodic orbits using a high-order target point approach
- Zimovan-Spreen et al., 2022, Dynamical structures nearby NRHOs with applications to transfer design in cislunar space
- Gao et al., 2023, Low-thrust station-keeping control for lunar near rectilinear halo orbits
- Klonowski et al., 2023/2024, Cislunar space domain awareness architecture study series
- Visonneau et al., 2023, Synodic resonant orbit study for multi-satellite observation architectures
- Zhou et al., 2024, Design of circumlunar global positioning satellite constellation on DRO in the cislunar space
- Li et al., 2024, Visibility analysis of cislunar periodic orbits to Earth–Moon L1 and L2 halo orbits
- Ding et al., 2025, Cislunar space situational awareness via Earth-Moon resonant orbits
- He et al., 2025, Design of cislunar navigation constellation via orbits with a resonant period
- Wang et al., 2025, Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO
- Sun et al., 2025, Research status and development of cislunar space situational awareness technologies
