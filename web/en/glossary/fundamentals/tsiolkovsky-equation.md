---
title: Tsiolkovsky Rocket Equation
description: A detailed analysis of the Tsiolkovsky rocket equation — its derivation, physical meaning, central role in rocket engineering, and multi-stage rocket design
keywords: Tsiolkovsky equation, rocket equation, velocity increment, specific impulse, mass ratio, multi-stage rocket
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Tsiolkovsky Rocket Equation
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Tsiolkovsky Rocket Equation | Terminology Definition"
  description: A detailed analysis of the Tsiolkovsky rocket equation — its derivation, physical meaning, and central role in rocket engineering
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Tsiolkovsky Rocket Equation | Terminology Definition"
  description: A detailed analysis of the Tsiolkovsky rocket equation — its derivation, physical meaning, and central role in rocket engineering
  image: /logo.png
permalink: /en/glossary/fundamentals/tsiolkovsky-equation/
---

# Tsiolkovsky Rocket Equation

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Tsiolkovsky rocket equation is the fundamental equation of rocket dynamics. It describes the relationship between the velocity increment gained by a rocket during engine operation and the engine exhaust velocity, as well as the ratio of the rocket's initial mass to its final mass, under the ideal assumption of no aerodynamic forces or gravitational effects. The equation was derived by the Russian scientist Konstantin Tsiolkovsky (1857-1935) in 1897.

$$\Delta v = I_{sp} g_0 \ln \frac{m_0}{m_f}$$

where:

- $\Delta v$: velocity increment
- $I_{sp}$: engine specific impulse
- $g_0$: standard gravitational acceleration (9.80665 m/s^2)
- $m_0$: initial rocket mass (including propellant)
- $m_f$: final rocket mass (after propellant depletion)
- $m_0/m_f$: mass ratio

## Core Elements

### Physical Meaning

The Tsiolkovsky rocket equation reveals the fundamental laws of rocket flight:

1. **Velocity increment is proportional to specific impulse**: Higher specific impulse (greater engine efficiency) yields larger velocity increments for the same mass ratio
2. **Velocity increment is proportional to the logarithm of the mass ratio**: A larger mass ratio (more propellant carried) yields a larger velocity increment, but with diminishing returns
3. **Exponential growth of difficulty**: To increase velocity increments linearly, the mass ratio must grow exponentially -- this is known as the "tyranny of the rocket equation"

### Mass Ratio Limitations

Since structural mass cannot be zero, the mass ratio has a practical upper limit. For a single-stage rocket, the structural coefficient (structural mass / initial mass) is typically between 0.05 and 0.15, corresponding to a maximum mass ratio of approximately 7 to 20 and a maximum velocity increment of roughly 2 to 3 times the specific impulse.

### Multi-Stage Rocket Concept

To overcome the mass ratio limitation of single-stage rockets, Tsiolkovsky proposed the multi-stage rocket concept: the rocket is divided into multiple stages, each of which is jettisoned after its propellant is depleted, thereby reducing the dead weight for subsequent flight. The total velocity increment of a multi-stage rocket is the sum of the velocity increments of all stages:

$$\Delta v_{total} = \sum_{i=1}^{n} I_{sp,i} g_0 \ln \frac{m_{0,i}}{m_{f,i}}$$

### Historical Significance

Tsiolkovsky is the founder of modern astronautics and rocket theory. He proposed the concept and schematic of liquid-propellant rockets, derived the rocket equation, and put forward forward-looking concepts such as multi-stage rockets and space colonization. American scientist Robert Goddard and German rocket pioneer Hermann Oberth further advanced the engineering realization of rocket technology on this foundation.

## Application Value

The Tsiolkovsky rocket equation is a foundational tool for rocket systems engineering, used to:

- Estimate the velocity increment budget ($\Delta v$) required for a mission
- Determine the number of stages and mass allocation of a rocket
- Evaluate the impact of engine performance on payload capacity
- Conduct preliminary analysis for orbital transfers and mission planning

## Related Concepts

<!-- EN mirrors for powered phase, aerospace vehicle, and orbital maneuver do not exist yet -->

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- Tsiolkovsky K E. Exploration of World Space with Reaction Devices[R]. 1903.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
