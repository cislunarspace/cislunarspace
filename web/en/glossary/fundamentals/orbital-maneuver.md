---
title: Orbital Maneuver
description: A detailed analysis of the classification, thrust models, and maneuver methods of orbital maneuvers
keywords: Orbital Maneuver, Orbit Change, Orbit Transfer, Orbit Adjustment, Impulsive Thrust, Finite Thrust
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Orbital Maneuver
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Orbital Maneuver | Terminology Definition"
  description: A detailed analysis of the classification and thrust models of orbital maneuvers
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Orbital Maneuver | Terminology Definition"
  description: A detailed analysis of the classification and thrust models of orbital maneuvers
  image: /logo.png
permalink: /en/glossary/fundamentals/orbital-maneuver/
---

# Orbital Maneuver

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An orbital maneuver is the process by which a spacecraft actively changes its flight orbit using rocket engine thrust or environmental forces. Unlike the passive motion of natural celestial bodies, orbital maneuvering is an active capability unique to spacecraft and serves as the fundamental means for accomplishing tasks such as orbit change, orbit transfer, and orbit adjustment.

## Core Elements

### Classification by Maneuver Task

| Type | Description | Characteristics |
| :--- | :--- | :--- |
| Orbit change | Initial and final orbits intersect; impulse applied at the intersection point | Single large impulse with significant orbital element changes |
| Orbit transfer | Transfer from initial orbit to final orbit via a transfer orbit; the two orbits do not intersect | At least two impulses |
| Orbit adjustment | Small impulses to correct minor deviations in orbital elements | Orbit capture, orbit keeping, etc. |

### Classification by Thrust Duration

| Type | Description |
| :--- | :--- |
| Impulsive thrust maneuver | Thrust is large enough to produce an instantaneous velocity increment; position remains unchanged while velocity jumps |
| Finite thrust maneuver | Thrust is limited; a finite duration is required to achieve the desired velocity increment |

### Impulsive Thrust Model

$$\Delta v = - I_{sp} g_0 \cdot \ln\left(1 - \frac{\Delta m}{m_0}\right)$$

where $I_{sp}$ is the engine specific impulse and $m_0$ is the total mass before the maneuver.

### Finite Thrust Model

For constant thrust $F$ and specific impulse $I_{sp}$, the thrust duration is:

$$\Delta t = \frac{m_0 I_{sp} g_0}{F} \left[1 - \exp\left(-\frac{\Delta v}{I_{sp} g_0}\right)\right]$$

The ignition time is $t_c - \Delta t/2$ and the cutoff time is $t_c + \Delta t/2$.

## Application Value

Orbital maneuvering is one of the most critical operations in space missions. Geosynchronous satellite orbit insertion, space station rendezvous and docking, interplanetary trajectory design, and satellite formation flying all depend on precise orbital maneuver planning. The impulsive thrust assumption satisfies the accuracy requirements for most preliminary maneuver orbit designs, while the finite thrust model is used for high-precision maneuver parameter calculations.

## Related Concepts

- [Bi-Elliptic Transfer](/en/glossary/fundamentals/bi-elliptic-transfer/)
- [Characteristic Velocity](/en/glossary/fundamentals/characteristic-velocity/)
- [Orbit Capture](/en/glossary/fundamentals/orbit-capture/)
- [Phasing Orbit](/en/glossary/fundamentals/phasing-orbit/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
