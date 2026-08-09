---
title: Gooding's Method, Lambert Solvers and BVP Iterative Methods
description: "This entry consolidates the numerical solvers most used in cislunar two-point boundary value problems (BVP): Gooding's (1990) Lambert algorithm and Gooding's (1996) three-line-of-sight initial orbit determination scheme; higher-order single-variable iteration for the time-of-flight equation (third-order Householder, Powell's hybrid, secant / two-point method); quasilinearization for nonlinear TPBVPs in a continuation framework; and the damped bisection correction used specifically for libration-point orbit station-keeping. It covers the place of Gooding's algorithm among modern Lambert solvers, the trade-offs in root iteration, the second-order convergence advantage of quasilinearization over differential correction, and the robustness of damped bisection in the strongly nonlinear phase space near Halo orbits."
keywords: Gooding's method, Gooding scheme, Lambert solver, Householder method, Powell hybrid algorithm, two-point method, secant method, quasilinearization, damped bisection correction, two-point boundary value problem, initial orbit determination
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Gooding's Method, Lambert Solvers and BVP Iterative Methods
  desc: Gooding Lambert algorithm, Gooding three-sight IOD, Householder/Powell/two-point root iteration, quasilinearization, and damped bisection correction.
  image: /logo.png
og:
  title: Gooding's Method, Lambert Solvers and BVP Iterative Methods Explained | Term Definition
  description: This entry consolidates Gooding's Lambert algorithm, Gooding's three-line-of-sight IOD, Householder/Powell/two-point root iteration, quasilinearization, and damped bisection correction for Halo station-keeping. It covers the algorithmic positioning, convergence, and applicable scenarios of each method.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gooding's Method, Lambert Solvers and BVP Iterative Methods Explained | Term Definition
  description: This entry consolidates Gooding's Lambert algorithm, Gooding's three-line-of-sight IOD, Householder/Powell/two-point root iteration, quasilinearization, and damped bisection correction for Halo station-keeping. It covers the algorithmic positioning, convergence, and applicable scenarios of each method.
  image: /logo.png
permalink: /en/glossary/dynamics/goodings-method/
---

# Gooding's Method, Lambert Solvers and BVP Iterative Methods

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Cislunar missions frequently present "two-end states known, dynamics in between known, solve for control or orbit" two-point boundary value problems (TPBVP): Lambert's problem, initial orbit determination, libration-point station-keeping targeting, and so on. This entry consolidates the numerical solvers most commonly used for these problems: the Gooding family (Lambert algorithm + three-line-of-sight IOD), single-variable root finders (Householder, Powell's hybrid, secant / two-point method), quasilinearization for nonlinear TPBVPs, and the damped bisection correction specific to Halo orbit station-keeping.

## Two Different Gooding Methods

**Gooding (1990) Lambert algorithm.** One of the most widely used modern Lambert solvers, providing an efficient and stable algorithm to compute $\boldsymbol{v}_1$ from $\boldsymbol{r}_1, \boldsymbol{r}_2, t_f$. The algorithm uses the Lagrange form of the time-of-flight equation (a function of the semi-major axis or an equivalent variable), combined with hypergeometric functions and an efficient initial guess that covers multi-revolution, short/long-way, and elliptic/parabolic/hyperbolic branches. Its numerical performance and robustness exceed Gauss's original method (Battin 1999; Vallado 2022). Most modern Lambert implementations use Gooding's algorithm as the benchmark.

**Gooding (1996) three-line-of-sight IOD scheme.** Distinct from the Lambert solver — this is a method for determining an orbit from three line-of-sight observations. The minimal case requires three direction observations $\hat{\boldsymbol{\rho}}_1, \hat{\boldsymbol{\rho}}_2, \hat{\boldsymbol{\rho}}_3$, and the scheme reduces IOD to repeatedly solving a Lambert problem (given the two end distances and the time, find the velocities), iterating until a consistent orbit is obtained. The formulation is concise and computationally efficient, and generalizes naturally to more observations.

