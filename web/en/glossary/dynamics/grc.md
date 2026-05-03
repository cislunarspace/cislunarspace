---
title: Geocentric Rotating Coordinate System (GRC)
description: Detailed analysis of GRC definition, relationship with J2000, and application in cislunar libration point orbit design
keywords: Geocentric Rotating Coordinate System, GRC, Rotating Coordinate System, Synodic Coordinate System, Cislunar Space, Libration Point
author: 天疆说
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Geocentric Rotating Coordinate System (GRC)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: Geocentric Rotating Coordinate System Explained | Libration Point Orbit Design
  description: Detailed analysis of GRC definition, relationship with J2000, and application in cislunar libration point orbit design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Geocentric Rotating Coordinate System Explained | Libration Point Orbit Design
  description: Detailed analysis of GRC definition, relationship with J2000, and application in cislunar libration point orbit design
  image: /logo.png
permalink: /en/glossary/dynamics/grc/
---

# Geocentric Rotating Coordinate System (Geocentric Rotating Coordinate System, GRC)

> Author: 天疆说
>
> Reference: 钱霙婧(2014)《地月空间拟周期轨道上航天器自主导航与轨道保持研究》
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Geocentric Rotating Coordinate System (GRC), also known as the Geocentric Synodic Coordinate System, is one of the commonly used non-inertial coordinate systems in cislunar orbital mechanics research. GRC takes the Earth center as the origin, with the x-axis pointing from Earth center toward the Moon, the z-axis pointing in the direction of instantaneous lunar orbital angular momentum, and the y-axis forming a right-handed Cartesian coordinate system with x and z axes.

In the Circular Restricted Three-Body Problem, GRC simplifies to the Geocentric Synodic Coordinate System with fixed angular velocity direction; under actual ephemeris conditions, GRC's angular velocity varies with time due to lunar orbital precession and nutation.

## Coordinate Axis Definition

| Axis | Direction | Description |
|:---|:---|:---|
| **x-axis** | From Earth center toward Moon | Varies with lunar position in real-time |
| **z-axis** | Direction of instantaneous lunar orbital angular momentum | Perpendicular to lunar orbital plane |
| **y-axis** | x × z | Forms right-handed system with x and z |

## Relationship with J2000 Inertial Coordinate System

The transformation between GRC and J2000 Geocentric Inertial Coordinate System involves:

1. **Lunar position**: Obtain lunar position in J2000 system $\mathbf{R}_M$ from ephemeris data
2. **Lunar velocity**: Obtain lunar velocity in J2000 system $\mathbf{V}_M$ from ephemeris data
3. **Angular velocity calculation**: $\boldsymbol{\omega} = \mathbf{R}_M \times \mathbf{V}_M / |\mathbf{R}_M|^2$

The transformation matrix is determined by the Moon's position and velocity vectors.

## Application in Orbit Design

### Dynamical Advantages of Synodic Coordinate System

In the Geocentric Synodic Coordinate System, the libration point problem simplifies to gravitational attraction in a rotating coordinate system. CR3BP equations of motion have a concise form in GRC:

$$\ddot{\mathbf{r}} - 2\boldsymbol{\omega} \times \dot{\mathbf{r}} = \nabla U$$

Where $\boldsymbol{\omega}$ is the angular velocity vector, and $U$ is the gravitational potential function.

### Instantaneous Libration Points

In GRC, libration point positions are functions of time (instantaneous libration points), because the lunar orbital motion causes the x-axis direction to continuously change. This differs from fixed libration point positions in CR3BP.

### Coordinate Transformation Considerations

钱霙婧 (2014) pointed out that traditional methods make a two-body assumption for angular velocity during coordinate transformation between GRC and J2000, which may introduce errors in certain cases.

## GRC and Other Coordinate Systems

| Coordinate System | Origin | Characteristics |
|:---|:---|:---|
| **GRC** | Earth center | x-axis toward Moon, z-axis toward lunar orbital angular momentum |
| **LRC** | L2 point | x, z, y axes parallel to GRC |
| **Barycentric Synodic** | Earth-Moon barycenter | Used for CR3BP analysis |
| **J2000** | Earth center | Inertial system, X-axis toward mean vernal equinox |

## Related Concepts

- [J2000 Geocentric Equatorial Coordinate System](/en/glossary/dynamics/j2000-coordinate/)
- [L2-centered Rotating Coordinate System (LRC)](/en/glossary/dynamics/lrc/)
- [Barycentric Synodic Coordinate System](/en/glossary/dynamics/barycentric-synodic/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Ephemeris Model](/en/glossary/dynamics/ephemeris-model/)

## References

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Szebehely V. Theory of orbits: the restricted problem of three bodies[M]. Academic Press, 1968.
