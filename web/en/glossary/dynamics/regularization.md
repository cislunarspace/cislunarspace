---
title: Regularization
description: A detailed analysis of regularization methods, mathematical principles, Kustaanheimo-Stiefel coordinate transformation, and applications in near-pericenter halo orbit numerical computation
keywords: Regularization, Kustaanheimo-Stiefel Transformation, KS Transformation, Near-Pericenter Orbit, Singularity Removal, Restricted Three-Body Problem, Halo Orbit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Regularization
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Regularization Methods Explained | Near-Pericenter Orbit Numerical Computation Techniques
  description: A detailed analysis of regularization methods, mathematical principles, Kustaanheimo-Stiefel coordinate transformation, and applications in near-pericenter halo orbit numerical computation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Regularization Methods Explained | Near-Pericenter Orbit Numerical Computation Techniques
  description: A detailed analysis of regularization methods, mathematical principles, Kustaanheimo-Stiefel coordinate transformation, and applications in near-pericenter halo orbit numerical computation
  image: /logo.png
permalink: /en/glossary/dynamics/regularization/
---

# Regularization

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Reference: Howell K C. Three-dimensional, periodic halo orbits in the restricted three-body problem[D]. Stanford University, 1983.
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Regularization is a class of numerical computation techniques that eliminate singularities in dynamical equations. In the restricted three-body problem, when a spacecraft approaches a primary body, the gravitational term $1/r^2$ in the standard equations produces numerical overflow. Regularization removes the singularity through **independent variable transformation** (time transformation) and **coordinate transformation** (Kustaanheimo-Stiefel transformation), enabling integration to proceed smoothly in near-pericenter regions.

In halo orbit numerical computation, regularization techniques allow researchers to track Almost-Rectilinear Orbits that approach the Moon, thereby completing the computation of the entire orbit family extending from libration points to the primary body.

## Key Elements

### Time Transformation

The standard equations exhibit singularities as $r \to 0$. First, a time variable transformation is applied:

$$\frac{dt}{d\tau} = r$$

where $r$ is the distance from the spacecraft to the nearest primary body. After transformation, the independent variable changes from $t$ to $\tau$, and the integration step size adapts automatically, becoming finer near the pericenter.

### Kustaanheimo-Stiefel (KS) Coordinate Transformation

To further eliminate singularities, four-dimensional KS coordinates $\mathbf{u} = (u_1, u_2, u_3, u_4)^T$ are introduced. The relationship between the original three-dimensional position vector $\mathbf{R} = (x, y, z)^T$ and the KS coordinates is:

$$\mathbf{R} = L(\mathbf{u})\mathbf{u}$$

where $L(\mathbf{u})$ is the $4 \times 4$ transformation matrix:

$$L(\mathbf{u}) = \begin{pmatrix} u_1 & -u_2 & -u_3 & u_4 \\ u_2 & u_1 & -u_4 & -u_3 \\ u_3 & u_4 & u_1 & u_2 \\ u_4 & -u_3 & u_2 & -u_1 \end{pmatrix}$$

The core property of the KS transformation: $r = \mathbf{u} \cdot \mathbf{u}$, i.e., the squared norm of the four-dimensional vector equals the original distance.

### Regularized Equations of Motion

After the time transformation and KS coordinate transformation, the regularized equations of motion are:

$$\mathbf{u}'' - \frac{h}{2}\mathbf{u} = L^T(\mathbf{u})BL(\mathbf{u})\mathbf{u}' + \frac{(\mathbf{u}\cdot\mathbf{u})}{2}L^T(\mathbf{u})\mathbf{F}$$

where $h$ is the modified angular momentum-related quantity:

$$h = \frac{1-\mu}{d} + \frac{1}{2}(x^{*2}+y^2) - \frac{C}{2}$$

This equation does not contain $1/r$ singularity terms and can be integrated normally in regions where $r \to 0$.

### Regularized State Transition Matrix

After regularization, the state vector is expanded to 8 dimensions $\mathbf{Y} = (u_1, u_2, u_3, u_4, u_1', u_2', u_3', u_4')^T$. The corresponding state transition matrix $\Psi(\tau, 0)$ is an $8 \times 8$ matrix satisfying:

$$\frac{d}{d\tau}\Psi(\tau, 0) = A(\tau)\Psi(\tau, 0)$$

where $A(\tau)$ contains the Jacobian information of the regularized equations.

## Computational Procedure

The regularized computation procedure for halo orbits is as follows:

1. **Initial condition conversion**: Convert the original initial conditions $\mathbf{X}_0 = (x_0, 0, z_0, 0, \dot{y}_0, 0)^T$ to KS coordinate initial conditions $\mathbf{Y}_0$
2. **Set $u_4 = 0$**: Due to the introduction of the fourth dimension, $u_4$ can be chosen arbitrarily
3. **Integrate the regularized equations**: A total of 73 equations (8 regularized equations + 1 time equation + 64 state transition matrix equations)
4. **Detect $xOz$ plane crossing**: Integration until $|y| < 10^{-11}$ defines the half-period $T/2$
5. **Periodicity correction**: Use $\Psi$ to correct initial conditions until $|\dot{x}|, |\dot{z}| < 10^{-8}$

## Application in Orbit Family Computation

### Tracking Near-Rectilinear Orbits

In the computation of the L3 orbit family ($\mu = 0.96$), regularization technology enables the completion of the entire orbit family extending from the L3 point to the primary body. In standard equations, numerical integration fails due to singularities when the orbit approaches the Moon (near pericenter); after regularization, integration proceeds smoothly.

### L1-L2 Bridge Orbit Family

Regularization is also used to compute the L1-L2 Bridge Family. These orbits are extremely elongated and nearly rectilinear near the lunar pericenter, making them impossible to track with standard equations. Through regularization, the accuracy of the Breakwell and Brown approximate analytical methods in the near-rectilinear region can be verified.

### Computational Efficiency

The regularized system of equations contains 73 equations (compared to only 42-43 in standard equations), resulting in higher computational cost per step. However, because much larger integration steps can be used in the near-pericenter region (potentially differing by 2-3 orders of magnitude), the overall efficiency is actually higher.

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Differential Correction](/en/glossary/dynamics/differential-correction/)
- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)

## References

- Howell K C. Three-dimensional, periodic halo orbits in the restricted three-body problem[D]. Stanford University, 1983.
- Bettis D G, Szebehely V. Numerical treatment of the regularization of the gravitational motion[J]. Celestial Mechanics, 1971.
- Kustaanheimo P, Stiefel E. Perturbation theory of Kepler motion based on spinor regularization[J]. Journal fur die reine und angewandte Mathematik, 1965.
- Breakwell J V, Brown J V. An "almost rectilinear" halo orbit[J]. Celestial Mechanics, 1979.
