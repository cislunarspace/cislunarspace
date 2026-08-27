---
title: Parameter Vector
description: 直接打靶优化中待求解的参数集合。两脉冲转移的参数向量为[θf, ΔVf, tf]，其中θf为终止时刻的极角、ΔVf为终止脉冲速度增量、tf为转移时间。三脉冲转移则增加中间脉冲参数ΔV1和中间时刻t1。参数向量唯一确定一条转移轨道。
keywords: 参数向量, Parameter Vector, 轨道动力学, 三体问题, 平动点
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-08-27
wechatShare:
  title: Parameter Vector
  desc: Cislunar space research frontiers, term definitions, and tools resources.
  image: /logo.png
og:
  title: "Parameter Vector Explained | Term Definition"
  description: 直接打靶优化中待求解的参数集合。两脉冲转移的参数向量为[θf, ΔVf, tf]，其中θf为终止时刻的极角、ΔVf为终止脉冲速度增量、tf为转移时间。三脉冲转移则增加中间脉冲参数ΔV1和中间时刻t1。参数向量唯一确定一条转移轨道。
  image: /logo.png
  type: article
twitter:
  card: summary_large_image
  title: "Parameter Vector Explained | Term Definition"
  description: 直接打靶优化中待求解的参数集合。两脉冲转移的参数向量为[θf, ΔVf, tf]，其中θf为终止时刻的极角、ΔVf为终止脉冲速度增量、tf为转移时间。三脉冲转移则增加中间脉冲参数ΔV1和中间时刻t1。参数向量唯一确定一条转移轨道。
  image: /logo.png
permalink: /en/glossary/dynamics/parameter-vector/
---

# Parameter Vector

> Author: [Tianjiang Shuo](https://blog.csdn.net/qq_33254264)
>
> Website: [https://cislunarspace.cn](https://cislunarspace.cn)

## Definition

The set of parameters to be solved in direct-shooting optimization. For two-impulse transfer, the parameter vector is [θf, ΔVf, tf], where θf is the polar angle at the final time, ΔVf is the velocity increment of the final impulse, and tf is the transfer time. For three-impulse transfer, intermediate impulse parameters ΔV1 and intermediate time t1 are added. The parameter vector uniquely determines a transfer trajectory.

## Application Value

In analyses involving the parameter vector, it can be applied to orbit propagation and maneuver design, helping engineers evaluate spacecraft motion characteristics across different dynamical environments. This concept provides the theoretical basis for cislunar mission design, with significant application value especially in libration point orbit design and low-energy transfer analysis. Using parameter vectors in trajectory optimization can effectively reduce mission fuel consumption and improve mission cost-effectiveness. In mission design, analyzing the parameter vector helps understand spacecraft behavior in complex gravitational fields and guides the formulation of station-keeping strategies.

## Related Concepts

- Differential Algebra
- Plume Impingement
- Momentum Integral

## References

- Transfer to Distant Retrograde Orbits Using Manifold Theory
