---
permalink: /en/glossary/dynamics/adams-cowell-integrator/
title: Multi-Step Integrator (Adams-Bashforth-Moulton / Cowell / Gauss-Jackson / KSG)
description: A family of linear multi-step numerical integrators—predictor-corrector pairs using back-value history—for high-precision orbit propagation. Covers Adams-Bashforth (predictor) + Adams-Moulton (corrector) for first-order systems; Cowell (Stormer-Cowell, Gauss-Jackson) for direct integration of second-order equations of motion; and the Krogh-Shampine-Gordon (KSG) variable-step divided-difference route.
---

# Multi-Step Integrator (Adams-Bashforth-Moulton / Cowell / Gauss-Jackson / KSG)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A multi-step integrator advances the solution from $t_n$ to $t_{n+1}$ using the current state *plus* a history of previously computed function values (back values). This distinguishes it from single-step methods like Runge-Kutta, which use only the state at $t_n$. Multi-step methods typically operate in **predictor-corrector** pairs: a predictor formula gives an initial estimate $y_{n+1}^p$, then a corrector formula refines it using the predicted state's derivative (Vallado 2022, Sec. 8.5–8.6).

Because they reuse past evaluations, multi-step methods can achieve high accuracy with just **one or two force-model calls per step**, far fewer than the $s$ stages of an Runge-Kutta step. The trade-off: they are not self-starting, they store a history of back values and summed differences, and variable step-size control is significantly more complex.

In astrodynamics, multi-step methods fall into two broad families based on the equation they solve:

- **Single-integration methods** (first-order ODEs): Adams-Bashforth (predictor) + Adams-Moulton (corrector).

- **Double-integration methods** (second-order ODEs, e.g., $\ddot{\vec{r}} = \vec{a}(\vec{r}, \vec{v}, t)$): Stormer (predictor) + Cowell (corrector), and the summed Gauss-Jackson form.

The Cowell formulation does not refer to a specific integrator but to the practice of directly integrating the second-order equations of motion without introducing velocity as an intermediate variable, originally used by Philip Cowell in 1909 to predict Halley's Comet (Vallado 2022).

## Adams-Bashforth-Moulton (Single-Integration)

Given $\dot{y} = f(t, y)$, the Adams-Bashforth predictor fits a polynomial through previous $f$-evaluations and integrates forward; the Adams-Moulton corrector fits a polynomial that includes the predicted point (Vallado 2022, Sec. 8.5.2).

The 4th-order predictor (Adams-Bashforth ordinate form):
$$
y_{n+1}^p = y_n + \frac{h}{24}\{55\dot{y}_n - 59\dot{y}_{n-1} + 37\dot{y}_{n-2} - 9\dot{y}_{n-3}\}
$$
The 4th-order corrector (Adams-Moulton ordinate form):
$$
y_{n+1} = y_n + \frac{h}{24}\{9\dot{y}_{n+1}^p + 19\dot{y}_n - 5\dot{y}_{n-1} + \dot{y}_{n-2}\}
$$
Higher-order variants (8th, 12th) are common in operational software (Maury and Segal 1969).

## Cowell / Stormer-Cowell / Gauss-Jackson (Double-Integration)

The Cowell formulation integrates $\ddot{\vec{r}} = \vec{a}$ directly. A Stormer predictor estimates position; a Cowell corrector refines it. For near-circular orbits without non-conservative forces (no velocity dependence), this skips the intermediate velocity computation entirely.

**Gauss-Jackson** is the fixed-step, summed-ordinate form of Stormer-Cowell, the workhorse of long-arc orbit ephemeris generation. It uses summed back differences $\vec{S}_n^{\text{I}}$ and $\vec{S}_n^{\text{II}}$ to suppress round-off error. Herrick (1972) notes that for near-circular LEO orbits Gauss-Jackson is roughly one order of magnitude more efficient than RK4. The predictor (Gauss summed-ordinate, order $j$):
$$
\dot{\vec{r}}_{n+1}^p = h\left\{\alpha_{So}\vec{S}_n^{\text{II}} + \alpha_{S1}\vec{S}_n^{\text{I}} + \sum_{i=0}^{j}\beta_{Si}\ddot{\vec{r}}_{n-i}\right\}
$$
The corrector (Jackson summed-ordinate, order $j$):
$$
\vec{r}_{n+1} = h\left\{\alpha_{So}\vec{S}_{n+1}^{\text{II}} + (\alpha_{So}+\alpha_{S1})\vec{S}_{n+1}^{\text{I}} + \sum_{i=0}^{j}\beta_{Ci}\ddot{\vec{r}}_{n+1-i}\right\}
$$
Coefficients are given in Vallado (2022, Table 8-1).

