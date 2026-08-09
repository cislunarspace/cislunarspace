---
title: Invariant Manifold (Invariant Manifold / Stable & Unstable Manifolds)
description: Stable and unstable invariant manifolds of libration-point periodic orbits in the circular restricted three-body problem: definition, monodromy-matrix computation, manifold tubes, branches, parameterization, engineering approximations, and Earth–Moon/Sun–Earth examples.
keywords: Invariant Manifold, Stable Manifold, Unstable Manifold, Manifold Tube, Monodromy Matrix, Low-Energy Transfer, Libration Point Orbit, CR3BP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Invariant Manifold (Invariant Manifold)
  desc: Manifold tubes and stable/unstable manifolds as the core geometric tool for low-energy transfer design.
  image: /logo.png
og:
  title: Invariant Manifold Explained | Libration-Point Orbit Dynamics
  description: Stable and unstable invariant manifolds of libration-point periodic orbits in the circular restricted three-body problem, including computation, tubes, branches, and Earth–Moon/Sun–Earth applications.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Invariant Manifold Explained | Libration-Point Orbit Dynamics
  description: Stable and unstable invariant manifolds of libration-point periodic orbits in the circular restricted three-body problem, including computation, tubes, branches, and Earth–Moon/Sun–Earth applications.
  image: /logo.png
permalink: /en/glossary/dynamics/invariant-manifold/
---

# Invariant Manifold (Invariant Manifold / Stable & Unstable Manifolds)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An **invariant manifold** is a set of states that remains invariant under the flow of a dynamical system: if a state lies on the set at one time, it lies on the set for all time (Gómez et al. 2001; Koon et al. 1999). In the circular restricted three-body problem (CR3BP), the most widely used invariant manifolds are the **stable manifold** $W^s$ and **unstable manifold** $W^u$ of libration-point periodic orbits such as halo and Lyapunov orbits.

Let $\Gamma$ denote a periodic orbit, $x$ a nearby state, and $\phi^t$ the flow map. Then

$$W^s(\Gamma)=\{x:\lim_{t\to+\infty}\mathrm{dist}(\phi^t(x),\Gamma)=0\},$$

$$W^u(\Gamma)=\{x:\lim_{t\to-\infty}\mathrm{dist}(\phi^t(x),\Gamma)=0\}.$$

Trajectories on the stable manifold approach the target orbit in forward time and are used for capture/arrival; trajectories on the unstable manifold depart from the target orbit in forward time and are used for departure/escape.

## Monodromy Matrix and Local Linearization

The variational equation of the CR3BP state equation $\dot{x}=f(x)$ is

$$\dot{\Phi}(t,0)=A(t)\Phi(t,0),\quad A(t)=\frac{\partial f}{\partial x}\bigg|_{x(t)},\quad \Phi(0,0)=I.$$

Integrating along a periodic orbit $\Gamma$ over one period $T$ yields the **monodromy matrix** $M=\Phi(T,0)$. Its eigenvalues determine local stability. In Hamiltonian systems eigenvalues occur in reciprocal and complex-conjugate pairs. Periodic orbits near collinear libration points typically have one real pair $\lambda_s<1$, $\lambda_u=1/\lambda_s>1$ (hyperbolic directions) and two complex-conjugate pairs on the unit circle (center directions), i.e. a **saddle×center×center** structure (Koon et al. 1999; Szebehely 1967).

The eigenvectors $v_s$ and $v_u$ associated with $\lambda_s$ and $\lambda_u$ give the local stable and unstable directions at each point of the orbit. If $x_p(\tau)$ is the state on the orbit at phase $\tau\in[0,T)$, a manifold initial state is

$$x(0)=x_p(\tau)\pm\varepsilon\,\Phi(\tau,0)v_{s/u},\quad 0<\varepsilon\ll1,$$

where the stable direction is integrated forward and the unstable direction backward to obtain the stable manifold, and vice versa for the unstable manifold. The “$\pm$” sign produces the two **branches** of the same manifold, which often extend into different regions of configuration space.

## Manifold Tubes, Branches, and Direction Conventions

The collection of all stable (or unstable) trajectories of a periodic orbit forms an **invariant manifold tube**. In the planar problem the tube is a separatrix on the 3-D energy surface, separating transit orbits from non-transit orbits; in the spatial problem it remains the fundamental topological channel for low-energy transfer design (Gómez et al. 2001; Howell & Kakoi 2006).

