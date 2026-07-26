---
title: Zonal Wind
description: A detailed analysis of zonal wind definitions, formation mechanisms, seasonal variation characteristics, and their effects on stratospheric airship trajectory planning
keywords: Zonal Wind, Meridional Wind, Westerly, Easterly, Atmospheric Circulation, Stratospheric Wind Field, Wind Field Modeling
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Zonal Wind | Atmospheric Circulation
  description: A detailed analysis of zonal wind definitions, formation mechanisms, seasonal variation characteristics, and their effects on stratospheric airship trajectory planning
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Zonal Wind | Atmospheric Circulation
  description: A detailed analysis of zonal wind definitions, formation mechanisms, seasonal variation characteristics, and their effects on stratospheric airship trajectory planning
  image: /logo.png
permalink: /en/glossary/observation/zonal-wind/
wechatShare:
  title: "Cislunar Space Guide | Zonal Wind"
  desc: "A detailed analysis of zonal wind definitions, formation mechanisms, seasonal variation characteristics, and their effects on stratospheric airship trajectory planning"
  image: "/logo.png"
---

# Zonal Wind

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Zonal wind is atmospheric horizontal motion blowing along latitude lines (east-west direction). In meteorology: eastward flow is westerly (positive), westward flow is easterly (negative). Zonal wind is a key input parameter for stratospheric airship trajectory planning and energy consumption estimation.

## Atmospheric Circulation Framework

### Three-cell Circulation Model

| Circulation Cell | Latitude Range | Zonal Wind Characteristic |
| :--- | :--- | :--- |
| Hadley Cell | 0-30° | NE/SE trade winds (Easterly) |
| Ferrel Cell | 30-60° | Temperate westerlies |
| Polar Cell | 60-90° | Polar Easterlies |

## Seasonal Variation

### Typical High-altitude Zonal Wind (@30°N)

| Season | 20 km | 25 km | 30 km |
| :--- | :--- | :--- | :--- |
| Winter | -20 m/s | -40 m/s | -60 m/s |
| Spring | 0 m/s | -10 m/s | -30 m/s |
| Summer | +20 m/s | +30 m/s | +50 m/s |
| Autumn | 0 m/s | +10 m/s | +20 m/s |

Note: Negative = Westerly, Positive = Easterly

## Effects on Stratospheric Airships

### Trajectory Planning

| Impact | Description |
| :--- | :--- |
| Position drift | Wind-induced drift rate = $v_{wind} \times t$ |
| Propulsion energy | Headwind navigation requires extra energy |
| Station-keeping radius | Larger wind speed increases radius maintenance difficulty |

## Wind Field Modeling

### Statistical Model

Based on historical data:

$$\bar{u}(h, \phi, t) = u_0(h) + \sum_{i=1}^{N} A_i(h) \cos(\omega_i t + \phi_i)$$

### Numerical Weather Prediction (NWP)

Modern wind field forecasting uses:

- WRF (Weather Research and Forecasting)
- ECMWF Global Model
- GFS Global Forecast System

## Related Concepts

- [Quasi-zero Wind Layer](/en/glossary/observation/quasi-zero-wind-layer/)
- [Trajectory Planning](/en/glossary/navigation/trajectory-planning/)
- [Regional Station-keeping Control](/en/glossary/dynamics/regional-station-keeping/)

## References

- Wallace J M, Hobbs P V. Atmospheric Science: An Introductory Survey[M]. Academic Press, 2023.
- NOAA. US Standard Atmosphere 1976[M]. US Government Printing Office, 1976.
