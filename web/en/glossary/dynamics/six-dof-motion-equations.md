---
title: Six-DOF Motion Equations
description: A detailed analysis of six-degree-of-freedom motion equations for stratospheric airships, Newton-Euler equation derivation, and numerical solution methods
keywords: Six-DOF, Newton-Euler Equations, Kinematics, Dynamics, Stratospheric Airship, Small Perturbation Linearization
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Six-DOF Motion Equations | Airship Dynamics
  description: A detailed analysis of six-degree-of-freedom motion equations for stratospheric airships, Newton-Euler equation derivation, and numerical solution methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Six-DOF Motion Equations | Airship Dynamics
  description: A detailed analysis of six-degree-of-freedom motion equations for stratospheric airships, Newton-Euler equation derivation, and numerical solution methods
  image: /logo.png
permalink: /en/glossary/dynamics/six-dof-motion-equations/
---

# Six-DOF Motion Equations

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Six-degree-of-freedom (6-DOF) motion equations describe complete motion state of an aircraft in 3D space, including three translational degrees (position) and three rotational degrees (attitude). The 6-DOF model is fundamental for controller design and simulation of stratospheric airships.

## Coordinate Systems

| Frame | Origin | Axes | Purpose |
|:---|:---|:---|:---|
| Earth Frame $(O_E)$ | Ground point | $E_N, E_E, E_D$ | Trajectory description |
| Body Frame $(O_B)$ | Airship CG | $B_x, B_y, B_z$ | Force/moment description |
| Velocity Frame $(O_A)$ | Airship CG | $A_x, A_y, A_z$ | Aerodynamic calculation |

## Kinematics Equations

### Position Rate

$$\begin{bmatrix} \dot{x} \\ \dot{y} \\ \dot{z} \end{bmatrix} = \mathbf{R}_{EB} \begin{bmatrix} u \\ v \\ w \end{bmatrix}$$

### Attitude Rate

$$\begin{bmatrix} \dot{\phi} \\ \dot{\theta} \\ \dot{\psi} \end{bmatrix} = \begin{bmatrix} 1 & \sin\phi\tan\theta & \cos\phi\tan\theta \\ 0 & \cos\phi & -\sin\phi \\ 0 & \sin\phi\sec\theta & \cos\phi\sec\theta \end{bmatrix} \begin{bmatrix} p \\ q \\ r \end{bmatrix}$$

## Dynamics Equations

### Newton-Euler Equations

Force balance along body axes:

$$m(\dot{u} + qw - rv - g\sin\theta) = X$$

$$m(\dot{v} + ru - pw + g\cos\theta\sin\phi) = Y$$

$$m(\dot{w} + pv - qu + g\cos\theta\cos\phi) = Z$$

## Related Concepts

- [Newton-Euler Equations](/en/glossary/dynamics/newton-euler-equations/)
- [Trim Condition](/en/glossary/dynamics/trim-condition/)
- [Modal Analysis](/en/glossary/dynamics/modal-analysis/)

## References

- Etkin B, Reid L D. Dynamics of Flight: Stability and Control[M]. Wiley, 2024.
- Wang H. Stratospheric Airship Modeling and Control[M]. National Defense Industry Press, 2025.