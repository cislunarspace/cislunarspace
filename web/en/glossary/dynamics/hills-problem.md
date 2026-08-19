---
title: Hill's Problem
description: The small-mass-ratio limit of the circular restricted three-body problem (CR3BP), introduced by George W. Hill in 1878 for lunar theory. The third body's motion is referenced to the smaller primary and explicit solar tidal terms appear in the equations of motion. Covers two derivations of Hill's equations, the Hill variation orbit and zero-velocity curves, the connection to Clohessy-Wiltshire relative motion, and the model's modern roles in cislunar and planet-moon dynamics.
keywords: Hill's Problem, Hill equation, Hill sphere, Hill radius, Hill's curves, variation orbit, Clohessy-Wiltshire, CW equations, relative motion equations, zero-velocity curves
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Hill's Problem
  desc: The classical small-mass-ratio limit of the CR3BP — common root of lunar theory, relative motion and libration-point dynamics.
  image: /logo.png
og:
  title: Hill's Problem Explained | Cislunar Dynamics
  description: The small-mass-ratio limit of the CR3BP, introduced by G. W. Hill in 1878. Covers derivations of Hill's equations, the variation orbit, zero-velocity curves, the Clohessy-Wiltshire connection, and modern applications.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hill's Problem Explained | Cislunar Dynamics
  description: The small-mass-ratio limit of the CR3BP, introduced by G. W. Hill in 1878. Covers derivations of Hill's equations, the variation orbit, zero-velocity curves, the Clohessy-Wiltshire connection, and modern applications.
  image: /logo.png
permalink: /en/glossary/dynamics/hills-problem/
---

# Hill's Problem

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

**Hill's problem** is the small-mass-ratio limit $\mu\to 0$ of the circular restricted three-body problem (CR3BP), taken in a neighbourhood of the smaller primary (e.g. the Earth). George William Hill introduced it in 1878 to study the Moon's motion (Hill 1878; Szebehely 1967, §10.4). The construction amounts to three simplifications:

1. Set the solar parallax to zero (the Sun lies at infinity, its gravity a uniform tidal field).
2. Set the solar orbital eccentricity to zero (circular heliocentric orbit).
3. Set the lunar orbital inclination to zero (coplanar motion).

Under these assumptions the third body's (Moon or spacecraft) equations of motion relative to the smaller primary are autonomous in a frame co-rotating with the primaries' mean motion, and admit a periodic symmetric special solution — the **variation orbit** — that Hill used as the first non-conic intermediate orbit in his lunar theory.

## Equations of Motion

### Derivation as the CR3BP limit

In the [synodic frame](/en/glossary/fundamentals/synodic-frame/) the CR3BP reads (see [CR3BP](/en/glossary/dynamics/cr3bp/))

$$
\ddot{\vec r}+2\vec\omega\times\dot{\vec r}+\vec\omega\times(\vec\omega\times\vec r)=-\frac{\mu_1}{r_1^3}\vec r_1-\frac{\mu_2}{r_2^3}\vec r_2.
$$

Shift the origin to $P_2$ (the smaller primary) with $\vec\rho=\vec r-\vec r_2$ and let $\mu=m_2/(m_1+m_2)\ll 1$. Taylor-expand the gravity of $P_1$ about $P_2$ in the local regime $|\vec\rho|\ll|\vec r_2|$, keep terms through order $\mu^{2/3}$, and one obtains the canonical Hill problem (Szebehely 1967, §10.4; Scheeres 1998):

$$
\ddot{x}-2n\dot{y}=\Omega_x,\qquad \ddot{y}+2n\dot{x}=\Omega_y,\qquad \ddot{z}=\Omega_z,
$$

$$
\Omega(x,y,z)=\frac{\mu_2}{r}+\frac{3}{2}n^2 x^2,\qquad r=\sqrt{x^2+y^2+z^2},
$$

with $n$ the primaries' mean motion and $\mu_2=Gm_2$. Only the tidal term in $x$ survives in the potential — this is precisely the "solar tide" in the $\mu\to 0$ limit.

### Derivation from the full three-body equations

Hill started directly from the Sun-Earth-Moon three-body equations (Szebehely 1967, §10.4.2). The Moon's equation relative to the Earth reads

$$
\ddot{\vec\rho}_M+\frac{G(m_E+m_M)}{|\vec\rho_M|^3}\vec\rho_M=-Gm_S\!\left[\frac{\vec\rho_M-\vec\rho_S}{|\vec\rho_M-\vec\rho_S|^3}+\frac{\vec\rho_S}{|\vec\rho_S|^3}\right],
$$

where the right-hand side is the difference between the Sun's pull on the Moon and on the Earth. Expanding $1/|\vec\rho_M-\vec\rho_S|$ in multipoles under $|\vec\rho_S|\gg|\vec\rho_M|$ and keeping the leading (tidal, second-order) term recovers the same Hill equations — showing that Hill's problem is essentially Earth-Moon motion under the first-order solar tide.

## Jacobi Integral and Hill's Curves

The Hill problem admits a Jacobi integral

$$
C_H = 2\Omega - v^2,
$$

formally identical to the [Jacobi constant of the CR3BP](/en/glossary/dynamics/jacobi-integral/), except $\Omega$ now contains only $\mu_2/r+3n^2x^2/2$. Setting $v=0$ gives Hill's curves of zero velocity in the $xy$ plane — the iconic "figure-eight":

