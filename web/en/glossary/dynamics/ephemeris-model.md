---
title: Ephemeris Model
description: A detailed explanation of the ephemeris model definition, N-body dynamics equations, its application in cislunar orbit design, and its relationship with simplified models like CRTBP
keywords: Ephemeris Model, N-body Problem, JPL Ephemeris, DE440, Cislunar Dynamics, High-Precision Orbit Design
author: Tianjiang Talk
date: 2026-04-04
lastUpdated: 2026-04-26
wechatShare:
  title: Ephemeris Model
  desc: One-stop learning for cislunar research frontiers, terminology, and tools.
  image: /logo.png
og:
  title: Ephemeris Model - High-Precision Cislunar Orbit Dynamics
  description: A detailed explanation of the ephemeris model definition, N-body dynamics equations, its application in cislunar orbit design, and its relationship with simplified models like CRTBP
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Ephemeris Model - High-Precision Cislunar Orbit Dynamics
  description: A detailed explanation of the ephemeris model definition, N-body dynamics equations, its application in cislunar orbit design, and its relationship with simplified models like CRTBP
  image: /logo.png
permalink: /en/glossary/dynamics/ephemeris-model/
---

# Ephemeris Model

> Author: [Tianjiang Talk](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Ephemeris Model is the dynamics model closest to the real gravitational field environment. It uses the N-body equations of motion to describe a spacecraft's trajectory under the gravitational influence of multiple celestial bodies. Unlike simplified models such as CRTBP and QBCP, the ephemeris model obtains the position and velocity information of celestial bodies from the JPL (Jet Propulsion Laboratory) planetary ephemerides (such as DE440), rather than simplified circular or elliptical orbit assumptions.

## N-Body Dynamics Equations

In the J2000 Earth-centered inertial frame, assuming the central body is $P_c$, each perturbing body $P_i$ is treated as a point mass, and the N-body dynamics equation for the spacecraft $P_s$ is:

$$
\ddot{\mathbf{r}}_{cs} = -\frac{Gm_c}{r_{cs}^3}\mathbf{r}_{cs} + G\sum_{i=1}^{N}m_i\left(\frac{\mathbf{r}_{si}}{r_{si}^3} - \frac{\mathbf{r}_{ci}}{r_{ci}^3}\right)
$$

where $G$ is the gravitational constant, $m_c$, $m_s$, and $m_i$ are the masses of the central body, spacecraft, and each perturbing body, respectively. $\mathbf{r}_{cs}$, $\mathbf{r}_{si}$, and $\mathbf{r}_{ci}$ are the relative position vectors between the corresponding bodies. $\mathbf{r}_{ci}$ is provided by the ephemeris data.

### Compact Form

Let the spacecraft state vector be $\mathbf{X} = [\mathbf{r}^{\mathrm{T}}, \mathbf{v}^{\mathrm{T}}]^{\mathrm{T}}$. The equations of motion can be written as:

$$
\dot{\mathbf{X}} = \begin{bmatrix} \mathbf{v} \\ \mathbf{a} \end{bmatrix}
$$

The acceleration is contributed by all perturbing bodies:

$$
\mathbf{a}(\mathbf{r}, t) = \sum_{b \in \mathcal{B}} \mathbf{a}_b(\mathbf{r}, t)
$$

where $\mathcal{B} = \{\text{Earth}, \text{Moon}, \text{Sun}\}$ is the set of perturbing bodies.

For the central body (Earth):

$$
\mathbf{a}_{\oplus} = -\frac{\mu_{\oplus}}{r^3}\mathbf{r}
$$

For non-central bodies $b$ (such as the Moon and Sun), the acceleration contribution includes both indirect and direct terms:

$$
\mathbf{a}_b = -\mu_b\left(\frac{\mathbf{r} - \mathbf{r}_b}{\|\mathbf{r} - \mathbf{r}_b\|^3} + \frac{\mathbf{r}_b}{\|\mathbf{r}_b\|^3}\right)
$$

## State Transition Matrix

To perform orbit correction and optimization, the State Transition Matrix (STM) needs to be computed. Linearizing the equations of motion yields the variational equations:

$$
\dot{\boldsymbol{\Phi}}(t, t_0) = \mathbf{A}(t)\boldsymbol{\Phi}}(t, t_0), \quad \boldsymbol{\Phi}}(t_0, t_0) = \mathbf{I}_{6\times6}
$$

where $\mathbf{A}(t)$ is the Jacobian matrix of the dynamics equations with respect to the state. In numerical implementation, the 6-dimensional state vector and the 36 elements of the $6\times6$ state transition matrix are concatenated into a 42-dimensional augmented state vector, integrated simultaneously with the equations of motion.

## Coordinate Transformation

Computations in the ephemeris model are typically performed in the J2000 Earth-centered inertial frame. The transformation between this frame and the synodic (rotating) frame used in CRTBP is a critical step in orbit design. Let the Moon's position and velocity in the J2000 frame be $\mathbf{R}_M$ and $\mathbf{V}_M$, respectively. Then:

- Moon angular momentum: $\mathbf{h}_M = \mathbf{R}_M \times \mathbf{V}_M$
- Moon angular velocity: $\boldsymbol{\omega} = \mathbf{h}_M / \|\mathbf{R}_M\|^2$
- Rotating matrix basis vectors: $\hat{x} = \mathbf{R}_M/\|\mathbf{R}_M\|$, $\hat{z} = \mathbf{h}_M/\|\mathbf{h}_M\|$, $\hat{y} = \hat{z} \times \hat{x}$

## Relationship with Simplified Models

In practical orbit design, a "simplify first, then refine" strategy is typically employed:

1. Obtain initial orbit solutions in simplified models such as CRTBP
2. Convert the simplified model solutions to the ephemeris model using methods such as homotopy
3. Perform high-precision correction and optimization in the ephemeris model

In the ephemeris model, strictly periodic orbits from CRTBP evolve into quasi-periodic orbits, requiring position and velocity correction via multiple-shooting methods.

## References

- Liu G. Study on Quasi-Periodic Orbit Design for Libration Points in the Earth-Moon System Using Ephemeris Model[D]. 2017.
- Park R S, Folkner W M, Williams J G, et al. The JPL planetary and lunar ephemerides DE440 and DE441[J]. The Astronomical Journal, 2021, 161(3): 105.
