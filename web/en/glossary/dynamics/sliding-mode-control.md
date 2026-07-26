---
title: Sliding Mode Control
description: A detailed analysis of sliding mode control principles, mathematical formulation, chattering suppression techniques, and applications in stratospheric airship control
keywords: Sliding Mode Control, Variable Structure Control, Sliding Surface, Chattering, Backstepping SMC, Stratospheric Airship
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: Sliding Mode Control | Nonlinear Control
  description: A detailed analysis of sliding mode control principles, mathematical formulation, chattering suppression techniques, and applications in stratospheric airship control
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Sliding Mode Control | Nonlinear Control
  description: A detailed analysis of sliding mode control principles, mathematical formulation, chattering suppression techniques, and applications in stratospheric airship control
  image: /logo.png
permalink: /en/glossary/dynamics/sliding-mode-control/
wechatShare:
  title: "Cislunar Space Guide | Sliding Mode Control"
  desc: "A detailed analysis of sliding mode control principles, mathematical formulation, chattering suppression techniques, and applications in stratospheric airship control"
  image: "/logo.png"
---

# Sliding Mode Control

> Author: [CislunarSpace](https://gitee.com/cislunarspace)
>
> Site: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Sliding Mode Control (SMC) is a variable structure control method that drives system states to a predefined sliding surface in finite time and maintains them there, achieving robust control against uncertainties and external disturbances.

## Basic Principles

### Sliding Surface Design

For an n-th order nonlinear system:

$$\dot{x} = f(x) + g(x)u$$

Design the sliding surface:

$$s(x) = \left(\frac{d}{dt} + \lambda\right)^{n-1}e$$

Where $e = x - x_d$ is tracking error, $\lambda > 0$ is the design parameter.

### Reaching Condition

Using exponential reaching law:

$$\dot{s} = -\varepsilon \text{sgn}(s) - ks, \quad \varepsilon > 0, k > 0$$

## Chattering Problem

Chattering is an inherent issue caused by high-frequency switching:

| Issue | Impact |
| :--- | :--- |
| High-frequency switching | Actuator wear |
| Energy consumption | Reduced efficiency |
| Thermal effects | Controller overheating |

### Suppression Methods

| Method | Principle |
| :--- | :--- |
| Boundary layer | Saturated function replaces sign function |
| Higher-order SMC | Higher-order switching smoothing |
| Observer-based | Estimate uncertainties to reduce switching |
| Fuzzy smoothing | Fuzzy logic for smooth switching |

## Applications in Stratospheric Airships

Stratospheric airships face uncertainties including:

- Aerodynamic parameter perturbation (velocity, temperature changes)
- Wind disturbances (gusts, turbulence)
- Buoyancy variations (helium leakage, thermal effects)

## Related Concepts

- [Backstepping Sliding Mode Control](/en/glossary/dynamics/backstepping-sliding-mode-control/)
- [Fuzzy Backstepping Control](/en/glossary/dynamics/fuzzy-backstepping-control/)
- [Regional Station-keeping Control](/en/glossary/dynamics/regional-station-keeping/)

## References

- Gao W. Variable Structure Control Theory[M]. Science Press, 2023.
- Utkin V I. Sliding Mode Control in Electro-Mechanical Systems[M]. CRC Press, 2024.
