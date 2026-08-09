---
title: Trajectory Constraints
description: Constraints in trajectory optimization - terminal/boundary, path, state, and event/phase constraints - with their mathematical formulation, the jump conditions that state constraints induce in the costate, and constraint-handling techniques (relaxation, smoothing, multi-revolution Lambert boundaries). Illustrated with eclipse-avoidance path constraints, system-to-system transfer timing constraints from Howell & Kakoi (2006), and the Lambert-arc relaxation of Qiao & Yang (2024).
keywords: Trajectory Constraints, terminal constraint, boundary constraint, path constraint, state constraint, eclipse avoidance, timing constraint, constraint relaxation, optimal control, trajectory optimization
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Trajectory Constraints
  desc: Terminal, path, state, and event constraints in trajectory optimization, plus relaxation and smoothing techniques.
  image: /logo.png
og:
  title: Trajectory Constraints Explained | Cislunar Mission Design
  description: Constraints in trajectory optimization - terminal/boundary, path, state, and event/phase constraints - with their mathematical formulation, jump conditions, and constraint-handling techniques.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Trajectory Constraints Explained | Cislunar Mission Design
  description: Constraints in trajectory optimization - terminal/boundary, path, state, and event/phase constraints - with their mathematical formulation, jump conditions, and handling techniques.
  image: /logo.png
permalink: /en/glossary/dynamics/trajectory-constraints/
---

# Trajectory Constraints

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Trajectory constraints are the restrictions a spacecraft trajectory must satisfy beyond the equations of motion when posed as an optimal control problem (or NLP after transcription). They encode mission feasibility: where the vehicle must be at certain times, what it must avoid along the way, and which state or control bounds cannot be violated. A trajectory that satisfies dynamics plus all constraints is called *feasible*; the optimizer seeks the feasible trajectory that minimizes the performance index (Betts 1998; Conway 2010).

Constraints fall into four families by where and how they act:

- **Terminal / boundary constraints** - conditions at the initial and/or final time of a phase (rendezvous, insertion, interception).
- **Path constraints** - inequalities that must hold at *every* instant along a phase (eclipse avoidance, heating, thrust magnitude).
- **State constraints** - path constraints that involve only the state, not the control (perigee altitude, maximum distance); they induce costate jumps in indirect methods.
- **Event / phase constraints** - conditions at internal time instants (phase-angle matching at a transfer interface) or linking variables across phases.

Inter-arc continuity conditions at patch points are sometimes called *defect constraints* in direct transcription; they are covered in [Defect Constraint](/en/glossary/dynamics/direct-collocation/) and inter-arc matching conditions in [Multi-arc Optimal Control](/en/glossary/dynamics/multi-arc-optimal-control/).

## Mathematical Formulation

A single-phase optimal control problem with full constraint types has the form (Betts 1998):

$$\min_{\boldsymbol{u}(\cdot),\,t_f} J = \Phi[\boldsymbol{x}(t_0),\boldsymbol{x}(t_f),t_f] + \int_{t_0}^{t_f} L\,\mathrm{d}t,$$

subject to

$$\dot{\boldsymbol{x}} = \boldsymbol{f}(\boldsymbol{x},\boldsymbol{u},t),$$

$$\boldsymbol{\psi}[\boldsymbol{x}(t_0),\boldsymbol{x}(t_f),t_f] = \boldsymbol{0} \quad \text{(terminal/boundary)},$$

$$\boldsymbol{g}_l \leq \boldsymbol{g}[\boldsymbol{x}(t),\boldsymbol{u}(t),t] \leq \boldsymbol{g}_u \quad \text{(path)},$$

$$\boldsymbol{x}_l \leq \boldsymbol{x}(t) \leq \boldsymbol{x}_u \quad \text{(simple state bounds)}.$$

Equality is recovered by setting $g_l = g_u$ for some component. Betts (1998) also distinguishes *quadrature functions* $\int q\,\mathrm{d}t$, used to bound cumulative quantities (e.g., total eclipse duration).

In the indirect formulation, terminal constraints couple to the costate via multipliers $\boldsymbol{\nu}$: $\boldsymbol{\lambda}(t_f) = \partial\Phi/\partial\boldsymbol{x}(t_f) + (\partial\boldsymbol{\psi}/\partial\boldsymbol{x}(t_f))^{T}\boldsymbol{\nu}$. Together with the unknown $\boldsymbol{\lambda}(t_0)$ this yields a [TPBVP](/en/glossary/dynamics/tpbvp/).

