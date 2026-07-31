---
title: Adaptation Coefficient, γ
description: A coefficient used in the adaptive weight strategy to scale the position weight, defined as α raised to the power of β, where α is the ratio of current relative distance to the target distance threshold, and β is an exponent related to relative velocity and remaining time. This coefficient causes MPC to produce smaller control effort when far from target and larger control effort when approaching.
keywords: Adaptation Coefficient, γ, orbit dynamics, three-body problem, libration point
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Adaptation Coefficient, γ
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Adaptation Coefficient Explained | Term Definition"
  description: A coefficient used in the adaptive weight strategy to scale the position weight, defined as α raised to the power of β, where α is the ratio of current relative distance to the target distance threshold, and β is an exponent related to relative velocity and remaining time.
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Adaptation Coefficient Explained | Term Definition"
  description: A coefficient used in the adaptive weight strategy to scale the position weight, defined as α raised to the power of β.
  image: /logo.png
permalink: /en/glossary/dynamics/adaptation-coefficient/
---

# Adaptation Coefficient, γ

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A coefficient used in the adaptive weight strategy to scale the position weight, defined as α raised to the power of β, where α is the ratio of current relative distance to the target distance threshold, and β is an exponent related to relative velocity and remaining time. This coefficient causes MPC to produce smaller control effort when far from target and larger control effort when approaching.

## Application Value

In spacecraft control system design, this method can be used to design attitude control laws or guidance laws, achieving precise control of spacecraft attitude and orbit. In practical missions, controllers based on this method can improve attitude stability and trajectory tracking accuracy.

## Related Concepts

- [Lunar Free-Return Orbit, LFO](/en/glossary/orbits/lunar-free-return-orbit/)
- [Constraint Conversion to Nonlinear Programming](/en/glossary/fundamentals/constraint-conversion-to-nonlinear-programming/)
- [Global Search](/en/glossary/fundamentals/global-search/)
- [Attitude Determination and Control System](/en/glossary/fundamentals/attitude-determination-and-control-system/)

## References

- Capannolo et al. 2023 - Model predictive control for formation reconfiguration exploiting quasi-periodic tori in the cislunar environment
