---
title: Thrust Direction and Control (Thrust Direction & Control)
description: Description and control strategies for thrust-vector direction—efficiency analysis of tangential / anti-tangential thrust simplification assumptions for orbital energy change; comparison of thrust direction angle, direction cosine, and steering angle parameterization methods; continuous-thrust station-keeping strategies and engineering constraints in low-thrust orbit control.
keywords: thrust direction, tangential thrust, anti-tangential thrust, thrust direction angle, thrust direction cosines, thrust steering angle, continuous-thrust station-keeping, low-thrust control, thrust parameterization
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Thrust Direction and Control (Thrust Direction & Control)
  desc: Parameterization and control of thrust-vector direction—efficiency of tangential/anti-tangential thrust, comparison of angle/cosine/steering-angle methods, and low-thrust station-keeping.
  image: /logo.png
og:
  title: "Thrust Direction and Control Explained | Terminology Definition"
  description: Description and control strategies for thrust-vector direction—efficiency analysis of tangential / anti-tangential thrust simplification assumptions for orbital energy change; comparison of thrust direction angle, direction cosine, and steering angle parameterization methods; continuous-thrust station-keeping strategies and engineering constraints in low-thrust orbit control.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Thrust Direction and Control Explained | Terminology Definition"
  description: Thrust-direction description and control strategies—tangential/anti-tangential thrust efficiency, angle/cosine/steering-angle comparison, and low-thrust station-keeping engineering constraints.
  image: /logo.png
permalink: /en/glossary/dynamics/tangential-thrust-control/
---

# Thrust Direction and Control (Thrust Direction & Control)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Thrust direction and control concerns the description and optimal selection of thrust-vector direction for low-thrust engines. Unlike chemical propulsion's impulsive, instantaneous orbit changes, a continuous-thrust system must decide at every instant which direction to point the thrust—this direction not only affects the instantaneous rate of orbital change but determines the fuel efficiency of the entire integrated trajectory.

In the most general setting, the thrust direction is determined by optimal control theory: according to Pontryagin's Minimum Principle, the optimal thrust direction should align with Lawden's primer vector (the negative of the velocity costate). However, in analytical studies, initial-guess generation, and engineering simplifications, specific simplified thrust-direction assumptions are commonly adopted.

## Simplified Thrust-Direction Strategies

### Tangential and Anti-Tangential Thrust

**Tangential thrust** is the simplest thrust-direction assumption: the thrust direction is always parallel to the velocity vector (along the tangent to the trajectory).

**Anti-tangential thrust**: the thrust direction is opposite to the velocity vector (along the negative tangent).

Under the two-body Gauss variational equations, the efficiency of tangential/anti-tangential thrust can be understood through the semi-major axis rate of change:

$$
\frac{da}{dt} = \frac{2 a^2 e \sin f}{h} a_r + \frac{2 a^2 (1+e\cos f)}{h} a_t
$$

where $a_t$ is the transverse (velocity-aligned) thrust component and $a_r$ is the radial component. For near-circular orbits ($e \approx 0$), the semi-major axis rate is dominated by $a_t$—the radial contribution term $2a^2 e\sin f / h$ is nearly zero. Conclusion: **tangential thrust is the most efficient direction for changing the semi-major axis (i.e., orbital energy) in the short term** (Du et al. 2024).

This simplifying assumption is widely used in practice:

- **Acceleration scenario** (tangential thrust): The optimal direction for Earth-escape spirals; thrust continuously does work on the spacecraft, increasing its orbital energy.

- **Deceleration scenario** (anti-tangential thrust): The optimal direction for lunar-capture spirals; reverse thrust does negative work, gradually lowering the spacecraft from a high lunar orbit to a low one.

- **Exponential sinusoid analytical derivation**: Izzo's (2006) exponential-sinusoid shape method is based on the tangential-thrust assumption $\alpha = \gamma$ (thrust direction angle equals flight-path angle), under which thrust magnitude and polar-angle rate are uniquely determined by the shape parameters.

Note: Tangential/anti-tangential thrust are simplifying assumptions, not the exact solution of optimal control. The true optimal direction for actual low-thrust engines typically requires solution within an optimal control framework (costate equations + two-point boundary value problem); the tangential assumption is close to optimal only during specific orbital phases (where energy change dominates).

## Parameterization Methods for Thrust Direction

In numerical optimization, thrust direction must be expressed in terms of a finite number of parameters. Three mainstream parameterization methods exist:

### 1. Angular Parameterization

Two angles mark the thrust vector in a given reference frame:

- **Thrust direction angle**: $\theta_1$ is the angle between the thrust vector and the $x$-axis in the $xOy$ plane; $\theta_2$ is the angle between the thrust vector and the $xOy$ plane (Du et al. 2024).

- **Thrust steering angle**: $u$ is the angle of the thrust vector relative to the local horizontal plane in the local meridional-radial plane; $v$ is the angle of the thrust vector relative to the local vertical plane (Kluever and Pierson 1997).

Angular parameterization is intuitive and uses few variables (two time-varying parameters per arc). The drawback is directional singularity—when thrust approaches the zenith/nadir direction ($\theta_2 \to \pm 90^\circ$), $\theta_1$ loses definition and numerical-optimization gradients become singular.

### 2. Direction-Cosine Parameterization

The thrust unit vector is expressed directly via its direction-cosine components along three coordinate axes:

$$
\hat{\mathbf{a}} = [a_r, a_t, a_h]^{\mathrm{T}},\quad a_r^2 + a_t^2 + a_h^2 = 1
$$

