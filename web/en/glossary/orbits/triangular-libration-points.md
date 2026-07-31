---
title: Triangular Libration Points
description: Detailed explanation of triangular libration points L4 and L5 — definition, dynamical characteristics, stability analysis, and applications in cislunar space missions
keywords: Triangular Libration Points, L4, L5, libration point, three-body problem, Lagrange point, orbital dynamics
author: Tianjiang Shuo
date: 2026-06-05
lastUpdated: 2026-06-05
wechatShare:
  title: Triangular Libration Points
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Triangular Libration Points Details | Stable Dynamical Equilibrium Regions in the Earth-Moon System"
  description: Detailed explanation of triangular libration points L4 and L5 — definition, dynamical characteristics, stability analysis, and applications in cislunar space missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Triangular Libration Points Details | Stable Dynamical Equilibrium Regions in the Earth-Moon System"
  description: Detailed explanation of triangular libration points L4 and L5 — definition, dynamical characteristics, stability analysis, and applications in cislunar space missions
  image: /logo.png
permalink: /en/glossary/orbits/triangular-libration-points/
---

# Triangular Libration Points

> Author: Tianjiang Shuo
>
> Contributing Institution: School of Astronautics, Harbin Institute of Technology, National Key Laboratory of Rapid Design and Intelligent Swarm of Small Spacecraft

## Definition

**Triangular Libration Points** are two of the five libration points in the Circular Restricted Three-Body Problem (CR3BP), designated L4 and L5. They lie in the orbital plane of the two primary bodies and form equilateral triangles with them. In the Earth-Moon system, L4 is located 60 degrees ahead of the Moon's orbit, and L5 is 60 degrees behind. Unlike the three collinear libration points (L1, L2, L3), the triangular libration points are linearly stable equilibrium points, with rich periodic orbit families in their vicinity.

## Core Elements

### Mathematical Definition

In the rotating frame of the CR3BP, the coordinates of L4 and L5 are:

$$L_4: \left(\frac{1}{2} - \mu, \frac{\sqrt{3}}{2}\right), \quad L_5: \left(\frac{1}{2} - \mu, -\frac{\sqrt{3}}{2}\right)$$

where $\mu = m_2/(m_1 + m_2)$ is the mass parameter. In the Earth-Moon system, $\mu \approx 0.01215$, so L4 and L5 lie very close to the vertices of a standard equilateral triangle.

### Stability Analysis

The linear stability condition for triangular libration points is:

$$\frac{27 m_1 m_2}{(m_1 + m_2)^2} > 1$$

For the Earth-Moon system ($m_1 \gg m_2$), this condition is satisfied. The eigenvalues of the linearized equations are purely imaginary, corresponding to center x center type dynamics, meaning motion near L4/L5 neither grows nor decays in the ideal CR3BP. However, nonlinear effects (such as resonances) may lead to long-term instability.

### Periodic Orbit Families

Three fundamental periodic orbit families exist near L4/L5:

| Orbit Family | Characteristics | Period |
| :--- | :--- | :--- |
| Short Period Orbit (SPO) | Small-amplitude rapid oscillation, approximately elliptical | Shorter |
| Long Period Orbit (LPO) | Large-amplitude slow oscillation, non-elliptical | Longer |
| Horseshoe Orbit (HS) | Large-scale horseshoe-shaped motion | Longest |

### Differences from Collinear Libration Points

| Characteristic | Triangular L4/L5 | Collinear L1/L2/L3 |
| :--- | :--- | :--- |
| Position | Equilateral triangle vertices | On the line connecting the two primaries |
| Linear Stability | Stable (center x center) | Unstable (saddle x center) |
| Nearby Periodic Orbits | SPO, LPO, Horseshoe | Halo, Lyapunov, Lissajous |
| Manifold Structure | Center manifold dominant | Stable/unstable manifolds prominent |

## Applications in Cislunar Space

Triangular libration points have unique application value in cislunar space missions:

- **Long-term storage region**: The linear stability of L4/L5 makes them ideal regions for long-term storage of spacecraft or space objects without frequent orbit maintenance
- **Asteroid capture**: NASA and other agencies have proposed mission concepts for capturing and storing asteroids in the L4/L5 region
- **Communication relay**: L4/L5 positions can provide communication coverage for the Moon and deep space, serving as strategically valuable relay nodes
- **Dynamics research**: The nonlinear dynamics near triangular libration points (resonances, bifurcations) are important research areas in celestial mechanics and orbital dynamics

## Related Concepts

- [Short Period Orbit](/en/glossary/orbits/short-period-orbit/)
- [Long Period Orbit](/en/glossary/orbits/long-period-orbit/)
- [Horseshoe Orbit](/en/glossary/orbits/horseshoe-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)

## References

- Szebehely V. Theory of Orbits: The Restricted Problem of Three Bodies[M]. Academic Press, 1967.
- Doedel E J, Romanov V A, Paffenroth R C, et al. Elemental periodic orbits associated with the libration points in the circular restricted 3-body problem[J]. International Journal of Bifurcation and Chaos, 2007, 17(8): 2625-2677.
