---
title: Quasi-Periodic Orbit
description: Detailed analysis of the definition, characteristics, and behavior of quasi-periodic orbits in ephemeris models
keywords: Quasi-Periodic Orbit, Ephemeris Model, DRO, Torus, Orbital Mechanics
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Quasi-Periodic Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Quasi-Periodic Orbit Details | Behavior in Ephemeris Models
  description: Detailed analysis of the definition, characteristics, and behavior of quasi-periodic orbits in ephemeris models
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Quasi-Periodic Orbit Details | Behavior in Ephemeris Models
  description: Detailed analysis of the definition, characteristics, and behavior of quasi-periodic orbits in ephemeris models
  image: /logo.png
permalink: /en/glossary/orbits/quasi-periodic-orbit/
---

# Quasi-Periodic Orbit

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A quasi-periodic orbit is an orbit that traces out a bounded trajectory without exactly closing on itself. In the ephemeris model, where perturbations from the Sun, planets, and other sources are present, periodic orbits of the Circular Restricted Three-Body Problem (CR3BP) evolve into quasi-periodic orbits.

## Characteristics

| Feature | Periodic Orbit (CR3BP) | Quasi-Periodic Orbit (Ephemeris) |
| :--- | :--- | :--- |
| Trajectory | Exactly closed | Never exactly closes |
| Motion | Single frequency | Multiple incommensurate frequencies |
| Geometry | 1D curve | Fills a 2D torus surface |
| Long-term behavior | Repeats exactly | Bounded but non-repeating |

## Behavior of DRO in Ephemeris Model

When a DRO computed in the CR3BP is propagated in the ephemeris model:

- The trajectory no longer closes exactly
- It winds within a bounded region, tracing out a torus-like structure
- The overall shape remains similar to the CR3BP periodic orbit
- The orbit remains bounded for long durations due to the inherent stability of DROs

## Significance

Quasi-periodic orbits are important for mission design because:

- They represent the actual motion in realistic perturbation environments
- They can be used as reference orbits for station-keeping
- Their structure determines the achievable orbit accuracy

## Related Concepts

- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Ephemeris Model](/en/glossary/dynamics/ephemeris-model/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
