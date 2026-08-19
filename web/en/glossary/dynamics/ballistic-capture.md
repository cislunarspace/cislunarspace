---
title: 弹道捕获（Ballistic Capture）
description: The dynamical mechanism by which a spacecraft is naturally captured by a target body's gravity without applying retro-burn impulses. Covers the Belbruno-Miller ballistic capture mechanism, energy conditions for temporary and permanent capture, weak stability boundary theory, Conley's theorem and invariant manifolds, and capture energy comparisons across different dynamical models.
keywords: ballistic capture, temporary capture, permanent capture, weak stability boundary, low-energy capture, WSB, Belbruno, Earth-Moon capture, lunar capture energy, invariant manifold, Conley theorem, Three-Body Problem
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: 弹道捕获（Ballistic Capture）
  desc: Dynamical mechanism of capture without retro-burn
  image: /logo.png
og:
  title: Ballistic Capture (弹道捕获) — In-Depth Glossary Entry
  description: The dynamical mechanism by which a spacecraft is naturally captured by a target body's gravity without applying retro-burn impulses. Covers Belbruno-Miller mechanism, temporary/permanent capture energy conditions, weak stability boundary theory, Conley's theorem, and invariant manifold relationships.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Ballistic Capture (弹道捕获) — In-Depth Glossary Entry
  description: The dynamical mechanism by which a spacecraft is naturally captured by a target body's gravity without retro-burn.
  image: /logo.png
permalink: /en/glossary/dynamics/ballistic-capture/
---

# Ballistic Capture (弹道捕获)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Ballistic capture is the mechanism by which a spacecraft, **without applying any active retro-burn impulse**, is naturally "captured" into a gravitationally bound orbit around a target body (in this context, the Moon) through the natural dynamics of the multi-body gravitational environment (Belbruno & Miller 1993; Parker & Anderson 2014). In the classical two-body orbital transfer framework, transitioning from a hyperbolic trajectory to an elliptical orbit requires a retro-burn (about 0.6--0.8 km/s of $\Delta v$ for lunar capture). Ballistic capture instead exploits solar gravitational perturbations or the natural structure of invariant manifolds to achieve capture without expending additional propellant.

Ballistic capture is not a specific orbit type but a **dynamical phenomenon**: the spacecraft's Jacobi constant slowly changes due to third-body perturbations, gradually lowering its energy from an "escapable" state to a "bound" state. Within the framework of the circular restricted three-body problem (CR3BP), this transition corresponds to the spacecraft crossing the "neck" region of the zero-velocity surfaces — the energetic gateways near the $L_1$ or $L_2$ libration points (Koon et al. 2000).

## Physical Mechanism

### Energy Regimes and Neck Opening

In the CR3BP, the spacecraft's motion is constrained by the Jacobi constant $C$. Let $C_1, C_2, C_3$ denote the Jacobi constant values at $L_1, L_2, L_3$, respectively (Earth-Moon system: $C_1 \approx 3.188$, $C_2 \approx 3.172$, $C_3 \approx 3.012$, in nondimensional units). The topology of the zero-velocity surfaces changes with $C$ (Szebehely 1967):

- $C > C_1$: The ZVS completely separates the Earth and Moon realms — no passage possible.

- $C_2 < C < C_1$: A "neck" opens at $L_1$, allowing transit between Earth and Moon realms — this is the **energy interval where ballistic capture can occur**.

- $C_3 < C < C_2$: A neck also opens at $L_2$, allowing escape to outer space.

- $C < C_3$: All passages open; the spacecraft can leave the system in any direction.

Once the spacecraft enters the lunar realm, if its energy is further lowered through third-body perturbations (primarily from the Sun) until $C > C_1$, the neck closes and the spacecraft becomes **permanently trapped** in the lunar region (Liang et al. 2016). If the energy only temporarily reaches the capture-enabled interval, a **temporary capture** occurs.

### The Belbruno-Miller Mechanism

