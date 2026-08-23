---
title: Lambert Guidance Routine
description: "A real-time closed-loop guidance algorithm that embeds the solution of Lambert's problem in the powered-flight phase: at each guidance cycle, solve the Lambert problem from the current state to the target to obtain the required velocity; the difference between this and the current velocity is the velocity-to-be-gained, used as the thrust direction command; cut off when the remaining velocity-to-be-gained drops below a threshold and coast ballistically to the target. Covers velocity-to-be-gained $v_G$, the Lambert computational plane, the distinction from open-loop Lambert transfer and Q/explicit guidance, and the position-plus-velocity matching extension (Burns-Scherock 2004)."
keywords: Lambert Guidance Routine, Lambert guidance, velocity-to-be-gained, closed-loop guidance, intercept guidance, boost-phase guidance
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lambert Guidance Routine
  desc: Embed Lambert's problem in real-time closed-loop guidance — the classical boost-phase guidance algorithm.
  image: /logo.png
og:
  title: Lambert Guidance Routine — Definition and Detailed Discussion
  description: "A real-time closed-loop guidance algorithm that embeds the solution of Lambert's problem in the powered-flight phase: at each guidance cycle, solve the Lambert problem from the current state to the target to obtain the required velocity; the difference from the current velocity is the velocity-to-be-gained, used as the thrust direction command; cut off when the residual drops below a threshold and coast ballistically to the target."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lambert Guidance Routine — Definition and Detailed Discussion
  description: "A real-time closed-loop guidance algorithm that embeds the solution of Lambert's problem in the powered-flight phase: at each guidance cycle, solve the Lambert problem from the current state to the target to obtain the required velocity; the difference from the current velocity is the velocity-to-be-gained, used as the thrust direction command; cut off when the residual drops below a threshold and coast ballistically to the target."
  image: /logo.png
permalink: /en/glossary/dynamics/lambert-guidance-routine/
---

