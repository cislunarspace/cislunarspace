---
title: Specific Angular Momentum
description: A detailed analysis of the definition, physical significance, conservation properties, and role of specific angular momentum in describing the orbital plane
keywords: "Specific Angular Momentum, Angular Momentum Conservation, Orbital Plane, Areal Velocity, Kepler's Second Law"
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Specific Angular Momentum
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Specific Angular Momentum | Terminology Definition"
  description: A detailed analysis of the definition, conservation properties, and role of specific angular momentum in describing the orbital plane
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Specific Angular Momentum | Terminology Definition"
  description: A detailed analysis of the definition, conservation properties, and role of specific angular momentum in describing the orbital plane
  image: /logo.png
permalink: /en/glossary/fundamentals/specific-angular-momentum/
---

# Specific Angular Momentum

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Specific angular momentum ($\boldsymbol{h}$) is the angular momentum per unit mass in two-body motion, defined as the cross product of the position vector and the velocity vector:

$$\boldsymbol{h} = \boldsymbol{r} \times \boldsymbol{v}$$

Specific angular momentum is perpendicular to the instantaneous plane of motion. Its direction describes the orientation of the orbital plane in inertial space, and its magnitude $h = rv\cos\Theta$ is proportional to the areal velocity ($h = 2\dot{S}$), which is the mathematical statement of Kepler's second law.

## Core Elements

### Conservation Property

In the two-body problem, differentiating $\boldsymbol{h}$ yields:

$$\frac{d\boldsymbol{h}}{dt} = \boldsymbol{v} \times \boldsymbol{v} + \boldsymbol{r} \times \ddot{\boldsymbol{r}} = \boldsymbol{0}$$

Therefore, specific angular momentum is a constant vector in inertial space, and angular momentum is conserved in the two-body system. This means the spacecraft always moves in a fixed plane passing through the center of the Earth.

### Relationship with Orbital Elements

The three components $h_X, h_Y, h_Z$ of the specific angular momentum are three integration constants for solving the two-body equations of motion, and can equivalently be replaced by:

| Parameter | Definition | Described Property |
| :--- | :--- | :--- |
| Inclination $i$ | $\cos i = h_Z / h$ | Angle between the orbital plane and the equatorial plane |
| RAAN $\Omega$ | Determined by $h_X, h_Y$ | Orientation of the orbital plane in the equatorial plane |
| Magnitude $h$ | $h = \|\boldsymbol{h}\|$ | Related to orbit size |

### Areal Velocity

The relationship between the magnitude of specific angular momentum and the areal velocity is:

$$h = 2\frac{dS}{dt} = 2\dot{S}$$

The constant areal velocity is Kepler's second law, indicating that the spacecraft moves fastest at perigee and slowest at apogee.

## Application Value

Specific angular momentum is the core parameter for describing the orientation of the orbital plane and serves as the foundation for deriving the orbital equation and the vis-viva equation. Through the conservation of specific angular momentum, the orientation of the orbital plane in inertial space can be determined, thereby defining the inclination and RAAN. The magnitude of the specific angular momentum also determines the semi-latus rectum $p = h^2/\mu_E$, indirectly reflecting the size of the orbit.

## Related Concepts

- [Orbital Equation](/en/glossary/fundamentals/orbital-equation/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
