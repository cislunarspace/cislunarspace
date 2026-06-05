---
title: Thrust-to-Weight Ratio
description: Definition of thrust-to-weight ratio, its relationship with vertical liftoff time, and application in rocket design
keywords: Thrust-to-Weight Ratio, Vertical Liftoff Time, Launch Acceleration Performance, Rocket Design
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Thrust-to-Weight Ratio
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Thrust-to-Weight Ratio | Terminology Definition
  description: Definition and relationship of thrust-to-weight ratio with vertical liftoff time
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Thrust-to-Weight Ratio | Terminology Definition
  description: Definition and relationship of thrust-to-weight ratio with vertical liftoff time
  image: /logo.png
permalink: /en/glossary/fundamentals/thrust-to-weight-ratio/
---

# Thrust-to-Weight Ratio

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The thrust-to-weight ratio $P_0/G_0$ is the ratio of a rocket's rated sea-level thrust $P_0$ to its liftoff weight $G_0$. It is the key parameter characterizing the rocket's launch acceleration capability. A higher thrust-to-weight ratio means better liftoff acceleration performance.

## Core Elements

### Relationship with Vertical Liftoff Time

The thrust-to-weight ratio directly determines the duration of the vertical liftoff phase. During preliminary design, the vertical liftoff time $t_1$ can be estimated by the following approximate formula:

$$t_1 = \sqrt{\frac{40}{\frac{1}{\nu_0} - 1}}$$

where $\nu_0 = G_0/P_0$ is the inverse of the thrust-to-weight ratio.

| Thrust-to-Weight Ratio $P_0/G_0$ | Vertical Liftoff Time $t_1$ |
|:---|:---|
| 1.0 | approximately 17 s |
| 2.0 | approximately 6 s |
| 3.0 | approximately 2 s |

A higher thrust-to-weight ratio indicates better launch acceleration performance and allows a shorter vertical liftoff phase.

### Impact on Flight Program

| Aspect | High Thrust-to-Weight Ratio | Low Thrust-to-Weight Ratio |
|:---|:---|:---|
| Vertical liftoff time | Short | Long |
| Speed at turn initiation | High | Low |
| Normal force required for turn | Large | Small |
| Gravity velocity loss | Small | Large |

### Design Constraints

The choice of vertical liftoff time must satisfy:
- Not too long: otherwise gravity velocity loss increases, and the velocity at turn initiation is too high, requiring large normal forces
- Not too short: otherwise the engine may not have reached rated operating conditions at turn initiation, and the control actuators may not generate sufficient control force

Typically, the vertical liftoff time should extend at least until the engine reaches its rated operating condition.

## Application Value

The thrust-to-weight ratio is one of the core parameters in rocket overall design, directly affecting launch performance and flight program design. The selection of the thrust-to-weight ratio requires trade-offs among acceleration capability, structural mass, and propellant loading. For large launch vehicles, the thrust-to-weight ratio is typically between 1.2 and 1.5. For ballistic missiles, the thrust-to-weight ratio may be higher to achieve better maneuverability.

## Related Concepts

- [Thrust](/en/glossary/fundamentals/thrust/)
- [Specific Impulse](/en/glossary/fundamentals/specific-impulse/)

## References

- Zheng Wei, An Xueying, Zhou Xiang, He Ruizhi. Aerospace Flight Mechanics (空天飞行力学)[M]. National University of Defense Technology, 2026.
- Jia Peiran, Chen Kejun, et al. Long-Range Rocket Ballistics (远程火箭弹道学)[M]. National University of Defense Technology Press.
