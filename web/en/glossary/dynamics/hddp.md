---
title: Differential Dynamic Programming, iLQR, HDDP and Sensitivity-Based Methods
description: Differential Dynamic Programming (DDP) and iterative LQR (iLQR) perform forward integration plus a backward sweep to build a local quadratic approximation of the optimal control problem along a nominal trajectory, turning it into stage-wise subproblems; Hybrid Differential Dynamic Programming (HDDP) augments DDP with an augmented Lagrangian and trust-region handling of constraints; Augmented Lagrangian iLQR (AL-iLQR) brings the same idea to the first-order iLQR framework. This entry covers the DDP/iLQR algorithmic structure, HDDP's augmented Lagrangian and trust-region subproblem, and the sensitivity tools they depend on — first- and higher-order sensitivity matrices, minimum-norm updates, subgradient dual updates, surrogate models (PCE/APCE) — with engineering notes for low-thrust optimization in the CR3BP.
keywords: differential dynamic programming, DDP, iterative LQR, iLQR, hybrid differential dynamic programming, HDDP, augmented Lagrangian iLQR, AL-iLQR, sensitivity matrix, minimum-norm update, subgradient method, surrogate model, polynomial chaos expansion
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Differential Dynamic Programming, iLQR, HDDP and Sensitivity-Based Methods
  desc: Forward pass + backward sweep of DDP/iLQR; augmented Lagrangian and trust-region of HDDP; and the sensitivity matrices, minimum-norm updates, and surrogate models they rely on.
  image: /logo.png
og:
  title: DDP, iLQR, HDDP and Sensitivity-Based Methods Explained | Term Definition
  description: Differential Dynamic Programming (DDP) and iterative LQR (iLQR) solve optimal control via forward integration and a backward sweep; Hybrid DDP (HDDP) adds an augmented Lagrangian and trust region. This entry covers the structure of DDP/iLQR/HDDP/AL-iLQR and the sensitivity matrices, minimum-norm updates, subgradient method, and surrogate models they rely on.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: DDP, iLQR, HDDP and Sensitivity-Based Methods Explained | Term Definition
  description: Differential Dynamic Programming (DDP) and iterative LQR (iLQR) solve optimal control via forward integration and a backward sweep; Hybrid DDP (HDDP) adds an augmented Lagrangian and trust region. This entry covers the structure of DDP/iLQR/HDDP/AL-iLQR and the sensitivity matrices, minimum-norm updates, subgradient method, and surrogate models they rely on.
  image: /logo.png
permalink: /en/glossary/dynamics/hddp/
---

# Differential Dynamic Programming, iLQR, HDDP and Sensitivity-Based Methods

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Differential Dynamic Programming (DDP)** and the **iterative Linear Quadratic Regulator (iLQR)** are trajectory optimization algorithms: a Taylor expansion of the dynamics and cost is built around a nominal trajectory $\bar{\boldsymbol{x}}(t), \bar{\boldsymbol{u}}(t)$, and a forward pass evaluates the trajectory while a backward sweep solves stage-wise local quadratic subproblems, iteratively refining the control correction $\delta\boldsymbol{u}$ until convergence. They reduce Bellman's dynamic programming from a high-dimensional state space to a one-dimensional recursion along the trajectory, and are the main alternative to direct collocation for continuous low-thrust optimal control (Mayne 1966; Jacobson & Mayne 1970; Todorov & Li 2005).

Cislunar implementations include **HDDP** (Hybrid DDP, Lantoine & Russell 2012; Aziz et al. 2019), **AL-iLQR** (Augmented Lagrangian iLQR, Cuevas del Valle et al. 2022), and **MDDP** (Multiple-shooting DDP, Pellegrini & Russell). These algorithms solve low-thrust transfers between DRO ↔ DRO, Lyapunov ↔ Lyapunov, and $L_1$ Halo ↔ $L_2$ Halo in the CR3BP.

## Algorithm Structure: Forward + Backward

Discretize the trajectory into $M$ stages with transition $\boldsymbol{x}_{k+1}=\boldsymbol{f}(\boldsymbol{x}_k,\boldsymbol{u}_k)$ and cost

$$
J = \sum_{k=0}^{N-1} L(\boldsymbol{x}_k,\boldsymbol{u}_k) + \varphi(\boldsymbol{x}_N).
$$

**Forward pass**: with the current control guess $\bar{\boldsymbol{u}}$, integrate the dynamics to obtain $\bar{\boldsymbol{x}}_{k}$ and accumulate cost.

