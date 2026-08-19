---
title: Pontryagin's Maximum Principle
description: The fundamental necessary conditions of optimal control, coupling state, costate, and control through a Hamiltonian. Covers the maximum vs minimum convention, the full set of first-order conditions, transversality, switching function, primer vector link, and the variational foundation (Euler–Lagrange, discrete E–L).
keywords: Pontryagin's Maximum Principle, Pontryagin Minimum Principle, PMP, Hamiltonian, Calculus of Variations, Transversality Condition, Switching Function, Euler-Lagrange Equations, Primer Vector
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Pontryagin's Maximum Principle
  desc: The cornerstone necessary conditions of optimal control — Hamiltonian, adjoint equations, transversality, switching function.
  image: /logo.png
og:
  title: Pontryagin's Maximum Principle | Optimal Control Theory
  description: The fundamental necessary conditions of optimal control. Covers the maximum/minimum convention, the full first-order condition set, transversality, switching function, primer vector, and the calculus-of-variations foundation.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Pontryagin's Maximum Principle | Optimal Control Theory
  description: The fundamental necessary conditions of optimal control. Covers the maximum/minimum convention, the full first-order condition set, transversality, switching function, primer vector, and the calculus-of-variations foundation.
  image: /logo.png
permalink: /en/glossary/dynamics/pontryagins-maximum-principle/
---

# Pontryagin's Maximum Principle

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Pontryagin's Maximum Principle (PMP; Pontryagin et al. 1962) gives a set of *necessary* conditions that any optimal control must satisfy. It supersedes the classical calculus of variations by admitting control sets with inequality constraints (e.g. bounded thrust). Given the dynamics $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$ and an augmented cost, PMP introduces a costate $\boldsymbol{\lambda}$ and an *Hamiltonian* $H=L+\boldsymbol{\lambda}^{\!\top}\mathbf{f}$, and states that the optimal control pointwise **maximizes** (Russian convention) or **minimizes** (engineering convention, used in fuel/time problems) $H$ over the admissible control set (Pontryagin et al. 1962; Bryson & Ho 1975; Betts 2010). The two conventions are related by a sign flip of $H$ and $\lambda_0$; they yield the same trajectory.

## The full first-order necessary conditions

For the Bolza problem $J=\Phi(\mathbf{x}(t_f),t_f)+\int_{t_0}^{t_f}L\,dt$ with terminal constraints $\boldsymbol{\Psi}=0$:

1. **State equation** $\dot{\mathbf{x}}=\partial H/\partial\boldsymbol{\lambda}=\mathbf{f}(\mathbf{x},\mathbf{u}^*,t)$.
2. **Costate (adjoint) equation** $\dot{\boldsymbol{\lambda}}=-\partial H/\partial\mathbf{x}$.
3. **Optimality (stationarity)** — minimize $H$ pointwise over $\mathbf{u}\in U$. For interior controls with no bounds: $\partial H/\partial\mathbf{u}=0$; for bounded controls the optimum lies on the boundary of $U$.
4. **Transversality** $\boldsymbol{\lambda}(t_f)=\partial \Phi/\partial\mathbf{x}|_{t_f}+(\partial\boldsymbol{\Psi}/\partial\mathbf{x})^{\!\top}\boldsymbol{\nu}$.
5. **Parameter condition** — if $t_f$ is free, $H(t_f)+\partial\Phi/\partial t+\boldsymbol{\nu}^{\!\top}\partial\boldsymbol{\Psi}/\partial t=0$; for time-independent data this reduces to $H(t_f)=0$, and if $H$ is autonomous then $H\equiv 0$.

These five items together form the **first-order necessary conditions**; solving them is an indirect method, which yields a TPBVP in $(\mathbf{x},\boldsymbol{\lambda})$.

## Switching function and bang-bang structure

When the control enters $H$ linearly — typical for thrust magnitude $T\in[0,T_{max}]$ — the Hamiltonian is minimized by an extreme value of $T$. Define a scalar **switching function** $\rho(t)$ multiplying $T$ in $H$; then $T=T_{max}$ when $\rho<0$ and $T=0$ when $\rho>0$, producing the bang-bang / bang-off-bang structure (Lawden 1963; Conway 2010, Ch.1–2). Singular arcs arise when $\rho\equiv 0$ on a finite interval — then $T$ is determined by higher-order conditions.

For the thrust direction, the optimum is $-\boldsymbol{\lambda}_v/\|\boldsymbol{\lambda}_v\|$, defining the **primer vector** $\mathbf{p}=-\boldsymbol{\lambda}_v$ used to evaluate and improve impulsive transfers (Lawden 1963; [Primer Vector](/en/glossary/dynamics/primer-vector/)).

## Variational foundation

PMP is the modern form of the **calculus of variations** (CoV). For smooth, unconstrained problems the classical Euler–Lagrange equation

$$\frac{d}{dt}\frac{\partial L}{\partial\dot{\mathbf{q}}}-\frac{\partial L}{\partial\mathbf{q}}=0$$

is recovered as the stationarity condition of the action $\int L\,dt$; the Legendre transform yields the Hamiltonian form $\dot{\mathbf{q}}=\partial H/\partial\mathbf{p},\;\dot{\mathbf{p}}=-\partial H/\partial\mathbf{q}$. PMP extends CoV to cases with bounded control, inequality constraints, and non-smooth dynamics — the Euler–Lagrange equations are the special case when $\mathbf{u}=\dot{\mathbf{q}}$ is unconstrained.

A **discrete Euler–Lagrange** formulation underlies DMOC (Discrete Mechanics and Optimal Control): replacing the action by a discrete sum and enforcing the discrete Lagrange–d'Alembert principle yields discrete necessary conditions that preserve the symplectic structure of the continuous problem.

## Application notes

- PMP gives necessary, not sufficient, conditions. Sufficiency requires convexity or additional second-order tests (Legendre–Clebsch, conjugate point).
- For the Lagrangian $L$ linear in $\mathbf{u}$ (e.g. fuel-optimal), the smooth stationarity condition degenerates and PMP's boundary-of-$U$ rule is what determines the control.
- The autonomous Hamiltonian is constant along the optimal trajectory — a useful check on the numerical accuracy of TPBVP solutions.

## Related concepts

- [Costate Variables and Adjoint Equations](/en/glossary/dynamics/co-state-variables/)
- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)
- [Two-Point Boundary-Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)
- [Primer Vector](/en/glossary/dynamics/primer-vector/)
- [Bang-Bang Control](/en/glossary/dynamics/bang-bang-control/)
- [Conjugate Point & Second-Order Optimality](/en/glossary/fundamentals/conjugate-point/)

## References

- Pontryagin, L. S., et al. (1962). *The Mathematical Theory of Optimal Processes*.
- Bryson, A. E., & Ho, Y.-C. (1975). *Applied Optimal Control*.
- Lawden, D. F. (1963). *Optimal Trajectories for Space Navigation*.
- Betts, J. T. (2010). *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming*.
- Conway, B. A. (Ed.) (2010). *Spacecraft Trajectory Optimization*, Ch. 1–2.
- Marsden, J. E., & West, M. (2001). Discrete mechanics and variational integrators. *Acta Numerica*, 10, 357–514.
