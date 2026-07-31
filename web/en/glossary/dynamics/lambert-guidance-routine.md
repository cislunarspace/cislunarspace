---
title: Lambert Guidance Routine
description: A real-time guidance algorithm embedding Lambert problem solutions into the powered flight phase: at each integration step, solve the Lambert problem from current state to target to determine requi...
keywords: Lambert Guidance Routine
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Lambert Guidance Routine
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Lambert Guidance Routine Explained | Term Definition
  description: A real-time guidance algorithm embedding Lambert problem solutions into the powered flight phase: at each integration step, solve the Lambert problem from current state to target to determine requi...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Lambert Guidance Routine Explained | Term Definition
  description: A real-time guidance algorithm embedding Lambert problem solutions into the powered flight phase: at each integration step, solve the Lambert problem from current state to target to determine requi...
  image: /logo.png
permalink: /en/glossary/dynamics/lambert-guidance-routine/
---
# Lambert Guidance Routine

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A real-time guidance algorithm embedding Lambert problem solutions into the powered flight phase: at each integration step, solve the Lambert problem from current state to target to determine required velocity, then command thrust along the velocity deficit direction. Thrust terminates when the deficit falls below a threshold, followed by ballistic flight.

## Application Value

This term has significant application value in cislunar space missions。In the orbital design phase, engineers use relevant theories for trajectory optimization；In navigation and orbit determination, it is used to improve measurement accuracy；In attitude control and orbit maintenance tasks, it ensures stable spacecraft operation。In practical applications, parameter optimization and algorithm adaptation can be combined with mission requirements to improve mission success rate and resource utilization efficiency。

## Related Concepts

- [Characteristic Exponents](/en/glossary/dynamics/characteristic-exponents/)
- [Capture Docking Phase](/en/glossary/navigation/capture-docking-phase/)
- [Lunar Flyby Transfer](/en/glossary/orbits/lunar-flyby-transfer/)

## References

- Burns和Scherock - 2004