---
title: Sequential Convex Programming (SCP / Successive Convexification)
description: "A direct method for nonconvex optimal control: linearize the dynamics at a reference trajectory, add a trust region, and losslessly convexify the control constraints, yielding a sequence of second-order cone programs (SOCP). Polynomial-time interior-point solves each subproblem with a deterministic stopping criterion — well-suited to real-time / on-board guidance. Covers lossless convexification, virtual control, trust-region rules, and applications to powered descent, low-thrust transfer, and entry guidance."
keywords: Sequential Convex Programming, SCP, Successive Convexification, Convex Optimization, SOCP, Trust Region, Lossless Convexification, Virtual Control, Interior Point, Powered Descent Guidance
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Sequential Convex Programming (SCP)
  desc: Linearize → trust region → lossless convexification → SOCP — real-time trajectory optimization.
  image: /logo.png
og:
  title: Sequential Convex Programming Explained | Trajectory Optimization
  description: "A direct method for nonconvex optimal control: successive linearization + trust region + lossless convexification → a sequence of SOCP subproblems. Polynomial-time, deterministic stopping — fit for real-time / on-board guidance."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sequential Convex Programming Explained | Trajectory Optimization
  description: "A direct method for nonconvex optimal control: successive linearization + trust region + lossless convexification → a sequence of SOCP subproblems. Polynomial-time, deterministic stopping — fit for real-time / on-board guidance."
  image: /logo.png
permalink: /en/glossary/dynamics/scp/
---

# Sequential Convex Programming (SCP)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Sequential convex programming (SCP, also *successive convexification* / SCvx) is a [direct method](/en/glossary/dynamics/direct-methods/) tailored to **nonconvex** optimal control problems. At a reference trajectory $\mathbf{x}^{*}(t)$, the nonlinear dynamics are replaced by a first-order Taylor expansion; combined with a trust-region constraint and lossless convexification of nonconvex control constraints, the original problem becomes a sequence of second-order cone programs (SOCP). Each iteration solves the SOCP and updates the reference trajectory until $\|\mathbf{x}^{(n)}-\mathbf{x}^{(n-1)}\|$ converges (Acikmese & Ploen 2007; Szmuk et al. 2017; Wang & Grant 2018).

Unlike general [direct collocation](/en/glossary/dynamics/direct-collocation/) NLPs, SCP subproblems are **convex**:

- Interior-point methods solve each to a given accuracy in polynomial time with a deterministic stopping criterion.
- User-supplied initial guesses do not affect interior-point startup (self-dual embedding constructs a feasible start).
- Subproblem-level global optimality is guaranteed (though the original nonconvex problem still admits only local optimality).

These properties make SCP well suited to **real-time / on-board** applications — the core distinction from general NLP direct methods (Acikmese & Ploen 2007).

## Mathematical form

For the nonconvex OCP
$$\min_{\mathbf{x},\mathbf{u}} J,\ \ \dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u}),\ \ \mathbf{x}(t_0)=\mathbf{x}_0,\ \ \text{boundary/path constraints},$$

SCP iteration $n$ linearizes the dynamics at $\mathbf{x}^{(n-1)}(t)$:
$$\dot{\mathbf{x}} \approx A(t)\,\mathbf{x}+B(t)\,\mathbf{u}+\mathbf{q}(t),$$
$$A(t)=\frac{\partial\mathbf{f}}{\partial\mathbf{x}}\bigg|_{\mathbf{x}^{(n-1)}},\quad B(t)=\frac{\partial\mathbf{f}}{\partial\mathbf{u}}\bigg|_{\mathbf{x}^{(n-1)}},\quad \mathbf{q}(t)=\mathbf{f}(\mathbf{x}^{(n-1)},\mathbf{u}^{(n-1)})-A\,\mathbf{x}^{(n-1)}-B\,\mathbf{u}^{(n-1)}.$$

A trust-region constraint $\|\mathbf{x}-\mathbf{x}^{(n-1)}\|\leq \delta_n$ limits linearization error. The subproblem is now linear-time-varying (LTV) dynamics with convex constraints. After pseudospectral/Radau discretization it becomes a finite-dimensional SOCP, solved by ECOS, Mosek, or CVX.

### Lossless convexification

Many aerospace problems have nonconvex control constraints, not nonconvex dynamics. The canonical example is powered descent: $\rho_2\leq\|\mathbf{T}_c\|\leq\rho_1$ — the lower bound (nonzero) makes the feasible set an annulus, nonconvex. Introduce a slack $\Gamma\geq\|\mathbf{T}_c\|$ and replace the control constraint by the convex cone $\|\mathbf{T}_c\|\leq\Gamma,\ \rho_2\leq\Gamma\leq\rho_1$, giving a *relaxed problem*.

The key Lemma of Acikmese & Ploen (2007) shows that, under mild conditions, the optimal solution of the relaxed problem lies on the boundary of the original nonconvex feasible set — so **relaxation costs nothing in optimality** (lossless). The result was later generalized to control-affine problems (Wang & Grant 2018).

### Virtual control

