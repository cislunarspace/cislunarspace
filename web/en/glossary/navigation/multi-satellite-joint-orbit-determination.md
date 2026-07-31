---
title: Multi-Satellite Joint Orbit Determination
description: A method that simultaneously determines orbits and related parameters for multiple satellites using mutual inter-satellite observations. Compared with single-satellite orbit computation, joint orbit d...
keywords: Multi-Satellite Joint Orbit Determination
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Multi-Satellite Joint Orbit Determination
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: Multi-Satellite Joint Orbit Determination Explained | Term Definition
  description: A method that simultaneously determines orbits and related parameters for multiple satellites using mutual inter-satellite observations. Compared with single-satellite orbit computation, joint orbit d...
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: Multi-Satellite Joint Orbit Determination Explained | Term Definition
  description: A method that simultaneously determines orbits and related parameters for multiple satellites using mutual inter-satellite observations. Compared with single-satellite orbit computation, joint orbit d...
  image: /logo.png
permalink: /en/glossary/navigation/multi-satellite-joint-orbit-determination/
---
# Multi-Satellite Joint Orbit Determination

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

A method that simultaneously determines orbits and related parameters for multiple satellites using mutual inter-satellite observations. Compared with single-satellite orbit computation, joint orbit determination requires unified management of kinematic parameters, dynamical parameters, and measurement systematic error parameters across satellites. It integrates ephemeris and state transition matrices for each satellite, processes observation data sequentially with weighting to construct the normal equation, and iterates until convergence. Incorporating absolute constraints from high-precision self-positioning data of reference satellites significantly reduces the required tracking arc length.

## Application Value

在多星联合定轨的设计与分析中，可用于优化转移方案，减少燃料消耗 支撑自主导航系统的开发，提高轨道确定精度 用于分析航天器在复杂引力场中的运动特性。

## References

- 曹建峰 等, 2025, 地月空间探测器星间链路定轨能力分析
