---
title: Direct Methods (for Trajectory Optimization)
description: A broad class of numerical methods for trajectory optimization. The state and control are simultaneously discretized on a mesh, transcribing the infinite-dimensional optimal control problem into a finite-dimensional nonlinear program (NLP). Covers direct shooting, multiple shooting, collocation, pseudospectral, sequential convex programming, and DMOC; their trade-offs; and the KKT–costate correspondence.
keywords: Direct Method, Direct Transcription, NLP, trajectory optimization, optimal control, SQP, interior point, Ipopt, SNOPT, KKT
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Direct Methods (Trajectory Optimization)
  desc: Transcribing optimal control into nonlinear programs — taxonomy, math, trade-offs.
  image: /logo.png
og:
  title: Direct Methods Explained | Trajectory Optimization
  description: A broad family of numerical methods that discretize state and control to transcribe optimal control into NLPs. Taxonomy, math, NLP solvers, KKT–costate mapping.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Direct Methods Explained | Trajectory Optimization
  description: A broad family of numerical methods that discretize state and control to transcribe optimal control into NLPs. Taxonomy, math, NLP solvers, KKT–costate mapping.
  image: /logo.png
permalink: /en/glossary/dynamics/direct-methods/
---

# Direct Methods (for Trajectory Optimization)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Direct methods are a broad class of numerical methods for trajectory optimization: the state $\mathbf{x}(t)$ and control $\mathbf{u}(t)$ of an infinite-dimensional optimal control problem are simultaneously parametrized on a discrete mesh, the dynamics $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$ are replaced by a set of algebraic constraints, and together with boundary conditions, path constraints and the performance index they form a finite-dimensional nonlinear program (NLP). A general NLP solver — SQP or interior-point — then adjusts the parameters (Betts 1998; Conway 2010).

In contrast, [indirect methods](/en/glossary/dynamics/indirect-methods/) first derive the Pontryagin maximum principle analytically, yielding a two-point boundary-value problem (TPBVP) in costate variables, which is then solved numerically. Direct methods skip the costate equations. Both routes converge to KKT conditions, so as the mesh is refined, the Lagrange multipliers of the direct-method NLP converge (under a known linear map) to the continuous costate (Hager 1976; Benson 2005).

## Standard transcription

A continuous Bolza-form optimal control problem,

$$\min J = E(\mathbf{x}(t_0),\mathbf{x}(t_f),t_f)+\int_{t_0}^{t_f} L(\mathbf{x},\mathbf{u},t)\,\mathrm{d}t$$

subject to $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$, boundary conditions $\boldsymbol{\psi}_0\leq\boldsymbol{\psi}(\cdot)\leq\boldsymbol{\psi}_f$, and path constraints $\mathbf{g}_l\leq\mathbf{g}(\mathbf{x},\mathbf{u},t)\leq\mathbf{g}_u$, is discretized as

$$\mathbf{X}=\{\mathbf{x}_0,\mathbf{u}_0,\dots,\mathbf{x}_M,\mathbf{u}_M\},\quad \n
\mathbf{c}(\mathbf{X})=\begin{bmatrix}\boldsymbol{\zeta}_0\\\boldsymbol{\zeta}_1\\\vdots\\\boldsymbol{\zeta}_{M-1}\\\boldsymbol{\psi}\end{bmatrix}\approx \mathbf{0},$$

where $\boldsymbol{\zeta}_j$ are *defect constraints* that approximately enforce the dynamics. The NLP solved is

$$\min_{\mathbf{X}} F(\mathbf{X})\quad\text{s.t.}\quad \mathbf{c}_l\leq\mathbf{c}(\mathbf{X})\leq\mathbf{c}_u,\ \ \mathbf{X}_l\leq\mathbf{X}\leq\mathbf{X}_u.$$

The differences between direct-method branches lie in *how the $\boldsymbol{\zeta}_j$ are constructed*.

## Branches

