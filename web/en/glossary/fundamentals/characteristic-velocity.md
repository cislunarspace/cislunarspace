---
title: Characteristic Velocity
description: A detailed analysis of the definition, calculation methods, and application of characteristic velocity in orbital maneuvers
keywords: Characteristic Velocity, Velocity Impulse, Fuel Consumption, Orbital Maneuver
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Characteristic Velocity
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Characteristic Velocity | Terminology Definition"
  description: A detailed analysis of the definition and calculation methods of characteristic velocity
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Characteristic Velocity | Terminology Definition"
  description: A detailed analysis of the definition and calculation methods of characteristic velocity
  image: /logo.png
permalink: /en/glossary/fundamentals/characteristic-velocity/
---

# Characteristic Velocity

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Characteristic velocity $v_{ch}$ is the sum of the absolute values of all velocity impulses in an orbital maneuver, i.e., $v_{ch} = \sum|\Delta v_i|$. Characteristic velocity is the core metric for evaluating the fuel consumption of an orbital maneuver and directly determines the amount of propellant the spacecraft must carry.

## Core Elements

### Basic Definition

$$v_{ch} = |\Delta v_1| + |\Delta v_2| + \cdots + |\Delta v_n|$$

The relationship between characteristic velocity and actual fuel consumption is given by the Tsiolkovsky rocket equation:

$$\frac{\Delta m}{m_0} = 1 - \exp\left(-\frac{v_{ch}}{I_{sp} g_0}\right)$$

### Characteristic Velocity for Typical Orbit Transfers

| Transfer Scheme | Characteristic Velocity |
| :--- | :--- |
| Hohmann transfer | $v_{ch} = \Delta v_1 + \Delta v_2$ |
| Bi-elliptic transfer | $v_{ch} = \Delta v_1 + \Delta v_2 + \Delta v_3$ |
| Infinite bi-elliptic transfer | $v_{ch} = (\sqrt{2}-1)\left(\sqrt{\mu/r_1} + \sqrt{\mu/r_2}\right)$ |

### Characteristic Velocity for Orbit Adjustment

For orbit adjustment maneuvers, the total characteristic velocity of two tangential impulses:

$$v_{ch} = |\Delta v_{t1}| + |\Delta v_{t2}|$$

When $\Delta a$ and $\Delta e$ have the same sign:

$$v_{ch} = na\frac{|\Delta a|/a - e|\Delta e|}{2}$$

When $\Delta a$ and $\Delta e$ have opposite signs:

$$v_{ch} = na\frac{|\Delta a|/a + e|\Delta e|}{2}$$

### Minimum Energy Condition

For orbit adjustments, the most energy-efficient scheme is to apply the velocity impulse tangentially at the orbit's perigee.

## Application Value

Characteristic velocity is the core parameter for comparing orbital maneuver schemes. During the design phase, the scheme with the least fuel consumption is selected by comparing the characteristic velocities of different transfer options. Characteristic velocity is also directly used to determine the spacecraft's propellant budget and is an important input for mission analysis and spacecraft design.

## Related Concepts

- [Orbital Maneuver](/en/glossary/fundamentals/orbital-maneuver/)
- [Bi-Elliptic Transfer](/en/glossary/fundamentals/bi-elliptic-transfer/)
- [Phasing Orbit](/en/glossary/fundamentals/phasing-orbit/)
- [Orbit Capture](/en/glossary/fundamentals/orbit-capture/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
