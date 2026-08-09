---
title: Bang-bang Control and Lawden's Arc Law (Bang-bang Control & Lawden's Arc Law)
description: The optimal control law for fuel-optimal thrust magnitude—thrust switches only between maximum and zero, with no intermediate values. Covers Pontryagin's Minimum Principle derivation of bang-bang control, switching function and Lawden's primer vector, maximum-thrust arc / null-thrust arc / intermediate-thrust arc (singular arc), energy-fuel homotopy continuation methods, and engineering implementation in cislunar low-thrust transfers.
keywords: Bang-bang control, optimal control, fuel-optimal, switching function, Lawden arc, maximum-thrust arc, null-thrust arc, intermediate thrust arc, singular arc, Pontryagin's Minimum Principle, primer vector, energy-fuel homotopy, thrust switching control
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Bang-bang Control and Lawden's Arc Law
  desc: The core theory of fuel-optimal propulsion—why optimal thrust only switches between on and off, and Lawden's three arc types.
  image: /logo.png
og:
  title: "Bang-bang Control and Lawden's Arc Law Explained | Optimal Control and Thrust Arcs"
  description: The optimal control law for fuel-optimal thrust magnitude—thrust switches only between maximum and zero, with no intermediate values. Covers Pontryagin's Minimum Principle derivation, switching function and Lawden primer vector, MT/NT/IT arcs (singular arc), energy-fuel homotopy, and engineering implementation in cislunar low-thrust transfers.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Bang-bang Control and Lawden's Arc Law Explained | Optimal Control and Thrust Arcs"
  description: The optimal control law for fuel-optimal thrust magnitude—thrust switches only between maximum and zero, with no intermediate values. Covers Pontryagin's Minimum Principle derivation, switching function and Lawden primer vector, MT/NT/IT arcs, and energy-fuel homotopy.
  image: /logo.png
permalink: /en/glossary/dynamics/bang-bang-control/
---

# Bang-bang Control and Lawden's Arc Law (Bang-bang Control & Lawden's Arc Law)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Bang-bang control** is the standard form of thrust magnitude in fuel-optimal control problems: the control variable switches only between the two extreme values of the allowable range—thrust either takes the maximum value $F = F_{\max}$ ("on") or is zero $F = 0$ ("off")—with no sustained burning at intermediate thrust values. The name "bang-bang" originates from the sound made when a relay switch engages or disengages.

This is a direct consequence of Pontryagin's Minimum Principle. Under a fuel-optimal objective, the Hamiltonian depends linearly on the thrust magnitude $F$, so minimizing the Hamiltonian is equivalent to pushing the thrust magnitude to the boundaries of the constraint—either maximum or minimum (zero). Only when the switching function is identically zero may an intermediate value appear; this constitutes a singular arc requiring additional analysis.

In his foundational work *Optimal Trajectories for Space Navigation*, Lawden (1963) classified thrust trajectories by their magnitude characteristics into three types of arcs (arc), a classification that remains the basic terminology of thrust optimization theory:

- **Maximum-thrust arc (MT)**: Arcs where the switching function $S < 0$; the engine operates at $F_{\max}$.

- **Null-thrust arc (NT)**: Arcs where $S > 0$; thrust is zero and the spacecraft coasts ballistically.

- **Intermediate thrust arc (IT)**: Arcs where $S \equiv 0$; the thrust magnitude is indeterminate and requires further analysis via the Legendre-Clebsch second-order necessary condition. In optimal control theory this is called a **singular arc**.

## Mathematical Derivation

### Hamiltonian Form of the Fuel-Optimal Problem

Consider a low-thrust spacecraft in a single central gravity field, with dynamics (Zhu & Gao 2017):

$$
\dot{\mathbf{r}} = \mathbf{v},\qquad
\dot{\mathbf{v}} = -\frac{\mu}{r^3}\mathbf{r} + \frac{F}{m}\boldsymbol{\alpha},\qquad
\dot{m} = -\frac{F}{g_0 I_{sp}}
$$

where $\boldsymbol{\alpha}$ is the thrust direction unit vector ($\|\boldsymbol{\alpha}\|=1$) and $F \in [0, F_{\max}]$ is the thrust magnitude. The fuel-optimal performance index in Mayer form is $J = \min[-m(t_f)]$.

Introduce costate variables ${\lambda}_r, {\lambda}_v, \lambda_m$ to construct the Hamiltonian:

$$
H = {\lambda}_r^{\mathrm{T}}\dot{\mathbf{r}} + {\lambda}_v^{\mathrm{T}}\dot{\mathbf{v}} + \lambda_m \dot{m}
$$

Substituting the dynamics equations and separating the control-dependent terms:

$$
H = {\lambda}_r^{\mathrm{T}}\mathbf{v} - {\lambda}_v^{\mathrm{T}}\frac{\mu}{r^3}\mathbf{r} + F\left(\frac{\lambda}_v^{\mathrm{T}}\boldsymbol{\alpha}}{m} - \frac{\lambda_m}{g_0 I_{sp}}\right)
$$

