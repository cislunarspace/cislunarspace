---
title: Poincaré Map (Poincaré Return Map)
description: "The discrete first-return map P: Σ → Σ induced by a Poincaré section, transforming the analysis of periodic, quasi-periodic and chaotic motion of a continuous flow into a discrete dynamical systems problem. Covers dimensionality and stability of fixed points in planar/spatial CR3BP, glyph visualization of higher-dimensional maps, the periapse map for transit classification, the Tisserand–Poincaré graph for gravity-assist sequencing, and applications to heteroclinic/homoclinic connections and transfer design."
keywords: Poincaré Map, First Return Map, periapse map, Tisserand-Poincaré graph, fixed point, monodromy matrix, heteroclinic, homoclinic, cislunar transfer design
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Poincaré Map (Poincaré Return Map)
  desc: "The discrete first-return map P: Σ → Σ; transfers periodic/quasi-periodic/chaotic analysis of a flow into a discrete problem."
  image: /logo.png
og:
  title: "Poincaré Map Explained | Glossary"
  description: "The discrete first-return map P: Σ → Σ induced by a Poincaré section; covers dimensionality and fixed-point stability, glyph visualization, periapse and Tisserand-Poincaré maps, with applications to heteroclinic/homoclinic connections and transfer design."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Poincaré Map Explained | Glossary"
  description: "The discrete first-return map P: Σ → Σ induced by a Poincaré section; covers dimensionality and fixed-point stability, glyph visualization, periapse and Tisserand-Poincaré maps, with applications to heteroclinic/homoclinic connections and transfer design."
  image: /logo.png
permalink: /en/glossary/dynamics/poincare-map/
---

# Poincaré Map (Poincaré Return Map)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A **Poincaré map** is the discrete first-return map $P:\Sigma\to\Sigma$ induced by a [Poincaré section](/en/glossary/dynamics/poincare-section/) $\Sigma$: starting from a crossing $\mathbf{x}_k\in\Sigma$, integrate the flow until the next crossing in the prescribed direction; that next crossing is $\mathbf{x}_{k+1}=P(\mathbf{x}_k)$. Iterating $P$ converts the analysis of periodic, quasi-periodic and chaotic motion of the continuous flow into a problem in discrete dynamical systems (Poincaré 1892; Parker & Chua 1989).

Closely related but distinct concepts:

| Concept | Emphasis | Object |
| :--- | :--- | :--- |
| **Poincaré section** | Geometry | The hypersurface $\Sigma$ on which crossings are recorded |
| **Poincaré map** | Dynamics | The discrete map $P$ and the patterns formed by its iterates |

Section versus map is analogous to "the cutting plane" versus "the pattern seen after projecting crossings onto it".

## Dimensionality and visualization

Given a constraint on the Jacobi constant $C$, the section reduces the flow dimension by one, and the map operates on a $(N-2)$-dimensional state (Haapala & Howell 2014):

- **Planar CR3BP**: the map is 2D; a planar projection fully represents the state, and contour intersections directly identify connections.

- **Spatial CR3BP**: the map is 4D and cannot be fully represented by a planar projection. **Glyph representations** attach a vector (or a chain of vectors) to each base point: the base point encodes position $(y,z)$, the vector encodes the in-plane velocity $(\dot y,\dot z)$, and additional links encode out-of-plane components. Glyph maps make heteroclinic connections between halo orbits visually identifiable (Haapala & Howell 2014; Whittington 2022).

## Fixed points and stability

Periodic orbits of the continuous flow correspond to **fixed points** (or $k$-cycles) of $P$. The stability type is read off the eigenvalues of the **monodromy matrix** $DP$ linearized about the fixed point:

- **Center-type fixed point**: stable periodic orbit; surrounding iterates form closed curves (quasi-periodic tori).

- **Saddle-type fixed point**: unstable periodic orbit (e.g. a Lyapunov orbit); iterates align with the stable/unstable manifolds.

Iterates form closed curves on **invariant tori** (quasi-periodic motion) or fill regions densely (**chaotic orbits**). Locating periodic orbits via the map is often the first step of a multiple-shooting or [continuation](/en/glossary/dynamics/continuation/) scheme.

## Specialized maps

### Periapse map

