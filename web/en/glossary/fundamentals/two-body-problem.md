---
title: Two-Body Problem
description: A detailed analysis of the two-body problem — its definition, fundamental assumptions, differential equations of motion, and foundational role in orbital mechanics
keywords: two-body problem, central gravity, Keplerian orbit, differential equations of motion, gravitational constant
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Two-Body Problem
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Two-Body Problem | Terminology Definition"
  description: A detailed analysis of the two-body problem — its definition, fundamental assumptions, and differential equations of motion
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Two-Body Problem | Terminology Definition"
  description: A detailed analysis of the two-body problem — its definition, fundamental assumptions, and differential equations of motion
  image: /logo.png
permalink: /en/glossary/fundamentals/two-body-problem/
---

# Two-Body Problem

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The two-body problem is a fundamental problem in celestial mechanics concerning the motion of two bodies (point masses) under mutual gravitational attraction alone. For aerospace vehicles in near-Earth space, the on-orbit motion can be approximated as a two-body problem: the Earth is treated as a homogeneous sphere (point-mass model), the vehicle as a point mass, and only central gravity is considered. Under these assumptions, the vehicle's trajectory is a Keplerian orbit, and the characteristics of two-body motion serve as the foundation for studying real-world orbital mechanics.

## Core Elements

### Fundamental Assumptions

| Assumption | Description |
| :--- | :--- |
| Earth as a homogeneous sphere | Gravitational effect is equivalent to a point mass concentrated at the center |
| Vehicle as a point mass | Dimensions are negligibly small compared to the radial distance |
| Central gravity only | Perturbing forces such as atmospheric drag and third-body gravity are neglected |

### Differential Equations of Motion

In an inertial reference frame, the equation of motion of the vehicle relative to the Earth is:

$$\ddot{\boldsymbol{r}} + \frac{\mu_E}{r^3}\boldsymbol{r} = 0$$

where $\mu_E = GM_E = 3.986 \times 10^{14} \, \text{m}^3/\text{s}^2$ is the Earth's gravitational parameter. This is a sixth-order nonlinear ordinary differential equation that requires six independent integration constants (i.e., orbital elements) for a complete solution.

### First Integrals

The two-body equations of motion admit the following conserved quantities:

| Conserved Quantity | Mathematical Expression | Physical Meaning |
| :--- | :--- | :--- |
| Specific angular momentum | $\boldsymbol{h} = \boldsymbol{r} \times \boldsymbol{v} = \text{const}$ | Orbit plane orientation is fixed |
| Specific mechanical energy | $\varepsilon = \frac{1}{2}v^2 - \frac{\mu_E}{r} = \text{const}$ | Orbit size is fixed |
| Eccentricity vector | $\boldsymbol{e} = \frac{1}{\mu_E}\left(\boldsymbol{v} \times \boldsymbol{h} - \frac{\mu_E}{r}\boldsymbol{r}\right) = \text{const}$ | Orbit shape and orientation are fixed |

## Application Value

The two-body problem is the theoretical cornerstone of orbital mechanics. Although real orbits are perturbed by the Earth's oblateness, atmospheric drag, solar and lunar gravity, and other effects, the two-body solution provides a zeroth-order approximation and a reference orbit. Core problems such as orbit design, orbit prediction, and orbit determination all begin with the two-body model. The conclusions of the two-body problem can be generalized to motion around any central body by simply replacing the corresponding gravitational parameter.

## Related Concepts

- [Orbital Elements](/en/glossary/fundamentals/orbital-elements/)
- [Vis-Viva Equation](/en/glossary/fundamentals/vis-viva-equation/)
- [Kepler's Equation](/en/glossary/fundamentals/kepler-equation/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
