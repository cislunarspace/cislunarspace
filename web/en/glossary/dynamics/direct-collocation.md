---
title: Direct Collocation
description: The most widely used direct method: low-degree piecewise polynomials (trapezoidal, Hermite-Simpson, fifth-order Gauss-Lobatto) interpolate the state on each sub-interval; dynamics enforced at collocation points yield sparse defect constraints. Covers the math of defect constraints, format selection, mesh refinement, knots, scaling, and comparison with pseudospectral and shooting methods.
keywords: Direct Collocation, Direct Transcription, DCNLP, Defect Constraint, Hermite-Simpson, Trapezoidal, Gauss-Lobatto, NLP, sparse
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Direct Collocation
  desc: Sparse-defect transcription of optimal control into NLPs — formats, mesh refinement, applications.
  image: /logo.png
og:
  title: Direct Collocation Explained | Trajectory Optimization
  description: The most widely used direct method. Low-degree piecewise polynomials interpolate the state, dynamics enforced at collocation points yield sparse defect constraints. Hermite-Simpson, trapezoidal, fifth-order Gauss-Lobatto, mesh refinement.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Direct Collocation Explained | Trajectory Optimization
  description: The most widely used direct method. Low-degree piecewise polynomials interpolate the state, dynamics enforced at collocation points yield sparse defect constraints. Hermite-Simpson, trapezoidal, fifth-order Gauss-Lobatto, mesh refinement.
  image: /logo.png
permalink: /en/glossary/dynamics/direct-collocation/
---

# Direct Collocation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Direct collocation (also called direct transcription, DCNLP) is the most widely used family of [direct methods](/en/glossary/dynamics/direct-methods/). The interval $[t_0,t_f]$ is divided into $N$ sub-intervals; on each sub-interval the state is interpolated by a low-degree piecewise polynomial and the control is discretized at the nodes. At collocation points within each sub-interval the dynamics $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$ are enforced. These collocation conditions are nonlinear algebraic constraints called *defect constraints*. Handing the defects, boundary conditions, path constraints, and the performance index to an NLP solver completes the transcription from the continuous OCP to a finite-dimensional NLP (Hargraves & Paris 1987; Betts 1998; Conway 2010).

## Mathematical form of defect constraints

Writing the $j$-th sub-interval $[t_j,t_{j+1}]$ with length $h_j=t_{j+1}-t_j$, the three most common collocation schemes are:

- **Trapezoidal.** Linear state interpolation within the segment; defect
$$\boldsymbol{\zeta}_j = \mathbf{x}_{j+1}-\mathbf{x}_j - \frac{h_j}{2}\big[\mathbf{f}(\mathbf{x}_j,\mathbf{u}_j,t_j)+\mathbf{f}(\mathbf{x}_{j+1},\mathbf{u}_{j+1},t_{j+1})\big] = \mathbf{0}.$$
Second-order accurate. Fewest NLP variables and sparsest Jacobian — useful for initial exploration.

- **Hermite-Simpson (separated form).** A midpoint state $\mathbf{x}_{j+1/2}$ is introduced; a cubic Hermite polynomial interpolates the state on the segment; the Simpson defect is enforced at the midpoint:
$$\boldsymbol{\zeta}_j = \mathbf{x}_{j+1}-\mathbf{x}_j - \frac{h_j}{6}\big[\mathbf{f}_j+4\mathbf{f}_{j+1/2}+\mathbf{f}_{j+1}\big] = \mathbf{0},$$
with $\mathbf{f}_{j+1/2}=\mathbf{f}(\mathbf{x}_{j+1/2},\mathbf{u}_{j+1/2},t_{j+1/2})$ and the midpoint state given by Hermite interpolation. Third-order accurate. This is the default in Hargraves-Paris, OTIS, and many subsequent codes (Hargraves & Paris 1987; Betts 1998).

- **Fifth-order Gauss-Lobatto (Herman-Conway).** Three collocation points per segment (including the endpoints) and a quintic polynomial. Fifth-order accurate, particularly useful for fast dynamics (e.g. coupled translational-rotational 6DOF), at the cost of more variables per segment (Herman & Conway 1996).

In every scheme, the defect $\boldsymbol{\zeta}_j=\mathbf{0}$ on segment $j$ couples only to the $O(n_x+n_u)$ variables at its two endpoints, so the global Jacobian is block-tridiagonal and sparse — this is what makes direct collocation tractable for tens of thousands of variables.

## Subtypes

By whether midpoint states are NLP variables:

