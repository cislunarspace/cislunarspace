---
permalink: /en/glossary/fundamentals/rk/
title: Runge-Kutta Method
description: A family of single-step numerical integrators for initial-value ordinary differential equations—self-starting, no back-value history required, and the workhorse of astrodynamics propagation. Covers the classical RK4 formula, embedded Runge-Kutta (Fehlberg, Dormand-Prince) with variable step-size control, high-order variants (RK7/8), local truncation error and order analysis, and the comparison with multi-step methods.
keywords: Runge-Kutta, RK4, RK7/8, Runge-Kutta-Fehlberg, Dormand-Prince, single-step method, ODE integrator, embedded Runge-Kutta, local truncation error, step-size control, astrodynamics, orbit propagation
---

# Runge-Kutta Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Runge-Kutta method, proposed by Carl Runge (1856–1927) in 1895 and refined by Wilhelm Kutta (1867–1944) in 1901, is a family of single-step integrators for the initial-value problem $\dot{y} = f(t, y)$, $y(t_0) = y_0$. A single-step method advances from $y_n$ to $y_{n+1}$ using only the state at $t_n$, never referring to states at $t_{n-1}, t_{n-2}, \dots$. This gives Runge-Kutta methods two decisive advantages: they are **self-starting** (no back-value bootstrap) and trivially accommodate variable step sizes (Vallado 2022, Sec. 8.5).

The core idea: instead of analytically computing high-order derivatives as a Taylor series would demand, Runge-Kutta methods approximate a weighted average of slopes evaluated at several intermediate points within the interval $[t_n, t_n+h]$, exploiting the ODE's own right-hand-side function $f(t,y)$ evaluated at strategically chosen substages.

## Classical RK4

For a system cast as a first-order ODE $\dot{y} = f(t, y)$, the classical fourth-order formula (RK4) is (Vallado 2022, Eq. 8-6):

$$
\begin{aligned}
k_1 &= h f(t_n, y_n) \\
k_2 &= h f(t_n + \tfrac{h}{2}, y_n + \tfrac{1}{2} k_1) \\
k_3 &= h f(t_n + \tfrac{h}{2}, y_n + \tfrac{1}{2} k_2) \\
k_4 &= h f(t_n + h, y_n + k_3) \\
y_{n+1} &= y_n + \tfrac{1}{6}(k_1 + 2k_2 + 2k_3 + k_4) + O(h^5)
\end{aligned}
$$

The method is called "fourth-order" because it is locally accurate to order 4 (the Taylor series is matched through $h^4$ terms); its local truncation error is $O(h^5)$ and its global error is $O(h^4)$ (Berry 2004). Each step costs four function evaluations—four calls to the force model, which is usually the bottleneck in orbit propagation.

For the satellite problem, the state is $y = [\vec{r}; \vec{v}]$, so $f(t, y) = [\vec{v}; \vec{a}(\vec{r}, \vec{v}, t)]$, where $\vec{a}$ is the total acceleration from the force model (Vallado 2022, Eq. 8-7).

## Embedded Runge-Kutta and Variable Step-Size Control

A fixed step size is wasteful: near apoapsis the satellite moves slowly and a large step suffices; near periapsis the motion is fast and a small step is needed. The solution is **embedded Runge-Kutta**—at each step, two approximations of different orders are computed from the same stage evaluations, and their difference estimates the local truncation error.

The classic embedded pair is **Runge-Kutta-Fehlberg** (Fehlberg 1968, 1969): a six-stage scheme producing both a fourth-order and a fifth-order approximation (abbreviated RK45, 6 stages). The difference $\|y_{5}-y_{4}\|$ is compared against a user-specified tolerance $\varepsilon$; if it exceeds the tolerance the step is rejected and $h$ is reduced; if it is well below tolerance, $h$ is increased for the next step. This keeps the error roughly constant throughout the integration.

A widely-used alternative is the **Dormand-Prince** pair (DOPRI5/4, 7 stages), which is the default in MATLAB's `ode45`. It carefully selects the coefficients so that the fifth-order formula is used for the actual integration ("local extrapolation"), giving better accuracy for the same number of stages.

