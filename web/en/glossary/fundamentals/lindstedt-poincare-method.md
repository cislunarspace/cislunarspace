---
title: Lindstedt-Poincaré Method
description: A perturbation technique that expands both the coordinates and the frequencies as power series in a small parameter to eliminate secular terms, yielding uniformly valid periodic and quasi-periodic solutions. The standard tool for constructing analytical approximations of Halo, Lissajous, quasi-halo and vertical Lyapunov orbits near CR3BP libration points, providing initial guesses for numerical differential correction.
keywords: Lindstedt-Poincaré Method, perturbation method, secular term, halo orbit analytical solution, Richardson 1980, libration point orbit, frequency expansion
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lindstedt-Poincaré Method
  desc: A perturbation technique that expands both coordinates and frequencies to remove secular terms.
  image: /logo.png
og:
  title: "Lindstedt-Poincaré Method Explained | Glossary"
  description: A perturbation technique that expands both coordinates and frequencies as power series in a small parameter to eliminate secular terms, yielding uniformly valid periodic solutions. The standard tool for constructing Halo, Lissajous, quasi-halo and vertical Lyapunov orbit approximations near CR3BP libration points.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Lindstedt-Poincaré Method Explained | Glossary"
  description: A perturbation technique that expands both coordinates and frequencies as power series in a small parameter to eliminate secular terms, yielding uniformly valid periodic solutions. The standard tool for constructing Halo, Lissajous, quasi-halo and vertical Lyapunov orbit approximations near CR3BP libration points.
  image: /logo.png
permalink: /en/glossary/fundamentals/lindstedt-poincare-method/
---

# Lindstedt-Poincaré Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The **Lindstedt-Poincaré method** is a perturbation technique for constructing uniformly valid periodic (or quasi-periodic) solutions of weakly nonlinear oscillatory systems. Its defining feature relative to regular perturbation is that *both* the dependent variables *and* the frequencies are expanded as power series in a small parameter $\varepsilon$. Introducing extra degrees of freedom in the frequencies lets them be chosen at each order to cancel the resonant terms that would otherwise grow without bound (secular terms), so the truncated series remains uniformly valid over all time (Poincaré 1892; Nayfeh 1973).

## Core idea

For an oscillator of the form $\ddot{x}+\omega_0^2 x = \varepsilon f(x,\dot{x})$, a regular perturbation expansion $x=x_0+\varepsilon x_1+\cdots$ produces correction terms proportional to $t\sin\omega_0 t$ at $O(\varepsilon)$, secular terms that grow unboundedly and ruin the approximation after a few periods. The Lindstedt-Poincaré remedy is to also expand the frequency:

$$\omega = \omega_0 + \varepsilon\omega_1 + \varepsilon^2\omega_2 + \cdots$$

re-express the equation in the stretched time $\tau=\omega t$, and choose the $\omega_i$ at each order to suppress resonant forcing. The resulting series is uniformly ordered for all $t$ (Nayfeh 1973; 喻圣贤 2013).

## Application to CR3BP libration-point orbits

Linearizing the CR3BP equations about a collinear libration point yields two coupled harmonic oscillations with in-plane and out-of-plane frequencies $\omega$ and $\nu$. The Lindstedt-Poincaré construction expands the solution in the small in-plane amplitude $\alpha$ and out-of-plane amplitude $\beta$:

$$\begin{aligned}
x(t) &= \sum_{i,j\ge 1}\Bigl(\sum_{|k|\le i}x_{ijk}\cos(k\theta)\Bigr)\alpha^i\beta^j,\\
y(t) &= \sum_{i,j\ge 1}\Bigl(\sum_{|k|\le i}y_{ijk}\sin(k\theta)\Bigr)\alpha^i\beta^j,\\
z(t) &= \sum_{i,j\ge 1}\Bigl(\sum_{|k|\le i}z_{ijk}\cos(k\theta)\Bigr)\alpha^i\beta^j,
\end{aligned}$$

with $\omega$ and $\nu$ themselves expanded in $\alpha$ and $\beta$ (喻圣贤 2013; Richardson 1980).

- When $\omega$ and $\nu$ are incommensurable, the trajectory is a **Lissajous (quasi-periodic)** orbit filling a 2-torus.

