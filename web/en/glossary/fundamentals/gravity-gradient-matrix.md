---
title: Gravity Gradient Matrix
description: The Jacobian matrix of gravitational acceleration with respect to position, also known as the gravity gradient tensor. A fundamental tool in orbital perturbation linearization, state transition matrices, primer vector equations, and relative motion analysis.
keywords: gravity gradient matrix, gravity gradient tensor, Jacobian of gravity, state transition matrix, orbital perturbation, linearization, primer vector, Hessian of potential
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Gravity Gradient Matrix
  desc: The Jacobian matrix of gravitational acceleration with respect to position—a fundamental tool in orbital perturbation linearization.
  image: /logo.png
og:
  title: "Gravity Gradient Matrix Explained | Terminology"
  description: The Jacobian of gravitational acceleration with respect to position. A fundamental tool in state transition matrices, primer vector equations, and relative motion analysis.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Gravity Gradient Matrix Explained | Terminology"
  description: The Jacobian of gravitational acceleration with respect to position—essential for state transition and primer vector equations.
  image: /logo.png
permalink: /en/glossary/fundamentals/gravity-gradient-matrix/
---

# Gravity Gradient Matrix

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The gravity gradient matrix $\mathbf{G}(\mathbf{r})$ is the Jacobian matrix of the gravitational acceleration $\mathbf{g}(\mathbf{r})$ with respect to the position vector $\mathbf{r}$:

$$\mathbf{G}(\mathbf{r}) = \frac{\partial \mathbf{g}}{\partial \mathbf{r}} = \nabla \otimes \nabla U(\mathbf{r})$$

where $U(\mathbf{r})$ is the gravitational potential. Since the gravitational potential is a scalar potential function, its Hessian $\nabla^2 U$ is symmetric; therefore $\mathbf{G}$ is a $3 \times 3$ symmetric matrix (Canuto 2018).

The gravity gradient matrix describes the spatial rate of change of the gravity field. For a point-mass (central) gravity field $\mathbf{g} = -\mu \, \mathbf{r}/r^3$, direct differentiation yields

$$\mathbf{G}_{\text{point}} = \frac{\mu}{r^3} \left( 3\,\hat{\mathbf{r}}\,\hat{\mathbf{r}}^{\!T} - \mathbf{I} \right)$$

where $\hat{\mathbf{r}} = \mathbf{r}/r$ and $\mathbf{I}$ is the identity matrix. Its trace is zero, $\text{tr}(\mathbf{G}) = 0$, which is the linearized manifestation of $\nabla \cdot \mathbf{g} = 0$ (no mass sources in the exterior).

## Role in Linearized Dynamics

The state equation for orbital motion is generally written as

$$\dot{\mathbf{x}} = \begin{bmatrix} \mathbf{v} \\ \mathbf{g}(\mathbf{r}) + \mathbf{a}_{p}(\mathbf{r}, \mathbf{v}, t) \end{bmatrix}$$

Linearizing for small perturbations, with $\delta\mathbf{x} = \mathbf{x} - \mathbf{x}_0$, yields the variational equation

$$\delta\dot{\mathbf{x}} = \mathbf{A}(t)\,\delta\mathbf{x}, \qquad \mathbf{A}(t) = \begin{bmatrix} \mathbf{0} & \mathbf{I} \\ \mathbf{G}(\mathbf{r}_0(t)) + \displaystyle\frac{\partial \mathbf{a}_p}{\partial \mathbf{r}} & \displaystyle\frac{\partial \mathbf{a}_p}{\partial \mathbf{v}} \end{bmatrix}$$

The gravity gradient matrix $\mathbf{G}$ provides the position-position block in the state transition matrix differential equation $\dot{\boldsymbol{\Phi}} = \mathbf{A}\,\boldsymbol{\Phi}$ (Prussing 2010).

## Key Applications

### 1. State Transition Matrix and Error Propagation

An orbit state's sensitivity to initial conditions is characterized by the state transition matrix $\boldsymbol{\Phi}(t, t_0)$, whose differential equation's $\mathbf{A}(t)$ contains $\mathbf{G}$. In high-fidelity orbit prediction, $\mathbf{G}$ must be computed accurately per the current gravity model (including high-degree spherical harmonic terms); otherwise, covariance propagation will exhibit systematic biases.

### 2. Primer Vector Equation

In optimal control and minimum-fuel transfers, the costate equation for the primer vector can be written as

$$\ddot{\boldsymbol{\lambda}} = -\mathbf{G}(\mathbf{r})\,\boldsymbol{\lambda}$$

where $\mathbf{G}$ is the gravity gradient matrix. The sign and magnitude of this matrix directly determine the oscillatory vs. divergent behavior of the costate solution (Prussing 2010).

### 3. Relative Motion and Station-Keeping

In cislunar close-proximity formation flying, rendezvous/docking, or station-keeping, the linearized relative motion coefficients depend on $\mathbf{G}$. For example, the $n^2$ terms in Hill/Clohessy-Wiltshire equations derive from the gravity gradient of a near-circular central gravity field.

## Computation in Non-Spherical Gravity Fields

When the gravity field includes high-degree spherical harmonic terms, each element of $\mathbf{G}$ is a second-order partial derivative of $U$:

$$G_{ij} = \frac{\partial^2 U}{\partial r_i \partial r_j}$$

In engineering implementations, partial derivatives of $U$ are typically first computed with respect to spherical coordinates $(r, \phi, \lambda)$, then transformed to Cartesian coordinates via the chain rule (Vallado 2022, Eq. 8-24~8-27). Since $U$ satisfies Laplace's equation $\nabla^2 U = 0$ (exterior with no mass sources), we have

$$\text{tr}(\mathbf{G}) = G_{xx} + G_{yy} + G_{zz} = 0$$

This invariance is commonly used as a self-consistency check for numerical derivative correctness.

## Related Concepts

- [Gravitational Potential](/en/glossary/fundamentals/gravitational-potential/)

- [Gravity Field Model](/en/glossary/fundamentals/gravity-field-model/)

- [State Transition Matrix](/en/glossary/fundamentals/stm/)

- [Primer Vector](/en/glossary/dynamics/primer-vector/)

- [J2 Perturbation](/en/glossary/dynamics/non-spherical-gravity-perturbation/)

## References

- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press. Ch. 8.6.1, Eq. 8-24~8-27: Gradient and Hessian computation for spherical harmonic potentials.

- Prussing, J. E. & Conway, B. A., 1993, *Orbital Mechanics*, Oxford University Press. Ch. 2: Gravity gradient matrix in state transition and primer vector equations.

- Prussing, J. E., 2010, Primer vector theory and applications, *Advances in the Astronautical Sciences*, 136: 829–852. Gravity gradient term in primer vector equation.

- Canuto, E., 2018, *Spacecraft Dynamics and Control*, Cambridge University Press. Sec. 4.2.6: Gravity gradient matrix and gravity gradient torque.

- Battin, R. H., 1999, *An Introduction to the Mathematics and Methods of Astrodynamics*, AIAA. Ch. 10: Linearized derivation of the state transition matrix.
