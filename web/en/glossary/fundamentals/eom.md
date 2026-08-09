---
title: Equation of Motion and State Equation
description: The differential equations governing a spacecraft's motion. In the CR3BP they appear as three second-order ODEs in the synodic frame with Coriolis and centrifugal terms; rewriting them as a first-order system yields the state equation dx/dt = f(x,t) (linear: dx/dt = A(t)x + Bu) on which modern control theory operates. Covers the autonomous vs. non-autonomous and time-varying vs. time-invariant distinctions.
keywords: equation of motion, state equation, EOM, state-space, autonomous system, non-autonomous system, time-varying system, Coriolis term, CR3BP, cislunar dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Equation of Motion and State Equation
  desc: The CR3BP synodic-frame equations and their first-order state-space form; autonomous vs. non-autonomous, time-varying vs. time-invariant.
  image: /logo.png
og:
  title: Equation of Motion and State Equation | Glossary
  description: The differential equations governing a spacecraft's motion. In the CR3BP they are three second-order ODEs with Coriolis and centrifugal terms; rewriting as a first-order system gives the state equation on which modern control theory operates.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Equation of Motion and State Equation | Glossary
  description: The differential equations governing a spacecraft's motion. In the CR3BP they are three second-order ODEs with Coriolis and centrifugal terms; rewriting as a first-order system gives the state equation on which modern control theory operates.
  image: /logo.png
permalink: /en/glossary/fundamentals/eom/
---

# Equation of Motion and State Equation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An **equation of motion** (EOM) is the differential equation describing how a spacecraft's position evolves under a specified force model. In the circular restricted three-body problem, written in the synodic (rotating) frame, the EOMs are three second-order ODEs whose right-hand side combines the gravitational pull of the two primaries with the Coriolis and centrifugal terms inherent to the rotating frame. Rewriting any system of second-order ODEs as a first-order system yields the **state equation**, the standard form on which modern control theory operates.

## The CR3BP equations of motion

In the synodic frame, with origin at the barycentre and the x-axis along the two primaries (which are then fixed), the dimensional equations are (Szebehely 1967, §1.5; Vallado 2022, §12.3):

$$
\ddot{\mathbf r}_S + 2\,\boldsymbol{\omega}_S \times \dot{\mathbf r}_S + \boldsymbol{\omega}_S \times (\boldsymbol{\omega}_S \times \mathbf r_S) = -\sum_{i=1,2} G m_i \frac{\mathbf r_S - \mathbf r_i}{\|\mathbf r_S - \mathbf r_i\|^3}.
$$

The second term is the Coriolis acceleration, the third the centrifugal acceleration. After non-dimensionalisation (cf. [Nondimensionalization](/en/glossary/fundamentals/nondimensionalization/)) and introducing the effective potential

$$
\Omega(x,y,z) = \tfrac{1}{2}(x^2 + y^2) + \frac{1-\mu}{r_1} + \frac{\mu}{r_2},
$$

the equations take their canonical compact form

$$
\ddot{x} - 2\dot{y} = \Omega_x, \qquad \ddot{y} + 2\dot{x} = \Omega_y, \qquad \ddot{z} = \Omega_z.
$$

Because time does not appear explicitly, this system is **autonomous**, and admits the Jacobi integral $C = 2\Omega - (\dot x^2 + \dot y^2 + \dot z^2)$ as a conserved quantity — the foundation on which zero-velocity surfaces, libration points, and all CR3BP-based mission design rest (Szebehely 1967, §1.6).

## The state equation

Defining the state vector $\mathbf x = (x, y, z, \dot x, \dot y, \dot z)^\top$, the second-order EOMs become a first-order system

$$
\dot{\mathbf x} = \mathbf f(\mathbf x),
$$

and, in the controlled linearised form used in modern control,

$$
\dot{\mathbf x} = \mathbf A(t)\,\mathbf x + \mathbf B(t)\,\mathbf u, \qquad \mathbf y = \mathbf C(t)\,\mathbf x.
$$

This is the **state equation** (state-space form). Casting the dynamics in first-order form is the prerequisite for applying optimal control, state feedback, and state-observer techniques. In the CR3BP, when the reference is a periodic orbit, $\mathbf A(t)$ is periodic with the orbit's period — this is the **linear time-periodic** structure that underpins Floquet analysis of relative motion about libration-point orbits.

## Autonomous vs. non-autonomous; time-varying vs. time-invariant

A system is **autonomous** (time-invariant) when $\mathbf f$ does not depend explicitly on $t$; otherwise it is **non-autonomous** (time-varying). The CR3BP state equation is autonomous because both primaries are stationary in the synodic frame. The bi-circular problem, the elliptic restricted three-body problem, and the full ephemeris (N-body) model all introduce explicit time dependence through the moving third body or the real planetary positions; they are non-autonomous, lose the Jacobi integral, and require quasi-periodic or entirely numerical methods (Baresi 2023).

Autonomous systems are invariant under time shifts: a trajectory launched at $t_0$ and one launched at $t_0 + \Delta t$ have the same shape. Non-autonomous systems lose this symmetry — launch epoch matters, and numerical integration must carry the absolute time along with the state. The added difficulty is not cosmetic: the entire apparatus of Poincaré sections, invariant manifolds, and Jacobi-constrained transit-orbit theory relies on autonomy and is unavailable in the ephemeris model without modification.

## Related entries

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Synodic Frame (Rotating Frame)](/en/glossary/fundamentals/synodic-frame/)

- [Jacobi Constant](/en/glossary/dynamics/jacobi-integral/)

- [Nondimensionalization](/en/glossary/fundamentals/nondimensionalization/)

## References

- Szebehely, 1967, *Theory of Orbits*, §§1.5–1.6 — dimensional and dimensionless CR3BP equations, derivation of the Jacobi integral.

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, §12.3 — restricted three-body problem and synodic-frame equations.

- Baresi, 2023, "Transition of two-dimensional quasi-periodic invariant tori in the real-ephemeris model of the Earth–Moon system" — non-autonomous dynamics in the full ephemeris model.

- Fossà et al., 2022, "Two- and three-impulse phasing strategy with a spacecraft orbiting an Earth–Moon NRHO."

- Xu Ming & Xu Shijie, 2008, "Linear periodic station-keeping control strategy for halo orbits" — state equation and periodic $\mathbf A(t)$ for halo station-keeping.
