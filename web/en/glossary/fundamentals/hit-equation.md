---
title: Hit Equation
description: Definition, derivation, solution methods, and application of the hit equation in ballistic missile range calculation
keywords: Hit Equation, Range Angle, Passive Phase Range, Burnout Parameters, Ballistic Missile
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Hit Equation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Hit Equation | Terminology Definition
  description: Definition and application of the hit equation in ballistic missile range calculation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hit Equation | Terminology Definition
  description: Definition and application of the hit equation in ballistic missile range calculation
  image: /logo.png
permalink: /en/glossary/fundamentals/hit-equation/
---

# Hit Equation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The hit equation is the core equation that relates the passive-phase angular range $\beta_{kc}$ of a ballistic missile to its burnout parameters:

$$\frac{r_k}{R_E} = \frac{1 - \cos\beta_{kc}}{\gamma_k \cos^2\Theta_k} + \frac{\cos(\beta_{kc} + \Theta_k)}{\cos\Theta_k}$$

where $r_k$ is the geocentric distance at burnout, $R_E$ is the Earth's radius, $\gamma_k$ is the energy parameter, and $\Theta_k$ is the local flight-path angle. This equation directly links the missile's range to its cutoff point parameters and serves as the foundation for trajectory design and impact accuracy analysis.

## Core Elements

### Solution Method

The hit equation can be transformed via the half-angle formula into a quadratic equation in $\tan(\beta_{kc}/2)$:

$$A\tan^2\frac{\beta_{kc}}{2} - B\tan\frac{\beta_{kc}}{2} + C = 0$$

where the coefficients are:

| Coefficient | Expression |
| :--- | :--- |
| $A$ | $2R_E(1+\tan^2\Theta_k) - \gamma_k(R_E + r_k)$ |
| $B$ | $2\gamma_k R_E \tan\Theta_k$ |
| $C$ | $\gamma_k(R_E - r_k)$ |

Since $A \geq 0$ and $C \leq 0$, the equation has a unique valid solution:

$$\tan\frac{\beta_{kc}}{2} = \frac{B + \sqrt{B^2 - 4AC}}{2A}$$

### Passive-Phase Range and Free-Flight Range

| Range Type | Definition | Geocentric Distance Substitution |
| :--- | :--- | :--- |
| Passive-phase range $L_{kc}$ | Great-circle arc from the subsatellite point K' at burnout to the impact point C | Impact point $r_c = R_E$ |
| Free-flight range $L_{ke}$ | Great-circle arc from K' at burnout to the subsatellite point E' at reentry | Reentry point $r_e = r_k$ |

A compact formula for the free-flight angular range:

$$\sin\frac{\beta_{ke}}{2} = \frac{\gamma_k}{2e}\sin 2\Theta_k$$

### Angular Range and Absolute Range

The angular range $\beta$ relates to the absolute range $L$ by $L = R_E \beta$. When the energy parameter $\gamma_k$ and burnout altitude $h_k$ are given, the angular range always has a maximum value, and the corresponding flight-path angle is the optimal flight-path angle.

## Application Value

The hit equation is the core tool for ballistic missile design. It enables direct computation of the missile's range from burnout parameters, as well as reverse computation of the required burnout parameters for a specified range. In guidance system design, the hit equation is used to establish the relationship between range deviations and burnout parameter deviations, serving as the starting point for error coefficient modeling.

## Related Concepts

- [Range Error Coefficient](/en/glossary/fundamentals/range-error-coefficient/)

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics [空天飞行力学](M). National University of Defense Technology, 2026.
- Jia Peiran, Chen Kejun, et al. Long-Range Rocket Ballistics [远程火箭弹道学](M). National University of Defense Technology Press.
