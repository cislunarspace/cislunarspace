---
title: Pulse-Width Modulation, PWM
description: A modulation strategy that converts the variable impulse output by MPC into the actual firing duration of a fixed-thrust engine.
keywords: Pulse-Width Modulation, PWM, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Pulse-Width Modulation, PWM
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Pulse-Width Modulation, PWM Explained | Term Definition
  description: A modulation strategy that converts the variable impulse output by MPC into the actual firing duration of a fixed-thrust engine.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Pulse-Width Modulation, PWM Explained | Term Definition
  description: A modulation strategy that converts the variable impulse output by MPC into the actual firing duration of a fixed-thrust engine.
  image: /logo.png
permalink: /en/glossary/dynamics/PWM/
---

# Pulse-Width Modulation, PWM

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A modulation strategy that converts the variable impulse output by MPC into the actual firing duration of a fixed-thrust engine. It transforms the required velocity increment into the corresponding operating time according to the available acceleration of the thruster, performing a powered branch first and then coasting to the next sampling instant within each sampling interval.

## Application Value

A modulation strategy converting variable specific impulse output to actual fixed-thrust engine firing duration, implementing approximate execution of continuous optimal control.

## Related Concepts

- [Prescribed Performance Control, PPC](/en/glossary/dynamics/PPC/)
- [Prescribed Performance Function, PPF](/en/glossary/dynamics/PPF/)
- [Powered Descent Guidance](/en/glossary/dynamics/PDG/)
- [Planar Bicircular Restricted Four-Body Problem](/en/glossary/dynamics/PBR4BP/)

## References

- Capannolo 等 - 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment.