When reading Gooding, **first identify which one**: 1990 is the Lambert solver, 1996 is the IOD scheme.

## Root Iteration for the Time-of-Flight Equation

The Lambert problem ultimately reduces to finding the root of a scalar equation (the time-of-flight equation). Common single-variable iterations:

**Householder method.** A higher-order iterative method; $p$-th order Householder uses the first $p$ derivatives of $f$ and has convergence order $p+1$. Third-order Householder ($\mathcal{O}(4)$ convergence) is commonly used in Lambert problems, reaching machine precision in a few iterations. The cost is computing $f', f'', f'''$ each step, which is non-trivial for complex time-of-flight functions.

**Powell's hybrid method.** Combines Newton's method with secant-like ideas: robust step limiting far from the root, fast Newton convergence near it. Powell's 1970 original targets systems of nonlinear equations; it is often cited for the correction iteration after each successful integration step of a continuation method (Yoon & Petukhov 2023 use it for lunar low-thrust transfers).

**Two-point method (secant method).** Using the previous two estimates of the flyout angle and the corresponding times of flight, form the secant

$$
\gamma_{n+1} = \gamma_n - (\gamma_n - \gamma_{n-1})\frac{t_n - t_f}{t_n - t_{n-1}},
$$

requiring only one function evaluation per step (no derivatives) and trivial to implement. Nelson and Zarchan (1992) apply this idea to Lambert's problem, replacing the iteration variable (semi-major axis) with the flyout/flight-path angle; the second derivative of time of flight with respect to the angle is small, so the secant method performs well, reaching eight significant figures in a handful of iterations.

**Trade-offs.** Householder converges fast but needs high-order derivatives; Newton (second order) is the compromise; secant / two-point needs only function values but has convergence order $\approx 1.618$. The time-of-flight function for Lambert is well-behaved, so in engineering practice the **Gooding algorithm with built-in multi-revolution handling** usually outperforms any of the above used in isolation.

## Quasilinearization

Quasilinearization converts a nonlinear TPBVP into a sequence of **linear** TPBVPs. Given $\dot{\boldsymbol{x}}=\boldsymbol{f}(\boldsymbol{x},\boldsymbol{u},t)$ with boundary conditions, linearize about the current guess $(\bar{\boldsymbol{x}}, \bar{\boldsymbol{u}})$

$$
\delta\dot{\boldsymbol{x}} = \boldsymbol{A}(t)\delta\boldsymbol{x} + \boldsymbol{B}(t)\delta\boldsymbol{u},\qquad \boldsymbol{A}=\partial\boldsymbol{f}/\partial\boldsymbol{x}\big|_{\bar{\boldsymbol{x}},\bar{\boldsymbol{u}}},\ \ \boldsymbol{B}=\partial\boldsymbol{f}/\partial\boldsymbol{u}\big|_{\bar{\boldsymbol{x}},\bar{\boldsymbol{u}}}.
$$

Solve the linear TPBVP for $\delta\boldsymbol{x},\delta\boldsymbol{u}$, update $\bar{\boldsymbol{x}}\leftarrow\bar{\boldsymbol{x}}+\delta\boldsymbol{x}$, and repeat. **Compared with first-order differential correction, quasilinearization accounts for second-order terms in the update**, achieving second-order convergence and higher accuracy at convergence, suitable for autonomous onboard guidance (Wang et al. 2024 use it for low-energy Earth–Moon transfer guidance). The cost is constructing and solving a linear TPBVP each step (typically via [multiple shooting](/en/glossary/dynamics/differential-correction/) or the [state transition matrix](/en/glossary/dynamics/variational-equations/)).

## Damped Bisection Correction

