---
title: Differential Correction and Shooting Method
description: Core iterative method for solving boundary-value problems in astrodynamics — the state transition matrix serves as a linearization operator, and Newton-Raphson updates on free variables drive terminal constraints to zero. Covers free-variable/constraint formulation, fixed/variable-time targets, multiple shooting, Howell-Pernicka two-level corrector, and direct vs. indirect formulations, with engineering context in CR3BP periodic orbit generation and ephemeris-model transfers.
keywords: differential correction, shooting method, state transition matrix, multiple shooting, two-level differential correction, Newton-Raphson, boundary value problem, patch point, targeting
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Differential Correction and Shooting Method
  desc: Solving BVPs with linearization and Newton-Raphson iteration in orbit design
  image: /logo.png
og:
  title: "Differential Correction and Shooting Method Explained"
  description: Core iterative method for solving boundary-value problems in astrodynamics — the state transition matrix serves as a linearization operator, and Newton-Raphson updates on free variables drive terminal constraints to zero.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Differential Correction and Shooting Method Explained"
  description: Core iterative method for solving boundary-value problems in astrodynamics — the state transition matrix serves as a linearization operator, and Newton-Raphson updates on free variables drive terminal constraints to zero.
  image: /logo.png
permalink: /en/glossary/dynamics/differential-correction/
---

# Differential Correction and Shooting Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Differential correction is the core iterative algorithm for solving boundary-value problems (BVPs) in orbital mechanics. It takes a first-order Taylor expansion of the dynamics about a reference trajectory, uses the [State Transition Matrix](/en/glossary/fundamentals/stm/) (STM) $\boldsymbol{\Phi}(t,t_0)=\partial\mathbf{x}(t)/\partial\mathbf{x}_0$ as the linearization operator, and turns the question of "what perturbation to the free variables will null the terminal constraint residuals" into a linear-algebra problem solved by [Newton-Raphson iteration](/en/glossary/dynamics/newton-raphson-method/), repeated until $\|\mathbf{F}\|$ drops below a specified tolerance (Muralidharan 2021 Ch. 3; Vallado 2022 §10.4).

The shooting method is differential correction applied specifically to BVPs: convert a BVP into an initial-value problem (IVP), guess the missing initial conditions, propagate forward, evaluate the terminal residual, and use the STM to back-propagate the correction to the initial state. In the CR3BP literature the terms are often used interchangeably — strictly speaking, *differential correction* refers to the correction algorithm itself, and *shooting method* refers to the specific BVP-into-IVP strategy. Differential correction also appears independently in orbit determination (OD), where Vallado 2022 names "Algorithm 67" as the differential correction for least-squares estimation.

## Mathematical Formulation

### Free Variables and Constraints

Let $\bar{X}\in\mathbb{R}^n$ be free design variables (initial velocity components, flight time, [patch point](/en/glossary/dynamics/patch-point/) states, etc.), and $\bar{F}(\bar{X})\in\mathbb{R}^m$ the constraint residual vector (position/velocity mismatches, periodicity, perilune altitude, etc.). At the current iterate $\bar{X}_j$, the first-order Taylor expansion, set to $\bar{F}(\bar{X}_{j+1})\approx\bar{0}$, yields:

$$\bar{F}(\bar{X}_j)+D\bar{F}(\bar{X}_j)\,(\bar{X}_{j+1}-\bar{X}_j)=\bar{0}$$

where $D\bar{F}=\partial\bar{F}/\partial\bar{X}\in\mathbb{R}^{m\times n}$ is the Jacobian of the constraints with respect to the free variables. The constraints are functions of the terminal state, and the terminal state is mapped from the initial state by the flow of the dynamics — thus every element of $D\bar{F}$ is constructed from the corresponding arc's STM.

### Three Solution Regimes

| Condition | Free vs. constraints | Update formula |
| :--- | :--- | :--- |
| Determined | $n=m$ | $\bar{X}_{j+1}=\bar{X}_j-[D\bar{F}]^{-1}\bar{F}$ |
| Under-determined | $n>m$ | $\bar{X}_{j+1}=\bar{X}_j-D\bar{F}^{T}[D\bar{F}\,D\bar{F}^{T}]^{-1}\bar{F}$ |
| Over-determined | $n<m$ | $\bar{X}_{j+1}=\bar{X}_j-[D\bar{F}^{T}D\bar{F}]^{-1}D\bar{F}^{T}\bar{F}$ |

The under-determined case — common in orbit maintenance and minimum-$\Delta v$ targeting — yields a minimum-norm solution that minimizes the fuel cost. Vallado 2022 §10.4 applies the same least-squares structure to the over-determined case in orbit determination where observations far outnumber state parameters.

### STM—Jacobian Coupling

The STM satisfies the variational differential equation, integrated simultaneously with the equations of motion along the reference trajectory:

