---
title: Ballistic Capture
description: A capture mode in which the spacecraft's two-body (Keplerian) energy relative to the secondary primary turns from positive to negative and it becomes gravitationally bound without propulsion; Earth–Moon transfers admit only temporary capture — permanent capture requires a dissipative force; it is the arrival-end mechanism of low-energy transfers, first applied by the Hiten mission in 1991.
keywords: Ballistic Capture, temporary capture, permanent capture, low-energy transfer, weak stability boundary
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-07
wechatShare:
  title: Ballistic Capture
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Ballistic Capture Explained | Term Definition"
  description: A capture mode in which the spacecraft's two-body (Keplerian) energy relative to the secondary primary turns from positive to negative and it becomes gravitationally bound without propulsion; Earth–Moon transfers admit only temporary capture — permanent capture requires a dissipative force; it is the arrival-end mechanism of low-energy transfers, first applied by the Hiten mission in 1991.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Ballistic Capture Explained | Term Definition"
  description: A capture mode in which the spacecraft's two-body (Keplerian) energy relative to the secondary primary turns from positive to negative and it becomes gravitationally bound without propulsion; Earth–Moon transfers admit only temporary capture — permanent capture requires a dissipative force; it is the arrival-end mechanism of low-energy transfers, first applied by the Hiten mission in 1991.
  image: /logo.png
permalink: /en/glossary/orbits/ballistic-capture/
---

# Ballistic Capture

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition and Energy Criterion

