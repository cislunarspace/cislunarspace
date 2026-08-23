---
title: Solar-Perturbation Lunar Gravity Assist (Forward/Backward LGA)
description: In the bicircular restricted four-body problem, the Moon's orbit around the Earth–Moon barycenter divides the synodic frame into quadrants in which solar perturbation either increases ("forward", quadrants II/IV) or decreases ("backward", quadrants I/III) the spacecraft's Earth-Moon Jacobi energy and mechanical energy, enabling or suppressing low-energy DRO insertion. Defines the energy coordinate system and the energy trend that must be matched at the WSB-to-DRO handoff.
keywords: forward lunar gravity assist, backward lunar gravity assist, solar-perturbation lunar gravity assist, Jacobi energy, mechanical energy, BCR4BP, WSB transfer, low-energy DRO, quadrant
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Solar-Perturbation Lunar Gravity Assist (Forward/Backward LGA)
  desc: Solar perturbation acts in opposite signs in different quadrants of the energy coordinate system, switching the spacecraft's Jacobi energy up or down.
  image: /logo.png
og:
  title: Solar-Perturbation Lunar Gravity Assist (Forward/Backward LGA) Explained | Term Definition
  description: In the bicircular restricted four-body problem, the Moon's orbit around the Earth–Moon barycenter divides the synodic frame into quadrants in which solar perturbation either increases ("forward", quadrants II/IV) or decreases ("backward", quadrants I/III) the spacecraft's Earth-Moon Jacobi energy and mechanical energy, enabling or suppressing low-energy DRO insertion.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Solar-Perturbation Lunar Gravity Assist (Forward/Backward LGA) Explained | Term Definition
  description: In the bicircular restricted four-body problem, the Moon's orbit around the Earth–Moon barycenter divides the synodic frame into quadrants in which solar perturbation either increases ("forward", quadrants II/IV) or decreases ("backward", quadrants I/III) the spacecraft's Earth-Moon Jacobi energy and mechanical energy, enabling or suppressing low-energy DRO insertion.
  image: /logo.png
permalink: /en/glossary/dynamics/solar-perturbation-lga/
---

# Solar-Perturbation Lunar Gravity Assist (Forward/Backward LGA)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

In the bicircular restricted four-body problem (BCR4BP), solar gravity is a *time-periodic* perturbation on the Earth-Moon CR3BP. The derivative of the spacecraft's Earth-Moon mechanical energy $E$ with respect to time has a definite sign over most of the orbital plane:

$$
\frac{dE}{dt} = \mu(1-\mu)\,y\left(\frac{1}{r_1^3} - \frac{1}{r_2^3}\right)
$$
(Wang et al. 2025, Eq. 8), where $\mu$ is the Earth-Moon mass ratio and $r_1$, $r_2$ are the distances to Earth and Moon. Using $x = 0.5 - \mu$ and $y = 0$ as the coordinate axes, the plane is divided into four quadrants. The sign of $dE/dt$ is **positive in quadrants II and IV** and **negative in quadrants I and III** (and nearly zero far from any massive body). Wang et al. (2025) call this coordinate system the *mechanical energy coordinate system*.

Because $E + C/2$ equals (up to a constant) the angular momentum $H$ (Wang et al. 2025, Eq. 10), $C$ and $H$ vary together with $E$. We therefore label:

- **Forward lunar gravity assist**: flight through quadrants II and IV, where solar perturbation *raises* $E$, $C$, and $H$ and lifts the perigee;

- **Backward lunar gravity assist**: flight through quadrants I and III, where solar perturbation *lowers* $E$, $C$, and $H$ and drops the perigee.

Forward and backward here refer to the *direction of the energy trend under solar perturbation*, not to the spacecraft's sense of motion around the Moon (see the separate [prograde/retrograde](/en/glossary/dynamics/lunar-flyby/) classification). Assist is used in the sense of an *energy-trend label* rather than a literal flyby event.

## Why the Sun, not the Moon, is the driver

Inside the Earth-Moon sphere of influence the spacecraft's Keplerian energy with respect to either the Earth or the Moon is conserved to two-body accuracy; gravity-assist energy exchange happens *at the encounter*. Solar gravity is different: it acts continuously, and in the BCR4BP it is the term that makes $E$ and $C$ non-constant. The Moon's role is to *route* the spacecraft through a chosen quadrant sequence: a lunar encounter can flip the spacecraft from a backward quadrant into a forward quadrant, switching the sign of $dE/dt$ and thus the energy trend. Low-energy transfer design exploits precisely this routing.

## Application notes

- **Low-energy DRO insertion.** For 2:1 DRO insertion via WSB, Wang et al. (2025) identify the *low-energy transfer gateway (LEGT)*, the energy-and-geometry region a WSB return trajectory must satisfy if it is to admit a low-impulse DRO insertion. About 73.6% of candidate trajectories that pass the LEGT filter are feasible, versus under 1% for a naive grid search, which is the practical payoff of quadrant-aware forward/backward analysis.

- **Phase partitioning.** The transfer is split into three phases (Earth-Moon transfer where LGA *reduces* departure energy, Sun-Earth WSB transfer where forward quadrants do the work, and DRO low-energy capture), each with its own dominant dynamics and its own energy-trend expectation.

- **Handoff.** At the WSB-to-DRO handoff the spacecraft must arrive with $E$ in roughly $[-1/3, -1/5]$ (the energy range of the WSB region) and with a compatible angular-momentum sign. A trajectory that returns through backward quadrants is unsuitable for low-energy DRO insertion and can be filtered out before expensive numerical optimization.

## Common confusions

- Forward/backward LGA is sometimes read as fore/aft of the Moon or prograde/retrograde flyby: both wrong. The axis is the *sign of the solar-perturbation energy trend in the mechanical-energy coordinate system*, which is set by *which synodic quadrant the spacecraft is in*, not by the geometry of the lunar encounter itself.

- The energy $E$ here is *not* the Keplerian two-body energy about the Earth or the Moon; it is the Earth-Moon synodic-frame energy defined by Wang et al. (2025, Eq. 6), which in two-body limits reduces to the usual Keplerian form but in the BCR4BP carries the integrated effect of solar gravity.

## Related Concepts

- [Lunar Flyby and Lunar Gravity Assist](/en/glossary/dynamics/lunar-flyby/)

- [Bicircular Restricted Four-Body Problem (BCR4BP)](/en/glossary/dynamics/bcr4bp/)

- [Weak Stability Boundary (WSB)](/en/glossary/dynamics/wsb/)

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Low-Energy Transfer Gateway (LETG)](/en/glossary/dynamics/low-energy-transfer/)

- [Distant Retrograde Orbit (DRO)](/en/glossary/programs/dro/)

- [Synodic Frame](/en/glossary/fundamentals/synodic-frame/)

## References

- Wang M., Zhang C., Zhang H., 2025, "Mechanism analysis of the DRO low-energy transfer problem: an energy perspective," Lect. Notes Eng. (defines the mechanical-energy coordinate system, the quadrant division, the LEGT, and the forward/backward classification)

- Peng et al., 2024, "Low-Energy Transfers to Lunar Distant Retrograde Orbits from Geostationary Transfer Orbits," J. Spacecraft and Rockets, doi:10.2514/1.A35623