where $r, t, h$ correspond respectively to the radial, transverse (along velocity), and orbit-normal directions (Kluever 1997).

Advantages of direction-cosine parameterization: (1) no singularities—any direction is uniformly represented, (2) smooth gradients, well-suited to nonlinear programming solvers. The cost is one extra variable (3 instead of 2) and the need for an additional equality constraint to enforce unit normalization.

### 3. Costate-Driven Parameterization

In indirect methods, thrust direction is not specified directly by design parameters but is determined as a function of the velocity costate ${\lambda}_v$:

$$
\boldsymbol{\alpha}^* = -\frac{{\lambda}_v}{\|{\lambda}_v\|}
$$

No explicit angular or cosine parameterization is needed; the costate variables themselves are the solution of the differential equations. The advantage is automatic satisfaction of the optimality necessary condition; the drawback is that costate initial values have no physical meaning and are highly sensitive, making BVP convergence difficult (Zhu & Gao 2017).

## Continuous-Thrust Station-Keeping

Station-keeping is an important application of thrust-direction control. Unlike the one-shot optimal planning of transfer trajectories, station-keeping involves continuous orbit correction throughout the entire mission lifetime.

**Continuous-thrust station-keeping** uses continuously operating EP engines to apply control forces without interruption, keeping the spacecraft near its nominal orbit over the long term (Zhang and Wang 2022). This applies to DRO, Halo orbits, NRHO, and other cislunar orbits.

Comparison with impulsive station-keeping:

| Feature | Impulsive Keeping | Continuous-Thrust Keeping |
|------|----------|------------|
| Control frequency | Discrete impulses (hours to days apart) | Continuously applied |
| Thrust magnitude | Larger (Newton-level) | Small (milli-Newton-level) |
| Control precision | Limited (drift between impulses) | Fine (continuous deviation correction) |
| Engineering challenge | Pointing accuracy during attitude instability | Minimum/maximum thrust and thrust-accuracy constraints |

Key engineering constraints: (1) **Thrust bounds**: the engine has a minimum stable thrust $F_{\min}$ and a maximum thrust $F_{\max}$; optimal solutions may land in regions where the required thrust falls below $F_{\min}$, requiring either thicker thrust (making control coarser) or introducing bang-bang modulation; (2) **Thrust-direction rotation rate**: the attitude control system limits how fast the thrust-vector direction can rotate.

For the 9:2 NRHO, because the velocity changes dramatically near periapsis, the thrust magnitude required for station-keeping is far larger than for a Halo orbit at a comparable Earth-Moon distance—making thrust bounds a particularly salient special case (Zhang and Wang 2022).

## Impulse Direction Angle

In the specific case of impulsive thrust, the thrust direction simplifies to the direction of a single application. The **impulse direction angle** is the angle between the impulse thrust direction and the perpendicular to the radial direction. Lawden's (1963) optimal transfer theory indicates that the optimal transfer requires applying the impulse perpendicular to the radial direction at an apsis (i.e., direction angle zero), to maximize the contribution of thrust to velocity—this is physically consistent with the tangential assumption for continuous thrust.

## Related Concepts

- [Bang-bang Control and Lawden's Arc Law](/en/glossary/dynamics/bang-bang-control/) — Optimal switching logic for thrust magnitude; discretization mode that may appear in station-keeping

- [Electric Propulsion (EP)](/en/glossary/fundamentals/ep/) — The physical foundation of continuous-thrust systems

- [Impulsive Maneuvers and Rendezvous (Two-Impulse Rendezvous)](/en/glossary/dynamics/two-impulse-rendezvous/) — Thrust-direction application strategies under the impulsive model

- [Pontryagin's Minimum Principle](/en/glossary/fundamentals/pmp/) — The mathematical foundation for optimal thrust direction

- [Co-state Variables](/en/glossary/dynamics/co-state-variables/) — The physical quantity that determines optimal thrust direction

- [Primer Vector](/en/glossary/dynamics/primer-vector/) — Lawden's tool for optimal thrust-direction determination

## References

- Lawden, D. F., 1963, Optimal Trajectories for Space Navigation. Butterworths. Necessary conditions for thrust-direction optimality and original derivation of the primer vector.

- Izzo, D., 2006, Lambert's Problem for Exponential Sinusoids. JGCD. Analytical derivation of exponential sinusoids under the tangential-thrust assumption.

- Du et al., 2024, Variational analysis of orbital elements under thrust influence, including Gauss-equation derivation of tangential/anti-tangential thrust efficiency.

- Kluever and Pierson, 1997, Optimal Earth-Moon Trajectories Using Nuclear Electric Propulsion. Engineering definition of thrust steering angle parameters and cislunar transfer applications.

- Kluever, 1997, Optimal Earth-Moon Trajectories Using Combined Chemical-Electric Propulsion. Specific use of thrust-direction-cosine parameterization in cislunar transfers.

- Zhang and Wang, 2022, Continuous-Thrust Station-Keeping of Cis-Lunar Orbits Using Optimal Sliding Mode Control. Engineering analysis of continuous-thrust station-keeping, including the NRHO thrust-bound special case.

- Zhu Z, Gao Y, 2017, Survey of Two Classes of Continuation Methods for Solving Optimal Bang-bang Control of Low-Thrust Space Trajectories. J. Deep Space Exploration. Costate-driven thrust-direction parameterization and indirect-method convergence analysis.
