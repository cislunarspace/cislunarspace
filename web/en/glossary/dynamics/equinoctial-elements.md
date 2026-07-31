---
title: Equinoctial Orbital Elements (Equinoctial Orbital Elements)
description: Analysis of equinoctial orbital elements definition, conversion with classical orbital elements, and advantages in orbit control applications
keywords: Equinoctial Orbital Elements, MEE, Modified Equinoctial Elements, Orbital Elements, Orbit Control
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Equinoctial Orbital Elements (Equinoctial Orbital Elements)
  desc: Cislunar space research frontiers, terminology definitions, and tool resources in one-stop learning.
  image: /logo.png
og:
  title: "Equinoctial Orbital Elements Explained | Numerical Stability in Orbit Control"
  description: Analysis of equinoctial orbital elements definition, advantages, and applications in orbit control
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Equinoctial Orbital Elements Explained | Numerical Stability in Orbit Control"
  description: Analysis of advantages of equinoctial orbital elements compared to classical orbital elements
  image: /logo.png
permalink: /en/glossary/dynamics/equinoctial-elements/
---

# Equinoctial Orbital Elements (Equinoctial Orbital Elements)

> Editor Source: 胡敏, 肖金伟, 张天天, 陶雪峰 (2026) "面向中高轨小卫星批量部署的轨道转移飞行器任务规划"
>
> Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Equinoctial Orbital Elements are a type of non-singular orbital element representation that avoids singularity issues of classical elements in near-circular orbits and small inclination cases through trigonometric transformations.

Modified Equinoctial Elements (MEE) are an improved form with better numerical stability and control performance in Q-law control.

## Mathematical Definition

### Classical Orbital Elements

Classical orbital elements include:

- $a$: Semi-major axis
- $e$: Eccentricity
- $i$: Orbital inclination
- $\omega$: Argument of periapsis
- $\Omega$: Right ascension of ascending node
- $\theta$: True anomaly

### Modified Equinoctial Elements (MEE)

MEE as used by 胡敏等 (2026):

$$\begin{cases}
p = a(1 - e^2) \\
e_1 = e\cos(\omega + \Omega) \\
e_2 = e\sin(\omega + \Omega) \\
h_1 = \tan(i/2)\cos\Omega \\
h_2 = \tan(i/2)\sin\Omega \\
L = \omega + \Omega + \theta
\end{cases}$$

Where:
- $p$: Semi-latus rectum
- $e_1, e_2$: Eccentricity vector components
- $h_1, h_2$: Orbital plane normal vector components
- $L$: True longitude

## Advantage Analysis

### Numerical Stability

| Problem Type | Classical Elements | MEE |
|:---|:---|:---|
| Near-circular orbit (e≈0) | Inclination $i$ and argument of periapsis $\omega$ poorly defined | No singularity |
| Small inclination (i≈0) | Right ascension $\Omega$ poorly defined | No singularity |
| Large eccentricity | Numerically stable | Numerically stable |

### Control Performance

胡敏等 (2026) showed that using semi-major axis $a$ instead of semi-latus rectum $p$ provides better control performance:

$$p = a(1 - e^2)$$

This modification makes direct control of semi-major axis more natural and stable during optimization.

### Geometric Interpretation

MEE components have clear geometric meanings:
- **$e_1, e_2$**: Eccentricity vector, describing orbital ellipse shape and orientation
- **$h_1, h_2$**: Describing the orientation of the orbital plane in space
- **$L$**: True longitude, rapidly changing quantity describing spacecraft instantaneous position

## Application in Q-law Control

### Q Function Definition

In Q-law control, the Q function is defined as a weighted quadratic form of MEE errors:

$$Q(Z) = (1 + W_P P) \sum_{i=1}^{5} W_i S_i \left(\frac{\delta Z_i}{\max_L(\dot{X}_i)}\right)^2$$

Where $\delta Z_i$ are errors in each MEE component.

### Normalized Metric

Orbit error normalized metric based on MEE:

$$\sigma_{oe} = \left(\frac{\Delta a}{R_G}\right)^2 + (\Delta e_1)^2 + (\Delta e_2)^2 + (\Delta h_1)^2 + (\Delta h_2)^2$$

Where $R_G$ is GEO radius, used for nondimensionalization.

### Orbit Insertion Accuracy Criterion

Simulation termination criterion based on orbit insertion accuracy threshold:

$$\sigma_{oe} \leq \varepsilon$$

Research uses high-precision standards of $\varepsilon = 1 \times 10^{-6}$ magnitude.

## Comparison with Other Orbital Representations

| Representation | Dimensions | Singularity | Application |
|:---|:---|:---|:---|
| Classical elements | 6 | Yes (e=0, i=0, i=π) | General orbit analysis |
| MEE | 6 | No | Orbit control, optimization |
| Cartesian | 6 | No | Dynamics integration |
| Delaunay | 6 | Yes | Canonical transformations |

## Related Concepts

- [Q-law Control Law](/en/glossary/dynamics/q-law/)
- [Orbital Transfer Vehicle (OTV)](/en/glossary/fundamentals/orbital-transfer-vehicle/)
- [Batch Deployment](/en/glossary/dynamics/batch-deployment/)
- [Coasting Arc](/en/glossary/dynamics/coasting-arc/)

## References

- 胡敏, 肖金伟, 张天天, 陶雪峰. 面向中高轨小卫星批量部署的轨道转移飞行器任务规划[J]. 航天器工程, 2026, 25(3): 634-646.
- Narayanaswamy S, Damaren C J. Equinoctial Lyapunov control law for low-thrust rendezvous[J]. Journal of Guidance, Control, and Dynamics, 2023, 46(4): 781-795.
- Koon W S, Lo M W, Marsden J E, et al. Dynamical systems, the three-body problem and space mission design[M]. 2006.
