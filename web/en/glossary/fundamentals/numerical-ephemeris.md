---
title: Numerical Ephemeris (and the Full Ephemeris Model)
description: Tabulated positions and velocities of solar-system bodies from high-precision numerical integration, stored as Chebyshev-polynomial coefficients and interpolated on demand. JPL's DE series (DE430, DE440) is the de facto standard. Covers the analytical-ephemeris alternative and the "full/high-fidelity ephemeris model" used to validate CR3BP designs in a real N-body environment.
keywords: numerical ephemeris, analytical ephemeris, JPL DE, DE430, DE440, Chebyshev polynomial, full ephemeris model, high-fidelity force model, planetary ephemeris, cislunar mission design
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Numerical Ephemeris (and the Full Ephemeris Model)
  desc: JPL DE-series ephemerides, Chebyshev storage, and the full N-body ephemeris model used to validate cislunar trajectories.
  image: /logo.png
og:
  title: Numerical Ephemeris | Glossary
  description: Tabulated positions and velocities of solar-system bodies from high-precision numerical integration, stored as Chebyshev-polynomial coefficients. JPL's DE series is the standard; the full ephemeris model brings CR3BP designs into a real N-body environment.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Numerical Ephemeris | Glossary
  description: Tabulated positions and velocities of solar-system bodies from high-precision numerical integration, stored as Chebyshev-polynomial coefficients. JPL's DE series is the standard; the full ephemeris model brings CR3BP designs into a real N-body environment.
  image: /logo.png
permalink: /en/glossary/fundamentals/numerical-ephemeris/
---

# Numerical Ephemeris (and the Full Ephemeris Model)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A **numerical ephemeris** is a tabulated dataset of the position and velocity of solar-system bodies (Sun, Moon, planets), produced by numerically integrating the relativistic N-body equations of motion and fitting the result to observations. The de facto source is NASA/JPL's Development Ephemeris series (DE430, DE440 for modern work; DE405 in older literature). An **analytical ephemeris**, in contrast, expresses body positions as closed-form series expansions of the orbital elements; it is fast and storage-free but lacks the precision needed for cislunar work. The term **full ephemeris model** (or **high-fidelity ephemeris model**) refers to the force model obtained when the equations of motion of a spacecraft are integrated together with the true positions of all relevant bodies read from a numerical ephemeris.

## Numerical vs. analytical ephemerides

Analytical theories (e.g., Newcomb's tables, Brown's lunar theory, semianalytical theories such as SALT and DSST) expand the body's motion in trigonometric series of the orbital elements. They are compact and smooth but truncate high-frequency terms; for the Moon, residual errors of metres to kilometres accumulate over decades. Numerical ephemerides integrate the full N-body problem with relativistic corrections and fit the result to radar ranging, laser ranging to retroreflectors, and spacecraft tracking; modern solutions agree with lunar laser ranging at the centimetre level (Vallado 2022, Chap. 10).

For cislunar trajectories, the difference is decisive: Earth–Moon $L_1/L_2$ dynamics, distant retrograde orbits, and weak-stability-boundary transfers are all shaped by perturbations at the $10^{-3}$–$10^{-4}$ g-level, well below the noise floor of analytical theories. Sun and Moon positions in any high-fidelity cislunar propagator therefore come from a numerical ephemeris (Deng Hui et al. 2017).

## JPL DE ephemerides: structure and accuracy

JPL builds DE ephemerides by numerically integrating the equations of motion of the Sun, Moon, and planets with a variable step averaging about 0.3 days, and then compressing the result by fitting Chebyshev polynomials in fixed time blocks (Standish 1990; Vallado 2022, §10.4):

- 32-day blocks for the outer planets;

- 16-day blocks for the Sun, Earth, and Venus;

- 8-day blocks for Mercury and the lunar librations;

- 4-day blocks for the Moon (the fastest-moving body).

Each file stores only the polynomial coefficients; the user's software rebuilds the position by evaluating the Chebyshev series for the relevant block. Typical accuracy is roughly $0.01''$ on the planets; the Moon is good to about 2 m ($0.001''$) and the Sun to about 200 m ($0.0003''$) (Vallado 2022, §10.4). DE430 (2013) and DE440 (2021) are the current standards; DE440 also has the extended-time variant DE441 for historical studies.

