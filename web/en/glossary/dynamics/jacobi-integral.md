---
title: Jacobi Integral (Jacobi Constant)
description: The only known analytic integral of the Circular Restricted Three-Body Problem (CR3BP) in the synodic frame, C = 2Ω − v², obtained by dotting the equations of motion with the velocity. Also called the Jacobi constant, Jacobi energy, C_J or J. Larger C means lower energy; the critical values C₁…C₅ at the libration points give five energy thresholds that delimit accessible regions in cislunar space.
keywords: Jacobi integral, Jacobi constant, Jacobi energy, C_J, pseudo-potential, effective potential, CR3BP, zero-velocity surface, Tisserand parameter, cislunar
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Jacobi Integral (Jacobi Constant)
  desc: The only conserved quantity of the CR3BP, C = 2Ω − v². Larger C means lower energy.
  image: /logo.png
og:
  title: "Jacobi Integral | The Only Conserved Quantity of the CR3BP"
  description: The only known analytic integral of the Circular Restricted Three-Body Problem (CR3BP) in the synodic frame, C = 2Ω − v², obtained by dotting the equations of motion with the velocity.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Jacobi Integral | The Only Conserved Quantity of the CR3BP"
  description: The only known analytic integral of the Circular Restricted Three-Body Problem (CR3BP) in the synodic frame, C = 2Ω − v².
  image: /logo.png
permalink: /en/glossary/dynamics/jacobi-integral/
---

# Jacobi Integral (Jacobi Constant)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Jacobi integral is the only known analytic integral of the Circular Restricted Three-Body Problem (CR3BP) in the synodic frame, given by Jacobi in 1836. Its integration constant $C$ — the Jacobi constant, also written $C_J$, or $J$ under a different sign convention (see below) — reads, in non-dimensional units (distance unit = primary separation, $\omega=1$):

$$C \;=\; 2\Omega(x,y,z) - v^2 \;=\; (x^2+y^2) + \frac{2(1-\mu)}{r_1} + \frac{2\mu}{r_2} - (\dot x^2+\dot y^2+\dot z^2),$$

where $\mu=m_2/(m_1+m_2)$ is the mass parameter, $r_1$, $r_2$ are distances to the two primaries, and $v$ is the spacecraft speed in the synodic frame (Vallado 2022, Eq. 12-15; Szebehely 1967, §1.6). Vallado calls it a "pseudo-integral" — not because the derivation is suspect, but because it exists only in the synodic frame and only for the restricted problem.

The sign of $C$ is opposite to that of energy: larger $C$ means lower total energy and a more confined trajectory; smaller $C$ means higher energy and broader accessibility.

## Derivation: the Coriolis term does no work

The CR3BP equations of motion (non-dimensional) read
$$\ddot{\mathbf r} + 2\,\hat{\mathbf z}\times\dot{\mathbf r} = \nabla\Omega,$$
where $\nabla\Omega$ collects gravitational and centrifugal terms, while the Coriolis term $2\hat{\mathbf z}\times\dot{\mathbf r}$ is shown explicitly. Dotting both sides with $\dot{\mathbf r}$:

$$\dot{\mathbf r}\cdot\ddot{\mathbf r} + \underbrace{\dot{\mathbf r}\cdot(2\hat{\mathbf z}\times\dot{\mathbf r})}_{=0} = \dot{\mathbf r}\cdot\nabla\Omega = \frac{d\Omega}{dt}.$$

The Coriolis force is always perpendicular to the velocity and does no instantaneous work, so it drops out. The remainder integrates at once to $v^2 = 2\Omega - C$ (Vallado 2022, §12.7.1; Szebehely 1967, §1.6). The deeper reason a conserved quantity exists at all is that the synodic-frame equations are autonomous — in any inertial frame the same derivation fails.

## The effective potential $\Omega$ and its many names

