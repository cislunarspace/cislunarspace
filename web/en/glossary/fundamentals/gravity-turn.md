---
title: Gravity Turn
description: Detailed explanation of the definition, physical mechanism, and application of gravity turn in the atmospheric flight phase of rockets
keywords: Gravity Turn, Zero-Angle-of-Attack Turn, Atmospheric Flight Phase, Normal Load Factor
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Gravity Turn
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Gravity Turn | Terminology Definition
  description: Detailed explanation of the gravity turn definition and physical mechanism
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gravity Turn | Terminology Definition
  description: Detailed explanation of the gravity turn definition and physical mechanism
  image: /logo.png
permalink: /en/glossary/fundamentals/gravity-turn/
---

# Gravity Turn

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A gravity turn is a flight maneuver in which a rocket maintains zero angle of attack during the atmospheric flight phase, relying solely on the normal component of gravity $-mg\cos\theta$ to achieve trajectory turning. Since the angle of attack is zero, the rocket produces no aerodynamic lift, and the turn is entirely driven by the gravitational component.

## Core Elements

### Physical Mechanism

During a gravity turn, the normal load factor of the rocket is:

$$n_y = \frac{v\dot{\theta} - g\cos\theta}{g_0}$$

When the angle of attack $\alpha = 0$, the aerodynamic normal force component is zero, and the rocket turns solely under the action of the normal gravity component. In this case $\dot{\theta} = \dot{\varphi}$, so limiting the normal load factor is equivalent to limiting $\dot{\varphi}$.

### Comparison with Turning at Non-Zero Angle of Attack

| Comparison Item | Gravity Turn | Turning at Non-Zero Angle of Attack |
| :--- | :--- | :--- |
| Angle of Attack | $\alpha = 0$ | $\alpha \neq 0$ |
| Aerodynamic Load | Low | Relatively High |
| Turning Rate | Slow (limited by gravity) | Fast (assisted by aerodynamic force) |
| Velocity Loss | Low drag loss | Higher drag loss |
| Applicable Phase | Transonic, high dynamic pressure | Low dynamic pressure |

### Application Timing

During the turning process in the atmospheric flight phase:

- **Non-zero angle-of-attack turning segment** ($t_1 \sim t_2$): Low dynamic pressure phase, using angle of attack to generate aerodynamic force for rapid turning
- **High dynamic pressure turning segment** ($t_2 \sim t_3$): Transonic and high dynamic pressure phase, adopting gravity turn

The gravity turn is mainly applied during the high dynamic pressure phase because:

- Aerodynamic forces change dramatically in the transonic regime; maintaining zero angle of attack improves control system operating conditions
- Reduces aerodynamic loads and aerodynamic disturbances
- Reduces drag velocity losses

### Design Constraints

The gravity turn segment design must satisfy:

- Normal load factor limit: $n_y \leq (n_y)_{\max}$
- Pitch rate limit: $|\dot{\varphi}_{pr}| \leq (\dot{\varphi}_{pr})_{\max}$
- Pitch acceleration limit: $|\ddot{\varphi}_{pr}| \leq (\ddot{\varphi}_{pr})_{\max}$

## Application Value

The gravity turn is an important turning method for the atmospheric flight phase of rockets. By maintaining zero angle of attack during the high dynamic pressure phase, it effectively reduces aerodynamic loads, protects the vehicle structure, and improves control system operating conditions. Zero-angle-of-attack flight also reduces drag losses, which helps increase payload capacity. The proper combination of gravity turns and non-zero-angle-of-attack turns is a key aspect of flight program design for the atmospheric flight phase.

## Related Concepts

- [Pitch Program Angle](/en/glossary/fundamentals/pitch-program/)
- [Powered Phase Turning Process](/en/glossary/fundamentals/turning-program/)
- [Launch Azimuth](/en/glossary/fundamentals/launch-azimuth/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
