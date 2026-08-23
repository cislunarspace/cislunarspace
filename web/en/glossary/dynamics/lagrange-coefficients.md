---
title: Lagrange Coefficients (f and g Functions)
description: The coefficient set $(f,g,\dot f,\dot g)$ that linearly relates two-body state vectors at two epochs — $\vec r=f\vec r_0+g\vec v_0$, $\vec v=\dot f\vec r_0+\dot g\vec v_0$. Covers the identity $f\dot g-\dot f g\equiv 1$, closed forms parametrised by true / eccentric / parabolic / hyperbolic anomaly differences and by the universal variable, Taylor-series forms for initial orbit determination, and applications to two-body propagation, the Lambert problem, and orbit determination.
keywords: Lagrange coefficients, f and g functions, two-body propagation, universal variable, orbit determination, Lambert's problem
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lagrange Coefficients (f and g Functions)
  desc: The linear map between two-body states at two epochs, $(f,g,\dot f,\dot g)$ — identity $f\dot g-\dot f g\equiv 1$.
  image: /logo.png
og:
  title: Lagrange Coefficients | f and g Functions in the Two-Body Problem
  description: The coefficient set $(f,g,\dot f,\dot g)$ that linearly relates two-body state vectors at two epochs. Covers the identity $f\dot g-\dot f g\equiv 1$, closed forms for true/eccentric/parabolic/hyperbolic anomaly differences and the universal variable, Taylor-series forms, and applications to propagation, Lambert's problem, and orbit determination.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lagrange Coefficients | f and g Functions in the Two-Body Problem
  description: The coefficient set $(f,g,\dot f,\dot g)$ that linearly relates two-body state vectors at two epochs. Covers the identity $f\dot g-\dot f g\equiv 1$, closed forms for true/eccentric/parabolic/hyperbolic anomaly differences and the universal variable, Taylor-series forms, and applications to propagation, Lambert's problem, and orbit determination.
  image: /logo.png
permalink: /en/glossary/dynamics/lagrange-coefficients/
---

# Lagrange Coefficients (f and g Functions)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

In the two-body problem, the position and velocity at any time $t$ can be written as a **linear combination** of the position $\vec r_0$ and velocity $\vec v_0$ at the initial epoch $t_0$ (Vallado 2022, §2.5; Battin 1999):

$$
\vec r(t) = f\,\vec r_0 + g\,\vec v_0,\qquad \vec v(t) = \dot f\,\vec r_0 + \dot g\,\vec v_0.
$$

