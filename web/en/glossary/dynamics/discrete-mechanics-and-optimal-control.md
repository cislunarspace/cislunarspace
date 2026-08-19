---
title: Discrete Mechanics and Optimal Control (DMOC)
description: "A structure-preserving direct method: discretize the Lagrange-d'Alembert principle (not the ODE) and use the forced discrete Euler-Lagrange equations as constraints. The discrete-action sum is the cost. Symplectic and momentum-preserving; for long-duration cislunar low-energy transfers, DMOC yields good energy behavior even at large step sizes."
keywords: Discrete Mechanics and Optimal Control, DMOC, Variational Integrator, Symplectic, Discrete Euler-Lagrange, Lagrange-d'Alembert, Junge-Marsden-Ober-Blöbaum
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Discrete Mechanics and Optimal Control (DMOC)
  desc: Discretize the variational principle, not the ODE — symplectic, momentum-preserving trajectory optimization.
  image: /logo.png
og:
  title: DMOC Explained | Structure-Preserving Optimal Control
  description: A structure-preserving direct method based on Lagrange-d'Alembert discretization. Forced discrete Euler-Lagrange equations as constraints; symplectic and momentum-preserving. Effective for low-energy Earth-Moon transfers when combined with invariant-manifold initial guesses.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: DMOC Explained | Structure-Preserving Optimal Control
  description: A structure-preserving direct method based on Lagrange-d'Alembert discretization. Forced discrete Euler-Lagrange equations as constraints; symplectic and momentum-preserving. Effective for low-energy Earth-Moon transfers when combined with invariant-manifold initial guesses.
  image: /logo.png
permalink: /en/glossary/dynamics/discrete-mechanics-and-optimal-control/
---

# Discrete Mechanics and Optimal Control (DMOC)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Discrete mechanics and optimal control (DMOC) is the structure-preserving branch of [direct methods](/en/glossary/dynamics/direct-methods/), introduced by Junge, Marsden, and Ober-Blöbaum (Junge et al. 2005; Ober-Blöbaum et al. 2011). The key distinction: **DMOC discretizes the variational principle, not the ODE.** The system Lagrangian $L(\mathbf{q},\dot{\mathbf{q}})$ is replaced by a discrete Lagrangian $L_d(\mathbf{q}_k,\mathbf{q}_{k+1},h)$; varying the discrete action yields the forced discrete Euler-Lagrange equations, which serve as NLP constraints; the control cost is the objective. The resulting finite-dimensional constrained optimization is solved by SNOPT or another SQP solver (Ober-Blöbaum et al. 2011; Moore 2011).

DMOC resembles [direct collocation](/en/glossary/dynamics/direct-collocation/) in form (discretize-then-optimize), but the objects discretized differ: collocation discretizes $\dot{\mathbf{x}}=\mathbf{f}$, DMOC discretizes Hamilton's principle $\delta\int L\,\mathrm{d}t = 0$. The result: DMOC solutions are **symplectic and momentum-preserving**, with far better long-time energy behavior than non-symplectic schemes (Marsden & West 2001).

## Mathematical form

Consider a mechanical system with configuration $\mathbf{q}\in Q$, Lagrangian $L:TQ\to\mathbb{R}$, and external force $\mathbf{f}_{\text{ext}}$. The continuous Lagrange-d'Alembert principle reads
$$\delta\int_0^T L(\mathbf{q},\dot{\mathbf{q}})\,\mathrm{d}t + \int_0^T \mathbf{f}_{\text{ext}}\cdot\delta\mathbf{q}\,\mathrm{d}t = 0.$$

Discretization: split $[0,T]$ into $N$ steps of size $h$, with configuration sequence $\{\mathbf{q}_k\}_{k=0}^N$. Approximate the discrete Lagrangian by the midpoint rule
$$L_d(\mathbf{q}_k,\mathbf{q}_{k+1},h)\approx h\,L\bigg(\frac{\mathbf{q}_k+\mathbf{q}_{k+1}}{2},\frac{\mathbf{q}_{k+1}-\mathbf{q}_k}{h}\bigg).$$

Left and right discrete forces $\mathbf{F}_k^-, \mathbf{F}_k^+$ are approximated similarly. Varying the discrete action $S_d=\sum_k L_d$ yields the *forced discrete Euler-Lagrange equations* (DEL):
$$D_2 L_d(\mathbf{q}_{k-1},\mathbf{q}_k) + D_1 L_d(\mathbf{q}_k,\mathbf{q}_{k+1}) + \mathbf{F}_k^- + \mathbf{F}_k^+ = \mathbf{0},\quad k=1,\dots,N-1.$$

