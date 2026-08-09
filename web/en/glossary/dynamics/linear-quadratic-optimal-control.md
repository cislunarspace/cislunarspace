---
title: LQR and the Riccati Equation
description: The Linear Quadratic Regulator (LQR) is the closed-form optimal feedback law for linear systems with a quadratic performance index, with the gain obtained by solving a matrix Riccati equation (differential or algebraic). This entry covers the mathematical structure of LQR, finite- and infinite-horizon Riccati equations, weighting matrix selection, extensions to nonlinear output regulation (Francis-Byrnes-Isidori equations) and suboptimal control (SDRE), and the ZEM/ZEV guidance law as the LQR closed form for a double-integrator system.
keywords: LQR, linear quadratic regulator, Riccati equation, matrix Riccati equation, suboptimal control, nonlinear regulation, ZEM/ZEV guidance, Francis-Byrnes-Isidori equations, SDRE, libration point station-keeping
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: LQR and the Riccati Equation
  desc: Closed-form optimal feedback control for linear systems with a quadratic cost: Riccati equation, weighting matrices, output regulation, ZEM/ZEV guidance.
  image: /logo.png
og:
  title: LQR and the Riccati Equation Explained | Term Definition
  description: The Linear Quadratic Regulator is the closed-form optimal feedback law for linear systems with a quadratic performance index, with the gain obtained by solving a matrix Riccati equation. This entry covers LQR structure, Riccati equations, weighting matrix selection, output regulation, suboptimal control and ZEM/ZEV guidance.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: LQR and the Riccati Equation Explained | Term Definition
  description: The Linear Quadratic Regulator is the closed-form optimal feedback law for linear systems with a quadratic performance index, with the gain obtained by solving a matrix Riccati equation. This entry covers LQR structure, Riccati equations, weighting matrix selection, output regulation, suboptimal control and ZEM/ZEV guidance.
  image: /logo.png
permalink: /en/glossary/dynamics/linear-quadratic-optimal-control/
---

# LQR and the Riccati Equation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Linear Quadratic Regulator (LQR) is the closed-form solution to the following problem: given a linear time-varying system $\dot{\boldsymbol{x}} = \boldsymbol{A}(t)\boldsymbol{x} + \boldsymbol{B}(t)\boldsymbol{u}$, find a state-feedback law $\boldsymbol{u}^* = -\boldsymbol{K}(t)\boldsymbol{x}$ minimizing the quadratic cost

$$
J = \tfrac{1}{2}\boldsymbol{x}^T(t_f)\boldsymbol{S}_f\boldsymbol{x}(t_f) + \tfrac{1}{2}\int_{0}^{t_f}\!\left[\boldsymbol{x}^T\boldsymbol{Q}(t)\boldsymbol{x} + \boldsymbol{u}^T\boldsymbol{R}(t)\boldsymbol{u}\right]dt.
$$

Here $\boldsymbol{Q}\succeq 0$ weights state error, $\boldsymbol{R}\succ 0$ weights control effort, and $\boldsymbol{S}_f\succeq 0$ is the terminal cost. The key result is that the optimal gain is uniquely determined by the solution of a **matrix Riccati equation** (Kalman 1960; Anderson & Moore 1990), reducing a functional minimization to integrating a matrix ODE.

## Two Forms of the Riccati Equation

**Differential Riccati equation (finite-horizon LQR).** With terminal condition $\boldsymbol{P}(t_f) = \boldsymbol{S}_f$, integrate backward in time

$$
-\dot{\boldsymbol{P}} = \boldsymbol{P}\boldsymbol{A} + \boldsymbol{A}^T\boldsymbol{P} - \boldsymbol{P}\boldsymbol{B}\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P} + \boldsymbol{Q}.
$$

The optimal control is $\boldsymbol{u}^*(t) = -\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}(t)\boldsymbol{x}(t)$. The gain $\boldsymbol{K}(t) = \boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}(t)$ is generally time-varying; in engineering practice it is often precomputed along a reference trajectory (e.g. a libration point periodic orbit decomposed via Floquet modes) and looked up online.

