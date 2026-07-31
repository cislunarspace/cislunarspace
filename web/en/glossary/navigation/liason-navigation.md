---
title: LiAISON Navigation
description: Linked Autonomous Interplanetary Satellite Orbit Navigation using only inter-satellite measurements for absolute orbit determination at libration points.
keywords: LiAISON, autonomous navigation, inter-satellite link, libration point, orbit determination
author: CislunarSpace
date: 2026-04-29
lastUpdated: 2026-04-29
wechatShare:
  title: LiAISON Navigation
  desc: One-stop learning for cislunar space research frontiers, terminology definitions, and tool resources.
  image: /logo.png
og:
  title: "LiAISON Navigation Details | Cislunar Navigation"
  description: Linked Autonomous Interplanetary Satellite Orbit Navigation using only inter-satellite measurements for absolute orbit determination at libration points.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "LiAISON Navigation Details | Cislunar Navigation"
  description: Linked Autonomous Interplanetary Satellite Orbit Navigation using only inter-satellite measurements for absolute orbit determination at libration points.
  image: /logo.png
permalink: /en/glossary/navigation/liason-navigation/
---

# LiAISON Navigation

> Author: [CislunarSpace](https://cislunarspace.cn)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

LiAISON (Linked Autonomous Interplanetary Satellite Orbit Navigation) is an autonomous navigation concept proposed by Hill et al. in 2005. This approach uses only inter-satellite pseudorange measurements for absolute orbit determination, eliminating the need for ground-based tracking or traditional radiometric observables.

The LiAISON concept relies on the asymmetry and local uniqueness of libration point orbits. Because trajectories near collinear libration points have strong nonlinear dynamics and geometric asymmetry, crosslink range measurements between spacecraft provide sufficient observability for full state estimation. Through continuous inter-satellite range measurements, autonomous navigation at libration points can achieve real-time onboard measurement accuracy of approximately 10 meters.

This navigation method is particularly valuable for deep-space missions where ground tracking resources are limited or communication delays are significant. It enables spacecraft to maintain precise knowledge of their orbits without dependence on Earth-based infrastructure.

## Key Properties

- **Inter-satellite only:** Requires only crosslink pseudorange measurements, no ground tracking
- **Libration point specific:** Exploits the dynamic asymmetry unique to libration point orbits
- **Autonomous operation:** Full onboard processing without ground-in-the-loop
- **~10 meter accuracy:** Achievable real-time positioning accuracy at libration points
- **Local uniqueness:** The nonlinear dynamics provide natural observability through geometric diversity

## Related Concepts

- [Libration Point](/en/glossary/dynamics/libration-point/)
- [Halo Orbit](/en/glossary/orbits/halo-orbit/)

## References

- Hill, K., Born, G. H., & Lo, M. W. (2005). "Linked Autonomous Interplanetary Satellite Orbit Navigation (LiAISON)." 15th AAS/AIAA Space Flight Mechanics Meeting.
