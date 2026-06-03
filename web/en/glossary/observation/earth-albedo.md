---
title: Earth Albedo
description: A detailed analysis of earth albedo definitions, albedo distribution, calculation models, and heating effects on the bottom skin of stratospheric airships
keywords: Earth Albedo, Albedo, Solar Reflection, Earth System, Thermal Radiation, Cloud Reflection
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Earth Albedo | Environmental Heat Transfer
  description: A detailed analysis of earth albedo definitions, albedo distribution, calculation models, and heating effects on the bottom skin of stratospheric airships
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Earth Albedo | Environmental Heat Transfer
  description: A detailed analysis of earth albedo definitions, albedo distribution, calculation models, and heating effects on the bottom skin of stratospheric airships
  image: /logo.png
permalink: /en/glossary/observation/earth-albedo/
wechatShare:
  title: "Cislunar Space Guide | Earth Albedo"
  desc: "A detailed analysis of earth albedo definitions, albedo distribution, calculation models, and heating effects on the bottom skin of stratospheric airships"
  image: "/logo.png"
---

# Earth Albedo

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Earth albedo is the reflection and scattering of incoming solar radiation by Earth's atmosphere and surface back into space. The Earth's Bond albedo is approximately 0.30, meaning about 30% of incoming solar radiation is reflected. For stratospheric airships, earth albedo received by the bottom skin is an important directional thermal input.

## Albedo Definition

### Planetary Albedo

$$A_{planet} = \frac{\text{Reflected radiation}}{\text{Incoming radiation}} = \frac{F_{reflected}}{F_{incoming}}$$

### Typical Values

| Surface Type | Albedo |
|:---|:---|
| Ocean | 0.05-0.15 |
| Forest | 0.10-0.20 |
| Desert | 0.25-0.40 |
| Ice/Snow | 0.60-0.90 |
| Cloud | 0.40-0.80 |
| Global average | 0.30 |

## Effects on Stratospheric Airships

### Thermal Input Calculation

Earth albedo radiation received by bottom skin:

$$Q_{albedo} = \alpha_{skin} \cdot \rho_{earth} \cdot I_{sun} \cdot \cos\theta_{ground} \cdot A_{bottom}$$

### Nighttime Heat Source

At night, earth albedo is zero, but Earth's own infrared radiation (~240 K) persists:

$$Q_{IR,earth} = \varepsilon_{skin} \sigma T_{earth}^4 A_{proj}$$

## Related Concepts

- [Solar Radiation](/en/glossary/observation/solar-radiation/)
- [Thermodynamic Model](/en/glossary/dynamics/thermodynamic-model/)

## References

- Liou K N. An Introduction to Atmospheric Radiation[M]. Academic Press, 2023.
- Stephens G L, et al. Earth's Climate and Earth's Energy Budget[J]. Journal of Climate, 2024.