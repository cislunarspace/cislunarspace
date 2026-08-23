---
title: Symplectic Structure and Hamiltonian Normal Form
description: The symplectic framework underlying Hamiltonian mechanics and its use in simplifying the dynamics near equilibria and periodic orbits. Covers the symplectic matrix and symplectic transformations, Poisson brackets, generating functions, Birkhoff and Birkhoff–Gustavson normal forms, the homological equation and small divisors, Lie-series methods (Hori/Deprit/Meyer), Moser's theorem, and partial normal forms used at collinear libration points.
keywords: Symplectic Matrix, Symplectic Transformation, Symplectic Geometry, Poisson Bracket, Generating Function, Birkhoff Normal Form, Birkhoff-Gustavson Normal Form, Hamiltonian Normal Form, Homological Equation, Small Divisor, Hori Method, Moser Theorem, Partial Normal Form
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Symplectic Structure and Hamiltonian Normal Form
  desc: The symplectic framework of Hamiltonian mechanics and normal-form reduction at libration points.
  image: /logo.png
og:
  title: Symplectic Structure and Hamiltonian Normal Form | Hamiltonian Mechanics
  description: The symplectic framework underlying Hamiltonian mechanics. Covers symplectic matrices and transformations, Poisson brackets, generating functions, Birkhoff and Birkhoff–Gustavson normal forms, homological equation and small divisors, Lie-series methods (Hori/Deprit/Meyer), Moser's theorem, and partial normal forms.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Symplectic Structure and Hamiltonian Normal Form | Hamiltonian Mechanics
  description: The symplectic framework underlying Hamiltonian mechanics. Covers symplectic matrices and transformations, Poisson brackets, generating functions, Birkhoff and Birkhoff–Gustavson normal forms, homological equation and small divisors, Lie-series methods (Hori/Deprit/Meyer), Moser's theorem, and partial normal forms.
  image: /logo.png
permalink: /en/glossary/dynamics/hamiltonian-normal-form/
---

# Symplectic Structure and Hamiltonian Normal Form

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Symplectic matrices and transformations

On the standard phase space $\mathbb{R}^{2n}$ with coordinates $\mathbf{z}=(\mathbf{q},\mathbf{p})$ define the block matrix $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$. A real $2n\times 2n$ matrix $M$ is **symplectic** if $M^{\!\top}JM=J$; the set of all such matrices forms the symplectic group $Sp(2n,\mathbb{R})$. Symplectic matrices have determinant 1 and spectra symmetric under $\lambda\mapsto\bar\lambda$, $\lambda\mapsto 1/\lambda$ (Meyer & Offin 2017, §2.4). A smooth coordinate change $\mathbf{z}=\mathbf{Z}(\boldsymbol{\zeta})$ is a **symplectic (canonical) transformation** if its Jacobian is everywhere symplectic; such transformations preserve the form of Hamilton's equations.

The state-transition matrix of any Hamiltonian flow is symplectic; this is why the monodromy matrix of a libration-point orbit has the saddle×center×center eigenvalue structure, and why [Poincaré maps](/en/glossary/dynamics/poincare-section/) preserve phase-space volume. **Symplectic geometry** is the differential-geometric abstraction: a symplectic manifold carries a closed, non-degenerate 2-form $\omega$; Darboux's theorem guarantees that locally all symplectic manifolds look like $(\mathbb{R}^{2n},\omega_0)$.

## Poisson bracket

For smooth functions $F,G$ on phase space, the **Poisson bracket** is

$$\{F,G\}=\nabla F^{\!\top}J\,\nabla G=\frac{\partial F}{\partial\mathbf{q}^{\!\top}}\frac{\partial G}{\partial\mathbf{p}}-\frac{\partial F}{\partial\mathbf{p}^{\!\top}}\frac{\partial G}{\partial\mathbf{q}}.$$

It is bilinear, antisymmetric, and satisfies the Jacobi identity, turning smooth functions into a Lie algebra. Hamilton's equations read $\dot F=\{F,H\}$. A function $F$ is conserved iff $\{F,H\}=0$; $n$ independent integrals in involution (mutual Poisson brackets zero) make the system integrable. The Poisson bracket is *invariant* under symplectic changes of variables; this is the algebraic content of Theorem 2.6.3 of Meyer & Offin (2017), and the reason canonical transformations are the natural changes of variables in Hamiltonian mechanics.

## Generating functions and Lie transforms

A canonical transformation can be encoded by a **generating function**. In the Lie-series approach (Hori 1966; Deprit 1969; Meyer), an autonomous Hamiltonian $G$ generates a one-parameter family of canonical transformations $\boldsymbol{\zeta}\mapsto\mathbf{Z}_t(\boldsymbol{\zeta})$ whose action on any function $F$ is $F\mapsto F+\{G,F\}+\tfrac12\{G,\{G,F\}\}+\cdots$, a *Lie transform*. Choosing $G$ to cancel unwanted terms in $H$ order by order yields the normal form. The Hori/Deprit method provides a recursive, computer-algebra-friendly implementation widely used in celestial mechanics.

