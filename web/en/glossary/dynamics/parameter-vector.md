---
title: Parameter Vector
description: 直接打靶优化中待求解的参数集合。两脉冲转移的参数向量为[θf, ΔVf, tf]，其中θf为终止时刻的极角、ΔVf为终止脉冲速度增量、tf为转移时间。三脉冲转移则增加中间脉冲参数ΔV1和中间时刻t1。参数向量唯一确定一条转移轨道。
keywords: 参数向量, Parameter Vector, 轨道动力学, 三体问题, 平动点
author: Tianjiang Shuo
date: 2026-07-31
lastUpdated: 2026-07-31
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

在参数向量的分析中，可用于轨道传播和机动设计，帮助工程师评估航天器在不同动力学环境下的运动特性 该概念为地月空间任务设计提供了理论基础，尤其在平动点轨道设计和低能转移分析中具有重要应用价值 利用参数向量进行轨迹优化，可以有效降低任务燃料消耗，提高任务经济效益 在任务设计中，参数向量的分析有助于理解航天器在复杂引力场中的行为，指导轨道保持策略的制定

## Related Concepts

- 微分代数
- 羽流冲击
- 动量积分

## References

- Transfer to Distant Retrograde Orbits Using Manifold Theory
