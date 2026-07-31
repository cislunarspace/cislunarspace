---
title: Skip Reentry
description: A detailed analysis of the skip reentry definition, trajectory characteristics, and its application in spacecraft return
keywords: Skip Reentry, Lifting Reentry, Reentry Trajectory, Atmospheric Entry and Exit
author: Tianjiang Shuo
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: Skip Reentry
  desc: One-stop learning for cislunar space research frontiers, terminology, and tool resources.
  image: /logo.png
og:
  title: "Skip Reentry | Terminology Definition"
  description: A detailed analysis of the skip reentry definition and trajectory characteristics
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Skip Reentry | Terminology Definition"
  description: A detailed analysis of the skip reentry definition and trajectory characteristics
  image: /logo.png
permalink: /en/glossary/fundamentals/skip-reentry/
---

# Skip Reentry

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Skip reentry refers to a reentry mode in which a spacecraft enters the atmosphere at a small reentry angle, uses lift to exit the atmosphere again, follows a ballistic arc, and then reenters the atmosphere. The spacecraft can pass through the atmosphere multiple times, utilizing the atmosphere for deceleration on each entry. Trajectories that, after initial atmospheric entry, do not exit the atmosphere again but exhibit large altitude variations due to lift are also classified as skip trajectories.

## Core Elements

### Trajectory Characteristics

The main differences between skip reentry trajectories and ballistic and lifting trajectories:

| Trajectory Type | Altitude Variation | Lift Utilization | Deceleration Method |
| :--- | :--- | :--- | :--- |
| Ballistic reentry | Monotonic descent | None or uncontrolled | Single-pass atmospheric deceleration |
| Lifting reentry | Gradual descent | Continuous utilization | Continuous atmospheric deceleration |
| Skip reentry | Large oscillations | Intermittent utilization | Multiple-pass atmospheric deceleration |

### Physical Mechanism

Skip reentry uses lift to achieve periodic altitude variations:

1. Enter the atmosphere at a small reentry angle, generating lift
2. Lift pushes the spacecraft out of the atmosphere into a ballistic flight segment
3. In the vacuum segment, no aerodynamic forces act; the spacecraft follows an elliptical arc
4. Reenter the atmosphere and continue decelerating
5. The process can repeat multiple times until the velocity drops to the desired value

### Trajectory Altitude Oscillations

The altitude of a skip reentry trajectory exhibits large oscillations. During each atmospheric entry and exit:

- Atmospheric entry phase: Aerodynamic drag decelerates the vehicle, causing aerodynamic heating
- Extra-atmospheric phase: No aerodynamic forces; free flight along an elliptical arc
- Deceleration effects accumulate with each atmospheric pass

### Comparison with Ballistic Reentry

| Comparison Item | Ballistic Reentry | Skip Reentry |
| :--- | :--- | :--- |
| Reentry angle | Can be relatively large | Must be relatively small |
| Deceleration process | Severe, completed in one pass | Gentle, distributed across multiple passes |
| Peak load factor | Higher | Lower |
| Range | Shorter | Longer |
| Landing precision | Lower | Adjustable via lift |

## Application Value

Skip reentry is an important method for achieving gentle deceleration through the use of lift. By passing through the atmosphere multiple times, the total deceleration is distributed across several atmospheric passes, reducing the single-pass peak load factor and peak heat flux. This approach is suitable for hypersonic return missions requiring reduced reentry thermal loads and for high-speed reentry scenarios returning from the Moon or other planets.

## Related Concepts

- [Trim Angle of Attack](/en/glossary/fundamentals/trim-angle-of-attack/)
- [Reentry Corridor](/en/glossary/fundamentals/reentry-corridor/)
- [Zero-Angle-of-Attack Reentry](/en/glossary/fundamentals/zero-angle-of-attack-reentry/)
- [Stagnation Heat Flux](/en/glossary/fundamentals/stagnation-heat-flux/)
- [Reentry Phase](/en/glossary/fundamentals/reentry-phase/)

## References

- Zheng W, An X Y, Zhou X, He R Z. Aerospace Flight Mechanics[M]. National University of Defense Technology, 2026.
- Jia P R, Chen K J, et al. Long-Range Rocket Ballistics[M]. National University of Defense Technology Press.
