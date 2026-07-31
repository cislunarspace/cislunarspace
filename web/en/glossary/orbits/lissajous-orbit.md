---
title: Lissajous Orbit
description: Detailed explanation of Lissajous orbit definition, quasi-periodic characteristics, differences from Halo orbits, and applications in cislunar missions
keywords: Lissajous Orbit, libration point, quasi-periodic orbit, Halo orbit, three-body problem, SOHO, orbital design
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Lissajous Orbit
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Lissajous Orbit Explained | Cislunar Space"
  description: Detailed explanation of Lissajous orbit definition, quasi-periodic characteristics, differences from Halo orbits, and applications in cislunar missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Lissajous Orbit Explained | Cislunar Space"
  description: Detailed explanation of Lissajous orbit definition, quasi-periodic characteristics, differences from Halo orbits, and applications in cislunar missions
  image: /logo.png
permalink: /en/glossary/orbits/lissajous-orbit/
---

# Lissajous Orbit

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Lissajous orbit is a **quasi-periodic orbit surrounding a libration point** that does not close but remains bounded within a finite region. Its name comes from the Lissajous figures studied by French physicist Jules Antoine Lissajous -- in the rotating reference frame, the projection of a Lissajous orbit resembles a Lissajous curve. Unlike Halo orbits, Lissajous orbits are not symmetric and do not precisely close.

## Key Elements

### Dynamic Characteristics of Lissajous Orbits

Key characteristics of Lissajous orbits in the CR3BP framework include:

- **Quasi-periodicity**: The orbit does not close, gradually sweeping through a torus-like region in the synodic frame, resembling a "ball of yarn"
- **Asymmetry**: Unlike the symmetry of Halo orbits, Lissajous orbits lack symmetry about the $xOz$ plane
- **Non-resonant frequencies**: The in-plane oscillation frequency $\omega_{xy}$ and $z$-direction oscillation frequency $\omega_z$ of Lissajous orbits do not satisfy a resonance relation, i.e., $\omega_z / \omega_{xy} \neq 1$
- **Bounded motion**: Although not closing, the orbit always remains in a finite region near the libration point

### Differences Between Lissajous and Halo Orbits

| Feature | Halo Orbit | Lissajous Orbit |
| :--- | :--- | :--- |
| Periodicity | Precisely periodic, closed | Quasi-periodic, not closed |
| Symmetry | Symmetric about $xOz$ plane | No symmetry |
| Frequency relation | $\omega_z / \omega_{xy} = 1$ | $\omega_z / \omega_{xy} \neq 1$ |
| Orbit shape | Three-dimensional ring | Three-dimensional quasi-periodic winding |
| Control requirement | Station-keeping required | Station-keeping required (more complex) |

Lissajous orbits can be viewed as a "generalization" of Halo orbits -- when the frequency ratio between in-plane and $z$-direction motion is not 1, the periodic orbit degenerates into a quasi-periodic orbit.

### Linear Approximation of Lissajous Orbits

In the linearized framework near the libration point, the motion of a Lissajous orbit can be decomposed into three modes:

$$x(t) = A_{xy} \cos(\omega_{xy} t + \phi_{xy}) + \text{nonlinear corrections}$$
$$z(t) = A_z \cos(\omega_z t + \phi_z) + \text{nonlinear corrections}$$

where $A_{xy}$ and $A_z$ are the in-plane and $z$-direction amplitudes, and $\phi_{xy}$ and $\phi_z$ are initial phases. Since $\omega_{xy}$ and $\omega_z$ are incommensurable, the orbit never closes.

### Stability and Control

Like Halo orbits, Lissajous orbits are also unstable and require station-keeping control. However, because Lissajous orbits do not close, control strategies are more complex:

- **Target orbit definition**: Since the orbit does not close, the "target orbit" is not a precise closed curve but a time-evolving reference trajectory
- **Control frequency**: Typically requires more frequent control maneuvers
- **Fuel consumption**: Station-keeping for Lissajous orbits is typically slightly higher than for Halo orbits of comparable size

## Application Value

Lissajous orbits have unique applications in space missions:

- **SOHO satellite**: ESA/NASA's Solar and Heliospheric Observatory operates in a Lissajous orbit near the Sun-Earth L1 point, the most famous application of Lissajous orbits
- **Relay communications**: Lissajous orbits near the Earth-Moon L2 point can provide communication relay for the lunar far side
- **Orbital design flexibility**: The frequency ratio of Lissajous orbits can be freely chosen, offering more design freedom than Halo orbits
- **Easier injection**: In some cases, the $\Delta V$ required to enter a Lissajous orbit is less than for a Halo orbit

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Richardson D L. Analytic construction of periodic orbits about the collinear points[J]. Celestial Mechanics, 1980, 22(3): 241-253.
- Gomez G, Masdemont J, Simo C. Lissajous orbits around halo orbits[J]. Advances in the Astronautical Sciences, 1998.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025.
