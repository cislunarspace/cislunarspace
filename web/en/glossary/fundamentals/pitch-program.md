---
title: Pitch Program Angle
description: Detailed explanation of the pitch program angle, the three phases of flight program (vertical segment, turning segment, aiming segment), and its role in trajectory design
keywords: Pitch Program Angle, Pitch Program, Flight Program, Vertical Segment, Turning Segment, Aiming Segment, Powered Phase, Trajectory Design
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Pitch Program Angle
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: Pitch Program Angle | Terminology Definition
  description: Detailed explanation of the pitch program angle, three flight phases, and its role in trajectory design
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Pitch Program Angle | Terminology Definition
  description: Detailed explanation of the pitch program angle, three flight phases, and its role in trajectory design
  image: /logo.png
permalink: /en/glossary/fundamentals/pitch-program/
---

# Pitch Program Angle

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The Pitch Program Angle ($\varphi_{pr}$) is the pre-programmed time-varying reference for the expected pitch angle of a vehicle, controlled by the guidance system. It is the core element of the powered-phase flight program design. The pitch program angle determines how the vehicle's velocity vector direction transitions from the vertical liftoff attitude to the desired angle at engine cutoff.

## Core Elements

### Three Phases of the Flight Program

The pitch program angle typically consists of three phases:

| Phase | Time Range | Pitch Program Angle | Physical Meaning |
|:---|:---|:---|:---|
| Vertical Segment | $0 \sim t_1$ | $\varphi_{pr} = 90°$ | Vertical liftoff, rapid transit through dense atmosphere |
| Turning Segment | $t_1 \sim t_2$ | Gradually decreasing from 90° | Velocity vector turns from vertical toward target direction |
| Aiming Segment | $t_2 \sim t_k$ | Maintains final value of turning segment | Preserves desired velocity direction, fine-tunes speed magnitude |

### Control Equation

The pitch program angle drives the vehicle attitude through the control equation:

$$\delta_\varphi = a_0^\varphi (\varphi - \varphi_{pr})$$

where $\delta_\varphi$ is the control deflection angle, $a_0^\varphi$ is the control gain, and $\varphi$ is the actual pitch angle. When the actual pitch angle deviates from the program angle, the control system generates a control moment to rotate the vehicle.

### Design of the Turning Segment

The turning segment is the critical phase in flight program design. Its design must satisfy:
- The flight-path angle at cutoff $\theta_k^*$ meets range or orbit insertion requirements
- The angle of attack does not exceed aerodynamic load limits
- The load factor does not exceed structural strength limits
- The flight altitude does not fall below the minimum safe altitude

The rate of the turning segment determines the angle of attack: a faster turn produces a larger angle of attack and higher aerodynamic loads.

## Application Value

The pitch program angle is the core parameter of powered-phase trajectory design. Different flight missions (range, orbit type) correspond to different pitch program angles. The program angle design directly affects cutoff parameters, flight loads, and aerodynamic loads. For launch vehicles, program angle design must also consider orbit insertion accuracy and final velocity direction. Program angle optimization is a major component of trajectory optimization.

## Related Concepts

- [Powered Phase](/en/glossary/fundamentals/powered-phase/)

## References

- 郑伟, 安雪滢, 周祥, 何睿智. 空天飞行力学[M]. 国防科技大学, 2026.
- 贾沛然, 陈克俊, 等. 远程火箭弹道学[M]. 国防科技大学出版社.
