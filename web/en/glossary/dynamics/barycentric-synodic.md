---
title: Barycentric Synodic Coordinate System
description: Detailed analysis of the barycentric synodic coordinate system's definition, differences from GRC, and applications in CR3BP analysis
keywords: Barycentric Synodic Coordinate System, CR3BP, Restricted Three-Body Problem, Cislunar Space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Barycentric Synodic Coordinate System
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Barycentric Synodic Coordinate System Explained | Standard CR3BP Coordinate System
  description: Detailed analysis of the barycentric synodic coordinate system's definition, differences from GRC, and applications in CR3BP analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Barycentric Synodic Coordinate System Explained | Standard CR3BP Coordinate System
  description: Detailed analysis of the barycentric synodic coordinate system's definition, differences from GRC, and applications in CR3BP analysis
  image: /logo.png
permalink: /en/glossary/dynamics/barycentric-synodic/
---

# Barycentric Synodic Coordinate System

> Author: Tianjiang Shuo
>
> Reference: 钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Barycentric Synodic Coordinate System has its origin at the Earth-Moon system barycenter and is a rotating coordinate system used as the standard coordinate system for studying the Circular Restricted Three-Body Problem (CR3BP). Under CR3BP conditions, this coordinate system is also called the Earth-Moon system barycentric synodic coordinate system.

In the barycentric synodic coordinate system, the $x_m$ axis points from the barycenter toward the Moon, the $z_m$ axis points in the direction of the system's angular velocity (perpendicular to the Earth-Moon orbital plane), and the $y_m$ axis forms a right-handed Cartesian coordinate system with $x_m$ and $z_m$.

## Coordinate Axis Definition

| Axis | Direction | Description |
|:---|:---|:---|
| **$x_m$ axis** | From Earth-Moon barycenter toward Moon | Rotates with lunar revolution |
| **$z_m$ axis** | In the direction of system angular velocity | Perpendicular to Earth-Moon orbital plane |
| **$y_m$ axis** | $x_m \times z_m$ | Forms right-handed system with $x_m$ and $z_m$ |

## Differences from GRC

| Characteristic | Barycentric Synodic | Geocentric Rotating (GRC) |
|:---|:---|:---|
| **Origin** | Earth-Moon system barycenter | Earth center |
| **x-axis direction** | Toward Moon | Toward Moon |
| **Application** | CR3BP analysis | Orbit design under actual ephemeris conditions |

The barycentric synodic coordinate system uses the common barycenter of the Earth-Moon system as its origin, making it more suitable for analyzing the motion of two primary bodies under the gravitational influence of the third body.

## Applications in CR3BP

### Normalized Units

In the barycentric synodic coordinate system, common normalized units for CR3BP are:

- **Length unit [L]**: Distance between Earth and Moon
- **Mass unit [M]**: Sum of Earth and Moon masses
- **Time unit [T]**: $\sqrt{[L]^3 / (G[M])}$

### Equations of Motion

In the barycentric synodic coordinate system, the CR3BP equations of motion have standard form:

$$\ddot{\boldsymbol{\rho}} - 2\boldsymbol{\Omega} \times \dot{\boldsymbol{\rho}} = \nabla U^*(\boldsymbol{\rho})$$

Where $\boldsymbol{\Omega} = [0, 0, 1]^T$ is the angular velocity vector (normalized), and $U^*(\boldsymbol{\rho})$ is the pseudo-potential energy function.

### Libration Point Positions

In the barycentric synodic coordinate system, L1, L2, and L3 points lie on the $x_m$ axis, while L4 and L5 points form an equilateral triangle with Earth and Moon.

## Limitations

The barycentric synodic coordinate system is based on CR3BP assumptions:
1. Both primary bodies orbit the barycenter in circular motion
2. The barycenter is an inertial point
3. The orbital plane is fixed in inertial space

For the real Earth-Moon system, factors such as lunar orbital eccentricity and solar gravitational perturbations mean these assumptions are not fully satisfied, requiring analysis using GRC or ephemeris models.

## Related Concepts

- [Geocentric Rotating Coordinate System (GRC)](/en/glossary/dynamics/grc/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [J2000 Geocentric Equatorial Coordinate System](/en/glossary/dynamics/j2000-coordinate/)

## References

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Szebehely V. Theory of orbits: the restricted problem of three bodies[M]. Academic Press, 1968.