The third term depends linearly on $F$—this directly gives rise to the bang-bang structure.

### Optimal Thrust Direction: Lawden's Primer Vector

Define the **primer vector** $\mathbf{p}(t) \equiv -{\lambda}_v(t)$ (Lawden 1963, Ch. 3; Prussing 1993). Minimizing the Hamiltonian is equivalent to aligning the thrust direction $\boldsymbol{\alpha}$ opposite to ${\lambda}_v$:

$$
\boldsymbol{\alpha}^* = -\frac{\lambda}_v}{\|{\lambda}_v\|} = \frac{\mathbf{p}}{\|\mathbf{p}\|}
$$

That is, the optimal thrust direction coincides with the primer vector direction.

### Switching Function and Bang-bang Condition

Define the **switching function** $S$:

$$
S = \frac{\partial H}{\partial F} = -\frac{\|{\lambda}_v\|}{m} - \frac{\lambda_m}{g_0 I_{sp}}
$$

According to Pontryagin's Minimum Principle, minimizing $H$ is equivalent to choosing $F$ such that $F \cdot S$ is minimized:

$$
F^* = \begin{cases}
0, & S > 0 \quad \text{(Null-thrust arc)} \\[4pt]
F_{\max}, & S < 0 \quad \text{(Maximum-thrust arc)} \\[4pt]
\text{to be determined}, & S = 0 \quad \text{(Intermediate thrust / singular arc)}
\end{cases}
$$

The sign of $S(t)$ changes during flight, producing alternating "on-off-on-off" bang-bang structures. The key challenge: the switching instants (times when $S(t)=0$) and the number of switches are unknown a priori and must be solved as part of the optimization problem.

In nondimensionalized form, defining thrust ratio $u = F/F_{\max} \in [0,1]$, the switching function has an equivalent expression (Zhu & Gao 2017):

$$
\rho = 1 - \frac{g_0 I_{sp} \|{\lambda}_v\|}{m} - \lambda_m
$$

The bang-bang condition becomes: $\rho > 0 \Rightarrow u^*=0$, $\rho < 0 \Rightarrow u^*=1$.

### Singular Arcs: Intermediate Thrust

When $S(t) \equiv 0$ holds identically over a finite time interval, first-order necessary conditions do not suffice to determine $F$. The Legendre-Clebsch condition must then be used to determine whether the path is a minimum. Numerical experience suggests that identically-zero singular arcs are rare in general low-thrust two-body problems, though they may occur in certain special cases such as power-limited low-thrust trajectories (Thorne 1996, Ch. 4; Prussing 1993).

## Physical Meaning of Lawden's Arc Law

Lawden's (1963) three-arc classification has clear physical meaning beyond the mathematical formulation:

1. **Maximum-thrust arc (MT)**: Engine at full power. Appears on arcs where orbital energy or angular momentum must be changed rapidly—such as the thrusting phase of an Earth-escape spiral and the deceleration phase of a lunar-capture spiral. At these locations, the energy-change efficiency per unit thrust is highest.
2. **Null-thrust arc (NT)**: Engine off, coasting. Appears when the spacecraft traverses large regions of cislunar space, and on arcs where the switching function indicates that not thrusting is actually more optimal. Coasting arcs exploit the natural evolution of orbits under gravity, saving propellant.
3. **Intermediate thrust arc (IT / singular arc)**: Arises when second-order conditions dictate an intermediate thrust value. Extremely rare in practice; usually signals some symmetry or simplifying assumption in the optimization problem. Most practical solutions assume the absence of singular arcs to avoid numerical complexity.

In real optimal trajectories, MT and NT alternate to form a bang-coast-bang structure. The intervening coasting phase is precisely a null-thrust arc. A typical TCT (Thrust-Coast-Thrust) sequence corresponds exactly to MT-NT-MT in three arcs.

## Energy-Fuel Homotopy: Numerical Solution of Bang-bang Control

The main difficulty in directly solving bang-bang control is: the right-hand side of the differential equations is discontinuous ($F$ jumps at switching instants), and the switching times and sequence are unknown a priori. Continuation methods (homotopy) are the mainstream approach for solving this problem.

**Core idea** (Zhu & Gao 2017): Start from an easy-to-solve **energy-optimal** problem (where thrust magnitude varies continuously with time); then, by gradually adjusting the homotopy parameter $\varepsilon$ in the performance index, morph the continuous control into bang-bang control.

Construct a performance index with homotopy parameter $\varepsilon \in [0,1]$:

$$
J = \min \left\{ \frac{F_{\max}}{g_0 I_{sp}} \int_{t_0}^{t_f} [u - \varepsilon u(1-u)]\, dt \right\}
$$

- $\varepsilon = 1$ yields the energy-optimal problem ($\int u^2 dt$), with continuously differentiable control and a wide convergence basin.

- $\varepsilon = 0$ yields the fuel-optimal problem ($\int u dt$), with control degenerating to bang-bang.

