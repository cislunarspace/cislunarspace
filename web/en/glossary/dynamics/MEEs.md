---
title: Modified Equinoctial Elements, MEEs
description: A non-singular set of orbital elements for low-thrust trajectory optimization, consisting of the semilatus rectum P, eccentricity vector components (ex, ey),...
keywords: Modified Equinoctial Elements, MEEs, orbital dynamics, control theory, nonlinear control, optimal control
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Modified Equinoctial Elements, MEEs
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Modified Equinoctial Elements, MEEs Explained | Term Definition
  description: A non-singular set of orbital elements for low-thrust trajectory optimization, consisting of the semilatus rectum P, eccentricity vector components (ex, ey),...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Modified Equinoctial Elements, MEEs Explained | Term Definition
  description: A non-singular set of orbital elements for low-thrust trajectory optimization, consisting of the semilatus rectum P, eccentricity vector components (ex, ey),...
  image: /logo.png
permalink: /en/glossary/dynamics/MEEs/
---

# Modified Equinoctial Elements, MEEs

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A non-singular set of orbital elements for low-thrust trajectory optimization, consisting of the semilatus rectum P, eccentricity vector components (ex, ey), inclination vector components (hx, hy), and true longitude L. Compared to classical Keplerian elements, MEEs are singularity-free for circular orbits (zero eccentricity) and equatorial orbits (zero inclination), and their transformation to Cartesian coordinates is smooth, making them superior for co-state equation derivation in optimal control.

## Application Value

Free from singularities at circular and equatorial orbits with smooth Cartesian transformations, they represent an ideal orbital element form for low-thrust trajectory optimization.

## Related Concepts

- [Adaptive Multi-phase Pseudospectral Convex Optimization](/en/glossary/dynamics/MPPCvx/)
- [Model Predictive Guidance and Control, MPC](/en/glossary/dynamics/MPC/)
- [Multi-objective Optimization Problem, MOOP](/en/glossary/dynamics/MOOP/)

## References

- Singh et al., 2021.
