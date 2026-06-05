---
title: Total Angle of Attack
description: A detailed analysis of the total angle of attack definition, its relationship with angle of attack and sideslip angle, and its application in reentry aerodynamic analysis
keywords: Total Angle of Attack, Angle of Attack, Sideslip Angle, Total Lift, Total Normal Force
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Total Angle of Attack
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Total Angle of Attack | Terminology Definition
  description: A detailed analysis of the total angle of attack definition and its relationship with angle of attack and sideslip angle
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Total Angle of Attack | Terminology Definition
  description: A detailed analysis of the total angle of attack definition and its relationship with angle of attack and sideslip angle
  image: /logo.png
permalink: /en/glossary/fundamentals/total-angle-of-attack/
---

# Total Angle of Attack

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The total angle of attack $\eta$ is the angle between the velocity axis $o_1x_v$ and the vehicle's longitudinal axis $o_1x_1$. In the total angle-of-attack plane (the $x_1o_1x_v$ plane), the aerodynamic force $\boldsymbol{R}$ can be decomposed along the longitudinal axis into the axial force $X_1$ and total normal force $N$, or along the velocity axis into the drag $X$ and total lift $L$.

## Core Elements

### Relationship with Angle of Attack and Sideslip Angle

The exact relationship between the total angle of attack and the angle of attack $\alpha$ and sideslip angle $\beta$:

$$\cos\eta = \cos\alpha \cdot \cos\beta$$

or equivalently:

$$\sin^2\eta = \sin^2\alpha + \sin^2\beta - \sin^2\alpha \cdot \sin^2\beta$$

When $\alpha$ and $\beta$ are small angles, the approximate relationship is:

$$\eta = \sqrt{\alpha^2 + \beta^2}$$

### Force Decomposition Relationships

In the total angle-of-attack plane, the relationships between the axial force $X_1$, total normal force $N$ and the drag $X$, total lift $L$:

$$\left\{\begin{array}{l} X = N\sin\eta + X_1\cos\eta \\ L = N\cos\eta - X_1\sin\eta \end{array}\right.$$

The corresponding coefficient relationships:

$$\left\{\begin{array}{l} C_x = C_N\sin\eta + C_{x1}\cos\eta \\ C_L = C_N\cos\eta - C_{x1}\sin\eta \end{array}\right.$$

### Relationship Between Total Normal Force and Component Forces

The relationship between the total normal force $N$ and the normal force $Y_1$, lateral force $Z_1$:

$$N = \sqrt{Y_1^2 + Z_1^2}$$

The relationship between the total lift $L$ and the lift $Y$, side force $Z$:

$$L = \sqrt{Y^2 + Z^2}$$

### Physical Significance

The total angle of attack comprehensively represents the spatial orientation relationship between the vehicle's velocity vector and body axis. When the sideslip angle $\beta = 0$, the total angle of attack equals the absolute value of the angle of attack. The concept of total angle of attack simplifies the expression of aerodynamic forces, enabling the reentry equations of motion to be expressed uniformly using the total angle of attack and total lift, applicable to all types of reentry vehicles.

## Application Value

The total angle of attack is the core parameter for reentry vehicle aerodynamic analysis. It enables the transformation of a three-dimensional aerodynamic problem into a two-dimensional problem within the total angle-of-attack plane, simplifying the derivation of reentry equations of motion. The total angle of attack is a key variable in trim angle-of-attack design, reentry corridor determination, and lift control.

## Related Concepts

- [Trim Angle of Attack](/en/glossary/fundamentals/trim-angle-of-attack/)
- [Lift-to-Drag Ratio](/en/glossary/fundamentals/lift-to-drag-ratio/)
- [Reentry Corridor](/en/glossary/fundamentals/reentry-corridor/)
- [Reentry Phase](/en/glossary/fundamentals/reentry-phase/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
