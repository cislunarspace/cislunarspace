---
title: Monodromy Matrix and Floquet Stability Theory（单值矩阵与Floquet稳定性分析）
description: The monodromy matrix is the state transition matrix integrated over one complete period of a periodic orbit. Its eigenvalues (Floquet multipliers) classify orbital stability — real multipliers $\lambda_1\lambda_2=1$ define the saddle structure, unit-modulus complex-conjugate pairs describe oscillatory modes. Covers Floquet theory, eigen-decomposition of collinear libration point orbits, Lyapunov exponents, error divergence rates, and bifurcation criteria.
keywords: monodromy matrix, Floquet multipliers, Floquet theory, periodic orbit stability, saddle structure, Lyapunov exponent, state transition matrix, eigenvalue decomposition, libration point, CR3BP, center-saddle
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Monodromy Matrix and Floquet Stability Theory
  desc: "Fundamental framework for periodic orbit stability: from monodromy matrix to Floquet multiplier classification."
  image: /logo.png
og:
  title: Monodromy Matrix and Floquet Stability Theory | Glossary
  description: The monodromy matrix is the state transition matrix integrated over one complete period. Its Floquet multipliers directly determine whether a periodic orbit is stable, unstable, or neutral. Covers Floquet theorem, eigen-mode decomposition of CR3BP periodic orbits, and Lyapunov exponential divergence.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Monodromy Matrix and Floquet Stability Theory | Glossary
  description: "From monodromy matrix to Floquet multipliers: the standard framework for periodic orbit stability and invariant manifold directions."
  image: /logo.png
permalink: /en/glossary/dynamics/monodromy-matrix/
---

# Monodromy Matrix and Floquet Stability Theory（单值矩阵与Floquet稳定性分析）

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The monodromy matrix $M = \Phi(T, 0)$ is the state transition matrix of a periodic-coefficient linear system evaluated over one complete period $T$. Its eigenvalues, known as Floquet multipliers, are the sole criterion for assessing the linear stability of a periodic orbit (Gómez et al. 2001, Ch.1; Meyer, Hall & Offin 2017, §4.3).

The Floquet-Lyapunov theorem states that the state transition matrix of a periodic Hamiltonian system can be uniquely decomposed as the product of a periodic symplectic matrix and an exponential matrix: $\Phi(t, 0) = P(t) e^{t K}$, where $P(t+T) = P(t)$ and $K$ is constant. The monodromy matrix equals $M = e^{T K}$, and its eigenvalues $\lambda_i$ are classified by magnitude into three modal types:

- $|\lambda_i| > 1$: **unstable mode**: neighboring trajectories diverge exponentially;

- $|\lambda_i| = 1$: **neutral / center mode**: periodic or quasi-periodic oscillation;

- $|\lambda_i| < 1$: **stable mode**: neighboring trajectories converge exponentially.

## Floquet Mode Decomposition of CR3BP Periodic Orbits

The full CR3BP state space is 6-dimensional (3 positions + 3 velocities), but the Jacobi constant imposes a first-order conservation law. Consequently, the 6 Floquet multipliers of the monodromy matrix satisfy symplectic pairing: if $\lambda$ is a multiplier, then $\bar{\lambda}, 1/\lambda, 1/\bar{\lambda}$ are also multipliers (Meyer, Hall & Offin 2017). For periodic orbits near collinear libration points, the typical configuration is:

1. **One real pair**: $\lambda_1 > 1$, $\lambda_2 = 1/\lambda_1 < 1$, characterizing the saddle (center-saddle) structure. $\lambda_1$ corresponds to the unstable direction: its right eigenvector $w_u$ gives the local direction of exponential divergence along the unstable manifold. $\lambda_2$ corresponds to the stable direction: its right eigenvector $w_s$ gives the local direction of convergence along the stable manifold. Together they define the local tangent space of the invariant manifolds at every point on the periodic orbit (Gómez et al. 2001, Ch.1).

