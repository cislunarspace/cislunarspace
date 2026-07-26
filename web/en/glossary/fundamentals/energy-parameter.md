---
title: Energy Parameter
description: A detailed analysis of the definition, physical meaning, relationship with orbit types, and application of the energy parameter in ballistic computation
keywords: Energy Parameter, Specific Mechanical Energy, Energy Ratio, Trajectory Shape, Orbit Type
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Energy Parameter
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Energy Parameter | Terminology Definition
  description: A detailed analysis of the definition and application of the energy parameter in ballistic computation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Energy Parameter | Terminology Definition
  description: A detailed analysis of the definition and application of the energy parameter in ballistic computation
  image: /logo.png
permalink: /en/glossary/fundamentals/energy-parameter/
---

# Energy Parameter

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The energy parameter $\gamma$ is a dimensionless quantity that describes the ratio of the spacecraft's velocity to the local circular orbit velocity at a given position:

$$\gamma = \frac{v^2 r}{\mu_E} = \frac{v^2}{v_{\text{circle}}^2}$$

where $v$ is the speed, $r$ is the geocentric distance, $\mu_E$ is Earth's gravitational parameter, and $v_{\text{circle}} = \sqrt{\mu_E/r}$ is the local circular orbit velocity. The energy parameter directly reflects the mechanical energy state of the spacecraft.

## Core Elements

### Relationship with Specific Mechanical Energy

The relationships between the energy parameter, specific mechanical energy $\varepsilon$, and semi-major axis $a$:

$$\gamma = 2 - \frac{r}{a}, \quad \varepsilon = -\frac{\mu_E}{2a} = \frac{v^2}{2} - \frac{\mu_E}{r}$$

Therefore $\gamma_k = 2r_k/r_{k,\text{circle}} = v_k^2 r_k / \mu_E$.

### Correspondence with Orbit Types

| Orbit Type | Energy Parameter Range | Semi-major Axis | Specific Mechanical Energy |
| :--- | :--- | :--- | :--- |
| Circular orbit | $\gamma = 1$ | $a = r$ | $\varepsilon < 0$ |
| Elliptical orbit | $0 < \gamma < 2$ | $a > 0$ | $\varepsilon < 0$ |
| Parabolic orbit | $\gamma = 2$ | $a \to \infty$ | $\varepsilon = 0$ |
| Hyperbolic orbit | $\gamma > 2$ | $a < 0$ | $\varepsilon > 0$ |

### Role in Ballistic Parameter Computation

The energy parameter is a core intermediate variable in ballistic computation, appearing in several key formulas:

| Formula | Expression |
| :--- | :--- |
| Semi-latus rectum | $p = r_k \gamma_k \cos^2\Theta_k$ |
| Eccentricity | $e = \sqrt{1 - \gamma_k(2-\gamma_k)\cos^2\Theta_k}$ |
| Semi-major axis | $a = r_k / (2 - \gamma_k)$ |
| Free-flight angular range | $\sin(\beta_{ke}/2) = \gamma_k \sin 2\Theta_k / (2e)$ |

### Relationship with Powered Phase Endpoint Parameters

At the powered phase endpoint K, the energy parameter is fully determined by the speed $v_k$ and geocentric distance $r_k$:

$$\gamma_k = \frac{v_k^2 r_k}{\mu_E}$$

Its partial derivatives are:

$$\frac{\partial\gamma_k}{\partial v_k} = \frac{2\gamma_k}{v_k}, \quad \frac{\partial\gamma_k}{\partial r_k} = \frac{\gamma_k}{r_k}$$

## Application Value

The energy parameter is the bridge connecting velocity, position, and orbit shape. Through the energy parameter, the orbit type of a spacecraft can be quickly determined and the expression of ballistic equations can be simplified. In computations for hit equations, range error coefficients, flight time, and more, the energy parameter serves as a core intermediate variable. In missile design, the magnitude of the energy parameter directly reflects the velocity-energy state at the cutoff point.

## Related Concepts

- [Specific Angular Momentum](/en/glossary/fundamentals/specific-angular-momentum/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
