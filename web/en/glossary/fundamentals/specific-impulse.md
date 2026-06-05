---
title: Specific Impulse
description: Definition of specific impulse, its two dimensional forms, relationship with effective exhaust velocity, and significance as an engine performance metric
keywords: Specific Impulse, Specific Thrust, Effective Exhaust Velocity, Engine Performance, Propellant
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Specific Impulse
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Specific Impulse | Terminology Definition
  description: Definition, two dimensional forms, and significance of specific impulse as an engine performance metric
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Specific Impulse | Terminology Definition
  description: Definition, two dimensional forms, and significance of specific impulse as an engine performance metric
  image: /logo.png
permalink: /en/glossary/fundamentals/specific-impulse/
---

# Specific Impulse

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Specific impulse ($I_{SP}$) is the core metric for evaluating rocket engine performance. It is defined as the ratio of engine thrust to propellant weight flow rate (or mass flow rate). The higher the specific impulse, the greater the thrust produced per unit mass of propellant, and the more efficient the engine.

## Core Elements

### Two Dimensional Definitions

| Definition | Formula | Unit | Description |
|:---|:---|:---|:---|
| Weight-specific impulse | $I_{SP} = \frac{P}{\dot{m} g_0}$ | seconds (s) | Most commonly used in engineering |
| Mass-specific impulse | $I_{SP} = \frac{P}{\dot{m}}$ | m/s | Equivalent to effective exhaust velocity |

where $g_0 = 9.80665$ m/s$^2$ is the standard sea-level gravitational acceleration. The two definitions are interconvertible.

### Relationship with Effective Exhaust Velocity

Substituting the thrust formula $P = \dot{m} u_e' - S_e p_H$ into the specific impulse definition:

$$I_{SP} = \frac{u_e'}{g_0} - \frac{S_e p_H}{\dot{m} g_0}$$

| Condition | Specific Impulse |
|:---|:---|
| Vacuum specific impulse | $I_{SP,v} = \frac{u_e'}{g_0}$ (maximum value) |
| Sea-level specific impulse | $I_{SP,0} = \frac{u_e'}{g_0} - \frac{S_e p_0}{\dot{m} g_0}$ |

### Typical Engine Specific Impulse

| Engine Type | Propellant | Vacuum Specific Impulse (s) |
|:---|:---|:---|
| Liquid engine | LH$_2$ + LOX | 430--460 |
| Liquid engine | UDMH + N$_2$O$_4$ | 300--340 |
| Solid engine | Composite propellant | 240--290 |
| Electric propulsion | Xenon | 1000--5000 |

### Specific Impulse and the Tsiolkovsky Equation

Specific impulse directly determines a rocket's velocity increment capability. From the Tsiolkovsky equation:

$$\Delta v = I_{SP} g_0 \ln\frac{m_0}{m_f}$$

A 10% increase in specific impulse yields a 10% increase in velocity increment for the same mass ratio.

## Application Value

Specific impulse is the primary parameter for rocket engine selection and mission analysis. Higher specific impulse means greater propulsion efficiency and larger velocity increment capability. For cislunar space missions, specific impulse directly affects payload capacity, the propellant mass required for orbital transfers, and overall mission feasibility. Deep space exploration missions favor high-specific-impulse engines (such as electric propulsion) to reduce propellant mass.

## Related Concepts

- [Thrust](/en/glossary/fundamentals/thrust/)

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics (空天飞行力学)[M]. National University of Defense Technology, 2026.
- Sutton G P, Biblarz O. Rocket Propulsion Elements[M]. 9th ed. Wiley, 2016.
