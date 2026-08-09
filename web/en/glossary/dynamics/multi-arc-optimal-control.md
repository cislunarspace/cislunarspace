---
title: Multi-arc Optimal Control
description: Optimal-control framework that splits a trajectory into multiple arcs with different state representations and enforces corner (matching) conditions at arc interfaces. Covers the Weierstrass-Erdmann corner conditions, interface matching functions, the implicit costate transformation of Pozzi et al. (2025) that reduces the multi-arc TPBVP to single-arc size, and applications to cislunar low-thrust transfers connecting Gateway to Earth and Moon.
keywords: Multi-arc Optimal Control, Single-arc Optimal Control, corner condition, Weierstrass-Erdmann, patch point, multi-arc trajectory optimization, implicit costate transformation, Gateway, low-thrust transfer
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Multi-arc Optimal Control
  desc: Splitting a trajectory into arcs with different state representations; corner conditions link them at interfaces.
  image: /logo.png
og:
  title: Multi-arc Optimal Control Explained | Cislunar Low-Thrust Transfer
  description: Optimal-control framework that splits a trajectory into multiple arcs with different state representations and enforces corner conditions at arc interfaces. Covers the Weierstrass-Erdmann conditions, matching functions, the implicit costate transformation, and Gateway transfer applications.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Multi-arc Optimal Control Explained | Cislunar Low-Thrust Transfer
  description: Optimal-control framework that splits a trajectory into multiple arcs and enforces corner conditions at interfaces.
  image: /logo.png
permalink: /en/glossary/dynamics/multi-arc-optimal-control/
---

# Multi-arc Optimal Control

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Multi-arc optimal control** is the extension of the continuous-time optimal control problem to a trajectory composed of $N$ arcs, where each arc $j$ can use a different state representation and the arcs are joined at $N-1$ interfaces by matching (corner) conditions. The single-arc counterpart treats the transfer as one continuous IVP-to-TPBVP with one state representation throughout (Pozzi et al. 2025; Betts 1998).

Splitting is forced whenever a single state representation cannot describe the entire path efficiently: a cislunar low-thrust transfer from the Gateway NRHO to a Low Earth Orbit crosses the Earth-Moon boundary, where modified equinoctial elements (MEE) about the Moon degenerate near $e = 1$ and terrestrial MEE about Earth are ill-conditioned near the Lagrange points. The multi-arc formulation sidesteps the singularity by switching coordinates at the interface, at the cost of additional junction conditions.

## Mathematical Structure

For each arc $j \in \{1,\dots,N\}$, the state equations

$$\dot{\boldsymbol{x}}^{(j)} = \boldsymbol{f}^{(j)}\!\left(\boldsymbol{x}^{(j)}, \boldsymbol{u}^{(j)}, \boldsymbol{p}, \tau\right),$$

share the auxiliary independent variable $\tau \in [0, t_f - t_0]$ (forward or backward), but each $\boldsymbol{x}^{(j)}$ can be a different coordinate set. At each interface time $\tau_j$ between arc $j$ and arc $j+1$, three conditions are imposed (Pozzi et al. 2025):

- a **scalar transition function** $\zeta_j(\boldsymbol{x}^{(j+1)}_{\text{ini}}, \boldsymbol{x}^{(j)}_{\text{fin}}, \tau_j) = 0$ that flags when the switch happens (e.g., geocentric distance crosses a threshold);
- a **vector matching function** $\boldsymbol{\chi}_j$ that maps the outgoing arc's terminal state to the incoming arc's initial state - generally an implicit nonlinear function, not a bare equality;
- a **time-consistency equality** tying the per-arc durations to the overall epoch parameters $\boldsymbol{p} = [t_0, t_f]^T$.

Together with the dynamics, the matching conditions form an augmented TPBVP. Its dimension is $\sum_j n_j$ state variables plus interface multipliers.

## Corner Conditions and Costate Matching

Variational necessary conditions at a smooth interior corner $\tau_j$ reduce to the [Weierstrass-Erdmann conditions](/en/glossary/dynamics/weierstrass-erdmann-corner-conditions/):

$$\boldsymbol{\lambda}^{(j)}(\tau_j^{-}) = \boldsymbol{\lambda}^{(j+1)}(\tau_j^{+}), \qquad H^{(j)}(\tau_j^{-}) = H^{(j+1)}(\tau_j^{+}),$$

i.e., the costate (transformed to a common representation) and the Hamiltonian are continuous across the interface. When the matching function $\boldsymbol{\chi}_j$ is implicit, the costate continuity generalizes to $\boldsymbol{\lambda}^{(j)} = (\partial \boldsymbol{\chi}_j / \partial \boldsymbol{x}^{(j)}_{\text{fin}})^{-T} (\partial \boldsymbol{\chi}_j / \partial \boldsymbol{x}^{(j+1)}_{\text{ini}})^{T} \boldsymbol{\lambda}^{(j+1)}$ plus interface multipliers.

## Implicit Costate Transformation

