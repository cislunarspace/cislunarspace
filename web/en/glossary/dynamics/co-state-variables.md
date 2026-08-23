---
title: Costate Variables and Adjoint Equations
description: The Lagrange multipliers dual to the state in optimal control. Covers costate/adjoint variables, the adjoint equations, costate normalization, the adjoint-control transformation, and initial-costate sensitivity — the central object of indirect trajectory optimization in cislunar space.
keywords: Costate Variables, Adjoint Equations, Lagrange Multiplier, Pontryagin's Maximum Principle, Costate Normalization, Adjoint-Control Transformation, Indirect Method, TPBVP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Costate Variables and Adjoint Equations
  desc: The dual variables of optimal control — definition, adjoint equations, normalization, and adjoint-control transformation.
  image: /logo.png
og:
  title: Costate Variables and Adjoint Equations | Optimal Control Theory
  description: The Lagrange multipliers dual to the state in optimal control — adjoint equations, costate normalization, adjoint-control transformation, and applications in cislunar low-thrust trajectory optimization.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Costate Variables and Adjoint Equations | Optimal Control Theory
  description: The Lagrange multipliers dual to the state in optimal control — adjoint equations, costate normalization, adjoint-control transformation, and applications in cislunar low-thrust trajectory optimization.
  image: /logo.png
permalink: /en/glossary/dynamics/co-state-variables/
---

# Costate Variables and Adjoint Equations

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Costate variables (also adjoint, conjugate variables, or the Lagrange multipliers paired with the state) are dual variables introduced in an optimal-control problem to enforce the dynamics. They have no directly measurable physical counterpart; geometrically they are the sensitivity of the optimal cost-to-go to the state: $\lambda_i(t)=\partial J^*/\partial x_i(t)$ (Bryson & Ho 1975; Betts 2010). Pontryagin's Maximum Principle couples the costate to the state through a Hamiltonian canonical system, turning the problem into a TPBVP in $(\mathbf{x},\boldsymbol{\lambda})$.

## Hamiltonian form and adjoint equations

For $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$ and $J=\Phi(\mathbf{x}(t_f),t_f)+\int_{t_0}^{t_f}L\,dt$, define the control Hamiltonian $H=L+\boldsymbol{\lambda}^{\!\top}\mathbf{f}$. The two PMP conditions on the costate are (Conway 2010, Ch.1; Betts 2010):

1. **Adjoint (costate) equations** $\dot{\boldsymbol{\lambda}}=-\partial H/\partial\mathbf{x}$.
2. **Transversality** $\boldsymbol{\lambda}(t_f)=\partial \Phi/\partial\mathbf{x}|_{t_f}+(\partial\boldsymbol{\Psi}/\partial\mathbf{x})^{\!\top}\boldsymbol{\nu}$, where $\boldsymbol{\Psi}=0$ collects terminal equality constraints with multipliers $\boldsymbol{\nu}$. Free $t_f$ adds $H(t_f)=0$.

With $\dot{\mathbf{x}}=\partial H/\partial\boldsymbol{\lambda}$ and pointwise minimization of $H$ over $\mathbf{u}$, these define the optimal trajectory.

## Costate components in trajectory optimization

For a continuous-thrust spacecraft with state $(\mathbf{r},\mathbf{v},m)$ and control $(\hat{\mathbf{T}},T)$,

$$H=L+\boldsymbol{\lambda}_r^{\!\top}\mathbf{v}+\boldsymbol{\lambda}_v^{\!\top}(\mathbf{g}(\mathbf{r})+T\hat{\mathbf{T}}/m)-\lambda_m T/(I_{sp}g_0).$$

