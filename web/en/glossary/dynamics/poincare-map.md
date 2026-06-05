---
title: Poincaré Map
description: Detailed explanation of the Poincaré Map — definition, relationship with Poincaré Section, and applications in analyzing perilune distributions of cislunar orbit families
keywords: Poincaré Map, Poincaré Section, phase space mapping, perilune distribution, discrete mapping, cislunar space, DRO
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Poincaré Map
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Poincaré Map Explained | Discretization and Visualization of Continuous Dynamical Systems
  description: Detailed explanation of the Poincaré Map — definition, relationship with Poincaré Section, and applications in analyzing perilune distributions of cislunar orbit families
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Poincaré Map Explained | Discretization and Visualization of Continuous Dynamical Systems
  description: Detailed explanation of the Poincaré Map — definition, relationship with Poincaré Section, and applications in analyzing perilune distributions of cislunar orbit families
  image: /logo.png
permalink: /en/glossary/dynamics/poincare-map/
---

# Poincaré Map

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A **Poincaré Map** is a visualization method that reduces a continuous dynamical system to a discrete mapping. Its basic idea is to select a lower-dimensional cross-section in phase space (called a **Poincaré Section**) and record the state points each time the orbit crosses this section, transforming the continuous orbital evolution into a distribution of discrete points on the section. The Poincaré Map is named after the French mathematician Henri Poincaré and is a vital tool for analyzing nonlinear dynamical systems, identifying periodic orbits, and detecting chaotic behavior.

In the study of cislunar Distant Retrograde Orbit (DRO) families, Poincaré Maps are used to display the distribution characteristics of perilunes for family members in phase space, thereby revealing structural patterns of the orbit family and windows useful for transfer design.

## Core Elements

### Relationship with Poincaré Section

The Poincaré Map and Poincaré Section are closely related but have different emphases:

| Concept | Emphasis | Description |
|:---|:---|:---|
| **Poincaré Section** | Geometric object | An $(N-1)$-dimensional or $(N-2)$-dimensional hyperplane in phase space |
| **Poincaré Map** | Mapping and visualization | The distribution diagram of orbit crossing points on the section |

In short, the Poincaré Section is the "cutting plane," and the Poincaré Map is the "pattern seen when projecting onto that plane."

### Mathematical Definition

Given a continuous dynamical system $\dot{\mathbf{x}} = \mathbf{f}(\mathbf{x})$, $\mathbf{x} \in \mathbb{R}^N$, select a section $\Sigma \subset \mathbb{R}^{N-1}$. The **First Return Map** $P: \Sigma \to \Sigma$ is defined as:

$$P(\mathbf{x}_k) = \mathbf{x}_{k+1}$$

where $\mathbf{x}_k$ is the state at the $k$-th crossing of $\Sigma$, and $\mathbf{x}_{k+1}$ is the state at the next crossing. This mapping is the Poincaré map, and its graphical representation is the Poincaré Map.

### Physical Meaning of Crossing Point Patterns

The distribution patterns of discrete points in a Poincaré Map reflect the dynamical nature of the orbit:

| Crossing Pattern | Corresponding Orbit Type |
|:---|:---|
| **Isolated points** (finite number) | Periodic orbit (period is an integer multiple of the crossing count) |
| **Closed curves** | Quasi-periodic orbit (orbit on a torus) |
| **Dense scattered points filling a region** | Chaotic orbit |
| **Sparse scattered points** | Long-period orbit or transitional orbit |

### Application to DRO Orbit Families

Wei et al. (2026) used Poincaré Maps in their study of cislunar DRO orbit families to display the perilune distribution of each DRO member:

1. **Section selection**: Using the perilune ($r = r_{\text{min}}$) as the section, recording the state $(r, v_r, v_t)$ or its projection each time the orbit passes through the perilune
2. **Family member marking**: Plotting the perilunes of DRO orbits with different periods on the same Poincaré Map
3. **Transfer window identification**: Observing the density and directional characteristics of perilune distributions on the Poincaré Map to identify windows suitable for powered lunar flyby injection

For a single DRO orbit, since DRO is a periodic orbit, its perilune appears as **fixed discrete points** on the Poincaré Map. The overall distribution of the DRO orbit family on the Poincaré Map exhibits a regular curvilinear structure, reflecting the continuous variation of perilune states with orbital parameters (such as period).

### Classical Applications in Low-Dimensional Systems

In two-dimensional autonomous systems, the Poincaré Map reduces to a sequence of points on a one-dimensional section, offering the most intuitive visualization:

- **Center-type fixed points**: Correspond to stable periodic orbits, with surrounding points forming closed rings
- **Saddle-type fixed points**: Correspond to unstable periodic orbits (e.g., Lyapunov orbits), with surrounding points arranged along stable/unstable manifolds
- **Invariant tori**: Closed curves on the section, corresponding to quasi-periodic motion

In the planar restricted CR3BP, Poincaré Maps are commonly used to display crossing point distributions on the $x$-axis crossing section ($y = 0$, $\dot{y} > 0$), distinguishing different orbit family types and chaotic regions.

### Key Numerical Implementation Considerations

Producing high-quality Poincaré Maps requires attention to:

- **Propagation accuracy**: Long-duration propagation requires high-precision integrators (e.g., Runge-Kutta 8(9) or symplectic integrators)
- **Crossing detection**: Detect crossing times through sign changes, then interpolate for precise crossing points
- **Coordinate selection**: Choose section coordinates that make different orbit family features most visible
- **Sufficient propagation time**: Chaotic orbits require enough propagation time to reveal their scattering characteristics

## Application Value

The core value of Poincaré Maps in cislunar space dynamics research lies in:

- **Orbit Family Structure Visualization**: Reducing the high-dimensional phase space orbit family relationships to a 2D diagram, intuitively displaying topological relationships within the family
- **Perilune Distribution Analysis**: For DRO transfer design, Poincaré Maps clearly show the position and velocity direction distributions of different DRO orbit perilunes
- **Chaos Identification**: By observing whether crossing points form regular patterns, quickly determining whether an orbit is in a chaotic state
- **Transfer Design Aid**: Combined with orbit family data generated by continuation methods, Poincaré Maps provide an intuitive "map" for transfer window screening

## Related Concepts

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Continuation](/en/glossary/dynamics/continuation/)
- [Differential Correction](/en/glossary/dynamics/differential-correction/)
- [Impulsive Maneuver](/en/glossary/dynamics/impulsive-maneuver/)
- Invariant Torus
- Chaotic Orbit

## References

- Wei Z, et al. Research on powered lunar flyby transfer injection to cislunar distant retrograde orbit families[J]. Journal of Beijing University of Aeronautics and Astronautics, 2026.
- Poincaré H. Les méthodes nouvelles de la mécanique céleste[M]. Gauthier-Villars, 1892.
- Parker T S, Chua L O. Practical Numerical Algorithms for Chaotic Systems[M]. Springer, 1989.
- Hénon M. Numerical exploration of the restricted problem, V: Hill's case[J]. Astronomy and Astrophysics, 1969, 1: 223-267.