# Lambert Guidance Routine

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Lambert Guidance Routine (LGR; also called Lambert guidance) is a real-time closed-loop guidance algorithm for the powered-flight phase that embeds the solution of [Lambert's problem](/en/glossary/fundamentals/lamberts-problem/). Each guidance cycle executes three steps (Burns & Scherock 2004):

1. Solve Lambert's problem with the current state $(\vec r_M,\vec v_M)$, the target point $\vec r_2$, and the remaining time of flight $t_f$ to obtain the velocity to be had $\vec v_{\text{LAMBERT}}$;
2. Compute the velocity-to-be-gained $\vec v_G=\vec v_{\text{LAMBERT}}-\vec v_M$;
3. Command thrust along $\vec v_G$; when $|\vec v_G|$ falls below a threshold, cut off and coast ballistically to the target.

This is a **closed-loop** iterative process: every cycle re-solves Lambert from the actual current state, giving natural robustness to disturbances, winds, and thrust deviations without any pre-designed open-loop reference trajectory.

## Lambert Computational Plane and Coordinate Conversion

$\vec r_1$ (current vehicle position) and $\vec r_2$ (target) define a unique plane, the Lambert computational plane. The two-dimensional Lambert equation is solved in this plane to give $\vec v_{\text{LAMBERT}}^{(2D)}$, which is then mapped back to the ECI inertial frame by two rotations about $Z$ and $Y'$ followed by a roll about $X''$ (Burns & Scherock 2004, Appendix). The solve-in-2D, map-to-3D pattern avoids direct 3D iteration.

The transfer angle $\theta_f$ follows from the dot product:

$$
\cos\theta_f=\frac{\vec r_1\cdot\vec r_2}{|\vec r_1|\,|\vec r_2|}
$$

The dimensionless energy parameter $\lambda=|\vec r_1|V^2/\mu$ (twice the ratio of kinetic to potential energy) classifies the trajectory: $\lambda<2$ elliptic, $\lambda=2$ parabolic, $\lambda>2$ hyperbolic. Common implementations iterate the Lambert equation by the secant method, with $\lambda$ restricted to elliptic values.

## Distinction from Open-Loop Lambert Transfer and Other Guidance Schemes

- **vs. open-loop Lambert transfer** (Lambert orbit manoeuvre): the open-loop use solves Lambert once offline to obtain an initial $\Delta\vec v$, applies it, and coasts without real-time correction; LGR **re-solves every cycle** and naturally corrects deviations. The former is a trajectory-design tool, the latter is a guidance law.

- **vs. Q-guidance and explicit guidance ([Explicit Guidance Law](/en/glossary/dynamics/explicit-guidance-law/))**: Q-guidance uses costate-gain matrices; explicit guidance integrates the nominal equations and enforces terminal constraints. LGR is characterised by the explicit call to a Lambert solver as the module computing the velocity to be had.

- **vs. Apollo LM P64 guidance**: P64 is polynomial / Lambda guidance, **not** Lambert guidance. The occasional Chinese-literature claim that Lambert guidance was one of the Apollo Guidance Computer's heaviest tasks is a confusion; Apollo used Lambert solutions for mission planning (on the ground), not for real-time flight guidance.

- **vs. midcourse Lambert correction**: Lambert solutions are also used to compute reference impulses for midcourse corrections (see [multi-impulse manoeuvres](/en/glossary/dynamics/two-impulse-rendezvous/)); that is offline impulse design, distinct from LGR.

## Key Engineering Parameters

- **Scheduled arrival time $T_A$ / time of flight $t_f$**: determines the trajectory shape (high loft vs. low loft) and the terminal velocity-matching $\Delta v$. Longer $t_f$ implies a higher loft and lower terminal velocity, hence a larger velocity deficit to make up; Powell's method is commonly used to optimise $t_f$ (equivalently, launch delay $T_D$) for minimum terminal $\Delta v$ (Burns & Scherock 2004).

- **Cutoff threshold**: shut down main thrust once $|\vec v_G|$ falls below threshold. Too low: tight cycles, demanding real-time performance; too high: large residuals.

- **Atmospheric pitch program**: in the low-atmosphere segment, a fixed fly-out flight-path-angle schedule suppresses drag losses; the loop switches to pure Lambert commands above the atmosphere.

- **Target position offset (White offset)**: compensates the systematic bias from Lambert's instantaneous burn, uniform gravity assumptions by deliberately biasing the guidance target by a small amount so that the true trajectory lands at the intended point.

## Extension: Position and Velocity Matching

Classical LGR only matches terminal **position**. Burns-Scherock (2004), in an interceptor scenario, add a short fourth-stage impulse so that terminal **velocity** also matches the target; once both position and velocity match, the interceptor follows the target's trajectory. Procedure:

1. First pass: guide with LGR to the target position $\vec R_T$; estimate $\Delta\vec V$ at closest approach;
2. Bias the guidance target to $\vec R_{\text{offset}}=\vec R_T-\Delta\vec R$ ($\Delta\vec R$ is the position deviation induced by the fourth-stage impulse);
3. The fourth stage ignites along $\Delta\vec V$ at time $\Delta T$ before the target;
4. Because the second-pass path differs slightly, $\Delta\vec V$ must be iterated to convergence, typically within 2-3 iterations.

## Application Notes

- **Boost-phase intercept guidance**: standard mode for ballistic-missile interceptors and strategic target vehicles.

- **Launch vehicle insertion**: boost guidance that arrives at the insertion point at a specified time.

- **Ascent intercept/rendezvous**: real-time guidance from ground/sub-orbital launch to a designated point in space.

- **No direct control of terminal velocity**: classical LGR controls position only; velocity matching requires an additional impulse.

## Related Concepts

- [Lambert's Problem](/en/glossary/fundamentals/lamberts-problem/)

- [Explicit Guidance Law](/en/glossary/dynamics/explicit-guidance-law/)

- [Multi-Impulse Maneuver](/en/glossary/dynamics/two-impulse-rendezvous/)

- [Double-Pulse Orbit Transfer](/en/glossary/dynamics/cislunar-transfer-design-elements/)

## References

- Burns and Scherock, 2004, Lambert Guidance Routine Designed to Match Position and Velocity of Ballistic Target (LGR principles, 3D extension, and the fourth-stage position-plus-velocity matching scheme).

- Joonhyung Park et al., 2000, Miss Analysis in Lambert Interceptions with Application to a New Guidance Law (miss-distance analysis of Lambert interceptions).
