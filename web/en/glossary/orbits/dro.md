---
title: Distant Retrograde Orbit (DRO)
description: Detailed analysis of the definition, dynamic characteristics, resonance relationships, stability analysis, and applications in cislunar space of the Distant Retrograde Orbit (DRO)
keywords: Distant Retrograde Orbit, DRO, Distant Retrograde Orbit, cislunar orbit, resonance orbit, orbital stability, orbital design
author: Tianjiang Shuo
date: 2026-04-04
lastUpdated: 2026-06-05
wechatShare:
  title: Distant Retrograde Orbit (DRO)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Distant Retrograde Orbit (DRO) Details | Key Mission Orbit in Cislunar Space
  description: Detailed analysis of the definition, dynamic characteristics, resonance relationships, stability analysis, and applications in cislunar space of the Distant Retrograde Orbit (DRO)
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Distant Retrograde Orbit (DRO) Details | Key Mission Orbit in Cislunar Space
  description: Detailed analysis of the definition, dynamic characteristics, resonance relationships, stability analysis, and applications in cislunar space of the Distant Retrograde Orbit (DRO)
  image: /logo.png
permalink: /en/glossary/orbits/dro/
---

# Distant Retrograde Orbit

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A Distant Retrograde Orbit (DRO) is a **stable periodic orbit** around the Moon in the Circular Restricted Three-Body Problem (CRTBP). In the synodic reference frame, a DRO moves in the opposite direction to the Moon's orbit around Earth, hence the term "retrograde" orbit.


![DRO Orbit Schematic](../../glossary/figures/dro/dro-schematic.png)
*DRO orbit shape in the Earth-Moon synodic reference frame*


![Schematic of barycentric rotating reference frame and DRO orbit](../../glossary/figures/dro/barycentric-frame-and-dro-schematic.png)
*Geometric configuration of DRO in the barycentric rotating reference frame*



## Geometric Characteristics

In the synodic reference frame, a planar DRO appears as an approximately elliptical closed curve with the Moon as its geometric center. Its main parameters are:

- **$x$-direction amplitude $A_x$**: The distance from the intersection of the orbit with the Earth-Moon line to the Moon, which is the primary parameter describing the DRO configuration
  - When $A_x$ is small, the DRO is close to the Moon, approximating a circular lunar orbit
  - As $A_x$ increases, the DRO moves farther from the Moon, and the orbit shape evolves from nearly circular to an ellipse with significant eccentricity
- **$z$-direction amplitude $A_z$**: Introducing a $z$-direction amplitude yields a three-dimensional non-planar DRO, which exhibits both retrograde motion within the $xOy$ plane and periodic oscillation in the $z$ direction

## Resonance Relationships

DROs exhibit resonance relationships with the Moon's orbital period. When the DRO's orbital period $T$ and the Moon's orbital period $T_M$ satisfy $T/T_M \approx n/m$ (where $n$ and $m$ are positive integers), it is referred to as an $m:n$ resonant DRO.

| Resonance Ratio | Characteristics |
|:---|:---|
| 1:1, 2:1 (low-order resonance) | Closer to the Moon, with stronger stability |
| 3:1, 4:1 (high-order resonance) | Farther from the Moon, larger orbital amplitude, providing greater potential energy advantage for transfers to cislunar space |

For example, a 2:1 resonant DRO has an orbital period approximately half that of the Moon's orbital period -- meaning the spacecraft completes two orbits around the Moon for every one orbit the Moon completes around Earth.

## Dynamic Symmetry

In the CRTBP, DROs exhibit dynamic symmetry about the $x$-axis: when the orbit crosses the $x$-axis, there is only a $y$-direction velocity component $\dot{y}_0$, while the $y$-direction position and the $x$ and $z$ direction velocities are all zero. This symmetry means that one only needs to select an initial point on the $x$-axis, use $\dot{y}_0$ and period $T$ as free variables, integrate for half a period, and verify whether the orbit returns to the $x$-axis -- enabling iterative convergence to a closed periodic orbit.

