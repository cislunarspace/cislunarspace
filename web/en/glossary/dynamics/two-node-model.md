---
title: Two-node Model
description: A detailed analysis of two-node thermodynamic model establishment, simplified assumptions, mathematical formulation, and applications in preliminary stratospheric airship analysis
keywords: Two-node Model, Thermodynamic Model, Simplified Model, Stratospheric Airship, Skin, Helium
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Two-node Model | Simplified Thermal Analysis
  description: A detailed analysis of two-node thermodynamic model establishment, simplified assumptions, mathematical formulation, and applications in preliminary stratospheric airship analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Two-node Model | Simplified Thermal Analysis
  description: A detailed analysis of two-node thermodynamic model establishment, simplified assumptions, mathematical formulation, and applications in preliminary stratospheric airship analysis
  image: /logo.png
permalink: /en/glossary/dynamics/two-node-model/
wechatShare:
  title: "Cislunar Space Guide | Two-node Model"
  desc: "A detailed analysis of two-node thermodynamic model establishment, simplified assumptions, mathematical formulation, and applications in preliminary stratospheric airship analysis"
  image: "/logo.png"
---

# Two-node Model

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The two-node model simplifies the stratospheric airship thermodynamic system into two lumped-parameter nodes: the skin node representing external structure and the helium node representing internal gas. This model trades precision for computational efficiency, suitable for rapid iteration in initial design.

## Model Structure

| Node | Component | Temperature |
| :--- | :--- | :--- |
| Node 1 | Skin (Envelope) | $T_{skin}$ |
| Node 2 | Helium | $T_{He}$ |

## Mathematical Equations

### Skin Energy Balance

$$C_{skin}\frac{dT_{skin}}{dt} = Q_{ext} - h_{int}A_{int}(T_{skin} - T_{He}) - h_{ext}A_{ext}(T_{skin} - T_{air})$$

### Helium Energy Balance

$$C_{He}\frac{dT_{He}}{dt} = h_{int}A_{int}(T_{skin} - T_{He}) + Q_{int}$$

## Application Scenarios

| Suitable | Not Suitable |
| :--- | :--- |
| Initial design rapid estimation | Detailed performance analysis |
| Preliminary controller design | Extreme condition analysis |
| Parameter sensitivity analysis | Local hot-spot prediction |
| Steady-state equilibrium calculation | Fine transient response analysis |

## Related Concepts

- [Thermodynamic Model](/en/glossary/dynamics/thermodynamic-model/)
- [Seven-node Model](/en/glossary/dynamics/seven-node-model/)

## References

- Jones J A. Simplified Thermal Model for High Altitude Airship Analysis[R]. MIT, 2023.
- Wang H. Thermodynamic Analysis of Stratospheric Airship[J]. Journal of Aerospace Power, 2025.