## State Constraints and Costate Jumps

When a pure state inequality $S(\boldsymbol{x}) \leq 0$ becomes active on a boundary arc $[t_1,t_2]$, the standard first-order necessary conditions must be augmented with a multiplier $\eta(t) \geq 0$ supported on that arc. The costate then satisfies the [jump condition](/en/glossary/dynamics/indirect-methods/)

$$\boldsymbol{\lambda}(t_i^{+}) = \boldsymbol{\lambda}(t_i^{-}) - \eta(t_i)\,\nabla S[\boldsymbol{x}(t_i)],$$

at the entry/exit time $t_i$ of the boundary arc. For state constraints of order $p$ (i.e., $S^{(p)}$ depends explicitly on $\boldsymbol{u}$), jumps appear in $\boldsymbol{\lambda}^{(p-1)}$ rather than $\boldsymbol{\lambda}$ itself. This non-smoothness is the main reason indirect methods struggle with active state constraints; direct methods absorb it implicitly through the NLP active-set machinery.

## Typical Cislunar Instances

### Terminal: multi-revolution Lambert boundaries

Multi-revolution Lambert problems add a revolution number $N$ to the classical two-body transfer between fixed $\boldsymbol{r}_0$, $\boldsymbol{r}_f$ over flight time $T$. Duan et al. (2025) show that *orbit-dynamical boundary constraints* reshape the admissible solution manifold across $N$: as $N$ grows, a growing fraction of sampled $(\boldsymbol{r}_0,\boldsymbol{r}_f,T)$ triples have no feasible solution at that revolution, so the per-revolution share of admissible solutions decreases with $N$. The phenomenon is geometric - at fixed transfer angle, additional revolutions force the semi-major axis into a narrow band - and must be accounted for when initializing a [shooting method](/en/glossary/dynamics/differential-correction/) or building surrogate models for uncertain Lambert inputs.

### Path: eclipse avoidance

For solar-electric missions, thrust is unavailable (or degraded) inside the umbral/penumbral cone of an occulting body. Sowell & Taheri (2024) encode this as a smooth throttle factor on the propulsion acceleration,

$$\boldsymbol{\Delta}_{\text{prop}} = \frac{T_{\max}}{m}\,\delta\,\bar{\delta}_e\,\hat{\boldsymbol{\alpha}}, \quad \bar{\delta}_e = \tfrac{1}{2}\left[1 + \tanh(S_e/\rho_e)\right],$$

where $S_e = a_D - a_{RS} - a_{RB}$ is the eclipse switching function built from apparent radii and separation; $\rho_e$ controls smoothing. Embedding $\bar{\delta}_e \in [0,1]$ directly into the dynamics avoids a multiphase transcription with explicit eclipse entry/exit events, at the cost of one extra parameter ($\rho_e$) that trades smoothing against event fidelity. The same construction generalizes to limiting eclipse *duration* by adding a quadrature penalty $\int (1 - \bar{\delta}_e)\,\mathrm{d}t$.

### Event: system-to-system transfer timing

Transfers between the Sun-Earth and Earth-Moon CR3BP systems are located geometrically by intersections of unstable/stable manifold tubes on a Poincare section. In the ephemeris model those intersections occur only at particular lunar phase orientations. Howell & Kakoi (2006) parameterize the relative orientation of the Earth-Moon and Sun-Earth rotating frames by a 3-1-3 Euler sequence $(\alpha, i, \beta)$ with $i \approx 5^{\circ}$ fixed, plus a Poincare-section plane angle $\psi$. The timing constraint reduces to selecting $(\alpha, \beta, \psi)$ - linearly or quadratically fitted over the transfer epoch - so that the geometric intersection survives in the real ephemeris. Co-rotating $\alpha$ and $\beta$ (increase $\alpha$, decrease $\beta$ by the same amount) preserves the intersection location while rephasing the epoch, an inexpensive way to scan the lunar month for low-cost windows.

## Handling Techniques

