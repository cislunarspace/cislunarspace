---
title: Earth-Moon L1/L2 Halo Orbit (EML1/EML2 Halo)
description: Detailed explanation of Earth-Moon L1 and L2 Halo Orbits including dynamics, stability, station-keeping, and applications in Starshade missions
keywords: Earth-Moon L1 Halo Orbit, Earth-Moon L2 Halo Orbit, EML1, EML2, Halo Orbit, Starshade mission, cislunar orbit, libration point orbit
author: Tianjiang Academy
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: Earth-Moon L1/L2 Halo Orbit
  desc: Cislunar Space Beginner's Guide - Technical glossary
  image: /logo.png
og:
  title: Earth-Moon L1/L2 Halo Orbits - Dynamics and Starshade Applications
  description: Detailed explanation of Earth-Moon L1 and L2 Halo Orbits including dynamics, stability, station-keeping, and applications in Starshade missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Earth-Moon L1/L2 Halo Orbits - Dynamics and Starshade Applications
  description: Detailed explanation of Earth-Moon L1 and L2 Halo Orbits including dynamics, stability, station-keeping, and applications in Starshade missions
  image: /logo.png
permalink: /en/glossary/eml-halo/
---

# Earth-Moon L1/L2 Halo Orbit

> Source: Adapted from Genszler et al. (2026) "Surveying orbits in cislunar space for telescope-starshade observatories"
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Earth-Moon L1/L2 Halo Orbits (EML1 Halo and EML2 Halo) are periodic orbits around the Earth-Moon L1 and L2 Lagrange points, belonging to the Halo orbit family. In the Circular Restricted Three-Body Problem (CR3BP) model, these orbits are **stable and periodic**; in full force models including solar perturbations, they are **quasi-stable**, requiring only minimal station-keeping $\Delta v$.

Halo orbits were first described by Robert W. Farquhar in 1968. They simultaneously cross the $x-y$ plane and $x-z$ plane in the rotating frame, exhibiting a three-dimensional "cashew" or "figure-8" configuration.

## Geometric Characteristics

Key geometric parameters of Halo orbits:

- **$A_z$ amplitude**: Out-of-plane amplitude perpendicular to the Earth-Moon orbital plane, determining the orbit's "flattening"
- **$A_y$ amplitude**: In-plane amplitude perpendicular to the Earth-Moon line
- **Period**: Ranges from approximately 7 to 25 days depending on amplitude combination

Halo orbits split into **Southern** and **Northern** families corresponding to positive and negative $z$ amplitudes.

## Dynamics

### EML1 Halo Orbit

- **Location**: Near Earth-Moon $L_1$ point, approximately 326,000 km from Earth
- **Accessibility**: Shorter transfer time from Earth, higher mission flexibility
- **Station-keeping cost**: Higher than EML2 Halo orbits

### EML2 Halo Orbit

- **Location**: Near Earth-Moon $L_2$ point, on the far side of the Moon
- **Accessibility**: Relatively low transfer cost compared to SEL2
- **Observation advantage**: Earth and Moon on the same side of the telescope, simpler pointing constraints
- **Station-keeping cost**: Less than 5–10 m/s/year for orbit maintenance

## Relationship with NRHO

Near-Rectilinear Halo Orbits (NRHO) are an extreme subclass of the Halo orbit family. When the $A_z/A_y$ ratio of a Halo orbit becomes very large, the orbit transitions from "cashew-shaped" to nearly linear reciprocating motion — this is the NRHO. NRHO specifically refers to members between the first and third stability changes for $L_2$, or between the first and fourth for $L_1$.

In Genszler et al. (2026):

- **L1 NRHO**: Period approximately 8–10 days
- **L2 NRHO**: Period approximately 6–10 days

## Orbit Generation

Initial conditions for Halo orbits are generated using:

1. **Single shooting method** and **continuation method**
2. **Differential correction algorithms**
3. Dynamics propagation using CR3BP model (e.g., MATLAB's ode113)

## Related Concepts

- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/nrho/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/dro/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- [Starshade](/en/glossary/starshade/)
- Lagrange Point
- Formation Flying

## References

- Genszler G, Savransky D, Soto G J. Surveying orbits in cislunar space for telescope-starshade observatories[J]. 2026.
- Farquhar R W. The execution of lunar orbit and libration point missions[J]. 1972.
- Zimovan E M. Characteristics and design strategies for near rectilinear halo orbits within the Earth-Moon system[D]. Purdue University, 2017.
- Folta D C, Pavlak T A, Haapala A F, et al. Preliminary design considerations for access and operations in Earth-Moon L1/L2 orbits[C]. AAS/AIAA, 2013.
- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. IEEE Aerospace Conference, 2016.
