---
title: Absolute Range
description: Detailed analysis of the definition of absolute range, calculation methods for passive-phase and free-flight-phase range, and the relationship with powered-phase terminal parameters
keywords: Absolute Range, passive phase range, free-flight phase range, angular range, range angle
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Absolute Range
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Absolute Range | Terminology Definition
  description: Detailed analysis of absolute range definition and calculation methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Absolute Range | Terminology Definition
  description: Detailed analysis of absolute range definition and calculation methods
  image: /logo.png
permalink: /en/glossary/fundamentals/absolute-range/
---

# Absolute Range

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Absolute range is the arc length of the great circle formed by the intersection of the ballistic plane with the Earth's surface, describing the ground distance of a ballistic missile from engine cutoff to impact. The passive-phase absolute range $L_{kc}$ consists of the free-flight-phase range $L_{ke}$ and the reentry-phase range $L_{ec}$:

$$L_{kc} = L_{ke} + L_{ec}$$

## Core Elements

### Angular Range and Absolute Range

The geocentric angle subtended by the great circle arc is called the angular range. Its relationship to absolute range is:

$$L_{kc} = R_E \beta_{kc}, \quad L_{ke} = R_E \beta_{ke}, \quad L_{ec} = R_E \beta_{ec}$$

where $\beta_{kc} = \beta_{ke} + \beta_{ec}$.

### Free-Flight-Phase Angular Range

The free-flight-phase angular range is determined by the powered-phase terminal parameters. Two commonly used forms are:

**Tangent formula**:
$$\tan\frac{\beta_{ke}}{2} = \frac{\gamma_k \sin\Theta_k \cos\Theta_k}{1 - \gamma_k \cos^2\Theta_k}$$

**Sine formula** (compact form, commonly used in practice):
$$\sin\frac{\beta_{ke}}{2} = \frac{\gamma_k}{2e}\sin 2\Theta_k$$

### Passive-Phase Angular Range

The passive-phase angular range must be solved through the hit equation:

$$\tan\frac{\beta_{kc}}{2} = \frac{B + \sqrt{B^2 - 4AC}}{2A}$$

where $A$, $B$, and $C$ are determined by the powered-phase terminal parameters $r_k$, $\gamma_k$, $\Theta_k$, and the Earth radius $R_E$.

### Factors Affecting Range

| Parameter | Effect on Range |
| :--- | :--- |
| Energy parameter $\gamma_k$ | Range increases as $\gamma_k$ increases |
| Velocity inclination $\Theta_k$ | An optimal value $\Theta_{k,\mathrm{opt}}$ exists that maximizes range |
| Cutoff altitude $h_k$ | As $h_k$ increases, the proportion of reentry-phase range decreases |

### Distinction from Relative Range

Absolute range is defined in inertial space without considering Earth's rotation. In practice, Earth's rotation must be accounted for by converting absolute range to relative range (range relative to the rotating Earth):

$$\beta_{kc'} = \beta_{kc} - \omega_E T_{kc}$$

where $\omega_E$ is the Earth's rotational angular velocity and $T_{kc}$ is the passive-phase flight time.

## Application Value

Absolute range is a core performance metric for ballistic missiles. Through the hit equation, the range can be computed from engine cutoff parameters, or conversely, cutoff parameters can be derived from range requirements. Range calculation is fundamental to trajectory design, guidance system design, and accuracy analysis.

## Related Concepts

- [Free-Flight Trajectory](/en/glossary/fundamentals/free-flight-trajectory/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
