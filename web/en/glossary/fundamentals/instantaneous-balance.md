---
title: Instantaneous Balance Assumption
description: A detailed analysis of the instantaneous balance assumption definition, physical meaning, mathematical formulation, and application in simplified trajectory computation
keywords: Instantaneous Balance, Torque Balance, Trajectory Simplification, Control Equation, Angle of Attack
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Instantaneous Balance Assumption
  desc: "One-stop learning for cislunar space research frontiers, terminology, and tool resources."
  image: /logo.png
og:
  title: "Instantaneous Balance Assumption | Terminology Definition"
  description: A detailed analysis of the instantaneous balance assumption definition, physical meaning, and application in simplified trajectory computation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Instantaneous Balance Assumption | Terminology Definition"
  description: A detailed analysis of the instantaneous balance assumption definition, physical meaning, and application in simplified trajectory computation
  image: /logo.png
permalink: /en/glossary/fundamentals/instantaneous-balance/
---

# Instantaneous Balance Assumption

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The instantaneous balance assumption is an important simplification used in powered-phase trajectory computation. It assumes that the control system is well designed and that the rocket is in torque equilibrium at all times — that is, the aerodynamic moments and control moments acting on the vehicle are instantaneously balanced. This assumption decouples the rotational motion about the center of mass from the center-of-mass motion, significantly simplifying the trajectory equations.

## Core Elements

### Physical Meaning

The instantaneous balance assumption implies:

- The vehicle has no angular acceleration about its center of mass
- Aerodynamic moments and control moments are balanced at every instant
- The angle of attack $\alpha$ and sideslip angle $\beta$ are directly determined by the control deflection angle $\delta$
- The dynamic equations for rotational motion about the center of mass degenerate into algebraic equations

### Mathematical Formulation

Under the instantaneous balance assumption, the relationship between the control deflection angle and the angle of attack is:

$$\delta_\varphi = -\frac{M_{z1}^\alpha}{M_{z1}^\delta} \alpha = -\frac{Y_1^\alpha(x_g - x_p)}{R'(x_g - x_c)} \alpha$$

where $M_{z1}^\alpha$ is the derivative of the aerodynamic moment with respect to the angle of attack, $M_{z1}^\delta$ is the derivative of the control moment with respect to the deflection angle, and $x_g$, $x_p$, $x_c$ are the distances from the nose tip to the center of mass, center of pressure, and control force application point, respectively.

### Introduced Errors

The instantaneous balance assumption neglects:

- The dynamic transient process of rotational motion about the center of mass
- The effects of attitude angular velocity and angular acceleration
- Control system delays and overshoot

These errors are small quantities when the control system performs well, and their effects on center-of-mass motion parameters are generally within engineering tolerances.

## Application Value

The instantaneous balance assumption is the foundation of simplified powered-phase trajectory computation. Through this assumption, the six-degree-of-freedom equations of motion can be reduced to three-degree-of-freedom center-of-mass equations, greatly reducing computational complexity. During vehicle concept studies and preliminary design phases, the instantaneous balance assumption enables trajectory estimation even before all parameters are fully determined. This assumption is also a prerequisite for decoupling longitudinal motion from lateral motion.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