When the matching functions define a bijective map between adjacent arcs' states, Pozzi et al. (2025) show the corner conditions can be solved *sequentially* - the costate on one arc is recovered from the costate on the next by a closed-form transformation (the **implicit costate transformation**). The multi-arc TPBVP then has the *same number of unknowns* as the single-arc problem: the initial costate $\boldsymbol{\lambda}^{(1)}(t_0)$, the final time $t_f$, and any arc parameters. This avoids the exponential growth of unknowns that a naive $N$-arc shooting implementation would suffer, and is the main reason the indirect heuristic method remains tractable for Earth-Gateway-Moon transfers.

## Relation to Patch Points and Defect Constraints

Multi-arc optimal control is the *theoretical* side of trajectory splitting; the algorithmic side is [multiple shooting](/en/glossary/dynamics/differential-correction/) with [patch points](/en/glossary/dynamics/patch-point/):

- **Patch points** are the discrete nodes at which inter-arc continuity is enforced by Newton-type iteration; they belong to the *numerical method*.
- **Corner conditions** are the necessary conditions for optimality at those nodes when the trajectory is treated as an extremal of a multi-arc variational problem; they belong to *optimal control theory*.
- In direct transcription, continuity at interior nodes appears as [defect constraints](/en/glossary/dynamics/direct-collocation/) in the NLP, with no explicit costate.

In short: the same physical trajectory can be split either way, but multi-arc OC carries analytical structure (costate matching, Hamiltonian continuity) that pure multiple shooting ignores.

## Comparison: Single-arc vs Multi-arc

| Aspect | Single-arc OC | Multi-arc OC |
| :--- | :--- | :--- |
| State representation | one set throughout | one set per arc, switch at interfaces |
| Interface conditions | none | $\zeta_j, \boldsymbol{\chi}_j, \tau_j$ matching |
| Costate treatment | standard TPBVP | corner conditions; can be sequentialized |
| Singularity handling | ill-conditioned near $e = 1$, $h = k = 0$ | each arc uses its non-singular coordinates |
| Typical use | two-body transfers, single-resonance arcs | multi-body low-thrust, Earth-Moon crossings |

## Application: Cislunar Low-Thrust Transfers

Pozzi et al. (2025) formulate two-way minimum-time low-thrust transfers between Gateway (NRHO) and both LEO and a Low Lunar Orbit in a full ephemeris model with Sun/Earth/Moon gravity. The Gateway-to-LLO leg stays in a perturbed two-body framework and is solved as a single-arc OC; the Gateway-to-LEO leg, dominated by two attracting bodies, is cast as a five-arc multi-arc problem - three of the arcs have zero length (pure coordinate changes), and the remaining two use terrestrial and lunar MEE respectively, joined at the Earth-Moon boundary. Combined with an indirect heuristic algorithm (particle swarm + costate integration), the multi-arc framework yields complete two-way transfer solutions that respect high-fidelity ephemeris dynamics.

## Practical Notes

- The number of arcs is dictated by *where a single state representation fails*, not by accuracy considerations alone; adding arcs for their own sake multiplies interface constraints without benefit.
- Sequential solvability via the implicit costate transformation is special to bijective matching maps; non-bijective interfaces (e.g., collision/impact) require the full augmented TPBVP.
- For direct-method implementations, multi-arc structure maps naturally onto multiphase pseudospectral collocation, with phase-linkage constraints replacing corner conditions.

## Related Concepts

- [Trajectory Constraints](/en/glossary/dynamics/trajectory-constraints/)
- [Two-Point Boundary Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)
- [Differential Correction & Shooting Method](/en/glossary/dynamics/differential-correction/)
- [Patch Point](/en/glossary/dynamics/patch-point/)
- [Weierstrass-Erdmann Corner Conditions](/en/glossary/dynamics/weierstrass-erdmann-corner-conditions/)
- [Defect Constraint](/en/glossary/dynamics/direct-collocation/)
- [Multi-arc Trajectory Optimization](/en/glossary/dynamics/multi-arc-trajectory-optimization/)
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Direct Collocation](/en/glossary/dynamics/direct-collocation/)
- [Indirect Method](/en/glossary/dynamics/indirect-methods/)

## References

- Pozzi, E., Morselli, A., Masdemont, J., & Gomez, G. (2025). Optimal low-thrust orbit transfers connecting Gateway with Earth and Moon. *Celestial Mechanics and Dynamical Astronomy*.
- Pozzi, E., Morselli, A., Masdemont, J., & Gomez, G. (2024). Optimization, guidance, and control of low-thrust transfers from the lunar Gateway to low lunar orbit.
- Beolchi, A. C., Morselli, A., & Topputo, F. (2023). A multi-arc formulation for low-thrust orbit transfers in a high-fidelity multibody ephemeris model.
- Betts, J. T. (1998). Survey of numerical methods for trajectory optimization. *Journal of Guidance, Control, and Dynamics*, 21(2), 193-207.
- Bryson, A. E., & Ho, Y.-C. (1975). *Applied Optimal Control*. (Weierstrass-Erdmann corner conditions.)
- Conway, B. A. (Ed.). (2010). *Spacecraft Trajectory Optimization*. Cambridge University Press.
- Howell, K. C., & Pernicka, H. J. (1987). Numerical determination of Lissajous trajectories in the restricted three-body problem. *Celestial Mechanics*, 41(1-4), 107-124. (multiple shooting at patch points)