In libration-point station-keeping, the standard differential correction (based on the first-order STM) tends to diverge in the strongly nonlinear phase space around Halo orbits, or converges to solutions with excessive $\Delta V$. The **damped bisection correction** (Folta et al. 2010) is a robust fallback: when the iteration enters a "wrong region" (integration hits the time limit before satisfying the constraint), the velocity correction is halved and the iteration backs up, progressively shrinking the step until it exits the wrong region and finds a valid solution.

Algorithm:

1. Perform one integration with the current correction $\delta\boldsymbol{v}$;
2. If the termination condition is met (target hit), accept;
3. If the time limit is exceeded without success, set $\delta\boldsymbol{v}\leftarrow\delta\boldsymbol{v}/2$ and retry;
4. If the step shrinks below a lower bound without success, report failure.

The cost is slower convergence (worst case degenerates to bisection search), but the method is **extremely robust against poor initial guesses and strong nonlinearity**, and is a common engineering fallback for long-term Halo / NRHO station-keeping.

## Practical Notes

- **Use Gooding for Lambert.** Gooding's algorithm is the de facto standard in modern implementations; writing one's own Newton / Householder root finder is only justified when special handling (multi-revolution, uncertain Lambert) is required.
- **Quasilinearization vs differential correction.** Switch to quasilinearization when convergence is slow or accuracy requirements are tight; first-order differential correction suffices for routine corrections.
- **Damped bisection as fallback.** In the strongly nonlinear Halo region, having damped bisection as a backup significantly improves the success rate of onboard algorithms.
- **Data conditions for IOD.** Gooding's 1996 scheme requires line-of-sight observations with appropriate time spacing and sufficient arc length; too short an arc makes the problem ill-conditioned.
- **Three-body Lambert.** The above two-body Lambert solvers provide only an initial guess in the CR3BP; refinement via [multiple shooting](/en/glossary/dynamics/differential-correction/) or [HDDP](/en/glossary/dynamics/hddp/) is needed.

## Related Concepts

- [Lambert's Problem](/en/glossary/fundamentals/lamberts-problem/)
- [Variational Equations and the State Transition Matrix](/en/glossary/dynamics/variational-equations/)
- [Direct Collocation / Differential Correction](/en/glossary/dynamics/differential-correction/)
- [Differential Dynamic Programming (DDP/iLQR/HDDP)](/en/glossary/dynamics/hddp/)
- [Co-state Variables](/en/glossary/dynamics/co-state-variables/)
- [Time-Optimal Transfer](/en/glossary/dynamics/fuel-optimal/)

## References

- Gooding, R. H., 1990, "A procedure for the solution of Lambert's orbital boundary-value problem," *Celest. Mech. Dyn. Astron.* (the Gooding Lambert algorithm).
- Gooding, R. H., 1996, "A new procedure for the solution of the classical problem of minimal orbit determination from three lines of sight," *Celest. Mech. Dyn. Astron.* (the Gooding three-sight IOD scheme).
- Battin, R. H., 1999, *An Introduction to the Mathematics and Methods of Astrodynamics* (the classic text on Lambert's problem and the time-of-flight equation).
- Vallado, D. A., 2022, *Fundamentals of Astrodynamics and Applications* (engineering benchmark for modern Lambert algorithms).
- Nelson, S., Zarchan, P., 1992, "Alternative approach to the solution of Lambert's problem," *J. Guid. Control Dyn.* (flyout-angle iteration + two-point/secant method).
- Powell, M. J. D., 1970, "A hybrid method for nonlinear equations" (Powell's hybrid method).
- Wang, Y., et al., 2024, "Low-energy earth–moon transfer autonomous guidance considering high-fidelity orbital dynamics" (quasilinearization for low-energy Earth–Moon transfer guidance).
- Folta, D., et al., 2010 (damped bisection correction applied to libration-point station-keeping).
- Yoon, S., Petukhov, V., 2023, "Minimum-fuel low-thrust trajectories to the moon" (Powell's hybrid inside a continuation method).
