---
title: Lunar Orbit Eccentricity (月球轨道偏心率)
description: The eccentricity of the Moon's orbit around the Earth ($e \approx 0.0549$), causing the Earth-Moon distance to vary between perigee (~363,300 km) and apogee (~405,500 km). In high-fidelity ephemeris models, the elliptical nature significantly affects transfer time and energy — the departure epoch's eccentricity phase directly determines the efficacy of available transfer options. The fidelity of the CR3BP approximation (valid at small eccentricity, e.g., Sun-Earth $e \approx 0.0167$) can be quantitatively assessed via eccentricity sensitivity analysis.
keywords: Lunar Orbit Eccentricity, elliptic restricted three-body problem, ER3BP, Earth-Moon distance variation, eccentricity sensitivity analysis, transfer trajectory design
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-09
wechatShare:
  title: Lunar Orbit Eccentricity
  desc: $e \approx 0.0549$ — quantitative impact of the elliptical orbit on Earth-Moon transfer design.
  image: /logo.png
og:
  title: Lunar Orbit Eccentricity — Detailed Definition
  description: The Moon's orbital eccentricity ($e \approx 0.0549$) causes the Earth-Moon distance to vary between perigee and apogee. The elliptical effect makes transfer scheme efficacy depend on the departure-epoch eccentricity phase; eccentricity sensitivity analysis quantitatively assesses CR3BP approximation fidelity.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lunar Orbit Eccentricity — Detailed Definition
  description: $e \approx 0.0549$ — quantitative impact of the elliptical orbit on Earth-Moon transfer design.
  image: /logo.png
permalink: /en/glossary/fundamentals/lunar-orbit-eccentricity/
---

# Lunar Orbit Eccentricity (月球轨道偏心率)

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition and Numerical Value

The Moon's orbit about the Earth is approximately elliptical, with a current eccentricity of $e \approx 0.0549$. This produces an Earth-Moon distance variation of roughly 42,200 km: perigee at approximately 363,300 km, apogee at approximately 405,500 km. The eccentricity itself is not constant: due to solar and planetary perturbations, $e$ varies over a range from approximately 0.0255 to 0.0775 on long-periodic cycles.

The lunar orbital plane is inclined at approximately $5.145^\circ$ to the ecliptic, and the perigee direction is not fixed but precesses around the Earth in approximately 8.85 years. These two factors, together with the eccentricity, influence the Moon's precise position and mean that no realistic ephemeris calculation can rely on a mean circular orbit approximation alone.

## Why the CR3BP Is an Approximation

The CR3BP assumes the two primaries revolve around each other on circular orbits, i.e., $e = 0$. For the Earth-Moon system, $e = 0.0549$ is not negligible (Wang et al. 2021). When the **Elliptic Restricted Three-Body Problem (ER3BP)** is used, the two primaries lie on a time-varying elliptical orbit:

- The primary separation varies periodically with time (period $\approx$ 27.3 days), making the equations of motion non-autonomous: time appears explicitly, and the Jacobi integral is no longer a constant of motion.

- The departure epoch's eccentricity phase (position between perigee and apogee) has a significant effect on transfer time and $\Delta V$. Wang et al. (2021) found that for certain departure dates, transfer orbits in the ER3BP can outperform the CR3BP nominal result.

## Eccentricity Sensitivity Analysis

**Eccentricity sensitivity analysis** is a method for quantitatively assessing the fidelity of the CR3BP approximation in a given system. The basic approach is to treat the eccentricity $e$ as an augmented state variable, propagate uncertainties via second-order **State Transition Tensors** (STT), and compare the difference in optimal control cost between the CR3BP and the ER3BP (Kulik et al. 2023, JGCD).

Kulik et al. (2023) applied the method to relative motion near a Sun-Earth Halo orbit and found that the optimal control cost error of the CR3BP model is under 1%, validating the reasonableness of using the low-fidelity model for scheme comparison in the Sun-Earth system ($e \approx 0.0167$, only 30% of the Earth-Moon eccentricity). For the Earth-Moon system (with an $e$ over three times larger), analogous analysis has not yet been reported in the open literature.

## Engineering Impact

- **Transfer design**: High-fidelity Earth-Moon transfer design must account for the departure-epoch eccentricity phase. The Moon is not on a circular orbit; the instantaneous Earth-Moon distance difference directly changes the required $\Delta V$.

- **Launch windows**: Launch window availability and optimality vary with the lunar eccentricity phase: the Moon near perigee demands more energy (stronger gravity when closer to Earth), and near apogee demands less energy but entails longer transfer times.

- **Model selection**: During conceptual design, the CR3BP is generally adequate; during detailed design, eccentricity sensitivity analysis should inform whether and when to upgrade to the ER3BP or an ephemeris model.

## Related Concepts

- [CR3BP](/en/glossary/dynamics/cr3bp/)

- [Orbital Element Drift](/en/glossary/dynamics/orbital-element-drift/)

- [Low-Energy Transfer](/en/glossary/orbits/low-energy-transfer/)

- [State Transition Matrix (STM)](/en/glossary/fundamentals/stm/)

## References

- Vallado, 2022, Fundamentals of Astrodynamics and Applications (lunar orbital parameters and fundamentals of elliptic restricted three-body motion)

- Wang et al., 2021 (high-fidelity ephemeris analysis of the elliptic effect in Earth-Moon transfers)

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311 (STT-based eccentricity sensitivity analysis; quantitative CR3BP fidelity assessment near a Sun-Earth Halo)
