---
title: Hybrid Direct/Indirect Method
description: A trajectory optimization method that parameterizes control variables using necessary conditions from optimal control theory, then solves the resulting paramete
keywords: Hybrid Direct/Indirect Method
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hybrid Direct/Indirect Method
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Hybrid Direct/Indirect Method Explained | Term Definition
  description: A trajectory optimization method that parameterizes control variables using necessary conditions from optimal control theory, then solves the resulting paramete
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hybrid Direct/Indirect Method Explained | Term Definition
  description: A trajectory optimization method that parameterizes control variables using necessary conditions from optimal control theory, then solves the resulting paramete
  image: /logo.png
permalink: /en/glossary/dynamics/hybrid-direct-indirect-method/
---

# Hybrid Direct/Indirect Method

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A trajectory optimization method that parameterizes control variables using necessary conditions from optimal control theory, then solves the resulting parameter optimization via nonlinear programming. The indirect component uses costate equations to represent thrust steering angle histories accurately; the direct component handles terminal and path constraints via SQP, reducing the initial-guess sensitivity inherent in pure indirect methods.

## Application Value

This method combines the accuracy of indirect control with the robustness of direct methods, using SQP to handle constraints while maintaining precision in thrust steering angle representation.

## Related Concepts

- [Control Parametrization](/en/glossary/dynamics/control-parametrization/)
- [Thruster Modulator](/en/glossary/dynamics/thruster-modulator/)
- [Particle Swarm Optimizer](/en/glossary/dynamics/particle-swarm-optimizer/)
- [Impulse Interval](/en/glossary/dynamics/impulse-interval/)


## References

- Kluever and Pierson, 1995