- **Hermite-Simpson separated (HSS).** Midpoint states are added as NLP variables; defects are equality constraints. Larger but sparser — usually preferred because NLP solvers exploit sparsity more than variable count.
- **Hermite-Simpson compressed (HSC).** Midpoint states are eliminated algebraically; defects are written directly in endpoint variables. Fewer variables, denser Jacobian.

## Practical implementation

- **Scaling.** State/control/time magnitudes in aerospace problems can span many orders of magnitude (cislunar distance vs. thrust acceleration). Without scaling the conditioning of the KKT system deteriorates badly. Normalization by nominal magnitude is standard (Betts 2010).
- **Coordinate choice.** Cartesian coordinates perform poorly in NLPs — state variables change sign periodically and span large ranges. Switching to [orbital elements](/en/glossary/dynamics/orbital-coordinate-frames/) or equinoctial variables usually improves robustness significantly (Conway 2010, Ch. 3).
- **Mesh refinement.** Begin with a coarse mesh (e.g. $N=20$), then refine based on per-segment error estimates — either by raising the order within a fixed segment (trapezoid → H-S → fifth-order G-L) or by inserting new nodes. Betts recommends at most five new nodes per original segment (Betts 2010).
- **Knots.** State-discontinuous boundaries (sphere-of-influence transitions, gravity-assist flybys, stage separations) are inserted as zero-width segments; the collocation constraint there is replaced by nonlinear equations relating the left and right states (Conway 2010).

## Comparison with pseudospectral and shooting

| Feature | Direct collocation | [Pseudospectral](/en/glossary/dynamics/pseudospectral-method/) | [Shooting](/en/glossary/dynamics/differential-correction/) |
| :--- | :--- | :--- | :--- |
| Polynomial | Piecewise low-order | Global high-order | No explicit parametrization |
| Nodes / phase | tens–hundreds | tens–hundreds | only a few |
| Jacobian sparsity | strong (block-tridiagonal) | weak (dense) | medium (block) |
| Spectral convergence | no | yes | — |
| Costate accuracy | coarse | accurate (covector mapping) | indirect native |
| Best for | general transfers, 6DOF | smooth solutions needing costates | BVPs with good initial guess |

## Applications

- **Low-thrust transfers.** Earth-Moon low-energy transfers and transfers between libration-point orbits most often use direct collocation, with shape-based methods or [invariant-manifold](/en/glossary/dynamics/invariant-manifold/) stitching as the initial guess (Vellutini & Avanzini 2014).
- **Multi-body and high-fidelity ephemeris.** Cartesian CR3BP is collocated directly; when transitioning to ephemeris models, equinoctial variables and knots at sphere-of-influence boundaries are used.
- **NLP solvers.** CasADi + Ipopt is the current academic default; production codes often use SNOPT.
- **Refining reinforcement-learning solutions.** The recent two-stage RL + collocation workflow uses RL to provide an initial guess and collocation to converge to a KKT-satisfying local optimum (Ul Haq et al. 2026).

## Related concepts

- [Direct Methods](/en/glossary/dynamics/direct-methods/)
- [Pseudospectral Method](/en/glossary/dynamics/pseudospectral-method/)
- [Shooting / Differential Correction](/en/glossary/dynamics/differential-correction/)
- [Costate Variable](/en/glossary/dynamics/co-state-variables/)
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)
- [Orbital Coordinate Frames](/en/glossary/dynamics/orbital-coordinate-frames/)
- [CR3BP](/en/glossary/dynamics/cr3bp/)

## References

- Hargraves, C. R., & Paris, S. W. (1987). Direct trajectory optimization using nonlinear programming and collocation. *J. Guidance, Control, and Dynamics*, 10(4), 338–342.
- Betts, J. T. (1998). Survey of numerical methods for trajectory optimization. *J. Guidance, Control, and Dynamics*, 21(2), 193–207.
- Betts, J. T. (2010). *Practical Methods for Optimal Control and Estimation Using Nonlinear Programming* (2nd ed.). SIAM.
- Herman, A. L., & Conway, B. A. (1996). Direct optimization using collocation based on high-order Gauss-Lobatto quadrature rules. *J. Guidance, Control, and Dynamics*, 19(3), 592–599.
- Conway, B. A. (Ed.). (2010). *Spacecraft Trajectory Optimization*. Cambridge University Press, Ch. 3.
- Enright, P. J., & Conway, B. A. (1992). Discrete approximations to optimal trajectories using direct transcription and nonlinear programming. *J. Guidance, Control, and Dynamics*, 15(4), 994–1002.
- Vellutini, D., & Avanzini, G. (2014). Shape-based design of low-thrust trajectories to cislunar Lagrangian point.
- Ul Haq, I. U., Dai, H., & Du, C. (2026). Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning. *Aerospace Science and Technology*.