Ballistic capture is the process in which a spacecraft's Keplerian energy H_k relative to some body turns from zero (or positive) to negative, binding it to that body's gravity without propulsion (Belbruno & Miller 1993; Topputo 2013's definition: two-body energy H₂≤0 relative to the secondary primary). A capture orbit has no hyperbolic excess speed V_∞ at perilune, so the energy needed to stabilize the capture afterwards drops sharply. Operational definition: entering within the Moon's Hill radius (about 60,000 km) under natural dynamics and completing at least one revolution around the Moon counts as ballistic capture by the Moon, after which a small ΔV achieves stable capture (Ross 2022). Note that the capturing body is the **secondary primary** (the Moon in the Earth–Moon system).

## Temporary and Permanent Capture

- **Temporary ballistic capture**: H₂≤0 over some time interval and positive outside it (Topputo 2013). The unstable manifolds of libration point orbits govern temporary capture, and the smaller the parent orbit (the larger the Jacobi value), the more revolutions are captured (Fantino 2010).
- **Permanent capture**: H₂≤0 forever after some finite time (Topputo 2013). **In the Earth–Moon transfer framework only temporary ballistic capture can occur; permanent capture requires a dissipative force** (such as aerobraking or propulsion).
- Stabilizing a ballistic capture into a permanent one costs markedly less than a Hohmann maneuver (Xu 2010).

## Dynamical Mechanism

- **Conley classification (Conley 1968)**: by long-term behavior relative to the libration-point neck region, orbits divide into oscillating (crossing infinitely many times), asymptotic (approaching an unstable periodic orbit), capture (crossing sometimes but never again after some finite time; for a libration point between the two bodies, an orbit eventually captured by one of them), and other classes; theorem: near any asymptotic orbit crossing the neck there exist capture orbits (Conley himself noted that such asymptotic orbits had not yet been proven to exist at the time).
- **Capture and escape arcs (Pergola 2010)**: in the context of a Uranian-moon tour: the capture arc is built from the stable manifold of a moon's L2 point, drawing the spacecraft in from the outer region into multiple closed revolutions around the moon; it then leaves naturally via the heteroclinic connection from the L2 stable manifold to the L1 unstable manifold, bound for the next moon. Stays last from a few days to nearly a month, with the revolution count and duration depending on the perturbation parameter of the manifold computation.

## Capture Windows and Lunar-Surface Capture

For a WSB transfer via an LL2-halo transit, the capture/escape window is jointly determined by the solar phase angle β and the halo-orbit phase τ, and the usable set is very small (Xu 2010). Lunar-surface capture energy (the ΔV needed for permanent capture into a surface-grazing lunar orbit with perilune radius r_p=1738 km): 695.7 m/s in the two-body model, 656.8 m/s in the Hill model, 649.2 m/s in the CR3BP, and a minimum of 642.9 m/s in the bicircular four-body model; solar perturbation lowers the capture energy below the three-body value (Xu 2010).

## Genealogy and Missions

- **Ballistic genealogy to the lunar surface (Anderson & Parker 2012)**: ballistic trajectories from Earth to the lunar surface form a continuous spectrum: flight times run from 3.4 days for Apollo-style direct transfers to 101 days for low-energy transfers; with solar perturbation, Earth-originating trajectories exist up to Jacobi constant C≈3.16 (without the Sun, none exist above C=2.8); most of the lunar surface is physically reachable.
- **Missions**: Hiten (1991, first ballistic-capture transfer); GRAIL (2011, twin spacecraft inserted into lunar orbit directly from low-energy transfers in sequence); ARTEMIS (2010, a nearly ballistic transfer including a series of orbit-raising maneuvers, lunar flybys, and correction maneuvers, not strictly thrust-free; Folta 2012).

## Non-Ballistic Contrasts

- **Low-thrust spiral capture (Kluever 1995)**: the final leg of an optimal low-thrust LEO→LLO transfer: continuous low-thrust braking along a shrinking spiral into the target low lunar orbit (a three-phase profile: Earth-escape spiral → trans-lunar coast → lunar-capture spiral). It is low-thrust capture, not ballistic capture.
- **Non-ballistic capture (Wang 2025, the WSB paper)**: a capture mode in DRO capture trajectories where the two-body energy stays above zero: at lower Jacobi energy the trajectory lingers outside the DRO for a while before the final capture, entering in a non-ballistic way.

## Terminology Variants

| Term | Meaning | Source |
|------|---------|--------|
| Ballistic-capture transfer | Earth–Moon transfer ending in ballistic capture | Belbruno & Miller 1993 |
| Capture orbit | One class in Conley's long-term-behavior classification | Conley 1968 |
| Temporary / permanent ballistic capture | H₂≤0 over a finite / infinite time interval | Topputo 2013 |
| Capture arc / escape arc | Arc entering along the L2 stable manifold / leaving along the L1 unstable manifold | Pergola 2010 |
| Ballistic lunar-surface trajectory | Spectrum of ballistic Earth-to-surface trajectories (3.4–101 days) | Anderson & Parker 2012 |
| Lunar capture window | Set of capture epochs determined by solar phase and halo phase | Xu 2010 |
| Non-ballistic capture | DRO capture mode with two-body energy above zero | Wang 2025 |

## Related Concepts

- [Low-Energy Transfer](/en/glossary/orbits/low-energy-transfer/)
- [Weak Stability Boundary Transfer Trajectory](/en/glossary/orbits/weak-stability-boundary-transfer-trajectory/)
- [Lyapunov Orbit](/en/glossary/orbits/lyapunov-orbit/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/distant-retrograde-orbit-dro/)

## References

- Conley, 1968, Low energy transit orbits in the restricted three-body problem
- Belbruno & Miller, 1993, Sun-perturbed Earth-to-Moon transfers with ballistic capture
- Kluever & Pierson, 1995, Optimal low-thrust three-dimensional Earth–Moon trajectories
- Fantino et al., 2010, A note on libration point orbits, temporary capture and low-energy transfers
- Pergola et al., 2010, Three-body invariant manifold transition with electric propulsion
- Belbruno, Gidea & Topputo, 2010, Weak stability boundary and invariant manifolds
- Xu, 2010, Onset conditions and trajectory construction of Earth–Moon low-energy transfers
- Anderson & Parker, 2012, Survey of ballistic transfers to the lunar surface
- Folta et al., 2012, ARTEMIS transfer trajectory design study
- Topputo, 2013, On optimal two-impulse Earth–Moon transfers in a four-body model
- Ross et al., 2022, Dynamical Systems, the Three-Body Problem, and Space Mission Design
- Wang et al., 2025, Mechanism and characteristics analysis of weak stability boundary transfers to the 2:1 DRO
