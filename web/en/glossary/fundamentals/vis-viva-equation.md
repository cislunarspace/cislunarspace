---
title: Vis-Viva Equation
description: A detailed analysis of the vis-viva equation — its definition, derivation, physical meaning, and application across different conic orbits
keywords: vis-viva equation, mechanical energy conservation, specific mechanical energy, escape velocity, first cosmic velocity, second cosmic velocity
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Vis-Viva Equation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Vis-Viva Equation | Terminology Definition"
  description: A detailed analysis of the vis-viva equation — its definition, physical meaning, and application in orbital mechanics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Vis-Viva Equation | Terminology Definition"
  description: A detailed analysis of the vis-viva equation — its definition, physical meaning, and application in orbital mechanics
  image: /logo.png
permalink: /en/glossary/fundamentals/vis-viva-equation/
---

# Vis-Viva Equation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The vis-viva equation is the expression of the conservation of mechanical energy in two-body motion. It establishes the relationship between the spacecraft's speed $v$, the radial distance from the central body $r$, and the orbital semi-major axis $a$:

$$v^2 = \mu_E\left(\frac{2}{r} - \frac{1}{a}\right)$$

This equation shows that once the orbital semi-major axis is known, the spacecraft's speed at any radial distance can be directly calculated, and that greater radial distance corresponds to lower speed.

## Core Elements

### Specific Mechanical Energy

From the vis-viva equation, the specific mechanical energy $\varepsilon$ depends solely on the semi-major axis:

$$\varepsilon = \frac{1}{2}v^2 - \frac{\mu_E}{r} = -\frac{\mu_E}{2a}$$

| Orbit Type | Semi-Major Axis | Specific Mechanical Energy |
|:---|:---|:---|
| Circular / Elliptical orbit | $a > 0$ | $\varepsilon < 0$ |
| Parabolic orbit | $a \to \infty$ | $\varepsilon = 0$ |
| Hyperbolic orbit | $a < 0$ | $\varepsilon > 0$ |

### Characteristic Velocities

| Velocity | Formula | Meaning |
|:---|:---|:---|
| First cosmic velocity | $v_I = \sqrt{\mu_E/R_E} = 7.9 \, \text{km/s}$ | Circular orbit velocity at Earth's surface |
| Second cosmic velocity | $v_{II} = \sqrt{2\mu_E/R_E} = 11.2 \, \text{km/s}$ | Escape velocity at Earth's surface |
| Escape velocity | $v_{\text{esc}} = \sqrt{2\mu_E/r}$ | Escape velocity at any altitude |

### Velocity Direction

The angle between the velocity vector and the local horizontal plane is the flight-path angle $\Theta$:

$$\tan\Theta = \frac{e\sin f}{1 + e\cos f}$$

At perigee and apogee, $\Theta = 0°$ (velocity is horizontal). At the endpoints of the semi-minor axis of an elliptical orbit, $|\Theta|$ reaches its maximum value of $\sin^{-1}e$.

## Application Value

The vis-viva equation is one of the most frequently used equations in orbital mechanics. It directly relates speed to orbital position without requiring time integration. In orbit design, it is used to determine the velocity increments required for orbital maneuvers. In orbit determination, it helps infer orbital parameters from observational data. In launch window calculations, it is used to establish the required injection velocity.

## Related Concepts

- [Two-Body Problem](/en/glossary/fundamentals/two-body-problem/)
- [Orbital Elements](/en/glossary/fundamentals/orbital-elements/)
- [True Anomaly](/en/glossary/fundamentals/true-anomaly/)
- [Kepler's Equation](/en/glossary/fundamentals/kepler-equation/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
