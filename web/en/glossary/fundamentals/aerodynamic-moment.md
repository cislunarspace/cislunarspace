---
title: Aerodynamic Moment
description: A detailed analysis of the stability moment and damping moment definitions, generation principles, calculation methods, and their roles in vehicle attitude motion
keywords: Aerodynamic Moment, Stability Moment, Damping Moment, Center of Pressure, Center of Mass, Attitude Stability
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Aerodynamic Moment
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Aerodynamic Moment | Terminology Definition
  description: A detailed analysis of the stability moment and damping moment definitions, generation principles, and their roles in vehicle attitude motion
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Aerodynamic Moment | Terminology Definition
  description: A detailed analysis of the stability moment and damping moment definitions, generation principles, and their roles in vehicle attitude motion
  image: /logo.png
permalink: /en/glossary/fundamentals/aerodynamic-moment/
---

# Aerodynamic Moment

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The aerodynamic moment is the moment produced by aerodynamic forces about the vehicle's center of mass, comprising the stability moment and the damping moment. When the center of pressure does not coincide with the center of mass, the resultant aerodynamic force produces a moment about the center of mass. When the vehicle rotates relative to the atmosphere, the atmosphere generates a damping moment that opposes the rotation.

## Core Elements

### Stability Moment $M_{st}$

The stability moment is the additional moment created when the resultant aerodynamic force is translated from the center of pressure to the center of mass:

$$\mathbf{M}_{st} = \mathbf{R} \times (x_p - x_g)\mathbf{x}_1^0$$

The components in the body frame are:

$$\begin{cases} M_{y1,st} = Z_1(x_p - x_g) = m_{y1,st} \cdot q S_M l_k \\ M_{z1,st} = -Y_1(x_p - x_g) = m_{z1,st} \cdot q S_M l_k \end{cases}$$

The derivatives of the stability moment coefficients with respect to the angle of attack and sideslip angle:

$$m_{z1}^\alpha = m_{y1}^\beta = C_{y1}^\alpha (x_g - x_p)$$

When $x_g < x_p$ (center of mass ahead of center of pressure), $m_{z1}^\alpha < 0$, and the vehicle is statically stable.

### Damping Moment $M_d$

When the vehicle rotates about an axis at angular velocity $\omega$, the rotation causes changes in the velocity of each point on the vehicle surface relative to the atmosphere, generating additional aerodynamic forces that form a damping moment opposing the rotation:

$$M_d = m_d^\omega \cdot q S_M l_k \cdot \frac{\omega l_k}{v}$$

where $m_d^\omega$ is the damping moment coefficient derivative and $v$ is the flight velocity.

Characteristics of the damping moment:
- Direction is always opposite to the angular velocity
- Magnitude is proportional to the angular velocity
- Acts automatically during atmospheric flight without active control

### Nondimensionalization of Moment Coefficients

Aerodynamic moments are nondimensionalized using the dynamic pressure $q$, reference area $S_M$, and reference length $l_k$:

$$m = \frac{M}{q S_M l_k}$$

## Application Value

The aerodynamic moment is the foundation of vehicle attitude motion analysis. The stability moment determines the vehicle's static stability, while the damping moment governs the decay characteristics of attitude oscillations. During powered-phase flight, aerodynamic moments and control moments jointly determine the vehicle's attitude motion. For cislunar space missions, there are no aerodynamic moments outside the atmosphere, and attitude control relies entirely on control moments.

## Related Concepts

- [Center of Pressure](/en/glossary/fundamentals/pressure-center/)
- [Aerodynamic Coefficient](/en/glossary/fundamentals/aerodynamic-coefficient/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
