---
title: EXOSIMS
description: Detailed analysis of EXOSIMS (Exoplanet Observation and Science Mission Simulation) capabilities, architecture, application in starshade mission design, and dynamic model integration methods
keywords: EXOSIMS, exoplanet, direct imaging, mission simulation, orbital design, starshade, mission scheduling, observation scheduling
author: Tianjiang Talk
date: 2026-04-23
lastUpdated: 2026-04-26
wechatShare:
  title: EXOSIMS
  desc: One-stop learning for cislunar space research frontiers, terminology, and tools.
  image: /logo.png
og:
  title: EXOSIMS Exoplanet Direct Imaging Mission Simulation Software
  description: Detailed analysis of EXOSIMS capabilities, architecture, application in starshade mission design, and dynamic model integration methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: EXOSIMS Exoplanet Direct Imaging Mission Simulation Software
  description: Detailed analysis of EXOSIMS capabilities, architecture, application in starshade mission design, and dynamic model integration methods
  image: /logo.png
permalink: /en/glossary/exosims/
---

# EXOSIMS

> Author: [Tianjiang Talk](https://blog.csdn.net/qq_33254264)
>
> Editor's source: Genszler et al. (2026) "Surveying orbits in cislunar space for telescope-starshade observatories"
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

EXOSIMS (EXOplanet Observation and Science Mission Simulation) is an **open-source exoplanet direct imaging mission simulation software** developed by Cornell University. It is used to simulate the complete scientific phase of direct imaging missions, estimating scientific output and subsystem performance. The software can simultaneously simulate key processes such as orbit propagation, spacecraft maneuvering, and observation scheduling in **telescope-starshade formation flying** systems.

## Core Functions

EXOSIMS is primarily used for the following mission analysis scenarios:

1. **Orbit State Propagation**: Propagates orbit states of telescopes and starshades based on CR3BP or ephemeris models
2. **Starshade Slew Simulation**: Calculates the $\Delta v$ required for a starshade to switch from the current target star to the next
3. **$\Delta v$ Map Generation**: Generates slew $\Delta v$ maps for a given orbit, supporting maneuver cost evaluation at different separation distances and pointing conditions
4. **Science Yield Estimation**: Evaluates the mission's exoplanet detection and characterization capabilities
5. **Mission Schedule Optimization**: Plans optimal observation sequences under given $\Delta v$ budget constraints

## Architecture

EXOSIMS adopts a modular design with the following main components:

| Module | Function Description |
|:---|:---|
| Orbit propagator | Orbit propagation (supports CR3BP and ephemeris models) |
| Star catalog | Target star catalog management |
| Observation schedule | Observation sequence scheduling |
| Slew calculator | Starshade slew $\Delta v$ calculation |
| Science yield | Science output evaluation |
| Stationkeeping | Orbit maintenance simulation (decoupled from slew simulation) |

## Application in Genszler et al. (2026)

Genszler et al. (2026) used EXOSIMS to study the feasibility of deploying starshade technology demonstration missions on cislunar halo orbits and DROs. Specific applications include:

### Target Star List

A **synthetic target star list** was used, distributed at 20-degree intervals in both ecliptic latitude and longitude, totaling 144 stars, with ecliptic latitude range from -70° to +70° (polar regions omitted due to solar exclusion angle constraints).

### $\Delta v$ Maps

$\Delta v$ maps were generated for different slew times (from 0.055 days to half the telescope's orbital period), with slew time steps of half a day.

### Key Parameters

HabEx-like 6 m telescope mission parameters were adopted:

| Parameter | Symbol | Value |
|:---|:---|:---|
| Thruster force | $F_T$ | 264 N |
| Specific impulse | $I_{sp}$ | 280 s |
| Wet mass | $m_w$ | 14500 kg |
| Dry mass | $m_d$ | 6722 kg |
| Separation distance | $s$ | $120 \times 10^3$ km |
| Diameter | $D$ | 72 m |
| Inner working angle | IWA | 0.06 arcsec |

### Differential Acceleration Analysis

The study also calculated differential acceleration comparisons between the Earth-Moon model and the Sun-Earth model:

| Parameter | Earth-Moon System | Sun-Earth System |
|:---|:---|:---|
| Burn 1 $\vec{a}_{diff}$ | $9.557 \times 10^{-4}$ m/s² | $5.329 \times 10^{-6}$ m/s² |
| Burn 2 $\vec{a}_{diff}$ | $9.58 \times 10^{-4}$ m/s² | $5.331 \times 10^{-6}$ m/s² |

The differential acceleration in the Earth-Moon system is approximately **two orders of magnitude** larger than in the Sun-Earth system. This represents the main challenge for starshade slew maneuvers in cislunar space.

## Dynamic Model Integration

EXOSIMS supports integration of different reference frames and dynamic models in simulations:

- **CR3BP Libration Point Coordinates**: Used for periodic orbit propagation of halo orbits and DROs
- **Geocentric Inertial Frame** (J2000): Used for interfacing with ephemeris data
- **Direction Cosine Matrix** (DCM): Used for state transformation between coordinate frames

Coordinate transformations are handled via Astropy coordinate methods. Position vectors are defined as SkyCoord objects, utilizing the `transform_to` and `obstime` attributes for time-dependent transformations.

## Open Source and Availability

EXOSIMS is open-source software hosted on GitHub:

- Repository: https://github.com/dsavransky/EXOSIMS
- Citation: Genszler et al. (2026) used commit `485f30d3aacf2bf0ff06abeb2ae23d069f1abdaf`

## Related Concepts

- [Starshade](/en/glossary/starshade/)
- [Earth-Moon L1/L2 Halo Orbits](/en/glossary/eml-halo/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/dro/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Exoplanet Direct Imaging
- Formation Flying

## References

- Genszler G, Delacroix C, Garrett D, et al. EXOSIMS[EB/OL]. https://github.com/dsavransky/EXOSIMS.
- Genszler G, Savransky D, Soto G J. Surveying orbits in cislunar space for telescope-starshade observatories[J]. 2026.
- Morgan R, Savransky D, Turmon M, et al. An exploration of expected number of exoplanets for a 6 m class direct imaging observatory[C]. SPIE, 2022.
- Soto G J, Savransky D, Garrett D, et al. Parameterizing the search space of starshade fuel costs for optimal observation schedules[J]. JGCD, 2019.
