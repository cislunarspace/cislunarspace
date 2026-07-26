---
title: Orbital Elements
description: A detailed analysis of classical orbital elements — their definition, physical meaning, equinoctial elements, and position-velocity conversion methods
keywords: orbital elements, semi-major axis, eccentricity, inclination, right ascension of the ascending node, argument of perigee, time of perigee passage
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Orbital Elements
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Orbital Elements | Terminology Definition"
  description: A detailed analysis of classical orbital elements — their definition, physical meaning, and position-velocity conversion methods
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Orbital Elements | Terminology Definition"
  description: A detailed analysis of classical orbital elements — their definition, physical meaning, and position-velocity conversion methods
  image: /logo.png
permalink: /en/glossary/fundamentals/orbital-elements/
---

# Orbital Elements

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Orbital elements are the six independent integration constants required to solve the two-body differential equations of motion. They describe the size, shape, orientation, direction, and position-time relationship of an orbit. The six classical orbital elements are $(a, e, i, \Omega, \omega, \tau)$, also known as Keplerian elements.

## Core Elements

### Classical Orbital Elements

| Element | Symbol | Definition | Property Described |
| :--- | :--- | :--- | :--- |
| Semi-major axis | $a$ | Half the major axis of the conic section | Orbit size; determines energy and period |
| Eccentricity | $e$ | Eccentricity of the conic section | Orbit shape |
| Inclination | $i$ | Dihedral angle between the orbit plane and the equatorial plane | Tilt of the orbit plane |
| Right ascension of the ascending node (RAAN) | $\Omega$ | Angle from the vernal equinox to the ascending node | Orientation of the orbit plane in the equatorial plane |
| Argument of perigee | $\omega$ | Angle from the ascending node to perigee | Orientation of the orbit within its plane |
| Time of perigee passage | $\tau$ | Instant at which the spacecraft passes perigee | Position of the spacecraft on the orbit |

### Singular Element Replacements for Special Orbits

| Orbit Type | Singular Elements | Replacement Strategy |
| :--- | :--- | :--- |
| Non-equatorial circular orbit ($e=0$) | $\omega, \tau$ undefined | Use argument of latitude $u$ to describe position |
| Equatorial elliptical orbit ($i=0°$) | $\Omega, \omega$ undefined | Use longitude of perigee $\alpha_p$ to describe orientation |
| Equatorial circular orbit | $\Omega, \omega, \tau$ undefined | Use right ascension $\alpha$ to describe position |

### Equinoctial Elements

For near-circular or near-equatorial orbits, equinoctial elements can be used to avoid singularities:

$$\{a, i, \Omega, H=e\cos\omega, K=-e\sin\omega, L=M+\omega\}$$

where $H$ and $K$ together describe the orbit's shape and orientation.

### Position-Velocity Conversion

Converting between orbital elements and position-velocity vectors is a core computation in orbital mechanics:

- **Forward conversion**: Computes position $\boldsymbol{r}$ and velocity $\boldsymbol{v}$ from $(a,e,i,\Omega,\omega,f)$, requiring coordinate rotations.
- **Inverse conversion**: Computes orbital elements from $(\boldsymbol{r}, \boldsymbol{v})$, requiring sequential calculation of the specific angular momentum, eccentricity vector, and other fundamental vectors.

## Application Value

Orbital elements are the standard means of describing and communicating orbit information. Compared to Cartesian coordinates, orbital elements have clear physical meaning, making it easy to understand orbit characteristics. In orbit prediction, the first five elements are constants under the two-body assumption, and only the sixth (true anomaly) needs to be propagated. In orbit design, mission requirements directly map to constraints on the orbital elements. In orbit determination, observational data are compared with predicted values through the orbital elements.

## Related Concepts

- [Two-Body Problem](/en/glossary/fundamentals/two-body-problem/)
- [True Anomaly](/en/glossary/fundamentals/true-anomaly/)
- [Kepler's Equation](/en/glossary/fundamentals/kepler-equation/)
- [Vis-Viva Equation](/en/glossary/fundamentals/vis-viva-equation/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
