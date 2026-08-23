---
title: Hamiltonian
description: The scalar function on phase space governing Hamiltonian dynamics. Covers the Legendre transform from the Lagrangian, the canonical equations, Hamiltonian matrices and symplectic structure, the CR3BP Hamiltonian and its relation to the Jacobi constant, the natural and low-thrust Hamiltonians, nearly-integrable systems, Hamiltonian reduction, and the optimal-control Hamiltonian.
keywords: Hamiltonian, Hamiltonian System, Hamiltonian Matrix, Symplectic, Legendre Transform, Jacobi Constant, Natural Hamiltonian, Low-Thrust Hamiltonian, Nearly-Integrable Hamiltonian, Reduction
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Hamiltonian
  desc: The phase-space scalar governing Hamiltonian dynamics — canonical equations, CR3BP, low-thrust, integrable approximations.
  image: /logo.png
og:
  title: Hamiltonian | Analytical Mechanics and Cislunar Dynamics
  description: The scalar function on phase space governing Hamiltonian dynamics. Covers the Legendre transform, canonical equations, Hamiltonian matrices, the CR3BP Hamiltonian and Jacobi constant, natural and low-thrust Hamiltonians, nearly-integrable systems, reduction, and the optimal-control Hamiltonian.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hamiltonian | Analytical Mechanics and Cislunar Dynamics
  description: The scalar function on phase space governing Hamiltonian dynamics. Covers the Legendre transform, canonical equations, Hamiltonian matrices, the CR3BP Hamiltonian and Jacobi constant, natural and low-thrust Hamiltonians, nearly-integrable systems, reduction, and the optimal-control Hamiltonian.
  image: /logo.png
permalink: /en/glossary/dynamics/hamiltonian/
---

# Hamiltonian

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Hamiltonian $H(\mathbf{q},\mathbf{p},t)$ is the scalar function on phase space that, together with the canonical equations $\dot{\mathbf{q}}=\partial H/\partial\mathbf{p}$, $\dot{\mathbf{p}}=-\partial H/\partial\mathbf{q}$, governs the dynamics of any Hamiltonian system. In conservative mechanics $H$ equals the total energy; in optimal control $H=L+\boldsymbol{\lambda}^{\!\top}\mathbf{f}$ anchors Pontryagin's principle; in CR3BP $H=-C/2$ where $C$ is the Jacobi constant. The same object thus unifies analytical mechanics, perturbation theory, and trajectory optimization (Meyer & Offin 2017; Szebehely 1967).

## From Lagrangian to Hamiltonian

Given a Lagrangian $L(\mathbf{q},\dot{\mathbf{q}},t)$, define the conjugate momenta $\mathbf{p}=\partial L/\partial\dot{\mathbf{q}}$ and perform the Legendre transform

$$H(\mathbf{q},\mathbf{p},t)=\mathbf{p}^{\!\top}\dot{\mathbf{q}}-L(\mathbf{q},\dot{\mathbf{q}},t).$$

This yields the canonical equations. When $H$ is independent of $t$, $dH/dt=\partial H/\partial t=0$, i.e. $H$ is conserved. A **natural Hamiltonian** has the form $H=T(\mathbf{p})+V(\mathbf{q})$ (kinetic plus potential energy), the prototype of mechanical systems.

## Hamiltonian matrix and symplectic structure

The coefficient matrix $A(t)$ of the linearization $\dot{\mathbf{z}}=A\mathbf{z}$ of a Hamiltonian system on phase space $\mathbf{z}=(\mathbf{q},\mathbf{p})$ satisfies $A^{\!\top}J+JA=0$ where $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$. Such $A$ are **Hamiltonian matrices**; their spectra are symmetric under $\lambda\mapsto -\lambda$ (Proposition 2.3.1, Meyer & Offin 2017). The matrix exponential of a Hamiltonian matrix is a **symplectic matrix** $M$ satisfying $M^{\!\top}JM=J$, whose eigenvalues come in reciprocal pairs $\lambda,1/\lambda$. The state-transition matrix of any Hamiltonian flow is symplectic; this is the algebraic origin of the saddle×center×center structure at collinear libration points (see [Symplectic Structure & Hamiltonian Normal Form](/en/glossary/dynamics/hamiltonian-normal-form/)).

## CR3BP Hamiltonian and the Jacobi constant

In the synodic frame of the circular restricted three-body problem, the autonomous Hamiltonian is

$$H=\tfrac12(p_x^2+p_y^2+p_z^2)+yp_x-xp_y-\frac{1-\mu}{r_1}-\frac{\mu}{r_2},$$

with $r_1,r_2$ the distances to the primaries (Szebehely 1967; Meyer & Offin 2017). The Coriolis and centrifugal terms appear as $yp_x-xp_y$. The Jacobi constant is $C=-2H$, the sole integral of CR3BP, gating the Hill region through the zero-velocity surfaces (see [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)).