$\Omega$ has two parts: the centrifugal potential $\tfrac12(x^2+y^2)$ plus the gravitational potentials $(1-\mu)/r_1 + \mu/r_2$ of the two primaries. Across this family it appears under at least five names, all denoting the same $\Omega$:

- **Effective potential** — the standard term, emphasizing that, having absorbed the centrifugal contribution, the equations reduce to $\ddot{\mathbf r}+2\hat{\mathbf z}\times\dot{\mathbf r}=\nabla\Omega$.

- **Pseudo-potential / pseudopotential** — historical, because the centrifugal contribution is not a true gravitational potential.

- **Effective pseudo-potential** — a hybrid of the two.

A common slip is to fold the Coriolis force into $\Omega$. **It is not**: the Coriolis force does no work and does not appear in $\Omega$; it remains only as a velocity-coupling term in the equations of motion. The level surfaces $\Omega=C/2$ are the [zero-velocity surfaces](/en/glossary/dynamics/zero-velocity-surface/); the stationary points of $\Omega$ give the five [libration points](/en/glossary/dynamics/libration-point/).

## Notation and sign conventions

At least three notational conventions coexist in the literature — trust the formula, not the symbol:

| Symbol | Definition | Direction | Range (Earth-Moon) | Used by |
|---|---|---|---|---|
| $C$, $C_J$ | $C=2\Omega-v^2$ | large = low energy | $[2.988,+\infty)$ | Szebehely 1967; Vallado 2022; Parker & Anderson 2014 |
| $J$ | $J=\Omega-\tfrac12 v^2=-C/2$ | large = high energy | $(-\infty,1.494]$ | Mingotti et al. 2011; Sánchez & Yárnoz 2016 |
| $E_{\text{rot}}$ | $E_{\text{rot}}=\tfrac12 v^2-\Omega=J$ | large = high energy | same as $J$ | Scott 2010 (uses "C" but means $J$) |

"Jacobi energy" is merely a colloquial name for $C$ or $J$, not a new concept; this glossary folds it into the present entry.

## Critical values $C_i$ and accessible regions

Setting the velocity to zero at the five [libration points](/en/glossary/dynamics/libration-point/) gives five critical Jacobi constants $C_i = 2\Omega(L_i)$. Values for the Earth-Moon ($\mu=0.01215$) and Sun-Earth ($\mu=3.04\times10^{-6}$) systems (Parker & Anderson 2014, Table 2-2):

| Libration point | Earth-Moon $C_i$ | Sun-Earth $C_i$ |
|---|---|---|
| $L_1$ | 3.188341 | 3.000898 |
| $L_2$ | 3.172161 | 3.000894 |
| $L_3$ | 3.012147 | 3.000003 |
| $L_4=L_5$ | 2.987997 = $3-\mu(1-\mu)$ | 2.999997 |

They satisfy $C_1>C_2>C_3>C_4=C_5$ and stratify spacecraft by energy: $C>C_1$ locks the spacecraft into one of three disconnected regions (near Earth, near Moon, or exterior); $C_2<C<C_1$ opens the $L_1$ neck for Earth-Moon transfers; $C<C_2$ opens $L_2$ for access to deep space; $C\le C_4$ opens the entire space. The topology transitions are detailed under [zero-velocity surface](/en/glossary/dynamics/zero-velocity-surface/).

## Engineering applications

### Hard constraint on transfer feasibility

$C$ is the first-order criterion for where a spacecraft can reach on dynamics alone (no $\Delta v$): to reach the Moon from low Earth orbit one must reduce $C$ below $C_1$; to reach beyond $L_2$ one must go below $C_2$. The art of low-energy cislunar transfer is, in essence, finding the right instant and the smallest $\Delta v$ that takes $C$ from its LEO value (about $3.44$, Earth-gravity-dominated) to just under $C_1 \approx 3.188$.

### The $\Delta C$ vs $\Delta v$ relation

