---
title: Circular Restricted Three-Body Problem (CR3BP)
description: "The foundational mathematical model for cislunar orbital dynamics: a massless spacecraft under the gravity of two primaries (Earth and Moon) in circular orbits about their barycentergoverning equations, nondimensionalization, mass parameter, Jacobi constant, zero-velocity surfaces, periodic orbit families, and model extensions."
keywords: Circular Restricted Three-Body Problem, CR3BP, CRTBP, R3BP, synodic frame, Jacobi constant, zero-velocity surface, mass parameter, nondimensionalization, libration points, periodic orbits, cislunar dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Circular Restricted Three-Body Problem (CR3BP)
  desc: The foundational model for cislunar dynamics — from governing equations to periodic orbit computation.
  image: /logo.png
og:
  title: Circular Restricted Three-Body Problem (CR3BP) | Cislunar Dynamics Foundations
  description: "The foundational mathematical model for cislunar orbital dynamics: a massless spacecraft under the gravity of two primaries in circular orbits. Covers model assumptions, nondimensionalization, equations of motion, mass parameter, Jacobi constant, and extensions."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Circular Restricted Three-Body Problem (CR3BP) | Cislunar Dynamics Foundations
  description: "The foundational mathematical model for cislunar orbital dynamics: a massless spacecraft under the gravity of two primaries in circular orbits. Covers model assumptions, nondimensionalization, equations of motion, and extensions."
  image: /logo.png
permalink: /en/glossary/dynamics/cr3bp/
---

# Circular Restricted Three-Body Problem (CR3BP)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition and Hierarchy

The Circular Restricted Three-Body Problem (CR3BP, also written CRTBP) is the most widely used mathematical model in cislunar orbital dynamics. It belongs to the **Restricted Three-Body Problem** (R3BP) family: a special case of the classical three-body problem defined by two fundamental simplifications (Szebehely 1967; Vallado 2022):

1. **Restricted assumption**: The third body (spacecraft) has negligible mass; it is attracted by the two primaries but does not affect their motion.
2. **Gravity-only assumption**: Only point-mass gravitation acts; no other forces.

The CR3BP adds a **circular-orbit assumption**: both primaries orbit their common barycenter in uniform circular motion. If the primaries move on elliptical orbits, the model becomes the **Elliptic Restricted Three-Body Problem** (ER3BP). If a fourth body is introduced, one arrives at the **Bicircular Restricted Four-Body Problem** (BCR4BP). In engineering practice, restricted three-body problem implicitly refers to the CR3BP unless eccentricity effects are explicitly of interest (Koon et al. 2011).

## Synodic Frame and Nondimensionalization

The standard framework for the CR3BP is the **synodic frame** (rotating frame): a reference frame with origin at the barycenter, rotating with the primaries' mean motion. In this frame, both primaries are fixed on the x-axis; the equations of motion become autonomous at the cost of introducing Coriolis and centrifugal terms. See [Synodic Frame](/en/glossary/fundamentals/synodic-frame/) for details.

To eliminate order-of-magnitude disparities and reduce the number of independent parameters, the CR3BP is conventionally nondimensionalized (Szebehely 1967; Gómez et al. 2001):

| Symbol | Name | Definition | Earth--Moon SI Value |
| :--- | :--- | :--- | :--- |
| DU | Distance Unit | Separation $\overline{P_1 P_2}$ | $3.844 \times 10^{5}$ km |
| MU | Mass Unit | $m_1 + m_2$ | $6.047 \times 10^{24}$ kg |
| TU | Time Unit | $\sqrt{\mathrm{DU}^3 / (G \cdot \mathrm{MU})}$ | $3.752 \times 10^{5}$ s (~4.34 d) |

In these units, $G=1$, the primaries' mean motion $n=1$, the orbital period is $T=2\pi$ TU, and the sole remaining parameter is the **mass parameter** $\mu$.

## Mass Parameter $\mu$

$\mu$ is defined as the smaller primary's fractional mass:

$$\mu = \frac{m_2}{m_1 + m_2}, \quad m_2 \le m_1$$

In the synodic frame, the larger primary $P_1$ sits at $(-\mu, 0, 0)$ and the smaller $P_2$ at $(1-\mu, 0, 0)$. Common system values (Vallado 2022):

