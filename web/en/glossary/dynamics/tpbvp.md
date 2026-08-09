---
title: Two-Point Boundary Value Problem (TPBVP)
description: An ODE problem with boundary conditions imposed at both ends of the integration interval — the core mathematical structure of indirect trajectory optimization. Covers Hamilton's canonical equations, co-state initialization difficulty, co-state normalization and homotopy methods, and applications in cislunar low-energy transfers and NRHO insertion.
keywords: TPBVP, two-point boundary value problem, co-state variables, Pontryagin's maximum principle, shooting method, co-state normalization, homotopy method, trajectory optimization
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Two-Point Boundary Value Problem (TPBVP)
  desc: The core mathematical structure of indirect trajectory optimization
  image: /logo.png
og:
  title: "Two-Point Boundary Value Problem (TPBVP) Explained"
  description: An ODE problem with boundary conditions imposed at both ends — the core mathematical structure of indirect trajectory optimization. Covers Hamilton's canonical equations, co-state normalization, and homotopy methods.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Two-Point Boundary Value Problem (TPBVP) Explained"
  description: An ODE problem with boundary conditions imposed at both ends — the core mathematical structure of indirect trajectory optimization.
  image: /logo.png
permalink: /en/glossary/dynamics/tpbvp/
---

# Two-Point Boundary Value Problem (TPBVP)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A two-point boundary value problem (TPBVP) seeks to solve an ordinary differential equation over the interval $[t_0,t_f]$ where boundary conditions are imposed **separately** at the start and the endpoint:

$$\dot{\mathbf{y}}=\mathbf{f}(\mathbf{y},t),\quad t\in[t_0,t_f],\qquad \boldsymbol{\psi}(\mathbf{y}(t_0),\mathbf{y}(t_f))=\mathbf{0}$$

In the context of spacecraft trajectory optimization, the TPBVP is the core mathematical structure of the **indirect method**: the optimal trajectory derived from Pontryagin's Maximum Principle (PMP) must simultaneously satisfy initial state constraints (initial position, velocity, and mass are known) and terminal state constraints (target position, velocity), forming a characteristic two-point boundary value structure.

Unlike an initial-value problem where all states are specified at $t_0$, a TPBVP specifies only a portion of the state at each end. The remaining degrees of freedom are constrained by the dynamics — the unknown free variables bridging the two ends must be adjusted simultaneously. Numerically, the free variable is the initial [co-state](/en/glossary/dynamics/co-state-variables/) vector $\boldsymbol{\lambda}(t_0)$ (along with the terminal time $t_f$) — **co-states lack physical intuition, are unbound in magnitude, and are extremely sensitive to the initial guess**. This is the fundamental difficulty of TPBVP solution.

## Mathematical Description

### Hamilton's Canonical Equations

For a fuel-optimal transfer, Hamilton's canonical equations produce a 14-dimensional coupled system:

$$
\begin{aligned}
\dot{\mathbf{r}} &= \frac{\partial H}{\partial\boldsymbol{\lambda}_r} &\quad& \text{(position)}\\
\dot{\mathbf{v}} &= \frac{\partial H}{\partial\boldsymbol{\lambda}_v} &\quad& \text{(velocity)}\\
\dot{m} &= \frac{\partial H}{\partial\lambda_m} &\quad& \text{(mass)}\\
\dot{\boldsymbol{\lambda}}_r &= -\frac{\partial H}{\partial\mathbf{r}} &\quad& \text{(position co-state)}\\
\dot{\boldsymbol{\lambda}}_v &= -\frac{\partial H}{\partial\mathbf{v}} &\quad& \text{(velocity co-state)}\\
\dot{\lambda}_m &= -\frac{\partial H}{\partial m} &\quad& \text{(mass co-state)}
\end{aligned}
$$

- **Known initial conditions**: $\mathbf{r}(t_0)$, $\mathbf{v}(t_0)$, $m(t_0)$ — 7 scalars;

- **Known terminal conditions**: $\mathbf{r}(t_f)=\mathbf{r}_{target}$, $\mathbf{v}(t_f)=\mathbf{v}_{target}$ — 6 scalar constraints;

- **Unknowns**: initial co-state $\boldsymbol{\lambda}(t_0)\in\mathbb{R}^7$ + terminal time $t_f$ = 8 unknowns. The transversality condition on $m(t_f)$ supplies the 7th terminal constraint, yielding a determined system.

### The Shooting Function

Define the shooting function:

