---
title: Solar Radiation Pressure (SRP)
description: Detailed analysis of the definition, formula, and effects of solar radiation pressure on spacecraft in cislunar space
keywords: Solar Radiation Pressure, SRP, Solar Constant, Reflection Coefficient, Cislunar Space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Solar Radiation Pressure (SRP)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Solar Radiation Pressure Details | Primary Perturbation in Cislunar Space"
  description: Detailed analysis of the definition, formula, and effects of solar radiation pressure on spacecraft in cislunar space
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Solar Radiation Pressure Details | Primary Perturbation in Cislunar Space"
  description: Detailed analysis of the definition, formula, and effects of solar radiation pressure on spacecraft in cislunar space
  image: /logo.png
permalink: /en/glossary/dynamics/solar-radiation-pressure/
---

# Solar Radiation Pressure

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Solar Radiation Pressure (SRP) is the force exerted on a spacecraft by photons from the Sun. In cislunar space, where atmospheric drag is absent and the Earth's magnetic field has negligible influence, SRP becomes one of the primary environmental perturbations affecting spacecraft orbits.

## Formula

The SRP acceleration is given by:

$$a_{SRP} = k C_R \frac{S_0}{c} \frac{A}{m} \left(\frac{R_0}{R}\right)^2 \hat{n}$$

where:

- $k$: shadow factor (1 in sunlight, 0 in shadow)
- $C_R$: reflection coefficient (1 for diffuse, 2 for specular reflection)
- $S_0$: solar constant ($\approx 1367$ W/m²)
- $c$: speed of light
- $A/m$: area-to-mass ratio of the spacecraft
- $R_0$: reference distance (1 AU)
- $R$: distance from the Sun
- $\hat{n}$: unit vector from the spacecraft to the Sun

The solar radiation pressure at 1 AU is approximately 4.56 μN/m².

## Effects on DRO Orbits

For spacecraft in DRO orbits:

- **Long-term perturbation**: SRP causes gradual orbit evolution over time
- **Eclipse effects**: Periodic entry/exit of Earth's shadow creates discontinuous perturbations
- **Area-to-mass sensitivity**: Spacecraft with large solar panels are more affected
- **Station-keeping implications**: SRP must be accounted for in orbit keeping strategies

## Related Concepts

- [Solar Constant](/en/glossary/other/solar-constant/)
- [Reflection Coefficient](/en/glossary/other/reflection-coefficient/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