**Algebraic Riccati equation (infinite-horizon LQR).** When $(\boldsymbol{A},\boldsymbol{B})$ is stabilizable and $(\boldsymbol{Q}^{1/2},\boldsymbol{A})$ is detectable, with constant $\boldsymbol{Q},\boldsymbol{R}$ and $t_f\to\infty$, $\boldsymbol{P}(t)$ converges to a steady $\boldsymbol{P}_\infty\succ 0$ satisfying

$$
\boldsymbol{P}\boldsymbol{A} + \boldsymbol{A}^T\boldsymbol{P} - \boldsymbol{P}\boldsymbol{B}\boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P} + \boldsymbol{Q} = \boldsymbol{0},
$$

yielding a constant gain $\boldsymbol{K} = \boldsymbol{R}^{-1}\boldsymbol{B}^T\boldsymbol{P}_\infty$ with the closed loop $\boldsymbol{A}-\boldsymbol{B}\boldsymbol{K}$ asymptotically stable. This is the form most used in attitude control and station-keeping.

## Weighting Matrix Selection: Accuracy vs Effort

The weighting matrices $\boldsymbol{Q}, \boldsymbol{R}$ are the **only** subjective choice in LQR design and directly shape the closed-loop behaviour. Larger $\boldsymbol{Q}$ tightens tracking and raises fuel cost; larger $\boldsymbol{R}$ saves fuel at the price of error. In nondimensional CR3BP libration-point station-keeping the position error, velocity error, and control acceleration are of comparable magnitude; Zhang & Wang (2022) used $\boldsymbol{Q}=10\boldsymbol{I}_{6\times 6}$, $\boldsymbol{R}=\boldsymbol{I}_{3\times 3}$ for DRO/Halo/NRHO with annual $\Delta V$ from 0.8 to 26 m/s depending on the stability index. NRHO exhibits control spikes near perilune that are roughly two orders of magnitude larger than DRO due to the velocity gradient there.

Common tuning rules include the Bryson rule (normalize diagonal entries then apply a single scalar), iterative simulation (fix $\boldsymbol{R}$ and re-balance the diagonal of $\boldsymbol{Q}$), and pole-placement-based shaping.

## Extensions to Nonlinear Systems

LQR is exactly optimal only for linear systems; most cislunar applications are nonlinear, motivating several "approximate LQR" techniques:

**Reference-trajectory linearization.** Linearize the dynamics along a nominal orbit $\bar{\boldsymbol{x}}(t)$ (e.g. a Halo or NRHO), $\delta\dot{\boldsymbol{x}} = \boldsymbol{A}(t)\delta\boldsymbol{x} + \boldsymbol{B}\delta\boldsymbol{u}$, and design LQR for the error system. This is the most common form of libration-point station-keeping; $\boldsymbol{A}(t)$ can be read off the [state transition matrix](/en/glossary/dynamics/variational-equations/).

**Suboptimal control and SDRE.** Rewrite the nonlinear system in state-dependent linear form $\dot{\boldsymbol{x}} = \boldsymbol{A}(\boldsymbol{x})\boldsymbol{x} + \boldsymbol{B}(\boldsymbol{x})\boldsymbol{u}$ and solve an instantaneous algebraic Riccati equation at each state, yielding the State-Dependent Riccati Equation (SDRE) feedback. Advantages: no need to integrate adjoints. Drawbacks: no global optimality guarantee and non-unique parametrizations.

**Nonlinear output regulation (Francis-Byrnes-Isidori equations).** When the reference and disturbance are generated by an exosystem (e.g. a quasi-halo reference plus periodic eccentricity perturbation), output regulation theory produces a feedback law that simultaneously tracks the reference and rejects the disturbance, with the key step being the solution of the regulator (Francis-Byrnes-Isidori) equations (Isidori & Byrnes 1990; Di Giamberardino & Monaco 1996). The framework can be composed with LQR/SDRE inner loops (Elobaid et al. 2022).

## ZEM/ZEV: the LQR Closed Form for a Double Integrator

