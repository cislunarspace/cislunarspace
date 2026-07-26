---
title: Velocity Frame
description: A detailed analysis of the definition, axis conventions, relationship with the body frame, and central role of the velocity frame in aerodynamic force analysis
keywords: Velocity Frame, Aerodynamic Force, Lift, Drag, Side Force, Coordinate System, Aircraft
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Velocity Frame
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Velocity Frame | Terminology Definition
  description: A detailed analysis of the definition, axis conventions, and central role of the velocity frame in aerodynamic force analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Velocity Frame | Terminology Definition
  description: A detailed analysis of the definition, axis conventions, and central role of the velocity frame in aerodynamic force analysis
  image: /logo.png
permalink: /en/glossary/fundamentals/velocity-frame/
---

# Velocity Frame

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The velocity frame is a coordinate system established with respect to the direction of the spacecraft's flight velocity, denoted as $o_1 - x_v y_v z_v$ and abbreviated as $V$. The origin of the velocity frame is at the spacecraft's center of mass, and the $x_v$ axis is aligned with the flight velocity direction. It is used to describe the velocity vector state of the spacecraft and the decomposition of aerodynamic forces.

## Core Elements

### Axis Definitions

| Axis | Definition |
| :--- | :--- |
| $o_1 x_v$ | Along the flight velocity direction of the spacecraft |
| $o_1 y_v$ | In the principal plane of symmetry, perpendicular to the $x_v$ axis |
| $o_1 z_v$ | Perpendicular to the $x_v o_1 y_v$ plane, pointing to the right when viewed in the direction of flight |

### Relationship with the Body Frame

The relationship between the velocity frame and the body frame is defined by two angles:

| Angle | Symbol | Definition |
| :--- | :--- | :--- |
| Angle of attack | $\alpha$ | Angle between the projection of the velocity vector in the principal plane of symmetry and the $x_1$ axis |
| Sideslip angle | $\beta$ | Angle between the velocity vector and the principal plane of symmetry |

The direction cosine matrix is:

$$\mathbf{V}_B = \mathbf{R}_x(-\beta) \cdot \mathbf{R}_y(\alpha)$$

### Relationship with the Launch Frame

The relationship between the velocity frame and the launch frame is defined by three angles:

| Angle | Symbol | Definition |
| :--- | :--- | :--- |
| Flight path yaw angle | $\sigma$ | Angle between the projection of the velocity vector in the horizontal plane of the launch frame and the $x$ axis |
| Flight path angle | $\theta$ | Angle between the velocity vector and the horizontal plane |
| Bank angle | $\gamma_v$ | Rotation angle about the velocity vector |

### Aerodynamic Force Decomposition

In the velocity frame, aerodynamic forces naturally decompose into:

| Component | Direction | Physical Meaning |
| :--- | :--- | :--- |
| Drag $X$ | $-x_v$ direction | Opposing the velocity direction |
| Lift $Y$ | $y_v$ direction | Perpendicular to velocity, in the principal plane of symmetry |
| Side force $Z$ | $z_v$ direction | Perpendicular to velocity and the principal plane of symmetry |

## Application Value

The velocity frame is the core coordinate system for aerodynamic force analysis and flight mechanics. Aerodynamic forces (lift, drag, side force) naturally decompose along the velocity frame, and the angle of attack and sideslip angle are key parameters for aerodynamic calculations. During powered-phase trajectory design, the velocity frame is used to establish the equations of motion for the velocity vector. For the reentry phase of cislunar missions, the velocity frame provides the foundation for analyzing aerodynamic heating and deceleration.

## Related Concepts

- [Velocity Inclination Angle](/en/glossary/fundamentals/velocity-inclination-angle/)
- [Trajectory Equation](/en/glossary/fundamentals/trajectory-equation/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
