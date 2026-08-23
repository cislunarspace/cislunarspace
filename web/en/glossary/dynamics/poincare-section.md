---
title: Poincaré Section (Surface of Section)
description: A lower-dimensional submanifold Σ in phase space used to reduce a continuous flow to a discrete point sequence; when combined with an energy integral (Jacobi constant in CR3BP) it lowers the effective dimension by two. Covers configuration hyperplanes (y=0, x=1−μ), event-defined sections (periapse ρ̇=0, ρ̈>0), pseudo-arclength hyperplanes, and their use in libration-point orbit family identification and transfer seeding.
keywords: Poincaré Section, Surface of Section, SOS, phase space reduction, Jacobi constant, periapse section, libration point orbit, invariant manifold, cislunar space
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Poincaré Section (Surface of Section)
  desc: A lower-dimensional submanifold of phase space; combined with the Jacobi constant, it reduces dimension by two.
  image: /logo.png
og:
  title: "Poincaré Section Explained | Glossary"
  description: A lower-dimensional submanifold Σ in phase space used to reduce a continuous flow to a discrete point sequence; when combined with an energy integral it lowers the effective dimension by two. Covers configuration hyperplanes, event-defined sections, and pseudo-arclength hyperplanes, with applications to libration-point orbit family identification and transfer seeding.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Poincaré Section Explained | Glossary"
  description: A lower-dimensional submanifold Σ in phase space used to reduce a continuous flow to a discrete point sequence; when combined with an energy integral it lowers the effective dimension by two. Covers configuration hyperplanes, event-defined sections, and pseudo-arclength hyperplanes, with applications to libration-point orbit family identification and transfer seeding.
  image: /logo.png
permalink: /en/glossary/dynamics/poincare-section/
---

# Poincaré Section (Surface of Section)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A **Poincaré section** (also: *surface of section*, SOS) is a lower-dimensional submanifold $\Sigma$ of phase space used to reduce a continuous flow to a discrete sequence of points. Classical definition: for an autonomous flow $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x})$, $\mathbf{x}\in\mathbb{R}^N$, choose an $(N-1)$-dimensional hypersurface $\Sigma$ and record every crossing of $\Sigma$ in a fixed direction (one-sided section); the set of crossings is the Poincaré section plot. When the system has an energy integral (e.g. the Jacobi constant $C$ in CR3BP), the flow is confined to an energy surface, and combining that with the section reduces dimension by two: the planar CR3BP collapses to a 2D map, the spatial problem to a 4D map (Poincaré 1892; Hénon 1969; Haapala & Howell 2014).

The section is only the cut; the first-return map $P:\Sigma\to\Sigma$ induced on it is the [Poincaré map](/en/glossary/dynamics/poincare-map/). The two are sometimes conflated in the literature, but separating the section (a geometric object) from the map (a discrete dynamical system) keeps the concepts clear.

## Three families of section construction

### 1. Configuration-hyperplane sections

The most common choice: $\Sigma$ is the plane on which one coordinate equals a constant. Typical choices in the CR3BP synodic frame:

- **$y=0$ section**: records the state when the orbit crosses the primary–secondary line, usually one-sided via $\dot{y}>0$ or $\dot{y}<0$ to avoid double counting; well suited to displaying the $x$–$\dot{x}$ phase plane.

- **$x=1-\mu$ section** (the $x$ location of $P_2$): the de facto standard for $L_1$/$L_2$ manifold patching and near-libration-point transfers in the Earth–Moon and Sun–Earth systems (Gómez et al. 2001; Haapala & Howell 2014). Allows 2D or 4D plots of $(y,z)$-related variables.

- **$x=x_{L_i}$ section**: taken at a libration point to study transit/non-transit trajectories through the gateways (Koon et al. 2000).

### 2. Event-defined sections

Defined by an event condition rather than a fixed coordinate plane. The most important is the **periapse surface of section** (Villac & Scheeres 2004; Paskowitz & Scheeres 2006):

$$\Sigma = \{\mathbf{x}\mid \dot{\rho}=0,\ \ddot{\rho}>0\},\qquad \rho=\sqrt{(x-x_{P_i})^2+y^2+z^2}$$

i.e. the distance from the spacecraft to a chosen primary $P_i$ is at a local minimum ($\dot{\rho}=0$) with outward radial acceleration ($\ddot{\rho}>0$, ensuring periapse rather than apoapse). Physical advantage: the velocity at the crossing is tangential, providing the minimum-energy baseline for impulsive transfers and lunar-gravity-assist window analysis. The apoapse section takes $\ddot{\rho}<0$. Haapala & Howell (2014) extended this to the spatial problem to classify transit trajectories and identify long-term lunar capture orbit families.

