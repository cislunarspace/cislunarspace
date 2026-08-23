---
title: Indirect Methods
description: "Unified framework of indirect methods for trajectory optimization: deriving the state-costate Hamilton canonical equations and transversality conditions from Pontryagin's Minimum Principle, formulating the two-point boundary-value problem, and solving it via shooting, collocation, heuristic, or hybrid strategies. Covers costate normalization, the free-variable/constraint method, switching-point detection, jump conditions, singular arcs, and the indirect multi-stage formulation, with a comparison to direct methods."
keywords: indirect methods, Pontryagin minimum principle, two-point boundary value problem, shooting method, indirect collocation, indirect heuristic, hybrid direct-indirect, multi-stage formulation, IMF, free-variable constraint method, costate normalization, switching detection, jump condition
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Indirect Methods
  desc: From PMP to TPBVP to shooting — the complete framework and variants of indirect trajectory optimization.
  image: /logo.png
og:
  title: Indirect Methods Explained | Trajectory Optimization
  description: "Unified framework of indirect methods for trajectory optimization: Pontryagin-derived state-costate Hamilton canonical equations, TPBVP, and shooting/collocation/heuristic/hybrid solvers. Covers costate normalization, free-variable constraint method, switching detection, jump conditions, and the indirect multi-stage formulation."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Indirect Methods Explained | Trajectory Optimization
  description: "Unified framework of indirect methods for trajectory optimization: Pontryagin-derived state-costate Hamilton canonical equations, TPBVP, and shooting/collocation/heuristic/hybrid solvers."
  image: /logo.png
permalink: /en/glossary/dynamics/indirect-methods/
---

# Indirect Methods

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Indirect methods** solve trajectory optimization problems by first applying [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/) to derive a set of necessary conditions (the state-costate Hamilton canonical equations plus transversality conditions) that together form a **two-point boundary-value problem** (TPBVP), which is then solved numerically by shooting, collocation, or other root-finding techniques (Betts 1998; Conway 2010; Bryson & Ho 1975).

In contrast to **direct methods** (which discretize the state-control history directly into NLP parameters), indirect methods first resolve the optimality conditions analytically and only then seek a numerical solution. Their strengths are strict satisfaction of first-order necessary conditions, low parameter dimension, and high accuracy (routinely to machine precision). Their weaknesses are a narrow convergence basin, extreme sensitivity to the initial costate guess, and Jacobian difficulties at discontinuous (Bang-bang) controls.

## Mathematical framework

### Optimal control problem

General Bolza form:

$$
\min_{u}\;J=\Phi(\mathbf{x}(t_f),t_f)+\int_{t_0}^{t_f}L(\mathbf{x},\mathbf{u},t)\,dt,
$$

subject to $\dot{\mathbf{x}}=\mathbf{f}(\mathbf{x},\mathbf{u},t)$, endpoint constraints, and path constraints.

### Hamilton canonical equations

Introduce the costate $\boldsymbol{\lambda}(t)$ and Hamiltonian $H=L+\boldsymbol{\lambda}^{\mathrm{T}}\mathbf{f}$. The Minimum Principle gives:

$$
\dot{\mathbf{x}}=\frac{\partial H}{\partial\boldsymbol{\lambda}},\qquad
\dot{\boldsymbol{\lambda}}=-\frac{\partial H}{\partial\mathbf{x}},\qquad
\mathbf{u}^{*}=\arg\min_{\mathbf{u}\in\mathcal{U}}H.
$$

The first equation is the state equation, the second the [costate equation](/en/glossary/dynamics/co-state-variables/), the third the extremal condition (which, after analytical elimination, expresses control as a function of state and costate). Transversality at the terminal time reads

$$
\boldsymbol{\lambda}(t_f)=\frac{\partial\Phi}{\partial\mathbf{x}}\bigg|_{t_f}+\boldsymbol{\nu}^{\mathrm{T}}\frac{\partial\boldsymbol{\psi}}{\partial\mathbf{x}}\bigg|_{t_f},
$$

