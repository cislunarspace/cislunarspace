---
title: Zero-Angle-of-Attack Reentry
description: A detailed analysis of the zero-angle-of-attack reentry definition, simplified equations of motion, and ballistic characteristics
keywords: Zero-Angle-of-Attack Reentry, Ballistic Reentry, Zero-Lift Reentry, Reentry Trajectory
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Zero-Angle-of-Attack Reentry
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Zero-Angle-of-Attack Reentry | Terminology Definition"
  description: A detailed analysis of the zero-angle-of-attack reentry definition and ballistic characteristics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Zero-Angle-of-Attack Reentry | Terminology Definition"
  description: A detailed analysis of the zero-angle-of-attack reentry definition and ballistic characteristics
  image: /logo.png
permalink: /en/glossary/fundamentals/zero-angle-of-attack-reentry/
---

# Zero-Angle-of-Attack Reentry

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Zero-angle-of-attack reentry refers to a reentry mode in which the total angle of attack $\eta = 0$, the velocity direction is aligned with the vehicle's longitudinal axis, and the lift $L = 0$. It is also known as ballistic reentry or zero-lift reentry. For a statically stable reentry vehicle, when an angle of attack exists, the stability moment reduces it until the velocity direction aligns with the longitudinal axis and the vehicle ceases to experience lift.

## Core Elements

### Equations of Motion

During zero-angle-of-attack reentry, since $L = 0$ (i.e., $Y = Z = 0$), the planar reentry equations of motion simplify to:

$$\left\{\begin{array}{l} \frac{\mathrm{d}v}{\mathrm{d}t} = -\frac{X}{m} - g\sin\Theta \\ \frac{\mathrm{d}\Theta}{\mathrm{d}t} = \left(\frac{v}{r} - \frac{g}{v}\right)\cos\Theta \\ \frac{\mathrm{d}r}{\mathrm{d}t} = v\sin\Theta \\ \frac{\mathrm{d}\beta_e}{\mathrm{d}t} = \frac{v}{r}\cos\Theta \end{array}\right.$$

Compared to lifting reentry, the equations lack the lift term $Y/(mv)$, and the motion is entirely determined by initial conditions and drag.

### Ballistic Characteristics

| Characteristic | Description |
| :--- | :--- |
| Large impact point dispersion | No lift control during reentry; deviations cannot be corrected |
| Narrow reentry corridor | The reentry angle must be strictly limited to the allowable range |
| High peak load factor | No lift buffer; deceleration is severe |
| Lower total aerodynamic heating | Steep trajectory; shorter range and time experienced |

### Comparison with Lifting Reentry

| Comparison Item | Zero-Angle-of-Attack Reentry | Lifting Reentry |
| :--- | :--- | :--- |
| Lift | $L = 0$ | $L > 0$ |
| Trajectory control | None | Adjustable via lift |
| Peak load factor | Higher | Lower |
| Thermal protection design | Relatively simple | Relatively complex |
| Impact point precision | Low | Higher |

### Passive Phase Trajectory Differences

The passive-phase trajectory considering atmospheric drag differs from the ideal elliptical trajectory in the following ways:

- Velocities at corresponding points are unequal: $v_{\text{ascending}}(r) > v_{\text{descending}}(r)$
- The descending arc is steeper than the ascending arc: $|\Theta_{\text{descending}}(r)| > |\Theta_{\text{ascending}}(r)|$
- The minimum velocity point is not at the trajectory apex but on the descending arc
- The passive-phase range depends on the vehicle mass

## Application Value

Zero-angle-of-attack reentry is the simplest reentry mode, applicable to ballistic missile warheads and early return spacecraft. Although it suffers from large impact point dispersion and a narrow reentry corridor, the absence of lift generation or control results in lower total aerodynamic heating, making the thermal protection problem easier to address and the structural design simpler. Ballistic reentry spacecraft were the first category of reentry vehicles developed.

## Related Concepts

- [Total Angle of Attack](/en/glossary/fundamentals/total-angle-of-attack/)
- [Ballistic Coefficient](/en/glossary/fundamentals/ballistic-coefficient/)
- [Reentry Corridor](/en/glossary/fundamentals/reentry-corridor/)
- [Trim Angle of Attack](/en/glossary/fundamentals/trim-angle-of-attack/)
- [Reentry Phase](/en/glossary/fundamentals/reentry-phase/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
