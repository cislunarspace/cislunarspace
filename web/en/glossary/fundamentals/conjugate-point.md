---
title: Conjugate Point, Extremal, and Second-Order Optimality Conditions
description: Second-order necessary and sufficient conditions in optimal control: normal vs abnormal extremals, extremal flow, the Jacobi field and conjugate points, Legendre–Clebsch / strengthened Legendre–Clebsch conditions, geometric optimal control, and the sub-Riemannian structure of CR3BP.
keywords: Conjugate Point, Jacobi Field, Abnormal Extremal, Normal Extremal, Extremal Flow, Legendre-Clebsch Condition, Strengthened Legendre-Clebsch, Geometric Optimal Control, Sub-Riemannian Structure, Second-Order Optimality
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Conjugate Point, Extremal, and Second-Order Optimality
  desc: Second-order tests for local optimality — Jacobi field, conjugate point, Legendre-Clebsch, abnormal extremal, geometric optimal control.
  image: /logo.png
og:
  title: Conjugate Point and Second-Order Optimality | Optimal Control
  description: Second-order necessary and sufficient conditions in optimal control: extremal classification, Jacobi field and conjugate points, Legendre–Clebsch, geometric optimal control, sub-Riemannian structure of CR3BP.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Conjugate Point and Second-Order Optimality | Optimal Control
  description: Second-order necessary and sufficient conditions in optimal control: extremal classification, Jacobi field and conjugate points, Legendre–Clebsch, geometric optimal control, sub-Riemannian structure of CR3BP.
  image: /logo.png
permalink: /en/glossary/fundamentals/conjugate-point/
---

# Conjugate Point, Extremal, and Second-Order Optimality Conditions

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Pontryagin's Maximum Principle gives first-order necessary conditions; whether a candidate extremal is truly a local optimum is decided by **second-order conditions** anchored on the **conjugate point** concept. Along a reference extremal curve, a *Jacobi field* $\mathbf{z}(t)$ satisfies the variational equation

$$\dot{\mathbf{z}}=A(t)\mathbf{z},\quad A(t)=\frac{\partial \mathbf{F}}{\partial (\mathbf{x},\boldsymbol{\lambda})}\bigg|_{\text{extremal}},$$

where $\mathbf{F}=(\partial H/\partial\boldsymbol{\lambda},-\partial H/\partial\mathbf{x})$ is the Hamiltonian vector field. A time $t_c>t_0$ at which a non-trivial Jacobi field with $\mathbf{z}(t_0)=0$ returns to $\mathbf{z}(t_c)=0$ is a **conjugate time**, and the corresponding state point is the conjugate point. If no conjugate point exists before $t_f$, the extremal is a weak local optimum in the $C^0$ topology (Caillau & Daoud 2012; Bryson & Ho 1975).

## Extremal classification

A pair $(\mathbf{x}(t),\boldsymbol{\lambda}(t),\mathbf{u}^*(t))$ satisfying PMP is an **extremal**. By the value of the cost multiplier $\lambda_0$:

- **Normal extremal** ($\lambda_0\neq 0$): can normalize $\lambda_0=-1$; the cost contributes to $H$ with non-zero weight. Generic case.
- **Abnormal extremal** ($\lambda_0=0$): the cost drops out of $H$; the optimal control is determined solely by the dynamics. Caillau et al. (2012) show abnormal extremals are absent from minimum-fuel problems when $t_f$ exceeds the minimum time — only the normal case needs consideration.

The family of extremals through a fixed initial point forms the **extremal flow**, classified by the switching function into *bang extremals* (switching function non-zero, control on the boundary) and *singular extremals* (switching function identically zero on a finite arc, control determined by higher-order conditions).

## Legendre–Clebsch conditions

The **Legendre–Clebsch condition** is the second-order necessary condition: along the extremal,

$$\frac{\partial^2 H}{\partial \mathbf{u}^2}\succeq 0$$

(for minimization). The **strengthened Legendre–Clebsch** (or strong Legendre) condition requires strict positivity $\partial^2 H/\partial\mathbf{u}^2\succ 0$, which guarantees the extremal can be embedded in an extremal field and yields local optimality when combined with no conjugate point (Kluever & Pierson 1995; Caillau et al. 2012). It also fixes the sign of switching-function-related quantities such as the thrust-direction cosine. The original $L^1$ minimum-fuel problem does not satisfy the strengthened condition; the logarithmic-barrier homotopy restores it, which is one reason smoothing techniques work for indirect low-thrust optimization.

## Geometric optimal control

**Geometric optimal control** treats the optimal-control problem as a geometric object on the state manifold: extremal curves, the extremal flow, conjugate loci, and the cut locus. Tools from differential geometry — distributions, Lie brackets of vector fields, sub-Riemannian structures — provide global structural results that complement the pointwise PMP. For CR3BP-type problems with thrust-direction constraints, the control distribution has rank smaller than the state dimension; together with a Riemannian metric it defines a **sub-Riemannian structure**, and the abnormal vs normal dichotomy becomes a question of Chow's theorem on the reachability of the distribution (Caillau & Daoud 2012).

## Conjugate-point mapping and applications

In libration-point mission design, **conjugate-point mapping** uses a Poincaré section (e.g. $x=K$ or $y=0$ in the synodic frame) to identify connecting arcs between transfer phases (Vaquero & Howell 2014). Conjugate-point tests are also used to verify the local optimality of continuous-thrust arcs (Prussing & Sandrik 2005).

## Application notes

- A PMP solution without a conjugate-point and Legendre–Clebsch check is only a *candidate* optimum, not a proven one.
- Numerical computation of conjugate points integrates the variational equation alongside the state/costate system and detects sign changes of the determinant of the Jacobi-field matrix.
- In smoothed minimum-fuel formulations, the strengthened Legendre–Clebsch condition holds by construction, eliminating abnormal extremals.

## Related concepts

- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Costate Variables and Adjoint Equations](/en/glossary/dynamics/co-state-variables/)
- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)
- [Primer Vector](/en/glossary/dynamics/primer-vector/)

## References

- Bryson, A. E., & Ho, Y.-C. (1975). *Applied Optimal Control*.
- Caillau, J.-B., Cots, O., & Gergaud, J. (2012). Minimum fuel control of the planar circular restricted three-body problem. *CEAS Space Journal*.
- Caillau, J.-B., & Daoud, B. (2012). Minimum time for the restricted three-body problem. *SIAM J. Control Optim.*, 50(6).
- Kluever, C. A., & Pierson, B. L. (1995). Optimal Earth-Moon trajectories using nuclear electric propulsion. *JGCD*.
- Prussing, J. E., & Sandrik, S. L. (2005). Second-order necessary conditions and sufficient conditions applied to continuous-thrust trajectories. *JGCD*.
- Vaquero, M., & Howell, K. C. (2014). Conjugate-point mapping in the restricted problem.
- Agrachev, A. A., & Sachkov, Y. L. (2004). *Control Theory from the Geometric Viewpoint*.
