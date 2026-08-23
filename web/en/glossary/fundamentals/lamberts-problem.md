---
title: Lambert's Problem
description: One of the two canonical problems of orbital mechanics — given two position vectors in a central gravity field and a time of flight, determine the connecting orbit and the endpoint velocities. Covers Lambert's theorem (time of flight depends only on semi-major axis, sum of endpoint radii, chord length), the two-body algorithm family (Gauss, minimum-energy, Battin, Gooding, Thorne, universal variables), multi-revolution solutions (2N+1), the perturbed variant, the uncertain and linear-variational variants, and robust solvers.
keywords: Lambert's problem, Lambert theorem, Lambert's theorem, time-of-flight theorem, Lambert algorithm, multi-revolution Lambert problem, perturbed Lambert problem, uncertain Lambert problem, universal variables, Battin method, Gooding method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lambert's Problem
  desc: Given two positions and a time of flight, find the orbit — the canonical two-body boundary value problem and its multi-revolution, perturbed, and uncertain variants.
  image: /logo.png
og:
  title: Lambert's Problem — Definition and Detailed Discussion
  description: Given two position vectors in a central gravity field and a time of flight, determine the connecting orbit and the endpoint velocities. Covers Lambert's theorem, the Gauss/Battin/Gooding/Thorne algorithms, multi-revolution solutions, the perturbed variant, the uncertain variant, and robust solvers.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lambert's Problem — Definition and Detailed Discussion
  description: Given two position vectors in a central gravity field and a time of flight, determine the connecting orbit and the endpoint velocities. Covers Lambert's theorem, the Gauss/Battin/Gooding/Thorne algorithms, multi-revolution solutions, the perturbed variant, the uncertain variant, and robust solvers.
  image: /logo.png
permalink: /en/glossary/fundamentals/lamberts-problem/
---

# Lambert's Problem

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Lambert's problem is one of the two canonical problems of orbital mechanics (the other being Kepler's problem): given an initial position vector $\vec r_1$, a final position vector $\vec r_2$, and a time of flight $\Delta t$ in a central gravity field, find the orbit connecting the endpoints together with the endpoint velocities $\vec v_1$ and $\vec v_2$. It is at once a tool for initial orbit determination and a tool for transfer-orbit design (intercept, rendezvous, entry) (Vallado 2022; Battin 1999).

Calling it Gauss's problem is a misnomer. Euler first analysed the problem in 1744; Lambert extended it to elliptic and hyperbolic orbits during 1761–1771; Gauss in 1801 gave one solution method while recovering Ceres: he was solving Lambert's problem, not posing a new one (Vallado 2022, §7.6).

The two position vectors fix the orbital plane. Once a short-way or long-way choice is made ($t_m=\pm1$, corresponding to a transfer angle $\Delta\nu$ below or above $180^\circ$), the two-body Lambert problem has a unique solution; at $\Delta\nu=180^\circ$ the plane is undefined and the solution degenerates.

## Lambert's Theorem (Time-of-Flight Theorem)

The central result of Lambert's geometric investigation, stated as a theorem by Battin (1999, p. 276):

> The transfer time between two endpoints depends **only** on three quantities (the semi-major axis $a$, the sum of the endpoint radii $r_1+r_2$, and the chord length $c$ joining them) and not on the shape of the orbit (i.e., not on the eccentricity).

Equivalently, with $r_1+r_2$, $c$, and $\Delta t$ fixed, every admissible connecting orbit has the same semi-major axis; different eccentricities correspond to different members of the same ellipse family. This is the geometric reason Lambert's problem reduces to a single scalar equation in $a$ (or an equivalent variable). Lagrange gave the analytic form (Vallado 2022, Eq. 7-36):

$$
\Delta t=\sqrt{\frac{a^3}{\mu}}\big[\,2N\pi+\alpha_e-\sin\alpha_e \mp (\beta_e-\sin\beta_e)\,\big]
$$

where $N$ is the number of complete revolutions, $\sin(\alpha_e/2)=\sqrt{s/(2a)}$, $\sin(\beta_e/2)=\sqrt{(s-c)/(2a)}$, and the semi-perimeter is $s=(r_1+r_2+c)/2$. The $\mp$ sign selects the short- or long-way transfer.

