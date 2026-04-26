---
title: Cislunar Spatiotemporal Reference
description: A detailed analysis of the definition, construction methods, traceability and transfer mechanisms of the cislunar spatiotemporal reference, and its application value in deep space exploration and lunar development.
keywords: cislunar spatiotemporal reference, spatiotemporal coordinate frame, ephemeris model, gravity field model, spatiotemporal transfer, precise orbit determination
author: 天疆说
date: 2026-04-24
lastUpdated: 2026-04-26
wechatShare:
  title: Cislunar Spatiotemporal Reference
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Cislunar Spatiotemporal Reference | Core Cislunar Space Concept
  description: A detailed analysis of the definition, construction methods, traceability and transfer mechanisms of the cislunar spatiotemporal reference, and its application value in deep space exploration and lunar development.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Cislunar Spatiotemporal Reference | Core Cislunar Space Concept
  description: A detailed analysis of the definition, construction methods, traceability and transfer mechanisms of the cislunar spatiotemporal reference, and its application value in deep space exploration and lunar development.
  image: /logo.png
permalink: /en/glossary/navigation/cislunar-spatiotemporal-reference/
---

# Cislunar Spatiotemporal Reference

> This article author: [天疆说](https://blog.csdn.net/qq_33254264)
>
> Site address: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Cislunar Spatiotemporal Reference is a fundamental framework that provides a unified spatiotemporal coordinate system for cislunar space activities. It includes high-precision ephemeris models, dynamical models, and gravity field models of the Earth-Moon system. It serves as the essential prerequisite for ensuring navigation, positioning, communication, and precise spacecraft operations in cislunar space.

## Core Components

### Ephemeris Model

A high-precision ephemeris model describes the precise positions and orbital motions of the Earth, Moon, and other celestial bodies within cislunar space. Unlike near-Earth space, which relies primarily on Earth's gravitational field, cislunar space requires consideration of the multi-body gravitational effects of the Earth, Moon, and Sun. Currently widely used ephemeris models include JPL's DE (Development Ephemeris) series, with internal consistency accuracy for lunar position at the level of several meters.

### Gravity Field Model

The gravity field model for cislunar space must precisely characterize the non-spherical gravity of the Earth and Moon and its spatial gradient distribution. The complexity of the lunar gravity field far exceeds that of Earth's gravity field approximation at equivalent scales (due to the significant presence of mascons). Therefore, high-resolution lunar gravity field models are required for compensation in cislunar space missions.

### Spatiotemporal Transfer and Traceability

The application of the spatiotemporal reference depends on precise transfer and traceability from Earth's surface reference stations to cislunar space. The main technical methods include:

- **Two-way Time and Frequency Transfer (TWTT)**: Uses microwave or laser links to exchange time and frequency signals between Earth stations and spacecraft, achieving time synchronization.
- **Very Long Baseline Interferometry (VLBI)**: Uses multiple ground-based radio telescopes to perform differential observations of deep space probes, achieving angular position precision at the arcsecond to sub-arcsecond level.
- **Lunar Laser Ranging (LLR)**: Precisely calibrates the lunar orbit and relative distance by measuring the round-trip laser time between Earth and Moon.

## Key Challenges

- Cislunar space (at a scale of 3.8×10⁵ km) is much larger than near-Earth space, posing higher requirements for maintaining and transferring stable time and frequency references.
- The mascon distribution on the Moon causes gravity field uncertainties to be particularly significant in low lunar orbits, thereby affecting precise orbit determination and prediction accuracy.
- Non-conservative forces such as solar radiation pressure and Earth's atmospheric drag accumulate non-negligibly over long arcs, requiring refined dynamical compensation models.

## Application Value

- **Lunar Mission Navigation**: Provides high-precision autonomous navigation capability for crewed lunar landing and uncrewed sample return missions.
- **Lunar Resource Development**: Provides a spatial coordinate framework for precise landing site selection and accurate deployment of in-situ resource utilization facilities.
- **International Lunar Research Station**: Serves as a unified spatiotemporal service system for multi-national and multi-mission coordination, supporting the long-term operation of lunar research stations.
- **Deep Space Vehicle Operations**: Provides high-precision orbital maneuver and rendezvous and docking reference for various cislunar space and deep space vehicles.

## Related Concepts

- [Ephemeris Model](/en/glossary/ephemeris-model/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- [Quasi-Bicircular Four-Body Problem (QBCP)](/en/glossary/qbcp/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/dro/)
- [Near Rectilinear Halo Orbit (NRHO)](/en/glossary/nrho/)
- [Earth-Moon L1/L2 Halo Orbit](/en/glossary/eml-halo/)

## References

- 2026 Aerospace Science Issues and Technical Challenges Released, China Aerospace Conference (CSC2026), 2026.
- Park R S, Folkner W M, Williams J G, et al. The JPL planetary and lunar ephemerides DE440 and DE441[J]. The Astronomical Journal, 2021.
- Mazarico E, Barker M K, Neumann G A, et al. Advanced illumination modeling for data analysis and calibration of the Lunar Reconnaissance Orbiter[J]. 2020.
