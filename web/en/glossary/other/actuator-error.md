---
title: Actuator Error
description: Detailed analysis of actuator error sources, types, and their impact on orbit control
keywords: Actuator Error, Thrust Deviation, Orbit Control, Propulsion System, Cislunar Space
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Actuator Error
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "Actuator Error Details | Execution Layer Error Source for Orbit Control"
  description: Detailed analysis of actuator error sources, types, and their impact on orbit control
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Actuator Error Details | Execution Layer Error Source for Orbit Control"
  description: Detailed analysis of actuator error sources, types, and their impact on orbit control
  image: /logo.png
permalink: /en/glossary/other/actuator-error/
---

# Actuator Error

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Actuator error refers to the deviation between the actual thrust and the desired thrust when a spacecraft's propulsion system executes a control command. Actuator error is an unavoidable error source in orbit control, constituting one of the main uncertainties in orbit keeping control alongside navigation error.

## Error Sources

| Error Type | Description |
| :--- | :--- |
| Thrust magnitude error | Deviation of actual thrust magnitude from the nominal value |
| Thrust direction error | Deviation of actual thrust direction from the desired direction |
| Thrust duration error | Deviation in engine ignition time and duration |
| Attitude coupling error | Thrust direction error caused by attitude control deviations |

## Impact on Orbit Keeping

In DRO orbit keeping control, the effects of actuator error include:

- **Velocity increment deviation**: The actual $\Delta v$ applied differs from the desired value
- **Coupling with navigation errors**: The combined effect of actuator and navigation errors accumulates and amplifies
- **Fuel consumption uncertainty**: Actual fuel consumption differs from theoretical predictions

## Related Concepts

- [Impulse Thrust](/en/glossary/other/impulse-thrust/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)
- [Navigation Error](/en/glossary/other/navigation-error/)
- [Insertion Error](/en/glossary/other/insertion-error/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
