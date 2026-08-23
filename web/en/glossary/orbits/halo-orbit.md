---
title: Halo Orbit
description: A three-dimensional periodic orbit near a collinear libration point (L1/L2/L3) in the circular restricted three-body problem, symmetric about the xz-plane, with northern and southern mirror families; most members are unstable and carry invariant manifolds, making them the backbone of low-energy transfers and lunar communication constellations in cislunar space.
keywords: Halo Orbit, libration point orbit, NRHO, Lissajous, cislunar space, periodic orbit, invariant manifold
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Halo Orbit
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Halo Orbit Explained | Term Definition"
  description: A three-dimensional periodic orbit near a collinear libration point (L1/L2/L3) in the circular restricted three-body problem, symmetric about the xz-plane, with northern and southern mirror families; most members are unstable and carry invariant manifolds, making them the backbone of low-energy transfers and lunar communication constellations in cislunar space.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Halo Orbit Explained | Term Definition"
  description: A three-dimensional periodic orbit near a collinear libration point (L1/L2/L3) in the circular restricted three-body problem, symmetric about the xz-plane, with northern and southern mirror families; most members are unstable and carry invariant manifolds, making them the backbone of low-energy transfers and lunar communication constellations in cislunar space.
  image: /logo.png
permalink: /en/glossary/orbits/halo-orbit/
---

# Halo Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A halo orbit is a three-dimensional periodic orbit near a collinear libration point (L1, L2, or L3) of the circular restricted three-body problem (CR3BP) (Parker & Born 2008). The halo family bifurcates from the planar Lyapunov family when the in-plane and out-of-plane frequencies become equal (Gómez 2001, Alessi 2009); equivalently, halos are the periodic solutions into which Lissajous trajectories degenerate when their two frequencies coincide (Howell 1997). The orbit's projection onto the yz-plane is ring-shaped (hence the name), and the orbit is symmetric about the xz-plane, crossing it perpendicularly twice per revolution (Gómez 2001, Conti 2025).

## Northern and Southern Families

Because the CR3BP force field is symmetric about the xy-plane while a single halo orbit is not, halo orbits come in mirror pairs: members whose apolune lies above the xy-plane form the **northern family**, those below the **southern family**; two members of opposite families differ only in the sign of their z and ż components (Parker & Born 2008, Conti 2025). Northern corresponds to Class I and southern to Class II (Howell 1997, Alessi 2009). Do not conflate the two symmetries: a single halo is symmetric about the xz-plane, while the two families mirror each other across the xy-plane.

A southern-family satellite spends more than half its time below the Moon's orbital plane, benefiting communication with the lunar southern hemisphere (Parker & Anderson 2014); the northern family covers the north polar region better (Gao & Hou 2020).

## L1/L2/L3 Members

- **L1 halo orbits**: between Earth and Moon, with an unimpeded view of both Earth and the lunar near side (Parker & Anderson 2014); their close perilune and nearly constant lunar apparent diameter favor optical navigation (Qi & Oguri 2023).
- **L2 halo orbits**: beyond the Moon, covering the far side; the Queqiao relay satellite operates on an Earth–Moon L2 halo orbit (Qiao 2025).
- **L3 halo orbits**: on Earth's far side from the Moon, unstable and requiring active keeping; the family's stable members dip below Earth's surface at perigee and are unusable, so the selected unstable members have apogee altitudes around 740,000 km and periods of about 26.6 days (Conti 2025).

## Stability

Most Earth–Moon halo orbits are unstable and therefore carry invariant manifolds, the dynamical basis of low-energy transfer design (Parker & Born 2008). The stability criterion builds two indices ν1 and ν2 from the non-unit eigenvalues of the monodromy matrix: a halo orbit is stable when both are real with absolute value at most 1 (Conti 2025). A linearly stable sub-segment exists mid-family: for Earth–Moon L1, period ~9.4 days and out-of-plane amplitude ~74,000 km; for L2, ~10 days and 77,600 km (Conti 2025). The stability index reaches hundreds at the bifurcation off the Lyapunov family, while the near-stable stretch with index 1–1.69 on the L2 side is precisely the NRHO (Spreen 2021; see [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)). Linear stability does not mean free of station-keeping: in an ephemeris model a stable halo costs about 7.79 m/s per year (Gao & Hou 2020, citing Davis et al.).