## Normal-form procedure and the homological equation

Consider a Hamiltonian near an equilibrium (e.g. a collinear libration point) expanded as $H=H_2+\sum_{k\geq 3}H_k$ with $H_k$ homogeneous of degree $k$. A normal form seeks a canonical transformation $\boldsymbol{\zeta}\mapsto\mathbf{Z}(\boldsymbol{\zeta})$ given as the time-one flow of a generating Hamiltonian $G=\sum_{k\geq 3}G_k$, so that in the new variables the unwanted terms vanish order by order (Gómez et al. 2001, vol. III). At degree $k$ the determining equation is the **homological equation**

$$\widetilde H_k = H_k + \{G_k,H_2\} + (\text{lower-order knowns}),$$

whose unknowns are $G_k$ and the new coefficient polynomial $\widetilde H_k$. Each monomial of $H_k$ contributes a denominator of the form $\mathbf{k}\cdot\boldsymbol{\omega}$ (the frequency dot-product) when solved for $G_k$. If $\mathbf{k}\cdot\boldsymbol{\omega}$ is small but non-zero, the corresponding coefficient of $G_k$ is huge (the **small-divisor problem**), and the formal series may diverge. At collinear points the hyperbolic frequency $\lambda$ bounds the denominators away from zero for non-resonant terms, so reduction to any finite order is well-defined.

## Birkhoff and Birkhoff–Gustavson normal forms

The **Birkhoff normal form** (BNF) eliminates all non-resonant monomials, leaving only terms in involution with $H_2$; in the non-resonant case the normalized Hamiltonian depends only on the actions, making the truncated system integrable (Birkhoff 1927; Meyer & Offin 2017, Ch.10). The **Birkhoff–Gustavson normal form** handles resonant cases by retaining resonant monomials, appropriate for the spatial CR3BP where the two center frequencies are near the 1:1 resonance (giving rise to halo orbits) and higher-order resonances appear near order 57 for the Hill case (Gómez et al. 2001, vol. III).

## Partial normal form, reduction, and Moser's theorem

A **partial normal form** (PNF) cancels only the unstable (hyperbolic) terms, leaving the center-manifold dynamics intact. Combined with reduction to the center manifold $W^c$, this yields a 4-D (or 2-D planar) conservative Hamiltonian that captures Lissajous, halo, and quasi-halo families near $L_{1,2}$ without the hyperbolic directions (Gómez et al. 2001; Jorba & Masdemont 1999). **Normal-form reduction** is the same idea applied to the Poincaré map: simplify the symplectic map to read off stability and bifurcation structure.

**Moser's theorem** (Moser 1958) gives sufficient conditions under which the Birkhoff normal form converges near an elliptic equilibrium; the formal series then describes a true invariant curve, justifying the use of normal forms for stability claims and parameterization of invariant manifolds near libration points.

## Application notes

- Normal-form computations at $L_1/L_2$ to order ~15–35 give accurate semi-analytical approximations of halo and Lissajous orbits used as initial guesses for differential correction.
- Small divisors set the practical order limit; near low-order resonances one must switch to resonant normal forms.
- Computer-algebra implementations of the Hori/Deprit scheme (symbolic manipulators) are the workhorse tools; partial normal forms are preferred when only the center dynamics is needed.

## Related concepts

- [Hamiltonian](/en/glossary/dynamics/hamiltonian/)
- [CR3BP](/en/glossary/dynamics/cr3bp/)
- [Poincaré Section](/en/glossary/dynamics/poincare-section/)
- [Monodromy Matrix](/en/glossary/dynamics/monodromy-matrix/)
- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)
- [Center Manifold](/en/glossary/dynamics/center-manifold/)
- [KAM Theory](/en/glossary/dynamics/kam-theory/)
- [Canonical Variables](/en/glossary/dynamics/canonical-variables/)

## References

- Meyer, K. R., & Offin, D. C. (2017). *Introduction to Hamiltonian Dynamical Systems and the N-Body Problem*, 3rd ed., Ch. 2, 7, 10.
- Gómez, G., Llibre, J., & Martínez, R. (2001). *Dynamics and Mission Design near Libration Points*, vol. III: Advanced Methods for Collinear Points.
- Moser, J. (1958). New aspects in the theory of stability of Hamiltonian systems. *Comm. Pure Appl. Math.*, 11, 81–114.
- Hori, G.-I. (1966). Theory of general perturbations. *PASJ*, 18, 287–296.
- Deprit, A. (1969). Canonical transformations depending on a small parameter. *CeMec*, 1, 12–30.
- Birkhoff, G. D. (1927). *Dynamical Systems*.
- Celletti, A., et al. (2024). The dynamics around the collinear points of the elliptic three-body problem: a normal form approach.
