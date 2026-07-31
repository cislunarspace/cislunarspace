---
title: Trim Angle of Attack
description: A detailed analysis of the trim angle of attack definition, solution methods, and its application in ballistic-lifting reentry vehicles
keywords: Trim Angle of Attack, Aerodynamic Moment, Center-of-Mass Offset, Ballistic-Lifting Reentry
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Trim Angle of Attack
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Trim Angle of Attack | Terminology Definition"
  description: A detailed analysis of the trim angle of attack definition and solution methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Trim Angle of Attack | Terminology Definition"
  description: A detailed analysis of the trim angle of attack definition and solution methods
  image: /logo.png
permalink: /en/glossary/fundamentals/trim-angle-of-attack/
---

# Trim Angle of Attack

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The trim angle of attack $\eta_{tr}$ is the angle of attack at which the aerodynamic moment about the vehicle's center of mass is zero. In the trimmed flight state, the aerodynamic force $\boldsymbol{R}$ passes through both the center of pressure and the center of mass, and the vehicle is in moment equilibrium. The trim angle of attack is achieved by offsetting the center of mass from the geometric longitudinal axis by a distance $\delta$.

## Core Elements

### Moment Equilibrium Condition

During trimmed flight, the aerodynamic moment about the center of mass is zero, yielding the equilibrium equation:

$$C_N(x_p - x_g) = C_{x1}\delta$$

where:

| Symbol | Meaning |
| :--- | :--- |
| $C_N$ | Total normal force coefficient |
| $x_p$ | Center-of-pressure position |
| $x_g$ | Center-of-mass position |
| $C_{x1}$ | Axial force coefficient |
| $\delta$ | Distance of center-of-mass offset from the geometric longitudinal axis |

### Flight Characteristics

| Characteristic | Description |
| :--- | :--- |
| Sideslip angle $\beta = 0$ | Aerodynamic force lies in the $o_1x_1y_1$ plane |
| Angle of attack $\alpha < 0$ | Velocity axis lies within the right angle formed by the longitudinal and normal axes |
| Lift-to-drag ratio | Generally no greater than 0.5 |

### Solution Method

$C_N$, $C_{x1}$, and $x_p$ are all functions of the angle of attack $\eta$ (i.e., $\alpha$), Mach number $M$, and flight altitude $h$. For a given $M$ and $h$, if a particular $\eta$ yields $C_N$, $C_{x1}$, and $x_p$ that satisfy the moment equilibrium equation, then that $\eta$ value is the trim angle of attack $\eta_{tr}$ for those conditions.

### Ballistic-Lifting Reentry

Ballistic-lifting reentry vehicles position the center of mass at a small offset from the central axis (with the center of mass ahead of the center of pressure), causing the vehicle to generate a certain amount of lift while flying at the trim angle of attack. By rotating about the longitudinal axis to change the roll angle $\gamma$, the components of lift in the vertical and horizontal planes can be controlled, enabling landing point adjustment within a certain range.

## Application Value

The trim angle of attack is the core parameter for ballistic-lifting reentry vehicle design. By properly designing the center-of-mass offset, the required trim angle of attack can be determined, enabling the vehicle to generate appropriate lift during reentry, reducing the maximum load factor, and improving landing precision. Both the Apollo and Soyuz spacecraft employ ballistic-lifting reentry.

## Related Concepts

- [Total Angle of Attack](/en/glossary/fundamentals/total-angle-of-attack/)
- [Zero-Angle-of-Attack Reentry](/en/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [Reentry Corridor](/en/glossary/fundamentals/reentry-corridor/)
- [Skip Reentry](/en/glossary/fundamentals/skip-reentry/)
- [Lift-to-Drag Ratio](/en/glossary/fundamentals/lift-to-drag-ratio/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
