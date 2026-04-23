---
title: Starshade
description: Detailed explanation of Starshade - a starlight suppression system for direct imaging of exoplanets, including formation flying with telescopes and cislunar applications
keywords: Starshade, starlight suppression, exoplanet direct imaging, formation flying, telescope-starshade system, cislunar space, occulter
author: Tianjiang Academy
date: 2026-04-23
lastUpdated: 2026-04-23
wechatShare:
  title: Starshade
  desc: Cislunar Space Beginner's Guide - Technical glossary
  image: /logo.png
og:
  title: Starshade - Starlight Suppression for Exoplanet Direct Imaging
  description: Detailed explanation of Starshade technology, formation flying with telescopes, and applications in cislunar space
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Starshade - Starlight Suppression for Exoplanet Direct Imaging
  description: Detailed explanation of Starshade technology, formation flying with telescopes, and applications in cislunar space
  image: /logo.png
permalink: /en/glossary/starshade/
---

# Starshade

> Source: Adapted from Genszler et al. (2026) "Surveying orbits in cislunar space for telescope-starshade observatories"
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Starshade is a **starlight suppression system** consisting of an external occulter with petal-shaped edges that flies in formation with a space telescope along the telescope's line of sight to a target star. By blocking on-axis starlight while allowing off-axis light from an exoplanet to reach the telescope, the Starshade enables **direct imaging spectroscopy** of exoplanets. Key mission concepts using Starshades include HabEx (Habitable Exoplanet Observatory) and LUVOIR (Large Ultraviolet Optical Infrared Surveyor).

## Operating Principle

The Starshade and telescope maintain a **formation flying** configuration along the Line of Sight (LOS) to the target star:

$$\vec{r}_{ss/O} = \vec{r}_{sc/O} + s \hat{r}_{LOS}$$

where $s$ is the **separation distance** between Starshade and telescope, with a typical value of $120 \times 10^3$ km (120,000 km).

### Petal-Shaped Design

The Starshade typically employs a **flower-like design** — a circular central disk with petal extensions around the edge. This geometry minimizes **diffraction** by concentrating the Airy disk energy within the central occultation zone, significantly reducing target star light leakage.

### Inner Working Angle

The Inner Working Angle (IWA) characterizes the Starshade's blocking capability:

$$\tan \gamma = \frac{R}{s}$$

where $R$ is the Starshade radius and $s$ is the separation distance. For a 72 m diameter Starshade at 120,000 km separation, the IWA is approximately **0.06 arcseconds**.

## Key Technology Challenges

Starshade technology has not yet reached mission-ready status (TRL 9). Primary challenges include:

| Challenge | Description |
|:---|:---|
| Solar glint | Solar reflections off the occulter surface causing interference |
| Thermal control | Long-duration thermal stability in deep space |
| Structural vibration dampening | Micro-vibration control of large deployable structures |
| Deployment accuracy | Precise unfolding and shape control of the occulter |
| Shape control | Maintaining the occulter's shape over mission lifetime |

NASA's **S5 program** has addressed starlight suppression, formation sensing and control, and deployment accuracy, advancing Starshades toward TRL 5. However, significant development remains before operational deployment.

## Relative Motion with Telescope

In the synodic frame, the Starshade does not follow a closed periodic orbit. Each observation slew requires two impulsive maneuvers:

1. **First burn**: Initiates transition from current target star to next target
2. **Second burn**: Matches telescope velocity at the end of the maneuver to resume observation tracking

This involves precise control of **differential acceleration** between the Starshade and telescope — a core challenge in mission design.

## Cislunar Space Applications

Genszler et al. (2026) investigated the feasibility of a Starshade technology demonstration mission using orbits in cislunar space, considering three orbit families:

- **Distant Retrograde Orbits (DRO)**: Stable multi-year periodic orbits suitable for repeated observation slews
- **EML1 Halo Orbits**: Periods of ~8–10 days, with short transfer times from Earth
- **EML2 Halo Orbits**: Periods of ~6–10 days, with favorable observation geometry

Key finding: With a $\Delta v$ budget of 20 m/s, the separation distance must decrease to approximately **10,000 km** for feasible slew maneuvers — far smaller than the 120,000 km separation used in SEL2 missions, indicating that cislunar Starshade demonstrations require significantly scaled-down systems.

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/dro/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/nrho/)
- [Earth-Moon L1/L2 Halo Orbit (EML1/EML2 Halo)](/en/glossary/eml-halo/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/cr3bp/)
- Direct Imaging of Exoplanets
- Formation Flying

## References

- Genszler G, Savransky D, Soto G J. Surveying orbits in cislunar space for telescope-starshade observatories[J]. 2026.
- Vanderbei R J, Cady E, Kasdin N J. Optimal occulter design for finding extrasolar planets[J]. Astrophysical Journal, 2007, 665(1): 794.
- Morgan R, Savransky D, Turmon M, et al. An exploration of expected number of exoplanets for a 6 m class direct imaging observatory[C]. SPIE, 2022, 12180: 761-775.
- Willems P, Lisman D. NASA's starshade technology development activity[J]. JATIS, 2021, 7(2): 021203.
