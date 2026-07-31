---
title: Gymnasium
description: An open-source framework for reinforcement learning environments that defines standard interfaces for agent-environment interaction. A2PPO uses Gymnasium to bui
keywords: Gymnasium, dynamics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Gymnasium
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Gymnasium Explained | Term Definition
  description: An open-source framework for reinforcement learning environments that defines standard interfaces for agent-environment interaction. A2PPO uses Gymnasium to bui
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Gymnasium Explained | Term Definition
  description: An open-source framework for reinforcement learning environments that defines standard interfaces for agent-environment interaction. A2PPO uses Gymnasium to bui
  image: /logo.png
permalink: /en/glossary/dynamics/gymnasium/
---

# Gymnasium

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An open-source framework for reinforcement learning environments that defines standard interfaces for agent-environment interaction. A2PPO uses Gymnasium to build a custom low-thrust transfer environment, incorporating Earth-Moon CR3BP dynamics, spacecraft mass evolution, and nearest-neighbor queries to target orbit states (including lunar keep-out).

## Application Value

在设计地月转移方案时，利用该轨道特性可降低任务总速度增量需求。该模型是分析地月空间动力学、设计低能量转移轨道的基础工具。对于大质量航天器的长时间转移，该推进方式可大幅降低推进剂消耗。

## Related Concepts

- [Hill Sphere Radius](/en/glossary/dynamics/hill-sphere-radius/)
- [Pseudospectral Convex Optimization](/en/glossary/dynamics/pseudospectral-convex-optimization/)
- [Poincaré Map Representation](/en/glossary/dynamics/poincar-map-representation/)
- [Minimum Norm Targeting](/en/glossary/dynamics/minimum-norm-targeting/)

## References

- Ul Haq 等 - 2026 - Autonomous low-thrust trajectory optimization in cislunar space via attention-augmented reinforcement learning