2. **One complex-conjugate pair**: $|\lambda_{3,4}| = 1$, describing the in-plane oscillatory mode of the Lyapunov center family. The associated central Floquet mode generates quasi-periodic orbits (e.g., quasi-Halo, quasi-periodic DRO).

3. **Two trivial roots**: $\lambda_5 = \lambda_6 = 1$, corresponding to the orbital phase direction (tangential shift along the orbit) and the Jacobi integral direction (zero-energy-variation direction). A perturbation along the orbit merely shifts phase without altering the orbital shape.

For unstable periodic orbits like Halo and Lyapunov orbits, the degree of instability is governed by the dominant real multiplier $\lambda_u$. The stability factor is defined as $\nu = (|\lambda_u| + |\lambda_s|)/2$, with a minimum of $1$ (linearly stable) and larger values indicating stronger instability (Acta Phys. Sin. 63, 248402, 2014).

For a small-amplitude Halo orbit in the Earth-Moon system, the real Floquet multiplier is typically far greater than 1 (on the order of hundreds to thousands, depending on amplitude, the specific collinear point, and the model). A neighboring trajectory therefore diverges by a factor of $\lambda_u$ per revolution.

## Orbital Prediction Errors and Exponential Divergence Rate

Given an initial deviation $\Delta X_0$ near a collinear libration point, the error norm grows according to $\|\Delta X(T)\| \approx \|\Delta X_0\| \cdot e^{\delta T}$, where the divergence rate $\delta$ is related to the dominant Floquet multiplier $|\lambda_u|$ and period $P$ by:

$$
\delta \approx \frac{\ln|\lambda_u|}{P}
$$

Deng et al. (2017) report $\delta \approx 0.5\ \text{day}^{-1}$ for Earth-Moon collinear libration point orbits, meaning a position error of several tens of meters diverges to several tens of kilometers in roughly 10 days. Understanding $\delta$ is essential for designing onboard orbit prediction systems: it dictates the re-determination cadence and the maximum valid prediction window.

Notably, irrespective of the initial error direction, the long-term error vector tends to align with the dominant unstable eigenvector $w_u$, a property known in engineering as unstable direction alignment. This means stationkeeping control should prioritize canceling the component along $w_u$.

## Bifurcation Criteria: Floquet Multipliers Crossing the Unit Circle

As a parameter of the periodic orbit family (e.g., the Jacobi constant for DROs) varies, Floquet multipliers crossing the unit circle correspond to bifurcation events. Bifurcation type is determined by how the crossing occurs:

- **Tangent bifurcation ($+1$ crossing)**: generates a new family of periodic orbits tangent to the original.

- **Period-doubling bifurcation ($-1$ crossing)**: yields a new family with twice the original period.

- **Neimark-Sacker (torus) bifurcation** (complex-conjugate pair crossing): produces an invariant torus (quasi-periodic orbit).

For the DRO family, **m-bifurcation** is a specific type of period-multiplying bifurcation: a particular planar DRO, after $m$ returns, becomes a bifurcation point from which an $m$-bifurcated spatial periodic orbit family originates (e.g., a 5-bifurcation planar DRO that, after 5 revolutions, gives rise to a 3D spatial orbit family). Gao & Hou (2020) obtained the complete bifurcation map of the DRO family by tracking when eigenvalues of $M^m$ cross the unit circle.

## Equilibrium Points and Saddle Structure: Zero-Order Foundation of Floquet Analysis

Floquet mode decomposition of periodic orbits is built upon the linearization analysis of **equilibrium points** (libration points). Among the five CR3BP libration points:

- **Collinear points** ($L_1, L_2, L_3$): The linearized system has one real pair $\pm d_1$ plus two pure imaginary pairs $\pm i \lambda_2$, $\pm i \lambda_3$, exhibiting a **center-center-saddle** structure in the full 3D phase space. The center directions support bounded motion while the saddle (hyperbolic) direction is the geometric origin of stable and unstable invariant manifolds (Szebehely 1967; Meyer, Hall & Offin 2017).

