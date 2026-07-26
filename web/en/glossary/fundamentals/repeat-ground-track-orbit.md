---
title: Repeat Ground Track Orbit
description: A detailed analysis of the definition, criteria, and subsatellite track arrangement of repeat ground track orbits and quasi-repeat ground track orbits
keywords: Repeat Ground Track Orbit, Quasi-Repeat Ground Track, Subsatellite Track Repetition, Orbit Design
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Repeat Ground Track Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Repeat Ground Track Orbit | Terminology Definition
  description: A detailed analysis of the definition and criteria of repeat and quasi-repeat ground track orbits
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Repeat Ground Track Orbit | Terminology Definition
  description: A detailed analysis of the definition and criteria of repeat and quasi-repeat ground track orbits
  image: /logo.png
permalink: /en/glossary/fundamentals/repeat-ground-track-orbit/
---

# Repeat Ground Track Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A repeat ground track orbit is an orbit in which the satellite's subsatellite track repeats with a fixed period. In $D$ sidereal days, the satellite completes $N$ revolutions before the subsatellite track begins to repeat, satisfying $24/T = N/D$, where $T$ is the orbital period in sidereal time. If $D=1$, the track repeats within 1 sidereal day and the orbit is called a repeat ground track orbit; if $D>1$ and $N$ and $D$ are coprime, it is called a quasi-repeat ground track orbit.

## Core Elements

### Repeat Criterion

$$\frac{24}{T} = \frac{N}{D}$$

where $N$ and $D$ are the minimum number of revolutions and sidereal days required for the subsatellite track to repeat.

### Repeat Ground Track Orbit Characteristics

| Characteristic | Description |
| :--- | :--- |
| Repeat period | $D=1$ sidereal day |
| Inter-revolution spacing | $L = 360°/N = 15°T$ |
| Revolution number sequence | Westward order: 0-1-2-...-(N-1) |
| Longitude span | Shifts westward by $15°T$ per revolution, equal to the inter-revolution spacing |

### Quasi-Repeat Ground Track Orbit Characteristics

The subsatellite track of a quasi-repeat ground track orbit does not repeat daily but repeats after $D$ sidereal days. The revolution numbers are no longer in sequential order and must be determined by solving a linear Diophantine equation for adjacent revolution numbers:

$$D \cdot n_W - N \cdot d_W = 1 \quad (\text{westward neighbor})$$
$$D \cdot n_E - N \cdot d_E = -1 \quad (\text{eastward neighbor})$$

### Combination with Sun-Synchronous Orbits

When a repeat/quasi-repeat ground track orbit simultaneously satisfies the sun-synchronous constraint $\dot{\Omega} = \omega_S$, it is called a sun-synchronous (quasi-) repeat ground track orbit. In this case, the nodal day equals the mean solar day:

$$T = \frac{D^* \text{ mean solar days}}{N}$$

## Application Value

Repeat ground track orbits enable satellites to periodically re-observe the same ground areas, which is significant for Earth resource observation, weather monitoring, and reconnaissance missions. Quasi-repeat ground track orbits achieve a balance between coverage period and coverage uniformity through proper design of the $N$ and $D$ ratio. Sun-synchronous quasi-repeat ground track orbits are currently the most commonly used orbit type for Earth observation satellites.

## Related Concepts

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
