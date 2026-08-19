---
title: Time of Flight (ToF) and Transfer-Time Equations
description: The duration of a transfer between two defined states, and the equations that relate it to orbital elements in the Lambert problem and to invariant-manifold geometry in the CR3BP. Covers time-to-go in explicit guidance, the universal-variable transfer-time equation, the stepped minimum-ToF law of cislunar trajectories, and the time of permanence in ballistic capture.
keywords: time of flight, ToF, transfer time, time-to-go, Lambert problem, transfer-time equation, flight-time equation, minimum ToF, ballistic capture, cislunar transfer, stable manifold
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Time of Flight (ToF) and Transfer-Time Equations
  desc: Transfer duration, Lambert's universal-variable flight-time equation, minimum-ToF stepped law, and time of permanence in ballistic capture.
  image: /logo.png
og:
  title: Time of Flight (ToF) and Transfer-Time Equations | Glossary
  description: The duration of a transfer between two defined states, and the equations that relate it to orbital elements in the Lambert problem and to invariant-manifold geometry in the CR3BP.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Time of Flight (ToF) and Transfer-Time Equations | Glossary
  description: The duration of a transfer between two defined states, and the equations that relate it to orbital elements in the Lambert problem and to invariant-manifold geometry in the CR3BP.
  image: /logo.png
permalink: /en/glossary/dynamics/tof/
---

# Time of Flight (ToF) and Transfer-Time Equations

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Time of flight** (ToF) is the time a spacecraft takes to travel between two specified states — typically two position vectors, an initial parking orbit and a target orbit, or two points on a manifold. In the Lambert problem, ToF is one of the three boundary conditions (along with the two position vectors) that select a unique conic; in the CR3BP, it is a property of the invariant-manifold trajectory chosen. **Transfer-time equation** and **flight-time equation** refer to the explicit relations that give ToF as a function of orbit parameters in Lambert-style solutions. **Time-to-go** ($t_\text{go}$) is the remaining ToF from the current state to the terminal condition, used as a parameter in explicit guidance laws. **Time of permanence** is the duration a ballistic-capture trajectory stays captured before escaping the lunar sphere of influence.

## Lambert's problem: ToF as a boundary condition

Given two position vectors $\mathbf r_0$, $\mathbf r$ and the transfer angle $\Delta\nu$ between them, Lambert's theorem states that the ToF depends only on the semi-major axis $a$, the sum $r_0 + r$, and the chord length $c = \|\mathbf r - \mathbf r_0\|$ — not on the individual orbit (Vallado 2022, §7.6). With the semiperimeter $s = (r_0 + r + c)/2$ and the variables

$$
\sin\tfrac{\alpha_e}{2} = \sqrt{\tfrac{s}{2a}}, \qquad \sin\tfrac{\beta_e}{2} = \sqrt{\tfrac{s-c}{2a}},
$$