Linearization may produce *artificial infeasibility* — subproblems that are infeasible even though the original is feasible. An unconstrained *virtual control* $\boldsymbol{\nu}$ is added to the linearized dynamics to guarantee subproblem feasibility; $\|\boldsymbol{\nu}\|$ is heavily penalized in the cost to force $\boldsymbol{\nu}\to\mathbf{0}$ at convergence. If $\boldsymbol{\nu}=\mathbf{0}$ at convergence, the subproblem solution satisfies the nonlinear dynamics exactly (Szmuk et al. 2017).

### Trust region and convergence

The trust-region radius $\delta_n$ is adapted: if $r_n=\Delta J_{\text{act}}/\Delta J_{\text{pred}}$ is close to 1 (linearization accurate), $\delta_{n+1}$ grows; if $r_n$ is close to 0, $\delta_{n+1}$ shrinks. Hofmann & Topputo (2021) use a $\rho_i,\alpha_i,\beta_i$ three-segment rule.

Convergence criteria usually combine: dynamics violation $\epsilon_c\to 0$, cost change $\epsilon_\phi\to 0$, virtual control $\|\boldsymbol{\nu}\|\to 0$.

## Variants

- **SCvx** (Szmuk et al.) — classical trust region + virtual control, with the most complete convergence proof.
- **GUSTO** (Mao, Szmuk, Acikmese) — a success/failure-step strategy; implementation-friendly.
- **ECIPS / cvxgen** — embedded code generation for on-board real-time solves.
- **PC-SCoP** (phase-constrained sequential cone program) — multiphase extension with linearized inter-phase event constraints.
- **Successive convex optimization + switching-time extraction** (Hofmann-Topputo 2021) — FRPM discretization with bang-off-bang mesh refinement, accurately capturing switching structure.

## Comparison with direct collocation / pseudospectral

| Feature | SCP | [Collocation/Pseudospectral](/en/glossary/dynamics/direct-collocation/) |
| :--- | :--- | :--- |
| Subproblem | SOCP (convex) | General NLP (nonconvex) |
| Convergence | Polynomial-time, deterministic | Local, depends on initial guess |
| Real-time | Strong (ms–s) | Weak (s–min) |
| Global optimality | Subproblem-level guarantee | None |
| Application | Guidance, on-board | Mission design, ground optimization |
| Control-structure accuracy | Needs switching-time extraction | Captured directly |

## Applications

- **Powered descent guidance.** Mars / Moon pinpoint landing is SCP's killer app — Acikmese & Ploen's lossless convexification was tailor-made for this; derivatives are used for SpaceX Starship on-board real-time planning (Acikmese & Ploen 2007; Song et al. 2021).
- **Low-thrust transfers.** Wang & Grant first applied SCP to time- and fuel-optimal low-thrust orbit transfers; Hofmann & Topputo extended it to interplanetary transfers with hp-Radau + bang-off-bang refinement (Wang & Grant 2018; Hofmann & Topputo 2021).
- **Earth-Moon libration transfers.** Halo ↔ NRHO and other highly nonlinear regimes: Kayama et al. (2022) show SCP still converges in the CR3BP neighborhood, but a *thrust-continuation method* (gradually lowering thrust acceleration from a large value to the mission value) is required at low acceleration levels to avoid divergence.
- **Collision avoidance and rendezvous.** Near-field RPO and passively safe rendezvous with convexified keep-out constraints (Elango et al. 2025).

## Related concepts

- [Direct Methods](/en/glossary/dynamics/direct-methods/)
- [Direct Collocation](/en/glossary/dynamics/direct-collocation/)
- [Pseudospectral Method](/en/glossary/dynamics/pseudospectral-method/)
- [Convex Cone](/en/glossary/dynamics/convex-cone/)
- [Fuel-Optimal Powered Descent](/en/glossary/dynamics/fuel-optimal/)
- [CR3BP](/en/glossary/dynamics/cr3bp/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)

## References

- Acikmese, B., & Ploen, S. R. (2007). Convex programming approach to powered descent guidance for Mars landing. *J. Guidance, Control, and Dynamics*, 30(5), 1353–1366.
- Szmuk, M., Reynolds, T. P., & Acikmese, B. (2017). Successive convexification for real-time six-degree-of-freedom powered descent guidance. *J. Guidance, Control, and Dynamics*.
- Wang, Z., & Grant, M. J. (2018). Minimum-fuel low-thrust transfers for spacecraft: a convex approach. *IEEE Trans. Aerospace and Electronic Systems*.
- Hofmann, C., & Topputo, F. (2021). Rapid low-thrust trajectory optimization in deep space based on convex programming. *J. Guidance, Control, and Dynamics*.
- Kayama, H., et al. (2022). Low-thrust trajectory design with successive convex optimization for libration point orbits.
- Song, Z., et al. (2021). Adaptive powered descent guidance based on multi-phase pseudospectral convex optimization.
- Tang, S., & Conway, B. A. (2018). Fuel-optimal low-thrust trajectory optimization using indirect method and successive convex programming.
- Elango, A., et al. (2025). Successive convexification for passively-safe spacecraft rendezvous on near rectilinear halo orbit.
- Mao, Y., Szmuk, M., & Acikmese, B. (2016). Successive convexification of non-convex optimal control problems and its convergence properties. *IEEE CDC*.