Cox et al. (2021) split $H$ into the **natural Hamiltonian**

$$H_{nat}=\tfrac12 v^2-\tfrac12(x^2+y^2)-\frac{1-\mu}{r_1}-\frac{\mu}{r_2}$$

(conserved in unperturbed CR3BP) and the **low-thrust Hamiltonian** $H_{lt}=H_{nat}-\mathbf{r}^{\!\top}\mathbf{a}_{lt}$, which becomes a new integral when the low-thrust acceleration $\mathbf{a}_{lt}$ is fixed in the rotating frame. The **relative Hamiltonian** describes the motion of a chaser relative to a target in the synodic frame under both primaries' gravity.

## Nearly-integrable Hamiltonian systems

A system is **integrable** if it has $n$ independent integrals in involution (mutual Poisson brackets zero). A **nearly-integrable Hamiltonian** has the form $H=H_0(I)+\varepsilon H_1(I,\varphi)$, where $(I,\varphi)$ are action-angle variables of the integrable part and $\varepsilon\ll 1$. KAM and Nekhoroshev theorems describe its long-term dynamics (Celletti 2010; see [KAM Theory](/en/glossary/dynamics/kam-theory/)). **Hamiltonian integrable approximation** averages $H_1$ over fast angles to obtain an integrable $\bar H$ that captures mean-motion resonances, used to seed continuation of resonant orbit families in cislunar space (Ding et al. 2025).

## Hamiltonian reduction

When $H$ admits symmetries, Noether's theorem yields conserved quantities (linear momentum, angular momentum, Jacobi integral). **Hamiltonian reduction** quotients the phase space by the symmetry group to lower the effective degrees of freedom: Meyer–Marsden–Weinstein reduction is the standard framework (Meyer & Ofin 2017, Ch.7). The planar CR3BP with fixed Jacobi constant reduces to a 2-D Hamiltonian flow on the Hill region.

## Optimal-control Hamiltonian

For an optimal-control problem, the Hamiltonian is built from the dynamics and running cost:

$$H(\mathbf{x},\boldsymbol{\lambda},\mathbf{u},t)=L(\mathbf{x},\mathbf{u},t)+\boldsymbol{\lambda}^{\!\top}\mathbf{f}(\mathbf{x},\mathbf{u},t),$$

and the optimal control pointwise minimizes $H$ over $\mathbf{u}$. This Hamiltonian shares the canonical-equation structure of the mechanical one, with the costate $\boldsymbol{\lambda}$ playing the role of momentum (see [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/), [Costate Variables](/en/glossary/dynamics/co-state-variables/)).

## Application notes

- Conservation of $H$ in autonomous problems is a cheap and stringent accuracy check for numerical integration.
- CR3BP-LT with rotating-frame-fixed thrust inherits a conserved $H_{lt}$, enabling energy-based trajectory design analogous to the Jacobi-constant gating of CR3BP.
- The symplectic spectrum of the monodromy matrix, read off from $H$'s second variation, determines stable/unstable/center manifolds of libration-point orbits.

## Related concepts

- [CR3BP](/en/glossary/dynamics/cr3bp/)
- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)
- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)
- [Symplectic Structure & Hamiltonian Normal Form](/en/glossary/dynamics/hamiltonian-normal-form/)
- [KAM Theory](/en/glossary/dynamics/kam-theory/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Costate Variables and Adjoint Equations](/en/glossary/dynamics/co-state-variables/)
- [Canonical Variables](/en/glossary/dynamics/canonical-variables/)

## References

- Szebehely, V. (1967). *Theory of Orbits: The Restricted Problem of Three Bodies*.
- Meyer, K. R., & Offin, D. C. (2017). *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*, 3rd ed., Ch. 1–2, 7.
- Celletti, A. (2010). *Stability and Chaos in Celestial Mechanics*.
- Cox, A. B., et al. (2021). CR3BP with low-thrust.
- Ding, Y., et al. (2025). Cislunar SSA via Earth-Moon resonant orbits.

## Definition

哈密顿函数 $H(\mathbf{q},\mathbf{p},t)$ 是相空间上的标量函数，与正则方程 $\dot{\mathbf{q}}=\partial H/\partial\mathbf{p}$, $\dot{\mathbf{p}}=-\partial H/\partial\mathbf{q}$ 一起决定任何哈密顿系统的演化。在保守力学中 $H$ 等于系统总能量；在最优控制中 $H=L+\boldsymbol{\lambda}^{\!\top}\mathbf{f}$ 是庞特里亚金原理的核心；在 CR3BP 中 $H=-C/2$，$C$ 为雅可比常数。同一对象统一了分析力学、摄动理论与轨迹优化（Meyer & Offin 2017；Szebehely 1967）。