- **Direct shooting.** Only a small set of control parameters (e.g. polynomial coefficients of pitch angle) are NLP variables; the dynamics are integrated forward with an ODE solver and the terminal state appears as a nonlinear constraint. Few variables, but errors accumulate exponentially along the trajectory and the Jacobian is highly nonlinear in early parameters. Early launch-vehicle codes such as POST and GTS fall here (Betts 1998).
- **Multiple shooting.** The interval is split into segments integrated independently, with state-continuity constraints at segment boundaries. Mitigates error growth at the cost of more variables.
- **Direct collocation.** Low-degree piecewise polynomials (trapezoidal, Hermite-Simpson, fifth-order Gauss-Lobatto) interpolate the state on each sub-interval; dynamics enforced at collocation points yields sparse, block-tridiagonal defect constraints. See [Direct Collocation](/en/glossary/dynamics/direct-collocation/).
- **Pseudospectral (spectral collocation).** A single high-order global Lagrange polynomial approximates the state; collocation nodes are Legendre-Gauss / Gauss-Radau / Gauss-Lobatto. Spectral (exponential) convergence for smooth solutions. See [Pseudospectral Method](/en/glossary/dynamics/pseudospectral-method/).
- **Sequential convex programming (SCP).** Linearize the nonconvex dynamics at a reference trajectory, add a trust region, and solve a sequence of second-order cone programs (SOCP). Polynomial-time interior-point solves each subproblem with a deterministic stopping criterion — enables real-time / on-board use. See [Sequential Convex Programming](/en/glossary/dynamics/scp/).
- **Discrete mechanics and optimal control (DMOC).** Discretize the variational principle (Lagrange-d'Alembert) rather than the ODE; constraints are the discrete Euler-Lagrange equations. Symplectic and momentum-preserving. See [DMOC](/en/glossary/dynamics/discrete-mechanics-and-optimal-control/).

## NLP solvers

- **SNOPT** — sparse SQP for large, sparse problems with thousands to millions of variables (Gill et al. 2002).
- **Ipopt** — open-source primal-dual interior-point method, robust on large nonconvex NLPs (Wächter & Biegler 2006).
- **CasADi** — symbolic framework with automatic differentiation; commonly used as a front-end to the above.

Pseudospectral workflows often use specialized front-ends — **GPOPS-II** (Patterson & Rao 2014), **DIDO** (Ross), **SOCS** (Betts), **OTIS** (Hargraves & Paris) — that generate the NLP internally.

## KKT–costate correspondence

The theoretical appeal of direct methods is the *covector mapping*: as the collocation mesh refines, the NLP's KKT multipliers $\boldsymbol{\lambda}$ converge (under a known linear transformation) to the continuous costate of the original OCP (Hager 1976; Benson 2005; Elnagar 1995). Consequences:

- One can read out a costate time history from a direct solution and check whether the Hamiltonian is conserved — a built-in accuracy test.
- Direct-method costates seed indirect methods, enabling direct-indirect hybrid solves.

The mapping is cleanest for pseudospectral collocation at orthogonal nodes — the *covector mapping theorem* (Benson, Huntington, Rao 2006) — which is one reason for pseudospectral methods' popularity in practice.

## Practical advantages over indirect methods

1. **No analytic costate derivation.** For high-fidelity cislunar dynamics (CR3BP, ephemeris + third-body + solar-radiation pressure + oblateness), deriving the adjoint equations by hand is prohibitive. Direct methods delegate this to the NLP solver's finite-difference or automatic-differentiation machinery.
2. **Wide convergence basin.** Indirect methods are notoriously sensitive to initial costate guesses; direct methods are far more forgiving of initial state/control guesses.
3. **Path constraints are easy.** Bounds, glideslope cones, obstacle avoidance enter the NLP directly, without pre-specifying the constrained/unconstrained arc structure (Betts 1998).

The price: NLP size grows as $(n_x+n_u)\cdot M$ (typical collocation $M=50$–$500$, pseudospectral $M=20$–$100$ per phase), only local minima are obtained — no global optimality guarantee. Low-thrust, multi-revolution, long-duration problems still need a good initial guess (shape-based, manifold stitching, reinforcement learning) to converge to a meaningful optimum.

## Related concepts

- [Indirect Methods](/en/glossary/dynamics/indirect-methods/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Two-Point Boundary-Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)
- [Direct Collocation](/en/glossary/dynamics/direct-collocation/)
- [Pseudospectral Method](/en/glossary/dynamics/pseudospectral-method/)
- [Sequential Convex Programming (SCP)](/en/glossary/dynamics/scp/)
- [DMOC](/en/glossary/dynamics/discrete-mechanics-and-optimal-control/)
- [Costate Variable](/en/glossary/dynamics/co-state-variables/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)

## References

- Betts, J. T. (1998). Survey of numerical methods for trajectory optimization. *J. Guidance, Control, and Dynamics*, 21(2), 193–207.
- Conway, B. A. (Ed.). (2010). *Spacecraft Trajectory Optimization*. Cambridge University Press.
- Betts, J. T. (2010). *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming* (2nd ed.). SIAM.
- Hager, W. W. (1976). The Ritz-Trefftz method for state and control constrained optimal control problems. *SIAM J. Numer. Anal.*
- Benson, D. A. (2005). A Gauss pseudospectral transcription for optimal control. PhD thesis, MIT.
- Gill, P. E., Murray, W., & Saunders, M. A. (2002). SNOPT: an SQP algorithm for large-scale constrained optimization. *SIAM J. Optimization*, 12(4), 979–1006.
- Wächter, A., & Biegler, L. T. (2006). On the implementation of an interior-point filter line-search algorithm for large-scale nonlinear programming. *Mathematical Programming*, 106(1), 25–57.
- Patterson, M. A., & Rao, A. V. (2014). GPOPS-II. *ACM Trans. Math. Softw.*, 41(1), 1:1–1:37.