- **Position costate $\boldsymbol{\lambda}_r$**: driven by the gravity gradient.
- **Velocity costate $\boldsymbol{\lambda}_v$**: $\dot{\boldsymbol{\lambda}}_v=-\boldsymbol{\lambda}_r$ when $H$ has no explicit $\mathbf{v}$. The optimal thrust direction is $-\boldsymbol{\lambda}_v/\|\boldsymbol{\lambda}_v\|$; hence $-\boldsymbol{\lambda}_v$ is the **primer vector** (Lawden 1963).
- **Mass costate $\lambda_m$**: monotone increasing, $\dot{\lambda}_m=\|\boldsymbol{\lambda}_v\|T/m^2\geq 0$. The **switching function** $\rho=1-\lambda_m I_{sp}g_0/m-\|\boldsymbol{\lambda}_v\|$ decides $T$ at its bounds, yielding bang-bang / bang-off-bang laws (see [Bang-Bang Control](/en/glossary/dynamics/bang-bang-control/), [Primer Vector](/en/glossary/dynamics/primer-vector/)).

## Costate normalization

For **free-final-state** problems, $(\boldsymbol{\lambda}(t_0),\lambda_0)$ can be rescaled by any positive constant without changing the trajectory (PMP homogeneity). Costate normalization fixes $\|\boldsymbol{\lambda}(t_0)\|=1$ (or one component to unity), reducing the search dimension by one and improving conditioning (Thorne 1996; Oshima et al. 2017). Minimum-time problems lose this homogeneity and replace it by $H\equiv -1$; minimum-fuel problems keep it.

## Adjoint-control transformation

Initial costates have no physical meaning. The **adjoint-control transformation** (Kluever & Pierson 1995; Conway 2010, Ch.4) replaces $\boldsymbol{\lambda}(t_0)$ by intuitive variables: thrust angles $(\alpha,\beta)$, their rates $(\dot\alpha,\dot\beta)$, plus $\lambda_v$, $\dot{\lambda}_v$, $\lambda_m$. The **implicit costate transformation** (Pozzi et al. 2025) is the multi-arc analogue: a closed-form map carries the final costate of one arc into the initial costate of the next.

## Initial-costate sensitivity

Indirect methods suffer because $\boldsymbol{\lambda}(t_0)$ is numerically unstable, small perturbations diverge by $t_f$. The **optimal initial costate locus** describes $\boldsymbol{\lambda}(t_0)$ as a curve over problem parameters with distinct behaviour in parabolic, elliptic, and spiral regimes (Thorne 1996). In practice, [homotopy methods](/en/glossary/dynamics/homotopy-method/) sweep from an easily solved energy-optimal problem to the fuel-optimal target.

## Application notes

- The bottleneck in indirect methods is the initial-costate guess and homotopy design, an order of magnitude harder than guessing states.
- $\lambda_m$ spans many decades in large-scale transfers; log-scaling or independent normalization avoids ill-conditioning.
- In CR3BP-LT, $H_{lt}=H_{nat}-\boldsymbol{\lambda}^{\!\top}\mathbf{a}_{lt}$ becomes a new integral when $\mathbf{a}_{lt}$ is fixed in the rotating frame (Cox et al. 2021).

## Related concepts

- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)
- [Two-Point Boundary-Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)
- [Primer Vector](/en/glossary/dynamics/primer-vector/)
- [Bang-Bang Control](/en/glossary/dynamics/bang-bang-control/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)
- [Indirect Methods](/en/glossary/dynamics/indirect-methods/)

## References

- Bryson, A. E., & Ho, Y.-C. (1975). *Applied Optimal Control*.
- Lawden, D. F. (1963). *Optimal Trajectories for Space Navigation*.
- Betts, J. T. (2010). *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming*, 2nd ed.
- Conway, B. A. (Ed.) (2010). *Spacecraft Trajectory Optimization*, Ch. 1–2, 4.
- Thorne, J. D. (1996). Optimal continuous-thrust orbit transfers. *Acta Astronautica*, 38(8), 565–578.
- Kluever, C. A., & Pierson, B. L. (1995). Optimal Earth-Moon trajectories using nuclear electric propulsion. *JGCD*.
- Oshima, K., et al. (2017). Earth-Moon transfer trajectories … *JGCD*.
- Cox, A. B., et al. (2021). CR3BP with low-thrust.
- Pozzi, E., et al. (2025). Implicit costate transformation for multi-arc optimal control.
