---
title: Ballistic Coefficient
description: A detailed analysis of the ballistic coefficient definition, physical significance, and its application in reentry trajectory calculations
keywords: Ballistic Coefficient, Aerodynamic Deceleration, Reentry Trajectory, Drag
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Ballistic Coefficient
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Ballistic Coefficient | Terminology Definition
  description: A detailed analysis of the ballistic coefficient definition and physical significance
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Ballistic Coefficient | Terminology Definition
  description: A detailed analysis of the ballistic coefficient definition and physical significance
  image: /logo.png
permalink: /en/glossary/fundamentals/ballistic-coefficient/
---

# Ballistic Coefficient

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The ballistic coefficient $B$ is a parameter that characterizes a vehicle's aerodynamic deceleration capability in the atmosphere, defined as:

$$B = \frac{C_x S_M}{2m}$$

where $C_x$ is the drag coefficient, $S_M$ is the reference area, and $m$ is the vehicle mass. The ballistic coefficient appears in the reentry equations of motion:

$$\frac{\mathrm{d}v}{\mathrm{d}t} = -B\rho_0 e^{-\beta h} v^2$$

## Core Elements

### Physical Significance

The ballistic coefficient comprehensively reflects the vehicle's aerodynamic shape and mass characteristics:

| Parameter | Effect |
| :--- | :--- |
| Higher drag coefficient $C_x$ | Larger ballistic coefficient, stronger aerodynamic deceleration |
| Larger reference area $S_M$ | Larger ballistic coefficient, stronger aerodynamic deceleration |
| Greater mass $m$ | Smaller ballistic coefficient, weaker aerodynamic deceleration |

A larger ballistic coefficient means more significant deceleration of the vehicle in the atmosphere.

### Relationship with Minimum Negative Acceleration

Under zero-angle-of-attack reentry conditions, the relationship between the minimum negative acceleration and the ballistic coefficient is:

$$\dot{v}_m = \frac{\beta v_e^2}{2e}\sin\Theta_e$$

This result shows that under given reentry conditions, the minimum negative acceleration is independent of the ballistic coefficient and depends only on the reentry velocity $v_e$ and reentry angle $\Theta_e$.

### Relationship with Altitude of Minimum Negative Acceleration

The altitude at which the minimum negative acceleration occurs:

$$h_m = \frac{1}{\beta}\ln\left(-\frac{C_x S_M \rho_0}{m\beta\sin\Theta_e}\right)$$

A greater mass $m$ or larger $|\Theta_e|$ results in a lower altitude at which the minimum negative acceleration occurs.

### Velocity Decay Law

Under the assumption of negligible gravity, the velocity variation with altitude is:

$$v = v_e\exp\left(\frac{B\rho_0}{\beta\sin\Theta_e}e^{-\beta h}\right)$$

## Application Value

The ballistic coefficient is a key parameter in reentry vehicle design, directly affecting the deceleration characteristics, peak load factor, and aerodynamic heating during reentry. In warhead design, increasing the ballistic coefficient (by increasing mass or reducing the drag area) lowers the altitude at which the minimum negative acceleration occurs, thereby improving penetration capability. In spacecraft reentry design, the ballistic coefficient is an important parameter for determining the reentry corridor.

## Related Concepts

- [Zero-Angle-of-Attack Reentry](/en/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [Reentry Corridor](/en/glossary/fundamentals/reentry-corridor/)
- [Total Angle of Attack](/en/glossary/fundamentals/total-angle-of-attack/)
- [Reentry Phase](/en/glossary/fundamentals/reentry-phase/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