- When $\omega=\nu$ (1:1 commensurability, reached at sufficiently large amplitude), the series collapse to a single period and yield a **Halo orbit**, a three-dimensional periodic orbit.

## Canonical results

- **Farquhar & Kamel (1973)**: third-order Lissajous and fourth-order halo analytical solutions about $L_2$, including lunar eccentricity and solar gravity perturbations.

- **Richardson (1980)**: third-order halo orbit construction about the collinear points, the de facto first step in modern halo computation. The method expands the equations of motion about the libration point to third order and applies a modified Lindstedt-Poincaré scheme to eliminate secular terms, producing in-plane and out-of-plane third-order analytical solutions (Richardson 1980; Howell 1984).

- **Gómez, Masdemont (1998, 2005)**: high-order Lissajous and quasi-halo solutions via Lindstedt-Poincaré expansions in the parameterization of the central manifold; expansions to order 25 or higher, with coefficients corresponding to the Birkhoff normal form, directly outputting high-precision initial conditions for invariant manifolds.

- **Archambeau et al. (2011)**: vertical Lyapunov orbit solutions by the same framework.

## Role in the modern workflow

The Lindstedt-Poincaré approximation is rarely the final product. Its output serves as the **initial guess** for numerical refinement:

1. The Lindstedt-Poincaré series produce a coarse periodic/quasi-periodic solution at a specified Jacobi constant.
2. Periodic orbits are refined by the [shooting method](/en/glossary/dynamics/differential-correction/) (Howell 1984).
3. Quasi-periodic orbits are refined by multiple-shooting with Fourier series on several Poincaré sections (Kolemen et al. 2006; Jorba 2001; Gómez & Mondelo 2001).

The workflow is robust but has known limitations: the Lindstedt-Poincaré construction is itself intricate (different semi-analytical forms for each orbit family), Fourier-series correction of quasi-periodic orbits is time-consuming, and orbits whose invariant curves have sharp corners near the planar Lyapunov family resist low-order Fourier representation. Purely numerical alternatives (e.g. Ren & Shan 2014) bypass the analytical step entirely by seeding from a short trajectory segment and extending via parameter optimization.

## Related concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Synodic Frame (Rotating Frame)](/en/glossary/fundamentals/synodic-frame/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Differential Correction](/en/glossary/dynamics/differential-correction/)

- [Continuation](/en/glossary/dynamics/continuation/)

- [Central Manifold](/en/glossary/dynamics/center-manifold/)

- [Small Denominator](/en/glossary/fundamentals/small-denominator/)

## References

- Poincaré H. *Les méthodes nouvelles de la mécanique céleste*, Vol. II. Gauthier-Villars, 1892-1899.

- Nayfeh A H. *Perturbation Methods*. Wiley, 1973.

- Farquhar R W, Kamel A A. Quasi-periodic orbits about the translunar libration point. *Celestial Mechanics*, 1973, 7: 458-473.

- Richardson D L. Analytical construction of periodic orbits about the collinear points. *Celestial Mechanics*, 1980, 22(3): 241-253.

- Howell K C. Three-dimensional, periodic 'halo' orbits. *Celestial Mechanics*, 1984, 32(1): 53-71.

- Gómez G, Mondelo J M. The dynamics around the collinear equilibrium points of the RTBP. *Physica D*, 2001.

- Masdemont J J. High order expansions of invariant manifolds of libration point orbits with applications to mission design. *Dynamics of Continuous, Discrete and Impulsive Systems Series B*, 2005.

- Archambeau G, Pellet F, Julvez J. Analytical construction of quasi-periodic and vertical Lyapunov orbits. *Celestial Mechanics and Dynamical Astronomy*, 2011.

- Kolemen E, Kasdin N J, Girimaji P. Quasi-periodic orbits of the restricted three-body problem. *Advances in the Astronautical Sciences*, 2006.

- 喻圣贤. 深空探测中的轨道分析、设计与控制[D]. 南京大学, 2013.

- Ren Y, Shan J. A novel algorithm for generating libration point orbits about the collinear points. *Celestial Mechanics and Dynamical Astronomy*, 2014.
