---
title: NRHO Design Parameters
description: "Typical design parameters for NRHO orbits: period, amplitude, inclination constraints, initial condition selection, and sensitivity analysis."
keywords: NRHO design, design parameters, pseudo-arclength continuation, initial conditions, CRTBP
author: CislunarSpace
date: 2026-04-26
lastUpdated: 2026-08-27
permalink: /en/cislunar-orbits/nrho/design-parameters/
wechatShare:
  title: "Cislunar Space Guide | NRHO Design Parameters"
  desc: "Typical design parameters for NRHO orbits: period, amplitude, inclination constraints, initial condition selection, and sensitivity analysis."
  image: "/logo.png"
---

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Source: <https://cislunarspace.cn>

# NRHO Design Parameters

## Typical Parameter Table

Typical design parameters for L1/L2 NRHO are as follows:

| Parameter | L1 NRHO | L2 NRHO |
| ----------- | --------- | --------- |
| Period | ≈ 6.5–10 days | ≈ 6.5–9 days |
| Perilune altitude | A few hundred to several thousand km | A few hundred to several thousand km (Gateway baseline ≈ 1,500–3,000 km) |
| Apolune altitude | Up to ≈ 70,000 km | Up to ≈ 70,000 km |
| Amplitude ratio $A_z/A_x$ | Above roughly 0.3 (near-rectilinear character) | Same |
| Jacobi constant $C_J$ | ≈ 2.95–3.05 | ≈ 2.90–3.00 (9:2 member ≈ 3.047) |
| Typical station-keeping ΔV | A few m/s/year (≤ 2 m/s/year with modern methods) | A few m/s/year (≤ 2 m/s/year with modern methods) |

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

The sensitivity of NRHO to initial position deviation is best assessed through the unstable Floquet mode of the monodromy matrix. For the 9:2 member, errors along the unstable direction grow by a factor of about 2–3 per revolution; long-duration missions must pair per-revolution monitoring with targeted corrections.

## Simulation Experiment