- For large $C_H$ the curve closes around the Earth, confining the Moon to a bounded region (Hill's original proof of the boundedness of the Earth-Moon distance).
- As $C_H$ drops to a critical value, two "necks" open at $L_1$ and $L_2$ along the $x$-axis, through which the Moon may escape or be captured.
- Lowering $C_H$ further opens the curve completely.

The neck locations $x=\pm r_H$ define the **Hill radius**

$$
r_H = \left(\frac{\mu_2}{3n^2}\right)^{1/3}.
$$

It is the geometric ruler of the smaller primary's gravitational sphere of influence: for the Earth-Moon system $r_H\approx 6.16\times 10^4$ km ($\approx 0.16$ Earth-Moon distances); equivalent values characterize the Jupiter-Ganymede, Mars-Phobos, and similar systems. The [instantaneous Hill boundary](/en/glossary/dynamics/hills-problem/) generalises this static picture to time-varying third-body gravity (e.g. the pulsating Sun perturbation), defining an "effective libration point" that oscillates in time.

## Variation Orbit and Hill's Equation

The periodic symmetric special solution of Hill's problem with the Moon's sidereal period is the **variation orbit**. Hill used it as an intermediate orbit and studied deviations from it. Let $\eta$ be a small displacement along some direction; linearising about the variation orbit gives

$$
\ddot{\eta}+\theta(t)\eta=0,
$$

where $\theta(t)$ has the same period as the variation orbit. This is the original form of **Hill's equation**. Hill analysed its stability band with the celebrated infinite determinant he invented, establishing the stability of the lunar month. Lyapunov and Poincaré's characteristic-exponent theory grew out of this work.

Note that "**Hill's equation**" in mathematical physics is a broad class of second-order linear equations with periodic coefficients of the form $\ddot\eta+\theta(t)\eta=0$ (the Mathieu equation is a special case). In the cislunar literature the term may refer to (a) Hill's 1878 variational equation, or (b) the Clohessy-Wiltshire relative-motion equations below. Context decides.

## Connection to the Clohessy-Wiltshire Equations

Treating the larger primary as the target and the third body as the chaser, and linearising about a circular reference orbit, gives the **Clohessy-Wiltshire equations** (a.k.a. CW equations, Hill relative-motion equations; Clohessy & Wiltshire 1960; Vallado 2022, §6.8):

$$
\ddot{x}-2n\dot{x}-3n^2 x = f_x,\quad \ddot{y}+2n\dot{x}=f_y,\quad \ddot{z}+n^2 z=f_z,
$$

with $(x,y,z)$ the chaser's LVLH coordinates, $n$ the target orbit rate, and $\vec f$ a control acceleration. The CW equations are linearisation of the Hill problem about a circular orbit, and share the same Coriolis-plus-centrifugal-plus-tidal structure — only the origin has moved from the larger primary to the in-orbit target. They are the standard tool for LEO [formation flying](/en/glossary/dynamics/spacecraft-formation-flying/) and rendezvous analysis.

Caveat: when the target eccentricity is large, the altitude is low, or the formation extends to kilometre scale, the CW circular-orbit assumption degrades rapidly (Vallado 2022 §6.8.3).

## Role and Connection to the CR3BP

Hill's problem is the $\mu\to 0$ limit of the CR3BP, accurate for the Earth-Moon system ($\mu\approx 0.01215$) and the Sun-Earth system ($\mu\approx 3\times 10^{-6}$). It plays several roles:

- **Foundation of lunar theory**: the Hill-Brown-De Sitter precision lunar theories all use the variation orbit as their intermediate orbit.
- **Satellite stability criterion**: the Hill radius is the basic scale for satellite stability; the topological opening of the Hill curves at $L_1/L_2$ bounds the stable range of distant retrograde orbits (DROs).
- **Libration-point neighbourhood dynamics**: local behaviour near Earth-Moon $L_1$ and $L_2$ becomes analytically tractable in the Hill limit; the Richardson third-order expansion for Halo/Lyapunov orbit families is built on the linearised Hill problem.
- **Numerical continuation**: Hill-problem periodic orbit families are common starting points for $\mu$-continuation back to the full CR3BP, then onwards to ephemeris models — a standard workflow for [resonance](/en/glossary/dynamics/orbital-resonance/) and [libration-point orbit](/en/glossary/orbits/halo-orbit/) design.
- **Four-body extension**: Scheeres (1998) generalised Hill's problem with two tidal terms into the "restricted Hill four-body problem" for Sun-perturbed Earth-Moon spacecraft motion.

## Application Notes

- **Stability estimation**: $r_H$ gives the geometric upper bound for stable satellite motion; the lunar sphere of influence follows the same formula.
- **DRO and libration-point orbit design**: Hill's problem serves as an analytic toy model for assessing family topology and stability-index trends with parameters.
- **Relative-motion analysis**: the CW equations are a fast analytical tool for near-circular relative motion, transitioned to a full force model via [differential correction](/en/glossary/dynamics/differential-correction/).

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)
- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)
- [Libration Point](/en/glossary/fundamentals/libration-point/)
- [Spacecraft Formation Flying](/en/glossary/dynamics/spacecraft-formation-flying/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)

## References

- Hill, G. W. (1878). Researches in the lunar theory. *American Journal of Mathematics*, 1(1), 5–26.
- Szebehely, V. (1967). *Theory of Orbits: The Restricted Problem of Three Bodies*, Chapter 10. Academic Press.
- Clohessy, W. H., & Wiltshire, R. S. (1960). Terminal guidance system for satellite rendezvous. *Journal of the Aerospace Sciences*, 27(9), 653–658.
- Scheeres, D. J. (1998). The restricted Hill four-body problem with applications to the Earth–Moon–Sun system. *Celestial Mechanics and Dynamical Astronomy*, 70(2), 75–98.
- Vallado, D. A. (2022). *Fundamentals of Astrodynamics and Applications*, 5th ed., §6.8 (Hill's / Clohessy-Wiltshire equations).
- Hénon, M. (1969). Numerical exploration of the restricted problem, V: Hill's case. *Astronomy & Astrophysics*, 1, 223–238.
