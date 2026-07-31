---
title: Minimum-Fuel / Fuel-Optimal
description: "An optimal control strategy that maximizes the spacecraft's remaining mass after soft landing, equivalent to minimizing total fuel consumption while satisfying terminal velocity and position constraints."
keywords: "Minimum-Fuel, Fuel-Optimal, optimal control, soft landing, bang-bang control, Pontryagin's maximum principle, trajectory optimization"
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
wechatShare:
  title: Minimum-Fuel / Fuel-Optimal
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Minimum-Fuel / Fuel-Optimal Explained | Term Definition"
  description: "An optimal control strategy that maximizes the spacecraft's remaining mass after soft landing, equivalent to minimizing total fuel consumption while satisfying terminal velocity and position constraints."
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Minimum-Fuel / Fuel-Optimal Explained | Term Definition"
  description: "An optimal control strategy that maximizes the spacecraft's remaining mass after soft landing, equivalent to minimizing total fuel consumption while satisfying terminal velocity and position constraints."
  image: /logo.png
permalink: /en/glossary/dynamics/minimum-fuel-fuel-optimal/
---

# Minimum-Fuel / Fuel-Optimal

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

An optimal control strategy that maximizes the spacecraft's remaining mass after soft landing. The terminal performance index is taken as J=m(tf), i.e., maximizing terminal mass, which is equivalent to minimizing total fuel consumption. Unlike zero-fuel optimization, minimum-fuel optimization focuses on achieving the least fuel expenditure while satisfying terminal velocity and position constraints. By Pontryagin's maximum principle, the fuel-optimal control law takes the form of bang-bang engine control: when the switching function S(t) is positive, the engine operates at maximum thrust; when negative, it shuts off, producing a continuously braking optimal descent trajectory.

## Application Value

In low-thrust trajectory optimization, this propulsion approach achieves low-energy transfers through sustained acceleration over long durations, offering superior fuel economy compared to high-thrust systems.

## Related Concepts

- [Lunar Fly-by Method](/en/glossary/dynamics/lunar-fly-by-method/)
- [Reachability Set](/en/glossary/dynamics/reachability-set/)
- [Maximum-Energy Escape Trajectory](/en/glossary/dynamics/maximum-energy-escape-trajectory/)
- [Laplace Method](/en/glossary/dynamics/laplace-method/)

## References

- Zhou Jingyang and Zhou Di - 2007 - Precise Modeling and Optimal Trajectory Design for Lunar Lander Soft Landing
