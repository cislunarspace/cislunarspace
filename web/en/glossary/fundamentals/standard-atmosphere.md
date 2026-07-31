---
title: Standard Atmosphere
description: A detailed analysis of the standard atmosphere definition, atmospheric layer structure, temperature/pressure/density distribution with altitude, and its application in aerodynamic calculations
keywords: Standard Atmosphere, Atmospheric Layers, Troposphere, Stratosphere, Aerodynamics, Atmospheric Density, Atmospheric Drag
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Standard Atmosphere
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Standard Atmosphere | Terminology Definition"
  description: A detailed analysis of the standard atmosphere definition, atmospheric layer structure, and its application in aerodynamic calculations
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Standard Atmosphere | Terminology Definition"
  description: A detailed analysis of the standard atmosphere definition, atmospheric layer structure, and its application in aerodynamic calculations
  image: /logo.png
permalink: /en/glossary/fundamentals/standard-atmosphere/
---

# Standard Atmosphere

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Standard Atmosphere is an internationally recognized reference model that describes how Earth's atmospheric parameters (temperature, pressure, density) vary with altitude. Based on the ideal gas law and empirical measurement data, it provides a unified reference baseline for vehicle aerodynamic calculations, trajectory design, and atmospheric drag estimation.

## Core Elements

### Atmospheric Layer Structure

Earth's atmosphere is divided into five layers based on temperature variation characteristics:

| Layer | Altitude Range | Temperature Change | Characteristics |
| :--- | :--- | :--- | :--- |
| Troposphere | 0–11 km | Approx. −6.5 °C/km | Primary weather phenomena layer |
| Stratosphere | 11–50 km | Initially constant, then rising | Ozone layer absorbs ultraviolet radiation |
| Mesosphere | 50–85 km | Approx. −3 °C/km | Coldest region of the atmosphere |
| Thermosphere | 85–500 km | Significant increase | Heated by solar ultraviolet radiation |
| Exosphere | >500 km | Approaches constant | Atmospheric particles can escape Earth |

### Temperature, Pressure, and Density Distribution with Altitude

In the troposphere and standard atmosphere model, the parameters vary with altitude as follows:

**Temperature** (within the troposphere):

$$T(h) = T_0 - \beta h$$

where $T_0 = 288.15$ K and $\beta = 0.0065$ K/m.

**Pressure** (based on the hydrostatic equation and ideal gas law):

$$p(h) = p_0 \left(1 - \frac{\beta h}{T_0}\right)^{\frac{g_0}{\beta R}}$$

where $p_0 = 101325$ Pa and $R = 287.05287$ J/(kg·K).

**Density**:

$$\rho(h) = \rho_0 \left(1 - \frac{\beta h}{T_0}\right)^{\frac{g_0}{\beta R} - 1}$$

where $\rho_0 = 1.225$ kg/m$^3$.

### Ideal Gas Law

The standard atmosphere model is based on the ideal gas law:

$$p = \rho R T$$

This equation relates the three fundamental parameters of pressure, density, and temperature, and serves as the foundation for atmospheric parameter calculations.

### Standard Atmosphere Tables

Standard atmosphere tables present temperature, pressure, density, and other parameters in tabular form, covering altitudes from sea level to approximately 1000 km. Commonly used standard atmosphere models include:

- **US Standard Atmosphere 1976**: US standard, internationally adopted
- **CIRA**: International Reference Atmosphere, incorporating seasonal and latitudinal variations
- **Jacchia series**: Precision models for the upper atmosphere (>200 km)

## Application Value

The standard atmosphere is a fundamental input for aerospace vehicle aerodynamic calculations and trajectory design. During the powered phase, atmospheric density determines the magnitude of aerodynamic drag. During reentry, atmospheric parameters govern aerodynamic heating and deceleration characteristics. For low-Earth-orbit spacecraft, upper-atmosphere density is a critical parameter for orbital decay analysis.

## Related Concepts

- [Reentry Phase](/en/glossary/fundamentals/reentry-phase/)
- [Lift-to-Drag Ratio](/en/glossary/fundamentals/lift-to-drag-ratio/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- NOAA. U.S. Standard Atmosphere 1976[S]. 1976.