## Parameterization and Analytic Construction

Halo orbits are sized by their out-of-plane amplitude Az, but three conventions exist; always state which is meant:

- **Expansion-coefficient convention (Gómez 2001)**: in the Lindstedt–Poincaré expansion, α is the in-plane and β the out-of-plane amplitude (coefficients of the fundamental-frequency cosine terms); the equal-frequency condition for halos becomes a constraint Δ(α,β), with α no smaller than α_min, the point where the family bifurcates off the Lyapunov family.
- **Maximum-excursion convention (Kakoi 2014)**: Az is the orbit's maximum |z| from the xy-plane, the most common engineering usage (Gordon 2008 scans the L2 halo family at Az = 1000–10000 km).
- **Peak-to-peak convention (Spreen 2021)**: Az is the maximum z minus the minimum z. For southern NRHOs z_max ≈ 0 so the two values nearly coincide; for a general halo they can differ by almost a factor of two.

Initial guesses come from Richardson's third-order analytic solution (Lindstedt–Poincaré method) for periodic motion near the collinear points; engineering practice corrects the analytic guess by differential correction to obtain the exact periodic orbit (Gómez 2001, Li 2024), and the analytic orbit also serves as the baseline for computing deviations and manifold departures (the so-called nominal orbit).

## Applications and Transfers

- **Communication and navigation constellations**: L2 halos support lunar far-side relay (Queqiao); halo–DRO combined constellations provide global coverage (Gao & Hou 2020); halo constellations serve lunar positioning and communication (Conti 2025).
- **Direct transfers (Parker & Born 2008)**: a two-burn scheme: trans-lunar injection from LEO plus a tangential maneuver at the manifold insertion point that targets the stable manifold of the destination halo, onto which the spacecraft then asymptotically drifts. A 5-day fast transfer costs about 3.6–4.1 km/s; the minimum is around 3.6 km/s but takes over three weeks.
- **Manifold transfers (Gordon 2008, Peng 2016)**: Gordon 2008 inserts into the stable manifold of low-amplitude L2 halos with a maneuver near the Moon, costing as little as 0.282 km/s; Peng 2016 goes the other way, departing a 100 km lunar orbit and exploiting the stable manifold's close lunar approach for nearly free insertion.
- **North–south family transfers (Du 2023)**: low-thrust transfers between L2 northern and southern halos; the manifold configuration (heteroclinic connections patched from Lyapunov homoclinic initial guesses) dominates (feasible down to 10 mN thrust, 38.5 days, 1.7 kg of fuel). Such heteroclinic links exist only in specific Jacobi ranges (Haapala & Howell 2016).
- **Cross-system halo-to-halo transfers (Kakoi 2014, Li 2024, Canalias 2008)**: maneuver-free transfers between Earth–Moon and Sun–Earth halo orbits: the hyperbolic manifolds of the two three-body systems are matched on a Poincaré section, and after multiple-shooting refinement the coupling maneuver is generally under 100 m/s, at best zero.
- **Halo-orbit transits (Xu 2010)**: transiting via an LL1/LL2 halo instead of the libration point adds one design dimension (the halo phase) and more launch windows, at higher energy and cost; LL2 halo transits used for WSB transfers span a window over the solar phase β and halo phase τ.
- **Capture stage (Zanzottera 2011)**: the Earth–Moon leg of a two-stage low-energy transfer: the exterior branch of the target L2 halo's stable manifold is integrated backward from the orbit to the section (forward in time, the spacecraft drifts naturally onto the halo), describing natural capture into the target halo.
- **Rendezvous and phasing (Bucchioni 2023)**: three strategies compared (butterfly-family parking, halo-family parking, and direct phasing) with no drastic winner; for safety the chaser targets the unstable manifold of the destination orbit rather than the orbit itself, and rendezvous occurs near apolune.
- **Halo2GEO (Patel 2024)**: manifold insertion from an L1 halo followed by a high-impulse maneuver into a connecting orbit to GEO, about 23 days in total, a notional surveillance target orbit in cislunar space-domain-awareness studies.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Northern / southern family | Mirror families with apolune above/below the xy-plane | Parker & Born 2008 |
| Class I / Class II | Northern / southern by another name | Howell 1997 |
| L1/L2/L3 halo orbits | The halo families of the three collinear points | Parker & Born 2008 |
| EM / SE halo | Halo orbits of the Earth–Moon / Sun–Earth system | Kakoi 2014 |
| Nominal halo orbit | Baseline orbit generated by Richardson's third-order solution | Gómez 2001 |
| Stable halo segment | Sub-family with real ν1, ν2 of absolute value ≤ 1 | Conti 2025 |
| Amplitude Az | Out-of-plane amplitude, three conventions (expansion coefficient / max excursion / peak-to-peak) | Gómez 2001 / Kakoi 2014 / Spreen 2021 |
| Direct transfer | Two-burn scheme: TLI plus tangential burn at manifold insertion | Parker & Born 2008 |
| Halo-to-halo transfer | Maneuver-free transfer between halos of two three-body systems | Kakoi 2014 |
| North–south transfer | Low-thrust heteroclinic link between northern and southern halos | Du 2023 |
| Halo-orbit transit | Well-crossing via an LL1/LL2 halo orbit | Xu 2010 |
| Capture stage | Transfer leg naturally entering a halo along the exterior stable-manifold branch | Zanzottera 2011 |
| Halo2GEO | L1 halo → GEO transfer via manifold plus impulse | Patel 2024 |

