---
title: Phase Deviation (相位偏差)
description: The phenomenon of a spacecraft's phase along a periodic orbit drifting relative to its reference trajectory. Caused by event-driven stationkeeping schemes (e.g. x-axis crossing control) that do not constrain the time/phase component. Uncorrected, phase drift can accumulate to hours over several years, compromising rendezvous and eclipse avoidance. The PC-SCoP approach casts the phase constraint as an explicit optimization constraint instead of an unintuitive tuning weight in differential correction.
keywords: Phase Deviation, Phase Drift, libration point orbit stationkeeping, x-axis crossing control, PC-SCoP, NRHO, absolute phase bias, DRO formation, SOCP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Phase Deviation
  desc: Phase drift in libration point orbit stationkeeping — from x-axis crossing to PC-SCoP.
  image: /logo.png
og:
  title: Phase Deviation — Detailed Definition
  description: "Phase drift on periodic orbits: x-axis crossing control leaves the time/phase component unconstrained, causing accumulating phase deviation. PC-SCoP formulates phase constraints as explicit SOCP constraints. Coverage of causes, consequences, and precise definitions."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Phase Deviation — Detailed Definition
  description: Phase drift in libration point orbit stationkeeping — causes and the PC-SCoP solution.
  image: /logo.png
permalink: /en/glossary/dynamics/phase-deviation/
---

# Phase Deviation (相位偏差)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition and Causes

**Phase deviation** refers to a spacecraft's positional offset along the direction of motion on a periodic orbit (libration point orbit, NRHO, etc.) relative to its reference trajectory — i.e., "leading" or "lagging" along the orbit track (Shimane et al. 2025). Unlike state-component deviations (position and velocity errors), phase deviation is a tangential accumulation along the nominal orbit; it does not affect the geometric maintenance of the orbit but affects **which location along the orbit the spacecraft occupies**.

The root cause of phase deviation lies in event-driven stationkeeping schemes — most notably **x-axis crossing control** (Folta et al. 2014; Shimane et al. 2025). This strategy, at the event when the spacecraft's predicted trajectory crosses the xz-plane of the synodic frame (near perilune), uses differential correction or optimization to match a subset of the predicted state components (typically only velocity components such as $v_x, v_z$) to the nominal baseline. The critical issue: a single maneuver can control at most three of the six state components, and **the crossing time $t_f$ (i.e., the phase) is not constrained**. As a result, the actual crossing epoch after each control can deviate from the nominal crossing epoch; over many revolutions this accumulates into a continuously growing phase deviation — i.e., **phase drift** (Shimane et al. 2025; Davis et al. 2022).

For Gateway's NRHO: x-axis crossing control (without phase constraint) in a 5-year (approximately 300 revolutions) Monte Carlo simulation produced a phase deviation (measured as perilune epoch offset) accumulating to approximately 2.1 hours (Shimane et al. 2025, Fig. 4).

## Phase-Constrained x-Axis Crossing: From Differential Correction to SOCP

Earlier phase-constrained schemes used a two-stage differential correction (DC) approach: the residual vector includes both the targeted state components (e.g., $v_x, v_z$) and the crossing-time deviation $t_f - t_{f,\text{ref}}$, with a non-physical scaling weight $W_{t_f}$ to balance the time deviation within the residual vector (Davis et al. 2022). The weight-tuning process is non-intuitive — $W_{t_f}$ must be found through manual trial-and-error to achieve numerical stability while maintaining satisfactory performance.

**PC-SCoP** (Phase-Constrained Sequential Cone Program) is the alternative proposed by Shimane et al. (2025): the phase-constrained x-axis crossing control is formulated as a Nonlinear Program (NLP), with the $\ell_2$ norm of the $\Delta V$ as the objective, and separate constraints on state-component deviation ($\varepsilon_{\vartheta,\text{targ}}$) and crossing-time deviation ($\varepsilon_{t_f,\text{targ}}$). Sequential linearization converts the nonlinear dynamics constraints into successively solved Second-Order Cone Program (SOCP) subproblems. Intuitive physical parameters (essentially tolerance thresholds on position/velocity and time) replace the non-physical weight $W_{t_f}$ of the DC scheme (Shimane et al. 2025).

### PC-SCoP Mathematical Form

Let $T$ be the maneuver vector expressed in the synodic frame, $\delta T$ the maneuver correction, and $\delta t_f$ the time increment. At each sequential iteration, the following is solved:

$$
\begin{aligned}
\min_{\delta T, \delta t_f} &\quad \|T + \delta T\|_2 \\
\text{s.t.} &\quad \|\vartheta(t_f, \text{ref}) - \vartheta(t_f, \text{pert})\| \le \varepsilon_{\vartheta,\text{targ}} \\
&\quad |t_f - t_{f,\text{ref}}| \le \varepsilon_{t_f,\text{targ}}
\end{aligned}
$$

Dynamics dependence on $\delta T, \delta t_f$ is linearized via the variational equations; after each solve, the state estimate is updated and the dynamics are re-linearized (Shimane et al. 2025).

## Absolute Phase Bias: Phase Control in DRO Formations

Absolute phase bias is an approach for DRO formation stationkeeping. By controlling the deputy spacecraft's crossing of the Moon-centered X-Z plane to occur $\Delta t$ later than the chief's, the deputy is maintained at a fixed safe distance behind the chief (Ao et al. 2024). Unlike reference-trajectory-based relative motion control, this method controls the formation phase difference directly from an absolute-motion perspective — offering simplicity and safety advantages in long-duration DRO operations that do not require continuous tracking of a full reference trajectory.

## Related Concepts

- [Station-Keeping (SK)](/en/glossary/dynamics/station-keeping/)

- [Constrained X-Axis Crossing Velocity](/en/glossary/dynamics/constrained-x-axis-crossing-velocity/)

- [Target Point Strategy](/en/glossary/dynamics/target-point-strategy/)

- [Near Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)

- [CR3BP](/en/glossary/dynamics/cr3bp/)

## References

- Shimane et al., 2025, Optimization-Based Phase-Constrained x-Axis Crossing Control for Station-Keeping on Libration Point Orbits (complete mathematical derivation of PC-SCoP and NRHO Monte Carlo simulation results)

- Davis et al., 2022 (trade-off analysis of two-stage DC-based phase-constrained x-axis crossing control)

- Folta et al., 2014, Earth-Moon Libration Point Orbit Stationkeeping: Theory, Modeling, and Operations (origins of the x-axis crossing control strategy and ARTEMIS mission validation)

- Ao Haiyue et al., 2024 (absolute phase bias method for DRO formations)