## Orbital Parameter Characteristics

For the Earth-Moon system, the main parameter ranges of the DRO family (based on the dynamic catalog statistics by Guzzetti et al.) are as follows:

| Parameter | Range |
|:---|:---|
| Jacobi constant | 1.4352 – 3.0180 (mean 2.1184) |
| Orbital period | 5.87 – 27.38 days (mean 24.63 days) |
| Stability index | 1.0000 – 1.0002 (mean 1.0001) |

The stability index of DROs is extremely close to 1.0, indicating that this orbit family possesses exceptional long-term stability and is one of the very few naturally stable periodic orbits in cislunar space.

## Behavior in Ephemeris Models

In perturbative environments such as ephemeris models, where celestial body positions change over time, DROs no longer maintain strict periodicity and evolve into **quasi-periodic orbits** that wind within a limited region. Their trajectories do not close, but the overall shape remains stable.

## Operational Cost Analysis

### Orbit Insertion from LEO

Departing from a 300 km altitude LEO, typical transfer schemes to DRO include:

- **Direct two-impulse transfer**: Consisting of only two impulsive maneuvers — one departing from LEO and one inserting into DRO. The direct transfer flight time is approximately 5.4 – 7.2 days.
- **Lunar gravity-assist three-impulse transfer**: An additional midcourse maneuver is added at a 200 km lunar pericenter altitude, leveraging lunar gravity to reduce the total ΔV cost.

Studies by Guzzetti et al. have shown that DRO direct insertion ΔV (ΔV_POI) is among the lowest of all libration point orbits and lunar-centered orbits, averaging on the order of hundreds of m/s. This makes DRO one of the most accessible cislunar orbits from LEO.

### Station-Keeping Cost

DRO station-keeping costs are extremely low:

- Long-term station-keeping strategy assessments based on Monte Carlo simulations show that DRO annual average ΔV requirements are only on the order of a few m/s.
- Station-keeping maneuvers are typically executed at or near x-axis crossings, where implementation is operationally convenient and costs approach the global optimum.
- The exceptional stability of DROs means that even with initial state errors (1 km position, 1 cm/s velocity standard deviation) and maneuver execution errors (1% standard deviation), the orbit maintains good characteristics over extended periods.

## Application Value

With excellent long-term stability (requiring no or only minimal orbital maneuvers to maintain) and advantageous orbital position, DROs have become the preferred mission orbit for cislunar space infrastructure. Application scenarios include:

- **Situation awareness constellation** deployment
- **Cislunar space navigation system** networking
- **Deep space relay communications**
- **Material storage and strategic station-keeping**

NASA's Lunar Reconnaissance Orbiter (LRO) mission has validated the application value of DROs in lunar exploration. Recent research has shown that non-planar DROs with $z$-direction amplitude can avoid solar eclipses, further improving observer effectiveness.

In the dynamic catalog framework proposed by Guzzetti et al., DROs are listed as preferred candidate orbits for long-term space infrastructure near the Moon. Key advantages include:

- **Favorable geometric configuration**: Close to the Moon, facilitating lunar surface operations and communications
- **Low maintenance cost**: Exceptional stability minimizes station-keeping budget
- **Low insertion cost**: Direct transfer ΔV from LEO is relatively low
- **Accessibility**: Moderate flight time (~5.4 – 7.2 days), suitable for crewed missions

## Application in A2PPO Low-Thrust Transfer Research

Ul Haq et al. (2026) used the A2PPO (Attention-Augmented Proximal Policy Optimization) algorithm to investigate autonomous low-thrust transfers from L₂ NRHO to lunar DRO (Scenario S3):

- **Departure orbit**: L₂ southern NRHO ($C_J \approx 3.0395$, period 6.99 days)
- **Target orbit**: Lunar DRO ($C_J \approx 2.9981$, period 6.95 days)
- **Transfer result**: 7.60 days, consuming 5.10 kg of propellant
- **Transfer characteristics**: Forms a lunar gravity-assist structure; the orbit gradually transitions from prograde to retrograde

