---
title: Center of Pressure
description: A detailed analysis of the center of pressure definition, its relationship with the center of mass, stability moment generation, and its role in vehicle stability
keywords: Center of Pressure, CP, Center of Mass, Stability Moment, Aerodynamic Stability, Vehicle
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Center of Pressure
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Center of Pressure | Terminology Definition
  description: A detailed analysis of the center of pressure definition, its relationship with the center of mass, and its role in vehicle stability
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Center of Pressure | Terminology Definition
  description: A detailed analysis of the center of pressure definition, its relationship with the center of mass, and its role in vehicle stability
  image: /logo.png
permalink: /en/glossary/fundamentals/pressure-center/
---

# Center of Pressure

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The center of pressure (CP), denoted $O_{c,p}$, is the point of application of the resultant aerodynamic force. Due to the axial symmetry of the vehicle, the center of pressure lies on the vehicle's longitudinal axis. Its position depends on the vehicle's shape and flight conditions (angle of attack, Mach number, etc.). In general, the center of pressure does not coincide with the center of mass.

## Core Elements

### Relationship Between Center of Pressure and Center of Mass

When the resultant aerodynamic force $\mathbf{R}$ acting at the center of pressure is translated to the center of mass $O_{c,g}$, the force translation principle requires an additional moment — the stability moment $\mathbf{M}_{st}$:

$$\mathbf{M}_{st} = \mathbf{R} \times (x_p - x_g)\mathbf{x}_1^0$$

where $x_p$ and $x_g$ are the distances from the center of pressure and center of mass to the nose tip of the rocket, respectively.

### Effect of Center-of-Pressure Position on Stability

| Condition | Effect | Stability |
| :--- | :--- | :--- |
| CP behind center of mass ($x_p > x_g$) | Aerodynamic moment reduces angle of attack | Statically stable |
| CP ahead of center of mass ($x_p < x_g$) | Aerodynamic moment increases angle of attack | Statically unstable |
| CP coincides with center of mass ($x_p = x_g$) | No moment | Neutrally stable |

### Determination of Center-of-Pressure Position

The center-of-pressure position is typically expressed using the center-of-pressure coefficient $x_{cp}$:

$$x_{cp} = \frac{x_p}{l_k}$$

where $l_k$ is the reference length. The center-of-pressure coefficient is determined through wind tunnel testing or CFD computations and varies with Mach number and angle of attack.

## Application Value

The center-of-pressure position is a critical parameter in vehicle aerodynamic layout design. For ballistic missiles and launch vehicles, the center of pressure must be behind the center of mass to achieve statically stable flight. For vehicles requiring maneuvering flight, control surface deflections can be used to shift the center-of-pressure position. During the reentry phase of cislunar space missions, the center-of-pressure position determines the trim angle of attack and lift-to-drag ratio of the reentry vehicle.

## Related Concepts

- [Aerodynamic Coefficient](/en/glossary/fundamentals/aerodynamic-coefficient/)
- [Aerodynamic Moment](/en/glossary/fundamentals/aerodynamic-moment/)
- [Lift-to-Drag Ratio](/en/glossary/fundamentals/lift-to-drag-ratio/)
- [Reentry Phase](/en/glossary/fundamentals/reentry-phase/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
