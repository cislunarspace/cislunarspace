---
title: Backward Integration Method
description: A trajectory computation method that starts from the terminal state of a known optimal solution and integrates backward in time to reduce the departure orbit...
keywords: Backward Integration Method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: Backward Integration Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Backward Integration Method Explained | Term Definition"
  description: A trajectory computation method that starts from the terminal state of a known optimal solution and integrates backward in time to reduce the departure orbit...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Backward Integration Method Explained | Term Definition"
  description: A trajectory computation method that starts from the terminal state of a known optimal solution and integrates backward in time to reduce the departure orbit...
  image: /logo.png
permalink: /en/glossary/dynamics/backward-integration-method/
---

# Backward Integration Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A trajectory computation method that starts from the terminal state of a known optimal solution and integrates backward in time to reduce the departure orbit radius. Exploiting the similarity between optimal control and tangential thrust control in the escape phase, backward integration produces a spiral trajectory with decreasing orbital radius. Combined with intermediate circular orbit velocity corrections, it progressively reduces the departure orbit from a large circular orbit to geostationary orbit.

## Application Value

The backward integration method solves the orbital problem by integrating from the terminal state backward in time, making it one of the common approaches for boundary-value problems.

## Related Concepts

- Asymptotic Solution
- [Perilune Database](/en/glossary/dynamics/perilune-database/)
- [Libration Point Orbit Cataloging](/en/glossary/orbits/libration-point-periodic-orbit/)
- [Floquet Modal Method](/en/glossary/dynamics/floquet-modal-method/)

## References

- Du et al. 2024
