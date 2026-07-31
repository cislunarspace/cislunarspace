---
title: Zero-Effort Miss (ZEM)
description: Zero-effort miss is a parameter describing the degree to which a pursuer would miss the target if both parties maintain their current states, widely applied in guidance law design and threat assessment.
wechatShare:
  title: Zero-Effort Miss (ZEM)
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
keywords: Zero-Effort Miss, ZEM, Pursuit-Evasion Game, Guidance Law, Intercept Guidance
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
og:
  title: "Zero-Effort Miss (ZEM) | Guidance Terminology"
  description: A parameter describing the degree to which the target would be missed if current states are maintained, applied in pursuit-evasion games and intercept guidance
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Zero-Effort Miss (ZEM) | Guidance Terminology"
  description: A parameter describing the degree to which the target would be missed if current states are maintained, applied in pursuit-evasion games and intercept guidance
  image: /logo.png
permalink: /en/glossary/dynamics/zero-effort-miss/
---

# Zero-Effort Miss (ZEM)

> Author: [Tianjiang Says](https://blog.csdn.net/qq_33254264)
>
> This article is based on Zhang Chengming (2021) Research on Guidance Strategies for Spacecraft Pursuit-Evasion Games.

## Definition

Zero-Effort Miss (ZEM) is the closest approach distance between the pursuer and the target at a future time, assuming both the pursuer and the target maintain their current states (no additional control inputs). When ZEM is zero, it indicates that the pursuer will successfully capture the target.

ZEM is a core parameter in pursuit-evasion games and guidance law design, used for:

- Assessing the feasibility of the current interception/pursuit scheme
- Designing feedback guidance laws
- Real-time threat assessment for the pursuing party

## Mathematical Definition

In an inertial coordinate frame, the zero-effort miss at time $t$ is defined as:
$$\text{ZEM}(t) = \boldsymbol{r}_p(t_f) - \boldsymbol{r}_e(t_f | \boldsymbol{r}_p(t), \boldsymbol{r}_e(t))$$

i.e., the position difference when both parties are propagated to the terminal time $t_f$ assuming they maintain their current states.

### Simplified Form

For short-range pursuit-evasion problems, the CW equation-based ZEM can be approximated as:
$$|\text{ZEM}| \approx \sqrt{(\Delta x)^2 + (\Delta y)^2 + (\Delta z)^2}$$

where $\Delta x, \Delta y, \Delta z$ are the current relative position components.

## Application in Pursuit-Evasion Games

### Pursuit-Evasion-Defense Problem

Zhang Chengming (2021) combined ZEM with fuzzy comprehensive evaluation methods in spacecraft pursuit-evasion-defense problems:

1. **Real-time ZEM computation**: The pursuing party computes ZEM with the evading party in real time
2. **Threat assessment**: Assess the pursuing party's threat level from the defending party based on ZEM
3. **Guidance decision**: Determine the pursuing party's guidance strategy based on threat level

### Fuzzy Comprehensive Evaluation

Steps of the ZEM-based fuzzy comprehensive evaluation method:

1. Establish membership functions between ZEM and threat levels
2. Consider multiple factors comprehensively (ZEM, relative velocity, remaining fuel, etc.)
3. Determine the fuzzy threat level for the pursuing party
4. Select the corresponding guidance strategy based on the threat level

## Relationship with Guidance Laws

### Proportional Navigation

The guidance command of proportional navigation is closely related to the ZEM direction:
$$a_c \propto \dot{r} \cdot \text{ZEM}$$

where $\dot{r}$ is the closing velocity.

### Optimal Guidance Law

In optimal guidance law design considering zero-effort miss, the objective is to minimize the terminal ZEM.

## Typical Values

| ZEM Range | Tactical Meaning |
| :--- | :--- |
| ZEM approx 0 | Interception/capture about to succeed |
| ZEM > 0 | Possible miss, course correction needed |
| ZEM >> intercept radius | Significant miss, replanning required |

## Application Scenarios

- **Missile interception**: Guidance law design for air-to-air and surface-to-air missiles
- **Spacecraft rendezvous and docking**: Collision avoidance during the approach phase
- **Space debris avoidance**: Timing decisions for evasive maneuvers
- **Pursuit-evasion games**: Real-time threat assessment and strategy selection

## References

- Zhang Chengming. Research on Guidance Strategies for Spacecraft Pursuit-Evasion Games[D]. National University of Defense Technology, 2021. [in Chinese]
- Shinar J, Shima T. Non-Unique Solutions in Missile Interception Guidance[J]. Journal of Guidance, Control, and Dynamics, 1998.
- Zarch P. Guided Weapons[M]. Elsevier, 2013.
