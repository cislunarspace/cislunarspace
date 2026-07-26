---
title: Trajectory Equation
description: A detailed analysis of the powered phase trajectory equation composition, forms in the launch and velocity frames, and numerical solution methods
keywords: Trajectory Equation, Powered Phase, Center-of-Mass Equations of Motion, Longitudinal Motion, Lateral Motion, Numerical Integration
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Trajectory Equation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Trajectory Equation | Terminology Definition
  description: A detailed analysis of the composition and numerical solution methods of the powered phase trajectory equation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Trajectory Equation | Terminology Definition
  description: A detailed analysis of the composition and numerical solution methods of the powered phase trajectory equation
  image: /logo.png
permalink: /en/glossary/fundamentals/trajectory-equation/
---

# Trajectory Equation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The trajectory equation is a system of differential equations describing the center-of-mass motion of a spacecraft during engine operation. The trajectory equation projects thrust, aerodynamic forces, gravity, and control forces onto a selected coordinate system in a unified manner and solves for the spacecraft's velocity, position, and attitude as functions of time through numerical integration.

## Core Elements

### Basic Composition

The trajectory equation consists of the following components:

| Component | Content | Description |
| :--- | :--- | :--- |
| Dynamic equations | Newton's second law projected onto each axis | Core equations |
| Kinematic equations | Differential relationships between velocity and position | $\dot{x} = v\cos\theta$, etc. |
| Control equations | Attitude control commands | $\delta_\varphi = a_0^\varphi(\varphi - \varphi_{pr})$ |
| Supplementary equations | Auxiliary computations for mass, altitude, angle of attack, etc. | Closed-form equation system |

### Form in the Launch Frame

In the launch frame, the trajectory equation includes 6 dynamic equations (3 for center of mass + 3 for rotation about center of mass), along with kinematic and supplementary equations. The center-of-mass dynamic equation is:

$$m\frac{d^2\mathbf{r}}{dt^2} = \mathbf{P} + \mathbf{R} + \mathbf{F}_c + m\mathbf{g} + \mathbf{F}_k'$$

Projected onto the three axes of the launch frame, this yields a system of scalar equations suitable for numerical integration.

### Form in the Velocity Frame

Selecting the velocity frame as the computation frame allows the trajectory equation to be separated into longitudinal and lateral equations of motion:

| Equation Type | Key Parameters | Described Motion |
| :--- | :--- | :--- |
| Longitudinal equations | $v$, $\theta$, $x$, $y$ | Motion in the firing plane |
| Lateral equations | $\sigma$, $z$ | Motion perpendicular to the firing plane |

### Cutoff-Point Parameters

The trajectory equation is integrated up to the cutoff time $t_k$ (fuel depletion or commanded shutdown) to obtain the cutoff-point parameters $(v_k, \theta_k, x_k, y_k)$. These parameters determine the subsequent trajectory of the passive phase.

## Application Value

The trajectory equation is the core tool for spacecraft design and mission analysis. By solving the trajectory equation, the flight trajectory can be predicted, cutoff-point parameters can be determined, and flight performance can be analyzed. For ballistic missiles, the cutoff-point parameters determine impact accuracy; for launch vehicles, they determine insertion accuracy. The trajectory equation also serves as the foundation for trajectory optimization and guidance algorithm design.

## Related Concepts

- [Velocity Frame](/en/glossary/fundamentals/velocity-frame/)
- [Velocity Inclination Angle](/en/glossary/fundamentals/velocity-inclination-angle/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