## Krogh-Shampine-Gordon (KSG) and Variable-Step Multi-Step

The **KSG integrator** (Krogh 1974; Shampine and Gordon 1975) uses **divided differences** instead of fixed-step back differences, enabling natural variable step-size control within a multi-step framework. It is a non-summed, variable-step formulation that is self-starting (Krogh 1974). This makes it attractive for eccentric orbits where fixed-step Gauss-Jackson wastes computation at apoapsis. KSG has been used in cislunar orbit determination with 60-second steps (Chen Y. et al. 2025).

Vallado (2022) notes that Shampine-Gordon (with recent implementations by Berry and Healy 2004) has drawn renewed interest as a potential alternative to Adams-Bashforth-Moulton.

## Starting Multi-Step Methods

Multi-step methods require $j$ back values to begin. Common bootstrap strategies (Vallado 2022, Sec. 8.5.1):

- Use a Runge-Kutta method *of matching order* to generate the first $j$ values (e.g., 8th-order RK for an 8th-order Gauss-Jackson).

- Use iterative starter procedures that shift the multi-step formulas to correct back-points.

- Use a lower-order method with reduced step size.

The critical requirement: the starting method's error must not exceed the multi-step method's error (Maury and Segal 1969).

## Time-Regularized Cowell (s-Integration)

For highly eccentric orbits, regularizing time eliminates the $1/r$ singularity and automatically shrinks the step at periapsis. The **time-regularized Cowell** (also called s-integration) replaces $t$ with an auxiliary variable $s$ via a generalized Sundman transformation $dt = c r^n ds$ (Vallado 2022, Eq. 8-9). With $n=1$, $s$ is eccentric anomaly; with $n=2$, $s$ is true anomaly. The cost is solving a seventh-order differential equation and interpolating results back to equally-spaced time.

## Choosing an Integrator

| Orbit Type | Recommended Integrator | Step-Size Strategy |
|---|---|---|
| Near-circular LEO | Gauss-Jackson (8th order) | Fixed, ~60 s |
| Near-circular GEO/HEO | Gauss-Jackson or Adams-Bashforth-Moulton | Fixed, ~5–10 min |
| Eccentric ($e > 0.5$) | Runge-Kutta-Fehlberg or KSG | Variable |
| Thrusting arcs | Runge-Kutta (moderate order) | Variable |
| Cislunar CR3BP | RK7/8 or KSG | ~60–120 s |

## Related Concepts

- [Runge-Kutta Methods](/en/glossary/fundamentals/rk/)

- [Direct Collocation Methods for Optimal Control](/en/glossary/dynamics/hermite-simpson-method/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

## References

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, Secs. 8.4–8.6 (Cowell formulation; Adams-Bashforth-Moulton predictor-corrector; Gauss-Jackson summed-ordidate forms; Krogh/Shampine-Gordon discussion; time-regularized Cowell)

- Maury and Segal, 1969, *Cowell Type Numerical Integration as Applied to Satellite Orbit Computation*, GSFC X-553-69-164 (coefficient tables for orders 1–15)

- Berry and Healy, 2001, *Comparison of Accuracy Assessment Techniques for Numerical Integration*, AAS 01-183 (detailed Gauss-Jackson implementation and error analysis)

- Krogh, 1974, *Changing Stepsize in the Integration of Differential Equations Using Modified Divided Differences*, Lecture Notes in Mathematics, Vol. 362, Springer-Verlag

- Shampine and Gordon, 1975, *Computer Solution of Ordinary Differential Equations*, W.H. Freeman

- Herrick, 1972, *Astrodynamics*, Vol. 2 (Gauss-Jackson vs. RK4 efficiency comparison)

- Berry, 2004, personal communication cited in Vallado 2022 (variable-step implementations of Stormer-Cowell and Krogh)

- Chen Y. et al., 2025, *Research on Observation System for Cislunar Space Catalog*, J. Spacecraft TT&C Technology (KSG integrator with 60-s steps for three-body dynamics)
