---
title: Gravity vs Gravitation
description: Distinction between gravity and gravitation, the effect of centrifugal inertia force, gravity acceleration computation, and significance in flight mechanics
keywords: Gravity, Gravitation, Centrifugal Inertia Force, Gravitational Acceleration, Earth Rotation
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Gravity vs Gravitation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Gravity vs Gravitation | Terminology Definition
  description: Distinction between gravity and gravitation and their significance in flight mechanics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gravity vs Gravitation | Terminology Definition
  description: Distinction between gravity and gravitation and their significance in flight mechanics
  image: /logo.png
permalink: /en/glossary/fundamentals/gravity-vs-gravitation/
---

# Gravity vs Gravitation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Gravitation is the universal gravitational attraction exerted by the Earth on a space object, directed toward the geocenter, and depends only on the object's mass and geocentric distance. Gravity is the resultant force of gravitation and the centrifugal inertia force caused by Earth's rotation. When analyzing the motion of an object in a non-inertial coordinate system fixed to the Earth, gravity (not gravitation) must be used.

$$m\mathbf{g}' = m\mathbf{g} + m\mathbf{a}_e'$$

where $\mathbf{g}$ is the gravitational acceleration, $\mathbf{a}_e' = -\boldsymbol{\omega}_e \times (\boldsymbol{\omega}_e \times \mathbf{r})$ is the centrifugal acceleration, and $\mathbf{g}'$ is the gravity acceleration.

## Core Elements

### Comparison of Gravitation and Gravity

| Characteristic | Gravitation | Gravity |
|:---|:---|:---|
| Source | Universal gravitation | Gravitation + centrifugal inertia force |
| Direction | Toward the geocenter | Deviates from the geocenter (toward the equator) |
| Magnitude variation | Varies only with geocentric distance | Varies with geocentric distance and latitude |
| Applicable coordinate system | Inertial frame | Earth-fixed frame |

### Effect of Centrifugal Acceleration

Centrifugal acceleration lies in the meridian plane, perpendicular to the Earth's rotation axis and directed outward. Its radial and latitude components are:

$$\begin{cases} a_{er}' = r\omega_e^2 \cos^2\phi \\ a_{e\phi}' = -r\omega_e^2 \sin\phi\cos\phi \end{cases}$$

At the equator, the ratio of centrifugal acceleration to gravitational acceleration is $q \approx 3.46 \times 10^{-3}$, on the same order of magnitude as the Earth's flattening $\alpha_e$.

### Gravity Acceleration Computation

The radial and latitude components of gravity acceleration are:

$$\begin{cases} g_r' = -\frac{fM}{r^2}\left[1 + J\left(\frac{a_e}{r}\right)^2(1 - 3\sin^2\phi) - q\left(\frac{r}{a_e}\right)^3\cos^2\phi\right] \\ g_\phi' = -\frac{fM}{r^2}\left[J\left(\frac{a_e}{r}\right)^2 + \frac{q}{2}\left(\frac{r}{a_e}\right)^3\right]\sin 2\phi \end{cases}$$

where $J$ is the zonal harmonic coefficient of the Earth's gravitational field.

## Application Value

Correctly distinguishing between gravity and gravitation is fundamental to formulating vehicle equations of motion. In the launch frame (Earth-fixed frame), gravity acceleration is used; in the geocentric inertial frame, gravitational acceleration is used. Confusing the two leads to systematic errors in trajectory computation. For cislunar space missions, gravity must be used near the Earth; at greater distances from the Earth, the difference between the two becomes negligible.

## Related Concepts

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics (空天飞行力学)[M]. National University of Defense Technology, 2026.
- Ren Xuan, Xiao Feng. Artificial Satellite Orbital Mechanics (人造地球卫星轨道力学)[M]. National University of Defense Technology Press.