## Minimum-Energy Solution and the Solvability Bound

Below a critical semi-major axis no connecting orbit exists. The critical value follows from the geometry of two virtual-focus circles just touching (Vallado 2022, Eq. 7-37):

$$
a_{\min}=\frac{s}{2}=\frac{r_1+r_2+c}{4}
$$

This is the minimum-energy orbit (specific mechanical energy $\varepsilon=-\mu/(2a)$ at its lowest), also called the fundamental ellipse. It gives a useful lower bound on the $\Delta v$ of a two-impulse transfer but is generally not the solution at a fixed time of flight.

## Algorithm Families

Solving Lambert's problem is equivalent to solving a single transcendental equation in $a$ (or in the universal variable $z$, or $x=\cos(\Delta E/2)$). Main algorithm families:

- **Gauss's original method (1809)**: based on the ratio $y$ of swept-sector area to triangle area; yields two independent equations in $y$ and $\Delta E$ and uses continued fractions to avoid trigonometric iteration. Originally elliptic only; extended to hyperbolic orbits by Bate, Mueller and White (Vallado 2022, §7.6.2).

- **Minimum-energy method**: solve for the $a_{\min}$ orbit first, then use Eq. (7-36) to back out $\Delta t$ for calibration.

- **Universal-variable method (Battin-Vaughan 1984; Vallado Algorithm 58)**: a single variable $z=\Delta E^2$ (positive for ellipses, negative for hyperbolas, zero for parabolas) unifies all three conic classes, eliminating branch logic. The most common modern implementation.

- **Battin's method**: solves the equation via hypergeometric continued fractions; elegant and robust across short/long-way and singular cases (Vallado 2022, §7.6.5).

- **Gooding's method (1988, 1990)**: the most robust implementation in practice, handles multi-revolution and near-$180^\circ$ cases; the default in commercial tools such as AGI ODTK.

- **Thorne's series solution (2004)**: gives $\Delta t(a)$ directly as a series, sidesteps iteration-initialisation problems, useful for visualising the solution space (the source of Vallado 2022, Fig. 7-9).

## Multi-Revolution Solutions

When the specified $\Delta t$ allows the transfer orbit to complete $N\ge1$ full revolutions before arriving, each $N$ admits $2N+1$ candidate solutions ($N$-revolution short-way + $N$-revolution long-way + 1 minimum-energy degenerate arc). Prussing (1992) and Shen-Tsiotras (2003) describe the structure of multi-revolution solutions and the minimum-$\Delta v$ selection: at fixed time, allowing more revolutions can reduce $\Delta v$, but the optimum must be selected among $2N_{\max}+1$ candidates. Shen-Tsiotras further show that the fixed-endpoint transfer reduces to an auxiliary problem whose global optimum is read off a $\Delta v$ contour map over separation angle and time of flight (Shen & Tsiotras 2003).

## Perturbed Lambert Problem

When the two-body assumption fails (Earth oblateness $J_2$, third-body gravity, solar radiation pressure, etc.), Lambert's theorem no longer holds and the problem must be solved numerically. Standard procedure:

1. Use the two-body Lambert solution as the initial guess;
2. Numerically integrate under the full force model to obtain the terminal position error $\delta\vec r_2$;
3. Iterate on $\vec v_1$ via [differential correction](/en/glossary/dynamics/differential-correction/) or a [homotopy method](/en/glossary/dynamics/homotopy-method/) until the terminal position satisfies the tolerance.

