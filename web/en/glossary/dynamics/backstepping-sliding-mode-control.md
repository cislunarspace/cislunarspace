---
title: Backstepping Sliding Mode Control
description: A detailed analysis of backstepping sliding mode control principles, design procedures, and advantages in stratospheric airship attitude control applications
keywords: Backstepping Sliding Mode Control, Backstepping Method, Sliding Mode Control, Nonlinear Control, Stratospheric Airship
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Backstepping Sliding Mode Control | Advanced Control
  description: A detailed analysis of backstepping sliding mode control principles, design procedures, and advantages in stratospheric airship attitude control applications
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Backstepping Sliding Mode Control | Advanced Control
  description: A detailed analysis of backstepping sliding mode control principles, design procedures, and advantages in stratospheric airship attitude control applications
  image: /logo.png
permalink: /en/glossary/dynamics/backstepping-sliding-mode-control/
wechatShare:
  title: "Cislunar Space Guide | Backstepping Sliding Mode Control"
  desc: "A detailed analysis of backstepping sliding mode control principles, design procedures, and advantages in stratospheric airship attitude control applications"
  image: "/logo.png"
---

# Backstepping Sliding Mode Control

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Backstepping sliding mode control combines backstepping methodology with sliding mode control. Backstepping handles strict-feedback nonlinear systems through recursive virtual control design, while sliding mode provides robustness against uncertainties and disturbances.

## Design Principles

### Standard Backstepping

For a strict-feedback system:

$$\begin{aligned}
\dot{x}_1 &= x_2 + f_1(x_1) \\
\dot{x}_2 &= x_3 + f_2(x_1, x_2) \\
&\vdots \\
\dot{x}_n &= f_n(x) + g(x)u
\end{aligned}$$

### Sliding Mode Enhancement

Introduce sliding mode terms at each Lyapunov design step:

$$V_i = V_{i-1} + \frac{1}{2}s_i^2$$

## Applications in Stratospheric Airships

### Attitude Control System

| Channel | Model Characteristic | Control Strategy |
|:---|:---|:---|
| Pitch | Longitudinal motion coupling | Backstepping SMC |
| Yaw | Affected by crosswind | Backstepping SMC + Feedforward |
| Roll | Independent control | SMC |

## Related Concepts

- [Sliding Mode Control](/en/glossary/dynamics/sliding-mode-control/)
- [Fuzzy Backstepping Control](/en/glossary/dynamics/fuzzy-backstepping-control/)
- [Regional Station-keeping Control](/en/glossary/dynamics/regional-station-keeping/)

## References

- Krstic M, et al. Nonlinear and Adaptive Control Design[M]. Wiley, 1995.
- Wang H, et al. Backstepping Sliding Mode Control for Stratospheric Airship[J]. AIAA Guidance, Navigation, and Control Conference, 2024.