with terminal constraint $\boldsymbol{\psi}(\mathbf{x}(t_f),t_f)=\mathbf{0}$ and multipliers $\boldsymbol{\nu}$. If the final time is free, $H(t_f)+\partial\Phi/\partial t+\boldsymbol{\nu}^{\mathrm{T}}\partial\boldsymbol{\psi}/\partial t=0$.

### TPBVP and the shooting function

Stacking state and costate into $\mathbf{y}=[\mathbf{x};\boldsymbol{\lambda}]$ with $\dot{\mathbf{y}}=\mathbf{F}(\mathbf{y})$, the initial state $\mathbf{x}(t_0)$ is known and the initial costate $\boldsymbol{\lambda}(t_0)=\mathbf{z}$ is unknown. Numerically integrating to $t_f$ yields a residual $\mathbf{s}(\mathbf{z})=\boldsymbol{\psi}(\mathbf{x}(t_f;\mathbf{z}))$. The **shooting function** $\mathbf{s}(\mathbf{z})=\mathbf{0}$ is the nonlinear system to solve.

## Numerical strategies

### Single vs. multiple shooting

- **Single shooting**: integrate the whole trajectory as one IVP, apply Newton's method to $\mathbf{z}$. Simple but ill-conditioned for long transfers.
- **Multiple shooting**: divide $[t_0,t_f]$ into segments, integrate each independently, and stitch with continuity match conditions. The free-variable/constraint method is the engineering form of multiple shooting: all nodal states, costates, and parameters are stacked into a free-variable vector $\mathbf{V}$, all continuity and endpoint conditions into a constraint vector $\mathbf{C}(\mathbf{V})=\mathbf{0}$, solved by Newton iteration (Spreen 2021; [Differential Correction](/en/glossary/dynamics/differential-correction/)).

### Indirect collocation

**Indirect collocation** discretizes both state and costate equations (e.g., Dickmanns-Wells Hermite-Simpson) and solves the resulting algebraic system, eliminating the forward-integration ill-conditioning of shooting. The trade-off is much larger parameter dimension.

Note: Hargraves and Paris (1987) observed that eliminating the costate and collocating state-control directly (i.e., **direct collocation**) is more robust; the starting point of the direct-method era. Modern indirect collocation is mostly used when strict PMP satisfaction is mandatory (e.g., inside differentiable NLP solvers).

### Indirect heuristic methods

**Indirect heuristic methods** combine PMP with metaheuristics: genetic algorithms, particle swarm, or differential evolution search the initial costate $\mathbf{z}$ (and possibly discrete variables like impulse count or staging structure); each candidate evaluation applies the PMP control law analytically and integrates the trajectory (Pontani & Conway 2009; Conway 2010). This bypasses Newton's sensitivity at the cost of many evaluations and lower precision than pure shooting. Useful for problems with discrete decisions or many local optima.

### Hybrid direct-indirect methods

**Hybrid direct-indirect** strategies use indirect optimality conditions to reduce the control parameter dimension, then a direct-method NLP solver for the remaining parameters (Kluever & Pierson 1997). For example, the per-arc thrust direction is given in closed form by $\boldsymbol{\alpha}^{*}=\mathbf{p}/\|\mathbf{p}\|$, and only impulse times, throttle switches, and arc-boundary times are NLP variables. This combines indirect control reduction with direct costate insensitivity, a common engineering compromise.

### Indirect Multi-Stage Formulation (IMF)

The **Indirect Multi-Stage Formulation** (IMF) partitions the trajectory into stages, each with its own state-costate equations and control law, stitched by equality constraints on position, velocity, mass, and costate continuity (Bowerfind & Taheri 2024). Especially suited for missions with mode switches (thrust-aerodynamic-coast combinations, multi-impulse cruise legs). The stage count may be fixed or itself an integer variable.

