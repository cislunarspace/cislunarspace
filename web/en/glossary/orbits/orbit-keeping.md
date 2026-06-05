---
title: Orbit Keeping (Station-Keeping)
description: Detailed analysis of orbit keeping methods, strategies, and their application to DRO missions
keywords: Orbit Keeping, Station-Keeping, Control Strategy, Impulse Thrust, Continuous Thrust, DRO
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Orbit Keeping (Station-Keeping)
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Orbit Keeping Details | Maintaining Spacecraft on Reference Orbits
  description: Detailed analysis of orbit keeping methods, strategies, and their application to DRO missions
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Orbit Keeping Details | Maintaining Spacecraft on Reference Orbits
  description: Detailed analysis of orbit keeping methods, strategies, and their application to DRO missions
  image: /logo.png
permalink: /en/glossary/orbits/orbit-keeping/
---

# Orbit Keeping

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Orbit keeping (station-keeping) refers to the set of control strategies and maneuvers used to maintain a spacecraft on or near its designed reference orbit, counteracting perturbations from environmental forces, navigation errors, and execution uncertainties.

## Classification by Control Mode

| Mode | Description | Characteristics |
|:---|:---|:---|
| **Impulse thrust** | Discrete maneuvers at specific epochs | Closed-loop, lower fuel, coupled with orbit determination |
| **Continuous thrust** | Persistent low-thrust propulsion | Open-loop, higher fuel, decoupled from orbit determination |

## Classification by Strategy

| Strategy | Description |
|:---|:---|
| **Targeting method** | Minimize weighted deviation-control cost at each epoch |
| **Dynamic target method** | DE-optimized control parameters for lower fuel consumption |
| **Floquet mode method** | Eliminate unstable perturbation components |

## Orbit Keeping for DRO

DRO orbit keeping has unique characteristics:

- **Inherent stability**: DROs are naturally stable, requiring only small corrections
- **Perturbation sources**: Solar radiation pressure, solar gravity, navigation and execution errors
- **Fuel consumption**: DRO station-keeping typically requires very low ΔV per year
- **Control frequency**: Can be relatively infrequent due to orbit stability

## Error Sources

The main error sources affecting orbit keeping performance:

- **Insertion errors**: Initial orbit deviation from the designed reference
- **Navigation errors**: Uncertainty in orbit determination
- **Actuator errors**: Imperfect execution of control maneuvers
- **Environmental perturbations**: Unmodeled forces (solar radiation pressure, third-body gravity)

## Related Concepts

- [Targeting Method](/en/glossary/dynamics/targeting-method/)
- [Dynamic Target Method](/en/glossary/dynamics/dynamic-target-method/)
- [Floquet Mode Method](/en/glossary/other/floquet-mode/)
- [Impulse Thrust](/en/glossary/other/impulse-thrust/)
- [Distant Retrograde Orbit (DRO)](/en/glossary/orbits/dro/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
