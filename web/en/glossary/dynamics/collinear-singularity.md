---
title: Collinear Singularity
description: Ill-conditioned phenomenon in Lambert problem where velocity vectors become indeterminate and orbital plane cannot be determined when position vectors are collinear.
keywords: Collinear Singularity, Lambert problem, singularity, orbital maneuver
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Collinear Singularity
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Collinear Singularity Explained | Term Definition"
  description: Ill-conditioned phenomenon where velocity vectors become indeterminate when position vectors are collinear in Lambert problem.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Collinear Singularity Explained | Term Definition"
  description: Ill-conditioned phenomenon where velocity vectors become indeterminate when position vectors are collinear in Lambert problem.
  image: /logo.png
permalink: /en/glossary/dynamics/collinear-singularity/
---

# Collinear Singularity

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

Ill-conditioned phenomenon in Lambert problem where velocity vectors become indeterminate and orbital plane cannot be determined when position vectors are collinear.

## Application Value

In orbital transfer design, the Lambert problem is the core mathematical tool for solving optimal transfer trajectories between two points. However, when departure and target positions happen to be collinear, standard Lambert solvers fail, with velocity vectors becoming indeterminate. In practical missions, this means such singular configurations must be avoided, which can be achieved by slightly adjusting transfer time or selecting different midcourse points. This phenomenon also reminds orbital designers to check whether input configurations approach collinear singularities when using Lambert tools for transfer trajectory calculation, employing regularization methods or numerical avoidance strategies when necessary.

## Related Concepts

- [Lambert Orbit Maneuver](/en/glossary/dynamics/lambert-orbit-maneuver/)
- [Orbital Transfer](/en/glossary/dynamics/orbital-transfer/)
- [Two-Impulse Rendezvous Maneuver](/en/glossary/dynamics/two-impulse-rendezvous-maneuver/)
- [Co-Orbital Rendezvous](/en/glossary/dynamics/co-orbital-rendezvous/)

## References

- Uncertain Lambert Problem
