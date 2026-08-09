---
title: Amplitude Condition & Effective Phase (振幅条件与有效相位)
description: The amplitude-phase parameterization framework for Lissajous/Halo orbits near CR3BP libration points: the in-plane amplitude $A_x$ and out-of-plane amplitude $A_z$ are coupled by Richardson's third-order nonlinear amplitude constraint $l_1 A_x^2 + l_2 A_z^2 + \Delta = 0$ to yield a Halo periodic solution; the effective phases $(\Phi, \Psi)$ map the four-dimensional Lissajous torus onto a two-dimensional Effective Phases Plane (EPP), enabling simplified maneuver design and eclipse avoidance analysis.
keywords: Amplitude Condition, Effective Phase, EPP, Effective Phases Plane, Richardson third-order solution, Halo orbit, Lissajous orbit, in-plane amplitude, out-of-plane amplitude, amplitude correction maneuver, LOEWE, eclipse avoidance
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Amplitude Condition & Effective Phase
  desc: CR3BP Lissajous/Halo orbit amplitude-phase parameterization — from Richardson constraint to the EPP.
  image: /logo.png
og:
  title: Amplitude Condition & Effective Phase — Detailed Definition
  description: The amplitude-phase parameterization framework for CR3BP Lissajous/Halo orbits: in-plane and out-of-plane amplitudes coupled by Richardson's third-order constraint to form a Halo periodic solution; effective phases map the 2-torus to the EPP for maneuver design and eclipse avoidance.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Amplitude Condition & Effective Phase — Detailed Definition
  description: CR3BP Lissajous/Halo orbit amplitude-phase parameterization — from Richardson constraint to the EPP.
  image: /logo.png
permalink: /en/glossary/dynamics/amplitude-condition/
---

# Amplitude Condition & Effective Phase (振幅条件与有效相位)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## What Is the Amplitude Condition?

The linearized motion near CR3BP libration points decomposes into two approximately independent harmonic oscillations: one in the xy-plane and one out of plane. The in-plane frequency is $\omega$ and the out-of-plane frequency is $\nu$ — these are generally incommensurable, giving Lissajous-type trajectories as the linear approximation (Richardson 1980).

Halo-type periodic orbits require the in-plane and out-of-plane frequencies to become equal after nonlinear corrections. When Richardson (1980) constructed the third-order analytical approximation using the Lindstedt-Poincaré method, secular terms appeared in the third-order z-equation that could not be eliminated through frequency expansion alone. To complete a secular-term-free third-order expansion, a nonlinear algebraic constraint must be imposed between the in-plane amplitude $A_x$ and the out-of-plane amplitude $A_z$ — this is the **amplitude condition** (Richardson 1980):

$$
l_1 A_x^2 + l_2 A_z^2 + \Delta = 0 \tag{18}
$$

