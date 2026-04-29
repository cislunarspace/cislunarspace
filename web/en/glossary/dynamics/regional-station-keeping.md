---
title: Regional Station-keeping Control
description: A detailed analysis of regional station-keeping control definitions, control objectives, core challenges, and current research status for stratospheric airships
keywords: Regional Station-keeping, Long Endurance, Positioning Accuracy, Sliding Mode Control, Deep Reinforcement Learning, Station-keeping Radius
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Regional Station-keeping Control | Airship Dynamics
  description: A detailed analysis of regional station-keeping control definitions, control objectives, core challenges, and current research status for stratospheric airships
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Regional Station-keeping Control | Airship Dynamics
  description: A detailed analysis of regional station-keeping control definitions, control objectives, core challenges, and current research status for stratospheric airships
  image: /logo.png
permalink: /en/glossary/dynamics/regional-station-keeping/
---

# Regional Station-keeping Control

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Regional station-keeping control refers to active control techniques that maintain an aircraft's relative position within a designated airspace. For stratospheric airships, the objective is to fly within a preset **station-keeping radius** around a designated center point while maintaining the **station-keeping altitude** within acceptable error margins.

## Control Objectives

| Metric | Description | Typical Requirement |
|:---|:---|:---|
| Horizontal position accuracy | Distance from target center | < 1-5 km |
| Altitude accuracy | Deviation from nominal altitude | < 100 m |
| Mission endurance | Single mission duration | 14-90 days |
| Energy efficiency | Energy consumption per unit time | Minimized |

## Core Challenges

### 1. Wind Disturbance

Stratospheric wind speeds reach 30-100 m/s with direction varying by altitude and season. Main strategies:

- **Power against wind**: Active propeller compensation
- **Altitude scheduling**: Utilizing the quasi-zero wind layer
- **Passive adaptation**: Low-drag外形 reducing wind-induced drift

### 2. Buoyancy-weight Imbalance

Diurnal temperature differences cause helium thermal expansion/contraction:

$$F_b = \rho_{air} V_{He} g - m_{total} g$$

When buoyancy and gravity are unbalanced, the airship ascends or descends.

### 3. Energy Constraints

Propulsion and thermal control compete for limited solar energy.

## Control Methods

### Classical Control

| Method | Advantages | Disadvantages |
|:---|:---|:---|
| PID Control | Simple | Nonlinear handling difficult |
| Sliding Mode Control | Robust | Chattering |
| Backstepping SMC | Fast convergence | Computationally complex |

### Intelligent Control

| Method | Advantages | Disadvantages |
|:---|:---|:---|
| Fuzzy Backstepping | Suitable for nonlinear | Expert knowledge dependent |
| Deep Reinforcement Learning | Strong self-learning | Training data requirements |
| Gaussian Process Regression | Uncertainty quantification | Real-time performance |

## Related Concepts

- [Stratospheric Airship](/en/glossary/fundamentals/stratospheric-airship/)
- [Sliding Mode Control](/en/glossary/dynamics/sliding-mode-control/)
- [Deep Reinforcement Learning](/en/glossary/dynamics/deep-reinforcement-learning/)
- [Buoyancy-weight Imbalance](/en/glossary/dynamics/buoyancy-weight-imbalance/)

## References

- Chen W, Wang H. Regional Station-keeping Control Technology for Stratospheric Airships[J]. Acta Aeronautica, 2025.
- Zhang Y, et al. Deep Reinforcement Learning for Stratospheric Airship Station-keeping[J]. AIAA Journal, 2024.