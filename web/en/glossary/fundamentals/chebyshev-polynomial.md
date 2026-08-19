---
permalink: /en/glossary/fundamentals/chebyshev-polynomial/
title: Chebyshev Polynomial
description: A family of orthogonal polynomials defined by the recurrence $T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$ on $[-1,1]$, prized in astrodynamics for their near-minimax approximation property. Used by JPL to store planetary ephemerides as Chebyshev coefficient blocks (32-day spans), and for efficient representation of periodic orbit position and velocity components as smooth boundary constraints in trajectory design.
---

# Chebyshev Polynomial

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Chebyshev polynomials of the first kind, denoted $T_n(x)$, are defined on $x \in [-1, 1]$ by the recurrence (Abramowitz and Stegun 1964, Ch. 22):

$$
T_0(x) = 1, \qquad T_1(x) = x, \qquad T_{n+1}(x) = 2x\,T_n(x) - T_{n-1}(x), \quad n \ge 1
$$

Equivalently, $T_n(x) = \cos(n \arccos x)$. They are orthogonal with respect to the weight $w(x) = 1/\sqrt{1-x^2}$:

$$
\int_{-1}^{1} \frac{T_m(x) T_n(x)}{\sqrt{1-x^2}} \, dx = \begin{cases} 0, & m \neq n \\ \pi, & m = n = 0 \\ \pi/2, & m = n \neq 0 \end{cases}
$$

The second kind $U_n(x)$ satisfies $U_n(\cos\theta) = \sin((n+1)\theta)/\sin\theta$, but the first kind dominates astrodynamics applications.

A key property: among all monic polynomials of degree $n$ on $[-1, 1]$, the scaled Chebyshev polynomial $2^{1-n}T_n(x)$ has the smallest maximum absolute value (the **minimax property**). This makes Chebyshev approximation nearly as good as the optimal minimax polynomial, and vastly simpler to compute.

## Evaluation

The derivative $T_n'(x)$ is obtained via the recurrence for the second kind: $T_n'(x) = n U_{n-1}(x)$. For numerical evaluation the **Clenshaw recurrence** is standard—it evaluates $\sum a_n T_n(x)$ in $O(N)$ with excellent numerical stability, avoiding explicit computation of each $T_n$.

## JPL Ephemeris Storage

The practical importance of Chebyshev polynomials in astrodynamics is tied to the JPL planetary and lunar ephemerides (DE/LE series). After numerically integrating the equations of motion for the solar system (variable-step Adams-type integrator), JPL fits the resulting positions and velocities with Chebyshev polynomials over contiguous time spans and stores only the coefficients (Standish 1990; Vallado 2022, Sec. 5.4).

For DE-245 and DE-405, the span lengths are:

- 4 days for the Moon

- 8 days for Mercury and the Earth-Moon libration

- 16 days for Venus, Earth, and the Sun

- 32 days for all other planets

The user who wants a planet's position at time $t$ simply locates the correct coefficient block, maps $t$ to $\tau \in [-1,1]$, and evaluates the Chebyshev sum. This representation is compact (hundreds of coefficients per body per span vs. thousands of raw tabulated positions), differentiable (velocity and acceleration via $T_n'$ and $T_n''$ recurrences), and highly accurate (sub-meter for the Moon, sub-200 m for the Sun).

## Orbit Approximation and Boundary Constraints

In trajectory design, Chebyshev polynomials are used to represent the position and velocity components of a reference orbit (e.g., a parking orbit about Earth or a distant retrograde orbit about the Moon) as smooth, differentiable functions of time. This allows the transfer-arc boundary conditions to be expressed as algebraic constraints on a finite set of Chebyshev coefficients—a much smaller optimization problem than pointwise constraint enforcement (Gomez et al. 2001, Vol. III, Sec. 4.3).

The same approach is used to fit quasi-periodic invariant tori: since a torus is a smooth surface parameterized by angles, expanding its embedding functions in Chebyshev series converges exponentially with the number of coefficients, enabling efficient storage and evaluation of high-dimensional dynamical structures.

## First vs. Second Kind

| Property | $T_n$ (First kind) | $U_n$ (Second kind) |
|---|---|---|
| Definition | $T_n(\cos\theta) = \cos(n\theta)$ | $U_n(\cos\theta) = \frac{\sin((n+1)\theta)}{\sin\theta}$ |
| Weight function | $1/\sqrt{1-x^2}$ | $\sqrt{1-x^2}$ |
| Derivative relation | $T_n' = n U_{n-1}$ | — |
| Primary usage | Approximation, ephemeris | Numerical analysis (Gauss-Chebyshev quadrature) |

## Related Concepts

- [State Transition Matrix (STM)](/en/glossary/fundamentals/stm/)

- [Direct Collocation Methods for Optimal Control](/en/glossary/dynamics/hermite-simpson-method/)

- [Shape-Based Methods](/en/glossary/dynamics/shape-based-method/)

## References

- Abramowitz and Stegun, 1964, *Handbook of Mathematical Functions*, Ch. 22 (Chebyshev polynomials: recurrence, orthogonality, minimax property)

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, Sec. 5.4 (JPL ephemeris Chebyshev representation; span lengths for DE-245/DE-405; accuracy for Moon and Sun)

- Standish, 1990, *The Observational Basis for JPL's DE 200, the Planetary Ephemerides of the Astronomical Almanac*, Astron. Astrophys. 233:252–271 (Chebyshev coefficient fitting procedure for JPL ephemerides)

- Gomez et al., 2001, *Dynamics and Mission Design near Libration Points*, Vol. III, Sec. 4.3 (Chebyshev representation of JPL ephemerides for CR3BP simulations)

- Press et al., 1992, *Numerical Recipes in C*, Sec. 5.8 (Clenshaw recurrence for Chebyshev evaluation)