During the homotopy process, the optimal thrust ratio has a closed-form expression:

$$
u^* = \begin{cases}
0, & \rho > \varepsilon \\[4pt]
\dfrac{\varepsilon - \rho}{2\varepsilon}, & -\varepsilon \leqslant \rho \leqslant \varepsilon \\[4pt]
1, & \rho < -\varepsilon
\end{cases}
$$

Within the boundary layer $|\rho| \leqslant \varepsilon$, the control law is continuous and differentiable. As $\varepsilon \to 0$, the boundary layer shrinks and the continuous solution approaches the bang-bang solution. The homotopy parameter sequence typically uses $\varepsilon_d = 10^{-(d/N)}$ with $N$ taken as 15--60.

Two classes of continuation methods (Zhu & Gao 2017):

1. **Energy-fuel homotopy**: Start from an energy-optimal solution and gradually reduce $\varepsilon$ to zero. Good convergence, but does not address constant-thrust constraints.
2. **Switching-sequence continuation**: Start from a two-impulse transfer solution, continue in thrust magnitude to reach the minimum-thrust orbit, then automatically adjust the switching sequence based on changes in switching-function characteristic values. Guarantees that each intermediate solution satisfies the bang-bang necessary condition.

## Engineering Relevance in Cislunar Space

Under the cislunar CR3BP+LT model, bang-bang control is closely related to the following concepts:

- **CR3BP+LT trajectory optimization**: When low thrust is considered within the restricted three-body framework, indirect methods (via costate two-point boundary value problems) naturally yield bang-bang thrust profiles. Fahey (2024) used sigmoid smoothing to approximate bang-bang jumps as an intermediate step toward the minimum-fuel solution in the Howell group's work.

- **TCT sequence**: The Thrust-Coast-Thrust pattern in cislunar transfers naturally corresponds to MT-NT-MT, a direct manifestation of the bang-bang structure in a specific mission context.

- **Continuous-thrust station-keeping**: For long-term station-keeping of libration-point orbits such as NRHO and Halo, the optimal control law also exhibits bang-bang character—thrust is applied only when the orbital deviation exceeds a threshold (Zhang and Wang 2022).

## Related Concepts

- [Electric Propulsion (EP)](/en/glossary/fundamentals/ep/) — The physical carrier of bang-bang control; the propulsion foundation of low-thrust systems

- [Tangential Thrust Control](/en/glossary/dynamics/tangential-thrust-control/) — Optimal and simplified strategies for thrust direction

- [Pontryagin's Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/) — The mathematical foundation for deriving bang-bang control

- [Co-state Variables](/en/glossary/dynamics/co-state-variables/) — The direct physical source of the primer vector

- [Primer Vector](/en/glossary/dynamics/primer-vector/) — Lawden's tool for optimal thrust direction determination

- [Homotopy Method](/en/glossary/dynamics/homotopy-method/) — The core technique for numerical solution of bang-bang control

- [Two-Impulse Rendezvous](/en/glossary/dynamics/two-impulse-rendezvous/) — Maneuver methods under the impulsive propulsion model; two-impulse solutions provide initial guesses for the impulse limit of bang-bang control

## References

- Lawden, D. F., 1963, Optimal Trajectories for Space Navigation. Butterworths, London. Ch. 3: Original definition of the primer vector, switching function, and the classic three-arc (MT/NT/IT) classification.

- Pontryagin, L. S., et al., 1962, The Mathematical Theory of Optimal Processes. Wiley. The original work on Pontryagin's Minimum Principle.

- Bryson, A. E., and Ho, Y. C., 1975, Applied Optimal Control. Hemisphere. A systematic textbook on optimal control, including numerical methods for bang-bang control.

- Prussing, J. E., 1993, Equation for Optimal Power-Limited Spacecraft Trajectories. JGCD. Primer vector equation and singular arc analysis for power-limited problems.

- Prussing, J. E., 2010, Primer Vector Theory and Applications. Systematic review of primer vector theory for impulsive maneuvers.

- Thorne, J. D., 1996, Optimal Continuous-Thrust Orbit Transfers. PhD Dissertation, AFIT. Comprehensive numerical study of continuous-thrust optimal control, including singular arc determination and Legendre-Clebsch condition analysis.

- Zhu Z, Gao Y, 2017, Survey of Two Classes of Continuation Methods for Solving Optimal Bang-bang Control of Low-Thrust Space Trajectories. J. Deep Space Exploration, 4(2): 101-110. Detailed comparison of energy-fuel homotopy and switching-sequence continuation methods.

- Fahey, L., 2024, Design Strategies for Low Thrust Transfers in the Earth-Moon System. MS Thesis, Purdue Univ. Ch. 5.3: Application of sigmoid smoothing to approximate bang-bang jumps in CR3BP+LT indirect methods.

- Zhang and Wang, 2022, Continuous-Thrust Station-Keeping of Cis-Lunar Orbits Using Optimal Sliding Mode Control. Engineering realization of bang-bang character in continuous-thrust NRHO station-keeping.
