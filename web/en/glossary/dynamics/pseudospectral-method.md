---
title: Pseudospectral Method (Spectral Collocation)
description: A family of direct methods that approximate state and control by a single high-order global Lagrange polynomial on Legendre-Gauss / Gauss-Radau / Gauss-Lobatto nodes. Exponential (spectral) convergence for smooth solutions; the KKT multipliers map to the continuous costate (covector mapping theorem). Covers GPM, RPM, LPM, Chebyshev variants, hp-adaptivity, and tools (GPOPS-II, DIDO, SPARTAN).
keywords: Pseudospectral Method, GPM, Gauss Pseudospectral Method, RPM, Radau Pseudospectral Method, LPM, Lobatto Pseudospectral Method, Chebyshev, Lagrange interpolation, Legendre-Gauss, spectral convergence, hp-adaptive, GPOPS-II, DIDO, covector mapping
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Pseudospectral Method
  desc: Global Lagrange-polynomial collocation on Legendre nodes — spectral convergence and costate mapping.
  image: /logo.png
og:
  title: Pseudospectral Method Explained | Optimal Control
  description: Direct methods using a single high-order global Lagrange polynomial on Legendre-Gauss/Gauss-Radau/Gauss-Lobatto nodes. Spectral convergence and covector mapping theorem. GPM, RPM, LPM, Chebyshev variants, hp-adaptivity.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Pseudospectral Method Explained | Optimal Control
  description: Direct methods using a single high-order global Lagrange polynomial on Legendre-Gauss/Gauss-Radau/Gauss-Lobatto nodes. Spectral convergence and covector mapping theorem. GPM, RPM, LPM, Chebyshev variants, hp-adaptivity.
  image: /logo.png
permalink: /en/glossary/dynamics/pseudospectral-method/
---

# Pseudospectral Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A pseudospectral method (also called spectral collocation) is a family of [direct methods](/en/glossary/dynamics/direct-methods/) in which the whole time interval is mapped to $[-1,1]$ and a single high-order global Lagrange polynomial approximates state $\mathbf{x}(\tau)$ and control $\mathbf{u}(\tau)$. Dynamics are enforced at orthogonal nodes. Nodes are placed at the roots of Legendre polynomials (or roots + endpoints); $N$ is typically 20–100 per phase — far fewer total nodes than [direct collocation](/en/glossary/dynamics/direct-collocation/). Spectral (exponential) convergence holds for any smooth solution (Canuto et al. 1988; Fornberg 1998).

## Mathematical form

Map continuous time $t\in[t_0,t_f]$ to $\tau\in[-1,1]$:
$$t = \frac{t_f-t_0}{2}\tau + \frac{t_f+t_0}{2}.$$

Take $N+1$ orthogonal nodes $\{-1=\tau_0<\tau_1<\dots<\tau_N=1\}$. State values $\{\mathbf{x}_k\}_{k=0}^N$ are NLP variables; the state approximation is
$$\mathbf{x}(\tau)\approx\sum_{k=0}^{N} L_k(\tau)\,\mathbf{x}_k,\quad L_k(\tau)=\prod_{\substack{j=0\\j\neq k}}^{N}\frac{\tau-\tau_j}{\tau_k-\tau_j}.$$

The derivative at the nodes is given by a single differentiation matrix $\mathbf{D}$:
$$\dot{\mathbf{x}}(\tau_i)\approx\sum_{k=0}^{N} D_{ik}\,\mathbf{x}_k,\quad D_{ik}=\dot{L}_k(\tau_i).$$

The pseudospectral defect constraint is
$$\boldsymbol{\zeta}_i = \sum_{k=0}^{N} D_{ik}\,\mathbf{x}_k - \frac{t_f-t_0}{2}\,\mathbf{f}(\mathbf{x}_i,\mathbf{u}_i,\tau_i) = \mathbf{0},\quad i=0,\dots,N.$$

Unlike [direct collocation](/en/glossary/dynamics/direct-collocation/), the Jacobian here is dense — every defect couples to all $N+1$ state variables. This is the price of the global polynomial.

## Node families

| Method | Nodes | Notes |
| :--- | :--- | :--- |
| **LPM** (Lobatto) | LGL: roots of $P_N(\tau)$ plus endpoints $\pm 1$ | Boundary weighting needed for costate mapping at endpoints |
| **GPM** (Gauss) | LG: roots of $P_{N+1}(\tau)$ (no endpoints) | Cleanest costate mapping; endpoints become extra variables (Benson 2005; Huntington 2007) |
| **RPM** (Radau) | LGR: roots of $P_N(\tau)+P_{N+1}(\tau)$ (one endpoint) | More stable integration structure; flipped Radau (FRPM) preferred in SCP for sparsity (Garg et al. 2011) |

The covector mapping theorem differs in form across the three: GPM and RPM KKT multipliers map directly to the continuous costate, while LPM requires additional endpoint weighting (Benson et al. 2006; Garg et al. 2010). This is the main reason recent tools (GPOPS-II) moved to RPM/FRPM.

A separate family on Chebyshev nodes — **Chebyshev pseudospectral method (CPM)** — has closed-form nodes and differentiation matrix, hence higher computational efficiency; conformal mapping plus barycentric rational interpolation can significantly mitigate the ill-conditioning of the standard CPM differentiation matrix (Kosloff & Tal-Ezer 1993; Cai et al. 2016).

## Spectral convergence and hp-adaptivity

Spectral convergence: for analytic solutions, error decays like $O(\rho^{-N})$ with $\rho>1$ — faster than any polynomial order. But for non-smooth solutions (e.g. bang-bang controls in fuel-optimal problems), global polynomials exhibit Gibbs oscillations and spectral convergence is lost.