$$\dot{\boldsymbol{\Phi}}(t,t_0)=A(t)\,\boldsymbol{\Phi}(t,t_0),\quad \boldsymbol{\Phi}(t_0,t_0)=I_6,\quad A(t)=\left.\frac{\partial\mathbf{f}}{\partial\mathbf{x}}\right|_{\mathbf{x}(t)}$$

In the CR3BP, $\mathbf{x}\in\mathbb{R}^6$ (3 position + 3 velocity), so the STM is $6\times 6$, and 42 coupled ODEs (6 state + 36 STM elements) are integrated in parallel.

## Two Shooting Configurations

### Single Shooting

Treat the entire trajectory as a single arc; adjust the initial velocity $\mathbf{v}_0$ (and possibly flight time $T$) to hit the target at the terminal state.

**Fixed-Time Position Target** (Muralidharan 2021 §3.3.1): $\bar{X}=[\dot{x}_0,\dot{y}_0,\dot{z}_0]^T$, $\bar{F}=\mathbf{r}(T)-\mathbf{r}_d$, $D\bar{F}=\boldsymbol{\Phi}_{vr}(T,t_0)$ — the upper-right $3\times 3$ block of the STM capturing terminal position sensitivity to initial velocity. Three equations, three unknowns, an exactly determined system.

**Variable-Time Position Target** (Muralidharan 2021 §3.3.2): Flight time $T$ joins the free variables, $\bar{X}\in\mathbb{R}^4$, with three position constraints — an under-determined system solved via the minimum-norm update. The new column in the Jacobian is $\partial\mathbf{r}(T)/\partial T=\dot{\mathbf{r}}(T)$, the terminal velocity. This is the standard configuration for periodic orbit search, where $T$ itself is unknown.

### Multiple Shooting

Single shooting over long arcs — especially through sensitive regions such as perilune — suffers from STM ill-conditioning: sensitivity to the initial guess amplifies, and iterations diverge. Multiple shooting splits the trajectory into $n$ sub-arcs separated by $n-1$ internal [patch points](/en/glossary/dynamics/patch-point/) with unknown states $\bar{x}_i$. Continuity constraints are enforced at each patch point (Muralidharan 2021 §3.4; Pavlak & Howell 2012):

$$\bar{F}_i(\bar{X})=\bar{x}_{i+1}-\boldsymbol{\Phi}_{i+1,i}\,\bar{x}_i=\mathbf{0},\quad i=1,\dots,n-1$$

(For fixed-time: $6n$ free variables; for variable-time: $7n-1$.) Each segment uses its own STM $\boldsymbol{\Phi}_{i+1,i}$. All constraints are stacked and one Newton step updates all patch-point states simultaneously. The design-variable dimension grows from 6/7 to $6n$/$7n-1$, but the convergence basin widens dramatically. This is the standard tool for transitioning CR3BP periodic orbits into the high-fidelity ephemeris model (Pavlak 2013; Muralidharan 2021 §4.4 stacks 40–50 NRHO revolutions to generate a 1-year virtual reference trajectory for the Gateway).

## Howell-Pernicka Two-Level Corrector

Quasi-periodic orbits (Lissajous, quasi-halo, quasi-periodic DRO) are not strictly closed in the CR3BP. A single-level differential correction struggles to simultaneously eliminate position and velocity residuals. The two-level corrector introduced by Howell & Pernicka (1987, 1990, 1993) — also called the two-level targeter (TLT) — splits the process into two nested layers:

- **Inner level (position continuity)**: Fix patch-point positions, adjust only the velocities to enforce positional continuity;

- **Outer level (velocity continuity)**: Adjust patch-point positions and segment times to eliminate velocity discontinuities.

The two levels iterate until both position and velocity are continuous. This is the canonical algorithm for computing Lissajous and quasi-halo orbit families and transitioning them to the ephemeris model. Pavlak & Howell (2012) generalized it with a multiple-shooting formulation for long-baseline trajectory patching; Wang et al. (2024) added mission constraints to evolve it into a constrained two-level targeter for the Orion spacecraft's autonomous Earth-return guidance.

## Convergence and Pitfalls

- **Quadratic convergence**: Near the solution the Newton method exhibits quadratic convergence; 3–5 iterations typically reach $10^{-12}$ tolerance when the initial guess is good.

- **Initial guess quality**: Far from the true solution, linearization breaks down and iterations may diverge or land in local minima. Common countermeasures: [continuation](/en/glossary/dynamics/continuation/) (march along orbit families) and [homotopy](/en/glossary/dynamics/homotopy-method/) (transition from an easy problem to the hard one).

