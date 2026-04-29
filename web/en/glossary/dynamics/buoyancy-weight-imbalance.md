---
title: Buoyancy-weight Imbalance
description: A detailed analysis of buoyancy-weight imbalance definitions, cause analysis, quantitative description, and active control strategies for stratospheric airships
keywords: Buoyancy-weight Imbalance, Buoyancy, Gravity, Static Lift, Trim, Helium Leakage, Thermal Expansion
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Buoyancy-weight Imbalance | Airship Dynamics
  description: A detailed analysis of buoyancy-weight imbalance definitions, cause analysis, quantitative description, and active control strategies for stratospheric airships
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Buoyancy-weight Imbalance | Airship Dynamics
  description: A detailed analysis of buoyancy-weight imbalance definitions, cause analysis, quantitative description, and active control strategies for stratospheric airships
  image: /logo.png
permalink: /en/glossary/dynamics/buoyancy-weight-imbalance/
---

# Buoyancy-weight Imbalance

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Buoyancy-weight imbalance refers to the phenomenon where a stratospheric airship's buoyancy no longer equals its gravity. When buoyancy exceeds gravity, the airship ascends; conversely, it descends. Buoyancy-weight imbalance is a unique core challenge for stratospheric airships, directly affecting altitude maintenance and station-keeping capability.

## Quantitative Description

### Net Buoyancy

$$F_{net} = B - mg = (\rho_{air} - \rho_{He}) V_{He} g - m_{total} g$$

### Buoyancy-weight Ratio

$$\eta = \frac{B}{mg} = \frac{(\rho_{air} - \rho_{He}) V_{He}}{m_{total}}$$

| $\eta$ Value | State |
|:---|:---|
| $\eta > 1$ | Ascent |
| $\eta = 1$ | Trim balance |
| $\eta < 1$ | Descent |

## Causes

### Helium-related

| Cause | Effect | Variation |
|:---|:---|:---|
| Helium leakage | Buoyancy decrease | -0.5%/month |
| Diurnal temperature variation | Buoyancy fluctuation | ±10%/day |
| Pressure altitude change | Buoyancy change | Decreases with altitude |

## Control Strategies

### Passive Strategies

| Method | Principle |
|:---|:---|
| Overpressure design | Internal pressure reduces temperature sensitivity |
| Ballonet | Absorbs volume changes to maintain constant pressure |

### Active Strategies

| Method | Principle | Energy |
|:---|:---|:---|
| Helium inflation/deflation | Active helium volume regulation | Medium |
| Ballast adjustment | Payload/ballast jettisoning | Low |
| Altitude maneuvering | Use altitude to regulate buoyancy | Higher |
| Thermal regulation | Adjust skin/helium temperature | High |

## Related Concepts

- [Static Lift](/en/glossary/dynamics/static-lift/)
- [Thermo-mechanical Coupling Model](/en/glossary/dynamics/thermo-mechanical-coupling/)
- [Regional Station-keeping Control](/en/glossary/dynamics/regional-station-keeping/)

## References

- Chen W, Wang H. Buoyancy Management for Long-endurance Stratospheric Airships[J]. AIAA Journal of Aerospace Systems, 2025.
- Jones M, et al. Helium Loss and Thermal Effects on Airship Performance[R]. DARPA Technical Report, 2024.