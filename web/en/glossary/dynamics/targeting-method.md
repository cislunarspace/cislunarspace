---
title: Targeting Method
description: Detailed analysis of the targeting method for orbit keeping and its comparison with other control strategies
keywords: Targeting Method, Orbit Keeping, Station-Keeping, Control Strategy, Impulse Thrust
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Targeting Method
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: Targeting Method Details | Traditional Orbit Keeping Strategy
  description: Detailed analysis of the targeting method for orbit keeping and its comparison with other control strategies
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Targeting Method Details | Traditional Orbit Keeping Strategy
  description: Detailed analysis of the targeting method for orbit keeping and its comparison with other control strategies
  image: /logo.png
permalink: /en/glossary/dynamics/targeting-method/
---

# Targeting Method

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The targeting method is a traditional orbit keeping strategy that minimizes a weighted combination of orbit deviation and control effort. At each control epoch, the method computes a corrective maneuver that drives the spacecraft back toward the reference orbit while minimizing fuel consumption.

## Formulation

The targeting method solves an optimization problem at each control step:

$$\min_{\Delta v} \left( \| \delta \mathbf{x}(t_f) \|^2 + \rho \| \Delta v \|^2 \right)$$

where $\delta \mathbf{x}(t_f)$ is the orbit deviation at the target time, $\Delta v$ is the control velocity increment, and $\rho$ is a weighting parameter that balances orbit accuracy against fuel consumption.

## Process

1. **Determine** current orbit state through navigation
2. **Predict** future orbit evolution without control
3. **Compute** the corrective maneuver that minimizes the cost function
4. **Apply** the maneuver at the designated control epoch
5. **Repeat** at the next control cycle

## Characteristics

| Feature | Description |
|:---|:---|
| Control type | Impulse thrust (discrete maneuvers) |
| Optimality | Minimizes weighted deviation-control trade-off |
| Robustness | Handles moderate orbit perturbations |
| Fuel efficiency | Generally efficient, but may not be globally optimal |

## Related Concepts

- [Dynamic Target Method](/en/glossary/dynamics/dynamic-target-method/)
- [Orbit Keeping](/en/glossary/orbits/orbit-keeping/)
- [Impulse Thrust](/en/glossary/other/impulse-thrust/)
- [Differential Correction Method](/en/glossary/dynamics/differential-correction/)

## References

- Chen Yuju. DRO Orbit Design and Control Research for Cislunar Space Situation Awareness[D]. 2024.
