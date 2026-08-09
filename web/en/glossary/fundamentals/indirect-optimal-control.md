---
title: Indirect Optimal Control
description: "An approach to optimal control that solves a two-point boundary value problem of Hamilton's canonical equations. Based on Pontryagin's maximum principle, it ..."
keywords: Indirect Optimal Control, fundamentals
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Indirect Optimal Control
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Indirect Optimal Control Explained | Term Definition"
  description: "An approach to optimal control that solves a two-point boundary value problem of Hamilton's canonical equations. Based on Pontryagin's maximum principle, it ..."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Indirect Optimal Control Explained | Term Definition"
  description: "An approach to optimal control that solves a two-point boundary value problem of Hamilton's canonical equations. Based on Pontryagin's maximum principle, it ..."
  image: /logo.png
permalink: /en/glossary/fundamentals/indirect-optimal-control/
---

# Indirect Optimal Control

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)

> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An approach to optimal control that solves a two-point boundary value problem of Hamilton's canonical equations. Based on Pontryagin's maximum principle, it converts the optimal control problem into finding initial costate values. In this work, variational equations are applied to the indirect method, using precomputed STM and STT to avoid repeated numerical shooting.

## Application Value

在航天器姿态和轨道控制中，该方法用于实现高精度跟踪和稳定保持. 通过设计合适的控制律，可以有效抑制外部扰动的影响，保证航天器在复杂动力学环境中的可靠运行.

## Related Concepts

- [同步旋转坐标系（Synodic Rotating Frame）](/en/glossary/fundamentals/synodic-frame/)
- [网格搜索（Grid Search）](/glossary/fundamentals/grid-search/)
- Gauss求积公式（Gauss Quadrature Formula）
- 星座构型向量（Constellation Pattern Vector）

## References

- Kulik et al., 2023, JGCD, doi:10.2514/1.G007311
