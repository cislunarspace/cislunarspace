---
title: NRHO Design Parameters
description: "Typical design parameters for NRHO orbits: period, amplitude, inclination constraints, initial condition selection, and sensitivity analysis."
keywords: NRHO design, design parameters, pseudo-arclength continuation, initial conditions, CRTBP
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-04-26
permalink: /en/cislunar-orbits/nrho/design-parameters/
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: https://cislunarspace.cn

# NRHO Design Parameters

## Typical Parameter Table

Typical design parameters for L1/L2 NRHO are as follows:

| Parameter | L1 NRHO | L2 NRHO |
|-----------|---------|---------|
| Period | 6.5-7.5 days | 7.0-8.0 days |
| Semi-major axis $A_x$ | 2,000-4,000 km | 3,000-5,000 km |
| Amplitude ratio $A_z/A_x$ | 0.5-2.0 | 0.5-2.0 |
| Inclination range | 20°-50° (near frozen inclination) | 20°-50° |
| Jacobi constant $C_J$ | 2.95-3.05 | 2.90-3.00 |
| Typical station-keeping ΔV | 30-50 m/s/year | 40-80 m/s/year |

Earth-Moon mass ratio parameter: $\mu_{EM} = 0.0121505853$

## Initial Condition Selection

In the CR3BP model, initial conditions for NRHO are typically selected at the perilune or apolune of the orbit. The state vector in the synodic coordinate frame is expressed as:

$$\mathbf{X}_0 = [x_0, y_0, z_0, \dot{x}_0, \dot{y}_0, \dot{z}_0]$$

For L1 NRHO, a typical perilune initial condition is approximately:
- $x \approx 0.825$ (dimensionless, distance from L1)
- $z \approx A_z$, $\dot{x} \approx 0$, $\dot{y} \approx \dot{y}_{halo}$

Accurate initial conditions are obtained through numerical continuation from known Halo orbit families.

## Periodic Orbit Computation

### Pseudo-Arclength Continuation

Pseudo-arclength continuation is the standard method for computing families of NRHO periodic orbits. The core idea is:

1. Start from a known periodic orbit (e.g., a Lyapunov orbit)
2. Progressively continue through the parameter space (e.g., Jacobi constant $C_J$)
3. At each parameter step, use the shooting method to solve the periodic boundary conditions

The shooting method objective function is:
$$\mathbf{F}(\mathbf{X}_0) = \mathbf{X}(T; \mathbf{X}_0) - \mathbf{X}_0 = \mathbf{0}$$

where $T$ is the orbital period, and $\mathbf{X}(T; \mathbf{X}_0)$ is the state propagated from initial condition $\mathbf{X}_0$ after time $T$.

### Floquet Modal Analysis

For the computed periodic orbits, Floquet modal analysis is performed to assess stability. Floquet theory gives:

$$\mathbf{M}(T) \mathbf{v} = \lambda \mathbf{v}$$

where $\mathbf{M}(T)$ is the monodromy matrix (single-period state transition matrix), and $\lambda$ is the Floquet multiplier. For stable orbits, Floquet multipliers lie on the unit circle ($|\lambda| = 1$); unstable orbits have multipliers with $|\lambda| > 1$.

## Sensitivity Analysis

### Effect of Mass Ratio Uncertainty

The uncertainty in the Earth-Moon mass ratio parameter $\mu_{EM}$ (current precision ~$10^{-8}$) has a small but cumulative effect on NRHO period and amplitude. The typical sensitivity is approximately:

$$\frac{\Delta T}{T} \approx 0.1 \frac{\Delta \mu}{\mu}$$

Over a 10-year mission lifetime, this cumulative effect may cause several minutes of orbital period deviation, which must be accounted for in orbit maintenance strategies.

### Effect of Initial Position Deviation

The sensitivity of NRHO to initial position deviation can be evaluated via singular value decomposition (SVD) of the state transition matrix. Typically, the deviation amplification factor along the unstable manifold direction is approximately $10^2$ to $10^3$ per period.

## Simulation Experiment

You can enter typical NRHO initial conditions in the [Satellite Orbit Simulation Laboratory](/en/satellite-simulation/) to observe orbit geometry and test orbital evolution under different perturbations.
