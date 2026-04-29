---
title: Navigation Error
description: Detailed analysis of navigation error sources, types, and their impact on orbit control
keywords: Navigation Error, Orbit Determination, Measurement Error, Orbit Control, Cislunar Space
author: Tianjiang Says
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Navigation Error
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Navigation Error Details | Critical Error Source for Orbit Control
  description: Detailed analysis of navigation error sources, types, and their impact on orbit control
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Navigation Error Details | Critical Error Source for Orbit Control
  description: Detailed analysis of navigation error sources, types, and their impact on orbit control
  image: /logo.png
permalink: /en/glossary/other/navigation-error/
---

# Navigation Error

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Navigation error refers to the deviation between the determined orbital state (through ground-based tracking or autonomous navigation) and the true orbital state. Navigation error is an important error source in orbit keeping control, directly affecting control strategy accuracy and fuel consumption.

## Error Sources

| Error Type | Description |
|:---|:---|
| Measurement noise | Random errors in range, range-rate, and angle observations |
| Model error | Orbit prediction deviations due to imprecise dynamical models |
| Time synchronization error | Errors due to inaccurate observation time tagging |
| Reference frame error | Errors in ground station coordinates, Earth rotation parameters, etc. |

## Impact on Orbit Keeping

In DRO orbit keeping control, the effects of navigation error include:

- **Reduced control accuracy**: Navigation errors cause discrepancies between computed and actual required control maneuvers
- **Increased fuel consumption**: Imprecise navigation information may lead to excessive or misdirected control maneuvers
- **Coupling with actuator errors**: The combined effect of navigation and actuator errors further degrades control performance

## Related Concepts

- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)
- [Insertion Error](/en/glossary/other/insertion-error/)
- [Actuator Error](/en/glossary/other/actuator-error/)
- [Impulse Thrust](/en/glossary/other/impulse-thrust/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
