---
title: Reentry Corridor
description: A detailed analysis of the reentry corridor definition, determination methods, and the physical mechanisms of each constraint boundary
keywords: Reentry Corridor, Reentry Angle, Load Factor Limit, Heat Flux Limit, Dynamic Pressure Limit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Reentry Corridor
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Reentry Corridor | Terminology Definition"
  description: A detailed analysis of the reentry corridor definition and each constraint boundary
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Reentry Corridor | Terminology Definition"
  description: A detailed analysis of the reentry corridor definition and each constraint boundary
  image: /logo.png
permalink: /en/glossary/fundamentals/reentry-corridor/
---

# Reentry Corridor

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The reentry corridor refers to the range of reentry angles that permits a vehicle to achieve a normal reentry. If the reentry angle $|\Theta_e|$ is too large, deceleration is excessive, and the load factor and aerodynamic heating exceed allowable limits. If $|\Theta_e|$ is too small, the aerodynamic force is insufficient to drive the vehicle deep into the atmosphere. Therefore, a normal reentry must satisfy:

$$|\Theta_e|_{\min} \leq |\Theta_e| \leq |\Theta_e|_{\max}$$

The reentry corridor width is defined as $\Delta\Theta_e = |\Theta_e|_{\max} - |\Theta_e|_{\min}$.

## Core Elements

### Constraint Boundaries

The reentry corridor is jointly determined by four boundaries:

| Boundary Type | Constraint Condition | Description |
| :--- | :--- | :--- |
| Normal load factor limit | $n_y \leq n_{y\max}$ | Corresponds to $D = \frac{C_x}{C_L}g\,n_{y\max}$ |
| Dynamic pressure limit | $q \leq q_{\max}$ | Corresponds to $D = \frac{C_x S_M}{m}q_{\max}$ |
| Maximum heat flux limit | $q_s \leq (q_s)_{\max}$ | Corresponds to $D = \frac{C_x S_M}{2m}\frac{(q_s)_{\max}^2}{k_s^2 v^4}$ |
| Equilibrium glide boundary | $\mathrm{d}\Theta/\mathrm{d}t \leq 0$ | Ensures the reentry vehicle returns to the ground |

### Corridor Widening Methods

| Method | Principle |
| :--- | :--- |
| Negative-lift reentry | Produces negative lift at a negative angle of attack, bending the trajectory inward and lowering $ | \Theta_e | _{\min}$ |
| Positive-lift reentry | Produces positive lift at a positive angle of attack, flattening the trajectory and reducing peak load factor and heat flux |
| Lift control | Adjusts the lift component through roll angle changes to widen the corridor |

### Modern Definition of Reentry Corridor

In modern spacecraft design, the reentry corridor can be defined as a "tube" guiding the vehicle toward a predetermined landing target, within which all constraint conditions (load factor, heat flux, dynamic pressure, etc.) are satisfied. In the drag acceleration $D$ versus velocity $v$ plane, the corridor is bounded by four boundaries, and the reference trajectory must remain within the corridor.

### Relationship with Lift

Ballistic reentry vehicles have a narrow corridor. Vehicles with lift can:

- Achieve reentry through negative lift even when $|\Theta_e| < |\Theta_e|_{\min}$
- Reduce the peak load factor and heat flux through positive lift, thereby lowering $|\Theta_e|_{\max}$

## Application Value

The reentry corridor is the fundamental constraint for reentry vehicle trajectory design. The corridor width directly affects the feasibility and flexibility of reentry missions. Ballistic reentry vehicles have a narrow corridor, limiting landing precision and load factor control capability. Ballistic-lifting and lifting reentry vehicles significantly improve reentry maneuverability and landing precision by exploiting lift to widen the corridor.

## Related Concepts

- [Zero-Angle-of-Attack Reentry](/en/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [Trim Angle of Attack](/en/glossary/fundamentals/trim-angle-of-attack/)
- [Skip Reentry](/en/glossary/fundamentals/skip-reentry/)
- [Stagnation Heat Flux](/en/glossary/fundamentals/stagnation-heat-flux/)
- [Ballistic Coefficient](/en/glossary/fundamentals/ballistic-coefficient/)
- [Reentry Phase](/en/glossary/fundamentals/reentry-phase/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
