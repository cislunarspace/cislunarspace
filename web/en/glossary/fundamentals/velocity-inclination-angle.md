---
title: Velocity Inclination Angle
description: A detailed analysis of the definition, relationship with the flight path yaw angle, velocity azimuth angle, and significance in trajectory design
keywords: Velocity Inclination Angle, Flight Path Angle, Velocity Azimuth Angle, Flight Path Yaw Angle, Trajectory Design, Cutoff Point
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Velocity Inclination Angle
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Velocity Inclination Angle | Terminology Definition
  description: A detailed analysis of the definition and significance of the velocity inclination angle in trajectory design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Velocity Inclination Angle | Terminology Definition
  description: A detailed analysis of the definition and significance of the velocity inclination angle in trajectory design
  image: /logo.png
permalink: /en/glossary/fundamentals/velocity-inclination-angle/
---

# Velocity Inclination Angle

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The velocity inclination angle ($\theta$) is the angle between the velocity vector and the horizontal plane ($xoz$ plane) of the launch coordinate system. It describes the direction of the velocity vector in the longitudinal plane. The velocity inclination angle is one of the core variables of the longitudinal equations of motion: at vertical launch, $\theta = 90°$, and at the cutoff point, $\theta = \theta_k^*$.

## Core Elements

### Description of Velocity Direction

The direction of the velocity vector in space is defined by two angles:

| Angle | Symbol | Definition | Described Motion |
|:---|:---|:---|:---|
| Velocity inclination angle | $\theta$ | Angle between the velocity vector and the horizontal plane | Ascent/descent in the longitudinal plane |
| Flight path yaw angle | $\sigma$ | Angle of the velocity vector deviating from the firing plane | Lateral deviation |

### Differential Equation for Velocity Inclination Angle

The variation of the velocity inclination angle is governed by the normal acceleration equation:

$$\dot{\theta} = \frac{1}{mv}(P_e + C_y^\alpha q S_M)\alpha + \frac{g}{v}\cos\theta$$

where the first term is the angular acceleration produced by the normal components of thrust and lift, and the second term is the influence of the normal gravitational component.

### Velocity Azimuth Angle

The velocity azimuth angle $A$ describes the angle between the projection of the velocity vector onto the horizontal plane and the meridian north direction:

$$\tan A = \frac{\dot{z}}{\dot{x}}$$

The relationship between the velocity azimuth angle, the flight path yaw angle $\sigma$, and the firing azimuth angle $A_0$ is:

$$A = A_0 + \sigma$$

### Cutoff-Point Velocity Inclination Angle

The cutoff-point velocity inclination angle $\theta_k^*$ is a key parameter in trajectory design:
- For ballistic missiles, $\theta_k^*$ determines the passive-phase range
- For launch vehicles, $\theta_k^*$ determines the insertion orbit inclination
- The optimal velocity inclination angle varies with range: for short ranges it approaches 45°, and for long ranges it gradually decreases

## Application Value

The velocity inclination angle is a core variable for powered-phase trajectory design and flight program optimization. The design of the pitch program angle is essentially the control of the velocity inclination angle from 90° (vertical launch) to the desired value $\theta_k^*$ at the cutoff point. For ballistic missiles, the accuracy of the velocity inclination angle directly affects the impact point accuracy. For launch vehicles, the velocity inclination angle, together with the speed magnitude, determines the insertion parameters.

## Related Concepts

- [Velocity Frame](/en/glossary/fundamentals/velocity-frame/)
- [Trajectory Equation](/en/glossary/fundamentals/trajectory-equation/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
