---
title: Cislunar Spacecraft Orbits
description: Overview of cislunar mission orbit families—transfers, lunar orbits, and libration-point classes—with links to glossary entries and the simulation lab.
keywords: cislunar orbits, transfer orbit, NRHO, DRO, libration point, CR3BP
author: CislunarSpace
date: 2026-03-07
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/
wechatShare:
  title: Cislunar Space Orbits
  desc: Mission orbits and dynamical intuition for Earth–Moon space.
  image: /logo.png
og:
  title: Cislunar Space Orbits | Beginner's Guide
  description: Mission orbit families in cislunar space
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Cislunar orbit families
  description: Transfers, lunar orbits, and libration-point orbits
  image: /logo.png
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

# Cislunar spacecraft orbits (hub)

Spacecraft in cislunar space are poorly approximated by a single Keplerian center: Earth–Moon (and often solar) gravity couples into **restricted multi-body** dynamics. Orbit families multiply, and operations must respect longer light times, tracking geometry, and often maneuver-heavy maintenance or transfers. This hub establishes shared vocabulary before you dive into papers and tools.

## How it differs from LEO

- **Gravity model**: From two-body intuition to Earth–Moon (and sometimes Sun-dominated) models; libration points and periodic/quasi-periodic orbits become central.
- **Tracking & time**: Large ranges make delay and pass scheduling part of the design.
- **Stability & maneuvering**: Some classes are sensitive to state errors or require station-keeping; trades involve time, fuel, and launch windows.

## Common mission orbit classes (conceptual)

| Class | What it is (intro) | Where to read more |
|-------|---------------------|--------------------|
| Earth–Moon transfer | From LEO or staging to lunar sphere of influence | Mission reports on TLI, mid-course correction |
| Lunar orbits | Circular/elliptical/polar classes for remote sensing, landing prep | Lunar gravity field, frozen orbits |
| Libration-point & halo families | Periodic/quasi-periodic motion near Earth–Moon libration points | See [glossary](/en/glossary/); NRHO/DRO entries mirror the Chinese section over time |
| DRO | Distant retrograde class in the Earth–Moon rotating frame | Same as above |

Detailed design needs ephemerides, force models, and program constraints. See [resources & tools](/en/resources-tools/) for datasets and libraries, and the [orbit simulation lab](/en/satellite-simulation/) for interactive experiments.


## Deep Dives: Three Key Topics

### NRHO (Near-Rectilinear Halo Orbit)

NRHO (Near-Rectilinear Halo Orbit) is a class of periodic orbits near the Earth-Moon libration points, named for their elongated "near-linear" appearance in the rotating frame. These orbits offer favorable communication visibility to the lunar south pole and require relatively low delta-v to reach the lunar surface, making them the preferred operational orbit for NASA's Lunar Gateway station in the Artemis program. NRHOs are solutions to the restricted three-body problem—they are not asymptotically stable and require periodic station-keeping—but their dynamical properties have been validated by numerous missions and remain a hot research topic in cislunar operations.

### DRO (Distant Retrograde Orbit)

DRO (Distant Retrograde Orbit) refers to quasi-periodic orbits that are retrograde in the rotating frame and located at considerable distances from the Earth-Moon barycenter. Compared to NRHOs, DROs are farther from the Moon, demand less station-keeping, and serve well as long-duration parking orbits or deep-space mission outposts. Their forgiving dynamical structure makes DROs attractive for demonstrating multi-body transfer concepts and for studying chaos and orbital stability in cislunar space.

### Earth-Moon Transfer Orbits

Earth-Moon transfer orbits bridge the gap between low-Earth parking orbits and lunar orbit or the Moon's sphere of influence. Common transfer strategies include Hohmann transfers, low-energy transfers (Lunar Transfer Orbit, LTO), and the increasingly studied multi-body gravity-assist transfers. Each approach trades off propellant, transfer time, and launch window flexibility—fast transfers consume more fuel, while low-energy transfers can take months but require much less delta-v. Mission planners weigh these factors against schedule, launch vehicle capacity, and tracking coverage to select the best fit.

## Suggested reading order

1. [What is cislunar space](/en/what-is-cislunarspace/) and the [environment](/en/what-is-cislunarspace/environment) page.
2. [Glossary](/en/glossary/) for abbreviations (e.g. [CR3BP](/en/glossary/cr3bp/)).
3. [Research frontiers](/en/research-frontiers/) for active topics and references.

*Deep-dive articles and worked examples are expanding—contributions via the repository are welcome.*

## Simulation Lab

Explore the dynamical characteristics of various orbit classes interactively in the [Satellite Orbit Simulation Lab](/en/satellite-simulation/).