DMOC treats the control force as $\mathbf{f}_{\text{ext}} = \mathbf{u}(t)$, discretized as node values $\{\mathbf{u}_k\}$; DEL equations become NLP equality constraints, initial/terminal conditions are boundary constraints, control energy $\sum_k \|\mathbf{u}_k\|^2$ is the objective, solved by SNOPT or another SQP solver (Ober-Blöbaum et al. 2011; Moore 2011, Ch. 2). Midpoint-rule DMOC is second-order accurate.

## Structure-preserving properties

DMOC solutions inherit the key properties of variational integrators:

- **Symplectic.** The symplectic 2-form on phase space is preserved exactly under iteration.
- **Momentum-preserving.** The Noether momentum map associated with any system symmetry is preserved exactly, independent of step size.
- **Good energy behavior.** Symplecticity guarantees no long-time energy drift or dissipation — energy oscillates within a small bound.

These three properties are the core advantages of DMOC over general [direct collocation](/en/glossary/dynamics/direct-collocation/), especially for CR3BP and low-energy Earth-Moon transfers that need long-time integration and are sensitive to energy preservation (Marsden & West 2001; Moore 2011).

## Practical implementation

- **Variable step size.** Standard DMOC assumes a uniform $h$. In CR3BP, dynamics near perilune require very small steps while apoapsis tolerates coarse steps. Moore (2011) introduces *time-adaptive DMOC*: introduce $t_k$ as variables with constraints $h_k=t_{k+1}-t_k$ on the time-adapted Lagrangian, then apply the time-adapted variational principle. The cost is that time-adaptive DMOC becomes an indirect method (extra costate variables).
- **Initial guesses.** DMOC is a local method and needs a good initial guess. Moore (2011) uses [invariant-manifold](/en/glossary/dynamics/invariant-manifold/) stitching (Sun-Earth + Earth-Moon manifolds intersecting on a Poincaré section) as the initial guess; DMOC optimization can then eliminate the mid-course $\Delta V$ required by the manifold solution, yielding a fully zero-fuel low-energy channel.
- **Comparison with collocation.**

| Feature | DMOC | Direct collocation |
| :--- | :--- | :--- |
| Discretization target | Variational principle | ODE |
| Symplectic | yes | no |
| Momentum-preserving | yes | no |
| Large-step behavior | reasonable | error accumulation |
| Generality | Lagrangian systems only | arbitrary ODE |
| Tooling maturity | mostly academic | industrial (OTIS, SOCS, …) |

## Applications

- **Low-energy Earth-Moon transfers.** DMOC + invariant manifolds is a classic pairing: manifolds supply the dynamics-based skeleton as initial guess; DMOC refines in the 4-body model and drives the manifold-stitching mid-course $\Delta V$ to zero (Moore 2011, Ch. 3; Moore et al. 2012).
- **Formation flight.** CubeSat formation reconfiguration benefits from DMOC's momentum preservation — formation geometry remains stable over long simulations.
- **When not to use.** Systems with strong dissipation (atmospheric entry), non-conservative constraints (heat-flux limits), or no Lagrangian in closed form lose DMOC's advantages — direct collocation is then more appropriate.

## Related concepts

- [Direct Methods](/en/glossary/dynamics/direct-methods/)
- [Direct Collocation](/en/glossary/dynamics/direct-collocation/)
- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)
- [Symplectic Geometry](/en/glossary/dynamics/hamiltonian-normal-form/)
- [CR3BP](/en/glossary/dynamics/cr3bp/)
- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

## References

- Junge, O., Marsden, J. E., & Ober-Blöbaum, S. (2005). Discrete mechanics and optimal control. *IFAC Proceedings Volumes*, 38(1), 538–543.
- Ober-Blöbaum, S., Junge, O., & Marsden, J. E. (2011). Discrete mechanics and optimal control: an analysis. *ESAIM: Control, Optimisation and Calculus of Variations*, 17(2), 322–352.
- Marsden, J. E., & West, M. (2001). Discrete mechanics and variational integrators. *Acta Numerica*, 10, 357–514.
- Moore, B. E. (2011). Discrete mechanics and optimal control for space trajectory design. PhD thesis, Purdue University.
- Moore, B. E., Ober-Blöbaum, S., & Marsden, J. E. (2012). Trajectory design combining invariant manifolds with discrete mechanics and optimal control. *Journal of Guidance, Control, and Dynamics*, 35(5), 1507–1525.
- Leyendecker, S., Ober-Blöbaum, S., Marsden, J. E., & Ortiz, M. (2010). Discrete mechanics and optimal control for constrained systems. *Optimal Control Applications and Methods*, 31(6), 505–528.
