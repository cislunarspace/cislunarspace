---
title: Spacecraft Formation Flying
description: A multi-spacecraft mission concept where satellites maintain a prescribed relative geometry (distance and/or orientation) for a shared objective — interferometry, deep-space imaging, communications relay. Distinct from constellations (coverage-driven) and clusters (no precise relative geometry).
keywords: spacecraft formation flying, formation keeping, formation reconfiguration, relative motion, libration point formation, DRO formation, inertial-frame-fixed formation, LQR formation control, ultra-close formation, natural formation
sharingurl: 
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Spacecraft Formation Flying
  desc: Multi-spacecraft flight with prescribed relative geometry — libration point, DRO, and cislunar dynamics.
  image: /logo.png
og:
  title: "Spacecraft Formation Flying Explained | Term Definition"
  description: A multi-spacecraft mission concept where satellites maintain a prescribed relative geometry — categories by reference frame and scale, natural vs. controlled formations, and cislunar applications.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Spacecraft Formation Flying Explained | Term Definition"
  description: A multi-spacecraft mission concept where satellites maintain a prescribed relative geometry — categories by reference frame and scale, natural vs. controlled formations, and cislunar applications.
  image: /logo.png
permalink: /en/glossary/dynamics/spacecraft-formation-flying/
---
# Spacecraft Formation Flying

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Spacecraft **formation flying** is a mission concept in which multiple spacecraft maintain a prescribed relative geometry (fixed or time-varying mutual distances and pointing directions) to collectively accomplish a single scientific or engineering objective (interferometry, deep-space imaging, communications relay, etc.).

It is **not** a **constellation** (multiple satellites on diverse orbital planes for coverage, e.g., GNSS) and not a **cluster/swarm** (spatially proximate but without a precisely required relative geometry). A formation demands actively or passively bounded relative motion between members: the relative position vector between chief and deputy must satisfy a prescribed envelope over time.

Formation flying reduces the per-element manufacturing complexity and mission risk compared to a monolithic spacecraft: a failure in one member does not necessarily abort the entire mission (Catlin & McLaughlin 2007). It also yields configurable distributed apertures unobtainable with a single platform.

## Categories by Reference Frame

Marchand & Howell (2005) classify formation configurations by the reference frame in which the relative geometry is specified:

1. **Formation fixed relative to the inertial frame**: The relative position vector between chief and deputy remains constant in an inertial (ECI, for example) frame. Because the rotating-frame components vary over time, maintaining this configuration in a multi-body environment requires persistent control; it is a non-natural formation (Marchand & Howell 2005).

2. **Formation fixed relative to the rotating frame**: The relative position vector is constant in the rotating (synodic) frame. Near the libration points, spacecraft tend not to naturally maintain this geometry: active control is required.

3. **Distance tracking**: Only the scalar distance between members is prescribed, not the full vector direction. This is the least constrained formation type and can sometimes exploit natural dynamics.

## Categories by Scale

- **Ultra-close formation** (≤ 100 m): Demands high-precision relative sensing and milli-Newton-class thrust capability. Conventional chemical or electric thrusters may contaminate neighboring spacecraft via plume impingement; Coulomb-force formations (charge-spacecraft interaction) have been investigated as an alternative for ultra-close regimes.

- **Close formation** (1–100 km): The typical scale for libration-point interferometry missions (TPF, Darwin, MAXIM). Allows optical or RF relative navigation to achieve centimeter- to meter-level relative position accuracy.

- **Loose formation** (> 1000 km): Members experience sufficiently different dynamics that precise relative geometry is not required; natural drift bounds the separation over timescales of interest.

## Natural Formations vs. Controlled Formations

**Natural formations** exploit the inherent multi-body dynamics. Héritier & Howell (2014) showed that regions along a reference trajectory can be identified in the inertial frame where the variation of mutual distance and pointing direction is minimal. These regions approximate quadric surfaces; their characteristics are linked to the eigenstructure (Floquet modes) of the reference orbit.

Barden & Howell (1998) and Barden, Howell & Lo (1996) discovered a six-spacecraft natural formation existing on the center manifold near the Sun–Earth $L_1$/$L_2$ libration points. In such formations, relative distances remain bounded without active control over many orbital periods: the control cost is essentially station-keeping for the reference orbit alone.

A **natural companion formation** is a specific case in DRO vicinity: the deputy is placed at an initial condition satisfying the linearized relative periodicity condition, so that it follows the chief along the DRO with bounded relative motion, at separations from meters to hundreds of kilometers (张如悦 et al. 2025).

**Controlled (non-natural) formations** require active force to counter the natural divergence driven by the unstable eigenmode of the reference orbit. Techniques surveyed by Marchand & Howell (2005):

- **Linear Quadratic Regulator (LQR)** applied to the time-varying linearized dynamics $\delta\dot{x}(t) = A(t)\delta x(t)$ along the reference orbit. The differential Riccati equation must be integrated concurrently with the reference trajectory.

- **Feedback linearization**: Input or output feedback linearization cancels the nonlinear gravitational terms and applies LQR to the residual linear system. Effective near libration points where net gravity is weak.

