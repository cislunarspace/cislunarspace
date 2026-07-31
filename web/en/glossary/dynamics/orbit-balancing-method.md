---
title: Orbit Balancing Method
description: A libration point orbit stationkeeping strategy, also called orbit continuation. Instead of targeting a predefined reference orbit, it selects maneuver locations on the current trajectory and sets velocity or energy goals several revolutions downstream to sustain the orbit. For example, the x-velocity at x-axis crossings is set slightly negative to keep the trajectory spiraling inward toward the libration point. The VF13AD optimizer determines the delta-V direction and timing subject to spin-plane constraints. Its advantage is independence from a reference orbit, making it suitable for missions like ARTEMIS that have no strict orbital requirements.
keywords: Orbit Balancing Method, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Orbit Balancing Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Orbit Balancing Method Explained | Term Definition
  description: A libration point orbit stationkeeping strategy, also called orbit continuation. Instead of targeting a predefined reference orbit, it selects maneuver locations on the current trajectory and sets velocity or energy goals several revolutions downstream to sustain the orbit. For example, the x-velocity at x-axis crossings is set slightly negative to keep the trajectory spiraling inward toward the libration point. The VF13AD optimizer determines the delta-V direction and timing subject to spin-plane constraints. Its advantage is independence from a reference orbit, making it suitable for missions like ARTEMIS that have no strict orbital requirements.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Orbit Balancing Method Explained | Term Definition
  description: A libration point orbit stationkeeping strategy, also called orbit continuation. Instead of targeting a predefined reference orbit, it selects maneuver locations on the current trajectory and sets velocity or energy goals several revolutions downstream to sustain the orbit. For example, the x-velocity at x-axis crossings is set slightly negative to keep the trajectory spiraling inward toward the libration point. The VF13AD optimizer determines the delta-V direction and timing subject to spin-plane constraints. Its advantage is independence from a reference orbit, making it suitable for missions like ARTEMIS that have no strict orbital requirements.
  image: /logo.png
permalink: /en/glossary/dynamics/orbit-balancing-method/
---

# Orbit Balancing Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A libration point orbit stationkeeping strategy, also called orbit continuation. Instead of targeting a predefined reference orbit, it selects maneuver locations on the current trajectory and sets velocity or energy goals several revolutions downstream to sustain the orbit. For example, the x-velocity at x-axis crossings is set slightly negative to keep the trajectory spiraling inward toward the libration point. The VF13AD optimizer determines the delta-V direction and timing subject to spin-plane constraints. Its advantage is independence from a reference orbit, making it suitable for missions like ARTEMIS that have no strict orbital requirements.

## Application Value

This concept provides fundamental support in cislunar space research and mission design. In practical applications, the appropriate analysis method should be selected based on specific mission scenarios and constraints.

## Related Concepts

- [Conservative System](/en/glossary/dynamics/conservative-system/)
- [Space Manifold Dynamics, SMD](/en/glossary/dynamics/space-manifold-dynamics-smd/)
- [Radial-Transverse-Normal Frame, RSW Frame](/en/glossary/dynamics/radial-transverse-normal-frame-rsw-frame/)

## References

- Folta et al. 2010