**Backward sweep**: propagate Taylor coefficients of the value function $V$ backward from the terminal time. DDP keeps second order (including $V_{xx}$); iLQR uses only first order (replacing $V_{xx}$ by $\boldsymbol{Q}_{xx}$ and dropping second-order dynamics derivatives). Each stage yields the local quadratic subproblem

$$
\delta\boldsymbol{u}_k^* = \arg\min_{\delta\boldsymbol{u}}\big[J_{u,k}^T\delta\boldsymbol{u} + \tfrac{1}{2}\delta\boldsymbol{u}^T J_{uu,k}\delta\boldsymbol{u}\big],
$$

with solution $\delta\boldsymbol{u}_k = -J_{uu,k}^{-1}J_{u,k} + \boldsymbol{K}_k\,\delta\boldsymbol{x}_k$ (the first term is an open-loop correction, the second a time-varying feedback gain). The difference between iLQR and DDP lies in how $\boldsymbol{K}_k$ is computed: iLQR does not evaluate second-order dynamics derivatives such as $\boldsymbol{f}_{xx}$, which is lighter in implementation.

**Convergence criteria**: feasibility (constraint residual $\|\boldsymbol{\psi}\|<\varepsilon_f$) plus optimality (gradient norm $<\varepsilon_o$), typically $\varepsilon_f\sim 10^{-7}$, $\varepsilon_o\sim 10^{-8}$ (Aziz et al. 2019).

## HDDP: Augmented Lagrangian + Trust Region

Standard DDP handles only unconstrained, fixed-endpoint problems. **HDDP** (Lantoine & Russell) adjoins terminal constraints $\boldsymbol{\psi}(\boldsymbol{x}_N)=\boldsymbol{0}$ with both Lagrange multipliers and a quadratic penalty, forming the augmented Lagrangian

$$
\tilde\varphi = \varphi + \boldsymbol{\lambda}^T\boldsymbol{\psi} + \boldsymbol{\psi}^T\boldsymbol{\Sigma}\boldsymbol{\psi},
$$

with penalty matrix $\boldsymbol{\Sigma}$. Multipliers are updated externally as $\boldsymbol{\lambda}\leftarrow\boldsymbol{\lambda}+\delta\boldsymbol{\lambda}$; **$\boldsymbol{\Sigma}$ is held constant** (unlike the classical practice of growing the penalty), and tuned by hand based on iteration progress.

To prevent divergence from oversized $\delta\boldsymbol{u}$ updates, HDDP enforces a **trust region** $\|\boldsymbol{D}\,\delta\boldsymbol{u}_k\|\le\Delta$ at every stage, turning each subproblem into a trust-region quadratic program (TRQP). The scaling matrix $\boldsymbol{D}$ shapes the trust region; when components of the control vary widely in magnitude (e.g. thrust magnitude vs angles) a non-identity $\boldsymbol{D}$ is essential (Lantoine & Russell 2012 suggest several scaling strategies).

## AL-iLQR: Constrained First-Order Variant

**AL-iLQR** (Cuevas del Valle et al. 2022) grafts an augmented Lagrangian outer loop onto the first-order iLQR framework, handling equality and inequality constraints and supporting mixed impulsive and continuous-thrust missions. It is cheaper than HDDP but slightly weaker in convergence.

## Sensitivity Tools: the Foundation of DDP/iLQR

The backward sweep is fundamentally a propagation of the **sensitivities** (gradient and Hessian) of the cost with respect to controls. Several related concepts merged into this entry:

**Sensitivity Matrix.** The partial derivative matrix of the state with respect to design variables (initial conditions, controls, parameters). For two-point boundary value problems such as Lambert's, higher-order sensitivity matrices of output $\boldsymbol{y}$ with respect to input $\boldsymbol{x}$ can be estimated numerically with few samples via non-product quadrature such as the Conjugate Unscented Transform (Hall & Singla 2020), and used for uncertainty propagation, reachable-set computation, and as a **surrogate model** of the original problem.

**Minimum-Norm Update.** In differential correction, when the number of target state components is smaller than the control degrees of freedom (underdetermined), the pseudoinverse $\delta\boldsymbol{u}=\boldsymbol{J}^T(\boldsymbol{J}\boldsymbol{J}^T)^{-1}\delta\boldsymbol{y}$ gives the minimum-$\|\delta\boldsymbol{u}\|$ correction, equivalent to an instantaneous LQR with $Q=0$, $R=I$. This is a common low-energy correction strategy for libration-point station-keeping and targeting (Shimane et al. 2025).

