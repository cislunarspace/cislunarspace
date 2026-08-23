---
permalink: /en/background/math/
title: Mathematical Foundations
description: Numerical computational methods and mathematical toolsets required for cislunar orbital dynamics and trajectory optimization.
keywords: mathematical tools, shooting method, continuation method, symplectic integrator, two-point boundary value problem, pseudospectral methods, numerical optimization
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-20
wechatShare:
  title: Cislunar Mathematical Toolsets
  desc: Numerical analysis and mathematical algorithmic frameworks supporting three-body dynamics and orbital computation.
  image: /logo.png
---

# Mathematical Foundations

In non-linear three-body dynamical systems, the absence of general closed-form analytical integrals necessitates deep reliance on modern numerical analysis and computational mathematics. Tasks such as periodic orbit search, invariant manifold extraction, transfer trajectory design, and station-keeping formulation all depend fundamentally on numerical algorithms.

This section compiles the essential mathematical tools and core computational algorithms widely employed in cislunar mission design and orbital mechanics research.

## Core Algorithmic Architecture

### 1. Two-Point Boundary Value Problems & Shooting Methods

Solving for initial state vectors that satisfy specific boundary conditions or periodicity constraints in systems of non-linear differential equations.

- **Single Shooting**: Utilizes the state transition matrix (STM) to compute the Jacobian matrix, iteratively correcting initial states via Newton-Raphson methods. Suitable for short periods or weakly non-linear regimes.
- **Multiple Shooting**: Divides the trajectory into multiple sub-segments and enforces continuity constraints at interface nodes. This drastically reduces sensitivity to non-linear divergence and serves as the industry standard for libration point orbit search and complex trajectory patching.
- In-depth Topic: [Shooting Method Principles & Implementation](/en/background/math/shooting-method/)

### 2. Numerical Continuation Methods

Used to trace the bifurcation and evolution of solution branches of non-linear algebraic equations across parameter spaces.

- **Natural Parameter Continuation**: Steps sequentially through fixed increments of physical parameters such as the Jacobi constant, energy, or orbital period.
- **Pseudo-Arc-Length Continuation**: Introduces an arc-length parameter along the tangent direction of the solution curve. This bypasses Jacobian singularities at limit points (turning points) and bifurcation nodes, enabling complete numerical tracing of entire orbit families (e.g., from planar Lyapunov/Halo orbits to vertical NRHO branches).
- In-depth Topic: [Arc-Length Continuation & Bifurcation Analysis](/en/background/math/continuation/)

### 3. Structure-Preserving & Symplectic Geometric Integrators

Astrodynamical systems are fundamentally Hamiltonian, phase-volume-preserving conservative systems.

- Conventional explicit numerical integrators (e.g., standard explicit Runge-Kutta schemes) introduce systematic artificial energy drift (such as secular dissipation of the Jacobi constant) over long integration horizons.
- Symplectic integrators strictly preserve the symplectic geometric structure and phase space volume, proving indispensable for validating the long-term dynamical stability of Distant Retrograde Orbits (DRO) over multi-year and multi-decade time scales.
- In-depth Topic: [Symplectic Integrators: Theory & Construction](/en/background/math/symplectic-integrator/)

### 4. Trajectory Parameterization & Non-Linear Programming (NLP & Collocation)

Discretizing continuous-time dynamical systems into sets of algebraic constraints, solved via large-scale non-linear programming algorithms (e.g., Sequential Quadratic Programming (SQP) or Interior-Point methods).

- **Orthogonal Collocation** and **Pseudospectral Methods**: Employ high-order orthogonal polynomial nodes (such as Legendre-Gauss-Lobatto grids) for global polynomial trajectory approximation, widely utilized in global low-thrust electric propulsion trajectory optimization.
