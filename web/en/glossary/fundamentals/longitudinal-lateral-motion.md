---
title: Longitudinal and Lateral Motion
description: A detailed analysis of longitudinal and lateral motion equation definitions, decoupling conditions, and their application in trajectory analysis
keywords: Longitudinal Motion, Lateral Motion, Trajectory Equation, Firing Plane, Decoupling
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Longitudinal and Lateral Motion
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Longitudinal and Lateral Motion | Terminology Definition
  description: A detailed analysis of longitudinal and lateral motion equation definitions and their application in trajectory analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Longitudinal and Lateral Motion | Terminology Definition
  description: A detailed analysis of longitudinal and lateral motion equation definitions and their application in trajectory analysis
  image: /logo.png
permalink: /en/glossary/fundamentals/longitudinal-lateral-motion/
---

# Longitudinal and Lateral Motion

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

In the velocity coordinate frame, through the small-angle assumption and the instantaneous balance assumption, the spatial equations of motion can be decomposed into two independent sets of equations: the longitudinal motion equations describe motion within the firing plane (the $xoy$ plane of the launch coordinate frame), and the lateral motion equations describe motion perpendicular to the firing plane. This decomposition achieves decoupling of the three-dimensional motion, greatly simplifying trajectory analysis.

## Core Elements

### Longitudinal Motion Equations

Longitudinal motion describes the vehicle's motion within the firing plane, with the following principal parameters:

| Parameter | Symbol | Description |
| :--- | :--- | :--- |
| Velocity magnitude | $v$ | Flight speed scalar |
| Flight path angle | $\theta$ | Angle between the velocity vector and the horizontal plane |
| Horizontal position | $x$ | Component along the launch frame $x$-axis |
| Vertical position | $y$ | Component along the launch frame $y$-axis |

The longitudinal motion equations are:

$$\begin{cases} m\dot{v} = P_e - C_x q S_M + mg\sin\theta \\ mv\dot{\theta} = (P_e + C_y^\alpha q S_M)\alpha + mg\cos\theta \\ \dot{x} = v\cos\theta \\ \dot{y} = v\sin\theta \end{cases}$$

### Lateral Motion Equations

Lateral motion describes the vehicle's deviation from the firing plane, with the following principal parameters:

| Parameter | Symbol | Description |
| :--- | :--- | :--- |
| Heading error angle | $\sigma$ | Angle of velocity vector deviation from the firing plane |
| Lateral position | $z$ | Component along the launch frame $z$-axis |

Lateral motion is typically small and is maintained near the firing plane by the lateral control system.

### Decoupling Conditions

The conditions for decoupling longitudinal and lateral motion:

- Small-angle assumption ($\alpha$, $\beta$, $\sigma$, $\nu$ are small quantities)
- Instantaneous balance assumption
- Neglecting Earth rotation effects (for preliminary calculations)

In precise calculations, longitudinal and lateral motion are coupled and must be solved simultaneously.

## Application Value

The decomposition of longitudinal and lateral motion is the foundational method for powered-phase trajectory analysis. Longitudinal motion determines the vehicle's speed, flight altitude, and range, forming the core of trajectory design. Lateral motion reflects the degree of deviation from the firing plane and must be suppressed by the lateral control system. During the preliminary design phase, the longitudinal trajectory is typically designed first, followed by analysis of lateral motion stability.

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