**Subgradient Method.** Used to update dual variables (Lagrange multipliers) in constrained optimization when the dual function is non-differentiable; the next iterate takes a subgradient direction to narrow the duality gap. It alternates with the augmented Lagrangian step in HDDP/AL-iLQR and is also used in sequential convex optimization and dual decomposition.

**Surrogate Model.** A low-cost polynomial (e.g. polynomial chaos expansion PCE, APCE), Gaussian process, or neural network that approximates an expensive high-fidelity model. Hall & Singla (2020) use HOSM polynomial coefficients to surrogate a Lambert solver for fast PDF propagation of the uncertain Lambert problem; Duan et al. (2025) use APCE to surrogate the multi-revolution Lambert solver.

## Engineering Notes (CR3BP Low-Thrust Optimization)

- **Spherical control variables + trust-region scaling.** Aziz et al. (2019) parameterize thrust by magnitude $T$ and angles $\alpha,\beta$ (see [Control Parametrization](/en/glossary/dynamics/control-parametrization/)) and normalize the trust region: magnitude by $T_{\max}$, angles with larger bounds. When $\boldsymbol{r}_2$ becomes collinear with velocity and the RSW frame is degenerate, switch to Cartesian components.
- **Phasing to isolate flybys.** A single-phase HDDP typically fails after a close lunar flyby because sensitivity explodes; using one phase per flyby localizes the effect, the key trick for CR3BP transfers.
- **Mass leak against singularity.** On coast arcs with $T=0$, $\dot m=0$ makes $\partial\dot m/\partial T$ singular; introduce a mass leak $\epsilon_T$ (a small constant inside the thrust-magnitude norm).
- **Poor initial guess.** HDDP has weak global search; in practice, the initial guess comes from [invariant manifold](/en/glossary/dynamics/invariant-manifold/) tiling or [shape-based methods](/en/glossary/dynamics/shape-based-method/).
- **Second-order vs first-order.** DDP/HDDP retains second-order dynamics derivatives (more accurate, more expensive, narrower convergence basin); iLQR/AL-iLQR uses only first order (cheaper, needs more iterations). HDDP is usually more stable under CR3BP nonlinearity.

## Related Concepts

- [Control Parametrization](/en/glossary/dynamics/control-parametrization/)
- [Shape-Based Method](/en/glossary/dynamics/shape-based-method/)
- [Gooding's Method and Lambert Solvers](/en/glossary/dynamics/goodings-method/)
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Pontryagin Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Multiple-Shooting DDP (MDDP)](/en/glossary/dynamics/mddp/)
- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

## References

- Mayne, D. Q., 1966, "A second-order gradient method for determining optimal trajectories of non-linear discrete-time systems" (the founding DDP paper).
- Jacobson, D. H., Mayne, D. Q., 1970, *Differential Dynamic Programming* (the systematic monograph on DDP).
- Todorov, E., Li, W., 2005, "A generalized iterative LQG method for locally-optimal feedback control of constrained nonlinear stochastic systems" (the modern form of iLQR).
- Lantoine, G., Russell, R. P., 2012, "A hybrid differential dynamic programming algorithm for constrained optimal control problems" (HDDP).
- Aziz, J. D., Scheeres, D. J., Lantoine, G., 2019, "Hybrid Differential Dynamic Programming in the Circular Restricted Three-Body Problem," *JGCD*, DOI: 10.2514/1.G003617 (engineering details of HDDP in the CR3BP: multiphase formulation, trust-region scaling, spherical control variables).
- Pellegrini, E., Russell, R. P., 2017+ (the MDDP multiple-shooting line of work).
- Cuevas del Valle, A. A., et al., 2022 (the AL-iLQR algorithm, augmented Lagrangian + iLQR for mixed impulsive and continuous thrust).
- Hall, Z., Singla, P., 2020, "Higher-order sensitivity matrix method for probabilistic solution to uncertain Lambert problem and reachability set problem," *Celest. Mech. Dyn. Astron.* (HOSM, CUT, surrogate Lambert solver).
- Duan, J., et al., 2025, "Adaptive polynomial chaos expansion method for uncertain multiple-revolution Lambert problem" (APCE surrogate model).
- Shimane, D., et al., 2025 (minimum-norm update for low-energy orbital correction).
