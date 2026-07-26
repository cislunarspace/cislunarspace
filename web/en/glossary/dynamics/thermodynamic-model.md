---
title: Thermodynamic Model
description: A detailed analysis of thermodynamic model establishment methods for stratospheric airships, comparison of two-node and seven-node models, and thermo-mechanical coupling analysis
keywords: Thermodynamic Model, Two-node Model, Seven-node Model, Heat Balance Equation, Thermo-mechanical Coupling, Solar Radiation, Earth Albedo
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Thermodynamic Model | Airship Thermal Analysis
  description: A detailed analysis of thermodynamic model establishment methods for stratospheric airships, comparison of two-node and seven-node models, and thermo-mechanical coupling analysis
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Thermodynamic Model | Airship Thermal Analysis
  description: A detailed analysis of thermodynamic model establishment methods for stratospheric airships, comparison of two-node and seven-node models, and thermo-mechanical coupling analysis
  image: /logo.png
permalink: /en/glossary/dynamics/thermodynamic-model/
wechatShare:
  title: "Cislunar Space Guide | Thermodynamic Model"
  desc: "A detailed analysis of thermodynamic model establishment methods for stratospheric airships, comparison of two-node and seven-node models, and thermo-mechanical coupling analysis"
  image: "/logo.png"
---

# Thermodynamic Model

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The thermodynamic model describes how helium temperature and thermodynamic state inside a stratospheric airship envelope vary with external environment (solar radiation, earth albedo, IR radiation, convection) and internal state (helium inflation/deflation, payload heat).

## Energy Balance Equation

### Overall Form

$$Q_{net} = Q_{solar} + Q_{albedo} + Q_{IR,earth} - Q_{IR,sky} - Q_{conv} - Q_{cond}$$

## Two-node vs Seven-node Models

| Model | Description | Application |
| :--- | :--- | :--- |
| Two-node | Skin + Helium nodes | Preliminary analysis, fast estimation |
| Seven-node | Distributed nodes by location | Detailed design, transient analysis |

## Thermo-mechanical Coupling

### Coupling Variables

| Variable | Thermal→Dynamic | Dynamic→Thermal |
| :--- | :--- | :--- |
| Helium density $\rho_{He}$ | Affects buoyancy | Varies with altitude |
| Volume $V_{He}$ | Thermal expansion | Deformation |
| Temperature $T_{He}$ | Solar heating | Compression work |

## Related Concepts

- [Two-node Model](/en/glossary/dynamics/two-node-model/)
- [Seven-node Model](/en/glossary/dynamics/seven-node-model/)
- [Solar Radiation](/en/glossary/observation/solar-radiation/)

## References

- da Silva M G, et al. Thermal Modeling of High Altitude Airships[J]. Journal of Aircraft, 2024.
- Wang H, Chen W. Thermodynamic Modeling and Simulation for Stratospheric Airship[J]. Acta Aeronautica, 2025.
