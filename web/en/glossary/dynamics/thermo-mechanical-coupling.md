---
title: Thermo-mechanical Coupling Model
description: A detailed analysis of thermo-mechanical coupling modeling principles, coupling variables, cross-coupling mechanisms, and their effects on regional station-keeping control
keywords: Thermo-mechanical Coupling, Flight Dynamics, Thermodynamics, Coupling Variables, Cross-coupling, Buoyancy Change
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Thermo-mechanical Coupling Model | Airship Dynamics
  description: A detailed analysis of thermo-mechanical coupling modeling principles, coupling variables, cross-coupling mechanisms, and their effects on regional station-keeping control
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Thermo-mechanical Coupling Model | Airship Dynamics
  description: A detailed analysis of thermo-mechanical coupling modeling principles, coupling variables, cross-coupling mechanisms, and their effects on regional station-keeping control
  image: /logo.png
permalink: /en/glossary/dynamics/thermo-mechanical-coupling/
---

# Thermo-mechanical Coupling Model

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The thermo-mechanical coupling model describes how thermal state (temperature, pressure, density) and flight state (position, velocity, attitude) of a stratospheric airship mutually influence and constrain each other. Unlike conventional aircraft, a stratospheric airship's thermal state directly determines buoyancy changes, affecting flight performance.

## Coupling Mechanisms

### Thermal to Mechanical

| Thermal Variable | Mechanical Effect | Physical Mechanism |
|:---|:---|:---|
| Helium temperature $T_{He}$ | Buoyancy change | $\rho_{He} = p/(RT_{He})$ |
| Skin temperature $T_{skin}$ | Aerodynamic heating | Boundary layer effects |
| Pressure $p_{He}$ | Envelope expansion | $V = nRT/p$ |

### Mechanical to Thermal

| Mechanical Variable | Thermal Effect | Physical Mechanism |
|:---|:---|:---|
| Altitude $h$ | Atmospheric density | $\rho_{air}(h)$ affects convection |
| Velocity $v$ | Aerodynamic heating | $Q_{dyn} = \frac{1}{2}\rho v^3$ |
| Attitude $\theta$ | Solar incidence angle | Affects direct solar input |

## Core Coupling Variables

### 1. Helium Density

$$\rho_{He} = \frac{p_{He} M_{He}}{RT_{He}}$$

### 2. Buoyancy

$$B = (\rho_{air} - \rho_{He}) V_{He} g$$

## Diurnal Cycle Effects

| Time | $T_{He}$ | $B$ | Flight State |
|:---|:---|:---|:---|
| Noon | High | Low | Net ascent tendency |
| Midnight | Low | High | Net descent tendency |

## Related Concepts

- [Thermodynamic Model](/en/glossary/dynamics/thermodynamic-model/)
- [Buoyancy-weight Imbalance](/en/glossary/dynamics/buoyancy-weight-imbalance/)
- [Static Lift](/en/glossary/dynamics/static-lift/)

## References

- Wang H, et al. Thermo-mechanical Coupling Analysis for Stratospheric Airship[J]. AIAA Journal, 2025.
- Li J, Chen W. Coupled Thermal-Flight Dynamics of High Altitude Airships[J]. IEEE Transactions on Aerospace Systems, 2024.