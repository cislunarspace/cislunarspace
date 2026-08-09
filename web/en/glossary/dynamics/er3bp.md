---
title: Elliptic Restricted Three-Body Problem (ER3BP)
description: "The elliptical-orbit generalization of the CR3BP: both primaries revolve around their barycenter on Keplerian ellipses, making the system non-autonomous and destroying the Jacobi integral. Covers the pulsating synodic frame, equations of motion, Floquet-theoretic stability analysis, and the $e \\to 0$ reduction to CR3BP."
keywords: Elliptic Restricted Three-Body Problem, ER3BP, elliptic three-body, ERTBP, pulsating frame, Floquet theory, non-autonomous system, periodic orbits
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Elliptic Restricted Three-Body Problem (ER3BP)
  desc: The non-circular generalization of CR3BP — how autonomy and conservation break down under eccentricity.
  image: /logo.png
og:
  title: Elliptic Restricted Three-Body Problem (ER3BP) | Cislunar Dynamics
  description: "The elliptical-orbit generalization of the CR3BP: non-autonomous dynamics, loss of the Jacobi integral, pulsating frame formulation, and Floquet stability analysis."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Elliptic Restricted Three-Body Problem (ER3BP) | Cislunar Dynamics
  description: "The elliptical-orbit generalization of the CR3BP: non-autonomous dynamics, loss of the Jacobi integral, pulsating frame formulation, and Floquet stability analysis."
  image: /logo.png
permalink: /en/glossary/dynamics/er3bp/
---

# Elliptic Restricted Three-Body Problem (ER3BP)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Elliptic Restricted Three-Body Problem (ER3BP, also ERTBP) is the natural generalization of the [CR3BP](/en/glossary/dynamics/cr3bp/) to elliptical orbits. The two primaries no longer revolve in uniform circular motion but instead follow Keplerian ellipses about their common barycenter (eccentricity $e \in [0,1)$), with all other restricted assumptions held.

This seemingly minor change fundamentally alters the mathematical character of the problem (Szebehely 1967; Broucke 1969):

- The inter-primary distance $r_{12}$ is no longer constant but a $2\pi$-periodic function of true anomaly $f$: $r_{12}(f) = a(1-e^2)/(1+e\cos f)$, where $a$ is the semi-major axis.

- The system is **no longer autonomous** — the equations of motion depend explicitly on time (or equivalently on $f$), with primary positions varying periodically.

- The **Jacobi integral ceases to exist** — energy is not conserved in the time-varying system; a spacecraft can change its mechanical energy without expending propellant.

When eccentricity is non-negligible (e.g., lunar orbital eccentricity $\approx 0.0549$), the ER3BP is more faithful to real dynamics than the CR3BP, but the analysis is substantially harder due to the loss of autonomy and conservation.

## Pulsating Rotating Frame

To keep the primaries stationary in the reference frame, the ER3BP typically employs a **pulsating synodic frame** (dimensionless pulsating coordinate system). Unlike the constant-distance CR3BP synodic frame, the ER3BP scales distance and time units by the instantaneous inter-primary distance $r_{12}(f)$, with true anomaly $f$ (or time $t$) as the independent variable (Szebehely 1967; Gómez et al. 2001).

In this frame, the nondimensionalized equations take the form:

$$
\begin{cases}
\tilde{x}'' - 2\tilde{y}' = \dfrac{1}{1+e\cos f} \dfrac{\partial \tilde{\Omega}}{\partial \tilde{x}} \\[1em]
\tilde{y}'' + 2\tilde{x}' = \dfrac{1}{1+e\cos f} \dfrac{\partial \tilde{\Omega}}{\partial \tilde{y}} \\[1em]
\tilde{z}'' + \tilde{z} = \dfrac{1}{1+e\cos f} \dfrac{\partial \tilde{\Omega}}{\partial \tilde{z}}
\end{cases}
$$

where primes denote derivatives with respect to $f$, and $\tilde{\Omega}$ is formally identical to the CR3BP effective potential $\Omega$, but the left-hand side gains a time-varying factor depending on $e$ and $f$, plus an additional $\tilde{z}$ term absent in the CR3BP.

## Floquet Theory and Periodic-Orbit Stability

Periodic orbits in the ER3BP must be $T=2\pi$ (in the $f$-domain) periodic solutions. Because the system is explicitly $f$-dependent (non-autonomous), stability cannot be assessed via the CR3BP eigenvalue method and instead requires **Floquet theory**.

Given a periodic reference orbit $\mathbf{x}_0(f)$, the variational dynamics are governed by a linear system with $2\pi$-periodic coefficients:

$$\delta \mathbf{x}'(f) = \mathbf{A}(f)\,\delta \mathbf{x}(f), \quad \mathbf{A}(f+2\pi) = \mathbf{A}(f)$$

Integrating over one full period yields the **monodromy matrix** $\mathbf{M}$: $\delta \mathbf{x}(2\pi) = \mathbf{M}\,\delta \mathbf{x}(0)$. Its eigenvalues are the Floquet multipliers; stability requires $|\lambda| \le 1$ for all of them. Unlike the constant Jacobian of the CR3BP, the ER3BP's $\mathbf{A}(f)$ varies periodically and must be integrated numerically over the full period. See [Floquet Multiplier](/en/glossary/dynamics/monodromy-matrix/) and [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/).

## Relationship to the CR3BP

- **Limit case**: As $e \to 0$, $r_{12}$ becomes constant, the factor $1/(1+e\cos f) \to 1$, and the pulsating frame reduces to the ordinary CR3BP synodic frame; the Floquet multipliers approach the eigenvalues of the constant CR3BP Jacobian.

- **Planar vs. spatial ER3BP**: The Planar ER3BP (PER3BP) confines motion to the orbital plane and is analyzed via $f$-section Poincaré maps; the spatial ER3BP retains full 3D degrees of freedom, yielding more complex orbit families.

- **Resonance effects**: At certain eccentricities, ER3BP periodic orbits can deviate significantly or bifurcate from their CR3BP counterparts — an effect that long-duration mission design must account for.

## Related Concepts

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [BCR4BP](/en/glossary/dynamics/bcr4bp/)

- [Libration Point](/en/glossary/dynamics/libration-point/)

- [Floquet Multiplier](/en/glossary/dynamics/monodromy-matrix/)

- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)

- [Continuation](/en/glossary/dynamics/continuation/)

## References

- Szebehely, 1967, *Theory of Orbits: The Restricted Problem of Three Bodies* — Chapter 10 systematically treats the ER3BP pulsating frame and equations of motion.

- Broucke, 1969, "Periodic Orbits in the Elliptic Restricted Three-Body Problem" — An early systematic study of ER3BP periodic orbits.

- Gómez et al., 2001, *Dynamics and Mission Design near Libration Points*, Vol. III — Discusses continuation and Floquet stability of ER3BP libration-point periodic orbits.

- Campagnola, 2010, *New Techniques in Astrodynamics for Moon Systems Exploration*, Ph.D. — Contains practical numerical methods for ER3BP trajectory design.
