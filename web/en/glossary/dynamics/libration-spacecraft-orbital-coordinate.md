---
title: Libration Point Spacecraft Orbital Coordinate System (Libration Point Spacecraft Orbital Coordinate System)
description: Detailed analysis of libration point spacecraft orbital coordinate system definition, coordinate axis directions, and application in navigation and orbit keeping
keywords: Libration Point Spacecraft Orbital Coordinate System, Orbital Coordinate System, Spacecraft Coordinate System, Libration Point
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Libration Point Spacecraft Orbital Coordinate System
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: "Libration Point Spacecraft Orbital Coordinate System Explained | Navigation Reference"
  description: Detailed analysis of libration point spacecraft orbital coordinate system definition, coordinate axis directions, and application in navigation and orbit keeping
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Libration Point Spacecraft Orbital Coordinate System Explained | Navigation Reference"
  description: Detailed analysis of libration point spacecraft orbital coordinate system definition, coordinate axis directions, and application in navigation and orbit keeping
  image: /logo.png
permalink: /en/glossary/dynamics/libration-spacecraft-orbital-coordinate/
---

# Libration Point Spacecraft Orbital Coordinate System (Libration Point Spacecraft Orbital Coordinate System)

> Author: Tianjiang Shuo
>
> Reference: 钱霙婧(2014) "Research on Autonomous Navigation and Orbit Keeping of Spacecraft on Quasi-Periodic Orbits in Cislunar Space"
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Libration Point Spacecraft Orbital Coordinate System ($\mathcal{O}_o - X_o Y_o Z_o$) is a local coordinate system with its origin at the spacecraft center of mass, specifically used to describe spacecraft motion near libration point orbits. This coordinate system plays an important role in orbit design and orbit keeping research.

## Coordinate Axis Definition

| Axis | Direction | Description |
| :--- | :--- | :--- |
| **$Z_0$ axis** | From spacecraft center of mass toward central body center of mass | Radial direction |
| **$X_0$ axis** | In the instantaneous orbital plane, perpendicular to $Z_0$ axis, pointing in velocity direction | Tangential direction |
| **$Y_0$ axis** | Parallel to the normal vector of the instantaneous orbital plane | Forms right-handed system with $X_0$, $Z_0$ |

## Geometric Characteristics

The Libration Point Spacecraft Orbital Coordinate System has the following characteristics:

1. **Following motion**: The coordinate system moves with the spacecraft along its orbit, with the origin following spacecraft position changes
2. **Orbit adaptive**: The $Z_0$ axis always points toward the central body (Earth), and the $X_0$ axis points in the velocity direction
3. **Local nature**: A local coordinate system for describing spacecraft relative orbital motion

## Application in Navigation and Orbit Keeping

### Orbit Deviation Representation

In the orbital coordinate system, spacecraft deviations from the nominal orbit can be decomposed into:

- **Radial deviation**: $Z_0$ direction component
- **Tangential deviation**: $X_0$ direction component
- **Normal deviation**: $Y_0$ direction component

This decomposition facilitates understanding the physical meaning of orbit deviations and provides intuitive reference directions for orbit control.

### Impulsive Maneuver Design

In orbit keeping, impulsive maneuver directions are typically expressed in the orbital coordinate system:

- **Radial impulse**: Along $Z_0$ axis direction
- **Tangential impulse**: Along $X_0$ axis direction
- **Normal impulse**: Along $Y_0$ axis direction

### State Representation

The state vector in the orbital coordinate system facilitates establishing correspondence with orbital elements, simplifying orbital dynamics analysis.

## Relationship with Other Coordinate Systems

| Coordinate System | Origin | Purpose |
| :--- | :--- | :--- |
| **Orbital Coordinate System** | Spacecraft center of mass | Describes relative orbital motion |
| **Body Coordinate System** | Spacecraft center of mass | Describes attitude and sensor installation |
| **GRC/LRC** | Earth center / L2 point | Describes absolute position and velocity |

## Related Concepts

- [Libration Point Spacecraft Body Coordinate System](/en/glossary/dynamics/libration-spacecraft-body-coordinate/)
- [Geocentric Rotating Coordinate System (GRC)](/en/glossary/dynamics/grc/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)

## References

- 钱霙婧. 地月空间拟周期轨道上航天器自主导航与轨道保持研究[D]. 哈尔滨工业大学, 2014.