the elliptical flight-time equation (Lagrange's form) is

$$
\Delta t = \sqrt{\tfrac{a^3}{\mu}} \big[\, 2\pi n_\text{rev} + \alpha_e - \sin\alpha_e \mp (\beta_e - \sin\beta_e)\,\big],
$$

with the sign selecting short vs. long way and $n_\text{rev}$ counting complete revolutions. This **transfer-time equation** $\Delta t = T(a)$ is what Lambert solvers iterate on: given $\Delta t$, find $a$.

The **universal-variable** form (Bate, Mueller & White; Battin 1999) replaces $\alpha_e, \beta_e$ with a universal variable $\chi$ and works uniformly across ellipse, parabola, and hyperbola:

$$
\sqrt{\mu}\,\Delta t = \tfrac{r_0 r}{\sqrt{a}} \sin\!\tfrac{\Delta\nu}{2}\, \chi + (1 - \lambda\cos\!\tfrac{\Delta\nu}{2})\,\chi^3 C(z) + \mu D(z),
$$

where $z = \chi^2/a$ and $C, D$ are Stumpff functions. Robust initial-guess schemes for $\chi$ (e.g., Thorne's transfer-angle-based estimate) keep the iteration accurate even for multi-revolution cases.

## ToF in the CR3BP: stable-manifold transfer times

In the restricted three-body problem, transfer duration is set by the geometry of the stable/unstable manifolds rather than by a Lambert conic. For transfers from the lunar surface to a halo orbit around $L_1$ or $L_2$ along the stable manifold (Alessi et al. 2009):

- **Direct transfers** (no lunar loop): ToF ≈ 10 d, of which ≈ 5 d is spent asymptotically approaching the nominal orbit; when within 1000 km of the halo orbit the relative speed is below 0.25 km/s.

- Each additional lunar loop adds ≈ 10 d.

- Integration is started when the spacecraft is 70–90 km from the reference halo orbit; without that cut-off, the manifold definition would give infinite time.

Low-energy cislunar transfers along Sun–Earth manifolds take much longer — typically 70–120 d (Parker & Anderson 2013) — but cost less $\Delta v$.

## The minimum-ToF stepped law (cislunar)

For trajectories from a minimum parking orbit (MPO, radius ≈ 0.20 in normalized units) to the lunar surface, Liang et al. (2016) computed the minimum ToF at fixed Jacobi constant $C$:

| $C$ | 2.08 | 2.28 | 2.48 | 2.68 | 2.78 | 2.88 | 2.98 | 3.08 | 3.18 |
|---|---|---|---|---|---|---|---|---|---|
| min ToF (d) | 3.13 | 3.37 | 4.25 | 4.31 | 4.80 | 30.8 | 45.9 | 41.8 | 67.4 |

The ToF does not grow smoothly with $C$ but in **steps**: ≈ 3–5 d in the direct-transfer regime ($C \le 2.78$), then a jump to 30–46 d, then to > 60 d. The jumps arise because the stable manifold of the $L_1$ Lyapunov orbit intersects the MPO only at certain periapses — when it does not intersect at the first periapsis, the spacecraft must wait through extra Keplerian twists (~11 d each, half the Keplerian period at half the Earth–Moon distance) before finding an opening (Liang et al. 2016, §4).

## Time-to-go in guidance

In explicit and optimal-guidance laws, $t_\text{go}$ is the remaining ToF from the current state to the terminal condition; it appears as a parameter in the guidance command. For time-optimal problems with a Hamiltonian structure, $t_\text{go}$ is recovered analytically from the terminal condition on the Hamiltonian (often via a quartic equation); its accuracy directly determines the precision of the issued command (Zhao et al. 2021).

## Time of permanence in ballistic capture

A **ballistic-capture** trajectory enters a temporary capture around the Moon without a insertion burn. The **time of permanence** — from the first perilune to escape from the lunar sphere of influence — quantifies the capture's quality. In the patched three-body model of Sousa-Silva, Terra & Ceriotti (2018), integrations run up to $t_\text{max} = 180$ d; capture lasting more than 90–120 d is achievable for selected Jacobi constants and perilune altitudes in the 90–400 km band. Longer permanence means more robust capture and more flexible downstream options (descent, orbit insertion, sample return).

## Related entries

- [Lambert's Problem](/en/glossary/fundamentals/lamberts-problem/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Stable/Unstable Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Ballistic Capture](/en/glossary/dynamics/ballistic-capture/)

- [Low-Energy Transfer](/en/glossary/dynamics/low-energy-transfer/)

- [Jacobi Constant](/en/glossary/dynamics/jacobi-integral/)

- [Station-Keeping](/en/glossary/dynamics/station-keeping/)

## References

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, §7.6 — Lambert problem, transfer-time/flight-time equations, multi-revolution solutions.

- Battin, 1999, *An Introduction to the Mathematics and Methods of Astrodynamics* (rev. ed.) — universal-variable formulation and Battin's Lambert algorithm.

- Alessi, Cascioli, Colombo & Lizia, 2009, "Leaving the Moon by means of invariant manifolds of libration point orbits" — manifold transfer-time statistics (direct ≈ 10 d, +10 d per loop, 5 d asymptotic phase, 0.25 km/s at 1000 km).

- Liang, Xu & Xu, 2016, "The classification of cislunar trajectories and its applications in the Earth–Moon system," *Astrophysics and Space Science* 361:230 — Table 1 of minimum ToF vs. Jacobi energy; stepped-increase mechanism via stable-manifold/MPO intersections.

- Parker & Anderson, 2013, *Low-Energy Lunar Trajectory Design* — typical ToF ranges for direct and low-energy transfers.

- Sousa Silva, Terra & Ceriotti, 2018, "Fast Earth–Moon transfers with ballistic capture," *Astrophys. Space Sci.* 363:210 — time of permanence up to 90–120 d.

- Zhao Hongqian et al., 2021, 基于动态规划的月面定点着陆快速制导方法 — time-to-go via the terminal Hamiltonian condition.