The independent variable of a JPL ephemeris is a barycentric coordinate time labelled $T_\text{eph}$, adjusted so that $T_\text{eph} \approx$ TT over the ephemeris span; for all cislunar applications TT, TDB, and $T_\text{eph}$ are interchangeable at the millisecond level (Vallado 2022, §3.4).

## The full ephemeris (N-body) model

A **full ephemeris model** is the spacecraft-dynamics model that results when the equations of motion are written directly in an inertial (typically ICRF) frame and the positions of the Sun, Earth, Moon, and optionally other planets are read from a numerical ephemeris at every integration step:

$$
\ddot{\mathbf r} = -\sum_i G m_i \Big( \frac{\mathbf r - \mathbf r_i(t)}{\|\mathbf r - \mathbf r_i(t)\|^3} \Big) + \mathbf a_\text{oblat} + \mathbf a_\text{SRP} + \dots
$$

where $\mathbf r_i(t)$ comes from DE440 and $\mathbf a_\text{oblat}$, $\mathbf a_\text{SRP}$ add Earth/Moon non-spherical gravity and solar-radiation pressure. Time $t$ enters the equations explicitly, so the system is non-autonomous; no Jacobi integral exists, and periodic-orbit theory must be replaced by quasi-periodic and numerical-continuation methods (Baresi 2023; Liu & Liu 2025).

The full ephemeris model is the final validation environment for any trajectory first designed in the CR3BP. Standard practice: (i) design in the CR3BP, (ii) transition the initial state to the ephemeris model at a chosen epoch, (iii) apply differential correction to recover the desired geometry (e.g., NRHO station-keeping, multi-revolution DRO). Deviations between the two models quantify how strongly solar gravity, lunar-orbit eccentricity, and other perturbations reshape the idealised solution (Welch et al. 2015).

## Practical notes

- **File choice**: DE440/DE441 supersedes DE430; the orientation is tied to the ICRF. The lunar ephemeris includes physical librations and the Earth–Moon mass ratio.

- **Simplifications**: For runs of only a few hours, holding the Sun/Moon position fixed at the midpoint is acceptable; for longer runs, the full ephemeris is mandatory. Lv et al. 2025 discuss simplifications that retain most of the accuracy at lower computational cost.

- **Lunar time ephemeris LTE440** (Lu et al. 2025) complements DE440 with a uniform lunar time scale for high-precision lunar ranging.

## Related entries

- [Circular Restricted Three-Body Problem (CR3BP)](/en/glossary/dynamics/cr3bp/)

- [Synodic Frame (Rotating Frame)](/en/glossary/fundamentals/synodic-frame/)

- [Chebyshev Polynomial](/en/glossary/fundamentals/chebyshev-polynomial/)

## References

- Vallado, 2022, *Fundamentals of Astrodynamics and Applications*, Chaps. 3, 8, 10: time scales $T_\text{eph}$/TDB/TT, third-body perturbation modelling, JPL DE Chebyshev block structure and accuracy.

- Standish, 1990, "The observational basis for JPL's DE200, the planetary ephemerides of the Astronomical Almanac," *A&A* 233:252–271.

- Deng Hui et al., 2017, "On-board orbit prediction for cislunar collinear-libration-point probes": motivation for using numerical ephemerides in libration-point forecasting.

- Welch, Barden, Howell, 2015, "Mission considerations for transfers to a distant retrograde orbit": full ephemeris validation of a DRO designed in the CR3BP.

- Baresi, 2023, "Transition of two-dimensional quasi-periodic invariant tori in the real-ephemeris model of the Earth–Moon system."

- Liu & Liu, 2025, "A note on the computation of multi-revolution NRHO under the ephemeris model."

- Lu et al., 2025, "Lunar time ephemeris LTE440 — definitions, algorithm, and performance."

- Lv et al., 2025, "Precise orbit determination for cislunar space satellites: planetary ephemeris simplification effect."