- **STM effective horizon**: The STM is a first-order approximation. Long propagation times or passage through high-sensitivity regions (perilune) degrade its accuracy. Muralidharan (2021 §5.10) shows that on the 9:2 NRHO, perturbations of ~1 cm/s applied at apoapsis and propagated 6.5 revolutions downstream produce non-Gaussian multimodal error distributions — the linear STM estimate of the maneuver direction deviates meaningfully. This is the root cause of single-shooting failures at long horizons and the direct motivation for introducing multiple shooting.

- **Balance of free variables and constraints**: Variables > constraints yields the minimum-norm solution; variables < constraints yields the least-squares solution. Mismatching this pairing leads to meaningless correction directions.

## Direct vs. Indirect Formulations (in Optimal Control)

In trajectory optimization under [optimal control](/en/glossary/dynamics/pontryagins-maximum-principle/), "shooting" takes on more specific meanings:

- **Indirect shooting**: Use the unknown initial co-state $\boldsymbol{\lambda}(t_0)$ and terminal time $t_f$ as free variables, integrate Hamilton's canonical equations, and satisfy terminal/transversality conditions. Co-states lack physical intuition and are extremely sensitive to the initial guess — see [Two-Point Boundary Value Problem](/en/glossary/dynamics/tpbvp/).

- **Direct shooting / direct transcription**: Discretize the continuous control $\mathbf{u}(t)$ as a parameter sequence; the entire optimal control problem becomes a nonlinear program (NLP) with no explicit co-states. Direct multiple shooting (Bock 1981; Sager 2009) plants state and control variables at each segment node and uses explicit integration within segments — a standard backbone of aerospace NLP solvers.

Direct methods converge more reliably but involve far more variables; indirect methods have fewer variables and higher precision (satisfying Pontryagin's necessary conditions) but depend critically on the initial guess. A common engineering strategy is "direct for initial guess, indirect for refinement."

## Applications in Cislunar Space

- **Periodic orbit generation**: All CR3BP periodic orbit families — Halo, Lyapunov, DRO, NRHO, axial, vertical — rely on symmetry-reduced, variable-time single-shooting differential correction (half-period integration to $x$-axis crossing, constraints $y=\dot{x}=\dot{z}=0$, free variables $\dot{y}_0$ and half-period $T/2$).

- **Transfer trajectory design**: LEO-to-DRO, LEO-to-NRHO, interplanetary transfers, etc., use single or multiple shooting to match terminal states. Low-energy transfers often use differential correction at [patch points](/en/glossary/dynamics/patch-point/) to eliminate inter-segment velocity jumps.

- **Ephemeris-model transition**: The CR3BP solution → high-fidelity ephemeris model step almost universally uses multiple shooting (typically 40–50 patch points covering one year).

- **Orbit maintenance**: [Target Point](/en/glossary/dynamics/target-point-strategy/), x-axis crossing control, $\dot{x}$-control, and related stationkeeping algorithms are fundamentally single-shooting differential correction — targeting the next downstream crossing as a constraint and solving for the current maneuver $\Delta\mathbf{v}$.

- **Orbit determination**: The least-squares estimation of an orbit from ground-based observations — what Vallado (2022 Algorithm 67) calls "Differential Correction" — uses the same mathematical framework, with observation residuals replacing terminal constraints.

## Related Concepts

- [State Transition Matrix (STM)](/en/glossary/fundamentals/stm/)

- [Patch Point](/en/glossary/dynamics/patch-point/)

- [Two-Point Boundary Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [Continuation](/en/glossary/dynamics/continuation/)

- [Poincaré Map](/en/glossary/dynamics/poincare-map/)

- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)

- [Newton-Raphson Method](/en/glossary/dynamics/newton-raphson-method/)

## References

- Muralidharan A. Stretching directions in cislunar space: stationkeeping and an application to transfer trajectory design[D]. Purdue University, 2021. (Chapter 3 — canonical textbook-style exposition of STM, differential correction, and single/multiple shooting)

- Howell K C, Pernicka H J. Numerical determination of Lissajous trajectories in the restricted three-body problem[J]. Celestial Mechanics, 1987, 41(1-4): 107-124. (Original source of the two-level differential corrector)

- Pavlak T A. Trajectory design and orbit maintenance strategies in multi-body dynamical regimes[D]. Purdue University, 2013. (Multiple shooting for long-baseline ephemeris trajectories)

- Vallado D A. Fundamentals of Astrodynamics and Applications[M]. 5th ed. Microcosm Press, 2022. §10.4, Algorithm 67. (Differential correction in orbit determination)

- Wilson R S. Generation of accurate baseline numerical trajectories for the three-body problem[D]. Purdue University, 2003. (Formalization of the free-variable/constraint formulation)

- Bock H G, Plitt K J. A multiple shooting algorithm for direct solution of optimal control problems. IFAC Proceedings Volumes, 1984. (Direct multiple shooting)
