---
title: NRHO Stability and Station-Keeping
description: Initial condition sensitivity, Lyapunov exponent analysis, ΔV budget, and station-keeping strategies for NRHO orbits.
keywords: NRHO stability, station-keeping, ΔV budget, Lyapunov exponent, orbital maintenance
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-27
permalink: /en/cislunar-orbits/nrho/stability-maintenance/
wechatShare:
  title: "Cislunar Space Guide | NRHO Stability and Station-Keeping"
  desc: "Initial condition sensitivity, Lyapunov exponent analysis, ΔV budget, and station-keeping strategies for NRHO orbits."
  image: "/logo.png"
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: <https://cislunarspace.cn>

# NRHO Stability and Station-Keeping

## Initial Condition Sensitivity and Divergence Timescale

NRHOs are weakly hyperbolic orbits: linearized analysis shows Floquet multipliers with modulus greater than 1 along certain directions, so state errors grow revolution by revolution. For the operationally favored 9:2 resonant members, the monodromy matrix has an unstable multiplier of about −2.18 (roughly 2.2–3.1 across the weakly hyperbolic interval), meaning errors grow to about twice their size each 6.56-day period — far milder than the hundreds-fold multipliers of large-amplitude Halo orbits. In continuous-time terms the growth rate is of order 0.1 day⁻¹, giving an e-folding time measured in days, not months.

This slow amplification is precisely what keeps maintenance costs so low; it also means navigation and maneuver-execution errors must be monitored and suppressed every revolution rather than allowed to accumulate.

## ΔV Station-Keeping Budget

Station-keeping for an NRHO requires periodic low-thrust corrections. The typical maintenance $\Delta V$ budget depends on:

- Orbital location (L1 vs. L2)
- Mission duration
- Propulsion system type (electric vs. chemical)

Typical values:

- L1/L2 NRHO: annual station-keeping $\Delta V$ of a few m/s; modern methods such as Cauchy–Green stretching-direction targeting or full-state-targeting MPC reduce this below 2 m/s/year (the NASA Gateway baseline is in the same range)

## Station-Keeping Strategies

### Impulsive Station-Keeping

Using low-thrust engines (e.g., hydrazine thrusters) for periodic impulsive corrections. Each correction typically requires $\Delta V \approx 1-5$ m/s. The optimal correction time is usually at the apoapsis or periapsis (points of minimum velocity) to maximize correction effectiveness.

### Continuous Thrust Station-Keeping

For electric propulsion systems, continuous low-thrust corrections can be employed by adjusting the thrust direction to compensate for perturbations. This requires more complex attitude-orbit coupled control but achieves higher orbital maintenance precision.

### Optimal Correction Timing

The optimal station-keeping strategy must balance correction frequency against correction accuracy. Numerical studies (Muralidharan & Howell, 2022) show that placing maneuvers near the apolune departure region (true anomaly ≈ 160°–200°), where the maximum stretch direction of the Cauchy–Green strain tensor acts, suppresses divergence at theoretical minimum energy; combined with full-state-targeting MPC, along-track phase drift can be eliminated entirely. Too-low correction frequency lets deviations accumulate; too-high frequency adds scheduling complexity.

## Effects of External Perturbations

### Solar Gravitational Perturbation

Solar gravity is the primary external disturbance source for NRHO station-keeping. Near L2 NRHOs, solar gravitational perturbation is especially significant because the gravitational gradient in the L2 direction is weaker.

### Lunar Non-Spherical Perturbation

The Moon's non-spherical gravitational terms (J2 term, $C_{22}$ term, etc.) have non-negligible effects on the long-term evolution of NRHOs. For low-inclination NRHOs in particular, the lunar J2 term causes drift in the Right Ascension of the Ascending Node (RAAN).

### Solar Radiation Pressure

For spacecraft with large solar panels or high area-to-mass ratios, Solar Radiation Pressure (SRP) is also a perturbation source that requires dedicated modeling.
