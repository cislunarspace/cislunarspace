---
title: NRHO Stability and Station-Keeping
description: Initial condition sensitivity, Lyapunov exponent analysis, ΔV budget, and station-keeping strategies for NRHO orbits.
keywords: NRHO stability, station-keeping, ΔV budget, Lyapunov exponent, orbital maintenance
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/nrho/stability-maintenance/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: https://cislunarspace.cn

# NRHO Stability and Station-Keeping

## Initial Condition Sensitivity and Lyapunov Exponents

Although NRHOs appear as stable quasi-periodic orbits in the CR3BP model, they exhibit significant sensitivity to initial condition errors and external perturbations in a real ephemeris environment. This sensitivity can be quantified using the **Lyapunov Exponent**.

The Lyapunov exponent $\lambda$ characterizes the exponential separation (or convergence) rate of neighboring trajectories in phase space:
- $\lambda > 0$: Orbital errors grow exponentially (unstable)
- $\lambda < 0$: Errors are suppressed (stable)
- $\lambda = 0$: Neutral (marginal stability along the orbital direction)

For L1/L2 NRHOs, Floquet modal analysis of the linearized equations shows that unstable modes with $\lambda > 0$ exist along certain directions. This means even minute initial errors are amplified over several orbital periods.

A typical NRHO Lyapunov exponent is on the order of $\lambda \sim 10^{-2}$ day$^{-1}$, corresponding to an e-folding time of approximately 50-100 days.

## ΔV Station-Keeping Budget

Station-keeping for an NRHO requires periodic low-thrust corrections. The typical maintenance $\Delta V$ budget depends on:
- Orbital location (L1 vs. L2)
- Mission duration
- Propulsion system type (electric vs. chemical)

Typical values:
- L1 NRHO: $\Delta V \approx 30-50$ m/s/year
- L2 NRHO: $\Delta V \approx 40-80$ m/s/year (slightly higher than L1 due to stronger solar gravitational perturbations)

For comparison, DRO station-keeping budgets are approximately 5-20 m/s/year, demonstrating their higher inherent stability.

## Station-Keeping Strategies

### Impulsive Station-Keeping

Using low-thrust engines (e.g., hydrazine thrusters) for periodic impulsive corrections. Each correction typically requires $\Delta V \approx 1-5$ m/s. The optimal correction time is usually at the apoapsis or periapsis (points of minimum velocity) to maximize correction effectiveness.

### Continuous Thrust Station-Keeping

For electric propulsion systems, continuous low-thrust corrections can be employed by adjusting the thrust direction to compensate for perturbations. This requires more complex attitude-orbit coupled control but achieves higher orbital maintenance precision.

### Optimal Correction Timing

The optimal station-keeping strategy must balance correction frequency against correction accuracy. Too-low correction frequency leads to accumulated orbital deviations, increasing the $\Delta V$ required per correction; too-high frequency increases propellant consumption and mission scheduling complexity.

## Effects of External Perturbations

### Solar Gravitational Perturbation

Solar gravity is the primary external disturbance source for NRHO station-keeping. Near L2 NRHOs, solar gravitational perturbation is especially significant because the gravitational gradient in the L2 direction is weaker.

### Lunar Non-Spherical Perturbation

The Moon's non-spherical gravitational terms (J2 term, $C_{22}$ term, etc.) have non-negligible effects on the long-term evolution of NRHOs. For low-inclination NRHOs in particular, the lunar J2 term causes drift in the Right Ascension of the Ascending Node (RAAN).

### Solar Radiation Pressure

For spacecraft with large solar panels or high area-to-mass ratios, Solar Radiation Pressure (SRP) is also a perturbation source that requires dedicated modeling.

## Simulation Experiments

In the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/), you can set NRHO initial conditions and add perturbation models to observe long-term orbital evolution and drift trends.
