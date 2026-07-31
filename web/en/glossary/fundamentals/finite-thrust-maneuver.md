---
title: Finite Thrust Maneuver
description: "Detailed analysis of finite thrust orbital maneuver optimal control models, the Hamiltonian function, and Pontryagin's minimum principle"
keywords: "Finite Thrust Maneuver, optimal control, Hamiltonian function, Pontryagin's minimum principle, switching function"
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Finite Thrust Maneuver
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Finite Thrust Maneuver | Terminology Definition"
  description: Detailed analysis of finite thrust orbital maneuver optimal control models
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Finite Thrust Maneuver | Terminology Definition"
  description: Detailed analysis of finite thrust orbital maneuver optimal control models
  image: /logo.png
permalink: /en/glossary/fundamentals/finite-thrust-maneuver/
---

# Finite Thrust Maneuver

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A finite thrust maneuver is an orbital maneuver that accounts for the finite magnitude of engine thrust and non-instantaneous burn duration. Unlike the impulsive thrust assumption, finite thrust maneuvers require solving a two-point boundary value problem (TPBVP) to obtain the optimal control law, using Pontryagin's minimum principle to determine thrust direction and switching strategy.

## Core Elements

### Optimal Control Model

System dynamics:

$$\dot{\boldsymbol{X}} = f(\boldsymbol{X}, \boldsymbol{u}, t)$$

Performance index:

$$J = \phi[\boldsymbol{X}(t_f), t_f] + \int_{t_0}^{t_f} L(\boldsymbol{X}, \boldsymbol{u}, t)\,dt$$

### Hamiltonian Function

$$H = L(\boldsymbol{X}, \boldsymbol{u}, t) + \boldsymbol{\lambda}^T f(\boldsymbol{X}, \boldsymbol{u}, t)$$

State equation: $\dot{\boldsymbol{X}} = \partial H / \partial \boldsymbol{\lambda}$; co-state equation: $\dot{\boldsymbol{\lambda}} = -\partial H / \partial \boldsymbol{X}$.

### Pontryagin's Minimum Principle

Optimality condition for constrained control:

$$H(\boldsymbol{X}^*, \boldsymbol{u}^*, \boldsymbol{\lambda}^*, t) \leq H(\boldsymbol{X}^*, \boldsymbol{u}^* + \delta\boldsymbol{u}, \boldsymbol{\lambda}^*, t)$$

### Optimal Control Law

Optimal thrust direction in Cartesian coordinates:

$$\boldsymbol{\alpha}^* = -\frac{\boldsymbol{\lambda}_v}{\|\boldsymbol{\lambda}_v\|}$$

The thrust direction is opposite to the velocity co-state direction.

### Switching Function

$$H_T = -\frac{\|\boldsymbol{\lambda}_v\|}{m} - \lambda_m \frac{1}{gI_{sp}}$$

- $H_T > 0$: $T = 0$ (engine off)
- $H_T < 0$: $T = T_{\max}$ (full thrust)
- $H_T = 0$: $0 < T < T_{\max}$ (arc thrust)

### Mass Equation

$$\dot{m} = -\frac{T}{gI_{sp}}$$

## Application Value

Finite thrust maneuver methods are applicable to orbital design for solar electric propulsion (SEP) and other low-thrust propulsion systems. By solving the TPBVP for the optimal thrust strategy, fuel-optimal or time-optimal orbital transfers can be achieved. With advances in low-thrust propulsion technology, finite thrust maneuver methods are increasingly used in deep-space exploration and long-duration on-orbit missions.

## Related Concepts

- [Orbital Maneuver](/en/glossary/fundamentals/orbital-maneuver/)
- [Characteristic Velocity](/en/glossary/fundamentals/characteristic-velocity/)
- [Specific Impulse](/en/glossary/fundamentals/specific-impulse/)
- [Orbit Capture](/en/glossary/fundamentals/orbit-capture/)

## References

- Zheng W, An X, Zhou X, He R. Spaceflight Mechanics [M]. National University of Defense Technology, 2026.
- Jia P, Chen K, et al. Long-Range Rocket Ballistics [M]. National University of Defense Technology Press.