Zero-Effort-Miss (ZEM) and Zero-Effort-Velocity (ZEV) guidance is the closed-form LQR solution for a second-order system. For $\ddot{\boldsymbol{r}} = \boldsymbol{u} + \boldsymbol{g}(\boldsymbol{r})$ with time-to-go $t_{go}=t_f-t$,

$$
\boldsymbol{r}_{ZEM}(t) = \boldsymbol{r}(t) + \boldsymbol{v}(t)t_{go} + \int_{t}^{t_f}\!(t_f-\tau)\boldsymbol{g}(\boldsymbol{r}(\tau))\,d\tau,\quad \boldsymbol{v}_{ZEV}(t) = \boldsymbol{v}(t) + \int_{t}^{t_f}\!\boldsymbol{g}(\boldsymbol{r}(\tau))\,d\tau.
$$

For uniform gravity, minimizing $\int\!\|\boldsymbol{u}\|^2 dt$ gives the classical gains $\boldsymbol{u}^* = \frac{6}{t_{go}^2}\boldsymbol{r}_{ZEM} - \frac{2}{t_{go}}\boldsymbol{v}_{ZEV}$, i.e. $K_R=6$, $K_V=-2$. The **generalized ZEM/ZEV algorithm** replaces these constants with time-varying $K_R(t), K_V(t)$ so the law remains near-optimal in non-uniform fields such as lunar powered descent or CR3BP transfers (Ebrahimi et al. 2008; Scorsoglio et al. 2023). ZEM/ZEV is widely used for lunar landing and NRHO rendezvous.

## Practical Notes

- **Numerics.** The Riccati equation is symmetric; only the upper triangle needs to be propagated. Steady-state solutions are obtained via `scipy.linalg.solve_continuous_are` or a Schur method (Arnold 1984).
- **Robustness margins.** LQR guarantees at least 60° phase margin and $[1/2, \infty)$ gain margin on each input channel (Safonov & Athans 1977). However, when actual disturbances reach SRP magnitude (nondimensional $\sim 10^{-4}$), plain LQR fails to converge and a robust scheme such as [Optimal Sliding Mode Control](/en/glossary/dynamics/osmc/) is needed.
- **Do not over-use.** LQR is valid only in a small neighbourhood of the reference trajectory; for large deviations (e.g. 100 km insertion error) replanning is required, not feedback.

## Related Concepts

- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Pontryagin Minimum Principle](/en/glossary/dynamics/pontryagins-maximum-principle/)
- [Optimal Sliding Mode Control (OSMC)](/en/glossary/dynamics/osmc/)
- [Hybrid Differential Dynamic Programming (HDDP)](/en/glossary/dynamics/hddp/)
- [Variational Equations](/en/glossary/dynamics/variational-equations/)

## References

- Kalman, R. E., 1960, *Contributions to the Theory of Optimal Control* (the founding paper on LQR and the Riccati equation).
- Anderson, B. D. O., Moore, J. B., 1990, *Optimal Control: Linear Quadratic Methods* (systematic textbook on LQR and weight selection).
- Safonov, M. G., Athans, M., 1977, "Gain and phase margin for multiloop LQG regulators," *IEEE Trans. Autom. Control* 22(2) (the classical LQR robustness margin result).
- Isidori, A., Byrnes, C. I., 1990, "Output regulation of nonlinear systems," *IEEE Trans. Autom. Control* 35(2) (nonlinear output regulation and the FBI equations).
- Ebrahimi, M., Bahrami, M., Rossi, F., 2008, "Optimal sliding-mode guidance with terminal velocity constraint for a lunar lander" (and the same authors' 2008 generalization of ZEM/ZEV to non-uniform gravity).
- Zhang, R., Wang, Y., 2022, "Continuous-thrust station-keeping of cis-lunar orbits using optimal sliding mode control with practical constraints," *Adv. Space Res.* (the Q=10I, R=I choice and OSMC vs LQR comparison).
- Scorsoglio, A., Furfaro, R., et al., 2023, "Relative motion guidance for near-rectilinear lunar orbits with path constraints," *Adv. Space Res.* (generalized ZEM/ZEV for NRHO).
- Elobaid, M., et al., 2022 (nonlinear regulation applied to libration-point station-keeping).
