---
title: Reflection Coefficient (C_R)
description: Detailed analysis of the reflection coefficient definition, value range, and role in solar radiation pressure calculation
keywords: Reflection Coefficient, CR, Solar Radiation Pressure, Light Pressure Coefficient, Cislunar Space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Reflection Coefficient (C_R)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Reflection Coefficient Details | Key Parameter for Solar Radiation Pressure"
  description: Detailed analysis of the reflection coefficient definition, value range, and role in solar radiation pressure calculation
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Reflection Coefficient Details | Key Parameter for Solar Radiation Pressure"
  description: Detailed analysis of the reflection coefficient definition, value range, and role in solar radiation pressure calculation
  image: /logo.png
permalink: /en/glossary/other/reflection-coefficient/
---

# Reflection Coefficient

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The reflection coefficient ($C_R$) is a dimensionless parameter describing the reflection characteristics of a spacecraft surface to sunlight, also known as the light pressure coefficient. Its value range is:

- $C_R = 1$: completely diffuse reflection (Lambertian reflection)
- $C_R = 2$: completely specular reflection
- $1 < C_R < 2$: partial specular reflection

## Role in Solar Radiation Pressure Calculation

The reflection coefficient is a key parameter in the SRP acceleration formula:

$$a_{SRP} = k C_R \frac{S_0}{c} \frac{A}{m} \left(\frac{R_0}{R}\right)^2 \hat{n}$$

$C_R$ directly determines the magnitude of solar radiation pressure on the spacecraft. For spacecraft in DRO orbits, far from Earth's atmosphere and magnetic field, solar radiation pressure is the primary environmental perturbation, making accurate determination of $C_R$ essential for orbit prediction.

## Typical Values

| Spacecraft Type | Typical $C_R$ Value |
| :--- | :--- |
| Large solar panels | Close to 2 |
| High-reflectivity satellites | 1.5 ~ 1.8 |
| Dark-surface satellites | 1.0 ~ 1.3 |

## Related Concepts

- [Solar Radiation Pressure](/en/glossary/dynamics/solar-radiation-pressure/)
- [Solar Constant](/en/glossary/other/solar-constant/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