- **Triangular points** ($L_4, L_5$): When $\mu < \mu_0 \approx 0.0385$ (the Earth-Moon system satisfies this, with $\mu \approx 0.01215$), the linearized system has three pure imaginary pairs, a **center-center-center** structure, indicating linear stability. However, nonlinear effects and solar gravity perturbations introduce weak instability on practical time scales.

Conley's (1968) equilibrium region theory reveals a key geometric feature near collinear points: when the Jacobi constant is slightly above the critical value $C_i$, a narrow connecting channel (the neck) opens in the Hill region, permitting trajectory passage between the two primaries. The dynamics within the equilibrium region are precisely characterized by the linearized equations, and, via Moser's extension of Lyapunov's theorem, all qualitative results from the linear analysis extend to the full nonlinear system. This observation is the geometric foundation of all subsequent invariant-manifold patching theory and low-energy transfer design (e.g., lobe dynamics in interplanetary transfers).

## Practical Considerations

- **Stability Assessment**: Computing the Floquet multipliers of a numerically generated reference orbit is the standard first step in stability evaluation. Any multiplier with $|\lambda| > 1$ signals the necessity of stationkeeping control.

- **Invariant Manifold Directions**: The eigenvectors $w_u$ and $w_s$ provide the local tangent of the manifolds at each point on the periodic orbit, the input for globally computed manifolds and Poincaré-section patching.

- **Onboard Prediction Window**: The divergence rate $\delta$ determines the maximum valid prediction interval before re-initialization or stationkeeping is required.

- **Bifurcation Map**: The continuous trajectory of Floquet multipliers as a parameter varies describes the global branching structure of periodic orbit families.

- **Numerical Precision**: A numerically balanced orbit should be accurate to at least $10^{-12}$ in velocity for reliable monodromy matrix computation, especially for highly unstable orbits.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [State Transition Matrix (STM)](/en/glossary/fundamentals/stm/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Stable Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Unstable Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Poincaré Map](/en/glossary/dynamics/poincare-map/)

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

- [Hill Region](/en/glossary/dynamics/hill-region-and-hill-problem/)

- [KAM Theory and Long-Term Stability](/en/glossary/dynamics/kam-theory/)

## References

- Gómez et al., 2001, *Dynamics and Mission Design near Libration Points. Vol. I*, Ch.1 (definition of monodromy matrix, Floquet multiplier modal classification, and eigenvectors)

- Meyer, Hall & Offin, 2017, *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*, 3rd ed., Springer (Floquet theorem, symplectic eigenvalue pairing properties)

- Szebehely, 1967, *Theory of Orbits: The Restricted Problem of Three Bodies* (collinear point linearization and saddle eigenvalues)

- Conley, 1968, "Low Energy Transit Orbits in the Restricted Three-Body Problem", SIAM J. Appl. Math. (equilibrium region geometry and connectivity)

- Gao & Hou, 2020, "Formation of three-dimensional periodic orbits from planar periodic orbits in the Earth-Moon system" (m-bifurcation analysis via powers of the monodromy matrix)

- Deng et al., 2017, "Onboard orbit prediction for spacecraft near Earth-Moon collinear libration points" (numerical validation of $\delta \approx 0.5\ \text{day}^{-1}$ and unstable direction alignment)

- Folta & Vaughn, 2004, "A Survey of Earth-Moon Libration Orbits: Stationkeeping Strategies and Intra-Orbit Transfers" (engineering application of STM/monodromy matrix in stationkeeping design)

- Breakwell & Brown, 1979, "The Halo Family of 3-Dimensional Periodic Orbits in the Earth-Moon Restricted 3-Body Problem", Celestial Mech., 20(4) (Halo orbit Floquet multipliers and their implications for stationkeeping)

- Acta Phys. Sin. 63, 248402, 2014 (definition of stability factor $\nu$ and quantitative orbital stability assessment)