## High-Order Runge-Kutta and RK7/8

Higher-order RK methods use more stages to achieve smaller truncation error for the same or larger step size. An **RK7/8 integrator** (seventh-order with eighth-order error control) is common in high-precision astrodynamics software: Vallado (2022, Sec. 11.8) uses it with 10-second step size and relative tolerance $10^{-15}$ for HPOP reference ephemerides. The trade-off is that more stages mean more force-model evaluations per step, so the efficiency crossover relative to lower-order methods depends on the step size the problem can tolerate.

Fehlberg (1968, 1969) and Der (1995) give coefficients for orders up to 12.

## Local Truncation Error and Order

**Local truncation error (LTE)** is the error introduced in a single step when the exact solution at $t_n$ is advanced one step $h$ using the numerical scheme. For a method of order $p$, LTE $= O(h^{p+1})$. The **global error** accumulates after $N \propto 1/h$ steps, yielding $O(h^p)$.

Convention (Berry 2004): a method is termed $p$-th order if it is locally accurate to order $p$, globally correct to order $p-1$, with $(p+1)$-th order local error and $p$-th order global error. Thus RK4 is locally accurate to 4th order, globally correct to 3rd, with $O(h^5)$ local error and $O(h^4)$ global error.

## Application in Astrodynamics

In orbit propagation the integration step size is tied to the highest frequency in the force model (typically the orbital frequency). A rule of thumb: 100 steps per revolution for moderate-accuracy propagation (Vallado 2022, Sec. 8.5.1). For LEO, this means step sizes of 10–60 seconds; for GEO, minutes; for cislunar trajectories (CR3BP), 60–120 seconds is typical.

Runge-Kutta methods are preferred for eccentric orbits with thrusting or drag because they handle variable step sizes naturally and do not depend on equally-spaced back values. For near-circular orbits without thrust, multi-step methods (Gauss-Jackson, Adams-Bashforth-Moulton) are often more efficient—one order of magnitude for LEO orbits (Herrick 1972).

## Single-Step vs. Multi-Step Methods

| Property | Single-Step (RK) | Multi-Step (Adams, Cowell) |
|---|---|---|
| Self-starting | Yes | No (requires bootstrap) |
| Evaluations per step | $s$ stages (e.g., 4 for RK4) | 1–2 (predictor + corrector) |
| Variable step-size | Trivial | Difficult (requires recalculation of back values) |
| Memory | Low (current state only) | Stores back-values and summed differences |
| Preferred for | Eccentric, thrusting, high-drag orbits | Near-circular, long-arc propagation |

## Related Concepts

- [Multi-Step Integrators (Adams-Cowell, Gauss-Jackson)](/en/glossary/dynamics/adams-cowell-integrator/)

- [Direct Collocation Methods for Optimal Control](/en/glossary/dynamics/hermite-simpson-method/)

- [State Transition Matrix (STM)](/en/glossary/fundamentals/stm/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, Sec. 8.5 (Single-step RK; RK4 formula; Fehlberg embedded pair with variable step-size; RK78 application in HPOP)

- Fehlberg, 1968, *Classical Fifth-, Sixth-, Seventh-, and Eighth-Order Runge-Kutta Formulas with Stepsize Control*, NASA TR-R-287

- Fehlberg, 1969, *Low-Order Classical Runge-Kutta Formulas with Stepsize Control*, NASA TR-R-315

- Dormand and Prince, 1980, *A family of embedded Runge-Kutta formulae*, J. Comput. Appl. Math. 6:19-26

- Der, 1995, *Runge-Kutta Integration Methods for Trajectory Propagation Revisited*, AAS 95-420

- Berry, 2004, personal communication cited in Vallado 2022 (order conventions for numerical integrators)

- Herrick, 1972, *Astrodynamics*, Vol. 2 (efficiency comparison: Gauss-Jackson vs. RK4 for near-circular LEO)