For an impulsive maneuver at a fixed position ($\Omega$ unchanged), $C=2\Omega-v^2$ gives at once
$$\Delta C = -2\,\mathbf v\cdot\Delta\mathbf v.$$
Corollaries (same direction as the two-body $\Delta E=\mathbf v\cdot\Delta\mathbf v$):

1. $\Delta C$ is opposite in sign to $\mathbf v\cdot\Delta\mathbf v$ — reducing $C$ (raising energy) requires $\Delta v$ along the velocity.
2. The change in $C$ per unit $|\Delta v|$ is largest where speed is largest — maneuvers near periapsis are more efficient than near apoapsis.
3. $|\Delta C|$ is maximized when $\Delta\mathbf v$ is aligned with $\mathbf v$.

This relation underlies the choice of maneuver points in two- and four-impulse cislunar transfers (Qiao & Yang 2024). Under continuous low-thrust the differential form is $\dot C = -2\,\mathbf a_T\cdot\mathbf v$, with the same "most efficient at high speed" conclusion (Scott 2010, Eq. 5.9, under the sign convention noted above).

### The Tisserand parameter: estimating $J$ from orbital elements

Before and after a planetary encounter, a comet's or asteroid's heliocentric elements $(a,e,i)$ are linked to the same $J$ approximately by the Tisserand parameter:
$$J \;\approx\; \frac{a_p}{a} + 2\cos i\,\sqrt{\frac{a}{a_p}(1-e^2)},$$
with $a_p$ the perturbing planet's semi-major axis. The relation follows from the Jacobi integral of the restricted problem in the far-encounter limit (Murray & Dermott 1999, §3.4; Sánchez & Yárnoz 2016, Eq. 2). It is used to re-identify the same comet across encounters or to screen asteroids as temporary-capture candidates.

### Numerical-integration fidelity check

In CR3BP numerical integration $C$ should be exactly conserved; the drift $|C(t)-C_0|$ is one of the hardest diagnostics of integrator error and is used as a stopping criterion in differential correction (the "Jacobi constant error constraint"). Trajectory refinement in a high-fidelity ephemeris model (Dei Tos & Topputo 2017) and libration-point stationkeeping (target point method) both grade a solution by the magnitude of $C$-drift.

### Continuation parameter for periodic-orbit families

When tracing families of [Halo](/en/glossary/orbits/halo-orbit/), [Lyapunov](/en/glossary/orbits/lyapunov-orbit/), [Lissajous](/en/glossary/orbits/lissajous-orbit/) or [NRHO](/en/glossary/orbits/nrho/) orbits by numerical continuation, $C$ is the most natural one-parameter continuation variable — one either fixes $C$ and solves for a periodic orbit, or fixes an amplitude and traces $C$ along the family, exposing bifurcations.

## Related concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)

- [Libration Point](/en/glossary/dynamics/libration-point/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

## References

- Szebehely V. *Theory of Orbits: The Restricted Problem of Three Bodies.* Academic Press, 1967, §1.6, Ch. 4.

- Vallado D. A. *Fundamentals of Astrodynamics and Applications.* 5th ed., 2022, §12.7.

- Parker J. S., Anderson R. L. *Low-Energy Lunar Trajectory Design.* JPL, 2014, Ch. 2, Table 2-2.

- Murray C. D., Dermott S. F. *Solar System Dynamics.* Cambridge Univ. Press, 1999, §3.4 (Tisserand criterion).

- Sánchez J. P., García Yárnoz D. "Asteroid retrieval missions enabled by invariant manifold dynamics." *Acta Astronautica*, 2016.

- Scott C. J. *Transfer and Capture into Distant Retrograde Orbits.* Ph.D. thesis, Purdue, 2010, §5.3.

- Mingotti G., Topputo F., Bernelli-Zazzera F. "Optimal low-thrust invariant manifold trajectories via attainable sets." *JGCD*, 2011.

- Qiao C., Yang L. Design and optimization of low-energy transfers to Earth-Moon $L_1$. 2024.