Defined on the [periapse section](/en/glossary/dynamics/poincare-section/) $\Sigma=\{\dot\rho=0,\ddot\rho>0\}$. In the planar problem its projection into configuration space fully represents the state and reveals escape/capture structure near the smaller primary (Villac & Scheeres 2004; Paskowitz & Scheeres 2006). Variants named by central body — **perigee map**, **perilune map**, **apse map** — are the same construction with a different reference primary; the perilune map is widely used to screen lunar-gravity-assist + WSB capture transfers from the Earth and to analyze the perilune distribution of DRO family members (Scott & Spencer 2010).

### Tisserand–Poincaré (T-P) graph

An extension of the Tisserand graph (a patched-conic gravity-assist sequencing tool) to the CR3BP, introduced by Campagnola & Russell (2010). Axes are osculating periapsis and apoapsis distances (or period) relative to the primary; contours of the Tisserand parameter $T=3-V_\infty^2$ are sampled once per revolution at a fixed Poincaré crossing (typically the negative-$x$ axis). The T-P graph covers the regime $T<3$ where $V_\infty$ becomes imaginary and the patched-conic Tisserand graph fails, enabling systematic design of high-altitude flyby sequences in planetary-moon tours (Lantoine & Russell 2010; Yang et al. 2023; Shen et al. 2026).

## Applications

- **Heteroclinic and homoclinic connections**: on the $x=1-\mu$ map, intersections of the unstable manifold of one periodic orbit with the stable manifold of another identify maneuver-free transfers; planar cases reduce to contour intersections, spatial cases use glyph inspection followed by differential correction (Gómez et al. 2001; Haapala & Howell 2014).

- **Transfer initial-guess generation**: the map compresses a high-dimensional solution space into a 2D image, allowing interactive selection of transfer candidates that are then refined by [differential correction](/en/glossary/dynamics/differential-correction/) or multiple shooting.

- **Long-term-capture orbit search**: periapse maps classify non-transit (long-term-capture) trajectories; periodic orbits are seeded from nearby "mirror configurations" and refined by continuation (Haapala & Howell 2014).

- **DRO family analysis**: a perilune map of DRO members shows the distribution of perilune states versus orbit parameter, identifying windows suitable for lunar-gravity-assist insertion.

## Numerical notes

A typical Earth–Moon map for ~1000 manifold trajectories integrated over ~1.2 years takes 2–3 seconds in MATLAB with C-integration subroutines; Sun–Earth maps over ~100 years take a comparable time (Haapala & Howell 2014). Symplectic integrators are preferred for very long integrations to suppress energy drift.

## Related concepts

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Continuation](/en/glossary/dynamics/continuation/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Jacobi Constant](/en/glossary/dynamics/jacobi-integral/)

## References

- Poincaré H. *Les méthodes nouvelles de la mécanique céleste*. Gauthier-Villars, 1892.

- Parker T S, Chua L O. *Practical Numerical Algorithms for Chaotic Systems*. Springer, 1989.

- Gómez G, Llibre J, Martínez R, Simó C. *Dynamics and Mission Design near Libration Points — Vol. II*. World Scientific, 2001.

- Villac B F, Scheeres D J. On the concept of periapsis in Hill's problem. *Dynamics & Control of Systems*, 2004.

- Paskowitz M E, Scheeres D J. Geometry of quasiperiodic orbits in the Hill problem. *Celestial Mechanics and Dynamical Astronomy*, 2006.

- Campagnola S, Russell R P. The Tisserand-Poincaré graph for multi-body gravity assists. *AAS/AIAA Astrodynamics Specialist Conference*, 2010.

- Haapala A F, Howell K C. Representations of higher-dimensional Poincaré maps with applications to spacecraft trajectory design. *Acta Astronautica*, 2014, 96: 23–46.

- Scott C J, Spencer D B. Transfer and capture into distant retrograde orbits via Poincaré and Periapsis maps. *JGCD*, 2010. doi:10.2514/1.47791.

- Whittington T R. *Multi-body trajectory design in the Earth-moon region utilizing Poincaré maps*. M.S. thesis, Purdue University, 2022.

- Yang J, et al. Review of trajectory design and optimization for Jovian system exploration. *Acta Astronautica*, 2023.
