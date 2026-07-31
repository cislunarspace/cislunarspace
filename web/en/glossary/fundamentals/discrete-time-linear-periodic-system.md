---
title: Discrete-Time Linear Periodic System
description: The discretized form of a linear periodic system, with state equation x(k+1)=A(k)x+B(k)u and coefficient matrices satisfying A(k+T_L)=A(k), B(k+T_L)=B(k). The paper discretizes the continuous error...
keywords: Discrete-Time Linear Periodic System, DTLP
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Discrete-Time Linear Periodic System
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Discrete-Time Linear Periodic System Explained | Term Definition"
  description: The discretized form of a linear periodic system, with state equation x(k+1)=A(k)x+B(k)u and coefficient matrices satisfying A(k+T_L)=A(k), B(k+T_L)=B(k). The paper discretizes the continuous error...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Discrete-Time Linear Periodic System Explained | Term Definition"
  description: The discretized form of a linear periodic system, with state equation x(k+1)=A(k)x+B(k)u and coefficient matrices satisfying A(k+T_L)=A(k), B(k+T_L)=B(k). The paper discretizes the continuous error...
  image: /logo.png
permalink: /en/glossary/fundamentals/discrete-time-linear-periodic-system/
---
# Discrete-Time Linear Periodic System

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The discretized form of a linear periodic system, with state equation x(k+1)=A(k)x+B(k)u and coefficient matrices satisfying A(k+T_L)=A(k), B(k+T_L)=B(k). The paper discretizes the continuous error dynamics at the maneuver interval Delta tau, then applies a time-invariant transformation (augmenting all states and control inputs within one period into a single vector) to convert it to a discrete-time LTI system, enabling direct application of classical pole placement theorems.

## Application Value

This term has significant application value in cislunar space missions。In the orbital design phase, engineers use relevant theories for trajectory optimization；In navigation and orbit determination, it is used to improve measurement accuracy；In attitude control and orbit maintenance tasks, it ensures stable spacecraft operation。In practical applications, parameter optimization and algorithm adaptation can be combined with mission requirements to improve mission success rate and resource utilization efficiency。

## Related Concepts

- [Virtual Coplanar Takeoff](/en/glossary/fundamentals/virtual-coplanar-takeoff/)
- [Lunar Gravity Field Irregularity](/en/glossary/fundamentals/lunar-gravity-field-irregularity/)
- [LP100K Model](/en/glossary/fundamentals/lp100k-model/)

## References

- 徐明和徐世杰 - 2008 - Halo轨道维持的线性周期控制策略