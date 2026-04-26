---
title: DRO Design Methods
description: Initial condition search, Floquet modal analysis, ephemeris uplift, and orbit maintenance design for Distant Retrograde Orbits.
keywords: DRO design, initial condition search, Floquet analysis, ephemeris uplift, orbit maintenance
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/dro/design-method/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: https://cislunarspace.cn

# DRO Design Methods

## Initial Condition Search

The initial condition search is the first step in DRO orbit design. In the CR3BP model, DRO initial conditions are typically selected at the orbit's periapsis or apoapsis state (in the rotating frame).

### Grid Search Method

A straightforward approach is to perform a grid search in the phase space:
1. Select grid points in the $(x, \dot{x}, C_J)$ parameter space
2. Numerically integrate one period $T$ for each grid point
3. Verify the periodicity condition: $\mathbf{X}(T) - \mathbf{X}(0) \approx \mathbf{0}$

This method is computationally expensive, but for DROs with clear geometric characteristics, prior knowledge can be used to narrow the search range.

### Continuation Method

A more efficient approach is to use continuation from a known periodic orbit:
1. Start from a known Lyapunov orbit or boundary DRO
2. Gradually vary the $C_J$ or amplitude parameters
3. Use the shooting method at each step to correct the periodicity condition

Since DROs share a common branch origin with Lyapunov orbits, one can gradually continue from the L1/L2 Lyapunov orbit families to the DRO families.

## Floquet Modal Analysis

For the computed DRO, Floquet modal analysis is required to evaluate its stability. Floquet theory gives the eigenvalues (Floquet multipliers) of the monodromy matrix $\mathbf{M}(T)$:

$$\mathbf{M}(T)\mathbf{v} = \lambda \mathbf{v}$$

The characteristic feature of DROs is that their Floquet multipliers lie near the unit circle in conjugate pairs, indicating that DROs possess neutral stability in the CR3BP model.

The presence of unstable multipliers $|\lambda| > 1$ indicates that the DRO family will gradually diverge under perturbations, requiring orbit maintenance.

## Ephemeris Uplift

DRO initial conditions obtained from the CRTBP model need to be "uplifted" to a real ephemeris environment (JPL DE440 or higher precision). The ephemeris uplift process:

1. **CRTBP Propagation**: Propagate one period in the CRTBP model to obtain the precise periodic orbit
2. **State Mapping**: Map the CRTBP state to the real ephemeris time coordinate system
3. **Numerical Verification**: Verify the quasi-periodicity of the orbit in the real ephemeris model
4. **Deviation Correction**: If the orbit does not satisfy periodicity in the real ephemeris, perform iterative correction

Typical ephemeris uplift deviations are on the order of: orbital position deviation ~1-10 km, period deviation ~minutes/period.

## Orbit Maintenance Design

DRO station-keeping design must consider the following factors:

### Maintenance Strategy

The low maintenance ΔV budget of DROs (~5-20 m/s/year) allows simple impulsive maintenance to meet requirements:
- **Maintenance Frequency**: Typically perform a small correction every 1-2 weeks ($\Delta V \approx 0.5-2$ m/s)
- **Correction Direction**: Correct along the direction of the unstable Floquet modal direction
- **Timing Selection**: Perform corrections at the orbit's velocity extremum points (minimum kinetic energy points)

### Maintenance ΔV Budget Breakdown

| Perturbation Source | Contribution to Maintenance ΔV |
|---------------------|----------------------------------|
| Solar gravity | 3-8 m/s/year |
| Lunar non-spherical | 1-3 m/s/year |
| Solar radiation pressure | 0.5-2 m/s/year |
| Others | < 1 m/s/year |

## Simulation Experiments

You can set DRO initial conditions in the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/) to observe its long-term evolution under perturbations and evaluate orbit maintenance requirements.
