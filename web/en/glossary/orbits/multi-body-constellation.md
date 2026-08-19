---
title: Multi-Body Constellation
description: A constellation system in which multiple satellites are deployed across circumlunar orbits, libration point orbits, and other orbit types to jointly provide lunar surface coverage, relay communication, and navigation; typical designs include continuous south pole coverage by two-satellite relay and hybrid-orbit whole-Moon coverage schemes.
keywords: Multi-Body Constellation, constellation, lunar south pole coverage, whole-Moon coverage, cislunar constellation
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Multi-Body Constellation
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Multi-Body Constellation Explained | Term Definition"
  description: A constellation system in which multiple satellites are deployed across circumlunar orbits, libration point orbits, and other orbit types to jointly provide lunar surface coverage, relay communication, and navigation; typical designs include continuous south pole coverage by two-satellite relay and hybrid-orbit whole-Moon coverage schemes.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Multi-Body Constellation Explained | Term Definition"
  description: A constellation system in which multiple satellites are deployed across circumlunar orbits, libration point orbits, and other orbit types to jointly provide lunar surface coverage, relay communication, and navigation; typical designs include continuous south pole coverage by two-satellite relay and hybrid-orbit whole-Moon coverage schemes.
  image: /logo.png
permalink: /en/glossary/orbits/multi-body-constellation/
---

# Multi-Body Constellation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A constellation is a system of multiple satellites working cooperatively; a cislunar constellation deploys its satellites across circumlunar orbits, libration point orbits, and other orbit types to provide lunar surface coverage, relay communication, and navigation services. "Multi-body constellation" is the customary literature term (e.g. Trabacchin 2025), denoting a multi-satellite / multi-body-orbit constellation without a stricter formal definition. Coverage performance metrics: the coverage time percentage (CTP) of single coverage and the continuous single-coverage area percentage (SCP) (Gao & Hou 2020); navigation requirements use the four-fold coverage percentage (fraction of time with at least 4 satellites simultaneously visible) and the GDOP time percentage (Chen 2024).

## Lunar South Pole Coverage

A single satellite on a southern halo (including near-rectilinear) orbit sees the south pole only for most of each period (about 63.5% for a 12-day L1 halo, about 96.4% for a 7-day L2 near-rectilinear halo), so **continuous coverage requires a two-satellite relay**: either two satellites on the same orbit with staggered phases (half a period apart), or one satellite each on two orbits with commensurable periods; five combinations reach 100% (e.g. dual 7-day L2 NRHOs, or a 7-day L2 halo plus a 14-day butterfly orbit), while the 16-day L1+L2 vertical-orbit combination is a counterexample (still 98.41% after relay) (Grebow 2008, ground station at Shackleton crater 89.9°S, validated 180 days in a full-ephemeris model). For low-thrust transfers to these coverage orbits see Ozimek & Howell 2010. An engineering scheme for a four-satellite south pole communication constellation: three 3:1 sidereal resonant L2 southern halos plus one L1 southern halo, 100% continuous at a minimum elevation of 59° (Trabacchin 2025).

## Whole-Moon Coverage

Single orbit types approach but never reach 100%: a 4-satellite halo constellation is imperfect on a fine grid (large-out-of-plane-amplitude halos cover the poles well but the equator poorly); three equally phased planar DROs reach 99.8% but leave permanent gaps over the polar caps; four spatial DROs reach about 99.975%. A hybrid 5-satellite constellation (3 halos + 2 DROs) achieves 100% continuous single coverage of the whole lunar surface (Gao & Hou 2020).

## Cislunar Constellation Build-Up Roadmap

Chen 2024 proposes three stages: 100% single coverage of the south polar region (Earth relay communication) → 100% four-fold polar coverage (navigation) plus 100% single whole-Moon coverage (communication) → 100% four-fold whole-Moon coverage (whole-Moon navigation). The final configuration is 12 elliptical frozen orbits (ELFO, 12 h period, 300 km perilune, in north and south groups covering the two poles) + 4 satellites on 9:2 NRHOs + 2 halo orbits (one each at L1 and L2) + 3 satellites on 2:1 DROs spaced 120° apart — 21 satellites in all, with GDOP≤5 at least 72% of the time at any point on the Moon.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Multi-body constellation | Customary term for multi-satellite / multi-body-orbit constellations | Trabacchin 2025 |
| Lunar south pole coverage orbit | Certain southern-halo-family orbits (single satellite visible most of the period; two-satellite relay for continuity) | Grebow 2008 |
| Whole-Moon coverage | 100% continuous single coverage by hybrid orbit types | Gao & Hou 2020 |
| Cislunar constellation | Three-stage build-up scheme on circumlunar plus libration point orbits | Chen 2024 |
| ELFO | Elliptical frozen orbit (12 h period, 300 km perilune) | Chen 2024 |

## Related Concepts

- [Formation Flight](/en/glossary/orbits/formation-flight/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)

## References

- Grebow et al., 2008, Multibody orbit architectures for lunar south pole coverage
- Ozimek & Howell, 2010, Low-thrust transfers in the Earth–Moon system, including applications to libration point orbits
- Gao & Hou, 2020, Coverage analysis of lunar communication/navigation constellations based on halo orbits and DROs
- Chen et al., 2024, Orbit design methodology for near-Moon space constellations
- Trabacchin & Colombatti, 2025, Design of an orbital infrastructure to guarantee continuous communication to the lunar south pole region
