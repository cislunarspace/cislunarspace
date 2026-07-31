---
title: Sub-Optimal Feedback Control
description: A near-optimal control strategy for multi-revolution low-thrust transfers. Synthesized from numerical solutions of minimum-time low-thrust transfer problems bet
keywords: Sub-Optimal Feedback Control, GNSS, 定位, 测距
author: 天疆说
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Sub-Optimal Feedback Control
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Sub-Optimal Feedback Control Explained | Term Definition"
  description: A near-optimal control strategy for multi-revolution low-thrust transfers. Synthesized from numerical solutions of minimum-time low-thrust transfer problems bet
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Sub-Optimal Feedback Control Explained | Term Definition"
  description: A near-optimal control strategy for multi-revolution low-thrust transfers. Synthesized from numerical solutions of minimum-time low-thrust transfer problems bet
  image: /logo.png
permalink: /en/glossary/navigation/SOFC/
---

# Sub-Optimal Feedback Control

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A near-optimal control strategy for multi-revolution low-thrust transfers. Synthesized from numerical solutions of minimum-time low-thrust transfer problems between non-coplanar elliptical and circular orbits in a central gravity field, it expresses optimal thrust orientation angles (pitch and yaw) as lookup-table interpolation functions of osculating orbital elements (pericenter radius, apocenter radius, inclination). Near-optimal in the unperturbed averaged problem, it is robust against perturbing accelerations and control errors. Applied here to low-thrust transfers to Earth-Moon libration points and halo-orbits, reducing trajectory computation to a one-parameter boundary value problem.

## Application Value

This technique is crucial for cislunar navigation and orbit determination, providing high-precision position and velocity information for spacecraft.

## Related Concepts

- [Autonomous Orbit Determination](/en/glossary/navigation/autonomous-orbit-determination/)
- [Precision Orbit Determination](/en/glossary/navigation/precision-orbit-determination/)
- [Inter-Satellite Link](/en/glossary/navigation/inter-satellite-link/)

## References

- Petukhov, 2011, Cosmic Res., 49(2), 121-130.
- Ivanyukhin and Petukhov, 2019, Cosmic Res., 57(5).