where $l_1$, $l_2$, and $\Delta$ are constant coefficients determined by the libration point position and the mass parameter $\mu$ (specific values are given in Richardson 1980, Appendix I; tabulated values for Sun-Earth libration points are in the paper's table). This condition implies that **$A_x$ and $A_z$ are not independent parameters** — choosing one constrains the other. When the amplitude condition is not satisfied, the orbit degenerates into a non-closed Lissajous-type trajectory with incommensurable in-plane and out-of-plane frequencies, rather than a periodic Halo orbit.

The amplitude condition also has two branches (n = 1 and n = 3), distinguished by the switch function $\delta_n = 2-n$ in the phase-angle constraint $\psi = \phi + n\pi/2$ — this corresponds to the bifurcation into the Northern and Southern Halo orbit families (Richardson 1980). Changing the sign of $A_z$ switches from the Northern to the Southern family.

The amplitude condition determines the minimum permissible $A_x$ for Halo orbits: when $A_z = 0$, $A_{x,\min} = \sqrt{-\Delta/l_1}$. For the Sun-Earth $L_1$ point, $A_{x,\min}$ is about 14% of the normalized distance, corresponding to approximately 200,000 km (Richardson 1980).

## In-Plane and Out-of-Plane Amplitudes

Collectively, the two amplitude parameters of libration point orbits:

- **In-plane amplitude** $A_x$: the maximum excursion of a Lissajous/Halo orbit in the xy-plane (the orbital plane of the synodic frame), directly determining the spatial extent in the x-direction and the y-direction ($y_{\max} = \bar{k} A_x$, where $\bar{k}$ is a linear-system constant).

- **Out-of-plane amplitude** $A_z$: the maximum vertical oscillation of the orbit in the z-direction, determining how far the orbit rises above the libration point's orbital plane.

Canalias and Masdemont (2008) showed that in the Sun-Earth system, Lissajous orbits with large in-plane amplitude (above $\sim 10^5$ km) and small out-of-plane amplitude (below $\sim 1.5 \times 10^5$ km) are best suited as target orbits for cross-system (Sun-Earth to Earth-Moon) transfers, because the invariant manifolds of such orbits more readily allow low-$\Delta v$ inter-system patching.

## Effective Phase and the Effective Phases Plane (EPP)

Belló et al. (2010) observed that the solution for a Lissajous orbit (and the linear approximation of Halos) takes the form:

$$
\begin{aligned}
x(t) &= A_x \cos(\omega t + \phi), \\
y(t) &= \bar{k} A_x \sin(\omega t + \phi), \\
z(t) &= A_z \cos(\nu t + \psi).
\end{aligned}
$$

The CR3BP is autonomous, so the origin of time is arbitrary. This leads to a key insight: when the amplitudes $A_x$, $A_z$ are fixed, resetting time $t \to t - t_0$ is equivalent to phase shifts $\phi \to \phi + \omega t_0$, $\psi \to \psi + \nu t_0$. Hence one defines:

- **In-plane effective phase** $\Phi = \omega t + \phi \pmod{2\pi}$,

- **Out-of-plane effective phase** $\Psi = \nu t + \psi \pmod{2\pi}$,

which collapse time and the original phases into two angular variables. On a Lissajous orbit of given amplitudes, the state $(\vec{r}, \vec{v})$ is in one-to-one correspondence with the effective phase pair $(\Phi, \Psi)$. From a dynamical-systems perspective, a Lissajous orbit is a 2D torus, and $\Phi$, $\Psi$ are precisely its action-angle variables (Belló et al. 2010).

The **Effective Phases Plane (EPP)** is the 2D plane with coordinates $(\Phi, \Psi)$. In the EPP:

- A Lissajous trajectory is a straight line of slope $\nu/\omega$ (approximately 0.966–0.965 for Sun-Earth $L_1$/$L_2$) that propagates with constant velocity components $\omega$ and $\nu$ in the $\Phi$ and $\Psi$ directions — when compactly represented in $[0, 2\pi] \times [0, 2\pi]$, it becomes a periodically wrapping segmented line.

- An exclusion zone (e.g., the 3° solar disk cone for Sun-Earth $L_1$, or the Earth's penumbra disk for $L_2$) appears in the EPP as quasi-elliptic closed curves. **The time to eclipse is simply proportional to the distance from the current point to the first intersection of the trajectory line with an exclusion-zone curve** — converting eclipse prediction from a high-dimensional integration problem into a geometric calculation (Belló et al. 2010).

### Maneuver Design via the EPP

In the EPP framework, an in-plane maneuver (xy-plane impulse) changes the in-plane effective phase $\Phi$, while an out-of-plane maneuver (z-direction impulse) changes the out-of-plane effective phase $\Psi$, without altering the amplitudes (i.e., $A_x$, $A_z$ unchanged):

$$
\phi_f - \phi_i = -2(\omega t_m - \beta + \phi_i) \pmod{2\pi}, \quad
\psi_f - \psi_i = -2(\nu t_m + \psi_i) \pmod{2\pi}
$$

where $\beta$ is a fixed directional angle determined by the linear-system constants $c$ and $\bar{k}$. This is the mathematical foundation of Belló et al.'s **LOEWE** (Lissajous Orbit Ever Without Eclipse) strategy: performing a single-impulse maneuver near the corners of the Lissajous figure in the yz-projection (where velocities are smallest) can skip the exclusion zone without changing the orbit amplitudes. For a Lissajous orbit of the size used in the Sun-Earth Herschel/Planck mission, this strategy requires only about 15 m/s every 6 years (Belló et al. 2010).

### Amplitude Correction Maneuver

When the Lissajous orbit reached via a zero-cost transfer (natural manifold entry) deviates significantly from the target amplitudes, an **amplitude correction maneuver** is required. In the EPP framework, the z-impulse to correct the out-of-plane amplitude from $A_z^{(i)}$ to $A_z^{(f)}$ is given by (Belló et al. 2010):

$$
\frac{\Delta \dot{z}}{\nu} = A_z^{(i)} \sin(\nu t_m + \psi_i) \pm \sqrt{A_z^{(f)2} - A_z^{(i)2} \cos^2(\nu t_m + \psi_i)}
$$

Increasing amplitude ($A_z^{(f)} \ge A_z^{(i)}$) is possible at any time; decreasing amplitude is possible only when the current z-position does not exceed the target amplitude. The optimal maneuver epoch satisfies $\nu t_m + \psi_i = \pi/2 + k\pi$, where the minimum fuel cost is $|A_z^{(f)} - A_z^{(i)}|$. In-plane amplitude correction follows an analogous pattern, but additionally requires constraining the unstable mode ($A_1$ component) to zero (Canalias and Masdemont 2008; Belló et al. 2010).

## Related Concepts

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Lissajous Orbit](/en/glossary/orbits/lissajous-orbit/)

- [Lindstedt-Poincaré Method](/en/glossary/fundamentals/lindstedt-poincare-method/)

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Action-Angle Variables](/en/glossary/dynamics/canonical-variables/)

## References

- Richardson, 1980, Analytic construction of periodic orbits about the collinear points (derivation of the amplitude condition $l_1 A_x^2 + l_2 A_z^2 + \Delta = 0$, third-order analytical solution expressions, tabulated coefficient values for Sun-Earth libration points)

- Belló et al., 2010, Invariant manifolds, Lagrangian trajectories and space mission design, Ch. 5 (definition of effective phases and the EPP, LOEWE eclipse avoidance strategy, amplitude correction maneuver formulas)

- Canalias and Masdemont, 2008, Computing natural transfers between Sun–Earth and Earth–Moon Lissajous libration point orbits, Acta Astronautica (impact of in-plane/out-of-plane amplitudes on cross-system transfer suitability)
