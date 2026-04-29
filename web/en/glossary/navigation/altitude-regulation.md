---
title: Altitude Regulation
description: A detailed analysis of altitude regulation definitions, control objectives, method classifications, and typical control law design for stratospheric airships
keywords: Altitude Regulation, Altitude Control, Buoyancy Regulation, Station-keeping Altitude, Trim
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Altitude Regulation | Airship Control
  description: A detailed analysis of altitude regulation definitions, control objectives, method classifications, and typical control law design for stratospheric airships
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Altitude Regulation | Airship Control
  description: A detailed analysis of altitude regulation definitions, control objectives, method classifications, and typical control law design for stratospheric airships
  image: /logo.png
permalink: /en/glossary/navigation/altitude-regulation/
---

# Altitude Regulation

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Altitude regulation is one of the core tasks of the stratospheric airship control system, achieving active maintenance and adjustment of flight altitude through adjusting net buoyancy, attitude, or propulsive force. Since stratospheric airships are underactuated systems (limited thrust), altitude control requires comprehensive use of buoyancy regulation, aerodynamic control, and propulsion.

## Control Objectives

| Objective | Description | Typical Precision |
|:---|:---|:---|
| Altitude maintenance | Maintain nominal altitude | ±100 m |
| Altitude tracking | Track desired altitude profile | ±50 m |
| Altitude scheduling | Cross-altitude layer transfer | Fast and smooth |

## Control Methods

### Passive Altitude Control

| Method | Principle | Application Scenario |
|:---|:---|:---|
| Static buoyancy trim | Buoyancy = gravity, no net vertical force | Steady-state station-keeping |
| Altitude囊 design | Ballonet absorbs volume changes | Reduce altitude fluctuations |

### Active Altitude Control

| Method | Principle | Energy Consumption |
|:---|:---|:---|
| Ballonet regulation | Inflate/deflate helium to change buoyancy | Medium |
| Ballast adjustment | Jettison ballast or add weight | Low |
| Powered climb/descent | Propeller generates vertical component | High |
| Thermal regulation | Change helium temperature | High |

## Control Law Design

### Cascade PID

Outer loop (altitude):

$$u_{outer} = K_P^h (h_{ref} - h) + K_I^h \int(h_{ref} - h) dt$$

Inner loop (vertical speed):

$$u_{inner} = K_P^{\dot{h}} (\dot{h}_{ref} - \dot{h})$$

## Related Concepts

- [Regional Station-keeping Control](/en/glossary/dynamics/regional-station-keeping/)
- [Buoyancy-weight Imbalance](/en/glossary/dynamics/buoyancy-weight-imbalance/)
- [Static Lift](/en/glossary/dynamics/static-lift/)

## References

- Wang H, et al. Altitude Control for Stratospheric Airship Based on Thermal-Flight Coupling[J]. AIAA Journal of Guidance, Control, and Dynamics, 2025.
- Li J, Chen W. Adaptive Altitude Control of High Altitude Airships[J]. IEEE Transactions on Aerospace Systems, 2024.