The four coefficients $f, g, \dot f, \dot g$ are the **Lagrange coefficients** (or **f and g functions**). Lagrange introduced this form for lunar-motion studies in the 18th century; it gives a linear statement of how to compute the state at one epoch from the state at another in a central gravity field (Kepler's problem) and underpins two-body propagation, initial orbit determination, and the [Lambert problem](/en/glossary/fundamentals/lamberts-problem/).

## Fundamental Identity

Because the angular momentum $\vec h=\vec r\times\vec v$ is conserved, substituting $\vec r=f\vec r_0+g\vec v_0$ and $\vec v=\dot f\vec r_0+\dot g\vec v_0$ into $\vec r\times\vec v=\vec r_0\times\vec v_0$ and expanding gives

$$
f\dot g - \dot f\,g \equiv 1.\quad(\text{Vallado 2022, Eq. 2-63})
$$

This identity is a free accuracy check in numerical implementations: any closed-form or approximate expression for $f, g, \dot f, \dot g$ must satisfy it, on pain of violating angular-momentum conservation.

## Closed Forms by Independent Variable

The explicit form of the Lagrange coefficients depends on what is known, typically some orbital-anomaly difference (Vallado 2022, §2.5).

### By true-anomaly difference $\Delta\nu$

$$
f = 1-\frac{r}{p}(1-\cos\Delta\nu),\quad
g = \frac{r r_0}{\sqrt{\mu p}}\sin\Delta\nu,
$$

$$
\dot f = \sqrt{\frac{\mu}{p}}\tan\!\frac{\Delta\nu}{2}\!\left(\frac{1-\cos\Delta\nu}{p}-\frac{1}{r}-\frac{1}{r_0}\right),\quad
\dot g = 1-\frac{r_0}{p}(1-\cos\Delta\nu),
$$

with $p=h^2/\mu=a(1-e^2)$ the semi-latus rectum.

### By eccentric-anomaly difference $\Delta E$ (ellipse)

$$
f = 1-\frac{a}{r_0}(1-\cos\Delta E),\quad
g = (t-t_0)-\sqrt{\frac{a^3}{\mu}}(\Delta E-\sin\Delta E),
$$

$$
\dot f = -\frac{\sqrt{\mu a}}{r_0 r}\sin\Delta E,\quad
\dot g = 1-\frac{a}{r}(1-\cos\Delta E).
$$

$\Delta E$ is fixed implicitly by Kepler's equation $M-M_0=\Delta E-e(\sin E-\sin E_0)$. This is the most widely used form for elliptic-orbit numerical propagation.

### By parabolic anomaly $B$ (parabola)

$$
f = \frac{1-B^2+2BB_0}{1+B_0^2},\quad
g = \frac{p^2\Delta B(1+BB_0)}{2h},\quad
\dot f = \frac{4h\,\Delta B}{p^2(1+B^2)(1+B_0^2)},\quad
\dot g = \frac{1-B_0^2+2BB_0}{1+B^2}.
$$

### By hyperbolic-anomaly difference $\Delta H$ (hyperbola)

$$
f = 1-\frac{a}{r_0}(1-\cosh\Delta H),\quad
g = (t-t_0)-\sqrt{\frac{(-a)^3}{\mu}}(\sinh\Delta H-\Delta H),
$$

$$
\dot f = -\frac{\sqrt{-\mu a}}{r_0 r}\sinh\Delta H,\quad
\dot g = 1-\frac{a}{r}(1-\cosh\Delta H).
$$

### By universal variable $\chi$ (unified form; Battin 1987; Vallado 2022 Eq. 2-68)

The universal-variable formulation unifies ellipse, parabola, and hyperbola, avoiding orbit-type branching:

$$
f = 1-\frac{\chi^2}{r_0}c_2,\quad
g = (t-t_0)-\frac{\chi^3}{\sqrt{\mu}}c_3,
$$

$$
\dot f = \frac{\sqrt{\mu}}{r_0 r}\chi(\psi c_3-1),\quad
\dot g = 1-\frac{\chi^2}{r}c_2,
$$

where $\psi=\chi^2/a$ (signed) and $c_2, c_3$ are Stumpff functions. This form is the core of the [universal-variable method](/en/glossary/dynamics/universal-variable-method/).

## Series Form (for Initial Orbit Determination)

When only the position magnitude $r_0$ at $t_0$ is known and orbital elements cannot be obtained directly (typical of Gauss's method in initial orbit determination), set $u\triangleq\mu/r_0^3$ and Taylor-expand $\vec r(t)$ about $t_0$. The resulting series forms for $f$ and $g$ are (Escobal 1965; Vallado 2022, Eq. 2-69):

$$
f = 1-\frac{u}{2}\tau^2-\frac{\dot u}{6}\tau^3-\frac{\ddot u-u^2}{24}\tau^4-\cdots,
$$

$$
g = \tau-\frac{u}{6}\tau^3-\frac{\dot u}{12}\tau^4-\frac{3\ddot u-u^2}{120}\tau^5-\cdots,
$$

with $\tau=t-t_0$ and the derivatives of $u$ evaluated at $t_0$. The series converges quickly for short $\tau$ (typically a small fraction of the observation arc) and provides a propagation tool using only position information.

## Application Notes

- **Two-body propagation**: given $\vec r_0, \vec v_0$ and a flight time, solve Kepler's equation for $\Delta E$ (or $\Delta H$) and substitute into the corresponding closed form to obtain $\vec r(t),\vec v(t)$.
- **Lambert's problem**: [Lambert's problem](/en/glossary/fundamentals/lamberts-problem/) uses $f$ to turn the position relation $\vec r_0\to\vec r$ into a single transcendental equation in the semi-major axis $a$; multi-revolution solutions and universal-variable algorithms (Battin-Vaughan, Gooding) are all built on the $f, g$ expressions.
- **Initial orbit determination**: Gauss's method uses the series form of $f, g$ to couple position-velocity at three observation epochs into an iteration over $\vec r_2$, the classical method for determining an orbit from angles-only (or angles-plus-some-ranges) observations.
- **Accuracy check**: after each propagation step, the residual of $f\dot g-\dot f g-1$ provides a free estimate of integration error.

## Common Confusions

- **Lagrange coefficients vs. Lagrange's planetary equations**: the former is the linear transfer between two-body states; the latter are variational equations for the orbital elements under perturbing accelerations (resolved along R/S/W). Same name Lagrange, different objects.
- **f, g vs. universal variable**: $\chi$ is the independent variable; $f$ and $g$ are coefficients expressed in terms of it. Saying propagate with the universal-variable method really means propagate with the $f, g$ functions written in $\chi$.
- **f, g in Lambert's problem**: there, $\vec r_0, \vec r$ are known and $\vec v_0, \vec v$ are sought; from $\vec r=f\vec r_0+g\vec v_0$ solve $\vec v_0=(\vec r-f\vec r_0)/g$ and then $\vec v=\dot f\vec r_0+\dot g\vec v_0$. This is the role of $f, g$ in boundary-value problems.

## Related Concepts

- [Lambert's Problem](/en/glossary/fundamentals/lamberts-problem/)
- [Universal Variable Method](/en/glossary/dynamics/universal-variable-method/)
- [Two-Point Boundary Value Problem](/en/glossary/dynamics/tpbvp/)

## References

- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*, 5th ed., §2.5 (Classical Formulas Using f and g Functions) and §2.6 (Series Forms of f and g). Microcosm Press.
- Battin, R. H. (1999). *An Introduction to the Mathematics and Methods of Astrodynamics*, Revised Edition. AIAA.
- Bate, R. R., Mueller, D. D., & White, J. E. (1971). *Fundamentals of Astrodynamics*. Dover.
- Escobal, P. R. (1965, reprinted 1985). *Methods of Orbit Determination*, 2nd ed. Krieger.
- Herrick, S. (1971). *Astrodynamics*, Vol. 1. Van Nostrand Reinhold.
