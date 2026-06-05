---
title: Frozen Orbit
description: A detailed analysis of the definition, critical inclination conditions, and applications of frozen orbits in communication and navigation satellites
keywords: Frozen Orbit, Critical Inclination, Apse Line Drift, Molniya Orbit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Frozen Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Frozen Orbit | Terminology Definition
  description: A detailed analysis of the definition and critical inclination conditions of frozen orbits
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Frozen Orbit | Terminology Definition
  description: A detailed analysis of the definition and critical inclination conditions of frozen orbits
  image: /logo.png
permalink: /en/glossary/fundamentals/frozen-orbit/
---

# Frozen Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A frozen orbit is an orbit in which the argument of perigee $\omega$ does not drift under the long-term perturbation of Earth's oblateness ($J_2$ term). When the orbital inclination satisfies $\sin^2 i = 4/5$, i.e., $i = 63.4°$ or $i = 116.6°$, then $\dot{\omega} = 0$ and the apse line remains fixed in inertial space. This inclination is called the critical inclination.

## Core Elements

### Critical Inclination Condition

Based on the long-period effect of Earth's oblateness on the argument of perigee:

$$\dot{\omega} = \frac{3J_2R_E^2}{2p^2}n\left(2 - \frac{5}{2}\sin^2 i\right)$$

When $2 - \frac{5}{2}\sin^2 i = 0$, $\dot{\omega} = 0$, giving:

| Critical Inclination | Orbit Type |
|:---|:---|
| $i = 63.4°$ | Prograde frozen orbit |
| $i = 116.6°$ | Retrograde frozen orbit |

### Apse Line Drift Pattern

| Inclination Range | Drift Direction | Description |
|:---|:---|:---|
| $i < 63.4°$ | $\dot{\omega} > 0$, drifts in the direction of motion | Prograde orbit |
| $63.4° < i < 116.6°$ | $\dot{\omega} < 0$, drifts opposite to the direction of motion | Includes polar orbits |
| $i > 116.6°$ | $\dot{\omega} > 0$, drifts in the direction of motion | Retrograde orbit |

### Typical Application: Molniya Orbit

The Soviet Union's Molniya satellite system employed a frozen orbit design:

| Parameter | Value |
|:---|:---|
| Orbital period | 12 sidereal hours |
| Eccentricity | $e \approx 0.7$ |
| Inclination | $i = 63.4°$ |
| Perigee location | Over the Southern Hemisphere |

Because the inclination equals the critical inclination, the perigee does not drift, and the apogee remains permanently over high-latitude regions of the Northern Hemisphere, providing prolonged communication coverage. Within the 12-hour orbital period, the time spent over high-latitude regions is nearly 11 hours.

### Daily Drift Rate

The single-day drift of the argument of perigee:

$$\dot{\omega} = 4.9821\left(\frac{R_E}{a}\right)^{7/2}(1-e^2)^{-2}(4 - 5\sin^2 i) \quad (°/\text{day})$$

The drift rate depends on orbital altitude and eccentricity: the smaller the semi-major axis and the closer the eccentricity is to 1, the faster the drift.

## Application Value

Frozen orbit is an important concept in highly elliptical orbit design. By selecting the critical inclination, the apse line can be maintained in a fixed direction, allowing the apogee (or perigee) to remain over a specific region for extended periods. This is significant for high-latitude communications, region-specific remote sensing, and gravity field measurement missions. The Molniya orbit is the most classic application of frozen orbits.

## Related Concepts

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Liu L. Spacecraft Orbit Theory[M]. National Defense Industry Press.