## Key numerical tools

### Costate normalization

Because the Hamiltonian system is invariant under a positive scaling of $\boldsymbol{\lambda}$ ($H$ and $\boldsymbol{\lambda}$ scaled by the same constant still satisfy the NC), one can fix $\|\boldsymbol{\lambda}(t_0)\|=1$, restricting the search from $\mathbb{R}^n$ to the unit sphere $S^{n-1}$, one dimension fewer, with improved conditioning (Taheri et al. 2016; [Co-state Variables](/en/glossary/dynamics/co-state-variables/)).

### Switching-point detection

In Bang-bang control, switching instants are roots of $\rho(t)=0$ that must be located precisely to avoid Jacobian discontinuities. The **Newton-bisection hybrid** uses Newton first (typically 4–5 iterations to machine precision), falling back to bisection if Newton fails or leaves the bracket (Zhang et al. 2015; Martinon & Gergaud 2010). Standard component of indirect methods for [Bang-bang control](/en/glossary/dynamics/bang-bang-control/).

### Jump conditions

With **state constraints** (e.g., maximum load factor, minimum perilune altitude), costate and Hamiltonian can jump at the entry/exit of active intervals. The jump magnitude is set by the constraint gradient and a non-negative multiplier $\eta$:

$$
\boldsymbol{\lambda}(t_c^{+})=\boldsymbol{\lambda}(t_c^{-})-\eta\,\nabla_{\mathbf{x}}g(\mathbf{x}(t_c),t_c).
$$

When the constraint is time-independent, $H$ stays continuous across the jump. The **switching surface** is the codimension-one submanifold $\rho=0$ in costate-state space, where the optimal trajectory may switch control or enter a singular arc (Hartl et al. 1995; Caillau & Daoud 2012).

### Smoothing and homotopy

To bypass Bang-bang discontinuity and costate sensitivity, the mainstream approach is the **homotopy method** that gradually deforms a smooth easy sister problem (e.g., energy-optimal) into the target (e.g., fuel-optimal Bang-off-Bang). Cost-function homotopy, thrust-amplitude homotopy, and sigmoid smoothing are standardized in the literature (Bertrand & Epenoy 2002; Taheri et al. 2016; Zhang et al. 2025). See [Homotopy Method](/en/glossary/dynamics/homotopy-method/).

### Inner-loop / outer-loop structure

Parametric optimal control (e.g., Theory-of-Functional-Connections shape approximations) often uses an **inner-loop outer-loop structure**: the inner loop minimizes residuals for state and cost vectors; the outer loop optimizes switching times and final time (Johnston et al. 2020). Conceptually akin to multiple shooting: separating fast and slow variables into different solvers.

## Comparison with direct methods

| Axis | Indirect | Direct |
| :--- | :--- | :--- |
| Decision variables | Initial costate $\boldsymbol{\lambda}(t_0)$, parameters | Discrete state-control history |
| Necessary conditions | Strictly satisfies PMP | Numerical approximation, post-hoc check |
| Initial guess | Costate guess hard, narrow basin | Any feasible guess, wide basin |
| Accuracy | High (routinely $10^{-12}$) | Grid-limited |
| Control structure | Bang-bang emerges naturally | Impulse count needs post-hoc check |
| Parameter dimension | Small (tens) | Large (hundreds to thousands) |

A common engineering practice is to obtain a coarse solution via direct or heuristic methods, then refine it to machine precision with an indirect method, using primer vector and switching function for post-hoc optimality verification (Conway 2010; Betts 1998).

## Application notes

