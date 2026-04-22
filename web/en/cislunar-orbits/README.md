---
title: Cislunar Spacecraft Orbits
description: Overview of cislunar mission orbit families—transfers, lunar orbits, and libration-point classes—with links to glossary entries and the simulation lab.
keywords: cislunar orbits, transfer orbit, NRHO, DRO, libration point, CR3BP
author: CislunarSpace
date: 2026-03-07
lastUpdated: 2026-04-22
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

## Suggested reading order

1. [What is cislunar space](/en/what-is-cislunarspace/) and the [environment](/en/what-is-cislunarspace/environment) page.
2. [Glossary](/en/glossary/) for abbreviations (e.g. [CR3BP](/en/glossary/cr3bp/)).
3. [Research frontiers](/en/research-frontiers/) for active topics and references.

*Deep-dive articles and worked examples are expanding—contributions via the repository are welcome.*