## Related Concepts

- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)
- [Manifold Connection](/en/glossary/orbits/manifold-connection/)
- [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/)

## References

- Gómez et al., 2001, Dynamics and Mission Design Near Libration Points, Vol. I
- Howell et al., 1997, Application of dynamical systems theory to trajectory design for a libration point mission
- Parker & Born, 2008, Direct lunar halo orbit transfers
- Gordon, 2008, Transfers to Earth-Moon L2 halo orbits using lunar proximity and invariant manifolds
- Alessi et al., 2009, Leaving the Moon by means of invariant manifolds of libration point orbits
- Xu et al., 2010, Earth–Moon transfer design via halo-orbit transits
- Zanzottera et al., 2011, Low-energy Earth-to-halo transfers in the Earth–Moon scenario with Sun perturbation
- Kakoi et al., 2014, Access to Mars from Earth–Moon libration point orbits: manifold and direct options
- Parker & Anderson, 2014, Low-Energy Lunar Trajectory Design
- Haapala & Howell, 2016, A framework for constructing transfers linking periodic libration point orbits in the spatial circular restricted three-body problem
- Peng et al., 2016, Transfer design from lunar orbits to Earth–Moon L2 halo orbits via invariant manifolds
- Gao & Hou, 2020, Coverage analysis of lunar communication/navigation constellations based on halo orbits and DROs
- Spreen, 2021, Trajectory design and targeting for applications to the exploration program in cislunar space (thesis)
- Du et al., 2023, Two trajectory configurations for the low-thrust transfer between northern and southern halo orbits
- Bucchioni et al., 2023, Phasing with near rectilinear halo orbits: design and comparison
- Qi & Oguri, 2023, Analysis of autonomous orbit determination in various near-Moon periodic orbits
- Patel et al., 2024, Halo2GEO transfer study
- Li, 2024, Cross-system libration-point transfer design study
- Conti & Circi, 2025, Design of halo orbit constellation for lunar global positioning and communication services
- Qiao et al., 2025, Review of cislunar libration-point missions
