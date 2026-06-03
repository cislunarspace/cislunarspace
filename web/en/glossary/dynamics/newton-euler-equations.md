---
title: Newton-Euler Equations
description: A detailed analysis of Newton-Euler equations principles, force and moment vector expressions, and applications in aircraft dynamics modeling
keywords: Newton-Euler Equations, Dynamics, Moment Balance, Angular Momentum, Rigid Body Dynamics
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Newton-Euler Equations | Rigid Body Dynamics
  description: A detailed analysis of Newton-Euler equations principles, force and moment vector expressions, and applications in aircraft dynamics modeling
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Newton-Euler Equations | Rigid Body Dynamics
  description: A detailed analysis of Newton-Euler equations principles, force and moment vector expressions, and applications in aircraft dynamics modeling
  image: /logo.png
permalink: /en/glossary/dynamics/newton-euler-equations/
wechatShare:
  title: "Cislunar Space Guide | Newton-Euler Equations"
  desc: "A detailed analysis of Newton-Euler equations principles, force and moment vector expressions, and applications in aircraft dynamics modeling"
  image: "/logo.png"
---

# Newton-Euler Equations

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Newton-Euler equations describe complete dynamics of rigid body translation (Newton's second law) and rotation (Euler equations). For aircraft, the equations relate external forces to center-of-mass motion and external moments to attitude motion.

## Newton Equation (Translation)

### Basic Form

$$\vec{F} = m\vec{a}$$

## Euler Equation (Rotation)

### Angular Momentum

$$\vec{H} = \mathbf{I} \vec{\omega}$$

### Basic Form

$$\vec{M} = \frac{d\vec{H}}{dt} = \mathbf{I}\dot{\vec{\omega}} + \vec{\omega} \times (\mathbf{I}\vec{\omega})$$

## Stratospheric Airship Characteristics

Due to large volume and light weight, the inertia matrix has distinct characteristics:

| Parameter | Characteristic |
|:---|:---|
| $I_{xx}$ | Small (slim body) |
| $I_{yy} = I_{zz}$ | Large |
| $I_{xy} = I_{xz} = I_{yz}$ | Approximately zero (symmetry) |

## Related Concepts

- [Six-DOF Motion Equations](/en/glossary/dynamics/six-dof-motion-equations/)
- [Aerodynamic Force/Coefficient](/en/glossary/dynamics/aerodynamic-coefficient/)

## References

- Goldstein H, Poole C, Safko J. Classical Mechanics[M]. Addison-Wesley, 2023.
- Etkin B, Reid L D. Dynamics of Flight: Stability and Control[M]. Wiley, 2024.