---
title: Stagnation Heat Flux
description: A detailed analysis of the stagnation heat flux definition, calculation formula, and its constraint role in reentry corridor design
keywords: Stagnation Heat Flux, Aerodynamic Heating, Reentry Thermal Protection, Heat Flux Limit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Stagnation Heat Flux
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Stagnation Heat Flux | Terminology Definition
  description: A detailed analysis of the stagnation heat flux definition and calculation formula
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Stagnation Heat Flux | Terminology Definition
  description: A detailed analysis of the stagnation heat flux definition and calculation formula
  image: /logo.png
permalink: /en/glossary/fundamentals/stagnation-heat-flux/
---

# Stagnation Heat Flux

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The stagnation heat flux $q_s$ is the heat flux density at the most severe aerodynamic heating location on the reentry vehicle surface — the stagnation point. The stagnation point is where the airflow velocity drops to zero and the temperature is highest. The heat flux density is:

$$q_s = k_s\sqrt{\rho}\,v^3$$

where $k_s$ is a coefficient related to the vehicle geometry, $\rho$ is the atmospheric density, and $v$ is the flight velocity.

## Core Elements

### Heat Flux Formula Analysis

The stagnation heat flux is related to the following factors:

| Parameter | Effect |
|:---|:---|
| Atmospheric density $\rho$ | Heat flux is proportional to $\sqrt{\rho}$; lower altitude means higher density |
| Flight velocity $v$ | Heat flux is proportional to $v^3$; velocity has the most significant effect |
| Geometry coefficient $k_s$ | Depends on the vehicle nose shape and radius |

### Heat Flux Limit Boundary

In reentry corridor design, the stagnation heat flux is the most stringent thermal constraint. The maximum heat flux limit condition is:

$$q_s \leq (q_s)_{\max}$$

The resulting corridor boundary equation:

$$D = \frac{C_x S_M}{2m}\frac{(q_s)_{\max}^2}{k_s^2 v^4}$$

In the $D$-$v$ plane, this boundary is a curve that rises sharply as velocity decreases.

### Conditions for Maximum Heat Flux

For zero-angle-of-attack reentry, the maximum heat flux occurs at specific altitude and velocity conditions. Based on the velocity decay law and density distribution, the maximum heat flux is closely related to the reentry velocity $v_e$ and reentry angle $\Theta_e$. Reducing $|\Theta_e|$ can lower the peak heat flux, which is the physical basis for skip reentry's ability to reduce thermal loads.

### Thermal Protection Design

| Protection Method | Principle | Typical Application |
|:---|:---|:---|
| Ablative protection | Material ablation absorbs heat | Warheads, return capsules |
| Radiation protection | High-temperature surface radiates heat | Space shuttles |
| Insulation protection | Insulation layers block heat conduction | Various spacecraft |

## Application Value

The stagnation heat flux is the core parameter for reentry vehicle thermal protection design. In reentry corridor determination, the heat flux limit is typically the primary factor defining the upper corridor boundary ($|\Theta_e|_{\max}$). By properly designing the vehicle geometry (increasing nose radius reduces $k_s$), selecting the reentry trajectory (reducing the reentry angle or employing skip reentry), and using advanced thermal protection materials, reentry thermal loads can be effectively controlled.

## Related Concepts

- [Reentry Corridor](/en/glossary/fundamentals/reentry-corridor/)
- [Zero-Angle-of-Attack Reentry](/en/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [Skip Reentry](/en/glossary/fundamentals/skip-reentry/)
- [Ballistic Coefficient](/en/glossary/fundamentals/ballistic-coefficient/)
- [Reentry Phase](/en/glossary/fundamentals/reentry-phase/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
