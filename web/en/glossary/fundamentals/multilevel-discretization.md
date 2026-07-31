---
title: Multilevel Discretization
description: "A hierarchical storage structure for precomputed variational data. The reference orbit's time span is divided into 2^m equal intervals, and cocycle conditions are applied upward from the finest level"
keywords: Multilevel Discretization, cislunar space, orbital mechanics
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Multilevel Discretization
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Multilevel Discretization Explained | Term Definition
  description: "A hierarchical storage structure for precomputed variational data. The reference orbit's time span is divided into 2^m equal intervals, and cocycle conditions are applied upward from the finest level"
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Multilevel Discretization Explained | Term Definition
  description: "A hierarchical storage structure for precomputed variational data. The reference orbit's time span is divided into 2^m equal intervals, and cocycle conditions are applied upward from the finest level"
  image: /logo.png
permalink: /en/glossary/fundamentals/multilevel-discretization/
---

# Multilevel Discretization

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A hierarchical storage structure for precomputed variational data. The reference orbit's time span is divided into 2^m equal intervals, and cocycle conditions are applied upward from the finest level (m) to form m+1 levels of STM and STT data. During the online phase, a binary search strategy composes data from coarsest to finest, requiring only O(m) matrix multiplications to obtain STTs for any target interval.

## Application Value

多层离散化through cocycle conditionwill预calculate of STM/STT 数据组织for 层次结构, In 线查询仅需 O(m) 次matrix乘法. In 实When 轨迹重建和偏差传播calculate中has 显著efficiency优势.

## Related Concepts

- [Orbital State Vector](/en/glossary/fundamentals/orbital-state-vector/)
- [Coordinate Time](/en/glossary/fundamentals/coordinate-time/)
- [Hill Frame](/en/glossary/fundamentals/hill-frame/)
- [Kepler's Laws](/en/glossary/fundamentals/keplers-laws/)

## References

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311