- **Cislunar low-thrust transfers**: $L_1$/$L_2$ Halo-to-Halo and LEO-to-NRHO fuel-optimal transfers are the main theater for indirect + homotopy methods.
- **Multi-impulse optimization**: primer vector gradients decide impulse count and times; indirect methods then refine the impulsive model to finite thrust.
- **Station-keeping and collision avoidance**: small fixed-horizon TPBVPs solved in real time for NRHO continuous-thrust station-keeping and collision avoidance.
- **Relative motion optimal control**: controlling a deputy relative to a chief in three-body dynamics, via variational equations and pre-computed state transition matrices, any boundary condition can be approximated in $O(mn^3)$ operations (Kulik et al. 2023).

## Related concepts

- [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/): the mathematical starting point
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/): the central unknown of the TPBVP
- [Primer Vector](/en/glossary/dynamics/primer-vector/): the physical embodiment of the velocity costate, fixing optimal thrust direction
- [Homotopy Method](/en/glossary/dynamics/homotopy-method/): the numerical workhorse for indirect Bang-bang control
- [Bang-bang Control](/en/glossary/dynamics/bang-bang-control/): the typical control structure derived indirectly
- [Fuel-optimal Control](/en/glossary/dynamics/fuel-optimal/): the dominant problem class for indirect methods
- [Adjoint-Control Transformation](/en/glossary/dynamics/adjoint-control-transformation/): reducing shooting dimension via the primer vector
- [Differential Correction](/en/glossary/dynamics/differential-correction/): the Newton iteration behind the free-variable/constraint method
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/): the dynamical setting for cislunar indirect optimization

## References

- Bryson, A. E., and Ho, Y.-C. 1975. *Applied Optimal Control*. Hemisphere.
- Betts, J. T. 1998. "Survey of Numerical Methods for Trajectory Optimization." *JGCD* 21(2): 193–207.
- Conway, B. A. (ed.) 2010. *Spacecraft Trajectory Optimization*. Cambridge Univ. Press. Ch. 1, 2, 3, 7.
- Dickmanns, E. D., and Wells, K. H. 1974. "Approximate Solution of Optimal Control Problems Using Hermite-Simpson Collocation."
- Hargraves, C. R., and Paris, S. W. 1987. "Direct Trajectory Optimization Using Nonlinear Programming and Collocation." *JGCD* 10(4): 338–342.
- Pontani, M., and Conway, B. A. 2009. "Numerical Solution of the Three-Dimensional Orbital Pursuit-Evasion Game." *JGCD*.
- Kluever, C. A., and Pierson, B. L. 1997. "Optimal Earth-Moon Trajectories Using Nuclear Electric Propulsion." *JGCD*.
- Bowerfind, W. M., and Taheri, E. 2024. "Rapid Approximation of Low-Thrust Spacecraft Reachable Sets."
- Spreen, J. S. 2021. *Robust Spacecraft Trajectory Optimization via Convex and Least-Squares Approaches*. PhD Thesis, Univ. of Colorado.
- Zhang, B., et al. 2015. "Switching Detection for Bang-Bang Control in Low-Thrust Trajectory Optimization." *JGCD*, doi:10.2514/1.G001080.
- Martinon, P., and Gergaud, J. 2010. "Switching Time Detection for Optimal Control Problems." INRIA TR-7380.
- Hartl, R. F., Sethi, S. P., and Vickson, R. G. 1995. "A Survey of the Maximum Principles for Optimal Control Problems with State Constraints." *SIAM Review* 37(2): 181–218.
- Caillau, J.-B., and Daoud, B. 2012. "Minimum Time Control of the Restricted Three-Body Problem." *SIAM J. Control Optim.* 50(6).
- Taheri, E., Kolmanovsky, I., and Atkins, E. 2016. "Enhanced Smoothing Technique for Indirect Optimization of Minimum-Fuel Low-Thrust Trajectories." *JGCD* 39(11): 2500–2511.
- Kulik, S., et al. 2023. "Relative Motion Optimal Control via Variational Equations." *JGCD*, doi:10.2514/1.G007311.
- Johnston, B., et al. 2020. *Theory of Functional Connections Applied to Optimal Control*.