The engineering remedy is **hp-adaptivity**:

- **h-type**: split the phase at control discontinuities; pseudospectral discretization on each sub-phase with state/control continuity across.
- **p-type**: increase node count per segment based on error estimates.

GPOPS-II and SPARTAN implement hp-adaptivity. For strongly bang-bang problems, the flipped Radau + switching-time extraction of Hofmann & Topputo (2021) locates switching instants precisely, then optimizes with piecewise-constant control.

## Covector mapping theorem

The central theoretical result is the *covector mapping theorem* (Benson 2005; Benson, Huntington, Rao 2006): under an appropriate linear transformation, the KKT multipliers $\tilde{\boldsymbol{\lambda}}_k$ of the GPM/RPM discretized NLP correspond exactly to the continuous costate $\boldsymbol{\lambda}(\tau_k)$ at the nodes.

Practical consequences:

- Pseudospectral solutions yield a costate time history without analytic derivation of the maximum principle.
- Hamiltonian conservation $H(\mathbf{x},\mathbf{u},\boldsymbol{\lambda},t)=\text{const}$ becomes a built-in accuracy check.
- Pseudospectral costates seed [indirect methods](/en/glossary/dynamics/indirect-methods/) or [homotopy methods](/en/glossary/dynamics/homotopy-method/) — pseudospectral-indirect hybrid solves (Cai et al. 2016).

## Tools

| Tool | Algorithm | Reference |
| :--- | :--- | :--- |
| **GPOPS-II** | hp-adaptive LGR + Ipopt/SNOPT | Patterson & Rao 2014, MATLAB |
| **DIDO** | Legendre pseudospectral | Ross et al., MATLAB |
| **GPOPS** (original) | Gauss pseudospectral | Rao et al. 2010 |
| **SPARTAN** | flipped Radau | Sagliano 2017 |
| **CasADi + custom** | arbitrary | symbolic framework |

## Applications

- **Libration-point transfers.** Low-thrust Halo ↔ NRHO and within-family Halo transfers — pseudospectral methods are a top choice thanks to low node counts and accurate costates (Liu et al. 2025; Kayama et al. 2022).
- **Multi-phase problems.** Launch / stage separation / orbit insertion / re-entry are handled naturally via phase-event constraints in GPOPS-II.
- **As the discretization back-end of SCP.** In [sequential convex programming](/en/glossary/dynamics/scp/), FRPM is preferred over GPM for its superior sparsity (Hofmann & Topputo 2021).
- **When not to use.** Strongly bang-bang fuel-optimal problems without hp-refinement suffer Gibbs oscillations; rapidly changing states (e.g. 6DOF rotational-translational coupling) are better served by direct collocation.

## Related concepts

- [Direct Methods](/en/glossary/dynamics/direct-methods/)
- [Direct Collocation](/en/glossary/dynamics/direct-collocation/)
- [Sequential Convex Programming (SCP)](/en/glossary/dynamics/scp/)
- [Costate Variable](/en/glossary/dynamics/co-state-variables/)
- [Pontryagin's Maximum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)
- [Legendre-Clebsch Condition](/en/glossary/fundamentals/conjugate-point/)

## References

- Benson, D. A. (2005). A Gauss pseudospectral transcription for optimal control. PhD thesis, MIT.
- Benson, D. A., Huntington, G. T., Thorvaldsen, T. P., & Rao, A. V. (2006). Direct trajectory optimization and costate estimation via an orthogonal collocation method. *J. Guidance, Control, and Dynamics*, 29(6), 1435–1440.
- Garg, D., Patterson, M. A., Hager, W. W., Rao, A. V., Benson, D. A., & Huntington, G. T. (2010). A unified framework for the numerical solution of optimal control problems using pseudospectral methods. *Automatica*, 46(11), 1843–1851.
- Garg, D., Patterson, M. A., Darby, C. L., Francolin, C., Huntington, G. T., Hager, W. W., & Rao, A. V. (2011). Direct trajectory optimization and costate estimation via a Radau pseudospectral method. *Computational Optimization and Applications*, 49(2), 335–358.
- Huntington, G. T. (2007). Advancement and analysis of a Gauss pseudospectral transcription for optimal control. PhD thesis, MIT.
- Darby, C. L., Hager, W. W., & Rao, A. V. (2011). An hp-adaptive pseudospectral method for solving optimal control problems. *Optimal Control Applications and Methods*, 32(4), 476–502.
- Patterson, M. A., & Rao, A. V. (2014). GPOPS-II. *ACM Trans. Math. Softw.*, 41(1), 1:1–1:37.
- Fornberg, B. (1998). *A Practical Guide to Pseudospectral Methods*. Cambridge University Press.
- Canuto, C., Hussaini, M. Y., Quarteroni, A., & Zang, T. A. (1988). *Spectral Methods in Fluid Dynamics*. Springer.
- Kosloff, D., & Tal-Ezer, H. (1993). A modified Chebyshev pseudospectral method with $O(N^{-1})$ time step restriction. *J. Computational Physics*, 104(2), 457–469.
- Cai, Z., et al. (2016). Bang-bang optimal control for differentially flat systems using mapped pseudospectral method and analytic homotopic approach. *Optimal Control Applications and Methods*.
- Hofmann, C., & Topputo, F. (2021). Rapid low-thrust trajectory optimization in deep space based on convex programming. *J. Guidance, Control, and Dynamics*.
- Sagliano, M. (2017). On the Radau pseudospectral method: theoretical and implementation advances. *CEAS Space Journal*, 9(3), 313–331.