For the Earth–Moon $L_2$ halo orbit the stable manifold is commonly divided into:

- **Interior branch**: extends toward the Moon, useful for low-energy transfers from lunar orbits to the halo orbit;

- **Exterior branch**: extends away from the Moon into the exterior region, useful for transfers from near-Earth orbits.

Unstable manifolds are divided similarly by their forward-time evolution. Out-of-plane branches are sometimes called **vertically stable/unstable manifolds** and are used to study the evolution of out-of-plane deviations.

## Computation and Engineering Approximations

Invariant manifolds are usually generated numerically as follows:

1. Compute the target periodic orbit with differential correction;
2. Integrate the state-transition matrix to obtain the monodromy matrix and its eigenvectors;
3. Apply small perturbations along the eigenvectors at discrete points on the orbit to obtain **manifold initial states/starting points**;
4. Integrate in the appropriate time direction to produce the **manifold propagation**.

To speed up optimization, a **manifold interpolation database** is often precomputed: states are stored on a grid of orbit phase $\tau$ and manifold integration time $t$, then retrieved by 2-D interpolation during optimization (Pontani & Teofilatto 2016).

Natural manifolds rarely satisfy mission constraints exactly (e.g. perilune altitude or arrival time). Two common approximations are:

- **Pseudo-manifold**: a CR3BP manifold slightly modified by a small $\Delta v$ to meet constraints, extending the feasible design space (Davis, Born & Butcher 2013);

- **Disturbed manifold**: a natural unstable manifold with a single impulse applied at a selected point to redirect the trajectory onto the target orbit.

A **piercing point** is the intersection of a manifold with a reference plane; in Earth–Moon transfer design the plane $x=-\mu$ passing through the Earth is often used. Geocentric distance, inclination, and eccentricity of piercing points are key criteria for selecting transfer initial conditions.

## Earth–Moon / Sun–Earth Manifolds and Cross-System Splicing

Libration-point orbits in the Earth–Moon and Sun–Earth systems each possess invariant manifolds. When the position projections of the two manifold tubes overlap on a common reference plane (a Poincaré section), a small maneuver at the overlap region can splice the two systems, enabling low-energy Sun–Earth $L_2$ ↔ Earth–Moon $L_1/L_2$ transfers (Howell & Kakoi 2006). This overlap is the geometric basis of the “interplanetary superhighway” in the Earth neighborhood.

## Application Highlights

- **Low-energy transfer**: depart on an unstable manifold and arrive on a stable manifold to reduce $\Delta V$;

- **Station-keeping**: target-point station-keeping essentially steers the spacecraft back along the stable manifold;

- **Mission design workflow**: manifolds provide good initial guesses that are then differentially corrected into high-fidelity ephemeris models.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)

- [Weak Stability Boundary (WSB)](/en/glossary/dynamics/wsb/)

- [Center Manifold](/en/glossary/dynamics/center-manifold/)

## References

- Gómez, G., Koon, W. S., Lo, M. W., Marsden, J. E., Masdemont, J., & Ross, S. D. (2001). *Invariant manifolds, the spatial three-body problem and space mission design*.

- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. (1999). The Genesis trajectory and heteroclinic connections.

- Koon, W. S., Lo, M. W., Marsden, J. E., & Ross, S. D. (2006/2011). *Dynamical systems, the three-body problem and space mission design*.

- Howell, K. C., & Kakoi, M. (2006). Transfers between the Earth–Moon and Sun–Earth systems using manifolds and transit orbits.

- Szebehely, V. (1967). *Theory of Orbits: The Restricted Problem of Three Bodies*.

- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*.

- Davis, K., Born, G., & Butcher, E. (2013). Transfers to Earth-Moon L3 Halo orbits. *Acta Astronautica*, 88, 116–128.

- Pontani, M., & Teofilatto, P. (2016). Polyhedral representation of invariant manifolds applied to orbit transfers in the Earth–Moon system.

- Qian, Y. (2014). Autonomous navigation and station-keeping of spacecraft on quasi-periodic orbits in cislunar space. Harbin Institute of Technology.

- Peng, K., et al. (2016). Halo-orbit transfer design to Earth–Moon L2 based on invariant manifolds.
