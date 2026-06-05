---
title: Phasing Orbit
description: A detailed analysis of the principles, period design, and rendezvous applications of phasing orbits
keywords: Phasing Orbit, Orbital Rendezvous, Coplanar Maneuver, Position Change
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Phasing Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Phasing Orbit | Terminology Definition
  description: A detailed analysis of the principles and period design of phasing orbits
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Phasing Orbit | Terminology Definition
  description: A detailed analysis of the principles and period design of phasing orbits
  image: /logo.png
permalink: /en/glossary/fundamentals/phasing-orbit/
---

# Phasing Orbit

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A phasing orbit is a special two-impulse transfer orbit in which the initial and final orbits are the same orbit. The spacecraft enters an elliptical phasing orbit with a different period from the main orbit, completes several revolutions, and then returns to the main orbit, achieving a position change or rendezvous on the same orbit.

## Core Elements

### Phasing Principle

The chaser spacecraft applies an impulse at point $P$ on the main orbit to enter a phasing elliptical orbit, completes $k_1$ revolutions, and returns to point $P$, where a reverse impulse is applied to return to the main orbit.

### Backward Phasing and Forward Phasing

| Type | Target Position | Phasing Orbit Period | Impulse Direction |
|:---|:---|:---|:---|
| Backward phasing | Target is behind | Greater than the main orbit period | Along the velocity direction |
| Forward phasing | Target is ahead | Less than the main orbit period | Opposite to the velocity direction |

### Period Design

The backward phasing orbit period satisfies:

$$k_1 T = T_c\left(k_2 + \frac{\theta}{2\pi}\right)$$

The forward phasing orbit period satisfies:

$$k_1 T = T_c\left(k_2 - \frac{\theta}{2\pi}\right)$$

where $T$ is the phasing orbit period, $T_c$ is the main orbit period, $\theta$ is the phase angle, and $k_2$ is the number of revolutions the target spacecraft completes along the main orbit during the phasing process.

### Velocity Impulse

$$\Delta v = \left|\sqrt{\frac{\mu}{r_c}} - \sqrt{\mu\left(\frac{2}{r_c} - \frac{1}{a}\right)}\right|$$

The phasing orbit semi-major axis is $a = \sqrt[3]{\mu_e T^2 / 4\pi^2}$.

## Application Value

Phasing orbits are widely used for position adjustment of geosynchronous orbit satellites (e.g., relocating a communication satellite to a new position over the equator), orbit planning for space rendezvous and docking, and constellation reconfiguration. The energy consumption of each maneuver depends on the period difference between the phasing orbit and the main orbit.

## Related Concepts

- [Characteristic Velocity](/en/glossary/fundamentals/characteristic-velocity/)
- [Orbital Maneuver](/en/glossary/fundamentals/orbital-maneuver/)
- [Bi-Elliptic Transfer](/en/glossary/fundamentals/bi-elliptic-transfer/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
