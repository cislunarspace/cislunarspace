---
title: Orbital Equation
description: A detailed analysis of the orbital equation derivation, conic section forms, the relationship between eccentricity and orbit shape, and the concept of apsides
keywords: Orbital Equation, Conic Section, Eccentricity, Apse, Perigee, Apogee, Semi-latus Rectum
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Orbital Equation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Orbital Equation | Terminology Definition
  description: A detailed analysis of the conic section form of the orbital equation and the relationship between eccentricity and orbit shape
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Orbital Equation | Terminology Definition
  description: A detailed analysis of the conic section form of the orbital equation and the relationship between eccentricity and orbit shape
  image: /logo.png
permalink: /en/glossary/fundamentals/orbital-equation/
---

# Orbital Equation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The orbital equation is a polar-coordinate equation that describes the relationship between the geocentric distance $r$ and the true anomaly $f$ of a spacecraft in two-body motion. Its standard form is:

$$r = \frac{p}{1 + e\cos f} = \frac{a(1-e^2)}{1 + e\cos f}$$

where $p = h^2/\mu_E$ is the semi-latus rectum and $e$ is the eccentricity. This equation is a conic section equation and constitutes the mathematical description of Kepler's first law, showing that the orbit of two-body motion is a conic section with the center of mass of the central body at one focus.

## Core Elements

### Eccentricity and Orbit Shape

| Eccentricity | Orbit Type | Characteristics |
|:---|:---|:---|
| $e = 0$ | Circular orbit | $r = a$, constant geocentric distance |
| $0 < e < 1$ | Elliptical orbit | Periodic orbit with perigee and apogee |
| $e = 1$ | Parabolic orbit | Escape orbit with apogee at infinity |
| $e > 1$ | Hyperbolic orbit | Non-periodic escape orbit |

### Apsides and Apse Line

The two vertices of the major axis of a conic section are called apsides. For an Earth-orbiting orbit:
- Periapsis (perigee): at $f = 0°$, $r_{\min} = a(1-e)$
- Apoapsis (apogee): at $f = 180°$, $r_{\max} = a(1+e)$

The apse line (major axis) coincides with the eccentricity vector $\boldsymbol{e}$ and determines the orientation of the orbit within the orbital plane.

### True Anomaly and Argument of Latitude

- True anomaly $f$: the geocentric angle between the spacecraft position and the perigee
- Argument of latitude $u$: the geocentric angle between the spacecraft position and the ascending node
- Relationship between the two: $f = u - \omega$, where $\omega$ is the argument of perigee

## Application Value

The orbital equation is one of the core formulas in orbital mechanics, derived by integrating the eccentricity vector $\boldsymbol{e}$. It establishes the mapping between orbit shape ($e$), size ($p$ or $a$), and the instantaneous position of the spacecraft ($f$). The orbital equation can be used to calculate the geocentric distance corresponding to any true anomaly, making it a fundamental tool for orbit prediction, orbit design, and ballistic computation.

## Related Concepts

- [Specific Angular Momentum](/en/glossary/fundamentals/specific-angular-momentum/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
