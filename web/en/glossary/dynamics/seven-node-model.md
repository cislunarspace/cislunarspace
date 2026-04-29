---
title: Seven-node Model
description: A detailed analysis of seven-node thermodynamic model establishment, node distribution, mathematical formulation, and applications in detailed stratospheric airship thermal analysis
keywords: Seven-node Model, Thermodynamic Model, Multi-node Model, Distributed Parameter, Stratospheric Airship
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Seven-node Model | Detailed Thermal Analysis
  description: A detailed analysis of seven-node thermodynamic model establishment, node distribution, mathematical formulation, and applications in detailed stratospheric airship thermal analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Seven-node Model | Detailed Thermal Analysis
  description: A detailed analysis of seven-node thermodynamic model establishment, node distribution, mathematical formulation, and applications in detailed stratospheric airship thermal analysis
  image: /logo.png
permalink: /en/glossary/dynamics/seven-node-model/
---

# Seven-node Model

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The seven-node model divides the stratospheric airship thermodynamic system into seven distributed nodes for refined modeling. Compared to the two-node model, it can capture spatially non-uniform temperature distribution and local thermal effects.

## Node Distribution

| Node | Region | Description |
|:---|:---|:---|
| 1 | Windward skin | Directly solar heated or wind-cooled |
| 2 | Leeward skin | Shadow area, radiative cooling |
| 3 | Top skin | Maximum solar direct exposure |
| 4 | Bottom skin | Receives earth albedo |
| 5 | Helium main body | Internal gas body |
| 6 | Ballonet | Auxiliary airbag region |
| 7 | Structural frame | Load-bearing structure |

## Mathematical Formulation

### General Form

$$C_i \frac{dT_i}{dt} = \sum_{j=1}^{7} Q_{i,j}^{cond} + Q_i^{ext} + Q_i^{int}$$

### Conduction Terms

$$Q_{i,j}^{cond} = \frac{k_{ij}A_{ij}}{d_{ij}}(T_j - T_i)$$

## Model Validation

| Test Condition | Two-node Error | Seven-node Error |
|:---|:---|:---|
| Daytime high temp | ±5 K | ±1 K |
| Nighttime low temp | ±8 K | ±2 K |
| Sunrise/sunset | ±10 K | ±3 K |

## Related Concepts

- [Thermodynamic Model](/en/glossary/dynamics/thermodynamic-model/)
- [Two-node Model](/en/glossary/dynamics/two-node-model/)
- [Thermo-mechanical Coupling Model](/en/glossary/dynamics/thermo-mechanical-coupling/)

## References

- Liu Y, et al. Seven-node Thermal Model for Stratospheric Airship[J]. AIAA Journal of Thermophysics, 2024.
- Wang H, Chen W. Refined Thermodynamic Modeling for Stratospheric Airship[J]. Acta Aeronautica, 2025.