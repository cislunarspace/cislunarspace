---
title: Deviation Propagation Matrix
description: A matrix operator in linearized deviation propagation dynamics that maps the state deviation at one time instant to the next. Successive multiplication of propagation matrices across time segments yie
keywords: Deviation Propagation Matrix, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Deviation Propagation Matrix
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Deviation Propagation Matrix Explained | Term Definition
  description: A matrix operator in linearized deviation propagation dynamics that maps the state deviation at one time instant to the next. Successive multiplication of propagation matrices across time segments yie
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Deviation Propagation Matrix Explained | Term Definition
  description: A matrix operator in linearized deviation propagation dynamics that maps the state deviation at one time instant to the next. Successive multiplication of propagation matrices across time segments yie
  image: /logo.png
permalink: /en/glossary/dynamics/deviation-propagation-matrix/
---

# Deviation Propagation Matrix

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A matrix operator in linearized deviation propagation dynamics that maps the state deviation at one time instant to the next. Successive multiplication of propagation matrices across time segments yields the cumulative deviation from initial to terminal time. It forms the theoretical basis for traditional mid-course correction estimation but fails when deviations exceed the linear neighborhood, motivating the neural network approach for large-deviation scenarios.

## Application Value

偏差传播matrixwill状态偏差从某When 刻映射到下一When 刻, is 中途修正脉冲estimate of theoryfoundation. In 偏差超出线性邻域When need用神经网络替代.

## Related Concepts

- [Libration Point Orbit](/en/glossary/dynamics/libration-point-orbit/)
- [Invariant Manifold](/en/glossary/dynamics/invariant-manifold/)
- [Impulsive Maneuver](/en/glossary/dynamics/impulsive-maneuver/)
- [Halo Orbit](/en/glossary/dynamics/halo-orbit/)

## References

- 常笑宽 等 - 2026 - 基于神经网络的地月转移中途修正脉冲快速估计方法