The resulting arc is called a perturbed Lambert arc. It is the basic tool for midcourse corrections in cislunar transfers, multi-arc patching, and intermediate-arc calculations in two-impulse cislunar transfers. The formal equivalent is the more general [two-point boundary value problem](/en/glossary/dynamics/tpbvp/) under Cowell integration (see [Cowell's perturbation method](/en/glossary/fundamentals/orbital-perturbations/)). Criscola et al. (2024) give a direct solution via the theory of functional connections that bypasses iteration.

## Uncertain Lambert Problem and the Linear-Variational Form

In practice $\vec r_1$ and $\vec r_2$ (from radar or optical measurements) carry errors, so $\vec v_1$ and $\vec v_2$ are random variables. Schumacher et al. (2015) formalise this as the Uncertain Lambert Problem (ULP):

- **General nonlinear form**: the map $\vec v_1=L(\vec r_1,\vec r_2)$ pushes forward the position density to a velocity density; its structure is governed by Liouville's equation and is usually resolved by Monte Carlo.

- **Linear-variational Lambert problem**: linearise about a nominal solution; the initial and final velocity variations are then related to the position variations by partitions of the nominal state transition matrix $\Phi_{rr},\Phi_{rv},\Phi_{vr},\Phi_{vv}$. Given a position covariance, the velocity covariance follows without iteration and is equivalent to a weighted batch least-squares differential correction (Schumacher et al. 2015).

- **Higher-order methods**: Armellin et al. use differential algebra (COSY-Infinity) to expand the solution in a Taylor series; Hall-Singla (2020) build higher-order sensitivity matrices via the conjugate unscented transform, derivative-free approximations of the output distribution.

- **Multi-revolution case (UMRLP)**: in the multi-revolution case the distribution is further constrained by orbital-dynamical boundaries; the per-revolution solution fraction $p_N$ decreases with $N$. Duan et al. (2025) handle this constrained distribution with an adaptive polynomial-chaos expansion.

**Robust Lambert Solver (RLS)**: an engineering-grade implementation that converges without an initial guess for both single- and multi-revolution cases, typically combining the strengths of Izzo's vectorised algorithm and Blanchard's algorithm. Within this family the RLS, UMRLP, the complete uncertain-solution distribution, and the per-revolution fraction $p_N$ are all sub-constructs of the ULP.

## Application Notes

- **Intercept and rendezvous**: the standard computation module for two-impulse transfers and fixed-time intercepts.

- **Initial orbit determination**: recover an orbit from two timed position vectors (e.g., from radar trilateration or two position vectors).

- **Midcourse correction**: use a perturbed Lambert solution as the reference to determine midcourse impulse vectors (see [multi-impulse manoeuvres](/en/glossary/dynamics/two-impulse-rendezvous/) and [two-impulse orbit transfers](/en/glossary/dynamics/cislunar-transfer-design-elements/)).

- **Lambert guidance**: embedding Lambert solutions in a real-time closed-loop guidance law: see [Lambert Guidance Routine](/en/glossary/dynamics/lambert-guidance-routine/).

## Related Concepts

- [Lambert Guidance Routine](/en/glossary/dynamics/lambert-guidance-routine/)

- [Three-Body Lambert Problem](/en/glossary/dynamics/three-body-lambert-problem/)

- [Two-Point Boundary Value Problem](/en/glossary/dynamics/tpbvp/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Homotopy Method](/en/glossary/dynamics/homotopy-method/)

- [Universal Variable Method](/en/glossary/dynamics/universal-variable-method/)

- [Cowell's Perturbation Method](/en/glossary/fundamentals/orbital-perturbations/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications, §7.6 (survey of Lambert's problem, theorem, and algorithm families).

- Battin, 1999, An Introduction to the Mathematics and Methods of Astrodynamics (modern statement of Lambert's theorem; hypergeometric continued-fraction algorithm).

- Shen & Tsiotras, 2003, Optimal Two-Impulse Rendezvous Using Multiple-Revolution Lambert Solutions (structure of multi-revolution solutions and optimal selection).

- Schumacher et al., 2015, Uncertain Lambert Problem (formulation and linear-variational solution).

- Hall & Singla, 2020, Higher-order Sensitivity Matrix Method for Probabilistic Solution to Uncertain Lambert Problem (higher-order sensitivity approach).

- Duan et al., 2025, Adaptive Polynomial Chaos Expansion Method for Uncertain Multiple-Revolution Lambert Problem (multi-revolution uncertain form).

- Criscola et al., 2024, Application of the Theory of Functional Connections to the Perturbed Lambert's Problem (direct solution of the perturbed case).

- Izzo, 2006, Lambert's Problem for Exponential Sinusoids (a Lambert-type problem for exponential-sinusoid shapes).