Common naming variants in Earth–Moon, Sun–Earth and planetary-moon engineering: **perigee section** (relative to Earth), **perilune section** (relative to the Moon), **periapse/apoapse section** (relative to an arbitrary primary), **apogee section**. These are the same construction with a different central body.

### 3. Pseudo-arclength hyperplane sections

To avoid numerical ill-conditioning when the flow runs nearly parallel to $\Sigma$, a **pseudo-arclength hyperplane** may be used:

$$\Sigma = \{\mathbf{x}\mid (\mathbf{x}-\mathbf{x}_0)\cdot\mathbf{n}=0\}$$

The normal $\mathbf{n}$ is not fixed to a coordinate axis but adapted along a reference trajectory so that each crossing is well conditioned, reducing interpolation error; frequently used for higher-dimensional manifold section representations.

## One-sided vs. two-sided; direction

Crossings are usually recorded in a fixed direction (e.g. $\dot{x}>0$), giving a **one-sided section** and avoiding duplicate symmetric points from a single periodic orbit. On a one-sided section, a periodic orbit corresponds to **isolated discrete points**; a quasi-periodic orbit to **closed curves** (torus trace); a chaotic orbit to a **dense scatter-filled region** (Arnol'd 1989; Wiggins 2003).

## Numerical implementation

- **Integrator accuracy**: long integrations need a high-order Runge–Kutta scheme (e.g. DOP853 with $10^{-14}$ relative/absolute tolerance) or a symplectic integrator, to prevent energy drift from contaminating the section.

- **Event detection**: use a root finder (e.g. Brent) to pin the crossing time precisely, then interpolate the crossing state; coarse-step scanning introduces systematic error.

- **Grid scan**: seed a uniform grid on $\Sigma$, integrate each point, and classify by crossing behavior; a standard method for systematic identification of ballistic capture solutions and transfer seeds.

- **Energy stacking**: overlay contours of varying Jacobi constant on a single section (e.g. $\theta_3=\pi/2$) to compose a map of all orbit families on one figure (Qiao et al. 2025).

## Applications

- **Libration-point orbit family identification**: on a $\theta_2=0$ or $\theta_3=\pi/2$ section, the Lyapunov, vertical Lyapunov, Lissajous, quasi-halo and halo (northern/southern) families show distinct geometric signatures; the section makes the bifurcation of halo orbits from Lyapunov orbits and the north/south halo symmetry directly legible (Qiao et al. 2025).

- **Manifold patching and transfer seeding**: on the $x=1-\mu$ section, intersections of the $L_1$ unstable manifold and the $L_2$ stable manifold identify candidate heteroclinic/homoclinic connections (Gómez et al. 2001; Haapala & Howell 2014).

- **Capture and escape analysis**: on a periapse section, the boundary between transit and non-transit points is carved out by the invariant manifold tubes asymptotic to Lyapunov orbits (Conley 1968; Koon et al. 2000).

- **Orbit identification and cataloguing**: projecting an observed state onto a section map identifies the orbit family of an unknown spacecraft, like looking up a dictionary (Qiao et al. 2025).

## Related concepts

- [Poincaré Map](/en/glossary/dynamics/poincare-map/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Jacobi Constant](/en/glossary/dynamics/jacobi-integral/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Central Manifold](/en/glossary/dynamics/center-manifold/)

- [Continuation](/en/glossary/dynamics/continuation/)

## References

- Poincaré H. *Les méthodes nouvelles de la mécanique céleste*. Gauthier-Villars, 1892.

- Hénon M. Numerical exploration of the restricted problem, V: Hill's case. *Astronomy & Astrophysics*, 1969, 1: 223–267.

- Conley C C. Low energy transit orbits in the restricted three-body problem. *SIAM J. Applied Math.*, 1968, 16(4): 732–746.

- Koon W S, Lo M W, Marsden J E, Ross S D. Heteroclinic connections between periodic orbits and resonance transitions in celestial mechanics. *Chaos*, 2000, 10(2): 427–469.

- Villac B F, Scheeres D J. On the concept of periapsis in Hill's problem. *Dynamics & Control of Systems*, 2004.

- Paskowitz M E, Scheeres D J. Geometry of quasiperiodic orbits in the Hill problem. *Celestial Mechanics and Dynamical Astronomy*, 2006.

- Gómez G, Llibre J, Martínez R, Simó C. *Dynamics and Mission Design near Libration Points. Vol. II*. World Scientific, 2001.

- Haapala A F, Howell K C. Representations of higher-dimensional Poincaré maps with applications to spacecraft trajectory design. *Acta Astronautica*, 2014, 96: 23–46.

- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points. *Chinese Journal of Aeronautics*, 2025.
