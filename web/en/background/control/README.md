---
permalink: /en/background/control/
title: Control Theory
description: Trajectory optimization, orbital maneuver targeting, state estimation, and autonomous station-keeping control theory for cislunar spaceflight.
keywords: optimal control, Pontryagin maximum principle, model predictive control, MPC, differential correction, pseudospectral methods, trajectory tracking
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-20
wechatShare:
  title: Cislunar Control & Optimization Theory
  desc: Orbital control and trajectory optimization frameworks tailored for complex cislunar dynamical environments.
  image: /logo.png
---

# Control Theory

Cislunar astrodynamics is characterized by high non-linearity, chaotic sensitivity, and multi-timescale behavior. In operational space missions, navigation tracking uncertainties, thruster execution errors, and environmental force perturbations inevitably cause spacecraft to deviate from nominal trajectories. To guarantee long-term operational safety while minimizing propellant consumption, modern control and optimization theory must be rigorously applied.

This section covers trajectory optimization, autonomous guidance, and robust closed-loop control architectures tailored for cislunar mission design.

## Core Theories & Engineering Control Methods

### 1. Optimal Control Theory

Formulates the control input profile $\mathbf{u}(t)$ that minimizes a specific performance index (such as propellant mass consumption or time of flight) subject to spacecraft differential equations of motion and control/state path constraints.

- **Indirect Methods**: Rooted in the calculus of variations and **Pontryagin's Maximum Principle (PMP)**, adjoint costate variables are introduced to construct the Hamiltonian function, transforming the optimal control problem into a Two-Point Boundary Value Problem (TPBVP). Because costates are notoriously sensitive to initial guesses, indirect formulations often require numerical continuation.
- **Direct Methods**: Converts the infinite-dimensional optimal control problem into a finite-dimensional Non-Linear Programming (NLP) problem via direct transcription, orthogonal collocation, or pseudospectral methods.
- In-depth Topic: [Optimal Control Theory & Variational Derivations](/en/background/control/optimal-control/)

### 2. Orbit Maintenance & Differential Correction

Implements long-term autonomous station-keeping on weakly unstable or neutrally stable cislunar orbits (such as NRHOs and Halo orbits):

- **Targeting Methods / Cauchy–Green Control**: Leverages the state transition matrix (STM) to predict position deviations several revolutions ahead, executing minimal impulsive velocity corrections $\Delta \mathbf{V}$ at strategic orbital nodes (e.g., perilune passages or equatorial crossings).
- **Invariant Manifold Subspace Projection**: Projects state deviation vectors onto the local stable and unstable eigenspaces, applying control maneuvers strictly along unstable modes to exploit the natural contracting manifold dynamics.

### 3. Advanced Closed-Loop Guidance & Robust Control

- **Model Predictive Control (MPC)**: Recursively solves finite-horizon constrained optimization problems in real time, explicitly accommodating thruster magnitude limits, attitude slew constraints, and line-of-sight pointing requirements.
- **Relative Orbital Dynamics & Autonomous Rendezvous/Docking**: Formulates equations of relative motion within the non-Keplerian rotating three-body frame to achieve autonomous closed-loop proximity operations, approach corridors, and station-keeping around orbital stations (such as the Lunar Gateway).