Belbruno and Miller (1993) first demonstrated the engineering feasibility of ballistic capture in the Sun-Earth-Moon four-body problem. The key idea: after launch from Earth, the spacecraft enters a highly elliptical orbit with apogee beyond the Moon's orbit; near apogee, solar gravitational perturbation alters its angular momentum, allowing the Moon's gravity to capture it. This mechanism was used to rescue Japan's Hiten spacecraft — the probe successfully entered a lunar orbit via ballistic capture alone, saving the substantial $\Delta v$ required by conventional methods.

### Conley's Theorem and Invariant Manifolds

Conley (1968) proved a fundamental topological theorem in the CR3BP framework: **if a crossing asymptotic orbit exists, then arbitrarily close to it there exists a capture orbit**. Here, a "crossing asymptotic orbit" is an orbit lying on the invariant manifolds of Lyapunov/Halo periodic orbits around $L_1$ or $L_2$.

Giancotti et al. (2012) visualized the geometric essence of Conley's theorem using a cylindrical isomorphic mapping: the **homoclinic intersections** of stable and unstable manifold tubes form the topological boundaries separating temporary capture from permanent capture. The denser the manifold tube overlap, the higher the degree of chaos, and the wider the distribution of capture durations.

### Weak Stability Boundary (WSB)

The Weak Stability Boundary (WSB) is another capture-oriented concept introduced by Belbruno (2004). The WSB defines a fuzzy region where the spacecraft's motion is extremely sensitive to initial conditions — a small perturbation can change the outcome between capture and escape. From an engineering perspective, the WSB is the "target window" where ballistic capture occurs. Regarding the relationship between WSB and invariant manifolds, Garcia & Gómez (2007) found that within the WSB region, the spacecraft's motion can be described by the stable/unstable manifold tubes of libration point orbits; the two frameworks represent the same dynamical phenomenon through different mathematical descriptions (Li et al. 2021).

## Types of Capture

### Temporary Capture

Temporary capture refers to the phenomenon where a spacecraft orbits the secondary primary a finite number of times before ultimately escaping (Fantino et al. 2010). Its characteristics:

- The local two-body Keplerian energy relative to the secondary is temporarily negative ($E_{\text{Kep}} < 0$), meaning the spacecraft is locally "bound";

- Under multi-body perturbations, the energy gradually becomes positive or the spacecraft impacts the secondary, terminating the capture;

- Capture duration and number of revolutions depend on initial conditions — the closer the orbit is to a libration point periodic orbit (lower energy, larger $C$), the longer the capture persists.

In celestial mechanics, temporary capture explains the phenomenon of temporary Earth satellites (minimoons) — asteroids temporarily captured by Earth's gravity for months to years (Granvik et al. 2012).

### Permanent Capture

Permanent capture refers to the state where the spacecraft's Jacobi constant **permanently** exceeds $C_1$ (i.e., $C > C_1$), the neck of the zero-velocity surface closes, and the spacecraft is energetically confined within the lunar region, unable to leave without thrust (Oshima et al. 2017).

By realization method:

- **Natural permanent capture**: achieved purely through gravitational mechanisms (e.g., solar perturbations or manifold splicing) lowering the spacecraft's energy below the neck-closing threshold — impossible in CR3BP (Jacobi constant is conserved), but possible in the four-body problem (Sun-Earth-Moon) or the elliptic restricted three-body problem.

- **Thrust-assisted permanent capture**: first use ballistic mechanisms to enter the lunar region (when $C_2 < C < C_1$), then use low-thrust to gradually lower energy and increase $C$, eventually closing the neck — as in the GEO satellite end-of-life lunar disposal scheme proposed by Liang et al. (2016).

### Capture Dwell Time

The time of permanence in ballistic capture is a key metric for capture "depth." Through grid scanning on a Poincaré section, initial conditions can be classified into five categories according to their capture behavior (Sousa-Silva et al. 2018):

- **G (Good capture)**: stable multiple revolutions, ultimately remaining near the Moon

- **L (Low-altitude capture)**: small perilune distance, satisfying mission constraints

