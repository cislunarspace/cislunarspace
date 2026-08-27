---
title: Explicit Guidance Law
description: "A guidance method that computes control commands in real time from the spacecraft's current state using explicit functional expressions. Unlike nominal traje..."
keywords: Explicit Guidance Law
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: Explicit Guidance Law
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Explicit Guidance Law Explained | Term Definition"
  description: "A guidance method that computes control commands in real time from the spacecraft's current state using explicit functional expressions. Unlike nominal traje..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Explicit Guidance Law Explained | Term Definition"
  description: "A guidance method that computes control commands in real time from the spacecraft's current state using explicit functional expressions. Unlike nominal traje..."
  image: /logo.png
permalink: /en/glossary/dynamics/explicit-guidance-law/
---

# Explicit Guidance Law

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A guidance method that computes control commands in real time from the spacecraft's current state using explicit functional expressions. Unlike nominal trajectory guidance, which requires pre-stored optimal trajectories, explicit guidance demands low on-board computation and offers good real-time performance suitable for on-board processors. In powered descent, analytical expressions for acceleration and thrust direction angles can be derived via the Hamiltonian and co-state variables.

## Application Value

In spacecraft control system design, this method can be used to design attitude control laws or guidance laws, achieving precise control of spacecraft attitude and orbit. In practical missions, controllers based on this method improve attitude stability and trajectory tracking accuracy.

## Related Concepts

- Lunar Free-Return Orbit (LFO)
- Constraint Conversion to Nonlinear Programming
- [Global Search](/glossary/fundamentals/global-search/)
- Attitude Determination and Control System

## References

- Zhao Hongqian et al. - 2021 - Fast guidance for pinpoint lunar landing based on dynamic programming
