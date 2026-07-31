---
title: L2-centered Rotating Coordinate System (L2-centered Rotating Coordinate System, LRC)
description: Detailed analysis of L2-centered rotating coordinate system definition, relationship with GRC, and application in L2 orbit design
keywords: L2-centered Rotating Coordinate System, LRC, Libration Point Coordinate System, L2 Orbit, Cislunar Space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: L2-centered Rotating Coordinate System (LRC)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: "L2-centered Rotating Coordinate System Explained | Libration Point Local Analysis"
  description: Detailed analysis of L2-centered rotating coordinate system definition, relationship with GRC, and application in L2 orbit design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "L2-centered Rotating Coordinate System Explained | Libration Point Local Analysis"
  description: Detailed analysis of L2-centered rotating coordinate system definition, relationship with GRC, and application in L2 orbit design
  image: /logo.png
permalink: /en/glossary/dynamics/lrc/
---

# L2-centered Rotating Coordinate System (L2-centered Rotating Coordinate System, LRC)

> Author: Tianjiang Shuo
>
> Reference: 钱霙婧(2014) "Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The L2-centered Rotating Coordinate System (LRC) is a local rotating coordinate system with its origin at the Earth-Moon L2 libration point. The $x_2$, $z_2$, and $y_2$ axes of LRC are parallel to the $x$, $z$, and $y$ axes in the Geocentric Rotating Coordinate System (GRC), respectively.

In the Circular Restricted Three-Body Problem, LRC simplifies to the L2 Libration Point Synodic Coordinate System, with the origin fixed at the Earth-Moon L2 point under CR3BP conditions. Under real ephemeris conditions, the origin of LRC is at the instantaneous L2 point that varies with time.

## Coordinate Axis Definition

| Axis | Direction | Description |
| :--- | :--- | :--- |
| **$x_2$ axis** | Parallel to GRC x-axis | Along Earth-Moon line direction |
| **$z_2$ axis** | Parallel to GRC z-axis | Points toward instantaneous lunar orbital angular momentum direction |
| **$y_2$ axis** | $x_2 \times z_2$ | Forms right-handed system with $x_2$, $z_2$ |

## Relationship with GRC

The transformation between LRC and GRC is:

$$\mathbf{r}_{LRC} = \mathbf{r}_{GRC} - \mathbf{r}_{L2/GRC}$$

Where $\mathbf{r}_{L2/GRC}$ is the position vector of L2 point in GRC.

Since LRC and GRC axes are parallel, transformation between the two coordinate systems only involves translation, no rotation required.

## Application in L2 Orbit Design

### Local Linearized Analysis

In LRC, the L2 point is at the coordinate origin, facilitating local linearized analysis of orbits. The linearized dynamics equations at the L2 point have the standard Hill equation form:

$$\ddot{\mathbf{r}} - 2\boldsymbol{\omega} \times \dot{\mathbf{r}} = \nabla^2 U(\mathbf{r}_L2) \cdot \mathbf{r}$$

### Halo Orbit Design

LRC is a commonly used coordinate system for designing Earth-Moon L2 Halo orbits. In LRC, the symmetry of Halo orbits is more easily captured, facilitating use of analytical solutions for initial guesses.

### Transformation with J2000

Transformation between LRC and J2000 geocentric inertial coordinate system requires two steps:

1. LRC → GRC: Translation using L2 point position in GRC
2. GRC → J2000: Rotation using instantaneous lunar position and angular velocity

## Difference Between LRC and L2 Libration Point Synodic Coordinate System

| Coordinate System | Origin Position | Angular Velocity |
| :--- | :--- | :--- |
| **LRC** | Instantaneous L2 point (varies with time) | Varies with lunar orbit |
| **L2 Synodic Coordinate System** | Fixed L2 point under CR3BP conditions | Constant (CR3BP assumption) |

## Related Concepts

- [Geocentric Rotating Coordinate System (GRC)](/en/glossary/dynamics/grc/)
- [J2000 Geocentric Equatorial Inertial Coordinate System](/en/glossary/dynamics/j2000-coordinate/)
- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
- Farquhar R W, Kamel A A. Quasi-periodic orbits about the translunar libration point[J]. Celestial Mechanics, 1973.
