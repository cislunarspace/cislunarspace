---
title: Parallel Shooting Method
description: An improved variant of the shooting method for solving high-order fixed points. The method introduces multiple intermediate Poincaré sections between the initial and final sections, dividing the lo...
keywords: Parallel Shooting Method, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Parallel Shooting Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Parallel Shooting Method Explained | Term Definition"
  description: An improved variant of the shooting method for solving high-order fixed points. The method introduces multiple intermediate Poincaré sections between the initial and final sections, dividing the lo...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Parallel Shooting Method Explained | Term Definition"
  description: An improved variant of the shooting method for solving high-order fixed points. The method introduces multiple intermediate Poincaré sections between the initial and final sections, dividing the lo...
  image: /logo.png
permalink: /en/glossary/dynamics/parallel-shooting-method/
---

# Parallel Shooting Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An improved variant of the shooting method for solving high-order fixed points. The method introduces multiple intermediate Poincaré sections between the initial and final sections, dividing the long-period trajectory into segments with independent mesh grids and shooting on each section. Nodes on different sections are combined to form initial guess sets. The paper uses a 7th-order fixed point example with two intermediate sections (2nd and 4th crossings), noting that while computation time increases significantly, the method can detect fixed points of any order.

## Application Value

This term has application value in the design and analysis of cislunar space missions, supporting trajectory design, mission planning, and system optimization. Researchers can analyze its physical mechanisms and engineering applicability based on specific mission requirements to advance cislunar space exploration technology.

## Related Concepts

- [Elliptic Restricted Three-Body Problem](/en/glossary/dynamics/er3bp/)
- Dynamical Consistency
- Combined Covariance
- [Nekhorosev Estimates](/en/glossary/dynamics/nekhorosev-estimates/)

## References

- Ren 等 - 2011 - On the mechanisms of natural transport in the solar system
- Gómez et al. 2001, Chapter 7
- Gómez et al. 2001, Ch.1,3
- Gómez 等 - 2001