- **H (High-altitude capture)**: larger perilune distance

- **C (Collision)**: trajectory intersects the lunar surface

- **O (Out/escape)**: not captured, leaves the lunar region

Capture energy (capture $\Delta v$) is defined as the minimum velocity increment required to "pull" a spacecraft from an uncaptured trajectory into a captured state. Different dynamical models yield notably different estimates for the lunar surface capture $\Delta v$: two-body model ~695.7 m/s, Hill model ~656.8 m/s, CR3BP ~649.2 m/s, spatial bicircular model (SBCM) ~642.9 m/s (Xu 2010). Multi-body models give lower estimates because they account for third-body gravity-assist effects.

## Escape and Non-Escape Directions

The linear dynamics around a collinear libration point are characterized by four eigendirections (Renk et al. 2010):

- **Escape direction $\mathbf{u}$**: lying in the $xy$-plane, perturbations along this direction excite the exponentially growing term (tangent to the unstable manifold), causing the spacecraft to gradually depart from the libration point orbit.

- **Non-escape direction $\mathbf{s}$**: orthogonal to $\mathbf{u}$, velocity increments along this direction only change the orbit amplitude (tangent to the center manifold), without triggering exponential divergence.

In the numerical construction of ballistic capture, perturbing a libration point orbit slightly along the escape direction $\mathbf{u}$ yields the initial conditions for the unstable manifold; perturbing in the opposite direction yields the stable manifold. These two directions form the mathematical foundation for constructing capture/escape channels.

## Related Concepts

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Weak Stability Boundary (WSB)](/en/glossary/dynamics/wsb/)

- [Zero-Velocity Surface](/en/glossary/dynamics/zero-velocity-surface/)

- [Jacobi Integral](/en/glossary/dynamics/jacobi-integral/)

- [Homoclinic Connection](/en/glossary/dynamics/heteroclinic-orbit-transfer/)

- [Poincaré Section](/en/glossary/dynamics/poincare-section/)

- [Libration Point](/en/glossary/fundamentals/libration-point/)

- [Synodic Frame (Rotating Frame)](/en/glossary/fundamentals/synodic-frame/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

## References

- Belbruno & Miller, 1993, Sun-perturbed Earth-to-Moon transfers with ballistic capture, *J. Guidance, Control, and Dynamics*

- Belbruno, 2004, *Capture Dynamics and Chaotic Motions in Celestial Mechanics*, Princeton University Press

- Parker & Anderson, 2014, *Low-Energy Lunar Trajectory Design*, JPL Deep-Space Communications and Navigation Series

- Conley, 1968, Low energy transit orbits in the restricted three-body problem, *SIAM J. Applied Mathematics*

- Koon, Lo, Marsden, & Ross, 2000, Dynamical systems, the three-body problem and space mission design, *Celest. Mech. Dyn. Astron.*

- Giancotti, Pontani, & Teofilatto, 2012, Lunar capture trajectories and homoclinic connections through isomorphic mapping, *Celest. Mech. Dyn. Astron.*

- Sousa-Silva et al., 2018, Fast earth–moon transfers with ballistic capture, *Celest. Mech. Dyn. Astron.*

- Liang et al., 2016, Low-energy lunar transfer and permanent capture for GEO disposal, *Acta Astronautica*

- Fantino et al., 2010, Temporary capture in the Earth-Moon system, *Planetary and Space Science*

- Oshima et al., 2017, Permanent capture and escape in the Earth-Moon system, *Celest. Mech. Dyn. Astron.*

- 徐明 (Xu Ming), 2010, Conditions and trajectory construction for Earth-Moon low-energy transfer, *Science China*

- 李翔宇, 乔栋, 程潏 (Li, Qiao, & Cheng), 2021, Progress of three-body orbital dynamics study, *Advances in Mechanics*

- Szebehely, 1967, *Theory of Orbits: The Restricted Problem of Three Bodies*, Academic Press

- Renk et al., 2010, Exploration missions in the Sun-Earth-Moon system, *Acta Astronautica*