- **Direct transcription** turns each constraint into NLP rows: defect equations per collocation node (see [Defect Constraint](/en/glossary/dynamics/direct-collocation/)), plus path constraint evaluations at nodes and centers. Sparsity-exploiting SQP/IP solvers (SNOPT, IPOPT) handle $10^4$-$10^6$ constraints routinely.

- **Soft constraints / relaxation** replace a hard equality $\boldsymbol{X}_P = \boldsymbol{X}_Q$ (e.g., a 4D Poincare-section intersection between a perturbed manifold and a target orbit) by a closest-point search $\min \|\boldsymbol{X}_P - \boldsymbol{X}_Q\|$ followed by a Lambert arc that bridges the residual. Qiao & Yang (2024) apply this to Earth-Moon $L_1$ Halo-to-GEO transfers: the strict section-intersection condition is *over-constrained* in 4D and blocks optimization; relaxing it to a Lambert $\Delta V$ term in the objective turns the problem into a smoothly parametrized search. The relaxation preserves feasibility (every Lambert bridge is a valid transfer) at the price of letting $\Delta V$ absorb the geometric mismatch.

- **Smoothing (hyperbolic tangent / CSC)** regularizes piecewise-defined constraints (eclipse on/off, bang-bang control) so indirect integrators and NLP Jacobians remain smooth; see also the composite smooth control used alongside PMP.

- **Augmented Lagrangian / penalty methods** move active inequality constraints into the objective; see [Augmented Lagrangian Method](/en/glossary/dynamics/augmented-lagrangian-method/).

## Practical Notes

- Terminal constraints dominate the [shooting method](/en/glossary/dynamics/differential-correction/) Jacobian structure; tighter terminal boxes shrink the convergence basin.
- Path constraints that change activity frequently (e.g., eclipses on a low-thrust spiral) are the main driver of mesh refinement in pseudospectral methods.
- Phase-linking constraints in multi-body regimes are the bridge to [Multi-arc Optimal Control](/en/glossary/dynamics/multi-arc-optimal-control/) theory.

## Related Concepts

- [Two-Point Boundary Value Problem (TPBVP)](/en/glossary/dynamics/tpbvp/)
- [Differential Correction & Shooting Method](/en/glossary/dynamics/differential-correction/)
- [Multi-arc Optimal Control](/en/glossary/dynamics/multi-arc-optimal-control/)
- [Defect Constraint](/en/glossary/dynamics/direct-collocation/)
- [Jump Condition](/en/glossary/dynamics/indirect-methods/)
- [Direct Collocation](/en/glossary/dynamics/direct-collocation/)
- [Augmented Lagrangian Method](/en/glossary/dynamics/augmented-lagrangian-method/)
- [Poincare Section](/en/glossary/dynamics/poincare-section/)
- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)
- [Low-Energy Transfer](/en/glossary/dynamics/low-energy-transfer/)
- [Three-Body Lambert Problem](/en/glossary/dynamics/three-body-lambert-problem/)
- [Station-Keeping](/en/glossary/dynamics/station-keeping/)

## References

- Betts, J. T. (1998). Survey of numerical methods for trajectory optimization. *Journal of Guidance, Control, and Dynamics*, 21(2), 193-207.
- Conway, B. A. (Ed.). (2010). *Spacecraft Trajectory Optimization*. Cambridge University Press.
- Howell, K. C., & Kakoi, M. (2006). Transfers between the Earth-Moon and Sun-Earth systems using manifolds and transit orbits. *Acta Astronautica*, 59(1-5), 367-380.
- Sowell, S., & Taheri, E. (2024). Eclipse-conscious low-thrust trajectory optimization using pseudospectral methods and control smoothing techniques. *Journal of Spacecraft and Rockets*. doi:10.2514/1.A35789
- Qiao, C., & Yang, L. (2024). Design and optimization of Earth-Moon L1 low-energy transfer orbit. *Systems Engineering and Electronics*, 46(10). (in Chinese)
- Duan, Y., Zhang, Y., & Liu, Y. (2025). Adaptive polynomial chaos expansion method for uncertain multiple-revolution Lambert problem. *Celestial Mechanics and Dynamical Astronomy*.
- You, S., & Dai, R. (2022). Trajectory optimization with state constraints. *Journal of Guidance, Control, and Dynamics*. doi:10.2514/1.G006815