$$\mathbf{F}(\boldsymbol{\lambda}(t_0), t_f)=\begin{bmatrix}\mathbf{r}(t_f)-\mathbf{r}_{target}\\\mathbf{v}(t_f)-\mathbf{v}_{target}\end{bmatrix}$$

Starting from a guess of $\boldsymbol{\lambda}(t_0)$, integrate forward, and use Newton-Raphson iteration to drive $\mathbf{F}\to\mathbf{0}$. Each iteration requires the state transition matrix — here the STM extends to the co-state dimension ($14\times 14$), doubling the integration budget.

## Numerical Difficulties and Countermeasures

### Co-State Non-Intuitiveness

Co-state variables represent the "shadow price" of state constraints — the position co-state $\boldsymbol{\lambda}_r$ captures the cost pressure that the terminal position constraint exerts on the entire trajectory; the velocity co-state $\boldsymbol{\lambda}_v$ is the shadow price of terminal velocity. But their magnitudes and directions follow no simple heuristic, making reasonable initial guesses elusive. Under the CR3BP's nonlinear flow, small perturbations in $\boldsymbol{\lambda}(t_0)$ are amplified by long-duration integration, producing multi-peak, multi-valley structure in $\mathbf{F}$ (parallel to the initial-guess sensitivity of differential correction).

[Co-state normalization](/en/glossary/dynamics/co-state-variables/) is a critical mitigation: normalize $(\boldsymbol{\lambda}(t_0),\lambda_m(t_0))$ onto the 7-dimensional unit sphere, reducing the search space from an infinite domain to a compact set — the initial guess need only "point in the right direction" (Jiang et al. 2012).

### Homotopy

[Homotopy methods](/en/glossary/dynamics/homotopy-method/) embed the difficult original problem into a one-parameter family of auxiliary problems, tracing the solution continuously from an easy starting point to the original:

- **Energy homotopy**: From a high Jacobi constant (near the libration points in CR3BP, easy convergence) to the target energy (the actual transfer energy);

- **Thrust homotopy**: From large thrust (clear bang-bang structure, easy) to the actual thrust level;

- **Continuous low-thrust homotopy**: From the two-body solution to the three-body solution.

### Relationship to Lambert's Problem

Lambert's problem is a special case of the TPBVP under two-body dynamics — given two positions and the time of flight, find the velocity at the start of the connecting Keplerian arc. It is the fundamental building block for both orbit transfers and initial orbit determination. The three-body Lambert problem — where the terminal state is specified in the rotating synodic frame as a relative position — must be solved with differential correction rather than a closed-form or finite-iteration scheme. The TPBVP can be viewed as a generalization of the three-body Lambert problem that additionally incorporates co-states and the optimality condition of a performance index.

## Applications in Cislunar Space

- **Low-energy transfers**: Fuel-optimal transfer from LEO to lunar libration-point orbits. PMP reduces the problem to a TPBVP with Hamilton's canonical equations. Co-state normalization combined with homotopy dramatically improves solvability.

- **NRHO insertion**: The optimal insertion burn for the Gateway mission — insertion point ($t_f$) is free, and the insertion $\Delta v$ is minimized.

- **Multi-spacecraft rendezvous**: Phase matching and relative-motion constraints introduce more complex terminal conditions into $\boldsymbol{\psi}$.

- **Flight-time vs. fuel trade-off for continuous low thrust**: Thrust levels differing by orders of magnitude produce structurally different TPBVP solutions (low thrust → long-arc maneuvers; high thrust → impulse approximation), requiring distinct initial-guess strategies.

- **Two-body → three-body refinement pipeline**: Solve a Lambert problem in the two-body framework to obtain an initial velocity guess; then refine it in the CR3BP or ephemeris model using differential correction / multiple shooting — a natural workflow coupling of the two problem types.

## Related Concepts

- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)

- [Co-state Normalization](/en/glossary/dynamics/co-state-variables/)

- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)

- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)

- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)

- [Differential Correction and Shooting Method](/en/glossary/dynamics/differential-correction/)

## References

- Bryson A E, Ho Y C. Applied Optimal Control[M]. Taylor & Francis, 1975. (Classic exposition of the TPBVP in optimal control)

- Jiang F, Baoyin H, Li J. Practical techniques for low-thrust trajectory optimization with homotopic approach[J]. Journal of Guidance, Control, and Dynamics, 2012. (Co-state normalization + homotopy for TPBVP convergence — key technical details)

- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 5th ed. Microcosm Press, 2022. §6-8, §10.4. (TPBVP and shooting in two-body optimal control)