| System | $\mu$ | Note |
| :--- | :--- | :--- |
| Earth--Moon | $0.01215$ | Default context of this glossary |
| Sun--Earth | $3.0404 \times 10^{-6}$ | $L_1$/$L_2$ missions (JWST, SOHO) |
| Sun--Jupiter | $9.537 \times 10^{-4}$ | Interplanetary transport studies |
| Copenhagen Problem | $0.5$ | Equal-mass theoretical benchmark (Szebehely 1967) |

$\mu$ determines all libration-point positions, zero-velocity-surface topology, and orbit-family characteristics. In the limit $\mu \to 0$, the CR3BP reduces to **Hill's problem**, with the origin shifted to the smaller primary.

## Equations of Motion

After nondimensionalization, the CR3BP equations of motion in the synodic frame read (Koon et al. 2011; Szebehely 1967):

$$
\begin{cases}
\ddot{x} - 2\dot{y} = \dfrac{\partial \Omega}{\partial x} \\[1em]
\ddot{y} + 2\dot{x} = \dfrac{\partial \Omega}{\partial y} \\[1em]
\ddot{z} = \dfrac{\partial \Omega}{\partial z}
\end{cases}
$$

where the effective potential $\Omega$ (also called pseudo-potential) is:

$$
\Omega(x,y,z) = \frac{1}{2}(x^2 + y^2) + \frac{1-\mu}{r_1} + \frac{\mu}{r_2}
$$

with $r_1 = \sqrt{(x+\mu)^2 + y^2 + z^2}$ (distance to $P_1$) and $r_2 = \sqrt{(x-1+\mu)^2 + y^2 + z^2}$ (distance to $P_2$).

The terms $-2\dot{y}$ and $+2\dot{x}$ represent the **Coriolis force**; the gradient of $\frac{1}{2}(x^2+y^2)$ corresponds to the **centrifugal force**. Coriolis force is linear in velocity and does zero net work on the system; this is the dynamical origin of the Jacobi constant's conservation.

## Jacobi Constant and Allowable Regions

The CR3BP possesses exactly one integral of motion: the **Jacobi constant** $C$ (Jacobi 1836):

$$C = 2\Omega - v^2, \quad v^2 = \dot{x}^2 + \dot{y}^2 + \dot{z}^2$$

This is the energy-like quantity in the rotating frame: larger $C$ implies lower kinetic energy and a more restricted reachable region.

Setting $v=0$ yields the **zero-velocity surface** (ZVS): $2\Omega(x,y,z) = C$. In the planar case it reduces to a **zero-velocity curve** (ZVC). The ZVS partitions configuration space: a spacecraft cannot exist where $2\Omega < C$.

The ZVS topology changes at critical Jacobi values $C_1 > C_2 > C_3 > C_4 = C_5$, each corresponding to a libration point's neck-opening condition (Koon et al. 2011):

| $C$ range | Accessible region |
| :--- | :--- |
| $C > C_1$ | Confined to two disjoint neighborhoods of $P_1$ and $P_2$ |
| $C_1 > C > C_2$ | $L_1$ neck opens; the two primary neighborhoods connect |
| $C_2 > C > C_3$ | $L_2$ neck opens; reachable region extends exterior |
| $C_3 > C > C_4$ | $L_3$ neck opens; far side also connects |
| $C < C_4 = C_5$ | Entire space accessible except the collision singularities |

## Libration Points

The five libration points $L_1$--$L_5$ are equilibrium solutions of the CR3BP obtained by setting all accelerations and velocities to zero. The three collinear points $L_1$, $L_2$, $L_3$ lie on the x-axis with saddle $\times$ center $\times$ center topology (unstable); the two triangular points $L_4$, $L_5$ form equilateral triangles with the primaries and are linearly stable for the Earth--Moon mass ratio. See [Libration Point](/en/glossary/dynamics/libration-point/) for a detailed discussion.

## Planar and Three-Dimensional Cases

### Planar CR3BP (PCR3BP)

Restricting motion to the orbital plane ($z = \dot{z} = 0$) yields the Planar CR3BP, reducing phase space from six to four dimensions. The PCR3BP preserves all essential CR3BP dynamical features (libration points, invariant manifolds, chaos) while enabling two-dimensional **Poincaré sections** to visualize phase-space structure, something impossible in the full six-dimensional CR3BP. On a PCR3BP Poincaré section, invariant curves correspond to (quasi-)periodic orbits, KAM tori survive near stable regions, and chaotic seas mark hyperbolic zones.

### Three-Dimensional CR3BP