- **Sliding mode control (SMC)** and Model Predictive Control (Capannolo et al. 2023) have also been applied to formation reconfiguration near halo orbits.

## Formation Keeping, Stationkeeping, and Reconfiguration

- **Formation configuration keeping**: Maintaining the prescribed relative geometry after initial deployment. The controller is usually low-thrust but continuous. Performance metrics include baseline relative error, per-axis position error, and propellant consumption.

- **Stationkeeping**: A broader term covering both the maintenance of the absolute reference orbit and the relative configuration constraints. For DRO formations, the sensitivity of relative motion to navigation errors and the frequency of control cycles must be traded (敖海跃 et al. 2024).

- **Reconfiguration**: Moving the deputy from one formation point to another within the formation. An analytical **safe transfer formation** design guarantees that the inter-vehicle distance exceeds the safety threshold throughout the transfer, with a simpler structure than full optimal control but practical engineering utility.

- **Ultra-close control**: Below ~100 m, plume contamination is critical; Coulomb force or micro-electric propulsion are candidate technologies.

## Particularities of Libration Point Formations

Libration-point reference trajectories (halo, Lissajous, quasi-halo, NRHO) are themselves unstable or weakly stable. The relative motion of formation members is dominated by the same unstable Floquet mode, so the Hill–Clohessy–Wiltshire (two-body near-circular) equations **cannot** be naively applied. Instead, the full time-varying CR3BP variational equations must be used (Marchand & Howell 2005; Scheeres & Vinh 2003).

The Terrestrial Planet Finder (TPF), Darwin, and MAXIM missions spurred extensive formation flight research. Gómez et al. (2001, 2002) simulated formation flight near $L_2$ for TPF and derived zero-relative-radial-acceleration cones suitable for controlled formations (Gómez et al. 2005).

**Triangular point formations**: Catlin & McLaughlin (2007) derived the analytical relative-motion solution near the Earth–Moon $L_4$/$L_5$ points. The long-period and short-period modes can be independently selected (by appropriate initial conditions) to design parallel and leader–follower formations. Total range error in the analytical model is under 3% of the maximum motion amplitude. Perturbation analysis indicates that solar gravity and solar radiation pressure are significant; Earth oblateness is negligible in the Earth–Moon $L_4$ region.

## Cislunar Applications

- **DRO close-range formations**: 张如悦 et al. (2025) investigated relative orbit determination for a 2:1 DRO chief–deputy formation using inter-satellite ranging and optical angle data. With a well-determined chief orbit, all three schemes achieve 10 m relative position accuracy and sub-mm/s velocity accuracy. When the chief orbit is poorly determined, the scheme combining ranging and optical angles improves relative position accuracy to 13 m with minute-level convergence.

- **Lunar navigation constellation formations**: The Tiandu-1/2 technology demonstration satellites fly in lunar-orbit formation to validate inter-satellite links.

- **Libration-point formations**: Sun–Earth $L_2$ interferometry missions remain the most mature formation-flight concept in multi-body regimes.

## Related Concepts

- [Relative Motion](/en/glossary/dynamics/relative-motion/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Libration Point](/en/glossary/dynamics/libration-point/)

- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

- [Distant Retrograde Orbit (DRO)](/en/glossary/programs/dro/)

- [NRHO (Near Rectilinear Halo Orbit)](/en/glossary/orbits/nrho/)

## References

- Clohessy, W. H., Wiltshire, R. S., 1960, Terminal Guidance System for Satellite Rendezvous, *Journal of the Aerospace Sciences*, 27(9): 653–674.

- Barden, B. T., Howell, K. C., 1998, Fundamental motions near collinear libration points and their transitions, *J. Astronautical Sciences*, 46(4): 361–378.

- Marchand, B. G., Howell, K. C., 2005, Control strategies for formation flight in the vicinity of the libration points, AAS 03-113, *J. Guidance, Control, Dyn.*, 28(6): 1210–1219.

- Catlin, K. A., McLaughlin, C. A., 2007, Earth–Moon triangular libration point spacecraft formations, *J. Guidance, Control, Dyn.*, 30(2): 563–574.

- Héritier, A., Howell, K. C., 2014, Dynamical evolution of natural formations in libration point orbits in a multi-body regime, *Acta Astronautica*, 102: 81–94.

- Gómez, G., et al., 2001, Simulation of formation flight near L2 for the TPF mission, AAS 01-305.

- Gómez, G., et al., 2005, Zero relative radial acceleration cones and controlled motions suitable for formation flying, *J. Astronautical Sciences*, 53(4): 413–431.

- Capannolo, A., et al., 2023, Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment, *J. Guidance, Control, Dyn.*, 46(8): 1538–1552.

- 张如悦 等, 2025, 地月空间DRO近距离编队星间测量相对定轨, *航空学报*, 46(10): 2146.

- 敖海跃 等, 2024, DRO编队轨道保持研究.

- Vallado, D.A., 2022, *Fundamentals of Astrodynamics and Applications*, 5th ed., Microcosm Press, §6.8.

- Scheeres, D.J., Vinh, N.X., 2003, Stabilizing motion relative to an unstable orbit: applications to spacecraft formation flight, *J. Guidance, Control, Dyn.*, 26(1): 62–73.