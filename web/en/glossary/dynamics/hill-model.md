---
title: Hill Model
description: An approximate model of the restricted three-body problem, applicable when the spacecraft's range of motion is much smaller than the distance between the two...
keywords: Hill Model, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Hill Model
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Hill Model Explained | Term Definition
  description: An approximate model of the restricted three-body problem, applicable when the spacecraft's range of motion is much smaller than the distance between the two...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Hill Model Explained | Term Definition
  description: An approximate model of the restricted three-body problem, applicable when the spacecraft's range of motion is much smaller than the distance between the two...
  image: /logo.png
permalink: /en/glossary/dynamics/hill-model/
---

# Hill Model

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An approximate model of the restricted three-body problem, applicable when the spacecraft's range of motion is much smaller than the distance between the two primary bodies. Under the Hill model, the three-body Lambert problem can be solved via a two-layer iteration method that simultaneously corrects initial and final position vectors. Sukhanov and Prado proposed a Lambert solver with good convergence based on this model.

## Application Value

在轨道动力学数值仿真中，该方法用于提高计算精度和效率. 通过合理的离散化策略，可以在保证数值稳定性的同时大幅减少计算量.

## Related Concepts

- [惯性坐标系固定编队（Formation Fixed Relative to Inertial Frame）](/glossary/dynamics/formation-fixed-relative-to-inertial-frame/)
- [受摄Lambert问题（Perturbational Lambert Problem）](/glossary/dynamics/perturbational-lambert-problem/)
- [探测器定位（Probe Targeting）](/glossary/dynamics/probe-targeting/)
- [遗传算法（Genetic Algorithm）](/glossary/dynamics/genetic-algorithm/)

## References

- 基于三体Lambert算法的平动点交会轨道设计