Transfers between NRHO and DRO represent a challenging problem in low-thrust trajectory optimization: the two orbits lie in different dynamical corridors with no simple manifold connection paths. Without requiring an initial guess, A2PPO autonomously learned a transfer trajectory that closely matches the direct collocation method result (7.63 days / 5.11 kg).

## Related Concepts
- [Near-Rectilinear Halo Orbit (NRHO)](/en/glossary/orbits/nrho/)
- [Earth-Moon L1/L2 Halo Orbits (EML1/EML2 Halo)](/en/glossary/orbits/eml-halo/)
- [Distant Prograde Orbit (DPO)](/en/glossary/orbits/dpo/)
- [Low Prograde Orbit (LoPO)](/en/glossary/orbits/lopo/)
- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)
- [Ephemeris Model](/en/glossary/dynamics/ephemeris-model/)
- [A2PPO (Attention-Augmented Proximal Policy Optimization)](/en/glossary/dynamics/a2ppo/)
- [Starshade](/en/glossary/other/starshade/)
- [Birkhoff-Gustavson Normal Form](/en/glossary/dynamics/birkhoff-gustavson/)
- [Poincaré Section](/en/glossary/dynamics/poincare-section/)
- [Resonance Orbit](/en/glossary/orbits/resonance-orbit/)
- [Quasi-periodic Orbit](/en/glossary/orbits/quasi-periodic-orbit/)

## Core Elements

### Orbital Definition

Distant Retrograde Orbit (DRO) is a stable periodic orbit around the Moon in the CRTBP, moving in the opposite direction to the Moon's orbit around Earth in the synodic reference frame. Key parameters include the x-direction amplitude $A_x$ (describing orbit configuration) and z-direction amplitude $A_z$ (enabling three-dimensional non-planar DROs).

### Dynamic Characteristics

- **Long-term stability**: Requires no or only minimal orbital maneuvers to maintain
- **Resonance relationships**: Exhibits 1:1, 2:1, 3:1, etc. resonance ratios with the Moon's orbital period
- **Dynamic symmetry**: Symmetric about the x-axis; when crossing the x-axis, only the y-direction velocity component exists
- **Ephemeris model behavior**: Evolves into quasi-periodic orbits winding within a limited region

### Design Methods

- **Initial condition acquisition**: Exploit dynamic symmetry by selecting initial points on the x-axis, using $\dot{y}_0$ and period $T$ as free variables for iterative convergence
- **Continuation method**: Continuation from 1:1 resonant small-amplitude DRO to higher-order resonant large-amplitude DRO
- **Ephemeris model conversion**: Transfer CR3BP orbits to ephemeris models via the two-level differential correction method

## References

- Whitley R, Martinez R. Options for staging orbits in cislunar space[C]. 2016.
- Broucke R. Periodic orbits in the restricted three-body problem with Earth-Moon masses[R]. 1968.
- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
- Genszler G, Savransky D, Soto G J. Surveying orbits in cislunar space for telescope-starshade observatories[J]. 2026.
- Qiao C, Long X, Yang L, et al. Orbital parameter characterization and objects cataloging for Earth-Moon collinear libration points[J]. Chinese Journal of Aeronautics, 2025. doi: 10.1016/j.cja.2025.103869.
- Ul Haq I U, Dai H, Du C. Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning[J]. Aerospace Science and Technology, 2026.
- Guzzetti D, Bosanac N, Howell K C. A framework for efficient trajectory comparisons in the Earth-Moon design space[C]. AAS/AIAA Space Flight Mechanics Meeting, 2014.
- Folta D, Bosanac N, Guzzetti D, et al. An Earth-Moon system trajectory design reference catalog[C]. 2nd IAA Conference on Dynamics and Control of Space Systems, 2014.
