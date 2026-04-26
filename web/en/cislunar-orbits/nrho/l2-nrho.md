---
title: L2 Near-Rectilinear Halo Orbit
description: Geometric characteristics, dynamic constraints, and farside communication applications of Earth-Moon L2 Near-Rectilinear Halo Orbit.
keywords: L2 NRHO, L2 halo orbit, Earth-Moon L2 point, lunar farside communication
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/nrho/l2-nrho/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

# L2 Near-Rectilinear Halo Orbit

## Position and Geometry

The Earth-Moon L2 libration point is located on the Earth-Moon line, extending outward from the barycenter, at approximately 115% of the Earth-Moon distance from Earth (about 448,800 km). Like L1, L2 is also an equilibrium point where Earth's and the Moon's gravitational forces balance, but it lies on the exterior side of the Moon.

The geometry of the L2 NRHO is similar to that of the L1 NRHO: the spacecraft oscillates back and forth near the L2 point along a near-rectilinear trajectory in the rotating frame. The primary difference from L1 NRHO lies in its gravitational environment — L2 is on the farside of the Moon, farther from Earth and closer to deep space, which directly affects its communication, telemetry, and radiation environment.

## Comparison with L1 NRHO

| Property | L1 NRHO | L2 NRHO |
|----------|----------|----------|
| Distance from Earth | ~326,400 km | ~448,800 km |
| One-way Communication Delay | ~1.1 s | ~1.5 s |
| Lunar Farside Coverage | Moderate | Excellent (located on farside) |
| Solar Radiation Interference | Moderate | Higher |
| Typical Applications | cislunar transit, gateway docking | Lunar farside communication, relay |

## Dynamic Characteristics

The dynamic constraints of L2 NRHO are essentially the same as those of L1 NRHO: the existence of the orbit family is constrained by the Jacobi constant $C_J$ conservation in the CR3BP. However, because the gravitational potential barrier at L2 is weaker (farther from the Moon), L2 NRHO is typically slightly more sensitive to perturbations than L1 NRHO, especially showing more significant response to solar gravitational perturbations.

L2 NRHO also exhibits a dipole frozen inclination. Its stability analysis requires numerical validation using high-precision ephemeris models (JPL DE440 or higher).

## Design Constraints

The design constraints for L2 NRHO are similar to those for L1 NRHO, with additional considerations:
1. **Solar Interference**: The L2 direction is more susceptible to solar activity, and the effect of solar radiation pressure on orbit maintenance requires dedicated modeling
2. **Communication Geometry**: L2 NRHO provides better coverage of the lunar farside than L1, but Earth visibility may be obstructed by the Moon during certain orbital phases
3. **Transfer Corridors**: Transfer corridor design from L2 NRHO to the lunar south/north poles must account for lunar surface shadow cycles

## Lunar Farside Communication Applications

The primary application value of L2 NRHO lies in its ability to provide continuous communication coverage for lunar farside missions. Since L2 itself is in the farside direction of the Moon, spacecraft on L2 NRHO can:
- Have continuous visibility of the lunar farside (except for a few rare near-lunar shadow zones)
- Provide data relay for lunar farside landers such as Chang'e-4/6
- Support continuous observation of lunar surface resources and communication relay

## Simulation Experiments

You can set L2 NRHO initial conditions in the [Satellite Orbit Simulation Laboratory](/satellite-simulation/) to compare orbital characteristics with L1 NRHO.
