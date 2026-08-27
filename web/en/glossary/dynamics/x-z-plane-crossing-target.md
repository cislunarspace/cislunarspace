---
title: x-z Plane Crossing Target
description: The core constraint formulation in the Optimal Continuation Strategy. Position or velocity components (e.g., x-velocity) at x-z plane crossings serve as targ...
keywords: x-z Plane Crossing Target, orbital dynamics, trajectory optimization, celestial mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: x-z Plane Crossing Target
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "x-z Plane Crossing Target Explained | Term Definition"
  description: The core constraint formulation in the Optimal Continuation Strategy. Position or velocity components (e.g., x-velocity) at x-z plane crossings serve as targ...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "x-z Plane Crossing Target Explained | Term Definition"
  description: The core constraint formulation in the Optimal Continuation Strategy. Position or velocity components (e.g., x-velocity) at x-z plane crossings serve as targ...
  image: /logo.png
permalink: /en/glossary/dynamics/x-z-plane-crossing-target/
---

# x-z Plane Crossing Target

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The core constraint formulation in the Optimal Continuation Strategy. Position or velocity components (e.g., x-velocity) at x-z plane crossings serve as target values, guiding the spacecraft back to the desired orbital state over 1-2 revolutions downstream. Constraint tolerances are typically on the order of cm/s. The key advantage is maintaining the orbit without a reference trajectory, using only successive crossing-point targets.

## Application Value

Plane-change maneuvers are among the most energy-intensive operations in orbit control, usually requiring carefully designed maneuver strategies to save propellant.

## Related Concepts

- Lyapunov Stability
- [Adams-Cowell Integrator](/en/glossary/dynamics/adams-cowell-integrator/)
- Hansen Coefficients
- [Control Curve, U_i](/en/glossary/dynamics/control-curve-ui/)

## References

- Folta et al., 2014, Acta Astronautica
