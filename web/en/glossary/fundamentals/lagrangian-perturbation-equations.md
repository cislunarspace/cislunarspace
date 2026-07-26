---
title: Lagrangian Perturbation Equations
description: A detailed analysis of the Lagrangian perturbation equations derivation, symmetry properties, and application in conservative perturbation force analysis
keywords: Lagrangian Perturbation Equations, Disturbing Function, Symmetry, Conservative Force
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lagrangian Perturbation Equations
  desc: "One-stop learning for cislunar space research frontiers, terminology, and tool resources."
  image: /logo.png
og:
  title: "Lagrangian Perturbation Equations | Terminology Definition"
  description: A detailed analysis of the Lagrangian perturbation equations derivation and symmetry properties
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Lagrangian Perturbation Equations | Terminology Definition"
  description: A detailed analysis of the Lagrangian perturbation equations derivation and symmetry properties
  image: /logo.png
permalink: /en/glossary/fundamentals/lagrangian-perturbation-equations/
---

# Lagrangian Perturbation Equations

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Lagrangian perturbation equations are disturbed equations of motion expressed in terms of orbital elements, first established by Lagrange during his study of planetary perturbation motion. These equations represent the rate of change of each orbital element as a function of the six orbital elements and the partial derivatives of the disturbing function with respect to each orbital element. They are applicable only to conservative perturbation forces (such as non-spherical Earth gravity and lunar-solar gravitational attraction).

## Core Elements

### Equation Form

$$\left\{\begin{array}{l} \dot{a} = \frac{2}{na}\frac{\partial R}{\partial M} \\ \dot{e} = \frac{1-e^2}{na^2e}\frac{\partial R}{\partial M} - \frac{\sqrt{1-e^2}}{na^2e}\frac{\partial R}{\partial\omega} \\ \dot{i} = \frac{1}{na^2\sqrt{1-e^2}\sin i}(\cos i\frac{\partial R}{\partial\omega} - \frac{\partial R}{\partial\Omega}) \\ \dot{\Omega} = \frac{1}{na^2\sqrt{1-e^2}\sin i}\frac{\partial R}{\partial i} \\ \dot{\omega} = \frac{\sqrt{1-e^2}}{na^2e}\frac{\partial R}{\partial e} - \cos i\frac{d\Omega}{dt} \\ \dot{M} = n - \frac{1-e^2}{na^2e}\frac{\partial R}{\partial e} - \frac{2}{na}\frac{\partial R}{\partial a} \end{array}\right.$$

### Symmetry Properties

| Orbital Element Group | Rate of Change Depends On |
| :--- | :--- |
| First three: $\dot{a}$, $\dot{e}$, $\dot{i}$ | Only $\partial R/\partial\Omega$, $\partial R/\partial\omega$, $\partial R/\partial M$ |
| Last three: $\dot{\Omega}$, $\dot{\omega}$, $\dot{M}$ | Only $\partial R/\partial a$, $\partial R/\partial e$, $\partial R/\partial i$ |

The rate of change of any group of orbital elements depends only on the partial derivatives of the disturbing function with respect to the other group. This property is known as "symmetry."

### Comparison with Gaussian Equations

| Property | Gaussian | Lagrangian |
| :--- | :--- | :--- |
| Applicable perturbation forces | Arbitrary (conservative + non-conservative) | Conservative only |
| Input quantities | Three perturbation acceleration components | Partial derivatives of disturbing function |
| Physical insight | Directly reflects force action | Reveals relationship between disturbing function and orbital changes |
| Primary use | Atmospheric drag, thrust analysis | Non-spherical Earth, lunar-solar gravity analysis |

### Derivation Approach

Starting from the Gaussian equations and utilizing the mapping relationships between $\partial R/\partial\sigma$ and perturbation force components $f_r$, $f_u$, $f_h$, the Lagrangian equations are derived through inverse transformation. The key step is expressing the partial derivatives of the disturbing function with respect to orbital elements as functions of the perturbation force components.

## Application Value

The Lagrangian perturbation equations are the standard tool for analyzing the effects of conservative perturbation forces (especially non-spherical Earth gravity) on orbits. By substituting the Earth's oblateness disturbing function into the equations, the influence of $J_2$ secular terms on each orbital element can be derived, providing the theoretical foundation for the design of special orbits such as sun-synchronous orbits and frozen orbits.

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 刘林. 航天器轨道理论[M]. 国防工业出版社.