The full 3D CR3BP is the standard framework for analyzing cislunar periodic orbit families. The most important families include (Howell 1984; Zimovan 2017):

- **Lyapunov orbits**: Planar periodic orbits symmetric about the x-axis and the xOz plane

- **Halo orbits**: 3D periodic orbits with xOz-plane mirror symmetry; split into northern and southern families at sufficient out-of-plane amplitude $A_z$

- **Near Rectilinear Halo Orbits (NRHO)**: Resonant quasi-halo family with very low perilune, primarily used on the $L_2$ side (Gateway mission orbit)

- **Distant Retrograde Orbits (DRO)**: Large-amplitude retrograde periodic orbits near $P_2$, more stable than Lyapunov/Halo orbits

These families are parameterized through **continuation**: propagating a known solution along a parameter direction and refining each step with shooting/differential correction. See [Continuation](/en/glossary/dynamics/continuation/), [Shooting Method](/en/glossary/dynamics/differential-correction/), and [Differential Correction](/en/glossary/dynamics/differential-correction/).

## Frame Translation and Relative Dynamics

When patching together two different CR3BP systems (e.g., Sun--Earth and Earth--Moon), one must transform state vectors between the two synodic frames; this is known as **three-body system translation**. The origin shifts from the Sun--Earth barycenter to the Earth--Moon barycenter while preserving the physical state in an inertial frame, with appropriate angular velocity corrections applied between the rotating frames.

Relative CR3BP dynamics examines the motion of two spacecraft within the same primary system and forms the basis for formation flying and rendezvous missions. In the synodic frame, the relative acceleration equations include additional Coriolis coupling and centrifugal-gradient terms, causing long-term relative-orbit evolution fundamentally different from Keplerian relative motion.

## Extensions and Variants

The CR3BP has several important extensions that preserve the basic framework while adding complexity along specific dimensions:

- **ER3BP** (Elliptic Restricted Three-Body Problem): Primaries on elliptical orbits; time-varying separation renders the system non-autonomous and destroys the Jacobi integral. See [ER3BP](/en/glossary/dynamics/er3bp/).

- **BCR4BP** (Bicircular Restricted Four-Body Problem): Introduces a fourth-body (e.g., the Sun) perturbation atop the CR3BP. See [BCR4BP](/en/glossary/dynamics/bcr4bp/).

- **CRTBP-LT** (CR3BP with Low-Thrust): Adds continuous low-thrust acceleration to the right-hand side; used for electric-propulsion trajectory optimization.

- **SSCRTBP** (Solar Sail CR3BP): Includes solar radiation pressure acceleration in addition to gravitation; sail orientation serves as an additional control degree of freedom.

- **Perturbed CR3BP**: Augments the equations with $J_2$, solar radiation pressure, third-body gravity, and other perturbations; serves as an intermediate step toward high-fidelity models.

## Related Concepts

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

- [Libration Point](/en/glossary/dynamics/libration-point/)

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)

- [ER3BP](/en/glossary/dynamics/er3bp/)

- [BCR4BP](/en/glossary/dynamics/bcr4bp/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Continuation](/en/glossary/dynamics/continuation/)

## References

- Szebehely, 1967, *Theory of Orbits: The Restricted Problem of Three Bodies*. The classic treatise on the CR3BP, spanning the synodic frame, nondimensionalization, libration points, and periodic orbits.

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, 4th ed. Chapter 2 treats the restricted three-body and N-body equations of motion; Chapter 3 defines the Earth--Moon and Sun--Earth synodic frames.

- Koon, Lo, Marsden & Ross, 2011, *Dynamical Systems, the Three-Body Problem, and Space Mission Design*. Systematically introduces modern dynamical-systems methods (invariant manifolds, Poincaré sections, heteroclinic connections) to CR3BP trajectory design.

- Gómez et al., 2001, *Dynamics and Mission Design near Libration Points*, Vols. I--IV. The standard reference for dynamics and mission design near libration points, covering the bicircular problem, homotopy methods, and solar-sail extensions.

- Howell, 1984, "Three-Dimensional, Periodic, 'Halo' Orbits". The first systematic numerical generation and parameterization of Halo orbit families.

- Zimovan, 2017, *Characteristics and Design Strategies for Near Rectilinear Halo Orbits within the Earth-Moon System*, Purdue Ph.D. The standard reference for Earth-Moon L1/L2 NRHO solution strategies.
