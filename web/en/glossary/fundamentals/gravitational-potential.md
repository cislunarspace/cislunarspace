---
title: Gravitational Potential
description: Detailed analysis of the definition of Earth's gravitational potential, spherical harmonic expansion, normal and disturbing potentials, and applications in orbital mechanics
keywords: Gravitational Potential, gravitational field, spherical harmonics, disturbing potential, normal potential, Earth gravity
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Gravitational Potential
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Gravitational Potential | Terminology Definition
  description: Detailed analysis of Earth's gravitational potential and its applications in orbital mechanics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gravitational Potential | Terminology Definition
  description: Detailed analysis of Earth's gravitational potential and its applications in orbital mechanics
  image: /logo.png
permalink: /en/glossary/fundamentals/gravitational-potential/
---

# Gravitational Potential

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Gravitational potential is a scalar function describing the strength of a gravitational field, also known as the gravity potential. The gravitational field strength (force per unit mass $\mathbf{F}'$) at a point in the field is related to the gravitational potential $U$ by:

$$\mathbf{F}' = \text{grad}\, U$$

For the case where Earth is treated as a point mass (or homogeneous sphere), the gravitational potential is:

$$U = \frac{\mu_E}{r}$$

where $\mu_E = fM$ is Earth's gravitational parameter and $r$ is the geocentric distance. The gravitational potential per unit mass is equal in magnitude but opposite in sign to the gravitational potential energy.

## Core Elements

### Spherical Harmonic Expansion

The real Earth is not a homogeneous sphere; its gravitational potential must be approximated using a spherical harmonic expansion:

$$U = \frac{\mu_E}{r} \sum_{n=0}^{s} \left(\frac{a_e}{r}\right)^n \sum_{m=0}^{n} (\bar{C}_{nm} \cos m\lambda + \bar{S}_{nm} \sin m\lambda) \bar{P}_{nm}(\sin\phi)$$

where $a_e$ is Earth's equatorial radius, $\phi$ is geocentric latitude, $\lambda$ is geocentric longitude, $\bar{C}_{nm}$ and $\bar{S}_{nm}$ are normalized spherical harmonic coefficients, and $\bar{P}_{nm}$ are normalized Legendre functions.

### Normal and Disturbing Potentials

| Concept | Definition | Physical Meaning |
| :--- | :--- | :--- |
| Normal potential $V$ | Gravitational potential of the normal Earth model | Potential of a rotationally symmetric ellipsoid |
| Disturbing potential $T$ | Difference between true and normal potentials | $T = U - V$, reflects irregularities in Earth's shape and density |

The disturbing gravitational acceleration $\delta\mathbf{g} = \text{grad}\, T$ is on the order of 200 mgal ($10^{-5}$ m/s²) and has a non-negligible effect on spacecraft motion.

### Relationship Between Potential and Potential Energy

For a mass $m_1$ in a gravitational field, the potential energy $V$ and gravitational potential $U$ are related by:

$$U = -\frac{V}{m_1}$$

Gravitational potential energy is referenced to zero at infinity.

## Application Value

Gravitational potential is the foundation of Earth gravity field modeling and orbital mechanics. Spherical harmonic coefficients enable precise computation of gravitational acceleration at any point in space, providing essential inputs for trajectory computation and orbit prediction. For cislunar missions, high-precision gravitational potential models are a prerequisite for precise orbit determination and orbit design.

## Related Concepts

- [Earth Ellipsoid](/en/glossary/fundamentals/earth-ellipsoid/)
- [Gravity vs Gravitation](/en/glossary/fundamentals/gravity-vs-gravitation/)
- [Geocentric Inertial Frame](/en/glossary/fundamentals/geocentric-inertial-frame/)
- [Powered Phase](/en/glossary/fundamentals/powered-phase/)
- [Orbital Phase](/en/glossary/fundamentals/orbital-phase/)

## References

- Zheng W, An X, Zhou X, He R. Spaceflight Mechanics [M]. National University of Defense Technology, 2026.
- Ren X, Xiao F. Orbital Mechanics of Artificial Earth Satellites [M]. National University of Defense Technology Press.
